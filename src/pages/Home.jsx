import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { GraduationCap, Users, Award, Target, ChevronRight, BookOpen, Clock, Star, Play } from 'lucide-react';
import { courses } from '../data/mockCourses';
import './Home.css';

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

const Home = () => {
    const stats = [
        { icon: Users, value: '10,000+', label: 'Students Enrolled' },
        { icon: Award, value: '95%', label: 'Success Rate' },
        { icon: GraduationCap, value: '500+', label: 'Selections' },
        { icon: Target, value: '50+', label: 'Expert Faculty' }
    ];

    const features = [
        {
            icon: BookOpen,
            title: 'Comprehensive Curriculum',
            description: 'Well-structured study material covering all exam topics with regular updates.'
        },
        {
            icon: Users,
            title: 'Expert Faculty',
            description: 'Learn from experienced educators with proven track records in competitive exams.'
        },
        {
            icon: Target,
            title: 'Personalized Learning',
            description: 'Customized study plans and one-on-one doubt clearing sessions.'
        },
        {
            icon: Award,
            title: 'Mock Tests & Analysis',
            description: 'Regular practice tests with detailed performance analysis and feedback.'
        }
    ];

    return (
        <div className="home-page">
            {/* Hero Section */}
            <motion.section
                className="hero"
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
            >
                <div className="hero-background">
                    <div className="hero-shape shape-1"></div>
                    <div className="hero-shape shape-2"></div>
                </div>
                <div className="container">
                    <div className="hero-content">
                        <motion.span className="hero-badge" variants={fadeInUp}>
                            <GraduationCap size={16} />
                            India's Premier Coaching Institute
                        </motion.span>
                        <motion.h1 className="hero-title" variants={fadeInUp}>
                            Transform Your Dreams Into <span className="text-gradient">Reality</span>
                        </motion.h1>
                        <motion.p className="hero-description" variants={fadeInUp}>
                            Join thousands of successful students who have cracked competitive exams with our expert guidance, comprehensive study material, and proven strategies.
                        </motion.p>
                        <motion.div className="hero-actions" variants={fadeInUp}>
                            <Link to="/courses" className="btn btn-primary btn-lg">
                                Explore Courses <ChevronRight size={18} />
                            </Link>
                            <button className="btn btn-outline btn-lg">
                                <Play size={18} /> Watch Demo
                            </button>
                        </motion.div>
                    </div>
                    <motion.div className="hero-image" variants={fadeInUp}>
                        <img
                            src="/hero-students.jpg"
                            alt="Students studying"
                            loading="eager"
                        />
                        <div className="hero-stats-card">
                            <div className="stats-card-icon">
                                <Award size={24} />
                            </div>
                            <div>
                                <p className="stats-card-value">95%</p>
                                <p className="stats-card-label">Success Rate</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.section>

            {/* Stats Section */}
            <motion.section
                className="stats-section"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={staggerContainer}
            >
                <div className="container">
                    <div className="stats-grid">
                        {stats.map((stat, index) => (
                            <motion.div key={index} className="stat-card" variants={fadeInUp}>
                                <div className="stat-icon">
                                    <stat.icon size={28} />
                                </div>
                                <h3 className="stat-value">{stat.value}</h3>
                                <p className="stat-label">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* Features Section */}
            <motion.section
                className="features-section"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={staggerContainer}
            >
                <div className="container">
                    <motion.div className="section-header" variants={fadeInUp}>
                        <span className="section-badge">Why Choose Us</span>
                        <h2 className="section-title">Excellence in Every Aspect</h2>
                        <p className="section-description">
                            We provide comprehensive coaching solutions designed to help you succeed in competitive examinations.
                        </p>
                    </motion.div>
                    <div className="features-grid">
                        {features.map((feature, index) => (
                            <motion.div key={index} className="feature-card" variants={fadeInUp}>
                                <div className="feature-icon">
                                    <feature.icon size={28} />
                                </div>
                                <h3 className="feature-title">{feature.title}</h3>
                                <p className="feature-description">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* Featured Courses */}
            <motion.section
                className="courses-section"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={staggerContainer}
            >
                <div className="container">
                    <motion.div className="section-header" variants={fadeInUp}>
                        <span className="section-badge">Popular Programs</span>
                        <h2 className="section-title">Featured Courses</h2>
                        <p className="section-description">
                            Explore our most popular courses designed by expert educators.
                        </p>
                    </motion.div>
                    <div className="courses-grid">
                        {courses.slice(0, 3).map((course, index) => (
                            <motion.article key={course.id} className="course-card" variants={fadeInUp}>
                                <div className="course-image">
                                    <img src={course.thumbnail} alt={course.title} loading="lazy" />
                                    <span className={`course-badge ${course.level.toLowerCase()}`}>
                                        {course.level}
                                    </span>
                                </div>
                                <div className="course-content">
                                    <h3 className="course-title">{course.title}</h3>
                                    <p className="course-description">{course.description}</p>
                                    <div className="course-meta">
                                        <span><Clock size={14} /> {course.duration}</span>
                                        <span><BookOpen size={14} /> {course.syllabus.length} Modules</span>
                                    </div>
                                    <div className="course-footer">
                                        <div className="course-price">
                                            <span className="price">₹{(course.fees / 1000).toFixed(0)}k</span>
                                            <span className="period">/year</span>
                                        </div>
                                        <Link to={`/courses/${course.id}`} className="btn btn-primary btn-sm">
                                            Learn More
                                        </Link>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                    <motion.div className="section-footer" variants={fadeInUp}>
                        <Link to="/courses" className="btn btn-outline btn-lg">
                            View All Courses <ChevronRight size={18} />
                        </Link>
                    </motion.div>
                </div>
            </motion.section>

            {/* Testimonials */}
            <motion.section
                className="testimonials-section"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={staggerContainer}
            >
                <div className="container">
                    <motion.div className="section-header" variants={fadeInUp}>
                        <span className="section-badge">Student Success</span>
                        <h2 className="section-title">What Our Students Say</h2>
                    </motion.div>
                    <div className="testimonials-grid">
                        {[
                            {
                                name: 'Priya Sharma',
                                role: 'IAS 2023 - AIR 45',
                                content: 'The structured approach and mentorship helped me crack UPSC in my first attempt. Forever grateful!',
                                image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face'
                            },
                            {
                                name: 'Rahul Kumar',
                                role: 'IIT Delhi - JEE AIR 156',
                                content: 'Best faculty, great study material, and regular tests made all the difference. Highly recommended!',
                                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
                            },
                            {
                                name: 'Anjali Patel',
                                role: 'NEET 2023 - 650+ Score',
                                content: 'The personalized attention and doubt-clearing sessions were incredibly helpful throughout my preparation.',
                                image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face'
                            }
                        ].map((testimonial, index) => (
                            <motion.div key={index} className="testimonial-card" variants={fadeInUp}>
                                <div className="testimonial-rating">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={16} fill="currentColor" />
                                    ))}
                                </div>
                                <p className="testimonial-content">"{testimonial.content}"</p>
                                <div className="testimonial-author">
                                    <img src={testimonial.image} alt={testimonial.name} />
                                    <div>
                                        <h4>{testimonial.name}</h4>
                                        <p>{testimonial.role}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* CTA Section */}
            <motion.section
                className="cta-section"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUp}
            >
                <div className="container">
                    <div className="cta-content">
                        <h2>Ready to Start Your Journey?</h2>
                        <p>Join our community of successful students and take the first step towards your dream career.</p>
                        <div className="cta-actions">
                            <Link to="/contact" className="btn btn-light btn-lg">
                                Book Free Demo <ChevronRight size={18} />
                            </Link>
                            <Link to="/courses" className="btn btn-outline-light btn-lg">
                                Explore Courses
                            </Link>
                        </div>
                    </div>
                </div>
            </motion.section>
        </div>
    );
};

export default Home;
