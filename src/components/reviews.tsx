import { site } from "@/data/site";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { StarRating } from "@/components/star-rating";
import { ScrollRow, ScrollRowItem } from "@/components/scroll-row";
import { ReviewQuote } from "@/components/review-quote";
import { getAllReviews, getAverageRating } from "@/lib/reviews";

function formatReviewDate(date: string) {
  const [year, month] = date.split("-");
  if (!month) return year;
  const formatter = new Intl.DateTimeFormat("fr-FR", { month: "long", year: "numeric" });
  return formatter.format(new Date(Number(year), Number(month) - 1));
}

export function Reviews() {
  const reviews = getAllReviews();
  const average = getAverageRating();

  return (
    <section id="avis" className="border-t border-border/70 bg-surface/60 py-14 sm:py-20 lg:py-28">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Ils m'ont fait confiance"
            title="Avis clients"
            description="Retours laissés par mes clients directement sur Malt."
          />
          <div className="flex items-center gap-3 rounded-2xl border border-border bg-background px-5 py-4">
            <StarRating rating={average} />
            <div className="text-sm">
              <p className="font-semibold text-foreground">{average}/5</p>
              <p className="text-muted">{reviews.length} avis</p>
            </div>
          </div>
        </div>

        <ScrollRow className="mt-10 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3" fadeClassName="from-surface">
          {reviews.map((review) => (
            <ScrollRowItem key={review.id}>
              <figure className="flex h-full flex-col justify-between rounded-2xl border border-border bg-background p-6">
                <div>
                  <StarRating rating={review.rating} />
                  <ReviewQuote text={review.text} />
                </div>
                <figcaption className="mt-6 border-t border-border pt-4 text-sm">
                  <p className="font-semibold text-foreground">{review.author}</p>
                  <p className="text-muted">{review.role}</p>
                  <p className="mt-1 text-xs text-muted">{formatReviewDate(review.date)}</p>
                </figcaption>
              </figure>
            </ScrollRowItem>
          ))}
        </ScrollRow>

        <div className="mt-10 text-center">
          <a
            href={site.maltUrl}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-semibold text-accent hover:underline"
          >
            Voir tous mes avis sur Malt →
          </a>
        </div>
      </Container>
    </section>
  );
}
