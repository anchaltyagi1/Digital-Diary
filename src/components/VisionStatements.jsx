import React, { useState } from "react";
import "../styles/VisionStatements.css"; // ✅ Make sure this path matches your project structure

const VisionStatements = () => {
  const [formData, setFormData] = useState({
    values: '',
    skills: '',
    interests: '',
    statement: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="vision-card">
      <h2 className="section-title">Vision Statement</h2>
      <p className="description">
        A vision statement describes your personal values, strengths, and goals. 
        It is a tool that will help guide your actions through your life.
      </p>

      <div className="vision-grid">
        <div>
          <label className="section-label">My Values</label>
          <textarea
            name="values"
            value={formData.values}
            onChange={handleChange}
            placeholder="Write your values here..."
          />
        </div>

        <div>
          <label className="section-label">My Skills</label>
          <textarea
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            placeholder="Write your skills here..."
          />
        </div>

        <div>
          <label className="section-label">My Interests</label>
          <textarea
            name="interests"
            value={formData.interests}
            onChange={handleChange}
            placeholder="Write your interests here..."
          />
        </div>
      </div>

      <div className="vision-statement">
        <label className="section-label">Write your vision statement here</label>
        <textarea
          name="statement"
          value={formData.statement}
          onChange={handleChange}
          placeholder="What do you want to do? Why? How will you do it?"
          rows="5"
        />
      </div>

      <p className="vision-hint">
        Consider your values, strengths, interests and skills.<br />
        <strong>What do you want to do?</strong><br />
        <strong>Why do you want this?</strong><br />
        <strong>How will you do this?</strong>
      </p>
    </div>
  );
};

export default VisionStatements;
