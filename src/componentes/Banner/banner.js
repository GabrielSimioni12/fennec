import "./banner.css";
import ChartLine from "./ChartLine";

const Banner = () => {
  return (
    <header
      className="banner"
      style={{ backgroundImage: "url(/images/banner.jpeg)" }}
    >
      <div className="overlay" />

      <div className="banner-content">
        <div className="text">
          <h1>FENNEC</h1>
          <span>Consultoria Empresarial</span>
        </div>

        <ChartLine />
      </div>
    </header>
  );
};

export default Banner;
