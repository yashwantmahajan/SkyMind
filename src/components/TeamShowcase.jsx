import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Import images directly from the workspace root (relative to this file)
import yashwantImg from '../../Yashwant.png';
import krushnaImg from '../../Krushna.jpg';
import nakulImg from '../../Nakul.jpg';
import nileshImg from '../../Nilesh.jpg';
import nikhilImg from '../../nikhil.png';

const teamMembers = [
  {
    id: '01',
    name: 'Yashwant',
    role: 'Founder & Lead Architect',
    image: yashwantImg,
    description: 'Directs the overall system architecture and long-term vision of SkyMind.',
    quote: '"Designing ecosystems that bridge the gap between intelligence and user experiences."'
  },
  {
    id: '02',
    name: 'Krushna',
    role: 'ML Research Lead',
    image: krushnaImg,
    description: 'Heads deep learning investigations, neural model fine-tuning, and algorithmic pipelines.',
    quote: '"Unlocking the latent representations of data to fuel next-generation models."'
  },
  {
    id: '03',
    name: 'Nakul',
    role: 'Experience Director',
    image: nakulImg,
    description: 'Crafts elite user interaction, immersive animations, and dynamic UI paradigms.',
    quote: '"Interfaces are conversations. They should be natural, fluid, and delightful."'
  },
  {
    id: '04',
    name: 'Nilesh',
    role: 'Full Stack Lead',
    image: nileshImg,
    description: 'Manages critical database systems, scalable cloud microservices, and backend performance.',
    quote: '"Building resilient frameworks that empower flawless and robust real-time operations."'
  },
  {
    id: '05',
    name: 'Nikhil',
    role: 'Systems Architect',
    image: nikhilImg,
    description: 'Architects infrastructure, guarantees high-availability clusters, and drives automation.',
    quote: '"Simplifying complexity. Engineering scale, reliability, and security from the core up."'
  }
];

