import React from "react";
import { motion } from "framer-motion";
import "./banner.css";

const Banner = () => {
  const linhaCaminho =
    "M22 350 L128 316 L190 338 L242 316 L330 254 L494 290 L744 198 L828 146 L916 208 L1004 186 L1078 166 L1118 166 L1192 146 L1285 5";

  const particles = Array.from({ length: 30 });

  return (
    <div className="banner-container">
      {/* Fundo */}
      <img
        src="/images/Image.png"
        alt="Banner Fennec"
        className="banner-bg"
      />

      {/* Partículas */}
      <div className="particles-layer">
        {particles.map((_, i) => (
          <span
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${8 + Math.random() * 8}s`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: 0.4 + Math.random() * 0.3,
            }}
          />
        ))}
      </div>

      {/* SVG – NÃO MEXE */}
      <svg
        viewBox="0 0 1367 519"
        className="neon-svg"
        preserveAspectRatio="none"
      >
        <g>
          {/* Glow */}
          <motion.path
            d={linhaCaminho}
            stroke="#0B31ED"
            strokeWidth="16"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 3,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 0.6,
            }}
            style={{ filter: "blur(12px)", opacity: 0.7 }}
          />

          {/* Linha principal */}
          <motion.path
            d={linhaCaminho}
            stroke="#ffffff"
            strokeWidth="2.5"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 3,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 0.6,
            }}
          />
        </g>
      </svg>
    </div>
  );
};

export default Banner;
