import React from "react";
import "./particula.css";

const Particulas = ({ quantidade = 20, corDoBrilho = "#ffffff" }) => {
  const particles = Array.from({ length: quantidade });

  return (
    <div className="particles-layer">
      {particles.map((_, i) => {
        const tamanho = Math.random() * 3 + 2;
        return (
          <span
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              width: `${tamanho}px`,
              height: `${tamanho}px`,
              animationDuration: `${6 + Math.random() * 10}s`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: 0.2 + Math.random() * 0.5,
              // Efeito de Glow Dinâmico
              boxShadow: `0 0 ${tamanho * 2}px ${corDoBrilho}`,
              background: corDoBrilho
            }}
          />
        );
      })}
    </div>
  );
};

export default Particulas;