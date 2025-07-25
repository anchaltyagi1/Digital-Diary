import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Home.css";
import DatesToRemember from "./DatesToRemember"
import AchievementAndLessons from "./AchievementAndLessons"
import VisionStatements from"./VisionStatements"
import LetterFromFuture from "./LetterFromFuture";
import PeopleWhoInspireYou from "./PeopleWhoInspireYou";


const colors = [
  "rgba(255, 205, 211, 0.6)",
  "rgba(200, 230, 201, 0.6)",
  "rgba(187, 222, 251, 0.6)",
  "rgba(255, 249, 196, 0.6)",
  "rgba(194, 187, 219, 0.6)",
  "rgba(226, 102, 138, 0.6)",
  "rgba(154, 163, 101, 0.6)",
  "rgba(255, 224, 178, 0.6)",
];

const CardBox = ({ title, index, children }) => {
  const backgroundColor = colors[index % colors.length];

  const glassStyle = {
    backgroundColor,
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
    border: "2px solid rgba(255, 255, 255, 0.2)",
    borderRadius: "12px",
    padding: "1rem",
    marginBottom: "1rem",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.3)",
    color: "black",
  };

  return (
    <div className="card-box" style={glassStyle}>
      <div className="section-title mb-2 fw-semibold">{title}</div>
      {children}
    </div>
  );
};

const DigitalDiary = () => {
  return (
    <main className="container mt-5">
      <h2 className="text-center text-white mb-4">Daily Digital Diary</h2>
      <div className="row g-3">

        {/* Column 1 */}
        <div className="col-md-4">
          <CardBox title="Key Tasks" index={0}>
            <ul className="list-group list-group-flush">
              <li className="list-group-item bg-transparent text-white"><input type="checkbox" /> Book trip tickets</li>
              <li className="list-group-item bg-transparent text-white"><input type="checkbox" /> Schedule meetings</li>
              <li className="list-group-item bg-transparent text-white"><input type="checkbox" /> Complete assignments</li>
            </ul>
          </CardBox>

          <CardBox title="Priorities" index={1}>
            <ul className="list-group list-group-flush">
              <li className="list-group-item bg-transparent text-white"><input type="checkbox" /> Submit goals</li>
              <li className="list-group-item bg-transparent text-white"><input type="checkbox" /> Prepare for exam</li>
            </ul>
          </CardBox>

          <CardBox title="Notes" index={2}>
            <textarea className="form-control bg-transparent text-white border-white" rows="4" placeholder="Write here..."></textarea>
          </CardBox>
        </div>

        {/* Column 2 */}
        <div className="col-md-4">
          <CardBox title="Important Meetings" index={3}>
            <ul className="list-group list-group-flush">
              <li className="list-group-item bg-transparent text-white">10:00 AM – Standup</li>
              <li className="list-group-item bg-transparent text-white">3:00 PM – Project Review</li>
            </ul>
          </CardBox>

          <CardBox title="Today I'm Grateful For" index={4}>
            <textarea className="form-control bg-transparent text-white border-white" rows="3" placeholder="Gratitude notes..."></textarea>
          </CardBox>

          <CardBox title="Inspirations" index={5}>
            <textarea className="form-control bg-transparent text-white border-white" rows="4" placeholder="People, quotes, thoughts..."></textarea>
          </CardBox>
        </div>

        {/* Column 3 */}
        <div className="col-md-4">
          <CardBox title="My 3 Main Goals" index={6}>
            <ol>
              <li>Revise ML Notes</li>
              <li>Code 2 hours</li>
              <li>Stay offline</li>
            </ol>
          </CardBox>

          <CardBox title="Meals" index={7}>
            <div className="mb-2"><strong>Breakfast:</strong> <input type="text" className="form-control bg-transparent text-white border-white" placeholder="e.g. Poha & tea" /></div>
            <div className="mb-2"><strong>Lunch:</strong> <input type="text" className="form-control bg-transparent text-white border-white" placeholder="e.g. Rice & dal" /></div>
            <div><strong>Dinner:</strong> <input type="text" className="form-control bg-transparent text-white border-white" placeholder="e.g. Soup" /></div>
          </CardBox>

          <CardBox title="Water Intake" index={8}>
            <div className="d-flex gap-2 flex-wrap">
              {Array.from({ length: 8 }).map((_, i) => (
                <span key={i} style={{
                  width: "20px",
                  height: "20px",
                  backgroundColor: "#ffffff55",
                  borderRadius: "50%",
                  display: "inline-block"
                }}></span>
              ))}
            </div>
          </CardBox>

          <CardBox title="Exercise" index={9}>
            <input type="text" className="form-control bg-transparent text-white border-white" placeholder="e.g. Walked 6,000 steps" />
          </CardBox>
        </div>
      </div>
          <DatesToRemember/>
          <AchievementAndLessons/>
          <VisionStatements/>
          <LetterFromFuture/>
          <PeopleWhoInspireYou/>
    </main>
  );
};

export default DigitalDiary;
