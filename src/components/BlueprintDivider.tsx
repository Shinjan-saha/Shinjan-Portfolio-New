const BlueprintDivider = () => {
  return (
    <div className="relative w-full overflow-hidden">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="w-full h-32 md:h-40 lg:h-48"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="blueprintSmoke" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1e3a8a" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="1" />
          </linearGradient>
        </defs>

        <path
          fill="url(#blueprintSmoke)"
          d="M0,224L60,192C120,160,240,96,360,74.7C480,53,600,75,720,101.3C840,128,960,160,1080,176C1200,192,1320,192,1380,192L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>
    </div>
  );
};

export default BlueprintDivider;
