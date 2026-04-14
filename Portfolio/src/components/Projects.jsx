import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard, { FeaturedCard } from './ProjectCard';

const projects = [
    {
        title: 'RecallOps',
        description: 'A specialized learning task manager based on the proven 1-4-7 Spaced Repetition Method to conquer the forgetting curve by automating the scheduling of review sessions.',
        techStack: ['React', 'Node.js', 'Express.js', 'MongoDB'],
        githubLink: 'https://github.com/ashishb20/RecallOps',
        demoLink: 'https://recallops-1.vercel.app/login',
        status: 'Live',
        statusColor: '#34d399',
        accentColor: '#38bdf8',
        featured: true,
        highlights: [
            'Automated review scheduling using the 1-4-7 spaced repetition algorithm',
            'Reduces forgetting curve with data-driven task rescheduling',
            'Full auth system with JWT + secure session management',
        ],
    },
    {
        title: 'NewsMania',
        description: 'A real-time news dashboard aggregating major headlines from India\'s top newspapers into a clean, single-screen interface using live RSS feeds.',
        techStack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'RSS feeds'],
        githubLink: 'https://github.com/ashishb20/NewsMania',
        demoLink: 'https://newsmania-0bu0.onrender.com/',
        status: 'Live',
        statusColor: '#34d399',
        accentColor: '#a855f7',
    },
    {
        title: 'LinkShrink',
        description: 'URL shortening service with custom titles and QR code generation for every shortened link, plus analytics tracking.',
        techStack: ['React', 'Node.js', 'Express.js', 'MongoDB'],
        githubLink: 'https://github.com/ashishb20/LinkShrink',
        demoLink: 'https://link-shrink-one.vercel.app/',
        status: 'Live',
        statusColor: '#34d399',
        accentColor: '#fb923c',
    },
    {
        title: 'Directory Organizer',
        description: 'Python automation tool that monitors directories in real-time and automatically sorts files into subfolders by type — images, documents, code, and more.',
        techStack: ['Python', 'File System API', 'Automation'],
        githubLink: 'https://github.com/ashishb20/DirectoryOrganizer',
        demoLink: null,
        status: 'Open Source',
        statusColor: '#38bdf8',
        accentColor: '#34d399',
    },
];

const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const Projects = () => {
    const [featured, ...rest] = projects;

    return (
        <section id="projects" className="section container">
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
                Some Things I've Built
            </motion.h2>

            <FeaturedCard {...featured} />
            <motion.div
                className="projects-grid"
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {rest.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </motion.div>
        </section>
    );
};

export default Projects;
