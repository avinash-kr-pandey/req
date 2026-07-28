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
import { cn } from "@/lib/utils";

export function Experience() {
  const [view, setView] = useState<ViewName | "chat" | "timeline" | "certifications">("dashboard");
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
              <ArrowLeft size={14} />
            </button>
          </div>
          <div className="top-actions">
            <ThemeToggle />
          </div>
        </div>

        {/* Right side actions stack */}
        <div className="right-action-stack">
          <button type="button" className="action-circle-btn" aria-label="Download specification">
            <Download size={15} />
          </button>
          <button type="button" className="action-circle-btn" aria-label="Share setup">
            <Share2 size={15} />
          </button>
          <button type="button" className="action-circle-btn confirm-btn" aria-label="Confirm configuration">
            <Check size={15} />
          </button>
        </div>

        {/* Heading */}
        <Heading />

        {/* Persistent atmosphere: kept outside page transitions to prevent flashing. */}
        <div className="stage-atmosphere" aria-hidden="true">
          <div className="stage-ring ring-one" />
          <div className="stage-ring ring-two" />
          <div className="stage-ring ring-three" />
          <div className="spotlight" />
        </div>

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
              className={cn("right-nav-item", view === "chat" && "active")}
              onClick={() => setView("chat")}
              aria-label="Chat support"
            >
              {view === "chat" && <span className="timeline-tooltip">Chat support</span>}
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
          >
            {view === "dashboard" && <VehicleStage />}
            {view === "home" && <HomeStage />}
            {view === "pricing" && <Pricing onBook={setPlan} />}
            {view === "chat" && <CenterPlaceholder title="Chat Support" />}
            {view === "timeline" && <CenterPlaceholder title="Explore Timeline" />}
            {view === "certifications" && <CenterPlaceholder title="Certifications" />}
          </motion.div>
        </AnimatePresence>

        <LapTrack
          active={
            view === "pricing" ? 4 : view === "home" || view === "dashboard" ? 2 : 0
          }
        />
        <BookingModal plan={plan} onClose={() => setPlan(null)} />
      </div>
    </main>
  );
}

function CenterPlaceholder({ title }: { title: string }) {
  return (
    <div className="home-stage">
      <div className="center-placeholder-card">
        <h2>{title}</h2>
        <p>This section is coming soon.</p>
      </div>
    </div>
  );
}
