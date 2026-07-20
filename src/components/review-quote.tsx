"use client";

import { useEffect, useRef, useState } from "react";

export function ReviewQuote({ text }: { text: string }) {
  const ref = useRef<HTMLQuoteElement>(null);
  const [expanded, setExpanded] = useState(false);
  const [canExpand, setCanExpand] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    setCanExpand(el.scrollHeight > el.clientHeight + 1);
  }, []);

  return (
    <div>
      <blockquote
        ref={ref}
        className={`mt-4 text-sm leading-relaxed text-foreground ${expanded ? "" : "line-clamp-4"}`}
      >
        “{text}”
      </blockquote>
      {canExpand ? (
        <button
          type="button"
          onClick={() => setExpanded((value) => !value)}
          className="mt-2 text-xs font-semibold text-accent hover:underline"
        >
          {expanded ? "Voir moins" : "Voir plus"}
        </button>
      ) : null}
    </div>
  );
}
