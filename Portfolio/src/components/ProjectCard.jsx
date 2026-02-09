import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaFolder } from 'react-icons/fa';

const ProjectCard = ({ title, description, techStack, githubLink, demoLink }) => {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
            }}
            className="project-card"
            style={{
                backgroundColor: 'var(--bg-card)',
                padding: '2rem',
                borderRadius: '0.5rem',
                border: '1px solid var(--border-color)',
                transition: 'transform 0.3s ease, border-color 0.3s ease',
                cursor: 'default',
                display: 'flex',
                flexDirection: 'column',
                height: '100%'
            }}
        >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <FaFolder size={40} color="var(--primary-color)" />
                <div style={{ display: 'flex', gap: '1rem' }}>
                    {githubLink && (
                        <a href={githubLink} target="_blank" rel="noopener noreferrer" aria-label="GitHub Link" style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }}>
                            <FaGithub />
                        </a>
                    )}
                    {demoLink && (
                        <a href={demoLink} target="_blank" rel="noopener noreferrer" aria-label="External Link" style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }}>
                            <FaExternalLinkAlt />
                        </a>
                    )}
                </div>
            </div>

            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>{title}</h3>

            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', flex: 1 }}>
                {description}
            </p>

            <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', listStyle: 'none', fontSize: '0.85rem', fontFamily: 'monospace', color: 'var(--text-secondary)' }}>
                {techStack.map((tech, index) => (
                    <li key={index}>{tech}</li>
                ))}
            </ul>
        </motion.div>
    );
};

export default ProjectCard;
