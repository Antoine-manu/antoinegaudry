import type { ReactNode } from "react";

export function ScrollRow({
  children,
  className = "",
  fadeClassName = "from-background",
}: {
  children: ReactNode;
  className?: string;
  /** Couleur de départ du fondu droit, doit matcher le fond de la section (ex: "from-surface"). */
  fadeClassName?: string;
}) {
  return (
    <div className="relative -mx-6 sm:mx-0">
      <div
        className={`flex snap-x snap-proximity gap-4 overflow-x-auto px-6 pb-2 sm:grid sm:snap-none sm:gap-6 sm:overflow-visible sm:px-0 sm:pb-0 ${className}`}
      >
        {children}
      </div>
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-y-0 right-0 z-10 w-14 bg-gradient-to-l to-transparent sm:hidden ${fadeClassName}`}
      />
    </div>
  );
}

export function ScrollRowItem({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`w-[80vw] max-w-xs shrink-0 sm:w-auto sm:max-w-none ${className}`}>
      {children}
    </div>
  );
}
