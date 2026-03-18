import React from "react";
import { motion } from "framer-motion";

const techStack = [
    {
        category: "Frontend",
        color: "#38bdf8",
        icon: "🖥️",
        skills: ["React.js", "HTML5", "Tailwind CSS", "JavaScript"],
    },
    {
        category: "Backend",
        color: "#a78bfa",
        icon: "⚙️",
        skills: ["Node.js", "Express.js", "REST APIs", "JWT Auth"],
    },
    {
        category: "Database",
        color: "#34d399",
        icon: "🗄️",
        skills: ["MongoDB", "Atlas", "SQL", "Redis"],
    },
    {
        category: "DevOps & Deploy",
        color: "#fb923c",
        icon: "🚀",
        skills: ["Vercel", "Render", "API Gateway", "CI/CD Pipelines"],
    },
    {
        category: "Tools",
        color: "#f472b6",
        icon: "🛠️",
        skills: ["Git", "GitHub", "VS Code", "Postman", "Vite", "Data Pipelines"],
    },
];

const stats = [
    { label: "DSA Problems Solved", value: "500+", icon: "⚡" },
    { label: "API Latency Reduced", value: "66%", icon: "📉" },
    { label: "Projects Shipped", value: "3", icon: "🚢" },
];

const chipVariants = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: (i) => ({
        opacity: 1,
        scale: 1,
        transition: { delay: i * 0.06, duration: 0.35, ease: "easeOut" },
    }),
};

