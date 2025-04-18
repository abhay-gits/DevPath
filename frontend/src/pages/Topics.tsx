import React from "react";

const TopicsPage: React.FC = () => {
  const topics = ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white px-6 py-5">
      <header className="max-w-6xl mx-auto flex justify-between items-center mb-12">
        <h1 className="text-3xl font-bold">Topics</h1>
        <nav className="space-x-4">
          <a href="/" className="hover:underline">Home</a>
        </nav>
      </header>

      <section className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">Explore Topics</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {topics.map((topic) => (
            <a href={`topics/${topic}`}
              key={topic}
              className="bg-gray-800 hover:bg-gray-700 p-6 rounded-xl text-center cursor-pointer transition"
            >
              <h3 className="text-xl font-semibold">{topic}</h3>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TopicsPage;
