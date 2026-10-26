import { Link } from 'react-router-dom';
import { Phone, MapPin, Droplet, ShieldCheck, Clock } from 'lucide-react';
import { BUSINESS, PHONE_DISPLAY, PHONE_TEL, NAV_LINKS, SERVICES, AREAS, servicePath } from '@/data/business';

export function Footer() {
  return (
    <footer className="bg-navy-950 text-navy-100">
      <div className="container-wide grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4 lg:py-20">
        <div>
          <Link to="/" className="flex items-center gap-2.5" aria-label="Garrison Plumbing home">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 text-accent-300">
              <Droplet className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-display text-lg font-bold text-white">Garrison Plumbing</span>
              <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-navy-300">Pittsboro, NC</span>
            </span>
          </Link>
          <p className="mt-5 text-sm leading-relaxed text-navy-200">
            A full-service residential and commercial plumber based in Pittsboro, serving Chatham County and the
            surrounding area.
          </p>
          <div className="mt-6 space-y-3 text-sm">
            <a href={PHONE_TEL} className="flex items-center gap-3 font-semibold text-white hover:text-accent-300">
              <Phone className="h-4 w-4 text-accent-400" aria-hidden="true" />
              {PHONE_DISPLAY}
            </a>
            <p className="flex items-start gap-3 text-navy-200">
              <MapPin className="mt-0.5 h-4 w-4 text-accent-400" aria-hidden="true" />
              <span>
                {BUSINESS.address}
                <br />
                {BUSINESS.city}, {BUSINESS.state} {BUSINESS.zip}
              </span>
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-navy-300">Services</h3>
          <ul className="mt-5 space-y-2.5 text-sm">
            {SERVICES.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link
                  to={servicePath(s.slug)}
                  className="text-navy-200 transition-colors hover:text-white"
                >
                  {s.shortName}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-navy-300">Service Areas</h3>
          <ul className="mt-5 space-y-2.5 text-sm">
            {AREAS.map((a) => (
              <li key={a.slug}>
                <Link
                  to={`/service-areas/${a.slug}-nc`}
                  className="text-navy-200 transition-colors hover:text-white"
                >
                  {a.name}, {a.state}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-navy-300">Company</h3>
          <ul className="mt-5 space-y-2.5 text-sm">
            {NAV_LINKS.filter((l) => l.path !== '/').map((l) => (
              <li key={l.path}>
                <Link to={l.path} className="text-navy-200 transition-colors hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="mt-6 space-y-2.5 text-sm text-navy-200">
            <li className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-accent-400" aria-hidden="true" />
              {BUSINESS.license}
            </li>
            <li className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-accent-400" aria-hidden="true" />
              Mon–Sat · Call to confirm
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-wide flex flex-col items-center justify-between gap-3 py-6 text-xs text-navy-300 md:flex-row">
          <p>© {new Date().getFullYear()} Garrison Plumbing. All rights reserved.</p>
          <p className="text-navy-400">
            {BUSINESS.name} · {BUSINESS.serviceType} Plumbing · {BUSINESS.city}, {BUSINESS.state}
          </p>
        </div>
      </div>
    </footer>
  );
}
