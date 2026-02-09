import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="hero" className="hero section">
            <div className="container" style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(300px, 1.5fr) 1fr',
                gap: '2rem',
                alignItems: 'center'
            }}>
                <div className="hero-content">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="hero-greeting"
                    >
                        Hi, my name is
                    </motion.span>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="hero-title"
                    >
                        Ashish Bairwa. <br />
                        <span style={{ color: 'var(--text-secondary)' }}>I build things for the web.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="hero-subtitle"
                    >
                        I'm a Aspiring software engineer.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="hero-buttons"
                    >
                        {/* Changed from 'Check out my work' to 'Resume' */}
                        <a href="/resume.pdf" target="_blank" className="btn btn-primary">Resume</a>
                        <a href="#contact" className="btn btn-outline">Contact Me</a>
                    </motion.div>
                </div>

                {/* Profile Picture Placeholder */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    style={{ display: 'flex', justifyContent: 'center' }}
                >
                    <div style={{
                        width: '300px',
                        height: '300px',
                        borderRadius: '10px',
                        overflow: 'hidden',
                        border: '2px solid var(--text-accent)',
                        position: 'relative',
                        boxShadow: '0 10px 30px -10px var(--bg-card)',
                        backgroundColor: 'var(--bg-secondary)'
                    }}>
                        <img
                            // src="/profile.jpeg"
                            src="/Linked_Prof.jpeg"
                            alt="Ashish Bairwa"
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.style.display = 'none';
                                e.target.nextSibling.style.display = 'flex';
                            }}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                        <div style={{
                            width: '100%',
                            height: '100%',
                            display: 'none', // Hidden by default, shown if img fails
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'var(--text-secondary)',
                            background: 'linear-gradient(45deg, var(--bg-secondary), var(--bg-card))',
                            flexDirection: 'column',
                            padding: '1rem',
                            textAlign: 'center'
                        }}>
                            <span style={{ fontSize: '3rem', marginBottom: '1rem' }}>📷</span>
                        </div>
                    </div>
                </motion.div>
            </div>

        </section>
    );
};

export default Hero;
