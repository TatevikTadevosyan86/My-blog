import React from "react";
import './About.css';

const AboutMe = () => {
    return (
        <>
            <div className="top-section">
                <div className="profile-picture">
                    <img
                        src="/project-images/Tatevik.jpeg"
                        alt="Tatevik"
                        className="profile-img"
                    />
                </div>
                <div className="about-text">
                    <h1>About Me</h1>
                    <p>
                        Hello! My name is Tatevik. I am a junior web developer with a passion
                        for creating beautiful, responsive, and user-friendly web applications. 
                        I enjoy solving problems and continuously learning new technologies. 
                    </p>
                    <p>
                        I hold a Bachelor's degree in Economics and Management of Enterprises in
                        the Energetics Field and am now exploring the exciting world of web
                        development!
                    </p>
                </div>
            </div>
            <div className="bottom-section">
                <div className="skills-section">
                    <h3>Skills</h3>
                    <ul>
                        <li>Responsive Web Design</li>
                        <li>JavaScript (ES6+)</li>
                        <li>React.js and Frontend Development</li>
                        <li>HTML5 & CSS3</li>
                        <li>Basic Python Scripting</li>
                        <li>Basic C#</li>
                    </ul>
                </div>
                <div className="tools-section">
                    <h3>Tools</h3>
                    <ul>
                        <li>Visual Studio Code</li>
                        <li>Visual Studio</li>
                        <li>Figma (UI/UX Design)</li>
                        <li>Git & GitHub (Version Control)</li>
                        <li>SQL Server Management Studio (Database Management)</li>
                        <li>MongoDB (NoSQL Database)</li>
                    </ul>
                </div>
                <div className="language-section">
                    <h3>Languages</h3>
                    <ul>
                        <li>English (Advanced)</li>
                        <li>Swedish (Intermediate)</li>
                        <li>Russian (Fluent)</li>
                        <li>Armenian (Native)</li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default AboutMe;
