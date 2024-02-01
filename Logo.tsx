function Logo() {
  return (
    <svg
      width="90"
      height="40"
      viewBox="0 0 90 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* House Structure */}
      <path
        d="M45 5 L65 25 H25 Z"
        fill="#4CAF50"
      />
      {/* Sun Rays */}
      <path
        d="M45 0 V10 M45 5 H35 M45 5 H55"
        stroke="#FFC107"
        strokeWidth="1.5"
      />
      {/* Leaves */}
      <path
        d="M25 25 Q30 20 35 25 T45 25"
        stroke="#4CAF50"
        strokeWidth="1.5"
        fill="transparent"
      />
      {/* Wind Turbine */}
      <path
        d="M5 30 V35 M5 35 L2 38 M5 35 L8 38"
        stroke="#2196F3"
        strokeWidth="1.5"
      />
      {/* Solar Panel */}
      <rect
        x="70"
        y="30"
        width="15"
        height="7"
        fill="#607D8B"
      />
      <line x1="70" y1="33.5" x2="85" y2="33.5" stroke="#B0BEC5" strokeWidth="0.75" />
      <line x1="73.75" y1="30" x2="73.75" y2="37" stroke="#B0BEC5" strokeWidth="0.75" />
      <line x1="77.5" y1="30" x2="77.5" y2="37" stroke="#B0BEC5" strokeWidth="0.75" />
      <line x1="81.25" y1="30" x2="81.25" y2="37" stroke="#B0BEC5" strokeWidth="0.75" />
    </svg>
  );
}

export default Logo;