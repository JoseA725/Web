import React from 'react';
import '../src/Education.css';

export default function Education() {
    return (
        <div className="education-container">
            <div className="education-section centered">
                <h1>Education</h1>
            </div>
            <div className="education-section">
                <img src="../src/assets/Tec.webp" alt="Tecnológico de Monterrey" className="education-image left" />
                <div>
                    <h2>University of Tecnológico de Monterrey</h2>
                    <p>I earned a Bachelor's degree in Computer Science and Technology with a focus on Game Design and Development at Tecnológico de Monterrey. Throughout my studies, I concentrated on key areas such as data structures, algorithms, and game development, achieving a GPA of 94/100.</p>
                </div>
            </div>
            <div className="education-section">
                <div>
                    <h2>Centennial College</h2>
                    <p>I am currently pursuing an Advanced Diploma in Game Programming at Centennial College, where I am deepening my skills in programming, game development, and emerging technologies. This program allows me to strengthen my technical and practical expertise in creating high-quality interactive experiences.</p>
                </div>
                <img src="../src/assets/Centennial.jpg" alt="Centennial College" className="education-image right" />
            </div>
        </div>
    );
}