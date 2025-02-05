import React from 'react';
import '../src/Project.css';

export default function Project() {
    return (
        <div className="project-container">
            <div className="project-section centered">
                <h1>My Projects</h1>
                <p>I take pride in paying attention to the smallest details and ensuring that my work is both functional and visually compelling. With each project, I aim to bring my technical expertise and creativity to the forefront, creating innovative solutions that solve real-world problems.</p>
            </div>
            <div className="project-section">
                <img src="../assets/Game.png" alt="Online Multiplayer Game" className="project-image left" />
                <div>
                    <h2>Online Multiplayer Game</h2>
                    <p>Developed an online multiplayer game using Unity, C#, and Photon, focusing on creating an immersive gameplay experience. The game features real-time interactions between players and dynamic environments that enhance user engagement. It was an exciting opportunity to apply my knowledge in a dynamic, practical setting.</p>
                </div>
            </div>
            <div className="project-section">
                <div>
                    <h2>Machine Learning Predictive Tool</h2>
                    <p>Designed a machine learning predictive tool using TensorFlow that makes real-time predictions and improves decision-making processes. The tool was developed for Cemex to optimize their product testing using advanced algorithms. It was a challenging project that allowed me to explore the intersection of technology and business.</p>
                </div>
                <img src="../assets/Cemex.png" alt="Machine Learning Predictive Tool" className="project-image right" />
            </div>
            <div className="project-section">
                <div>
                    <h2>3D Simulation for Traffic Management</h2>
                    <p>Created a 3D simulation using Unity, Anaconda and Python for IBM to develop a traffic management system. The simulation focused on designing a realistic environment that mimics real-world traffic scenarios. It was an exciting project that required a deep understanding of systems design and simulation development.</p>
                </div>
                <img src="../assets/Traffic.png" alt="3D Simulation for Traffic Management" className="project-image left" />
            </div>
            <div className="project-section">
                <div>
                    <h2>Compiler</h2>
                    <p>I developed a compiler using Python and the PLY library, where I focused on designing grammar, creating regular expressions for token identification, and building the rules and virtual machine to process quadruples. This project gave me a deeper understanding of language processing and the intricacies of compiler design.</p>
                </div>
                <img src="../assets/Compi.png" alt="Compiler" className="project-image right" />
            </div>
        </div>
    );
}