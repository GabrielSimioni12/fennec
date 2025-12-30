import React from "react";
import { motion } from "framer-motion";
import "./banner.css";

const Banner = () => {
  const linhaCaminho =
    "M22 350 L128 316 L190 338 L242 316 L330 254 L494 290 L744 198 L828 146 L916 208 L1004 186 L1078 166 L1118 166 L1192 146 L1310 18";

  return (
    <div className="banner-container">
      <img
        src="/images/Image.png"
        alt="Banner Fennec"
        className="banner-bg"
      />

      <svg
        viewBox="0 0 1367 519"
        className="neon-svg"
        preserveAspectRatio="none"
      >
        {/* translate(32, 85): 
            32 -> moveu mais para a DIREITA
            85 -> subiu 5px em relação ao anterior (era 90)
        */}
        <g transform="translate(32, 85) scale(1.04, 1)">
          {/* EFEITO NEON (GLOW) */}
          <motion.path
            d={linhaCaminho}
            stroke="#0B31ED"
            strokeWidth="16"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, ease: "easeInOut" }}
            style={{ filter: "blur(12px)", opacity: 0.7 }}
          />

          {/* LINHA BRANCA CENTRAL */}
          <motion.path
            d={linhaCaminho}
            stroke="white"
            strokeWidth="2.5"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, ease: "easeInOut" }}
          />
        </g>
      </svg>
    </div>
  );
};

export default Banner;