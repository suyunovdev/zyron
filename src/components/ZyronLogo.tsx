export function ZyronMark({ size = 32, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="6 2 88 96"
      width={size}
      height={size * 1.09}
      className={className}
      role="img"
      aria-label="ZYRON"
    >
      <defs>
        <linearGradient id="zyron-gz" gradientUnits="userSpaceOnUse" x1="14" y1="10" x2="86" y2="90">
          <stop offset="0" stopColor="#818CF8" />
          <stop offset="1" stopColor="#22D3EE" />
        </linearGradient>
      </defs>
      <path
        fill="url(#zyron-gz)"
        d="M14 10H86V32L61 57L43 39L50 32H14ZM86 90H14V68L39 43L57 61L50 68H86Z"
      />
    </svg>
  );
}

export function ZyronWordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`font-display font-medium tracking-tight ${className}`}>
      ZYRON
    </span>
  );
}

export function ZyronLogoFull({ markSize = 28, textClass = "text-xl" }: { markSize?: number; textClass?: string }) {
  return (
    <div className="flex items-center gap-2.5">
      <ZyronMark size={markSize} />
      <ZyronWordmark className={`text-white ${textClass}`} />
    </div>
  );
}
