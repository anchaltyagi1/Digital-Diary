// components/AuthModal.js
import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../services/firebase";
import "../styles/AuthModal.css";

const AuthModal = ({ onClose }) => {
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      alert(`Welcome ${result.user.displayName}`);
      onClose(); // close modal
    } catch (err) {
      console.error("Google login failed:", err);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <span className="close-btn" onClick={onClose}>&times;</span>
        <h2>Sign In / Sign Up</h2>
        <button className="google-btn" onClick={handleGoogleLogin}>
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default AuthModal;
