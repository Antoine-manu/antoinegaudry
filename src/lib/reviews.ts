import reviewsData from "@/data/reviews.json";
import type { Review } from "@/types/review";

const reviews = reviewsData as Review[];

export function getAllReviews(): Review[] {
  return [...reviews].sort((a, b) => b.date.localeCompare(a.date));
}

export function getReviewsForProject(slug: string): Review[] {
  return reviews.filter((review) => review.projectSlug === slug);
}

export function getAverageRating(): number {
  if (reviews.length === 0) return 0;
  const total = reviews.reduce((sum, review) => sum + review.rating, 0);
  return Math.round((total / reviews.length) * 10) / 10;
}
