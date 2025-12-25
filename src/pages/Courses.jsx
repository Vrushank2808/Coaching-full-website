import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Clock, BookOpen, ChevronRight, GraduationCap, Star, Filter, Users, Award } from 'lucide-react';
import { courses } from '../data/mockCourses';
import './Courses.css';

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

const Courses = () => {
  const [selectedLevel, setSelectedLevel] = useState('all');

  const levels = ['all', 'Beginner', 'Intermediate', 'Advanced'];

  const filteredCourses = selectedLevel === 'all'
    ? courses
    : courses.filter(course => course.level === selectedLevel);

  const stats = [
    { icon: GraduationCap, value: `${courses.length}+`, label: 'Programs', color: 'primary' },
    { icon: Star, value: '4.9/5', label: 'Average Rating', color: 'success' },
    { icon: Users, value: '10,000+', label: 'Students', color: 'accent' },
    { icon: Award, value: '95%', label: 'Success Rate', color: 'warning' }
  ];

  return (
    <div className="courses-page">
      {/* Hero Section */}
      <motion.section
        className="courses-hero"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <div className="hero-background">
          <div className="hero-shape shape-1"></div>
          <div className="hero-shape shape-2"></div>
        </div>
        <div className="container">
          <motion.span className="section-badge" variants={fadeInUp}>
            <GraduationCap size={16} /> Expert-Led Programs
          </motion.span>
          <motion.h1 className="courses-title" variants={fadeInUp}>
            Our Premium <span className="text-gradient">Courses</span>
          </motion.h1>
          <motion.p className="courses-description" variants={fadeInUp}>
            Scientifically designed curriculum to help you crack the toughest competitive exams with confidence.
          </motion.p>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        className="courses-stats"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className={`stat-card stat-${stat.color}`}
                variants={fadeInUp}
              >
                <div className="stat-icon">
                  <stat.icon size={24} />
                </div>
                <div className="stat-content">
                  <h3 className="stat-value">{stat.value}</h3>
                  <p className="stat-label">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Filter Section */}
      <section className="courses-filter">
        <div className="container">
          <div className="filter-bar">
            <div className="filter-label">
              <Filter size={18} />
              <span>Filter by Level:</span>
            </div>
            <div className="filter-buttons">
              {levels.map(level => (
                <button
                  key={level}
                  className={`filter-btn ${selectedLevel === level ? 'active' : ''}`}
                  onClick={() => setSelectedLevel(level)}
                >
                  {level === 'all' ? 'All Levels' : level}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <motion.section
        className="courses-grid-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
      >
        <div className="container">
          <div className="courses-count">
            Showing <strong>{filteredCourses.length}</strong> courses
          </div>
          <div className="courses-grid">
            {filteredCourses.map((course) => (
              <motion.article
                key={course.id}
                className="course-card"
                variants={fadeInUp}
              >
                <div className="course-image">
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    loading="lazy"
                  />
                  <div className="course-overlay"></div>
                  <span className={`course-badge level-${course.level.toLowerCase()}`}>
                    {course.level}
                  </span>
                  <div className="course-title-overlay">
                    <h3>{course.title}</h3>
                  </div>
                </div>

                <div className="course-content">
                  <div className="course-meta">
                    <span className="meta-item">
                      <Clock size={14} />
                      {course.duration}
                    </span>
                    <span className="meta-item">
                      <BookOpen size={14} />
                      {course.syllabus.length} Modules
                    </span>
                  </div>

                  <p className="course-description">{course.description}</p>

                  <div className="instructor-info">
                    <div className="instructor-avatar">
                      {course.instructor.name.charAt(0)}
                    </div>
                    <div className="instructor-details">
                      <p className="instructor-name">{course.instructor.name}</p>
                      <p className="instructor-qual">{course.instructor.qualification}</p>
                    </div>
                  </div>

                  <div className="course-footer">
                    <div className="course-price">
                      <span className="price">₹{(course.fees / 1000).toFixed(0)}k</span>
                      <span className="period">/ year</span>
                    </div>
                    <Link to={`/courses/${course.id}`} className="btn btn-primary btn-sm">
                      View Details <ChevronRight size={16} />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="no-courses">
              <GraduationCap size={64} />
              <h3>No courses found</h3>
              <p>Try selecting a different level filter</p>
            </div>
          )}
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="courses-cta"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <div className="container">
          <div className="cta-content">
            <h2>Can't decide which course is right for you?</h2>
            <p>Get a free counseling session with our academic advisors to find the perfect program for your goals.</p>
            <Link to="/contact" className="btn btn-light btn-lg">
              Book Free Counseling <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Courses;
