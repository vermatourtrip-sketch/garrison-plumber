import { Link } from 'react-router-dom';
import { Phone, MapPin, ShieldCheck, ArrowRight, Star, MessageSquareQuote, ExternalLink } from 'lucide-react';
import { useSeo, SITE_ORIGIN } from '@/lib/seo';
import { BUSINESS, PHONE_DISPLAY, PHONE_TEL, IMAGES } from '@/data/business';
import {
  ServiceCardGrid,
  AreaCardGrid,
  SectionHeading,
  FinalCta,
  TrustStrip,
  StarRow,
} from '@/components/sections';
import { CallButton } from '@/components/CallButton';

export default function HomePage() {
  useSeo({
    title: `Garrison Plumbing | Pittsboro, NC Plumber — Call ${PHONE_DISPLAY}`,
    description:
      'Garrison Plumbing is a full-service residential and commercial plumber based in Pittsboro, NC, serving Chatham County and the surrounding area. Call 919-240-9153 for plumbing repair, drain cleaning, water heaters, and more.',
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
      areaServed: ['Pittsboro, NC', 'Siler City, NC', 'Apex, NC', 'Cary, NC', 'Raleigh, NC', 'Chapel Hill, NC'],
      knowsAbout: [
        'Plumbing repair',
        'Drain cleaning',
        'Leak detection',
        'Pipe repair',
        'Water heater repair',
        'Water heater installation',
        'Toilet repair',
        'Faucet installation',
        'Sewer line services',
        'New construction plumbing',
      ],
    },
  });

  return (
    <>
      <section className="relative overflow-hidden bg-navy-950 text-white">
        <div className="absolute inset-0" aria-hidden="true">
          <img
            src={IMAGES.heroPipeInstall}
            alt="Plumber installing steel pipes indoors"
            className="h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-950/85 to-navy-900/70" />
        </div>
        <div className="container-wide relative py-16 md:py-24 lg:py-28">
          <div className="max-w-3xl">
            <span className="eyebrow text-accent-300">
              <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
              {BUSINESS.city}, {BUSINESS.state}
            </span>
            <h1 className="mt-4 font-display text-4xl font-bold leading-[1.1] text-white md:text-5xl lg:text-6xl text-balance">
              Plumbing Services in Pittsboro, North Carolina
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-navy-200 text-pretty">
              Need help with a plumbing problem or installation? Call Garrison Plumbing to discuss your plumbing needs
              and confirm service availability.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <CallButton variant="primary" size="lg" ctaLabel="Call Garrison Plumbing now" />
              <Link to="/services" className="btn-outline border-white/30 bg-white/5 text-white hover:border-white/50 hover:bg-white/10">
                Explore Plumbing Services
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Link>
            </div>
            <p className="mt-6 text-sm text-navy-300">
              {BUSINESS.serviceType} plumbing · {BUSINESS.yearsExperience} years in business · {BUSINESS.license}
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-navy-100 bg-navy-50/40">
        <div className="container-wide -mt-8 relative z-10 pb-2">
          <TrustStrip />
        </div>
        <div className="container-wide py-12 md:py-14">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <span className="eyebrow">Verified business</span>
              <h2 className="mt-3 text-3xl font-bold text-navy-950 md:text-4xl text-balance">
                A local Pittsboro plumber you can talk to directly
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-charcoal-600 text-pretty">
                Garrison Plumbing is a full-service residential and commercial plumbing company based at {BUSINESS.address}{' '}
                in Pittsboro. With {BUSINESS.yearsExperience} years in business, we work on everything from small
                repairs to full new construction plumbing across Chatham County and the surrounding area.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-start gap-3 text-charcoal-700">
                  <ShieldCheck className="mt-0.5 h-5 w-5 text-accent-700" aria-hidden="true" />
                  <span>{BUSINESS.license} — verify with the NC Board of Examiners of Plumbing, Heating & Fire Sprinkler Contractors.</span>
                </li>
                <li className="flex items-start gap-3 text-charcoal-700">
                  <Phone className="mt-0.5 h-5 w-5 text-accent-700" aria-hidden="true" />
                  <span>One phone call reaches the business directly — no forms, no callbacks, no runaround.</span>
                </li>
              </ul>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-card ring-1 ring-navy-100 md:p-8">
              <div className="flex items-center gap-2 text-sm font-semibold text-charcoal-500">
                <Star className="h-4 w-4 fill-accent-500 text-accent-500" aria-hidden="true" />
                Reviews on Google
              </div>
              <p className="mt-3 text-3xl font-bold text-navy-950">Read what customers say</p>
              <p className="mt-3 text-charcoal-600">
                Garrison Plumbing has a public Google Maps listing with customer reviews. We do not display fabricated
                testimonials on this site — read the real reviews directly on Google.
              </p>
              <a
                href={BUSINESS.mapsListing}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline mt-5"
              >
                View reviews on Google
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Plumbing services"
            title="Full-service plumbing for homes and businesses"
            intro="From a single dripping faucet to full new construction rough-ins, Garrison Plumbing covers a complete range of residential and commercial plumbing work. Call to confirm the service you need."
          />
          <div className="mt-10">
            <ServiceCardGrid />
          </div>
        </div>
      </section>

      <section className="bg-navy-50/50 py-16 md:py-20">
        <div className="container-wide">
          <div className="grid gap-10 md:grid-cols-2 md:items-start">
            <div>
              <span className="eyebrow">Why call Garrison Plumbing</span>
              <h2 className="mt-3 text-3xl font-bold text-navy-950 md:text-4xl text-balance">
                Talk through the problem first, then decide what to do
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-charcoal-600 text-pretty">
                Most plumbing problems start with a question: what is actually wrong, and what are the options? We are
                happy to talk through what you are seeing, explain the likely cause, and help you decide whether a
                repair visit makes sense — before anyone shows up.
              </p>
              <ul className="mt-6 space-y-4">
                {[
                  {
                    title: 'A real person answers',
                    body: 'No call center, no phone tree, no lead form. One call reaches Garrison Plumbing directly.',
                  },
                  {
                    title: 'Explanations before work',
                    body: 'We explain what is happening and what the repair involves so you can make an informed call.',
                  },
                  {
                    title: 'Residential and commercial',
                    body: 'From single-family homes to small businesses, we cover a full range of plumbing work.',
                  },
                  {
                    title: 'Local to Chatham County',
                    body: 'Based in Pittsboro, we know the area, the housing stock, and the common plumbing issues here.',
                  },
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white text-accent-700 shadow-soft ring-1 ring-navy-100">
                      <span className="font-display text-sm font-bold text-navy-900">{i + 1}</span>
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-bold text-navy-900">{item.title}</h3>
                      <p className="mt-1 text-charcoal-600">{item.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <CallButton size="lg" ctaLabel="Call Garrison Plumbing now" />
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <img
                src={IMAGES.bath}
                alt="Modern bathroom with new fixtures installed by a plumber"
                loading="lazy"
                className="aspect-[3/4] w-full rounded-3xl object-cover shadow-card"
              />
              <img
                src={IMAGES.heroBoiler}
                alt="Plumber adjusting a boiler system"
                loading="lazy"
                className="mt-8 aspect-[3/4] w-full rounded-3xl object-cover shadow-card"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-wide">
          <SectionHeading
            eyebrow="From our customers"
            title="Reviews on Google"
            intro="We do not publish testimonials on this site. Read the genuine reviews customers have left on our public Google Maps listing."
            align="center"
          />
          <div className="mt-8 flex flex-col items-center justify-center gap-4">
            <StarRow />
            <a
              href={BUSINESS.mapsListing}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <MessageSquareQuote className="h-5 w-5" aria-hidden="true" />
              Read reviews on Google
            </a>
            <p className="max-w-xl text-center text-sm text-charcoal-500">
              Review count and rating change over time. Visit the Google Maps listing for the current, verified
              information.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-navy-50/50 py-16 md:py-20">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Service areas"
            title="Where Garrison Plumbing works"
            intro="Based in Pittsboro, Garrison Plumbing serves a confirmed area across Chatham County and the surrounding region. Each area has its own page with locally relevant detail."
          />
          <div className="mt-10">
            <AreaCardGrid />
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
