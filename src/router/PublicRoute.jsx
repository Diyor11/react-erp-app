import React from 'react';
import { motion } from 'framer-motion';
import { Navigate } from 'react-router-dom';
import * as authService from '../auth';

const PublicRoute = ({ component: Component }) => {
  return (
    window.localStorage.getItem('isLoggedIn') === 'true' ? (
      <Navigate to="/" />
    ) : (
      <motion.div initial={{ x: 200 }} animate={{ x: 0 }} exit={{ scale: 0 }}>
        <Component />
      </motion.div>
    )
  );
};

export default PublicRoute;
