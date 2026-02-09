import React from "react";

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const About = () => {
    return (
        <section id="about" className="section container">
            <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                style={{ fontSize: '2rem', marginBottom: '3rem', display: 'flex', alignItems: 'center', gap: '1rem' }}
            >
                <span style={{ color: 'var(--primary-color)', fontSize: '1.5rem' }}></span>
                About Me
            </motion.h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 2fr) 1fr', gap: '6rem', alignItems: 'start' }}>
                <div>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                        Hello! I'm Ashish, a developer based in India.
                    </p>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                        I recently built a <strong>Directory Organizer</strong> using Python, which sparked my interest in automation and system-level programming, alongside my passion for web development.
                        Currently I'm learning backend development and exploring the world of <strong>Node.js</strong> and <strong>Express.js</strong>. I'm also diving into <strong>Data Structures & Algorithms</strong> to strengthen my problem-solving skills. My goal is to become a proficient full-stack developer and contribute to impactful projects.
                    </p>

                    <h3 style={{ fontSize: '1.2rem', color: 'var(--text-primary)', marginBottom: '0.8rem' }}>Education & Courses</h3>
                    <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.8rem' }}>
                        {[
                            'BS Mathematics and Scientific Computing( IIT Kanpur )',
                            'Full Stack Development (MERN)',
                            'Data Structures & Algorithms',
                            'Machine Learning Specialization',
                            'Deep Learning'
                            
                        ].map((item, i) => (
                            <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                                <span style={{ color: 'var(--primary-color)' }}>▹</span> {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Responsive fix for grid */}

        </section>
    );
};

export default About;
