export function Logo({ withWordmark = true }: { withWordmark?: boolean }) {
  return (
    <span className="flex items-center gap-2">
      <svg
        width="28"
        height="28"
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <rect
          x="1"
          y="1"
          width="30"
          height="30"
          rx="9"
          className="fill-fg"
        />
        <path
          d="M9 22V11l7 7 7-7v11"
          className="stroke-bg"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="23" cy="22" r="1.6" className="fill-accent" />
      </svg>
      {withWordmark && (
        <span className="font-mono text-sm font-medium tracking-tight">
          marcelo<span className="text-accent">.</span>
        </span>
      )}
    </span>
  );
}
