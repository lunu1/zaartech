import React from "react";
import { motion } from "framer-motion";

const ComingSoon = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh] bg-[#F5F3EF] text-gray-800 text-center px-4">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold mb-4"
      >
        Coming Soon!
      </motion.h1>
      <p className="text-lg mb-6">We're working on something amazing.</p>
    </div>
  );
};

export default ComingSoon;
