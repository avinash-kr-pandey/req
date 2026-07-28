"use client";

import { motion } from "framer-motion";

export function HomeStage() {
  return (
    <motion.section
      className="home-stage"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.28 }}
    >
      {/* Center Car Portrait Circle */}
      <div className="center-car-portal">
        <div className="car-glow-ring" />
        <img src="/car.png" alt="Black sports car" className="portal-car-img" />
      </div>
    </motion.section>
  );
}
