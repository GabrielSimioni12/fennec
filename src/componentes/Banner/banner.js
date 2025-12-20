import "./banner.css";

function Banner() {
  return (
    <header className="hero">
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1>FENNEC</h1>
        <p>Consultoria Empresarial</p>

        <div className="hero-metrics">
          <span>36+ Clientes</span>
          <span>10+ Anos</span>
          <span>95% Satisfação</span>
        </div>
      </div>
    </header>
  );
}

export default Banner;
