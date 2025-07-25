import React, { useState } from 'react';
import '../styles/AchievementAndLessons.css';


function AchievementAndLessons() {
  const [achievements, setAchievements] = useState([
    "Completed Digital Diary Project",
    "Improved React and JavaScript skills"
  ]);

  const [lessons, setLessons] = useState([
    "Consistency is more important than intensity",
    "Reading documentation saves hours of confusion"
  ]);

  const [newAchievement, setNewAchievement] = useState('');
  const [newLesson, setNewLesson] = useState('');

  // Add achievement
  const handleAddAchievement = (e) => {
    e.preventDefault();
    if (newAchievement.trim() !== '') {
      setAchievements([...achievements, newAchievement.trim()]);
      setNewAchievement('');
    }
  };

  // Add lesson
  const handleAddLesson = (e) => {
    e.preventDefault();
    if (newLesson.trim() !== '') {
      setLessons([...lessons, newLesson.trim()]);
      setNewLesson('');
    }
  };

  // Delete achievement
  const handleDeleteAchievement = (index) => {
    const updated = [...achievements];
    updated.splice(index, 1);
    setAchievements(updated);
  };

  // Delete lesson
  const handleDeleteLesson = (index) => {
    const updated = [...lessons];
    updated.splice(index, 1);
    setLessons(updated);
  };

  return (
    <div className="section-container">
      <h2>🌟 Achievements This Year</h2>
      <ul className="styled-list">
        {achievements.map((item, index) => (
          <li key={index}>
            ✅ {item}
            <button className="delete-btn" onClick={() => handleDeleteAchievement(index)}>❌</button>
          </li>
        ))}
      </ul>
      <form onSubmit={handleAddAchievement} className="form-area">
        <input
          type="text"
          placeholder="Add new achievement"
          value={newAchievement}
          onChange={(e) => setNewAchievement(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      <h2>📘 Lessons Learned</h2>
      <ul className="styled-list">
        {lessons.map((item, index) => (
          <li key={index}>
            💡 {item}
            <button className="delete-btn" onClick={() => handleDeleteLesson(index)}>❌</button>
          </li>
        ))}
      </ul>
      <form onSubmit={handleAddLesson} className="form-area">
        <input
          type="text"
          placeholder="Add new lesson"
          value={newLesson}
          onChange={(e) => setNewLesson(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AchievementAndLessons;
