import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Questions from "./pages/Questions";

const App: React.FC = () => {
  
  axios.defaults.baseURL = "http://localhost:3000"; 
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/:topic" element={<Questions />} />
      </Routes>
    </Router>
  );
};

export default App;