export default function TeamShowcase() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hoveredLetterIdx, setHoveredLetterIdx] = useState(null);
  const [selectedMember, setSelectedMember] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Track window resizing to dynamically scale font-sizes if needed, or handle responsive layouts
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Escape key handler to close the modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedMember(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Keyboard navigation for avatars
  const handleAvatarKeyDown = (e, index) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      const nextIndex = (index + 1) % teamMembers.length;
      document.getElementById(`avatar-focus-${nextIndex}`)?.focus();
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      const prevIndex = (index - 1 + teamMembers.length) % teamMembers.length;
      document.getElementById(`avatar-focus-${prevIndex}`)?.focus();
    } else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setSelectedMember(teamMembers[index]);
    }
  };

  // Determine the name to display in the massive central hero text
  const isHoveredActive = hoveredIndex !== null;
  const currentActiveName = isHoveredActive
    ? teamMembers[hoveredIndex].name.toUpperCase()
    : 'SKY MIND';

  const nameLetters = currentActiveName.split('');

  return (
    <motion.div
      className="showcase-container"
      animate={{ scale: isHoveredActive ? 1.025 : 1 }}
      transition={{ type: 'spring', stiffness: 140, damping: 24 }}
    >
      {/* Subtle Background Glow Elements */}
      <div className="bg-glow-layer">
        <div className={`glow-orb glow-orb-1 ${isHoveredActive ? 'active' : ''}`} />
        <div className={`glow-orb glow-orb-2 ${isHoveredActive ? 'active' : ''}`} />
      </div>

      {/* Clean Premium Header */}
      <header className="showcase-header">
        <span className="logo-text">SkyMind.</span>
        <div className="header-meta">
          <span className="count-badge">{teamMembers.length} Core Members</span>
          <span className="dot">•</span>
          <span className="industry-label">Digital Craftsmanship</span>
        </div>
      </header>

      {/* Main Creative Interactivity Area */}
      <main className="interactive-gallery-container">

        {/* Row of Avatar Cards */}
        <div className="avatar-showcase-row" role="list">
          {teamMembers.map((member, index) => {
            const isSelfHovered = hoveredIndex === index;
            const isAnyHovered = hoveredIndex !== null;

            return (
              <div
                key={member.id}
                id={`avatar-focus-${index}`}
                className={`avatar-wrapper ${isSelfHovered ? 'active' : ''} ${isAnyHovered && !isSelfHovered ? 'dimmed' : ''}`}
                role="listitem"
                tabIndex={0}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onFocus={() => setHoveredIndex(index)}
                onBlur={() => setHoveredIndex(null)}
                onKeyDown={(e) => handleAvatarKeyDown(e, index)}
                onClick={() => setSelectedMember(member)}
                aria-label={`View ${member.name}'s details`}
              >
                <div className="avatar-border-glow" />
                <div className="avatar-img-container">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="avatar-img"
                  />
                  <div className="avatar-overlay-gradient" />
                </div>

                {/* Sliding active red circle indicator with up-right arrow */}
                <AnimatePresence>
                  {isSelfHovered && (
                    <motion.div
                      layoutId="active-badge"
                      className="active-arrow-badge"
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.5, opacity: 0 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="arrow-icon"
                      >
                        <line x1="7" y1="17" x2="17" y2="7"></line>
                        <polyline points="7 7 17 7 17 17"></polyline>
                      </svg>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Giant Letters Showcase with Elastic Ripple Hover */}
        <div className={`hero-name-container ${isHoveredActive ? 'active-state' : ''}`}>
          <div className="hero-name-track" aria-label={currentActiveName}>
            {nameLetters.map((char, index) => {
              if (char === ' ') {
                return (
                  <span
                    key={`${currentActiveName}-space-${index}`}
                    style={{ width: '0.25em', display: 'inline-block' }}
                  >
                    &nbsp;
                  </span>
                );
              }

              const isCharHovered = hoveredLetterIdx === index;
              const isNeighbor = hoveredLetterIdx !== null && Math.abs(hoveredLetterIdx - index) === 1;

              // Physics parameters for the hover spring wave effect
              let yValue = 0;
              let scaleValue = 1;
              let rotateValue = 0;

              if (isCharHovered) {
                yValue = -30;
                scaleValue = 1.28;
                rotateValue = index % 2 === 0 ? -6 : 6;
              } else if (isNeighbor) {
                yValue = -12;
                scaleValue = 1.1;
                rotateValue = index % 2 === 0 ? -3 : 3;
              }

              return (
                <motion.span
                  key={`${currentActiveName}-${char}-${index}`}
                  className="letter-node"
                  onMouseEnter={() => setHoveredLetterIdx(index)}
                  onMouseLeave={() => setHoveredLetterIdx(null)}
                  initial={{
                    opacity: 0,
                    y: 65,
                    scale: 0.2,
                    rotate: index % 2 === 0 ? -25 : 25
                  }}
                  animate={{
                    opacity: 1,
                    y: yValue,
                    scale: scaleValue,
                    rotate: rotateValue,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 16,
                    // Delay is only used for the mount / assemble transition!
                    // Stagger letters when name updates and user is not actively hovering letters.
                    delay: hoveredLetterIdx !== null ? 0 : index * 0.035,
                  }}
                  style={{ display: 'inline-block', originY: 1 }}
                >
                  {char}
                </motion.span>
              );
            })}
          </div>
        </div>

      </main>

      {/* Footer Branding */}
      <footer className="showcase-footer">
        <span className="footer-copyright">© {new Date().getFullYear()} SkyMind Inc.</span>
        <span className="footer-attribution">Trying Hard to Get a top 1</span>
      </footer>

      {/* Stunning Detail Drawer Modal */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            className="details-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMember(null)}
          >
            <motion.div
              className="details-modal-content"
              initial={{ scale: 0.9, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 30, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 24 }}
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-member-name"
            >
              {/* Close Button */}
              <button
                className="modal-close-btn"
                onClick={() => setSelectedMember(null)}
                aria-label="Close modal"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="close-icon"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>

              <div className="modal-inner-grid">
                {/* Visual Image Side */}
                <div className="modal-visual-side">
                  <div className="modal-img-frame">
                    <img
                      src={selectedMember.image}
                      alt={selectedMember.name}
                      className="modal-avatar-img"
                    />
                    <div className="modal-img-gradient" />
                  </div>
                </div>

                {/* Details Text Side */}
                <div className="modal-text-side">
                  <div className="modal-text-header">
                    <span className="modal-member-id">{selectedMember.id}</span>
                    <h2 id="modal-member-name" className="modal-member-name">
                      {selectedMember.name}
                    </h2>
                    <span className="modal-member-role">{selectedMember.role}</span>
                  </div>

                  <div className="modal-text-body">
                    <div className="modal-divider" />
                    <p className="modal-description">{selectedMember.description}</p>

                    <div className="modal-quote-container">
                      <svg
                        className="modal-quote-svg"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M11.19 12.19c.12-.08.26-.19.4-.31.14-.12.25-.26.31-.41.06-.15.09-.32.09-.5 0-.32-.1-.58-.3-.78s-.46-.3-.78-.3c-.22 0-.44.06-.66.19-.22.12-.41.28-.56.47-.16.19-.28.41-.36.66-.09.25-.12.5-.12.75 0 .84.28 1.53.84 2.06.56.53 1.25.8 2.06.8.69 0 1.27-.2 1.75-.61.48-.41.72-.98.72-1.72 0-.69-.22-1.25-.66-1.69-.44-.44-1.02-.66-1.72-.66-.19 0-.39.02-.59.05.22-.53.53-.98.94-1.34.41-.36.88-.61 1.41-.75v-1.1c-.81.09-1.53.39-2.16.91-.62.52-1.09 1.19-1.41 2.02-.31.83-.47 1.72-.47 2.66 0 1.22.38 2.2 1.13 2.94.75.74 1.66 1.11 2.72 1.11 1.25 0 2.28-.41 3.09-1.22.81-.81 1.22-1.84 1.22-3.09 0-1.28-.41-2.33-1.22-3.13-.81-.8-1.84-1.2-3.09-1.2-.5 0-.97.08-1.41.25.44-.75 1.03-1.36 1.78-1.83.75-.47 1.59-.72 2.53-.75v-1.1c-1.34.03-2.5.38-3.47 1.03-.97.66-1.72 1.53-2.25 2.62-.53 1.1-.8 2.31-.8 3.63 0 1.69.53 3.03 1.59 4.03 1.06 1 2.34 1.5 3.84 1.5 1.78 0 3.25-.59 4.41-1.78 1.16-1.19 1.74-2.67 1.74-4.44 0-1.75-.59-3.23-1.78-4.44-1.19-1.2-2.67-1.81-4.44-1.81-.69 0-1.36.11-2 .34.69-.94 1.58-1.66 2.66-2.16 1.08-.5 2.23-.75 3.47-.75v-1.1c-1.94 0-3.69.41-5.25 1.22-1.56.81-2.75 1.94-3.56 3.38-.81 1.44-1.22 3.03-1.22 4.78 0 2.28.75 4.14 2.25 5.56 1.5 1.42 3.39 2.13 5.66 2.13 2.5 0 4.56-.83 6.19-2.5 1.62-1.67 2.44-3.73 2.44-6.19 0-2.5-.83-4.56-2.5-6.19-1.67-1.62-3.73-2.44-6.19-2.44-.94 0-1.84.14-2.72.41.94-1.25 2.16-2.2 3.66-2.84 1.5-.64 3.09-.97 4.78-.97v-1.1c-2.69 0-5.11.59-7.25 1.78-2.14 1.19-3.78 2.83-4.94 4.94-1.16 2.11-1.74 4.47-1.74 7.09 0 3.19 1.05 5.77 3.16 7.75 2.11 1.98 4.75 2.97 7.94 2.97 3.5 0 6.39-1.16 8.66-3.47 2.27-2.31 3.41-5.19 3.41-8.66 0-3.5-1.14-6.38-3.41-8.66-2.27-2.28-5.16-3.42-8.66-3.42-.94 0-1.84.12-2.72.38.75-1.34 1.83-2.39 3.25-3.13 1.42-.74 2.98-1.11 4.69-1.11v-1.1c-2.41 0-4.58.53-6.5 1.59-1.92 1.06-3.39 2.53-4.41 4.41-1.02 1.88-1.53 4.02-1.53 6.44 0 2.84.94 5.16 2.81 6.94 1.88 1.78 4.22 2.67 7.03 2.67z" />
                      </svg>
                      <p className="modal-quote">{selectedMember.quote}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
