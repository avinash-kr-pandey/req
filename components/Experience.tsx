"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  Download,
  Share2,
  Check,
  MessageSquare,
  FileText,
  Award,
} from "lucide-react";
import { useState, useEffect } from "react";
import { BookingModal } from "@/components/BookingModal";
import { Heading } from "@/components/Heading";
import { HomeStage } from "@/components/HomeStage";
import { LapTrack } from "@/components/LapTrack";
import { Logo } from "@/components/Logo";
import { Pricing } from "@/components/Pricing";
import { SideNav, type ViewName } from "@/components/SideNav";
import { ThemeToggle } from "@/components/ThemeToggle";
import { VehicleStage } from "@/components/VehicleStage";
import { TimelineStage } from "@/components/TimelineStage";
import { cn } from "@/lib/utils";

export function Experience() {
  const [view, setView] = useState<ViewName | "chat" | "timeline" | "certifications">("dashboard");
  const [menuOpen, setMenuOpen] = useState(false);
  const [plan, setPlan] = useState<string | null>(null);
  const [showChat, setShowChat] = useState(false);

  useEffect(() => {
    setShowChat(false);
  }, [view]);

  return (
    <main className="experience dark">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="grain" />

      <div className="experience-container">
        <AnimatePresence>
          {showChat && (
            <motion.div 
              className="chat-overlay-container"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              style={{ position: 'absolute', inset: 0, zIndex: 60, pointerEvents: 'none' }}
            >
              {/* Light from top */}
              <motion.div 
                className="chat-spotlight"
                initial={{ opacity: 0, scaleY: 0 }}
                animate={{ opacity: 0.5, scaleY: 1 }}
                exit={{ opacity: 0, scaleY: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                style={{ 
                  position: 'absolute',
                  top: 0,
                  left: '50%',
                  x: '-50%',
                  width: '600px',
                  height: '100%',
                  transformOrigin: 'top center',
                  background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, transparent 80%)',
                  filter: 'blur(40px)',
                  pointerEvents: 'none'
                }}
              />

              <motion.div
                initial={{ x: '-150vw', y: '-50%', opacity: 0, scale: 0.9 }}
                animate={{ x: '-50%', y: '-50%', opacity: 1, scale: 1 }}
                exit={{ x: '-150vw', y: '-50%', opacity: 0, scale: 0.9 }}
                transition={{ type: "spring", damping: 25, stiffness: 120, delay: 0.1 }}
                style={{ 
                  position: 'absolute',
                  left: '50%',
                  top: '48%',
                  width: 'min(850px, 85vw)',
                  height: '280px',
                  background: '#c5c5c5',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '32px',
                  boxShadow: '0 40px 100px rgba(0,0,0,0.6)',
                  overflow: 'hidden',
                  padding: 0
                }}
              >
                <img src="/robot_chat.png" alt="Message" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Topbar layout */}
        <div className="topbar">
          <div className="logo-section">
            <Logo />
            <button
              type="button"
              className="back-button-circle"
              aria-label="Go back to dashboard"
              onClick={() => setView("dashboard")}
            >
              <ArrowLeft size={14} />
            </button>
          </div>
          <div className="top-actions">
            <ThemeToggle />
          </div>
        </div>

        {/* Right side actions stack */}
        <div className="right-action-stack">
          <button
            type="button"
            className="action-circle-btn"
            aria-label="Download specification"
          >
            <Download size={15} />
          </button>
          <button
            type="button"
            className="action-circle-btn"
            aria-label="Share setup"
          >
            <Share2 size={15} />
          </button>
          <button
            type="button"
            className="action-circle-btn confirm-btn"
            aria-label="Confirm configuration"
          >
            <Check size={15} />
          </button>
        </div>

        {/* Heading */}
        <Heading />

        {/* Left Navigation */}
        <SideNav
          view={view}
          open={menuOpen}
          onOpenChange={setMenuOpen}
          onSelect={setView}
        />

        {/* Right Navigation Arc */}
        <div className="right-nav-arc-container">
          <svg className="nav-arc-svg" viewBox="0 0 100 200" preserveAspectRatio="none">
            <path d="M 50 0 Q 100 100 50 200" className="nav-arc-path" />
          </svg>
          <div className="right-nav-items">
            <button
              type="button"
              className={cn("right-nav-item", showChat && "active")}
              onClick={() => setShowChat(!showChat)}
              aria-label="Chat support"
            >
              {showChat && <span className="timeline-tooltip">Chat support</span>}
              <span className="right-nav-icon">
                <MessageSquare size={15} />
              </span>
            </button>

            <button
              type="button"
              className={cn("right-nav-item", view === "timeline" && "active")}
              onClick={() => setView("timeline")}
              aria-label="Explore timeline"
            >
              {view === "timeline" && <span className="timeline-tooltip">Explore timeline</span>}
              <span className="right-nav-icon">
                <FileText size={15} />
              </span>
            </button>

            <button
              type="button"
              className={cn("right-nav-item", view === "certifications" && "active")}
              onClick={() => setView("certifications")}
              aria-label="Certifications"
            >
              {view === "certifications" && <span className="timeline-tooltip">Certifications</span>}
              <span className="right-nav-icon">
                <Award size={15} />
              </span>
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            className="view-shell"
            key={view}
            initial={{ opacity: 0, scale: 0.985 }}
            animate={{ opacity: showChat ? 0 : 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.015 }}
            transition={{ duration: 0.35 }}
          >
            {view === "dashboard" && <VehicleStage />}
            {view === "home" && <HomeStage />}
            {view === "pricing" && <Pricing onBook={setPlan} />}
            {view === "timeline" && <TimelineStage onGoHome={() => setView("home")} />}
            {view === "certifications" && <CenterPlaceholder title="Certifications" />}
          </motion.div>
        </AnimatePresence>

        <LapTrack active={view === "pricing" ? 4 : view === "home" ? 2 : 0} />
        <BookingModal plan={plan} onClose={() => setPlan(null)} />
      </div>
    </main>
  );
}

function CenterPlaceholder({ title }: { title: string }) {
  return (
    <div className="home-stage">
      <div className="stage-ring ring-one" />
      <div className="stage-ring ring-two" />
      <div className="spotlight" />
      <div className="center-placeholder-card">
        <h2>{title}</h2>
        <p>This section is coming soon.</p>
      </div>
    </div>
  );
}
