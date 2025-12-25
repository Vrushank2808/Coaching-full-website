import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, Calendar, MessageSquare, CheckCircle } from 'lucide-react';
import CustomDropdown from '../components/CustomDropdown';
import './Contact.css';

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const Contact = () => {
    const [activeTab, setActiveTab] = useState('inquiry');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        course: '',
        date: '',
        time: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const contactInfo = [
        {
            icon: MapPin,
            title: 'Visit Us',
            details: ['123 Education Street', 'New Delhi, 110001']
        },
        {
            icon: Phone,
            title: 'Call Us',
            details: ['+91 98765 43210', '+91 11 2345 6789']
        },
        {
            icon: Mail,
            title: 'Email Us',
            details: ['info@coaching.com', 'admissions@coaching.com']
        },
        {
            icon: Clock,
            title: 'Working Hours',
            details: ['Mon - Sat: 8:00 AM - 8:00 PM', 'Sunday: 10:00 AM - 4:00 PM']
        }
    ];

    const courses = [
        'UPSC Civil Services',
        'JEE (Main + Advanced)',
        'NEET UG',
        'CAT / MBA Entrance',
        'Bank PO / Clerk',
        'SSC CGL / CHSL'
    ];

    const timeSlots = [
        '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
        '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM'
    ];

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            setIsSubmitted(true);
            setFormData({
                name: '',
                email: '',
                phone: '',
                course: '',
                date: '',
                time: '',
                message: ''
            });
        }, 1500);
    };

    const resetForm = () => {
        setIsSubmitted(false);
    };

    return (
        <div className="contact-page">
            {/* Hero Section */}
            <motion.section
                className="contact-hero"
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
            >
                <div className="container">
                    <motion.span className="section-badge" variants={fadeInUp}>
                        <MessageSquare size={16} /> Get In Touch
                    </motion.span>
                    <motion.h1 className="contact-title" variants={fadeInUp}>
                        Contact <span className="text-gradient">Us</span>
                    </motion.h1>
                    <motion.p className="contact-description" variants={fadeInUp}>
                        Have questions? We're here to help you start your journey towards success.
                    </motion.p>
                </div>
            </motion.section>

            {/* Contact Info Cards */}
            <motion.section
                className="contact-info-section"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={staggerContainer}
            >
                <div className="container">
                    <div className="contact-info-grid">
                        {contactInfo.map((item, index) => (
                            <motion.div key={index} className="contact-info-card" variants={fadeInUp}>
                                <div className="info-icon">
                                    <item.icon size={24} />
                                </div>
                                <h3>{item.title}</h3>
                                {item.details.map((detail, i) => (
                                    <p key={i}>{detail}</p>
                                ))}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* Contact Form Section */}
            <motion.section
                className="contact-form-section"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={staggerContainer}
            >
                <div className="container">
                    <div className="contact-grid">
                        {/* Form */}
                        <motion.div className="contact-form-wrapper" variants={fadeInUp}>
                            {/* Tab Navigation */}
                            <div className="form-tabs">
                                <button
                                    className={`tab-btn ${activeTab === 'inquiry' ? 'active' : ''}`}
                                    onClick={() => { setActiveTab('inquiry'); resetForm(); }}
                                >
                                    <MessageSquare size={18} />
                                    Send Inquiry
                                </button>
                                <button
                                    className={`tab-btn ${activeTab === 'demo' ? 'active' : ''}`}
                                    onClick={() => { setActiveTab('demo'); resetForm(); }}
                                >
                                    <Calendar size={18} />
                                    Book Demo Class
                                </button>
                            </div>

                            {/* Form Content */}
                            <div className="form-content">
                                {isSubmitted ? (
                                    <div className="success-message">
                                        <div className="success-icon">
                                            <CheckCircle size={48} />
                                        </div>
                                        <h3>
                                            {activeTab === 'inquiry'
                                                ? 'Message Sent Successfully!'
                                                : 'Demo Class Booked!'}
                                        </h3>
                                        <p>
                                            {activeTab === 'inquiry'
                                                ? 'Thank you for reaching out. We\'ll get back to you within 24 hours.'
                                                : 'We\'ve received your booking request. Our team will contact you shortly to confirm.'}
                                        </p>
                                        <button className="btn btn-primary" onClick={resetForm}>
                                            {activeTab === 'inquiry' ? 'Send Another Message' : 'Book Another Demo'}
                                        </button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit}>
                                        <div className="form-row">
                                            <div className="form-group">
                                                <label>Full Name *</label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    placeholder="Enter your name"
                                                    required
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label>Email Address *</label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    placeholder="Enter your email"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="form-row">
                                            <div className="form-group">
                                                <label>Phone Number *</label>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    placeholder="Enter your phone"
                                                    required
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label>Course Interest *</label>
                                                <CustomDropdown
                                                    name="course"
                                                    options={courses}
                                                    value={formData.course}
                                                    onChange={handleChange}
                                                    placeholder="Select a course"
                                                />
                                            </div>
                                        </div>

                                        {activeTab === 'demo' && (
                                            <div className="form-row">
                                                <div className="form-group">
                                                    <label>Preferred Date *</label>
                                                    <input
                                                        type="date"
                                                        name="date"
                                                        value={formData.date}
                                                        onChange={handleChange}
                                                        min={new Date().toISOString().split('T')[0]}
                                                        required={activeTab === 'demo'}
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label>Preferred Time *</label>
                                                    <CustomDropdown
                                                        name="time"
                                                        options={timeSlots}
                                                        value={formData.time}
                                                        onChange={handleChange}
                                                        placeholder="Select time slot"
                                                    />
                                                </div>
                                            </div>
                                        )}

                                        <div className="form-group">
                                            <label>
                                                {activeTab === 'inquiry' ? 'Your Message *' : 'Additional Notes'}
                                            </label>
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                placeholder={activeTab === 'inquiry'
                                                    ? 'Tell us about your query...'
                                                    : 'Any specific topics you want to cover...'}
                                                rows="4"
                                                required={activeTab === 'inquiry'}
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            className={`btn btn-primary btn-lg submit-btn ${isLoading ? 'loading' : ''}`}
                                            disabled={isLoading}
                                        >
                                            {isLoading ? (
                                                <>
                                                    <span className="spinner"></span>
                                                    Processing...
                                                </>
                                            ) : (
                                                <>
                                                    <Send size={18} />
                                                    {activeTab === 'inquiry' ? 'Send Message' : 'Book Demo Class'}
                                                </>
                                            )}
                                        </button>
                                    </form>
                                )}
                            </div>
                        </motion.div>

                        {/* Map */}
                        <motion.div className="map-wrapper" variants={fadeInUp}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.9512671914366!2d77.20871661508096!3d28.631460782420527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Our Location"
                            />
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* FAQ Preview */}
            <motion.section
                className="faq-preview-section"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={staggerContainer}
            >
                <div className="container">
                    <motion.div className="section-header" variants={fadeInUp}>
                        <span className="section-badge">Common Questions</span>
                        <h2 className="section-title">Quick Answers</h2>
                    </motion.div>
                    <div className="faq-grid">
                        {[
                            {
                                q: 'What are the batch timings?',
                                a: 'We offer flexible batch timings: Morning (6 AM - 9 AM), Day (10 AM - 1 PM), and Evening (5 PM - 8 PM) batches.'
                            },
                            {
                                q: 'Do you provide study materials?',
                                a: 'Yes, comprehensive study materials, practice papers, and online resources are included in all our courses.'
                            },
                            {
                                q: 'Is there any fee installment option?',
                                a: 'Yes, we offer easy EMI options and flexible payment plans. Contact our admissions team for details.'
                            },
                            {
                                q: 'Can I attend a demo class before enrolling?',
                                a: 'Absolutely! Book a free demo class using the form above to experience our teaching methodology.'
                            }
                        ].map((faq, index) => (
                            <motion.div key={index} className="faq-card" variants={fadeInUp}>
                                <h4>{faq.q}</h4>
                                <p>{faq.a}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>
        </div>
    );
};

export default Contact;
