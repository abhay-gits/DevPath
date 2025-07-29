import React from "react";
import logo from "../assets/icon2.svg";
import Footer from "../components/Home/Footer.tsx";
import Features from "../components/Home/Features.tsx";

const LandingPage: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black">
      <div className="min-h-screen text-white py-3 px-5 mb-19">
        {/* Header */}
        <header className="mx-auto flex justify-between items-center mb-20">
          <div className="flex items-center space-x-4">
            <img src={logo} width={27} />
            <h1 className="text-2xl font-bold">DevPath</h1>
          </div>
            <div className="flex items-center space-x-4">
          <nav className="space-x-4 md:flex hidden">
            <a href="/explore" className="text-gray-300 hover:text-white transition">
              Explore
            </a>
            <a href="/explore" className="text-gray-300 hover:text-white transition">
              Community
            </a>
          </nav>
            <div className="text-[.9rem] gap-1.5 hidden">
            <button className="text-white bg-blue-600 p-1 px-2 rounded font-mono hover:bg-blue-800 hover:cursor-pointer transition">Sign Up</button>
            <button className="text-white bg-blue-400 p-1 px-2 rounded font-mono hover:bg-blue-800 hover:cursor-pointer transition">Log In</button>
            </div>

            </div>
        </header>

        {/* Hero Section */}
        <section className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6">
            Master Your Tech Interviews with DevPath
          </h2>
          <p className="text-gray-300 mb-10 text-lg">
            Your ultimate destination for tech interview preparation. Get ready
            to ace your interviews with confidence.
          </p>
          <a
            href="/explore"
            className="inline-block bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-xl font-semibold text-white shadow-[0_0_100px_blue] "
          >
            Explore
          </a>
        </section>
      </div>
      {/* Features Section */}
      <div className="bg-white py-8">
        <Features />
      </div>
      {/* Footer */}
      <div>
      <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
