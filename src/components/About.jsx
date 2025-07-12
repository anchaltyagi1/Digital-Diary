
import react from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Home.css';

import d1 from "../assets/diary1.jpg"
import d2 from "../assets/diary2.jpg"
import d3 from "../assets/diary3.jpg"

const About=()=>{
    return(
        <>
      <main>
        <section>
          <div id="main-heading" className="text-center my-4">
            <h2 id="title">Digital Diary</h2>
            <p>A Diary for Your Mind, A Home for Your Memories.</p>
          </div>
        </section>

        {/* Carousel */}
        <div id="carouselExample" className="carousel slide carousel-fade" data-bs-ride="carousel">
          <div className="carousel-inner rounded shadow-sm">
            <div className="carousel-item active">
              <img src={d1} className="d-block w-100" alt="diary 1" />
            </div>
            <div className="carousel-item">
              <img src={d2} className="d-block w-100" alt="diary 2" />
            </div>
            <div className="carousel-item">
              <img src={d3} className="d-block w-100" alt="diary 3" />
            </div>
          </div>

          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>


        {/* Cards Section */}
        <section className="about d-flex justify-content-around flex-wrap mt-4 gap-3 px-4">
          <div className="card" style={{ width: '18rem' }}>
            <img src="https://via.placeholder.com/300x180" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">What is My Digital Diary?</h5>
              <p className="card-text">
                My Digital Diary is your personal online space to express thoughts,
                capture memories, and set meaningful goals. It provides a safe,
                organized, and user-friendly environment for your everyday reflections.
              </p>
            </div>
          </div>

          <div className="card" style={{ width: '18rem' }}>
            <img src="https://via.placeholder.com/300x180" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Why Use It?</h5>
              <p className="card-text">
                Whether you're journaling, planning, or reflecting, this diary allows you
                to keep everything in one place — securely and beautifully presented.
                Ideal for students, creatives, and writers.
              </p>
            </div>
          </div>

          <div className="card" style={{ width: '18rem' }}>
            <img src="https://via.placeholder.com/300x180" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Key Features</h5>
              <p className="card-text">
                ✦ Daily notes & entries<br />
                ✦ Goal tracking<br />
                ✦ Image storage<br />
                ✦ Clean interface & accessibility
              </p>
            </div>
          </div>
        </section>
      </main>
        </>
    )
    
}
export default About;