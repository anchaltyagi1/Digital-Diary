import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/Home.css'; // Optional: if you have custom styles

const DigitalDiary = () => {
  return (
    <>
      {/* Main Diary Layout */}
      <main className="container mt-5">
        <h2 className="text-center mb-4">Daily Digital Diary</h2>
        <div className="row g-3">

          {/* Column 1 */}
          <div className="col-md-4">
            <div className="card-box">
              <div className="section-title">Key Tasks</div>
              <ul className="list-group list-group-sm">
                <li className="list-group-item"><input type="checkbox" /> Book trip tickets</li>
                <li className="list-group-item"><input type="checkbox" /> Schedule meetings</li>
                <li className="list-group-item"><input type="checkbox" /> Complete assignments</li>
              </ul>
            </div>

            <div className="card-box">
              <div className="section-title">Priorities</div>
              <ul className="list-group">
                <li className="list-group-item"><input type="checkbox" /> Submit goals</li>
                <li className="list-group-item"><input type="checkbox" /> Prepare for exam</li>
              </ul>
            </div>

            <div className="card-box">
              <div className="section-title">Notes</div>
              <textarea className="form-control" rows="4" placeholder="Write here..."></textarea>
            </div>
          </div>

          {/* Column 2 */}
          <div className="col-md-4">
            <div className="card-box">
              <div className="section-title">Important Meetings</div>
              <ul className="list-group">
                <li className="list-group-item">10:00 AM – Standup</li>
                <li className="list-group-item">3:00 PM – Project Review</li>
              </ul>
            </div>

            <div className="card-box">
              <div className="section-title">Today I'm Grateful For</div>
              <textarea className="form-control" rows="3" placeholder="Gratitude notes..."></textarea>
            </div>

            <div className="card-box">
              <div className="section-title">Inspirations</div>
              <textarea className="form-control" rows="4" placeholder="People, quotes, thoughts..."></textarea>
            </div>
          </div>

          {/* Column 3 */}
          <div className="col-md-4">
            <div className="card-box">
              <div className="section-title">My 3 Main Goals</div>
              <ol>
                <li>Revise ML Notes</li>
                <li>Code 2 hours</li>
                <li>Stay offline</li>
              </ol>
            </div>

            <div className="card-box">
              <div className="section-title">Meals</div>
              <div className="meal-input mb-2"><strong>Breakfast:</strong> <input type="text" className="form-control" placeholder="e.g. Poha & tea" /></div>
              <div className="meal-input mb-2"><strong>Lunch:</strong> <input type="text" className="form-control" placeholder="e.g. Rice & dal" /></div>
              <div className="meal-input"><strong>Dinner:</strong> <input type="text" className="form-control" placeholder="e.g. Soup" /></div>
            </div>

            <div className="card-box">
              <div className="section-title">Water Intake</div>
              <div className="water-box">
                <span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span>
              </div>
            </div>

            <div className="card-box">
              <div className="section-title">Exercise</div>
              <input type="text" className="form-control" placeholder="e.g. Walked 6,000 steps" />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default DigitalDiary;
