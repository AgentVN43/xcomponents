import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Demo from "./pages/Demo";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />{" "}
      {/* Replace with your home component */}
      <Route path="/demo" element={<Demo />} />
      {/* Add more routes as needed */}
    </Routes>
  );
}
