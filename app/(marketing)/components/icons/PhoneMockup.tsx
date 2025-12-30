type PhoneMockupProps = {
  children?: React.ReactNode;
};

export function PhoneMockup({ children }: PhoneMockupProps) {
  return (
    <div className="relative w-[320px] h-160">
      <svg
        viewBox="0 0 320 640"
        width="320"
        height="640"
        className="absolute inset-0"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="8"
          y="12"
          width="304"
          height="616"
          rx="44"
          fill="black"
          opacity="0.15"
        />

        <rect
          x="0"
          y="0"
          width="320"
          height="640"
          rx="48"
          fill="#111111"
        />

        <rect
          x="14"
          y="14"
          width="292"
          height="612"
          rx="38"
          fill="#ffffff"
        />

        <rect
          x="130"
          y="24"
          width="60"
          height="6"
          rx="3"
          fill="#999999"
        />

        <circle cx="160" cy="38" r="4" fill="#666666" />
      </svg>

      <div className="absolute inset-3.5 rounded-[38px] overflow-hidden bg-white">
        {children}
      </div>
    </div>
  );
}
