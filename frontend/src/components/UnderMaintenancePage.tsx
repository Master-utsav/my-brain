import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

interface UnderMaintenanceProps {
  pageName: string;
}

const UnderMaintenancePage: React.FC<UnderMaintenanceProps> = ({ pageName }) => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Animated Icon */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 100, damping: 10 }}
        className="flex items-center justify-center mb-6"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-20 h-20 text-teal-500 dark:text-teal-400"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 12h-15"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 19.5v-15"
          />
        </svg>
      </motion.div>

      {/* Page Title */}
      <motion.h1
        className="text-4xl font-extrabold text-gray-800 dark:text-white text-center mb-4"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {pageName} is under maintenance.
      </motion.h1>

      {/* Subtitle */}
      <p className="text-lg text-gray-600 dark:text-gray-400 text-center mb-8">
        We’re making some improvements! Please check back later.
      </p>

      {/* Button to Redirect */}
      <motion.button
        className="px-6 py-3 rounded-lg bg-teal-500 text-white font-medium hover:bg-teal-600 focus:outline-none focus:ring-4 focus:ring-teal-300 dark:focus:ring-teal-700 transition"
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.3 }}
        onClick={() => navigate(-1)}
      >
        Go Back
      </motion.button>

      {/* Decoration Circles */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute w-72 h-72 bg-teal-500/10 dark:bg-teal-400/10 rounded-full blur-xl"
          style={{ top: '20%', left: '10%' }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        />
        <motion.div
          className="absolute w-72 h-72 bg-teal-500/10 dark:bg-teal-400/10 rounded-full blur-xl"
          style={{ bottom: '15%', right: '15%' }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
      </div>
    </div>
  );
};

export default UnderMaintenancePage;
