import React from 'react';
import { motion } from 'framer-motion';

const techStack = [
    {
        category: 'FRONTEND',
        icon: '🖥️',
        color: '#38bdf8',
        skills: ['React.js', 'HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS'],
    },
    {
        category: 'BACKEND',
        icon: '⚙️',
        color: '#a855f7',
        skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT Auth'],
    },
    {
        category: 'DATABASE',
        icon: '🗄️',
        color: '#34d399',
        skills: ['MongoDB', 'Atlas', 'SQL', 'Redis'],
    },
    {
        category: 'DEVOPS',
        icon: '🚀',
        color: '#fb923c',
        skills: ['Vercel', 'Render', 'CI/CD', 'API Gateway'],
    },
    {
        category: 'TOOLS',
        icon: '🛠️',
        color: '#f472b6',
        skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Vite'],
    },
];

const languages = [
    { name: 'Hindi', level: 'Native' },
    { name: 'English', level: 'Professional' },
];

const softSkills = [
    'Problem Solving', 'System Thinking', 'Fast Learner', 'Strategic Learner', 'Team Collaboration', 'Adaptability', 'Communication', 'Time Management'
];

const Skills = () => {
    return (
        <section id="skills" className="section container">
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
                Tech Stack & Skills
            </motion.h2>

            <div className="skills-layout">
                {/* Left Sidebar */}
                <motion.div
                    className="skills-sidebar"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: 0.1 }}
                >
                    {/* Languages */}
                    <div className="sidebar-section">
                        <div className="sidebar-section-title">Languages</div>
                        {languages.map((lang, i) => (
                            <div key={i} className="language-item">
                                <span className="language-name">{lang.name}</span>
                                <span className="language-level">{lang.level}</span>
                            </div>
                        ))}
                    </div>

                    {/* Soft Skills */}
                    <div className="sidebar-section">
                        <div className="sidebar-section-title">Soft Skills</div>
                        <div className="soft-skills-list">
                            {softSkills.map((skill, i) => (
                                <span key={i} className="soft-skill-pill">{skill}</span>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Right Main Grid */}
                <div className="skills-main-grid">
                    {techStack.map((group, gi) => (
                        <motion.div
                            key={group.category}
                            className="skill-category-card"
                            initial={{ opacity: 0, y: 14 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: gi * 0.08 }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = group.color;
                                e.currentTarget.style.boxShadow = `0 8px 30px ${group.color}20`;
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = '';
                                e.currentTarget.style.boxShadow = '';
                            }}
                        >
                            <div className="skill-category-header">
                                <span className="skill-category-icon">{group.icon}</span>
                                <span className="skill-category-name" style={{ color: group.color }}>
                                    {group.category}
                                </span>
                            </div>
                            <div className="skill-pills-row">
                                {group.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="skill-pill"
                                        style={{
                                            background: `${group.color}12`,
                                            border: `1px solid ${group.color}30`,
                                            color: group.color,
                                        }}
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
