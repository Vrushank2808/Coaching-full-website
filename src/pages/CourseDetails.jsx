import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { courses } from '../data/mockCourses';
import { Clock, BookOpen, User, CheckCircle, ArrowLeft, Download, Star, Users, Award, Play, Calendar } from 'lucide-react';
import './CourseDetails.css';

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

const CourseDetails = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('overview');

  const course = courses.find(c => c.id === parseInt(id));

  if (!course) {
    return (
      <div className="course-not-found">
        <div className="not-found-content">
          <h1>Course Not Found</h1>
          <p>The course you're looking for doesn't exist.</p>
          <Link to="/courses" className="btn btn-primary">
            <ArrowLeft size={18} /> Back to Courses
          </Link>
        </div>
      </div>
    );
  }

  const features = [
    'Live Doubt Clearing Sessions',
    'Weekly Mock Tests & Analysis',
    'Printed Study Material',
    '1-on-1 Mentorship Program',
    'Lifetime Access to Resources',
    'Certificate on Completion'
  ];

  const learningOutcomes = [
    'Master core concepts',
    'Solve complex problems',
    'Exam strategies',
    'Time management'
  ];

  return (
    <div className="course-details-page">
      {/* Course Header */}
      <motion.header
        className="course-header"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <div className="header-background"></div>
        <div className="container">
          <Link to="/courses" className="back-link">
            <ArrowLeft size={18} /> Back to Courses
          </Link>

          <div className="header-content">
            <motion.div className="course-badges" variants={fadeInUp}>
              <span className={`level-badge level-${course.level.toLowerCase()}`}>
                {course.level} Level
              </span>
              <span className="rating-badge">
                <Star size={14} fill="currentColor" /> 4.9 Rating
              </span>
            </motion.div>

            <motion.h1 className="course-title" variants={fadeInUp}>
              {course.title}
            </motion.h1>

            <motion.p className="course-description" variants={fadeInUp}>
              {course.description}
            </motion.p>

            <motion.div className="course-info" variants={fadeInUp}>
              <span className="info-item">
                <Clock size={20} /> {course.duration}
              </span>
              <span className="info-item">
                <User size={20} /> {course.instructor.name}
              </span>
              <span className="info-item">
                <BookOpen size={20} /> {course.syllabus.length} Modules
              </span>
              <span className="info-item">
                <Users size={20} /> 500+ Students
              </span>
            </motion.div>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="course-main">
        <div className="container">
          <div className="course-grid">
            {/* Left Content */}
            <div className="course-content-area">
              <motion.div
                className="tabs-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                {/* Tab Navigation */}
                <div className="tab-navigation">
                  {['overview', 'syllabus', 'instructor'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                  ))}
                </div>

                {/* Tab Content */}
                <div className="tab-content">
                  {activeTab === 'overview' && (
                    <div className="tab-panel">
                      <div className="panel-section">
                        <h3>About This Course</h3>
                        <p className="about-text">{course.description}</p>
                      </div>

                      <div className="panel-section">
                        <h4>What You'll Learn</h4>
                        <div className="learning-grid">
                          {learningOutcomes.map((item, i) => (
                            <div key={i} className="learning-item">
                              <CheckCircle size={20} />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="panel-section">
                        <h4>Prerequisites</h4>
                        <ul className="prerequisites-list">
                          {course.prerequisites.map((req, i) => (
                            <li key={i}>
                              <span className="bullet"></span>
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {activeTab === 'syllabus' && (
                    <div className="tab-panel">
                      <div className="syllabus-header">
                        <h3>Course Curriculum</h3>
                        <span className="module-count">{course.syllabus.length} Modules</span>
                      </div>

                      <div className="syllabus-list">
                        {course.syllabus.map((item, idx) => (
                          <div key={idx} className="syllabus-item">
                            <div className="syllabus-number">
                              {String(idx + 1).padStart(2, '0')}
                            </div>
                            <div className="syllabus-content">
                              <h4>{item.title}</h4>
                              <p>{item.description}</p>
                            </div>
                            <span className="syllabus-week">
                              <Calendar size={12} /> Week {item.week}
                            </span>
                          </div>
                        ))}
                      </div>

                      <button className="download-btn">
                        <Download size={18} /> Download Full Syllabus PDF
                      </button>
                    </div>
                  )}

                  {activeTab === 'instructor' && (
                    <div className="tab-panel">
                      <h3>Meet Your Instructor</h3>
                      <div className="instructor-card">
                        <div className="instructor-avatar">
                          {course.instructor.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div className="instructor-info">
                          <h4>{course.instructor.name}</h4>
                          <p className="instructor-qual">{course.instructor.qualification}</p>
                          <p className="instructor-bio">{course.instructor.bio}</p>

                          <div className="instructor-stats">
                            <span>
                              <Award size={14} /> 500+ Selections
                            </span>
                            <span>
                              <Star size={14} /> 4.9 Rating
                            </span>
                            <span>
                              <Users size={14} /> 2000+ Students
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <aside className="course-sidebar">
              <motion.div
                className="sidebar-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                {/* Course Preview */}
                <div className="course-preview">
                  <img src={course.thumbnail} alt={course.title} />
                  <div className="preview-overlay">
                    <button className="play-btn">
                      <Play size={28} fill="currentColor" />
                    </button>
                  </div>
                  <span className="preview-text">Preview Available</span>
                </div>

                <div className="sidebar-content">
                  {/* Pricing */}
                  <div className="pricing-section">
                    <span className="pricing-label">Course Investment</span>
                    <div className="price">
                      <span className="amount">₹{course.fees.toLocaleString()}</span>
                      <span className="period">/ year</span>
                    </div>
                    <p className="emi-text">
                      EMI options available starting ₹{Math.round(course.fees / 12).toLocaleString()}/mo
                    </p>
                  </div>

                  {/* CTA Buttons */}
                  <div className="cta-buttons">
                    <button className="btn btn-primary btn-lg">Enroll Now</button>
                    <button className="btn btn-outline btn-lg">Download Brochure</button>
                  </div>

                  {/* Features */}
                  <div className="features-section">
                    <h5>This course includes:</h5>
                    <ul className="features-list">
                      {features.map((feature, i) => (
                        <li key={i}>
                          <CheckCircle size={18} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Support */}
                  <div className="support-section">
                    <p>Need help deciding?</p>
                    <a href="tel:+919876543210">Call +91 98765 43210</a>
                  </div>
                </div>
              </motion.div>
            </aside>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CourseDetails;
