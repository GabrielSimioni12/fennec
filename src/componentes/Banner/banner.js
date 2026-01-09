import React from "react";
import { motion } from "framer-motion";
import "./banner.css";

const Banner = () => {
  const linhaCaminho =
    "M0 380 L139 320 L207 346 L238 330 L330 258 L494 295 L744 200 L828 150 L916 212 L1004 190 L1078 170 L1118 170 L1192 142 L1285 30";

  const particles = Array.from({ length: 30 });

  return (
    <div className="banner-container">
      {/* Imagem de Fundo - Z-INDEX 1 */}
      <img
        src="/images/Image.png"
        alt="Banner Fennec"
        className="banner-bg"
      />

      {/* Camada de Partículas - Z-INDEX 2 */}
      <div className="banner-particles-layer">
        {particles.map((_, i) => (
          <span
            key={i}
            className="banner-particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${8 + Math.random() * 8}s`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: 0.4 + Math.random() * 0.3,
            }}
          />
        ))}
      </div>

      {/* SVG Neon - Z-INDEX 4 */}
      <svg
        viewBox="0 0 1367 519"
        className="neon-svg"
        preserveAspectRatio="none"
      >
        <g transform="translate(32, 85) scale(1.04, 1)">
          <motion.path
            d={linhaCaminho}
            stroke="#0B31ED"
            strokeWidth="16"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatDelay: 0.6 }}
            style={{ filter: "blur(12px)", opacity: 0.7 }}
          />
          <motion.path
            d={linhaCaminho}
            stroke="#ffffff"
            strokeWidth="2.5"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatDelay: 0.6 }}
          />
        </g>
      </svg>
    </div>
  );
};

export default Banner;