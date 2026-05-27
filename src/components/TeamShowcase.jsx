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

// Helper component to split a name into characters and animate them individually
const SplitName = ({ name, isHovered }) => {
  return (
    <span className="split-name-wrapper" aria-label={name}>
      {name.split('').map((char, index) => {
        if (char === ' ') {
          return (
            <span key={index} className="char-space">
              &nbsp;
            </span>
          );
        }
        return (
          <span key={index} className="char-box">
            <motion.span
              className="char char-top"
              animate={{
                y: isHovered ? '-100%' : '0%',
                skewY: isHovered ? -5 : 0
              }}
              transition={{
                duration: 0.45,
                ease: [0.16, 1, 0.3, 1],
                delay: index * 0.015
              }}
            >
              {char}
            </motion.span>
            <motion.span
              className="char char-bottom"
              animate={{
                y: isHovered ? '0%' : '100%',
                skewY: isHovered ? 0 : 5
              }}
              transition={{
                duration: 0.45,
                ease: [0.16, 1, 0.3, 1],
                delay: index * 0.015
              }}
            >
              {char}
            </motion.span>
          </span>
        );
      })}
    </span>
  );
};

export default function TeamShowcase() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [selectedMobileIndex, setSelectedMobileIndex] = useState(0);
  const [focusedIndex, setFocusedIndex] = useState(null);
  
  const containerRef = useRef(null);

  // Track window resizing to dynamically toggle mobile vs desktop viewports
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Keyboard navigation helpers
  const handleKeyDown = (e, index) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      e.preventDefault();
      const nextIndex = (index + 1) % teamMembers.length;
      document.getElementById(`member-column-${nextIndex}`)?.focus();
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      e.preventDefault();
      const prevIndex = (index - 1 + teamMembers.length) % teamMembers.length;
      document.getElementById(`member-column-${prevIndex}`)?.focus();
    } else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setFocusedIndex(focusedIndex === index ? null : index);
    }
  };

  return (
    <div 
      className="showcase-container" 
      ref={containerRef}
    >
      {/* 3D Giant Watermark that subtly shifts based on active hover index */}
      <div className="bg-watermark-container">
        <motion.div 
          className="bg-watermark"
          animate={{
            y: hoveredIndex !== null ? (hoveredIndex - 2) * -15 : 0,
            opacity: hoveredIndex !== null ? 0.08 : 0.04
          }}
          transition={{ type: 'spring', stiffness: 80, damping: 20 }}
        >
          {hoveredIndex !== null ? teamMembers[hoveredIndex].name : 'SKYMIN'}
        </motion.div>
      </div>

      {/* Main Interactive Layout */}
      {!isMobile ? (
        // Desktop View: List layout with cursor reveal
        <div className="desktop-view">
          <header className="showcase-header">
            <span className="logo-text">SkyMind.</span>
            <div className="header-meta">
              <span className="count-badge">{teamMembers.length} Members</span>
              <span className="dot">•</span>
              <span className="industry-label">Digital Craftsmanship</span>
            </div>
          </header>

          <main className="members-columns-container" role="list">
            {teamMembers.map((member, index) => {
              const isHovered = hoveredIndex === index;
              const isFocused = focusedIndex === index;
              const isActive = isHovered || isFocused;
              
              return (
                <motion.div
                  key={member.id}
                  id={`member-column-${index}`}
                  className={`member-column ${isActive ? 'active' : ''}`}
                  role="listitem"
                  tabIndex={0}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onFocus={() => {
                    setHoveredIndex(index);
                    setFocusedIndex(index);
                  }}
                  onBlur={() => {
                    if (focusedIndex === index) {
                      setHoveredIndex(null);
                      setFocusedIndex(null);
                    }
                  }}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  aria-haspopup="true"
                  aria-expanded={isActive}
                  layout
                >
                  {/* Background Image & Overlay */}
                  <div className="column-bg">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="column-bg-img"
                    />
                    <div className="column-gradient" />
                  </div>

                  {/* Header: Index & Glow Dot */}
                  <div className="column-header">
                    <span className="member-idx">{member.id}</span>
                    <span className="column-active-dot" />
                  </div>

                  {/* Body: Animated Name */}
                  <div className="column-body">
                    <h2 className="member-name-heading">
                      <SplitName name={member.name} isHovered={isHovered} />
                    </h2>
                  </div>

                  {/* Footer: Role & Slide-up Details */}
                  <div className="column-footer">
                    <span className="member-role">{member.role}</span>
                    
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          className="column-details-reveal"
                          initial={{ height: 0, opacity: 0, y: 15 }}
                          animate={{ height: 'auto', opacity: 1, y: 0 }}
                          exit={{ height: 0, opacity: 0, y: 15 }}
                          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                        >
                          <div className="column-details-content">
                            <p className="desc">{member.description}</p>
                            <p className="quote">{member.quote}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </main>
        </div>
      ) : (
        // Mobile/Tablet View: Stunning Glassmorphic Cards Carousel Grid
        <div className="mobile-view">
          <header className="mobile-header">
            <span className="logo-text">SkyMind.</span>
            <span className="count-badge">{teamMembers.length} Core Team</span>
          </header>

          <main className="mobile-grid">
            {teamMembers.map((member, index) => {
              const isSelected = selectedMobileIndex === index;
              return (
                <motion.div
                  key={member.id}
                  className={`mobile-card ${isSelected ? 'active' : ''}`}
                  onClick={() => setSelectedMobileIndex(index === selectedMobileIndex ? null : index)}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="mobile-image-container">
                    <img src={member.image} alt={member.name} className="mobile-img" />
                    <div className="mobile-gradient-shade" />
                  </div>
                  
                  <div className="mobile-card-details">
                    <div className="mobile-card-header">
                      <span className="mobile-idx">{member.id}</span>
                      <h3 className="mobile-name">{member.name}</h3>
                      <span className="mobile-role-text">{member.role}</span>
                    </div>

                    <AnimatePresence>
                      {isSelected && (
                        <motion.div
                          className="mobile-card-expand"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                        >
                          <div className="expand-inner">
                            <p className="mobile-desc">{member.description}</p>
                            <p className="mobile-quote">{member.quote}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </main>
        </div>
      )}

      {/* Footer Branding */}
      <footer className="showcase-footer">
        <span className="footer-copyright">© {new Date().getFullYear()} SkyMind Inc.</span>
        <span className="footer-attribution">Inspired by O Positive & Skiper UI</span>
      </footer>
    </div>
  );
}
