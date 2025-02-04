import React from 'react';
import '../src/About.css';

export default function About() {
    return (
        <div className="about-container">
            <div className="about-section centered">
                <h1>More About Me</h1>
                <p>I am a highly motivated and dedicated game developer with a strong foundation in computer science and technology. My experience spans across game programming, software development, and machine learning. With a focus on game development, I am proficient in Python, C++, C#, and various technologies such as Unity and Django. I am passionate about creating innovative solutions and working on challenging projects that push the boundaries of technology and gaming.</p>
            </div>
            <div className="about-section">
                <img src="../src/assets/GameDefault.png" alt="Game Development" className="about-image left" />
                <div>
                    <h2>Game Development</h2>
                    <p>I have developed online multiplayer games using Unity, C#, and Photon, focusing on creating immersive gameplay experiences. My goal is to create dynamic and engaging environments that enhance user interaction and contribute to the growing gaming industry.</p>
                </div>
            </div>
            <div className="about-section">
                <div>
                    <h2>Machine Learning and AI</h2>
                    <p>I have experience building machine learning models using frameworks such as TensorFlow, developing applications that make real-time predictions and improve decision-making processes. My work includes a predictive tool for Cemex that helps optimize their product testing using advanced algorithms.</p>
                </div>
                <img src="../src/assets/IA_Default.jpg" alt="AI" className="about-image right" />
            </div>
            <div className="about-section">
                <div>
                    <h2>Simulation and Systems Design</h2>
                    <p>I have worked on 3D simulations using Unity and Python, developing systems like a traffic management simulation for IBM. I design complex systems with an emphasis on functionality and realism to provide valuable insights for research and development.</p>
                </div>
                <img src="../src/assets/Unity-logo.avif" alt="Simulation" className="about-image left" />
            </div>
        </div>
    );
}