import React from "react";
import "./Home.css";

const Home = () =>{
    return (
        <div className="home-page">
            <div className="hero-content">
                <img 
                    src="./project-images/Home.jpg"
                    alt="Tatevik"
                    className="profile-picture"
                />
                <h1>Hello, I'm Tatevik!</h1>
                <p>I'm a passionate junior web developer specializing in React, JavaScript,
                and backend development.</p>

            </div>
            <div className="actions">
                <a href="CV.pdf" download className="button">
                Download My Resume
                </a>
                <a href="/contact" className="button">
                Contact Me
                </a>

            </div>
        </div>
    )};
export default Home;