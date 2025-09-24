const doublecurve = () => {
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

        {/* Curvy wave at both top and bottom */}
        <path
          fill="url(#blueprintSmoke)"
          d="M0,64 
             C360,160,1080,-32,1440,64 
             L1440,256 
             C1080,160,360,352,0,256 
             Z"
        />
      </svg>
    </div>
  );
};

export default doublecurve;
