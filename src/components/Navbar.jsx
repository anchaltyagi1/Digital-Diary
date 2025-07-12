import React from "react"
import "../styles/Navbar.css"
import deardiarylogo from "../assets/deardiary1.svg";

const Navbar = ({onAuthClick}) => {
    return(
        <div>
          <nav>
              <ul>
              <img src={deardiarylogo}></img>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About Me</a></li>
                <li><a href="#">Daily Notes</a></li>
                <li><a href="#">Pictures</a></li>
                <li><a href="#">Goals</a></li>
              </ul>
              <div className="auth-buttons">
                  <button onClick={onAuthClick}>Sign In</button>
                  <button onClick={onAuthClick}>Sign Up</button>
              </div>
        </nav>
        </div>
    )
}
export default Navbar