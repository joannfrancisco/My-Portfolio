import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="notfound-container">
      {/* Animated 404 text */}
      <motion.h1
        className="notfound-title"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        404
      </motion.h1>

      {/* Animated subtitle */}
      <motion.p
        className="notfound-subtitle"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        Oops! The page you're looking for doesn’t exist.
      </motion.p>

      {/* Button with hover effect */}
      <motion.div
        className="notfound-btn"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <Link to="/">Go Back Home</Link>
      </motion.div>
    </div>
  );
}
