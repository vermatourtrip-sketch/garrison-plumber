import { Link } from 'react-router-dom';
import { ShieldCheck, Phone, MapPin, Wrench, Building2, Star, ExternalLink } from 'lucide-react';
import { useSeo, SITE_ORIGIN } from '@/lib/seo';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FinalCta } from '@/components/sections';
import { CallButton } from '@/components/CallButton';
import { BUSINESS, PHONE_DISPLAY, IMAGES } from '@/data/business';

export default function AboutPage() {
  useSeo({
    title: 'About Garrison Plumbing | Pittsboro, NC Plumber',
    description:
      'Garrison Plumbing is a full-service residential and commercial plumber based at 1200 Manco Dairy Rd, Pittsboro, NC. Call 919-240-9153 to discuss your plumbing needs.',
    canonical: `${SITE_ORIGIN}/about`,
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Plumber',
      name: BUSINESS.name,
      telephone: '+19192409153',
      url: SITE_ORIGIN,
      image: `${SITE_ORIGIN}/favicon.svg`,
      address: {
        '@type': 'PostalAddress',
        streetAddress: BUSINESS.address,
        addressLocality: BUSINESS.city,
        addressRegion: BUSINESS.state,
        postalCode: BUSINESS.zip,
        addressCountry: 'US',
      },
    },
  });

  return (
    <>
      <section className="border-b border-navy-100 bg-navy-50/40">
        <div className="container-wide py-10 md:py-14">
          <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'About' }]} />
          <div className="mt-6 max-w-3xl">
            <span className="eyebrow">About</span>
            <h1 className="mt-3 font-display text-4xl font-bold text-navy-950 md:text-5xl text-balance">
              About Garrison Plumbing
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-charcoal-600 text-pretty">
              A full-service residential and commercial plumbing company based in Pittsboro, North Carolina, serving
              Chatham County and the surrounding area.
            </p>
            <div className="mt-7">
              <CallButton size="lg" ctaLabel="Call Garrison Plumbing now" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-wide grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <span className="eyebrow">Local business</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy-950 md:text-4xl text-balance">
              Based in Pittsboro, working across the region
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-charcoal-600 text-pretty">
              Garrison Plumbing operates from {BUSINESS.address} in Pittsboro, NC. With {BUSINESS.yearsExperience}{' '}
              years in business, we handle a complete range of plumbing work — from a single dripping faucet to full
              new construction plumbing, for both residential and commercial customers.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-charcoal-600 text-pretty">
              We believe the best plumbing work starts with a conversation. Call to describe the problem, ask
              questions, and decide whether a visit makes sense — before anyone shows up.
            </p>
            <ul className="mt-6 space-y-3">
              <li className="flex items-start gap-3 text-charcoal-700">
                <ShieldCheck className="mt-0.5 h-5 w-5 text-accent-700" aria-hidden="true" />
                <span>{BUSINESS.license} — verifiable with the NC Board of Examiners.</span>
              </li>
              <li className="flex items-start gap-3 text-charcoal-700">
                <Wrench className="mt-0.5 h-5 w-5 text-accent-700" aria-hidden="true" />
                <span>Residential and commercial plumbing, repairs and new construction.</span>
              </li>
              <li className="flex items-start gap-3 text-charcoal-700">
                <Phone className="mt-0.5 h-5 w-5 text-accent-700" aria-hidden="true" />
                <span>Direct phone contact only — {PHONE_DISPLAY}. No forms, no email, no chat.</span>
              </li>
            </ul>
          </div>
          <div className="grid gap-4">
            <img
              src={IMAGES.worker}
              alt="Plumber preparing for a service call"
              loading="lazy"
              className="aspect-[4/3] w-full rounded-3xl object-cover shadow-card"
            />
            <div className="grid grid-cols-3 gap-3">
              <div className="rounded-2xl bg-navy-50 p-4 text-center">
                <Building2 className="mx-auto h-6 w-6 text-accent-700" aria-hidden="true" />
                <p className="mt-2 text-xs font-semibold text-navy-900">Residential & Commercial</p>
              </div>
              <div className="rounded-2xl bg-navy-50 p-4 text-center">
                <MapPin className="mx-auto h-6 w-6 text-accent-700" aria-hidden="true" />
                <p className="mt-2 text-xs font-semibold text-navy-900">Based in Pittsboro</p>
              </div>
              <div className="rounded-2xl bg-navy-50 p-4 text-center">
                <Phone className="mx-auto h-6 w-6 text-accent-700" aria-hidden="true" />
                <p className="mt-2 text-xs font-semibold text-navy-900">Direct calls only</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy-50/50 py-16 md:py-20">
        <div className="container-wide">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-6 shadow-soft ring-1 ring-navy-100">
              <span className="font-display text-3xl font-bold text-navy-950">{BUSINESS.yearsExperience}</span>
              <p className="mt-1 text-charcoal-600">Years in business, serving Pittsboro and the surrounding area.</p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-soft ring-1 ring-navy-100">
              <span className="font-display text-3xl font-bold text-navy-950">6</span>
              <p className="mt-1 text-charcoal-600">Confirmed service areas across Chatham County and beyond.</p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-soft ring-1 ring-navy-100">
              <span className="font-display text-3xl font-bold text-navy-950">10+</span>
              <p className="mt-1 text-charcoal-600">Plumbing services, from repair to new construction rough-in.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl rounded-3xl bg-navy-950 p-8 text-white md:p-10">
            <Star className="h-8 w-8 fill-accent-400 text-accent-400" aria-hidden="true" />
            <h2 className="mt-4 font-display text-2xl font-bold text-white md:text-3xl text-balance">
              Verified on Google
            </h2>
            <p className="mt-3 text-navy-200">
              We do not publish testimonials on this site. Read genuine reviews from customers on our public Google
              Maps listing — review count and rating are shown there, kept current by Google.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={BUSINESS.mapsListing}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                View reviews on Google
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
              <Link to="/reviews" className="btn-outline border-white/30 bg-white/5 text-white hover:border-white/50 hover:bg-white/10">
                Go to Reviews page
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
