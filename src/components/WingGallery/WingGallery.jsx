import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaPenNib,
  FaBullhorn,
  FaCalendarAlt,
  FaEdit,
  FaHashtag,
  FaVideo,
  FaScroll,
  FaMicrophoneAlt,
  FaQuoteRight,
  FaPodcast,
  FaFileAlt,
  FaPaintBrush,
  FaCamera,
  FaBookOpen,
  FaBroadcastTower,
} from "react-icons/fa";
import "./WingGallery.css"; // Make sure this is created and styled

const wingsData = [
  {
    name: "Content Creation and Advertising",
    icon: <FaPenNib />,
    description: "Crafting compelling content and ads that connect.",
  },
  {
    name: "Event Management",
    icon: <FaCalendarAlt />,
    description: "Planning and executing memorable campus events.",
  },
  {
    name: "Editing",
    icon: <FaEdit />,
    description: "Polishing content across video, text, and media.",
  },
  {
    name: "Social Media Marketing",
    icon: <FaHashtag />,
    description: "Managing digital presence and audience engagement.",
  },
  {
    name: "Versatalkies",
    icon: <FaVideo />,
    description: "Creative video storytelling and short film production.",
  },
  {
    name: "Versascripts",
    icon: <FaScroll />,
    description: "Scriptwriting for stage, media, and production.",
  },
  {
    name: "Public Speaking & Stage Management",
    icon: <FaMicrophoneAlt />,
    description: "Empowering voices and coordinating stage performances.",
  },
  {
    name: "Promotions",
    icon: <FaBullhorn />,
    description: "Promoting events, campaigns, and brand identity.",
  },
  {
    name: "Versatales Quotes Gallery",
    icon: <FaQuoteRight />,
    description: "Aesthetic curation of quotes and visual content.",
  },
  {
    name: "Podcast Hub",
    icon: <FaPodcast />,
    description: "Voice your thoughts through immersive podcasts.",
  },
  {
    name: "Script Writing",
    icon: <FaFileAlt />,
    description: "Telling stories with structured screenwriting.",
  },
  {
    name: "VersaDesigns",
    icon: <FaPaintBrush />,
    description: "Graphic design, branding, and creative media.",
  },
  {
    name: "Versaphotography",
    icon: <FaCamera />,
    description: "Capturing moments through photography.",
  },
  {
    name: "Articles and Magazines",
    icon: <FaBookOpen />,
    description: "Publishing campus stories and insights.",
  },
  {
    name: "Broadcasting Team",
    icon: <FaBroadcastTower />,
    description: "Live event broadcasting and coverage.",
  },
];

const WingGallery = () => {
  const scrollRef = useRef(null);
  const speed = 0.5; // lower = slower scroll

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let animationFrame;

    const scrollStep = () => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += speed;
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationFrame = requestAnimationFrame(scrollStep);
    };

    animationFrame = requestAnimationFrame(scrollStep);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  const scroll = (direction) => {
    const scrollAmount = 320;
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const loopedWings = [...wingsData, ...wingsData];

  return (
    <div className="wing-container">
      <h2 className="wing-heading">KL - VERSATALES Wings</h2>

      <div className="scroll-controls">
        <button className="scroll-btn" onClick={() => scroll("left")}>
          ‹
        </button>

        <div className="wing-scroll-area" ref={scrollRef}>
          {loopedWings.map((wing, index) => (
            <motion.div
              key={index}
              className="wing-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: (index % wingsData.length) * 0.05,
              }}
            >
              <div className="wing-icon">{React.cloneElement(wing.icon, { size: 48 })}</div>
              <h3 className="wing-title">{wing.name}</h3>
              <p className="wing-description">{wing.description}</p>
            </motion.div>
          ))}
        </div>

        <button className="scroll-btn" onClick={() => scroll("right")}>
          ›
        </button>
      </div>
    </div>
  );
};

export default WingGallery;
