import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SocialStrip from './SocialStrip';

const roles = [
    'Full-Stack Developer',
    'MERN Stack Engineer',
    'Backend Developer',
    'Problem Solver',
];

const Hero = () => {
    const [roleIndex, setRoleIndex] = useState(0);
    const [displayed, setDisplayed] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const current = roles[roleIndex];
        let timeout;
        if (!isDeleting && displayed.length < current.length) {
            timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
        } else if (!isDeleting && displayed.length === current.length) {
            timeout = setTimeout(() => setIsDeleting(true), 2000);
        } else if (isDeleting && displayed.length > 0) {
            timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 45);
        } else if (isDeleting && displayed.length === 0) {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
        }
        return () => clearTimeout(timeout);
    }, [displayed, isDeleting, roleIndex]);

    const pills = [
        { label: '⚡ Software Engineer', color: '#38bdf8', bg: 'rgba(56,189,248,0.1)', border: 'rgba(56,189,248,0.28)' },
        { label: '🎓 IIT Kanpur', color: '#a855f7', bg: 'rgba(168,85,247,0.1)', border: 'rgba(168,85,247,0.28)' },
        { label: '🚀 Open to Work', color: '#34d399', bg: 'rgba(52,211,153,0.1)', border: 'rgba(52,211,153,0.28)' },
    ];

    return (
        <section id="hero" className="hero section">
            <div className="container hero-grid">
                {/* Left Content */}
                <div className="hero-content">
                    <motion.span
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="section-label"
                    >
                    </motion.span>

                    <motion.span
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.08 }}
                        className="hero-greeting"
                    >
                        Hello, I'm
                    </motion.span>

                    <motion.h1
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.16 }}
                        className="hero-title"
                    >
                        Ashish Bairwa.
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.24 }}
                        className="hero-typing"
                    >
                        <span className="typing-text">{displayed}</span>
                        <span className="typing-cursor">|</span>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.32 }}
                        className="hero-subtitle"
                    >
                        Building scalable, high-performance web applications with a performance-first mindset.
                        IIT Kanpur graduate specializing in the MERN stack.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.4 }}
                        className="hero-pills"
                    >
                        {pills.map((pill, i) => (
                            <span
                                key={i}
                                className="pill"
                                style={{ color: pill.color, background: pill.bg, border: `1px solid ${pill.border}` }}
                            >
                                {pill.label}
                            </span>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.48 }}
                        className="hero-buttons"
                    >
                        <a href="/resume.pdf" target="_blank" className="btn btn-primary">Resume ↗</a>
                        <a href="#contact" className="btn btn-outline">Contact Me</a>
                    </motion.div>

                    <SocialStrip />
                </div>

                {/* Right Avatar */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.88 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="hero-avatar-wrapper"
                >
                    <div className="avatar-glow" />
                    <div className="avatar-ring">
                        <div className="avatar-inner">
                            <img
                                src="/Linked_Prof.jpeg"
                                alt="Ashish Bairwa"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.style.display = 'none';
                                    e.target.nextSibling.style.display = 'flex';
                                }}
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                            <div className="avatar-fallback">👨‍💻</div>
                        </div>
                    </div>
                    <div className="avatar-badge">✓</div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
