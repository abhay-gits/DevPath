import React from "react";

const ExplorePage: React.FC = () => {
  const programming = ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"];
  const projects = ["Frontend", "Backend", "Fullstack", "Mobile"];
  const fundamentals = ["Operating-System", "Networking", "Database",];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white px-6 py-5">
      <header className="max-w-6xl mx-auto flex justify-between items-center mb-12">
        <h1 className="text-3xl font-bold">Explore</h1>
        <nav className="space-x-4">
          <a href="/" className="text-gray-300 hover:text-white transition">
            Home
          </a>
        </nav>
      </header>
      {/* Interview Questions */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Interview Questions
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {programming.map((topic) => (
            <a
              href={`/${topic}`}
              key={topic}
              className="bg-gray-800 opacity-75 hover:bg-gray-700  py-3 rounded-xl text-center cursor-pointer transition border border-gray-600 "
            >
              <h3>{topic}</h3>
            </a>
          ))}
        </div>
      </section>
      {/* Computer Fundamentals */}
      <section className="max-w-4xl mx-auto mt-8 ">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Computer Fundamentals
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 ">
          {fundamentals.map((topic) => (
            <a
              href={`/${topic}`}
              key={topic}
              className="bg-gray-800 opacity-75 hover:bg-gray-700  py-3 rounded-xl text-center cursor-pointer transition border border-gray-600 "
            >
              <h3>{topic}</h3>
            </a>
          ))}
        </div>
      </section>
      {/* Projects */}
      <section className="max-w-4xl mx-auto mt-8">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Projects
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {projects.map((project) => (
            <a
              href={`projects/${project}`}
              key={project}
              className="bg-gray-800 opacity-75 hover:bg-gray-700  py-3 rounded-xl text-center cursor-pointer transition border border-gray-600 "
            >
              <h3>{project}</h3>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ExplorePage;
