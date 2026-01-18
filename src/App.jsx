import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HWebMadaHome from "./home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HWebMadaHome />} />
        {/* Raha mila route hafa: */}
        {/* <Route path="/home" element={<HWebMadaHome />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
