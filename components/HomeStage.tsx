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
      
      <div className="vehicle-stage-content">
        {/* Left Metrics */}
        <motion.div 
          className="metrics-col left-col"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
        >
          <MetricItem value="352" label="Top Speed" />
          <MetricItem value="620" label="Power (HP)" />
          <MetricItem value="780" label="Torque" />
        </motion.div>

        {/* Center Car Portrait Circle */}
        <div className="center-car-portal">
          <div className="car-glow-ring" />
          <img src="/car.png" alt="Black sports car" className="portal-car-img" />
        </div>

        {/* Right Metrics */}
        <motion.div 
          className="metrics-col right-col"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
        >
          <MetricItem value="3.2 Sec" label="0-100 KM/H" />
          <MetricItem value="2,450 KM" label="Oil Change" />
          <MetricItem value="520 KM" label="Range" />
        </motion.div>
      </div>
    </motion.section>
  );
}

function MetricItem({ value, label }: { value: string; label: string }) {
  return (
    <motion.div
      className="metric-item-box"
      variants={{
        hidden: { opacity: 0, y: 8 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <strong>{value}</strong>
      <span>{label}</span>
    </motion.div>
  );
}
