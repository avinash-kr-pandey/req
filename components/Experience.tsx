"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, Download, Share2, Check, MessageSquare, FileText, Award } from "lucide-react";
import { useState } from "react";
import { BookingModal } from "@/components/BookingModal";
import { Heading } from "@/components/Heading";
import { HomeStage } from "@/components/HomeStage";
import { LapTrack } from "@/components/LapTrack";
import { Logo } from "@/components/Logo";
import { Pricing } from "@/components/Pricing";
import { SideNav, type ViewName } from "@/components/SideNav";
import { ThemeToggle } from "@/components/ThemeToggle";
import { VehicleStage } from "@/components/VehicleStage";

export function Experience() {
  const [view, setView] = useState<ViewName>("dashboard");
  const [menuOpen, setMenuOpen] = useState(false);
  const [plan, setPlan] = useState<string | null>(null);

  return (
    <main className="experience dark">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="grain" />
      
      <div className="experience-container">
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
              <ArrowLeft size={16} />
            </button>
          </div>
          <div className="top-actions">
            <ThemeToggle />
          </div>
        </div>

        {/* Right side actions stack */}
        <div className="right-action-stack">
          <button type="button" className="action-circle-btn" aria-label="Download specification">
            <Download size={18} />
          </button>
          <button type="button" className="action-circle-btn" aria-label="Share setup">
            <Share2 size={18} />
          </button>
          <button type="button" className="action-circle-btn confirm-btn" aria-label="Confirm configuration">
            <Check size={18} />
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
          <div className="nav-arc-right" />
          <div className="right-nav-items">
            <button type="button" className="right-nav-item" aria-label="Chat support">
              <span className="right-nav-icon">
                <MessageSquare size={19} />
              </span>
            </button>
            
            <button type="button" className="right-nav-item active" aria-label="Explore timeline">
              <span className="timeline-tooltip">Explore timeline</span>
              <span className="right-nav-icon">
                <FileText size={19} />
              </span>
            </button>
            
            <button type="button" className="right-nav-item" aria-label="Certifications">
              <span className="right-nav-icon">
                <Award size={19} />
              </span>
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            className="view-shell"
            key={view}
            initial={{ opacity: 0, scale: 0.985 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.015 }}
            transition={{ duration: 0.35 }}
          >
            {view === "dashboard" && <VehicleStage />}
            {view === "home" && <HomeStage />}
            {view === "pricing" && <Pricing onBook={setPlan} />}
          </motion.div>
        </AnimatePresence>

        <LapTrack active={view === "pricing" ? 4 : view === "home" ? 1 : 3} />
        <BookingModal plan={plan} onClose={() => setPlan(null)} />
      </div>
    </main>
  );
}
