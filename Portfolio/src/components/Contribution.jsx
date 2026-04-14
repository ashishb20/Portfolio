import React from 'react';
import { motion } from 'framer-motion';

const Contribution = () => {
    const cardStyle = {
        padding: '2rem',
        border: '1px solid var(--border-color)',
        borderRadius: 'var(--radius)',
        background: 'var(--bg-card)',
        backdropFilter: 'blur(12px)',
        display: 'flex',
        flexDirection: 'column',
        transition: 'border-color 0.3s ease, transform 0.3s ease',
    };

    const headerStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '1.5rem',
    };

    return (
        <section id="contribution" className="section container">
            <motion.span
                className="section-label green"
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
                Contributions
            </motion.h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))', gap: '2rem' }}>
                <motion.div
                    style={cardStyle}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: 0.1 }}
                    onMouseEnter={e => {
                        e.currentTarget.style.borderColor = 'var(--primary-color)';
                        e.currentTarget.style.transform = 'translateY(-4px)';
                    }}
                    onMouseLeave={e => {
                        e.currentTarget.style.borderColor = '';
                        e.currentTarget.style.transform = '';
                    }}
                >
                    <div style={headerStyle}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                            <span style={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)' }}>
                                <svg aria-hidden="true" height="16" viewBox="0 0 16 16" width="16" style={{ fill: 'currentColor' }}>
                                    <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0 4.42 3.58 8 8 8Z" />
                                </svg>
                                GitHub Statistics
                            </span>
                            <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', paddingLeft: '1.5rem', fontFamily: 'var(--font-mono)' }}>@ashishb20</span>
                        </div>
                        <a href="https://github.com/ashishb20" target="_blank" rel="noopener noreferrer" className="action-btn">
                            View Profile ↗
                        </a>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <img
                            src="https://github-readme-streak-stats.herokuapp.com/?user=ashishb20&theme=dark&hide_border=true&background=0d1117"
                            alt="GitHub Streak"
                            style={{ width: '100%', display: 'block', borderRadius: '8px' }}
                        />
                    </div>
                </motion.div>

                <motion.div
                    style={cardStyle}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: 0.2 }}
                    onMouseEnter={e => {
                        e.currentTarget.style.borderColor = '#fb923c';
                        e.currentTarget.style.transform = 'translateY(-4px)';
                    }}
                    onMouseLeave={e => {
                        e.currentTarget.style.borderColor = '';
                        e.currentTarget.style.transform = '';
                    }}
                >
                    <div style={headerStyle}>
                        <span style={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)' }}>
                            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="16" height="16" style={{ fill: '#fb923c' }}>
                                <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
                            </svg>
                            LeetCode Statistics
                        </span>
                        <a href="https://leetcode.com/ashish_bairwa" target="_blank" rel="noopener noreferrer" className="action-btn">
                            View Profile ↗
                        </a>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <img
                            src="https://leetcard.jacoblin.cool/ashish_bairwa?theme=dark&font=Inter&ext=heatmap"
                            alt="LeetCode Stats"
                            style={{ maxWidth: '100%', height: 'auto', display: 'block', borderRadius: '8px' }}
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contribution;
