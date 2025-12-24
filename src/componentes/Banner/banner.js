import React from 'react';
import { motion } from 'framer-motion';
import './banner.css';

const Banner = () => {
  const linhaCaminho =
    "M22.0005 350L128 316L190 338L242 316L330 254L494 290L744 198L828 146L916 208L1004 186L1078 166H1118L1192 146L1310 18";

  return (
    <div className="banner-container">
      <img
        src="/images/Image.png"
        alt="Banner Fennec"
        className="banner-bg"
      />

      {/* SVG com compensação vertical */}
      <svg
        className="neon-svg"
        viewBox="0 40 1332 376" 
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d={linhaCaminho}
          fill="none"
          stroke="#0B31ED"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, ease: "easeInOut" }}
          style={{ filter: "blur(8px)", opacity: 0.85 }}
        />

        <motion.path
          d={linhaCaminho}
          fill="none"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
};

export default Banner;
