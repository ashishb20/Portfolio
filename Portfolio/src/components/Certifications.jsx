import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';

const certifications = [
    {
        title: 'Prompt Engineering with ChatGPT',
        provider: 'Coursera · OpenAI',
        year: '2024',
        icon: '🤖',
        iconBg: 'rgba(56,189,248,0.12)',
        link: null,
    },
    {
        title: 'Machine Learning Specialization',
        provider: 'DeepLearning.AI · Andrew Ng',
        year: '2023',
        icon: '🧠',
        iconBg: 'rgba(168,85,247,0.12)',
        link: null,
    },
    {
        title: 'Neural Networks and Deep Learning',
        provider: 'DeepLearning.AI · Andrew Ng',
        year: '2023',
        icon: '⚡',
        iconBg: 'rgba(52,211,153,0.12)',
        link: null,
    },
];

const Certifications = () => {
    return (
        <div id="certifications">
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
                🏅 Certifications
            </motion.h2>

            <div className="cert-list">
                {certifications.map((cert, i) => (
                    <motion.div
                        key={i}
                        className="cert-item"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                        onClick={() => cert.link && window.open(cert.link, '_blank')}
                        style={{ cursor: cert.link ? 'pointer' : 'default' }}
                    >
                        <div
                            className="cert-icon-badge"
                            style={{ background: cert.iconBg }}
                        >
                            {cert.icon}
                        </div>

                        <span className="cert-date-pill">{cert.year}</span>

                        <div className="cert-info">
                            <div className="cert-title">{cert.title}</div>
                            <div className="cert-provider">{cert.provider}</div>
                        </div>

                        <FaExternalLinkAlt className="cert-external" size={11} />
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Certifications;