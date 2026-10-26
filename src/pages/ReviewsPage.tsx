import { ExternalLink, Star, MessageSquareQuote, MapPin } from 'lucide-react';
import { useSeo, SITE_ORIGIN } from '@/lib/seo';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FinalCta, StarRow } from '@/components/sections';
import { CallButton } from '@/components/CallButton';
import { BUSINESS, PHONE_DISPLAY, BUSINESS as B } from '@/data/business';

export default function ReviewsPage() {
  useSeo({
    title: `Reviews for Garrison Plumbing | Pittsboro, NC Plumber`,
    description: `Read genuine customer reviews for Garrison Plumbing on our public Google Maps listing. We do not publish testimonials on this site. Call ${PHONE_DISPLAY}.`,
    canonical: `${SITE_ORIGIN}/reviews`,
  });

  return (
    <>
      <section className="border-b border-navy-100 bg-navy-50/40">
        <div className="container-wide py-10 md:py-14">
          <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Reviews' }]} />
          <div className="mt-6 max-w-3xl">
            <span className="eyebrow">Reviews</span>
            <h1 className="mt-3 font-display text-4xl font-bold text-navy-950 md:text-5xl text-balance">
              Reviews for Garrison Plumbing
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-charcoal-600 text-pretty">
              We do not publish testimonials on this site. Genuine customer reviews — including the current count and
              rating — live on our public Google Maps listing, kept up to date by Google. Read them there.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={B.mapsListing}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary btn-lg"
              >
                <ExternalLink className="h-5 w-5" aria-hidden="true" />
                Read reviews on Google
              </a>
              <CallButton variant="outline" ctaLabel="Call Garrison Plumbing now" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl">
            <div className="rounded-3xl bg-white p-8 shadow-card ring-1 ring-navy-100 md:p-10">
              <div className="flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-navy-50 text-accent-700">
                  <Star className="h-6 w-6 fill-current" aria-hidden="true" />
                </span>
                <div>
                  <h2 className="font-display text-xl font-bold text-navy-950">Verified on Google</h2>
                  <p className="text-sm text-charcoal-500">Public reviews · kept current by Google</p>
                </div>
              </div>
              <StarRow />
              <p className="mt-4 text-charcoal-600">
                Review count and rating shown on the Google Maps listing change over time. Rather than hardcoding a
                number that can go stale, we link directly to the listing so you always see the current information.
              </p>
              <div className="mt-6 rounded-2xl bg-navy-50 p-4">
                <p className="flex items-start gap-2 text-sm text-charcoal-600">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-700" aria-hidden="true" />
                  {B.name} — {B.address}, {B.city}, {B.state} {B.zip}
                </p>
              </div>
              <a
                href={B.mapsListing}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-6"
              >
                <MessageSquareQuote className="h-5 w-5" aria-hidden="true" />
                Open the Google Maps listing
              </a>
            </div>

            <p className="mt-6 text-center text-sm text-charcoal-500">
              We never fabricate testimonials, reviewer names, or ratings. Reviews are the property of the customers
              who wrote them and Google.
            </p>
          </div>
        </div>
      </section>

      <FinalCta
        title="Want to talk to Garrison Plumbing directly?"
        copy="The fastest way to reach us is a phone call. Describe what you are seeing and we will help you decide the next step."
      />
    </>
  );
}
