import React from "react";
import { motion } from "framer-motion";
import "./banner.css";

const Banner = () => {
  // Ajuste final:
  // - X final corrigido
  // - Y final levemente mais alto para alinhar com o gráfico
  const linhaCaminho =
    "M22 350 L128 316 L190 338 L242 316 L330 254 L494 290 L744 198 L828 146 L916 208 L1004 186 L1078 166 L1118 166 L1192 146 L1285 5";

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
        <g transform="translate(32, 85) scale(1.04, 1)">
          {/* Glow */}
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

          {/* Linha principal */}
          <motion.path
            d={linhaCaminho}
            stroke="#ffffff"
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
