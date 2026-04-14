import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const contactLinks = [
    { icon: <FaEnvelope size={18} />, label: 'Email', value: 'ashish.jdh2020@gmail.com', href: 'mailto:ashish.jdh2020@gmail.com', color: '#38bdf8' },
    { icon: <FaLinkedin size={18} />, label: 'LinkedIn', value: 'ashish-bairwa20', href: 'https://www.linkedin.com/in/ashish-bairwa20', color: '#0e76a8' },
    { icon: <FaGithub size={18} />, label: 'GitHub', value: 'ashishb20', href: 'https://github.com/ashishb20', color: '#a855f7' },
];

const inputStyle = {
    width: '100%',
    padding: '0.75rem 1rem',
    borderRadius: 'var(--radius-sm)',
    border: '1px solid var(--border-hover)',
    background: 'var(--bg-primary)',
    color: 'var(--text-primary)',
    fontFamily: 'var(--font-main)',
    fontSize: '0.9rem',
    outline: 'none',
    transition: 'border-color 0.2s',
};

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [sending, setSending] = useState(false);

    const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async e => {
        e.preventDefault();
        setSending(true);
        const formId = import.meta.env.VITE_FORMSPREE_ID;
        try {
            const res = await fetch(`https://formspree.io/f/${formId}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            if (res.ok) {
                alert('Message sent! I\'ll get back to you soon.');
                setFormData({ name: '', email: '', message: '' });
            } else {
                alert('Something went wrong. Please try again.');
            }
        } catch {
            alert('Error sending message. Please try again later.');
        } finally {
            setSending(false);
        }
    };

    return (
        <section id="contact" className="section container" style={{ paddingBottom: '6rem' }}>
            <motion.span
                className="section-label purple"
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
                Get In Touch
            </motion.h2>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                    style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
                >
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.8, marginBottom: '0.5rem' }}>
                        Open to full-stack Developer / SDE-1 roles. Whether it&apos;s a quick question or a project
                        collaboration — my inbox is always open.
                    </p>

                    {contactLinks.map((item, i) => (
                        <motion.a
                            key={i}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, x: -16 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.35, delay: 0.2 + i * 0.1 }}
                            style={{ textDecoration: 'none' }}
                        >
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '1.25rem',
                                    background: 'var(--bg-card)',
                                    padding: '1.1rem 1.5rem',
                                    borderRadius: 'var(--radius)',
                                    border: '1px solid var(--border-color)',
                                    backdropFilter: 'blur(10px)',
                                    transition: 'border-color 0.25s ease, transform 0.25s ease',
                                }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.borderColor = item.color;
                                    e.currentTarget.style.transform = 'translateX(4px)';
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.borderColor = '';
                                    e.currentTarget.style.transform = '';
                                }}
                            >
                                <div style={{
                                    background: `${item.color}18`,
                                    color: item.color,
                                    padding: '0.65rem',
                                    borderRadius: '10px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0,
                                }}>
                                    {item.icon}
                                </div>
                                <div>
                                    <div style={{ color: 'var(--text-muted)', fontSize: '0.72rem', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.2rem' }}>
                                        {item.label}
                                    </div>
                                    <div style={{ color: 'var(--text-primary)', fontSize: '0.95rem', fontWeight: 500 }}>
                                        {item.value}
                                    </div>
                                </div>
                            </div>
                        </motion.a>
                    ))}

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.35, delay: 0.5 }}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.75rem',
                            background: 'rgba(52, 211, 153, 0.06)',
                            padding: '1rem 1.25rem',
                            borderRadius: 'var(--radius)',
                            border: '1px solid rgba(52, 211, 153, 0.2)',
                        }}
                    >
                        <span className="otw-dot" />
                        <span style={{ color: 'var(--success-color)', fontSize: '0.88rem', fontWeight: 500 }}>
                            Currently open for opportunities
                        </span>
                    </motion.div>
                </motion.div>

                <motion.form
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1.25rem',
                        background: 'var(--bg-card)',
                        padding: '2rem',
                        borderRadius: 'var(--radius)',
                        border: '1px solid var(--border-color)',
                        backdropFilter: 'blur(12px)',
                    }}
                >
                    {[
                        { id: 'name', label: 'Name', type: 'text', placeholder: 'Your name' },
                        { id: 'email', label: 'Email', type: 'email', placeholder: 'your.email@example.com' },
                    ].map(f => (
                        <div key={f.id} style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                            <label htmlFor={f.id} style={{ color: 'var(--text-secondary)', fontSize: '0.82rem', fontWeight: 600, fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                {f.label}
                            </label>
                            <input
                                type={f.type}
                                id={f.id}
                                name={f.id}
                                value={formData[f.id]}
                                onChange={handleChange}
                                required
                                placeholder={f.placeholder}
                                style={inputStyle}
                                onFocus={e => { e.target.style.borderColor = 'var(--primary-color)'; }}
                                onBlur={e => { e.target.style.borderColor = 'var(--border-hover)'; }}
                            />
                        </div>
                    ))}

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                        <label htmlFor="message" style={{ color: 'var(--text-secondary)', fontSize: '0.82rem', fontWeight: 600, fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={5}
                            placeholder="Hello! I'd like to discuss..."
                            style={{ ...inputStyle, resize: 'vertical' }}
                            onFocus={e => { e.target.style.borderColor = 'var(--primary-color)'; }}
                            onBlur={e => { e.target.style.borderColor = 'var(--border-hover)'; }}
                        />
                    </div>

                    <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} disabled={sending}>
                        {sending ? 'Sending...' : 'Send Message →'}
                    </button>
                </motion.form>
            </div>
        </section>
    );
};

export default Contact;
