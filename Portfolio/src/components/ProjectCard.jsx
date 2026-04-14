import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const techColors = {
    React: { bg: 'rgba(56,189,248,0.1)', border: 'rgba(56,189,248,0.25)', color: '#38bdf8' },
    'Node.js': { bg: 'rgba(52,211,153,0.1)', border: 'rgba(52,211,153,0.25)', color: '#34d399' },
    'Express.js': { bg: 'rgba(251,146,60,0.1)', border: 'rgba(251,146,60,0.25)', color: '#fb923c' },
    MongoDB: { bg: 'rgba(52,211,153,0.1)', border: 'rgba(52,211,153,0.25)', color: '#34d399' },
    Python: { bg: 'rgba(244,114,182,0.1)', border: 'rgba(244,114,182,0.25)', color: '#f472b6' },
    CSS: { bg: 'rgba(168,85,247,0.1)', border: 'rgba(168,85,247,0.25)', color: '#a855f7' },
    'RSS feeds': { bg: 'rgba(251,146,60,0.1)', border: 'rgba(251,146,60,0.25)', color: '#fb923c' },
    'File System API': { bg: 'rgba(148,163,184,0.1)', border: 'rgba(148,163,184,0.2)', color: '#94a3b8' },
    Automation: { bg: 'rgba(244,114,182,0.1)', border: 'rgba(244,114,182,0.25)', color: '#f472b6' },
};

const defaultColor = { bg: 'rgba(148,163,184,0.1)', border: 'rgba(148,163,184,0.2)', color: '#94a3b8' };

function TechPills({ techStack }) {
    return (
        <div className="tech-pills">
            {techStack.map(tech => {
                const s = techColors[tech] || defaultColor;
                return (
                    <span
                        key={tech}
                        className="tech-pill"
                        style={{ background: s.bg, border: `1px solid ${s.border}`, color: s.color }}
                    >
                        {tech}
                    </span>
                );
            })}
        </div>
    );
}

function StatusBadge({ status, statusColor }) {
    return (
        <span
            className="status-badge"
            style={{
                background: `${statusColor}15`,
                border: `1px solid ${statusColor}35`,
                color: statusColor,
            }}
        >
            <span className="status-dot" style={{ background: statusColor }} />
            {status}
        </span>
    );
}

export function FeaturedCard({ title, description, techStack, githubLink, demoLink, status, statusColor, accentColor, highlights }) {
    return (
        <motion.div
            className="featured-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onMouseEnter={e => {
                e.currentTarget.style.borderColor = accentColor;
                e.currentTarget.style.boxShadow = `0 20px 50px ${accentColor}18`;
                e.currentTarget.style.transform = 'translateY(-5px)';
            }}
            onMouseLeave={e => {
                e.currentTarget.style.borderColor = '';
                e.currentTarget.style.boxShadow = '';
                e.currentTarget.style.transform = '';
            }}
        >
            <div className="featured-card-body">
                <div className="featured-card-left">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <span style={{ fontSize: '1.4rem' }}>🧠</span>
                        <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-primary)' }}>{title}</h3>
                    </div>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.75 }}>{description}</p>
                    {highlights && (
                        <ul className="project-highlights">
                            {highlights.map((h, i) => <li key={i}>{h}</li>)}
                        </ul>
                    )}
                    <TechPills techStack={techStack} />
                </div>
                <div className="featured-card-right">
                    <StatusBadge status={status} statusColor={statusColor} />
                    <div className="card-actions" style={{ flexDirection: 'column' }}>
                        {githubLink && (
                            <a href={githubLink} target="_blank" rel="noopener noreferrer" className="action-btn">
                                <FaGithub /> GitHub ↗
                            </a>
                        )}
                        {demoLink && (
                            <a href={demoLink} target="_blank" rel="noopener noreferrer" className="action-btn">
                                <FaExternalLinkAlt /> Live Demo ↗
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

function ProjectCard({ title, description, techStack, githubLink, demoLink, status, statusColor, accentColor }) {
    return (
        <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="project-card"
            onMouseEnter={e => {
                e.currentTarget.style.borderColor = accentColor;
                e.currentTarget.style.boxShadow = `0 16px 40px ${accentColor}18`;
            }}
            onMouseLeave={e => {
                e.currentTarget.style.borderColor = '';
                e.currentTarget.style.boxShadow = '';
            }}
        >
            <div className="project-card-body">
                <div className="project-card-header">
                    <h3 className="project-title">{title}</h3>
                    <StatusBadge status={status} statusColor={statusColor} />
                </div>
                <p className="project-desc">{description}</p>
                <TechPills techStack={techStack} />
                <div className="card-actions">
                    {githubLink && (
                        <a href={githubLink} target="_blank" rel="noopener noreferrer" className="action-btn">
                            <FaGithub /> GitHub ↗
                        </a>
                    )}
                    {demoLink && (
                        <a href={demoLink} target="_blank" rel="noopener noreferrer" className="action-btn">
                            <FaExternalLinkAlt /> Demo ↗
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
}

export default ProjectCard;
