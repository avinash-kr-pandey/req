import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const laps = [
  ["LAP 01", "Speed Zone"],
  ["LAP 02", "Acceleration Zone"],
  ["LAP 03", "Technical Section"],
  ["LAP 04", "High Speed Zone"],
  ["LAP 05", "Final Corner"],
];

export function LapTrack({ active = 3 }: { active?: number }) {
  return (
    <footer className="lap-track">
      <svg
        viewBox="0 0 1440 105"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <motion.path
          d="M0 55 C120 38 230 72 370 45 C510 17 663 48 810 28 C970 5 1088 9 1230 8 C1315 8 1372 4 1440 -22"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="10 10"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        />
      </svg>
      <div className="lap-items">
        {laps.map(([label, detail], index) => (
          <div className={cn("lap", index === active && "active")} key={label}>
            <span className="lap-dot" />
            <b>{label}</b>
            <small>{detail}</small>
          </div>
        ))}
      </div>
    </footer>
  );
}
