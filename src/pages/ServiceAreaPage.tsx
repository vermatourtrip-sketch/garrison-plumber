import { Link, useParams } from 'react-router-dom';
import { Phone, MapPin, ArrowRight, Building2 } from 'lucide-react';
import { useSeo, SITE_ORIGIN } from '@/lib/seo';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FinalCta, FaqList, ServiceIcon } from '@/components/sections';
import { CallButton } from '@/components/CallButton';
import {
  AREAS,
  SERVICES,
  servicePath,
  areaByName,
  type AreaSlug,
  BUSINESS,
  PHONE_DISPLAY,
  PHONE_TEL,
} from '@/data/business';

export default function ServiceAreaPage() {
  const { slug } = useParams<{ slug: string }>();
  const baseSlug = slug?.replace(/-nc$/, '') as AreaSlug | undefined;
  const area = AREAS.find((a) => a.slug === baseSlug);

  if (!area) {
    return (
      <div className="container-wide py-24 text-center">
        <h1 className="text-3xl font-bold text-navy-950">Service area not found</h1>
        <p className="mt-3 text-charcoal-600">We could not find that service-area page.</p>
        <Link to="/service-areas" className="btn-primary mt-6">All service areas</Link>
      </div>
    );
  }

  const a = area;
  const path = `/service-areas/${a.slug}-nc`;

  useSeo({
    title: `Plumber in ${a.name}, ${a.state} | Garrison Plumbing`,
    description: `Garrison Plumbing serves ${a.name}, ${a.state} with residential and commercial plumbing repair, drain cleaning, water heaters, and more. Based in Pittsboro. Call ${PHONE_DISPLAY}.`,
    canonical: `${SITE_ORIGIN}${path}`,
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Plumber',
      name: BUSINESS.name,
      telephone: '+19192409153',
      url: `${SITE_ORIGIN}${path}`,
      address: {
        '@type': 'PostalAddress',
        streetAddress: BUSINESS.address,
        addressLocality: BUSINESS.city,
        addressRegion: BUSINESS.state,
        postalCode: BUSINESS.zip,
        addressCountry: 'US',
      },
      areaServed: { '@type': 'City', name: `${a.name}, ${a.state}` },
    },
  });

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: a.faqs.map((f) => ({
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
          <img src={a.image} alt={`${a.name}, ${a.state}`} className="h-full w-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-950/85 to-navy-900/70" />
        </div>
        <div className="container-wide relative py-12 md:py-16 lg:py-20">
          <div className="text-navy-200">
            <Breadcrumbs
              items={[
                { label: 'Home', to: '/' },
                { label: 'Service Areas', to: '/service-areas' },
                { label: `${a.name}, ${a.state}` },
              ]}
            />
          </div>
          <div className="mt-6 max-w-3xl">
            <span className="eyebrow text-accent-300">
              <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
              {a.county}
            </span>
            <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-white md:text-5xl text-balance">
              Plumbing in {a.name}, {a.state}
            </h1>
            <p className="mt-5 text-lg text-navy-200 text-pretty">{a.blurb}</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <CallButton variant="primary" size="lg" ctaLabel={`Call Garrison Plumbing for service in ${a.name}`} />
              <Link to="/service-areas" className="btn-outline border-white/30 bg-white/5 text-white hover:border-white/50 hover:bg-white/10">
                All service areas
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-wide grid gap-12 lg:grid-cols-[1fr_320px]">
          <div>
            <div className="prose-plumbing max-w-2xl">
              {a.intro.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="mt-10 max-w-2xl">
              <h2 className="font-display text-2xl font-bold text-navy-950">Plumbing needs in {a.name}</h2>
              <ul className="mt-5 space-y-3">
                {a.localNeeds.map((n, i) => (
                  <li key={i} className="flex items-start gap-3 rounded-2xl bg-navy-50/50 p-4 ring-1 ring-navy-100">
                    <Building2 className="mt-0.5 h-5 w-5 shrink-0 text-accent-700" aria-hidden="true" />
                    <span className="text-charcoal-700">{n}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 max-w-2xl rounded-3xl bg-navy-900 p-6 text-white md:p-8">
              <h2 className="font-display text-2xl font-bold text-white">Confirm availability for {a.name}</h2>
              <p className="mt-2 text-navy-200">
                {a.name} is one of our confirmed service areas. Call to describe the job and we will confirm service
                availability for your part of town.
              </p>
              <a href={PHONE_TEL} className="btn-primary mt-5" aria-label={`Call Garrison Plumbing about ${a.name}`}>
                <Phone className="h-5 w-5" aria-hidden="true" />
                Call {PHONE_DISPLAY}
              </a>
            </div>

            <div className="mt-12 max-w-3xl">
              <h2 className="font-display text-2xl font-bold text-navy-950">Plumbing in {a.name} — FAQ</h2>
              <div className="mt-6">
                <FaqList faqs={a.faqs} />
              </div>
            </div>
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-3xl bg-white p-6 shadow-card ring-1 ring-navy-100">
              <h3 className="font-display text-lg font-bold text-navy-900">Services in {a.name}</h3>
              <ul className="mt-4 space-y-2.5">
                {SERVICES.map((s) => (
                  <li key={s.slug}>
                    <Link
                      to={servicePath(s.slug, a.slug)}
                      className="group flex items-center justify-between gap-2 rounded-xl px-3 py-2.5 text-sm font-semibold text-navy-800 transition-colors hover:bg-navy-50"
                    >
                      <span className="flex items-center gap-2">
                        <ServiceIcon name={s.icon} className="h-4 w-4 text-accent-700" />
                        {s.shortName}
                      </span>
                      <ArrowRight className="h-4 w-4 text-charcoal-400 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <FinalCta
        title={`Need a plumber in ${a.name}? Call Garrison Plumbing.`}
        copy={`Discuss your plumbing issue directly with Garrison Plumbing and confirm service availability in ${a.name}, ${a.state}.`}
      />
    </>
  );
}
