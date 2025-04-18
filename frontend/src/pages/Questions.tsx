import axios from "axios";
import { useEffect, useState } from "react";

const Questions = () => {
  interface Question {
    question: string;
    answer: string;
    category: string;
    topic: string;
    options?: string[];
  }

  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);
  const topic = window.location.pathname.split("/").pop();

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const response = await axios.get(`/api/questions/${topic}`);
      setQuestions(response.data);
    } catch (error) {
      console.error("Error fetching questions:", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-black text-white px-6 py-5">
      <header className="max-w-6xl mx-auto flex justify-between items-center mb-12">
        <h1 className="text-3xl font-bold">Questions</h1>
        <nav className="space-x-4">
          <a href="/" className="hover:underline">
            Home
          </a>
          <a href="/topics" className="hover:underline">
            Topics
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
    </div>
  );
};

export default Questions;
