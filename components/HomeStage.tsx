"use client";

import { motion } from "framer-motion";

export function HomeStage() {
  return (
    <motion.section
      className="home-stage"
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.65 }}
    >
      <div className="stage-ring ring-one" />
      <div className="stage-ring ring-two" />
      <div className="spotlight" />
      
      <div className="vehicle-stage-content" style={{ justifyContent: "center" }}>
        {/* Center Car Portrait Circle */}
        <div className="center-car-portal">
          <div className="car-glow-ring" />
          <img src="/car.png" alt="Black sports car" className="portal-car-img" />
        </div>
      </div>
    </motion.section>
  );
}

