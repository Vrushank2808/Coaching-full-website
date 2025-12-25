import { motion } from 'framer-motion';
import { Award, Users, Target, BookOpen, GraduationCap, CheckCircle, Star } from 'lucide-react';
import './About.css';

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

const About = () => {
    const team = [
        {
            name: 'Dr. Rajesh Kumar',
            role: 'Founder & Director',
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
            specialization: 'IAS Coach, 20+ years experience'
        },
        {
            name: 'Prof. Meera Singh',
            role: 'Academic Head',
            image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face',
            specialization: 'JEE Expert, IIT Bombay'
        },
        {
            name: 'Dr. Amit Verma',
            role: 'Senior Faculty',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
            specialization: 'NEET Specialist, AIIMS Delhi'
        },
        {
            name: 'Ms. Priya Patel',
            role: 'Counselor',
            image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
            specialization: 'Career Guidance Expert'
        }
    ];

    const milestones = [
        { year: '2010', event: 'Founded with 50 students' },
        { year: '2015', event: 'Expanded to 3 centers' },
        { year: '2018', event: 'First online courses launched' },
        { year: '2020', event: 'Crossed 10,000 students milestone' },
        { year: '2023', event: 'National recognition for excellence' }
    ];

    const values = [
        {
            icon: Target,
            title: 'Excellence',
            description: 'We strive for the highest standards in education and student outcomes.'
        },
        {
            icon: Users,
            title: 'Student-Centric',
            description: 'Every decision we make is guided by what\'s best for our students.'
        },
        {
            icon: BookOpen,
            title: 'Innovation',
            description: 'We continuously evolve our teaching methods to stay ahead.'
        },
        {
            icon: Award,
            title: 'Integrity',
            description: 'Honesty and transparency are at the core of everything we do.'
        }
    ];

    return (
        <div className="about-page">
            {/* Hero Section */}
            <motion.section
                className="about-hero"
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
            >
                <div className="container">
                    <motion.span className="section-badge" variants={fadeInUp}>
                        <GraduationCap size={16} /> About Us
                    </motion.span>
                    <motion.h1 className="about-title" variants={fadeInUp}>
                        Shaping Futures <span className="text-gradient">Since 2010</span>
                    </motion.h1>
                    <motion.p className="about-description" variants={fadeInUp}>
                        We are committed to providing world-class education and guidance to help students achieve their dreams of cracking competitive examinations.
                    </motion.p>
                </div>
            </motion.section>

            {/* Story Section */}
            <motion.section
                className="story-section"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={staggerContainer}
            >
                <div className="container">
                    <div className="story-grid">
                        <motion.div className="story-image" variants={fadeInUp}>
                            <img
                                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop"
                                alt="Our classroom"
                            />
                            <div className="story-badge">
                                <span className="badge-number">14+</span>
                                <span className="badge-text">Years of Excellence</span>
                            </div>
                        </motion.div>
                        <motion.div className="story-content" variants={fadeInUp}>
                            <h2>Our Story</h2>
                            <p>
                                Founded in 2010 by Dr. Rajesh Kumar, our institute started with a simple mission: to provide quality education that transforms lives. What began as a small classroom with 50 students has grown into one of the most trusted coaching institutes in the country.
                            </p>
                            <p>
                                Over the years, we have helped thousands of students crack prestigious examinations like UPSC, JEE, NEET, and various state-level competitive exams. Our success lies in our dedicated faculty, innovative teaching methods, and unwavering commitment to student success.
                            </p>
                            <div className="story-stats">
                                <div className="story-stat">
                                    <span className="stat-number">10,000+</span>
                                    <span className="stat-text">Students Taught</span>
                                </div>
                                <div className="story-stat">
                                    <span className="stat-number">500+</span>
                                    <span className="stat-text">Selections</span>
                                </div>
                                <div className="story-stat">
                                    <span className="stat-number">95%</span>
                                    <span className="stat-text">Success Rate</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* Values Section */}
            <motion.section
                className="values-section"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={staggerContainer}
            >
                <div className="container">
                    <motion.div className="section-header" variants={fadeInUp}>
                        <span className="section-badge">Our Foundation</span>
                        <h2 className="section-title">Core Values</h2>
                        <p className="section-description">
                            The principles that guide everything we do.
                        </p>
                    </motion.div>
                    <div className="values-grid">
                        {values.map((value, index) => (
                            <motion.div key={index} className="value-card" variants={fadeInUp}>
                                <div className="value-icon">
                                    <value.icon size={28} />
                                </div>
                                <h3>{value.title}</h3>
                                <p>{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* Timeline Section */}
            <motion.section
                className="timeline-section"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={staggerContainer}
            >
                <div className="container">
                    <motion.div className="section-header" variants={fadeInUp}>
                        <span className="section-badge">Our Journey</span>
                        <h2 className="section-title">Milestones</h2>
                    </motion.div>
                    <div className="timeline">
                        {milestones.map((milestone, index) => (
                            <motion.div
                                key={index}
                                className="timeline-item"
                                variants={fadeInUp}
                            >
                                <div className="timeline-marker"></div>
                                <div className="timeline-content">
                                    <span className="timeline-year">{milestone.year}</span>
                                    <p className="timeline-event">{milestone.event}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* Team Section */}
            <motion.section
                className="team-section"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={staggerContainer}
            >
                <div className="container">
                    <motion.div className="section-header" variants={fadeInUp}>
                        <span className="section-badge">Meet the Experts</span>
                        <h2 className="section-title">Our Team</h2>
                        <p className="section-description">
                            Dedicated educators committed to your success.
                        </p>
                    </motion.div>
                    <div className="team-grid">
                        {team.map((member, index) => (
                            <motion.div key={index} className="team-card" variants={fadeInUp}>
                                <div className="team-image">
                                    <img src={member.image} alt={member.name} />
                                </div>
                                <div className="team-info">
                                    <h3>{member.name}</h3>
                                    <p className="team-role">{member.role}</p>
                                    <p className="team-specialization">{member.specialization}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* Achievements Section */}
            <motion.section
                className="achievements-section"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={staggerContainer}
            >
                <div className="container">
                    <motion.div className="section-header" variants={fadeInUp}>
                        <span className="section-badge">Recognition</span>
                        <h2 className="section-title">Our Achievements</h2>
                    </motion.div>
                    <div className="achievements-grid">
                        {[
                            'Best Coaching Institute Award 2023',
                            'Excellence in Education Recognition',
                            'Top 10 Coaching Centers in India',
                            'Highest Success Rate in UPSC',
                            'Best Faculty Award 2022',
                            'Innovation in Online Education'
                        ].map((achievement, index) => (
                            <motion.div key={index} className="achievement-item" variants={fadeInUp}>
                                <CheckCircle size={24} />
                                <span>{achievement}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>
        </div>
    );
};

export default About;
