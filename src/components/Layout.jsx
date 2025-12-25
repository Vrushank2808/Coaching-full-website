import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GraduationCap, Phone, Mail, MapPin, Clock, Menu, X, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import './Layout.css';

const Layout = ({ children }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About' },
        { path: '/courses', label: 'Courses' },
        { path: '/results', label: 'Results' },
        { path: '/contact', label: 'Contact' }
    ];

    return (
        <div className="layout">
            {/* Top Bar */}
            <div className="top-bar" role="banner">
                <div className="container top-bar-content">
                    <div className="top-bar-info">
                        <a href="tel:+919876543210" aria-label="Call us">
                            <Phone size={14} aria-hidden="true" /> +91 98765 43210
                        </a>
                        <a href="mailto:info@eduprime.edu" aria-label="Email us">
                            <Mail size={14} aria-hidden="true" /> info@eduprime.edu
                        </a>
                        <span><Clock size={14} aria-hidden="true" /> Mon-Sat: 9AM - 7PM</span>
                    </div>
                    <div className="top-bar-social" aria-label="Social media links">
                        <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Facebook size={16} aria-hidden="true" /></a>
                        <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram size={16} aria-hidden="true" /></a>
                        <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><Twitter size={16} aria-hidden="true" /></a>
                        <a href="#" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><Youtube size={16} aria-hidden="true" /></a>
                    </div>
                </div>
            </div>

            {/* Navbar */}
            <nav className="navbar" role="navigation" aria-label="Main navigation">
                <div className="container navbar-content">
                    <Link to="/" className="logo" aria-label="EduPrime Institute - Home">
                        <div className="logo-icon">
                            <GraduationCap size={24} aria-hidden="true" />
                        </div>
                        <span>EduPrime</span>
                    </Link>

                    <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`} role="menubar">
                        {navLinks.map(link => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={location.pathname === link.path ? 'active' : ''}
                                onClick={() => setMobileMenuOpen(false)}
                                role="menuitem"
                                aria-current={location.pathname === link.path ? 'page' : undefined}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    <div className="nav-actions">
                        <Link to="/contact" className="btn btn-primary">Enroll Now</Link>
                    </div>

                    <button
                        className="mobile-menu-btn"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-expanded={mobileMenuOpen}
                        aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                    >
                        {mobileMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
                    </button>
                </div>
            </nav>

            {/* Main Content */}
            <main id="main-content" role="main">{children}</main>

            {/* Footer */}
            <footer className="footer" role="contentinfo">
                <div className="container">
                    <div className="footer-grid">
                        <div className="footer-brand">
                            <Link to="/" className="logo" aria-label="EduPrime Institute - Home">
                                <div className="logo-icon" style={{ background: 'var(--gradient-primary)' }}>
                                    <GraduationCap size={20} aria-hidden="true" />
                                </div>
                                <span>EduPrime</span>
                            </Link>
                            <p>Empowering students since 2009. We transform dreams into reality through quality education and dedicated mentorship.</p>
                            <div className="footer-social" aria-label="Social media links">
                                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Facebook size={20} aria-hidden="true" /></a>
                                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram size={20} aria-hidden="true" /></a>
                                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><Twitter size={20} aria-hidden="true" /></a>
                                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><Youtube size={20} aria-hidden="true" /></a>
                            </div>
                        </div>

                        <nav className="footer-links" aria-label="Footer navigation">
                            <h4>Quick Links</h4>
                            {navLinks.map(link => (
                                <Link key={link.path} to={link.path}>{link.label}</Link>
                            ))}
                        </nav>

                        <div className="footer-contact">
                            <h4>Contact Us</h4>
                            <p><Phone size={16} aria-hidden="true" /> <a href="tel:+919876543210">+91 98765 43210</a></p>
                            <p><Mail size={16} aria-hidden="true" /> <a href="mailto:info@eduprime.edu">info@eduprime.edu</a></p>
                            <p><MapPin size={16} aria-hidden="true" /> 123 Education Lane, Tech City</p>
                        </div>

                        <div className="footer-hours">
                            <h4>Office Hours</h4>
                            <p>Monday - Saturday</p>
                            <time>9:00 AM - 7:00 PM</time>
                            <p>Sunday</p>
                            <time>10:00 AM - 2:00 PM</time>
                        </div>
                    </div>

                    <div className="footer-bottom">
                        <p>© {new Date().getFullYear()} EduPrime Institute. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
