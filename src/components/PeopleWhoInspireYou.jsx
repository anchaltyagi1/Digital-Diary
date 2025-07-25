import React, { useState } from "react";
import "../styles/PeopleWhoInspireYou.css";

const PeopleWhoInspireYou = () => {
  const [inspirations, setInspirations] = useState(
    Array(6).fill({ name: "", quality: "" })
  );

  const handleChange = (index, field, value) => {
    const updated = [...inspirations];
    updated[index] = { ...updated[index], [field]: value };
    setInspirations(updated);
  };

  return (
    <div className="inspire-container">
      <h2 className="inspire-title">People who inspire you</h2>
      <p className="inspire-description">
        Who are the people that inspire you and what are the qualities that you admire the most in them?
      </p>

      <div className="tree">
        {inspirations.map((item, idx) => (
          <div key={idx} className="branch">
            <input
              type="text"
              className="leaf-input"
              placeholder="Name"
              value={item.name}
              onChange={(e) => handleChange(idx, "name", e.target.value)}
            />
            <input
              type="text"
              className="leaf-input"
              placeholder="Quality"
              value={item.quality}
              onChange={(e) => handleChange(idx, "quality", e.target.value)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PeopleWhoInspireYou;
