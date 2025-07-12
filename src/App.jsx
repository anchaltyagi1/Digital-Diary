// App.js
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import AuthModal from "./components/AuthModal"; // Make sure it's correctly named
import Navbar from './components/Navbar'

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {showModal && <AuthModal onClose={() => setShowModal(false)} />}
        <Navbar onAuthClick={() => setShowModal(true)} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