const About = () => {
    return (
        <section id="about" className="section container">

            {/* Section Header */}
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

            {/* Main Two-Column Grid */}
            <div style={{
                display: "grid",
                gridTemplateColumns: "minmax(280px, 1.5fr) 1fr",
                gap: "4rem",
                alignItems: "start",
            }}>

                <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>

                    {/* Bio */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.55, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <p style={{
                            color: "var(--text-secondary)", fontSize: "1.05rem",
                            lineHeight: "1.9", marginBottom: "1.3rem"
                        }}>
                            I am a{" "}
                            <span style={{ color: "var(--primary-color)", fontWeight: 700 }}>Software Engineer</span>{" "}
                            graduating from{" "}
                            <strong style={{ color: "var(--text-primary)" }}>IIT Kanpur (June 2025)</strong>{" "}
                            with a B.S. in Mathematics and Scientific Computing. My approach to development merges{" "}
                            <strong style={{ color: "var(--text-primary)" }}>Mathematical rigor</strong>{" "}
                            with full-stack expertise to build systems that are not just functional, but high-performance.
                        </p>

                        <p style={{
                            color: "var(--text-secondary)", fontSize: "1.05rem",
                            lineHeight: "1.9", marginBottom: "1.3rem"
                        }}>
                            I specialize in the{" "}
                            <strong style={{ color: "var(--text-primary)" }}>MERN Stack</strong>{" "}
                            and have architected three production-grade applications
                            .
                            My work is defined by a "performance-first" mindset, Optimized MongoDB pipelines to achieve a{" "}
                            <strong style={{ color: "var(--primary-color)" }}>66% improvement</strong>{" "}
                            in query speeds.
                        </p>

                        <p style={{
                            color: "var(--text-secondary)", fontSize: "1.05rem",
                            lineHeight: "1.9"
                        }}>
                            Beyond building apps, I am a passionate competitive programmer with{" "}
                            <strong style={{ color: "var(--primary-color)" }}>500+ problems solved</strong>{" "}
                            across complex data structures and algorithms. I thrive at the intersection of{" "}
                            <strong style={{ color: "var(--text-primary)" }}>System Design</strong>,{" "}
                            <strong style={{ color: "var(--text-primary)" }}>Microservices</strong>, and{" "}
                            <strong style={{ color: "var(--text-primary)" }}>CI/CD automation</strong>.
                        </p>
                        <p style={{
                            color: "var(--text-secondary)", fontSize: "1.05rem",
                            lineHeight: "1.9"
                        }}>
                            Currently seeking <strong style={ { color: "var(--primary-color)"}}>Backend Developer / SDE-1</strong> opportunities where 
                            I can contribute to building 
                             <strong style={{ color: "var(--text-primary)" }}> Scalable, reliable, impactful, production-grade systems</strong>.

                        </p>
                    </motion.div>

                    {/*  Achievement Stats  */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.25 }}
                        viewport={{ once: true }}
                    >
                        <p style={{
                            color: "var(--text-primary)", fontWeight: 600,
                            fontSize: "0.78rem", textTransform: "uppercase",
                            letterSpacing: "2.5px", marginBottom: "1rem"
                        }}>
                            Achievements
                        </p>

                        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem" }}>
                            {stats.map((stat, i) => (
                                <motion.div
                                    key={i}
                                    custom={i}
                                    variants={chipVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    whileHover={{ y: -4 }}
                                    style={{
                                        padding: "1.2rem 0.8rem",
                                        background: "var(--bg-card)",
                                        borderRadius: "14px",
                                        border: "1px solid var(--border-color)",
                                        textAlign: "center",
                                        cursor: "default",
                                        transition: "border-color 0.25s",
                                    }}
                                    onMouseEnter={e => e.currentTarget.style.borderColor = "var(--primary-color)"}
                                    onMouseLeave={e => e.currentTarget.style.borderColor = "var(--border-color)"}
                                >
                                    <div style={{ fontSize: "1.4rem", marginBottom: "0.35rem" }}>{stat.icon}</div>
                                    <div style={{
                                        color: "var(--primary-color)",
                                        fontSize: "1.5rem", fontWeight: 800, lineHeight: 1
                                    }}>
                                        {stat.value}
                                    </div>
                                    <div style={{
                                        color: "var(--text-secondary)",
                                        fontSize: "0.68rem", textTransform: "uppercase",
                                        letterSpacing: "0.8px", marginTop: "0.3rem", lineHeight: 1.4
                                    }}>
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* RIGHT COLUMN: Tech Stack */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.55, delay: 0.15 }}
                    viewport={{ once: true }}
                    style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}
                >
                    <p style={{
                        color: "var(--text-primary)", fontWeight: 600,
                        fontSize: "1.50rem", textTransform: "uppercase",
                        letterSpacing: "2.5px", marginBottom: "0.2rem"
                    }}>
                        Tech Stack
                    </p>

                    {techStack.map((group, gi) => (
                        <motion.div
                            key={group.category}
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: gi * 0.1, duration: 0.4 }}
                            viewport={{ once: true }}
                            style={{
                                background: "var(--bg-card)",
                                border: "1px solid var(--border-color)",
                                borderRadius: "14px",
                                padding: "1.1rem 1.3rem",
                                transition: "border-color 0.25s",
                            }}
                            onMouseEnter={e => e.currentTarget.style.borderColor = group.color}
                            onMouseLeave={e => e.currentTarget.style.borderColor = "var(--border-color)"}
                        >
                            {/* Category label */}
                            <div style={{
                                display: "flex", alignItems: "center",
                                gap: "0.5rem", marginBottom: "0.75rem"
                            }}>
                                <span style={{ fontSize: "1rem" }}>{group.icon}</span>
                                <span style={{
                                    color: group.color,
                                    fontWeight: 700, fontSize: "0.82rem",
                                    textTransform: "uppercase", letterSpacing: "1.5px"
                                }}>
                                    {group.category}
                                </span>
                            </div>

                            {/* Skill chips */}
                            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                                {group.skills.map((skill, si) => (
                                    <motion.span
                                        key={skill}
                                        custom={gi * 4 + si}
                                        variants={chipVariants}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        style={{
                                            padding: "0.28rem 0.85rem",
                                            borderRadius: "999px",
                                            fontSize: "0.8rem",
                                            fontWeight: 500,
                                            fontFamily: "'Fira Code', monospace",
                                            background: `${group.color}14`,
                                            border: `1px solid ${group.color}40`,
                                            color: group.color,
                                            letterSpacing: "0.2px",
                                        }}
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
};

export default About;
