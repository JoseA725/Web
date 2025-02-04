import React from 'react';
import '../src/Contact.css';

export default function Contact() {
    return (
        <div className="contact-container">
            <div className="contact-section centered">
                <h1>Contact Me</h1>
                <p>Phone: +1 437-665-6353</p>
                <p>Email: andreslozano00@hotmail.com</p>
                <a href="../src/documents/JoseAndres_CV.pdf" download className="download-button">Download Resume</a>
            </div>
        </div>
    );
}