import React from "react";

const About = () => {
    return (
        <div className="container">
            <h1>About Me</h1>
            <p>
                I am a Software Engineering student at Comsats University with a strong passion for solving problems through technology. My primary interest lies in Web Development and Artificial Intelligence and I am constantly seeking opportunities to learn, grow and contribute to innovative projects.
                Let's connect to share ideas!
            </p>
            <p>
                Technologies I work with:
                <ul>
                    <li>React.js</li>
                    <li>Node.js & Express</li>
                    <li>MongoDB & MySQL</li>
                </ul>
            </p>
            <a href="/contact" className="btn">Let's Connect</a>
        </div>
    );
};

export default About;
