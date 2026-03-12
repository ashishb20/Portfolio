import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaRobot, FaTools, FaLaptopCode, FaDatabase } from "react-icons/fa";

const CertificationCard = ({ title, category, description, icon }) => {
    return (
        <motion.div
            variations={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
            }}
            style={{
                backgroundColor: "var(--bg-card)",
                padding: "2rem",
                borderRadius: "1rem",
                border: "1px solid var(--border-color)",
                display: "flex",
                gap: "1.5rem",
                alignItems: "flex-start",
                transition: "transform 0.3s ease, border-color 0.3s ease",
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.borderColor = "var(--primary-color)";
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "var(--primary-color)";
            }}
        >
            <div style={{
                background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
                color: 'white',
                minWidth: '4rem',
                height: '4rem',
                borderRadius: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem'
            }}>
                {icon}
            </div>
            <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', flexWrap: 'wrap' }}>
                    <h3 style={{ fontSize: '1.3rem', color: 'var(--text-primary)', margin: 0, fontWeight: 'bold' }}>
                        {title}
                    </h3>
                    <span style={{
                        fontSize: '0.75rem',
                        padding: '0.3rem 0.8rem',
                        borderRadius: '2rem',
                        border: '1px solid rgba(29, 130, 246, 0.3)',
                        color: '#60a5fa',
                        background: 'rgba(59, 130, 246, 0.1)',
                        fontWeight: 600,
                        letterSpacing: '0.5px'
                    }}>
                        {category}
                    </span>
                </div>
                <p style={{ color: 'var(--text-secondary)', marginTop: '1rem', fontSize: '0.95rem', lineHeight: '1.6' }}>
                    {description}
                </p>
            </div>
        </motion.div>
    );
};

const Certifications = () => {
    const certifications = [
        {
            title: 'Prompt Engineering with ChatGpt',
            category: 'AI/ML',
            description: 'Advanced prompt design techniques for LLMs including chain-of-thought, few-shot prompting, and system design',
            icon: <FaTools />
        },
        {
            title: 'Machine Learning Specialization',
            category: 'ML',
            description: 'Supervised , Unsupervised, and  Reinforcement Machine learning',
            icon: <FaDatabase />
        },
        {
            title: 'Neural Networks and Deep Learning',
            category: 'ML',
            description: 'Neural Networks, Back Propagation, Deep Learning, Convolutional Networks, Recurrent Networks, and more',
            icon: <FaDatabase />
        }
    ];
    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    return (
        <section id="certifications" className="section container">
            <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                style={{ fontSize: '2rem', marginBottom: '3rem', display: 'flex', alignItems: 'center', gap: '1rem' }}
            >
                <span style={{ color: 'var(--primary-color)', fontSize: '1.5rem' }}></span>
                Certifications
            </motion.h2>
            <motion.div
                variants={container}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true }}
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))',
                    gap: '2rem'
                }}
            >
                {certifications.map((cert, index) => (
                    <CertificationCard key={index} {...cert} />
                ))}
            </motion.div>
            <style jsx>{`
               @media (max-width: 600px) {
                  #certifications > div {
                      grid-template-columns : 1fr !important;
                  }
              }
            `}</style>
        </section>
    );
};
export default Certifications;