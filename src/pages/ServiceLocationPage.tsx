import { Link, useLocation } from 'react-router-dom';
import { Phone, Wrench, ArrowRight, MapPin } from 'lucide-react';
import { useSeo, SITE_ORIGIN } from '@/lib/seo';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FinalCta, FaqList, ServiceIcon } from '@/components/sections';
import { CallButton } from '@/components/CallButton';
import {
  SERVICES,
  AREAS,
  servicePath,
  areaPath,
  BUSINESS,
  PHONE_DISPLAY,
  PHONE_TEL,
} from '@/data/business';

export default function ServiceLocationPage() {
  const location = useLocation();
  const pathname = location.pathname;
  // pathname pattern: /{service-slug}-{area-slug}-nc
  const stripped = pathname.replace(/^\//, '').replace(/-nc$/, '');
  let service: typeof SERVICES[number] | undefined;
  let area: typeof AREAS[number] | undefined;
  for (const s of SERVICES) {
    if (stripped.startsWith(`${s.slug}-`)) {
      const rest = stripped.slice(s.slug.length + 1);
      const a = AREAS.find((x) => x.slug === rest);
      if (a) {
        service = s;
        area = a;
        break;
      }
    }
  }

  if (!service || !area) {
    return (
      <div className="container-wide py-24 text-center">
        <h1 className="text-3xl font-bold text-navy-950">Page not found</h1>
        <p className="mt-3 text-charcoal-600">We could not find that service-location page.</p>
        <Link to="/services" className="btn-primary mt-6">Browse services</Link>
      </div>
    );
  }

  const s = service;
  const a = area;
  const path = `/${s.slug}-${a.slug}-nc`;
  const title = `${s.name} in ${a.name}, ${a.state}`;
  const desc = `${s.excerpt} Garrison Plumbing serves ${a.name}, ${a.state}. Call ${PHONE_DISPLAY} to confirm availability.`;

  useSeo({
    title: `${title} | Garrison Plumbing`,
    description: desc,
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
      areaServed: { '@type': 'City', name: `${a.name}, ${a.state}` },
      mainEntityOfPage: `${SITE_ORIGIN}${path}`,
    },
  });

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      ...s.faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      {
        '@type': 'Question',
        name: `Do you offer ${s.shortName.toLowerCase()} in ${a.name}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Yes. ${a.name} is one of our confirmed service areas. Call ${PHONE_DISPLAY} to describe the job and confirm availability.`,
        },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      <section className="relative overflow-hidden bg-navy-950 text-white">
        <div className="absolute inset-0" aria-hidden="true">
          <img src={s.hero} alt={`${s.name} in ${a.name}, ${a.state}`} className="h-full w-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-950/85 to-navy-900/70" />
        </div>
        <div className="container-wide relative py-12 md:py-16 lg:py-20">
          <div className="text-navy-200">
            <Breadcrumbs
              items={[
                { label: 'Home', to: '/' },
                { label: 'Services', to: '/services' },
                { label: s.shortName, to: servicePath(s.slug) },
                { label: `${a.name}, ${a.state}` },
              ]}
            />
          </div>
          <div className="mt-6 max-w-3xl">
            <span className="eyebrow text-accent-300">
              <span className="grid h-7 w-7 place-items-center rounded-lg bg-white/10 text-accent-300">
                <ServiceIcon name={s.icon} className="h-4 w-4" />
              </span>
              {a.name}, {a.state}
            </span>
            <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-white md:text-5xl text-balance">
              {s.name} in {a.name}, {a.state}
            </h1>
            <p className="mt-5 text-lg text-navy-200 text-pretty">{s.excerpt}</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <CallButton variant="primary" size="lg" ctaLabel={`Call for ${s.shortName} in ${a.name}`} />
              <Link to={servicePath(s.slug)} className="btn-outline border-white/30 bg-white/5 text-white hover:border-white/50 hover:bg-white/10">
                {s.shortName} in Pittsboro
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
              <p>
                Garrison Plumbing serves {a.name}, {a.state}, from our base in Pittsboro. {a.blurb}
              </p>
            </div>

            <div className="mt-10 max-w-2xl">
              <h2 className="font-display text-2xl font-bold text-navy-950">
                Signs you may need {s.shortName.toLowerCase()} in {a.name}
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
              <h2 className="font-display text-2xl font-bold text-white">Confirm availability in {a.name}</h2>
              <p className="mt-2 text-navy-200">
                {a.name} is one of our confirmed service areas. Call to describe the job and we will confirm whether
                we can take it on for your part of town.
              </p>
              <a href={PHONE_TEL} className="btn-primary mt-5" aria-label={`Call Garrison Plumbing about ${s.shortName} in ${a.name}`}>
                <Phone className="h-5 w-5" aria-hidden="true" />
                {s.ctaLabel} · {PHONE_DISPLAY}
              </a>
            </div>

            <div className="mt-12 max-w-3xl">
              <h2 className="font-display text-2xl font-bold text-navy-950">{s.shortName} in {a.name} — FAQ</h2>
              <div className="mt-6">
                <FaqList faqs={[...s.faqs, {
                  q: `Do you offer ${s.shortName.toLowerCase()} in ${a.name}?`,
                  a: `Yes. ${a.name} is one of our confirmed service areas. Call ${PHONE_DISPLAY} to describe the job and confirm availability.`,
                }]} />
              </div>
            </div>
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-3xl bg-white p-6 shadow-card ring-1 ring-navy-100">
              <h3 className="font-display text-lg font-bold text-navy-900">Other services in {a.name}</h3>
              <ul className="mt-4 space-y-2.5">
                {SERVICES.filter((x) => x.slug !== s.slug).map((x) => (
                  <li key={x.slug}>
                    <Link
                      to={servicePath(x.slug, a.slug)}
                      className="group flex items-center justify-between gap-2 rounded-xl px-3 py-2.5 text-sm font-semibold text-navy-800 transition-colors hover:bg-navy-50"
                    >
                      <span className="flex items-center gap-2">
                        <ServiceIcon name={x.icon} className="h-4 w-4 text-accent-700" />
                        {x.shortName}
                      </span>
                      <ArrowRight className="h-4 w-4 text-charcoal-400 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-2xl bg-navy-50 p-4">
                <h3 className="font-display text-base font-bold text-navy-900">{s.shortName} elsewhere</h3>
                <ul className="mt-3 space-y-2">
                  {AREAS.filter((x) => x.slug !== a.slug).map((x) => (
                    <li key={x.slug}>
                      <Link to={servicePath(s.slug, x.slug)} className="text-sm font-medium text-accent-700 hover:text-accent-800">
                        {s.shortName} in {x.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link to={areaPath(a.slug)} className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-700">
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                  About {a.name}
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <FinalCta
        title={`Need ${s.shortName.toLowerCase()} in ${a.name}? Call Garrison Plumbing.`}
        copy={`Discuss your plumbing issue directly with Garrison Plumbing and confirm service availability in ${a.name}, ${a.state}.`}
      />
    </>
  );
}
