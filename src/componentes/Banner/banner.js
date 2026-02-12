import React from "react";
import { motion } from "framer-motion";
import "./banner.css";

const Banner = () => {
  // O caminho do gráfico animado que acompanha os vetores da imagem
  const linhaCaminho =
    "M0 380 L139 320 L207 346 L238 330 L330 258 L494 295 L744 200 L822 144 L903 207 L1009 180 L1078 162 L1119 170 L1170 142 L1285 10";

  const particles = Array.from({ length: 30 });

  return (
    /* A classe banner-container agora controla a visibilidade via CSS */
    <div className="banner-container">
      
      {/* Imagem de Fundo - Renderizada via tag img para melhor controle de object-fit */}
      <img
        src="/images/Image.png"
        alt="Banner Fennec"
        className="banner-bg"
      />

      {/* Camada de Partículas Flutuantes */}
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

      {/* SVG Neon Animado - Alinhado com os dados do banner desktop */}
      <svg
        viewBox="0 0 1367 519"
        className="neon-svg"
        preserveAspectRatio="none"
      >
        <g transform="translate(32, 85) scale(1.04, 1)">
          {/* Brilho Externo (Glow) */}
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
          {/* Linha Central Branca (Core) */}
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