import { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, GraduationCap, Users, Search, Filter, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Results.css';

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

const Results = () => {
    const [selectedExam, setSelectedExam] = useState('all');
    const [selectedYear, setSelectedYear] = useState('all');

    const exams = ['all', 'UPSC', 'JEE', 'NEET', 'CAT'];
    const years = ['all', '2024', '2023', '2022', '2021'];

    const results = [
        { name: 'Priya Sharma', exam: 'UPSC', rank: 'AIR 45', year: '2024', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face' },
        { name: 'Rahul Kumar', exam: 'JEE', rank: 'AIR 156', year: '2024', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face' },
        { name: 'Anjali Patel', exam: 'NEET', rank: 'AIR 89', year: '2024', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face' },
        { name: 'Vikram Singh', exam: 'CAT', rank: '99.8%ile', year: '2024', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face' },
        { name: 'Sneha Reddy', exam: 'UPSC', rank: 'AIR 78', year: '2023', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=face' },
        { name: 'Arjun Nair', exam: 'JEE', rank: 'AIR 234', year: '2023', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face' },
        { name: 'Meera Iyer', exam: 'NEET', rank: 'AIR 156', year: '2023', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=face' },
        { name: 'Karan Mehta', exam: 'CAT', rank: '99.5%ile', year: '2023', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&crop=face' },
        { name: 'Divya Kapoor', exam: 'UPSC', rank: 'AIR 112', year: '2022', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face' },
        { name: 'Aditya Rao', exam: 'JEE', rank: 'AIR 89', year: '2022', image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=200&h=200&fit=crop&crop=face' },
        { name: 'Pooja Sharma', exam: 'NEET', rank: 'AIR 267', year: '2022', image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop&crop=face' },
        { name: 'Rohan Gupta', exam: 'JEE', rank: 'AIR 178', year: '2021', image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=200&h=200&fit=crop&crop=face' }
    ];

    const stats = [
        { icon: Trophy, value: '500+', label: 'Total Selections' },
        { icon: GraduationCap, value: '50+', label: 'Top 100 Ranks' },
        { icon: Star, value: '95%', label: 'Success Rate' },
        { icon: Users, value: '10,000+', label: 'Students Trained' }
    ];

    const filteredResults = results.filter(result => {
        if (selectedExam !== 'all' && result.exam !== selectedExam) return false;
        if (selectedYear !== 'all' && result.year !== selectedYear) return false;
        return true;
    });

    return (
        <div className="results-page">
            {/* Hero Section */}
            <motion.section
                className="results-hero"
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
            >
                <div className="container">
                    <motion.span className="section-badge" variants={fadeInUp}>
                        <Trophy size={16} /> Our Achievers
                    </motion.span>
                    <motion.h1 className="results-title" variants={fadeInUp}>
                        Our <span className="text-gradient">Results</span>
                    </motion.h1>
                    <motion.p className="results-description" variants={fadeInUp}>
                        Celebrating the success stories of our students who made their dreams come true.
                    </motion.p>
                </div>
            </motion.section>

            {/* Stats Section */}
            <motion.section
                className="results-stats"
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

            {/* Filter Section */}
            <section className="filter-section">
                <div className="container">
                    <div className="filter-bar">
                        <div className="filter-group">
                            <label><Filter size={16} /> Exam:</label>
                            <div className="filter-buttons">
                                {exams.map(exam => (
                                    <button
                                        key={exam}
                                        className={`filter-btn ${selectedExam === exam ? 'active' : ''}`}
                                        onClick={() => setSelectedExam(exam)}
                                    >
                                        {exam === 'all' ? 'All Exams' : exam}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="filter-group">
                            <label>Year:</label>
                            <div className="filter-buttons">
                                {years.map(year => (
                                    <button
                                        key={year}
                                        className={`filter-btn ${selectedYear === year ? 'active' : ''}`}
                                        onClick={() => setSelectedYear(year)}
                                    >
                                        {year === 'all' ? 'All Years' : year}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Results Grid */}
            <motion.section
                className="results-grid-section"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={staggerContainer}
            >
                <div className="container">
                    <div className="results-count">
                        Showing <strong>{filteredResults.length}</strong> achievers
                    </div>
                    <div className="results-grid">
                        {filteredResults.map((result, index) => (
                            <motion.div
                                key={index}
                                className="result-card"
                                variants={fadeInUp}
                            >
                                <div className="result-image">
                                    <img src={result.image} alt={result.name} />
                                </div>
                                <div className="result-content">
                                    <h3>{result.name}</h3>
                                    <div className="result-badges">
                                        <span className="exam-badge">{result.exam}</span>
                                        <span className="year-badge">{result.year}</span>
                                    </div>
                                    <div className="result-rank">
                                        <Trophy size={18} />
                                        <span>{result.rank}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    {filteredResults.length === 0 && (
                        <div className="no-results">
                            <Trophy size={64} />
                            <h3>No results found</h3>
                            <p>Try adjusting your filters</p>
                        </div>
                    )}
                </div>
            </motion.section>

            {/* CTA Section */}
            <motion.section
                className="results-cta"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUp}
            >
                <div className="container">
                    <div className="cta-content">
                        <h2>Ready to Be Our Next Success Story?</h2>
                        <p>Join the league of achievers and make your dreams come true.</p>
                        <Link to="/courses" className="btn btn-light btn-lg">
                            Explore Courses <ChevronRight size={18} />
                        </Link>
                    </div>
                </div>
            </motion.section>
        </div>
    );
};

export default Results;
