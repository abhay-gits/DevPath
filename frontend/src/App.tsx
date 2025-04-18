import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/Home";
import TopicsPage from "./pages/Topics";
import Questions from "./pages/Questions";

const App: React.FC = () => {
  
  axios.defaults.baseURL = "http://localhost:3000"; 
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/topics" element={<TopicsPage />} />
        <Route path="/topics/:topic" element={<Questions />} />
      </Routes>
    </Router>
  );
};

export default App;
