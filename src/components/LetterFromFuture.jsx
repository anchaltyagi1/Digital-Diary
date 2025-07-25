import React, { useState } from "react";
import "../styles/LetterFromFuture.css"; // Make sure this path is correct

const LetterFromFuture = () => {
  const [letter, setLetter] = useState("");

  const handleChange = (e) => {
    setLetter(e.target.value);
  };

  return (
    <div className="letter-card">
      <h2 className="section-title">Letter from the future</h2>
      <p className="description">
        Imagine you are 100 years old and you have lived your dream life.
        Write a letter to the you of today from you of the future.
        Describe everything you have accomplished in your life and explain how these accomplishments make you feel.
      </p>

      <textarea
        className="letter-textarea"
        value={letter}
        onChange={handleChange}
        placeholder="Start your letter here..."
        rows={10}
      />

      <div className="envelope-illustration">
        <div className="flap"></div>
        <div className="body"></div>
      </div>
    </div>
  );
};

export default LetterFromFuture;
