import React from 'react';
import { motion } from 'framer-motion';

const timelineData = [
    {
        icon: '🎓',
        iconBg: 'rgba(56,189,248,0.12)',
        iconBorder: 'rgba(56,189,248,0.3)',
        role: 'B.S. Mathematics & Scientific Computing',
        org: 'IIT Kanpur',
        date: 'Aug 2021 — Jun 2025',
        bullets: [
            'Specialized in algorithms, numerical methods, and computational mathematics',
            'Consistent competitive programmer — 500+ DSA problems solved',
        ],
        achievements: [
            { icon: '⚡', text: '500+ problems solved across LeetCode & Codeforces' },
        ],
    },
    {
        icon: '💻',
        iconBg: 'rgba(168,85,247,0.12)',
        iconBorder: 'rgba(168,85,247,0.3)',
        role: 'Full-Stack Developer (Self-Taught)',
        org: 'Personal Projects & Open Source',
        date: 'Jan 2023 — Present',
        bullets: [
            'Architected 3 production-grade MERN stack applications',
            'Implemented JWT auth, CI/CD pipelines, and REST APIs',
        ],
        achievements: [
            { icon: '🚀', text: '66% query speed improvement via MongoDB pipeline optimization' },
        ],
    },
];

const Experience = () => {
    return (
        <div id="experience">
            <motion.span
                className="section-label"
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
                Training & Experience
            </motion.h2>

            {/* Open to Work Badge */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.12 }}
            >
                <div className="open-to-work-badge">
                    <div className="otw-dot" />
                    Open to Work — Seeking SDE-1 / Backend Developer roles
                </div>
            </motion.div>

            {/* Timeline */}
            <div className="timeline">
                {timelineData.map((item, i) => (
                    <motion.div
                        key={i}
                        className="timeline-item"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.45, delay: i * 0.15 }}
                    >
                        {/* Dot */}
                        <div
                            className="timeline-dot"
                            style={{
                                background: item.iconBg,
                                border: `2px solid ${item.iconBorder}`,
                            }}
                        >
                            {item.icon}
                        </div>

                        {/* Content */}
                        <div className="timeline-content">
                            <div className="timeline-role">{item.role}</div>
                            <div className="timeline-org">{item.org}</div>
                            <div className="timeline-date">{item.date}</div>

                            <ul className="timeline-bullets">
                                {item.bullets.map((b, j) => <li key={j}>{b}</li>)}
                            </ul>

                            {item.achievements.map((ach, k) => (
                                <div key={k} className="achievement-card">
                                    <span className="achievement-icon">{ach.icon}</span>
                                    <span className="achievement-text">{ach.text}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
