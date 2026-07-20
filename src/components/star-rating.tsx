export function StarRating({ rating, max = 5 }: { rating: number; max?: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`Note : ${rating} sur ${max}`}>
      {Array.from({ length: max }, (_, index) => {
        const filled = index < Math.round(rating);
        return (
          <svg
            key={index}
            viewBox="0 0 20 20"
            className={`h-4 w-4 ${filled ? "fill-accent" : "fill-border"}`}
            aria-hidden
          >
            <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1 1 5.8L10 14.9l-5.21 2.62 1-5.8-4.21-4.1 5.82-.85z" />
          </svg>
        );
      })}
    </div>
  );
}
