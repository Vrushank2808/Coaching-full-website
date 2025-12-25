import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="not-found-page">
            <motion.div
                className="not-found-content"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="not-found-code">404</h1>
                <h2 className="not-found-title">Page Not Found</h2>
                <p className="not-found-description">
                    Oops! The page you're looking for doesn't exist or has been moved.
                </p>
                <div className="not-found-actions">
                    <Link to="/" className="btn btn-primary btn-lg">
                        <Home size={18} /> Go to Home
                    </Link>
                    <button onClick={() => window.history.back()} className="btn btn-outline btn-lg">
                        <ArrowLeft size={18} /> Go Back
                    </button>
                </div>
            </motion.div>
        </div>
    );
};

export default NotFound;
