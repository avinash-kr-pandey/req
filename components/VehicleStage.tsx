"use client";

import { motion } from "framer-motion";
import { Pause, Play } from "lucide-react";
import { useState } from "react";

const details = {
  Customize: {
    metricA: "352",
    metricALabel: "Top Speed",
    metricB: "620",
    metricBLabel: "Power (HP)",
    metricC: "780",
    metricCLabel: "Torque",
    metricD: "3.2 Sec",
    metricDLabel: "0-100 KM/H",
    metricE: "2,450 KM",
    metricELabel: "Oil Change",
    metricF: "520 KM",
    metricFLabel: "Range",
  },
  Bodywork: {
    metricA: "0.28",
    metricALabel: "Drag coefficient",
    metricB: "42%",
    metricBLabel: "Downforce",
    metricC: "68 KG",
    metricCLabel: "Weight saved",
    metricD: "Carbon",
    metricDLabel: "Aero package",
    metricE: "Active",
    metricELabel: "Rear wing",
    metricF: "Alloy",
    metricFLabel: "Chassis",
  },
  "Paint Job": {
    metricA: "24",
    metricALabel: "Color finishes",
    metricB: "4",
    metricBLabel: "Coat layers",
    metricC: "9H",
    metricCLabel: "Surface hardness",
    metricD: "Gloss",
    metricDLabel: "Selected finish",
    metricE: "Metallic",
    metricELabel: "Paint type",
    metricF: "Self-heal",
    metricFLabel: "Protection",
  },
  Accessories: {
    metricA: "18",
    metricALabel: "Cabin upgrades",
    metricB: "12",
    metricBLabel: "Exterior options",
    metricC: "960 W",
    metricCLabel: "Audio output",
    metricD: "Smart",
    metricDLabel: "Connected suite",
    metricE: "Alcantara",
    metricELabel: "Upholstery",
    metricF: "Level 2+",
    metricFLabel: "ADAS package",
  },
};

export function VehicleStage() {
  const [playing, setPlaying] = useState(false);
  const data = details.Customize;

  return (
    <motion.section
      className="vehicle-stage"
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7 }}
    >
      <div className="stage-ring ring-one" />
      <div className="stage-ring ring-two" />
      <div className="spotlight" />
      
      {/* Center Car Portrait Circle */}
      <motion.div
        className="center-car-portal"
        animate={playing ? { scale: [1, 1.02, 1] } : { scale: 1 }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
      >
        <div className="car-glow-ring" />
        <img src="/car.png" alt="Black sports car" className="portal-car-img" />
      </motion.div>

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
          <MetricItem value={data.metricA} label={data.metricALabel} />
          <MetricItem value={data.metricB} label={data.metricBLabel} />
          <MetricItem value={data.metricC} label={data.metricCLabel} />
        </motion.div>

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
          <MetricItem value={data.metricD} label={data.metricDLabel} />
          <MetricItem value={data.metricE} label={data.metricELabel} />
          <MetricItem value={data.metricF} label={data.metricFLabel} />
        </motion.div>
      </div>

      <button
        type="button"
        className="play-button-center"
        aria-label={playing ? "Pause vehicle preview" : "Play vehicle preview"}
        onClick={() => setPlaying(!playing)}
      >
        {playing ? <Pause size={19} fill="currentColor" /> : <Play size={19} fill="currentColor" />}
      </button>
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
