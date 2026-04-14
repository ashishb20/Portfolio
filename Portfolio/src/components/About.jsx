import React from 'react';
import { motion } from 'framer-motion';

const stats = [
    { label: 'DSA Problems Solved', value: '500+', icon: '⚡' },
    { label: 'API Latency Reduced', value: '66%', icon: '📉' },
    { label: 'Projects Shipped', value: '3', icon: '🚢' },
];

const chipVariants = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: (i) => ({
        opacity: 1, scale: 1,
        transition: { delay: i * 0.07, duration: 0.35, ease: 'easeOut' },
    }),
};

const About = () => {
    return (
        <section id="about" className="section container">
            <motion.span
                className="section-label purple"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
            >
            </motion.span>

            <motion.h2
                className="section-heading"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.08 }}
            >
                About Me
            </motion.h2>

            <div className="about-grid">
                {/* Bio */}
                <motion.div
                    className="about-bio"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <p>
                        I am a{' '}
                        <span style={{ color: 'var(--primary-color)', fontWeight: 700 }}>Software Engineer</span>{' '}
                        graduating from{' '}
                        <strong style={{ color: 'var(--text-primary)' }}>IIT Kanpur (June 2025)</strong>{' '}
                        with a B.S. in Mathematics and Scientific Computing. My approach to development merges{' '}
                        <strong style={{ color: 'var(--text-primary)' }}>mathematical rigor</strong>{' '}
                        with full-stack expertise to build systems that are not just functional, but high-performance.
                    </p>
                    <p>
                        I specialize in the{' '}
                        <strong style={{ color: 'var(--text-primary)' }}>MERN Stack</strong>{' '}
                        and have architected three production-grade applications. My work is defined by a
                        &quot;performance-first&quot; mindset — optimized MongoDB pipelines delivering{' '}
                        <strong style={{ color: 'var(--primary-color)' }}>66% improvement</strong>{' '}
                        in query speeds.
                    </p>
                    <p>
                        Beyond building apps, I am a passionate competitive programmer with{' '}
                        <strong style={{ color: 'var(--primary-color)' }}>500+ problems solved</strong>{' '}
                        across complex data structures and algorithms. I thrive at the intersection of{' '}
                        <strong style={{ color: 'var(--text-primary)' }}>System Design</strong>,{' '}
                        <strong style={{ color: 'var(--text-primary)' }}>Microservices</strong>, and{' '}
                        <strong style={{ color: 'var(--text-primary)' }}>CI/CD automation</strong>.
                    </p>
                    <p>
                        Currently seeking{' '}
                        <strong style={{ color: 'var(--primary-color)' }}>Backend Developer / SDE-1</strong>{' '}
                        opportunities where I can contribute to building{' '}
                        <strong style={{ color: 'var(--text-primary)' }}>scalable, reliable, production-grade systems</strong>.
                    </p>
                </motion.div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                >
                    <p className="stats-label">Achievements</p>
                    <div className="stats-grid">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={i}
                                custom={i}
                                variants={chipVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="stat-card"
                            >
                                <div className="stat-icon">{stat.icon}</div>
                                <div className="stat-value">{stat.value}</div>
                                <div className="stat-label">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
