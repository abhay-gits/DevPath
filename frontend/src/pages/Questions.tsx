import axios from "axios";
import { useEffect, useState } from "react";

const Questions = () => {
  const topic = window.location.pathname.split("/").pop();
  interface Question {
    question: string;
    answer: string;
    topic: string;
  }

  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchQuestions(page);
  }, [page]);

  const fetchQuestions = async (page: number) => {
    try {
      setLoading(true);
      const response = await axios.get(`/api/questions/${topic}?page=${page}`);
      setQuestions((prev) => [...prev, ...response.data]);
    } catch (error) {
      console.error("Error fetching questions:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;
    if (scrollTop + clientHeight >= scrollHeight - 5 && !loading) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <div
      onScroll={handleScroll}
      className="h-screen bg-black text-white px-6 py-5 overflow-y-auto"
    >
      <header className="max-w-6xl mx-auto flex justify-between items-center mb-12">
        <h1 className="text-3xl font-bold">Questions</h1>
        <nav className="space-x-4">
          <a href="/" className="hover:underline">
            Home
          </a>
          <a href="/explore" className="hover:underline">
            Explore
          </a>
        </nav>
      </header>

      <section className="max-w-4xl mx-auto space-y-6">
        {questions.map((q, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-xl">
            <h2 className="text-xl font-semibold mb-2">
              {`${index + 1}. `}
              {q.question}
            </h2>
            <p className="text-gray-300 mb-1">{q.answer}</p>
          </div>
        ))}
      </section>
      {loading && 
      <div >
        <svg
          className="animate-spin h-5 w-5 text-white mx-auto mt-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 1 1 16 0A8 8 0 0 1 4 12z"
          ></path>
        </svg>
      <p className="text-center text-gray-500">Loading more questions...</p>
      
    </div>}
      { !loading && <p className="text-center text-gray-500 mt-4">No more questions to load.</p>}
  </div>
  );
}

export default Questions;
