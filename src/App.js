// import "./styles.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddFood from "./AddFood";
import FoodList from "./FoodList";
import Navbar from "./Navbar";
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<AddFood />} />
        <Route path="/list" element={<FoodList />} />
      </Routes>
    </Router>
  );
};

export default App;
