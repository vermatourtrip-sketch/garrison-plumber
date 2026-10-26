import { Link } from 'react-router-dom';
import {
  Wrench,
  Droplets,
  Search,
  GitFork,
  Flame,
  Thermometer,
  Replace,
  Droplet,
  Waves,
  Building2,
  Phone,
  ArrowRight,
  MapPin,
  ShieldCheck,
  Star,
  Clock,
  type LucideIcon,
} from 'lucide-react';
import { SERVICES, AREAS, servicePath, PHONE_DISPLAY, PHONE_TEL, BUSINESS, type ServiceSlug } from '@/data/business';

const ICONS: Record<string, LucideIcon> = {
  Wrench,
  Droplets,
  Search,
  GitFork,
  Flame,
  Thermometer,
  Replace,
  Droplet,
  Waves,
  Building2,
};

export function ServiceIcon({ name, className }: { name: string; className?: string }) {
  const Icon = ICONS[name] ?? Wrench;
  return <Icon className={className} aria-hidden="true" />;
}

export function ServiceCard({ slug, index = 0 }: { slug: ServiceSlug; index?: number }) {
  const s = SERVICES.find((x) => x.slug === slug)!;
  return (
    <article
      className="card card-hover group flex flex-col overflow-hidden"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <Link to={servicePath(s.slug)} className="block focus-visible:ring-2 focus-visible:ring-accent-500">
        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            src={s.hero}
            alt={`${s.name} in ${BUSINESS.city}, ${BUSINESS.state}`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-navy-950/10 to-transparent" />
          <div className="absolute left-4 top-4 grid h-11 w-11 place-items-center rounded-xl bg-white/95 text-navy-900 shadow-soft">
            <ServiceIcon name={s.icon} className="h-5 w-5" />
          </div>
          <h3 className="absolute bottom-3 left-4 right-4 font-display text-lg font-bold text-white">{s.name}</h3>
        </div>
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-sm leading-relaxed text-charcoal-600">{s.excerpt}</p>
        <div className="mt-5 flex items-center justify-between gap-3 pt-1">
          <Link
            to={servicePath(s.slug)}
            className="group/link inline-flex items-center gap-1.5 text-sm font-semibold text-accent-700 hover:text-accent-800"
          >
            View {s.shortName}
            <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" aria-hidden="true" />
          </Link>
          <a
            href={PHONE_TEL}
            aria-label={s.ctaLabel}
            className="inline-flex items-center gap-1.5 rounded-full bg-navy-900 px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:bg-navy-800"
          >
            <Phone className="h-3.5 w-3.5" aria-hidden="true" />
            Call
          </a>
        </div>
      </div>
    </article>
  );
}

export function AreaCard({ slug, index = 0 }: { slug: string; index?: number }) {
  const a = AREAS.find((x) => x.slug === slug)!;
  return (
    <article
      className="card card-hover group overflow-hidden"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <Link to={`/service-areas/${a.slug}-nc`} className="block focus-visible:ring-2 focus-visible:ring-accent-500">
        <div className="relative aspect-[16/9] overflow-hidden">
          <img
            src={a.image}
            alt={`${a.name}, ${a.state}`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/10 to-transparent" />
          <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-navy-900 shadow-soft">
            <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
            {a.county}
          </div>
          <h3 className="absolute bottom-3 left-4 right-4 font-display text-xl font-bold text-white">
            {a.name}, {a.state}
          </h3>
        </div>
      </Link>
      <div className="p-5">
        <p className="text-sm leading-relaxed text-charcoal-600">{a.blurb}</p>
        <Link
          to={`/service-areas/${a.slug}-nc`}
          className="group/link mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-700 hover:text-accent-800"
        >
          Plumbing in {a.name}
          <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = 'left',
}: {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: 'left' | 'center';
}) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="mt-3 text-3xl font-bold text-navy-950 md:text-4xl text-balance">{title}</h2>
      {intro && <p className="mt-4 text-lg leading-relaxed text-charcoal-600 text-pretty">{intro}</p>}
    </div>
  );
}

export function TrustStrip() {
  const items = [
    { icon: ShieldCheck, label: BUSINESS.license },
    { icon: Clock, label: `${BUSINESS.yearsExperience} years in business` },
    { icon: MapPin, label: 'Based in Pittsboro, NC' },
    { icon: Phone, label: PHONE_DISPLAY },
  ];
  return (
    <ul className="grid grid-cols-2 gap-3 md:grid-cols-4">
      {items.map((it, i) => (
        <li
          key={i}
          className="flex items-center gap-3 rounded-2xl bg-white/90 p-3 shadow-soft ring-1 ring-navy-100/60"
        >
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-navy-50 text-accent-700">
            <it.icon className="h-4.5 w-4.5" aria-hidden="true" />
          </span>
          <span className="text-sm font-semibold text-navy-900">{it.label}</span>
        </li>
      ))}
    </ul>
  );
}

export function FinalCta({
  title = 'Need a Plumber? Call Garrison Plumbing.',
  copy = 'Discuss your plumbing issue directly with Garrison Plumbing and confirm service availability.',
}: {
  title?: string;
  copy?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-950 text-white">
      <div className="absolute inset-0 bg-grid-navy opacity-30" aria-hidden="true" />
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent-600/20 blur-3xl" aria-hidden="true" />
      <div className="container-wide relative py-16 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold text-white md:text-4xl text-balance">{title}</h2>
          <p className="mt-4 text-lg text-navy-200 text-pretty">{copy}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href={PHONE_TEL} className="btn-primary btn-lg" aria-label={`Call Garrison Plumbing at ${PHONE_DISPLAY}`}>
              <Phone className="h-5 w-5" aria-hidden="true" />
              Call {PHONE_DISPLAY}
            </a>
          </div>
          <p className="mt-5 text-sm text-navy-300">Direct calls only · No forms, no email — just a real person.</p>
        </div>
      </div>
    </section>
  );
}

export function FaqList({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <div className="mx-auto max-w-3xl">
      <div className="space-y-3">
        {faqs.map((f, i) => (
          <details
            key={i}
            className="group rounded-2xl border border-navy-100 bg-white p-5 shadow-soft transition-colors open:bg-navy-50/40"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-navy-900">
              {f.q}
              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-navy-100 text-navy-700 transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-3 leading-relaxed text-charcoal-600">{f.a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}

export function ServiceCardGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {SERVICES.map((s, i) => (
        <ServiceCard key={s.slug} slug={s.slug as ServiceSlug} index={i} />
      ))}
    </div>
  );
}

export function AreaCardGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {AREAS.map((a, i) => (
        <AreaCard key={a.slug} slug={a.slug} index={i} />
      ))}
    </div>
  );
}

export function StarRow({ count = 5 }: { count?: number }) {
  return (
    <div className="flex items-center gap-0.5 text-accent-500" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-current" aria-hidden="true" />
      ))}
    </div>
  );
}
