
import react from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

const About=()=>{
    return(
        <>
        <header>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="#">About Me</a></li>
            <li><a href="#">Daily Notes</a></li>
            <li><a href="#">Pictures</a></li>
            <li><a href="#">Goals</a></li>
          </ul>
          <div className="auth-buttons">
            <a href="#">Sign In</a>
            <a href="#">Sign Up</a>
          </div>
        </nav>
      </header>

      <main>
        <section>
          <div id="main-heading" className="text-center my-4">
            <h2 id="title">Digital Diary</h2>
            <p>A Diary for Your Mind, A Home for Your Memories.</p>
          </div>
        </section>

        {/* Carousel */}
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://plus.unsplash.com/premium_photo-1684444605542-93725082d214?w=600&auto=format&fit=crop&q=60"
                className="d-block w-100"
                alt="diary writing"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://via.placeholder.com/600x300"
                className="d-block w-100"
                alt="placeholder"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://via.placeholder.com/600x300"
                className="d-block w-100"
                alt="placeholder"
              />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
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