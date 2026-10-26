import { Phone, MapPin, ExternalLink, Clock, ShieldCheck } from 'lucide-react';
import { useSeo, SITE_ORIGIN } from '@/lib/seo';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FinalCta } from '@/components/sections';
import { CallButton } from '@/components/CallButton';
import { BUSINESS, PHONE_DISPLAY, PHONE_TEL } from '@/data/business';

export default function ContactPage() {
  useSeo({
    title: `Contact Garrison Plumbing | Pittsboro, NC — Call ${PHONE_DISPLAY}`,
    description: `Contact Garrison Plumbing by phone at ${PHONE_DISPLAY}. Based at ${BUSINESS.address}, ${BUSINESS.city}, ${BUSINESS.state} ${BUSINESS.zip}. Direct calls only — no forms, no email.`,
    canonical: `${SITE_ORIGIN}/contact`,
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Plumber',
      name: BUSINESS.name,
      telephone: '+19192409153',
      url: `${SITE_ORIGIN}/contact`,
      image: `${SITE_ORIGIN}/favicon.svg`,
      address: {
        '@type': 'PostalAddress',
        streetAddress: BUSINESS.address,
        addressLocality: BUSINESS.city,
        addressRegion: BUSINESS.state,
        postalCode: BUSINESS.zip,
        addressCountry: 'US',
      },
      hasMap: BUSINESS.mapsListing,
    },
  });

  return (
    <>
      <section className="border-b border-navy-100 bg-navy-50/40">
        <div className="container-wide py-10 md:py-14">
          <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Contact' }]} />
          <div className="mt-6 max-w-3xl">
            <span className="eyebrow">Contact</span>
            <h1 className="mt-3 font-display text-4xl font-bold text-navy-950 md:text-5xl text-balance">
              Contact Garrison Plumbing
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-charcoal-600 text-pretty">
              The fastest way to reach Garrison Plumbing is a direct phone call. There are no forms, no email, and no
              chat — just a real person on the other end of the line.
            </p>
            <div className="mt-7">
              <CallButton size="lg" ctaLabel={`Call Garrison Plumbing at ${PHONE_DISPLAY}`} />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-wide grid gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="rounded-3xl bg-white p-6 shadow-card ring-1 ring-navy-100 md:p-8">
              <h2 className="font-display text-2xl font-bold text-navy-950">Call us</h2>
              <p className="mt-2 text-charcoal-600">
                One call reaches Garrison Plumbing directly. Describe what you are seeing and we will help you decide
                whether a visit makes sense.
              </p>
              <a
                href={PHONE_TEL}
                aria-label={`Call Garrison Plumbing at ${PHONE_DISPLAY}`}
                className="btn-primary btn-lg mt-5 w-full sm:w-auto"
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
                {PHONE_DISPLAY}
              </a>
            </div>

            <div className="rounded-3xl bg-white p-6 shadow-card ring-1 ring-navy-100 md:p-8">
              <h2 className="font-display text-2xl font-bold text-navy-950">Business details</h2>
              <ul className="mt-4 space-y-4 text-charcoal-700">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 text-accent-700" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-navy-900">{BUSINESS.name}</p>
                    <p>{BUSINESS.address}</p>
                    <p>{BUSINESS.city}, {BUSINESS.state} {BUSINESS.zip}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-5 w-5 text-accent-700" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-navy-900">Phone</p>
                    <a href={PHONE_TEL} className="link-callout">{PHONE_DISPLAY}</a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <ExternalLink className="mt-0.5 h-5 w-5 text-accent-700" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-navy-900">Google Maps listing</p>
                    <a href={BUSINESS.mapsListing} target="_blank" rel="noopener noreferrer" className="link-callout">
                      Open on Google Maps
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5 text-accent-700" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-navy-900">License</p>
                    <p>{BUSINESS.license}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-5 w-5 text-accent-700" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-navy-900">Hours</p>
                    <p>Call to confirm current hours and availability.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <div className="overflow-hidden rounded-3xl shadow-card ring-1 ring-navy-100">
              <iframe
                title={`Map showing Garrison Plumbing at ${BUSINESS.address}, ${BUSINESS.city}, ${BUSINESS.state}`}
                src={BUSINESS.mapsEmbed}
                style={{ border: 0 }}
                className="h-[340px] w-full md:h-[460px]"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
            <p className="text-sm text-charcoal-500">
              Approximate location shown on the map. Call to confirm the exact service address and whether we cover
              your part of town.
            </p>
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
