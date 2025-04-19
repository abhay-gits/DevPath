import React from "react";
import logo from "../assets/icon.svg"
const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white px-6 py-5">
      {/* Header */}
      <header className="max-w-6xl mx-auto flex justify-between items-center mb-20">
        <div className="flex items-center space-x-4">
        <img src={logo} width={30}/>
        <h1 className="text-3xl font-bold">DevPath</h1>
        </div>
        <nav className="space-x-4">
 
        </nav>
      </header>

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-6">
          Master Your Tech Interviews with DevPath
        </h2>
        <p className="text-gray-300 mb-8 text-lg">
          Your ultimate destination for tech interview preparation. Get ready to ace your interviews with confidence.
        </p>
        <a
          href="/explore"
          className="inline-block bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-xl font-semibold text-white shadow-[0_0_100px_blue] "
        >
          Explore
        </a>
      </section>

      {/* Footer */}
      <footer className="mt-24 text-center text-gray-500 text-sm">
        © 2025 DevPath. All rights reserved.
      </footer>
    </div>
  );
};

export default LandingPage;
