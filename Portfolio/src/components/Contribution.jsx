import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const Contribution = () => {
    return (
        <section id="contribution" className="section container">
            <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                style={{ fontSize: '2rem', marginBottom: '3rem', display: 'flex', alignItems: 'center', gap: '1rem' }}
            >
                <span style={{ color: 'var(--primary-color)', fontSize: '1.5rem' }}></span>
                Contributions
            </motion.h2>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                gap: '2rem',
                marginTop: '1rem'
            }}>
                {/* GitHub Card */}
                <div style={{
                    padding: '2rem',
                    border: '1px solid var(--border-color)',
                    borderRadius: '8px',
                    background: 'var(--bg-secondary)',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    position: 'relative'
                }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', color: 'var(--text-primary)', fontSize: '1rem' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                            <span style={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" style={{ fill: 'currentColor' }}>
                                    <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0 4.42 3.58 8 8 8Z"></path>
                                </svg>
                                GitHub Statistics
                            </span>
                            <span style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--text-secondary)', paddingLeft: '1.5rem' }}>@ashishb20</span>
                        </div>
                        <a href="https://github.com/ashishb20" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.9rem', color: 'var(--primary-color)', textDecoration: 'none' }}>
                            View GitHub &rarr;
                        </a>
                    </div>
                    {/* GitHub Stats & Graph Combination */}
                    <div style={{ overflowX: 'auto', paddingBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
                        {/* Stats */}
                        <img
                            src="https://github-readme-streak-stats.herokuapp.com/?user=ashishb20&theme=dark&hide_border=true&background=0d1117"
                            alt="GitHub Streak"
                            style={{ width: '100%', display: 'block' }}
                        />
                    </div>
                </div>

                {/* LeetCode Card */}
                <div style={{
                    padding: '2rem',
                    border: '1px solid var(--border-color)',
                    borderRadius: '8px',
                    background: 'var(--bg-secondary)',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%'
                }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', color: 'var(--text-primary)', fontSize: '1rem' }}>
                        <span style={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="16" height="16" style={{ fill: 'currentColor' }}>
                                <title>LeetCode</title>
                                <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.708-1.823.708-.661 0-1.267-.219-1.749-.591-.013-.01-.3-.223-.3-.223l6.569-6.353c.27-.26.689-.25 1.037.009.28.209.43.549.43.914.001.376-.144.75-.467 1.07l-.001-.141zM17.594 12.631l.006.004c.159.213.25.467.248.747 0 .376-.153.76-.47 1.076l-2.693 2.6c-.477.46-1.116.697-1.822.697-.736 0-1.396-.282-1.928-.755l7.989-7.72c-.175.253-.306.577-.329.831-.115 1.069.255 1.956 1.001 2.52zM16.963 8.358a3.295 3.295 0 0 0-.256-.479l-7.98 7.712c-.529-.472-1.188-.753-1.921-.753-.7 0-1.332.233-1.808.687L2.49 18.03c-.6.541-.837 1.253-.668 1.956.124.513.504 1.155 1.109 1.487.352.193.738.291 1.134.291.637 0 1.228-.249 1.666-.669l5.441-5.26c.38-.363.854-.567 1.386-.567.872 0 1.62.518 1.928 1.255.197.472.186 1.066-.026 1.583-.092.222-.224.426-.388.604l-2.738 2.645c-.524.506-1.226.79-1.979.79-.696 0-1.353-.263-1.85-.742L.544 16.299a3.197 3.197 0 0 1-.941-2.247c0-1.318.82-2.453 2.03-2.833l-.01.009L7.387 5.76c.453-.438 1.047-.678 1.673-.678s1.22.24 1.674.678l5.444 5.258c.277.268.455.57.491.905.05.474-.131.9-.406 1.435zm-5.042 12.2c-.378.196-.864.217-1.267.042a2.05 2.05 0 0 1-1.018-.94c-.218-.466-.179-1.025.106-1.465l.006-.008 7.429-7.18c.459-.444 1.062-.688 1.696-.688.636 0 1.239.243 1.697.688l2.693 2.602c.458.442.71 1.049.71 1.706s-.252 1.264-.71 1.706l-7.796 7.533a1.94 1.94 0 0 1-.582.355c-.216.082-.472.096-.957-.35z"></path>
                            </svg>
                            LeetCode Statistics
                        </span>
                        <a href="https://leetcode.com/ashish_bairwa" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.9rem', color: 'var(--primary-color)', textDecoration: 'none' }}>
                            View LeetCode &rarr;
                        </a>
                    </div>
                    <div style={{ overflowX: 'auto', paddingBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
                        <img
                            src="https://leetcard.jacoblin.cool/ashish_bairwa?theme=dark&font=Inter&ext=heatmap"
                            alt="Ashish's LeetCode Stats"
                            style={{ maxWidth: '100%', height: 'auto', display: 'block' }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contribution;
