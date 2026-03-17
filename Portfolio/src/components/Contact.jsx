import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formId = import.meta.env.VITE_FORMSPREE_ID;


        try {
            const response = await fetch(`https://formspree.io/f/${formId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                alert('Thank you for your message! I will get back to you soon.');
                setFormData({ name: '', email: '', message: '' });
            } else {
                alert('Oops! There was a problem submitting your form. Please try again.');
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert('There was an error sending your message. Please try again later.');
        }
    };

    return (
        <section id="contact" className="section container" style={{ minHeight: '50vh', paddingBottom: '100px' }}>
            <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                style={{ fontSize: '2rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}
            >
                <span style={{ color: 'var(--primary-color)', fontSize: '1.5rem' }}></span>
                Contact Me
            </motion.h2>

            <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '4rem',
                alignItems: 'start'
            }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.1rem', lineHeight: '1.6' }}>
                        Open to full-stack Developer / SDE-1 roles. Feel free to reach out.
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {[
                            { icon: <FaEnvelope size={20} />, label: "Email", value: "ashish.jdh2020@gmail.com", href: "mailto:ashish.jdh2020@gmail.com" },
                            { icon: <FaLinkedin size={20} />, label: "LinkedIn", value: "ashish-bairwa", href: "https://www.linkedin.com/in/ashish-bairwa20" },
                            { icon: <FaGithub size={20} />, label: "GitHub", value: "ashishb20", href: "https://github.com/ashishb20" },
                        ].map((item, i) => (
                            <a key={i} href={item.href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '1.5rem',
                                    background: 'var(--bg-secondary)',
                                    padding: '1.5rem',
                                    borderRadius: '1rem',
                                    border: '1px solid var(--border-color)',
                                    transition: 'transform 0.3s ease, border-color 0.3s ease'
                                }}>
                                    <div style={{
                                        background: 'rgba(59, 130, 246, 0.1)',
                                        color: '#3b85f6',
                                        padding: '1rem',
                                        borderRadius: '0.8rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'

                                    }}>
                                        {item.icon}
                                    </div>
                                    <div>
                                        <div style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '1px', marginBottom: '0.3rem' }}>
                                            {item.label}
                                        </div>
                                        <div style={{ color: 'var(--text-primary)', fontSize: '1.1rem', fontWeight: 500 }}>
                                            {item.value}
                                        </div>
                                    </div>
                                </div>
                            </a>
                        ))}

                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem',
                            background: 'rgba(16, 185, 129, 0.05)',
                            padding: '1.5rem',
                            borderRadius: '1rem',
                            border: '1px solid rgba(16, 185, 129, 0.2)',
                        }}>
                            <div style={{
                                width: '12px',
                                height:'12px',
                                borderRadius: '50%',
                                backgroundColor: '#67e771',
                                boxShadow: '0 0 0 4px rgba(16, 185, 129, 0.2)'
                            }}>
                            </div>
                            <span style={{ color: '#27dd79', fontSize: '1rem', fontWeight: 500 }}>Open for opportunities</span>
                        </div>
                    </div>
                </motion.div>

                <motion.form
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1.5rem',
                        background: 'var(--bg-secondary)',
                        padding: '2rem',
                        borderRadius: '1rem',
                        border: '1px solid var(--border-color)'
                    }}
                >
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <label htmlFor="name" style={{ color: 'var(--text-primary)', fontSize: '0.9rem', fontWeight: 600 }}>Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            style={{
                                width: '100%',
                                padding: '0.8rem',
                                borderRadius: '0.5rem',
                                border: '1px solid var(--border-color)',
                                background: 'var(--bg-card)',
                                color: 'var(--text-primary)',
                                fontFamily: 'inherit'
                            }}
                            placeholder="Your Name"
                        />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <label htmlFor="email" style={{ color: 'var(--text-primary)', fontSize: '0.9rem', fontWeight: 600 }}>Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            style={{
                                width: '100%',
                                padding: '0.8rem',
                                borderRadius: '0.5rem',
                                border: '1px solid var(--border-color)',
                                background: 'var(--bg-card)',
                                color: 'var(--text-primary)',
                                fontFamily: 'inherit'
                            }}
                            placeholder="your.email@example.com"
                        />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <label htmlFor="message" style={{ color: 'var(--text-primary)', fontSize: '0.9rem', fontWeight: 600 }}>Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows="5"
                            style={{
                                width: '100%',
                                padding: '0.8rem',
                                borderRadius: '0.5rem',
                                border: '1px solid var(--border-color)',
                                background: 'var(--bg-card)',
                                color: 'var(--text-primary)',
                                fontFamily: 'inherit',
                                resize: 'vertical'
                            }}
                            placeholder="Hello! I'd like to discuss..."
                        />
                    </div>

                    <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                        Send Message
                    </button>
                </motion.form>
            </div>
        </section>
    );
};

export default Contact;
