import { Link, useLocation } from 'react-router-dom';
import { Phone, Wrench, ArrowRight } from 'lucide-react';
import { useSeo, SITE_ORIGIN } from '@/lib/seo';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FinalCta, FaqList, ServiceIcon, StarRow } from '@/components/sections';
import { CallButton } from '@/components/CallButton';
import {
  SERVICES,
  serviceByName,
  servicePath,
  areaPath,
  AREAS,
  BUSINESS,
  PHONE_DISPLAY,
  PHONE_TEL,
  type ServiceSlug,
} from '@/data/business';

export default function ServicePage() {
  const location = useLocation();
  const pathname = location.pathname;
  const stripped = pathname.replace(/^\//, '').replace(/-pittsboro-nc$/, '');
  const service = SERVICES.find((s) => s.slug === (stripped as ServiceSlug));

  if (!service) {
    return (
      <div className="container-wide py-24 text-center">
        <h1 className="text-3xl font-bold text-navy-950">Service not found</h1>
        <p className="mt-3 text-charcoal-600">We could not find that service page.</p>
        <Link to="/services" className="btn-primary mt-6">Back to all services</Link>
      </div>
    );
  }

  const s = service;
  const path = `/${s.slug}-pittsboro-nc`;

  useSeo({
    title: `${s.name} in Pittsboro, NC | Garrison Plumbing`,
    description: `${s.excerpt} Call Garrison Plumbing at ${PHONE_DISPLAY} for ${s.shortName.toLowerCase()} in Pittsboro, NC and the surrounding area.`,
    canonical: `${SITE_ORIGIN}${path}`,
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: s.name,
      provider: {
        '@type': 'Plumber',
        name: BUSINESS.name,
        telephone: '+19192409153',
        address: {
          '@type': 'PostalAddress',
          streetAddress: BUSINESS.address,
          addressLocality: BUSINESS.city,
          addressRegion: BUSINESS.state,
          postalCode: BUSINESS.zip,
          addressCountry: 'US',
        },
      },
      areaServed: 'Pittsboro, NC',
      mainEntityOfPage: `${SITE_ORIGIN}${path}`,
    },
  });

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: s.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      <section className="relative overflow-hidden bg-navy-950 text-white">
        <div className="absolute inset-0" aria-hidden="true">
          <img src={s.hero} alt={`${s.name} in Pittsboro, NC`} className="h-full w-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-950/85 to-navy-900/70" />
        </div>
        <div className="container-wide relative py-12 md:py-16 lg:py-20">
          <div className="text-navy-200">
            <Breadcrumbs
              items={[
                { label: 'Home', to: '/' },
                { label: 'Services', to: '/services' },
                { label: s.shortName },
              ]}
            />
          </div>
          <div className="mt-6 max-w-3xl">
            <span className="eyebrow text-accent-300">
              <span className="grid h-7 w-7 place-items-center rounded-lg bg-white/10 text-accent-300">
                <ServiceIcon name={s.icon} className="h-4 w-4" />
              </span>
              {BUSINESS.city}, {BUSINESS.state}
            </span>
            <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-white md:text-5xl text-balance">
              {s.name} in Pittsboro, North Carolina
            </h1>
            <p className="mt-5 text-lg text-navy-200 text-pretty">{s.excerpt}</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <CallButton variant="primary" size="lg" ctaLabel={s.ctaLabel} label={`Call ${PHONE_DISPLAY}`} />
              <Link to="/services" className="btn-outline border-white/30 bg-white/5 text-white hover:border-white/50 hover:bg-white/10">
                All plumbing services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-wide grid gap-12 lg:grid-cols-[1fr_320px]">
          <div>
            <div className="prose-plumbing max-w-2xl">
              {s.description.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="mt-10 max-w-2xl">
              <h2 className="font-display text-2xl font-bold text-navy-950">
                Common problems we can help with
              </h2>
              <ul className="mt-5 space-y-3">
                {s.problems.map((p, i) => (
                  <li key={i} className="flex items-start gap-3 rounded-2xl bg-navy-50/50 p-4 ring-1 ring-navy-100">
                    <Wrench className="mt-0.5 h-5 w-5 shrink-0 text-accent-700" aria-hidden="true" />
                    <span className="text-charcoal-700">{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 max-w-2xl rounded-3xl bg-navy-900 p-6 text-white md:p-8">
              <h2 className="font-display text-2xl font-bold text-white">Call to discuss your situation</h2>
              <p className="mt-2 text-navy-200">
                The fastest way to know whether this service fits your needs is a phone call. Describe what you are
                seeing and we will help you decide the next step.
              </p>
              <a href={PHONE_TEL} className="btn-primary mt-5" aria-label={s.ctaLabel}>
                <Phone className="h-5 w-5" aria-hidden="true" />
                {s.ctaLabel} · {PHONE_DISPLAY}
              </a>
            </div>

            <div className="mt-12 max-w-3xl">
              <h2 className="font-display text-2xl font-bold text-navy-950">{s.shortName} — frequently asked questions</h2>
              <p className="mt-2 text-charcoal-600">Quick answers. For your specific situation, call and we will talk it through.</p>
              <div className="mt-6">
                <FaqList faqs={s.faqs} />
              </div>
            </div>
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-3xl bg-white p-6 shadow-card ring-1 ring-navy-100">
              <h3 className="font-display text-lg font-bold text-navy-900">Related services</h3>
              <ul className="mt-4 space-y-2.5">
                {s.related.map((rslug) => {
                  const r = serviceByName(rslug);
                  return (
                    <li key={rslug}>
                      <Link
                        to={servicePath(rslug)}
                        className="group flex items-center justify-between gap-2 rounded-xl px-3 py-2.5 text-sm font-semibold text-navy-800 transition-colors hover:bg-navy-50"
                      >
                        <span className="flex items-center gap-2">
                          <ServiceIcon name={r.icon} className="h-4 w-4 text-accent-700" />
                          {r.shortName}
                        </span>
                        <ArrowRight className="h-4 w-4 text-charcoal-400 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <h3 className="mt-6 font-display text-lg font-bold text-navy-900">Service areas</h3>
              <ul className="mt-4 space-y-2.5">
                {AREAS.map((a) => (
                  <li key={a.slug}>
                    <Link
                      to={areaPath(a.slug)}
                      className="text-sm font-medium text-accent-700 hover:text-accent-800"
                    >
                      {a.name}, {a.state}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-2xl bg-navy-50 p-4">
                <StarRow />
                <p className="mt-2 text-sm text-charcoal-600">Read verified reviews on our Google Maps listing.</p>
                <a href={BUSINESS.mapsListing} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-700">
                  View on Google <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
