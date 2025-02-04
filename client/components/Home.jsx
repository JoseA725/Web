import React from 'react';
import '../src/Home.css';

export default function Home() {
    return (
        <div className="home-container">
            <div className="home-content">
            <div className="profile">
                    <img src="../src/assets/Linkedin_Photo.jpg" alt="Profile" className="profile-photo" />
                    <h1>
                        Hi, I am José Andrés Lozano
                        <br />
                        <span className="subtitle">Game Developer & Programmer</span>
                    </h1>
                </div>
                <p className="intro-paragraph">
                    I am a passionate game developer and programmer with experience in creating innovative, interactive, and immersive gaming experiences.
                    From designing complex systems to building multiplayer environments, I specialize in combining creativity with technical expertise to bring ideas to life.
                </p>
            </div>
        </div>
    );
}
