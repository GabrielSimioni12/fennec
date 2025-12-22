const ChartLine = () => {
  return (
    <svg
      viewBox="0 0 800 200"
      className="chart-line"
      preserveAspectRatio="none"
    >
      <path
        d="M0 140 L120 120 L260 135 L380 95 L520 110 L680 80 L800 60"
        className="line"
      />

      <circle cx="120" cy="120" r="4" className="point" />
      <circle cx="260" cy="135" r="4" className="point delay1" />
      <circle cx="380" cy="95" r="4" className="point delay2" />
      <circle cx="520" cy="110" r="4" className="point delay3" />
      <circle cx="680" cy="80" r="4" className="point delay4" />
    </svg>
  );
};

export default ChartLine;
