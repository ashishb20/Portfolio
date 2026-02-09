import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const Projects = () => {
    // You can add more projects here
    const projects = [
        {
            title: "NewsMania",
            description: "A real time news dashboard that aggregate major headlines from India's top newspapers into a clean single-screen interface",
            techStack: ["React", "Node.js", "Express.js", "MongoDB", "RSS feeds", "CSS"],
            githubLink: "https://github.com/ashishb20/NewsMania",
            demoLink: null
        },
        {
            title: "LinkShrink",
            description: "A URL shortening service that allows users to create short, shareable links from long URLs.",
            techStack: ["React", "Node.js", "Express.js", "MongoDB", "CSS"],
            githubLink: "https://github.com/ashishb20/LinkShrink",
            demoLink: null
        },
        {
            title: "Directory Organizer",
            description: "A Python-based automation tool that keeps your file system organized. It monitors directories and automatically sorts files into subfolders based on file types (images, documents, code, etc.) in real-time.",
            techStack: ["Python", "File System API", "Automation"],
            githubLink: "https://github.com/ashishb20/DirectoryOrganizer",
            demoLink: null
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
        <section id="projects" className="section container">
            <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                style={{ fontSize: '2rem', marginBottom: '3rem', display: 'flex', alignItems: 'center', gap: '1rem' }}
            >
                <span style={{ color: 'var(--primary-color)', fontSize: '1.5rem' }}></span>
                Some Things I've Built
            </motion.h2>

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                    gap: '2rem'
                }}
            >
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </motion.div>
        </section>
    );
};

export default Projects;
