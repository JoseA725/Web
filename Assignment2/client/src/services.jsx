/* File name: services.css */
/* Student’s Name: José Andrés Lozano Alanís */
/* StudentID: 301498458 */
/* Date: 4/February/2025 */
import React from 'react';
import '../src/Services.css';

export default function Services() {
    return (
        <div className="services-container">
            <div className="services-section centered">
                <h1>Services</h1>
            </div>
            <div className="services-section">
                <img src="/assets/Unity-logo.avif" alt="Unity" className="services-image left" />
                <div>
                    <h2>Game Programming</h2>
                    <p>With a background in both Game Programming and Game Design, I offer the development of interactive, immersive, and engaging games. I specialize in using Unity, C#, and Python, with a solid understanding of game mechanics, multiplayer integration, and game optimization.</p>
                </div>
            </div>
            <div className="services-section">
                <div>
                    <h2>AI & Machine Learning Solutions</h2>
                    <p>I specialize in creating AI-driven applications using frameworks like TensorFlow. From building predictive models to data-driven insights, I help businesses enhance decision-making processes, as demonstrated in my work with Cemex on AI prediction tools.</p>
                </div>
                <img src="/assets/IA_Default.jpg" alt="IA" className="services-image right" />
            </div>
            <div className="services-section">
                <div>
                    <h2>Custom Web Development</h2>
                    <p>Using Django, PHP, and MySQL, I offer custom-built web applications tailored to your specific needs. Whether it’s creating an interactive website or a full-featured application, I ensure optimal performance, security, and user experience.</p>
                </div>
                <img src="/assets/Web.jpg" alt="Web" className="services-image left" />
            </div>
            <div className="services-section">
                <div>
                    <h2>Mobile App Development</h2>
                    <p>With experience in Android Studio and Kotlin, I offer mobile app development services, focusing on user-friendly design, smooth performance, and real-time features, ensuring your app works seamlessly on Android devices.</p>
                </div>
                <img src="/assets/Android.png" alt="Android" className="services-image right" />
            </div>
            <div className="services-section">
                <div>
                    <h2>Database Design & Management</h2>
                    <p>I offer database design and management services, utilizing technologies like MySQL. From designing scalable structures to optimizing queries, I ensure your data is well-organized, secure, and easy to access for future development.</p>
                </div>
                <img src="/assets/Database.webp" alt="Database" className="services-image left" />
            </div>
            <div className="services-section">
                <div>
                    <h2>Software Development & Optimization</h2>
                    <p>Specializing in C++, Python, and C#, I offer software development services, from the ground up, including debugging, optimization, and performance enhancement to ensure smooth and efficient applications.</p>
                </div>
                <img src="/assets/Optimization.png" alt="Optimization" className="services-image right" />
            </div>
            <div className="services-section">
                <div>
                    <h2>Cybersecurity Consulting</h2>
                    <p>With a certification in Cybersecurity, I offer consulting services to help protect your digital assets. I can help identify vulnerabilities, implement best practices, and safeguard your data from potential threats.</p>
                </div>
                <img src="/assets/Cybersecurity.webp" alt="Cybersecurity" className="services-image left" />
            </div>
        </div>
    );
}
