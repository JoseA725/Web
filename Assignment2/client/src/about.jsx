/* File name: services.css */
/* Student’s Name: José Andrés Lozano Alanís */
/* StudentID: 301498458 */
/* Date: 4/February/2025 */
import React from 'react';
import '../src/About.css';

export default function About() {
    return (
        <div className="about-container">
            <div className="about-section centered">
                <h1>About Me</h1>
                <span className="name">José Andrés Lozano Alanís</span>
                <span className="subtitle">Game Developer & Programmer</span>
                <img src="../assets/Linkedin_Photo.jpg" alt="Profile" className="profile-photo" />
                <p>I am a highly motivated and dedicated game developer with a strong foundation in computer science and technology. My experience spans across game programming, software development, and machine learning. With a focus on game development, I am proficient in Python, C++, C#, and various technologies such as Unity and Django. I am passionate about creating innovative solutions and working on challenging projects that push the boundaries of technology and gaming.</p>
                <a href="../documents/JoseAndres_CV.pdf" target="_blank" rel="noopener noreferrer" className="preview-button">Preview Resume</a>
                <a href="../documents/JoseAndres_CV.pdf" download className="download-button">Download Resume</a>
            </div>
        </div>
    );
}