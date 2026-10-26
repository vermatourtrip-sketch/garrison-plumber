import { Link } from 'react-router-dom';
import { Phone, Home, ArrowRight } from 'lucide-react';
import { useSeo } from '@/lib/seo';
import { PHONE_DISPLAY, PHONE_TEL, NAV_LINKS } from '@/data/business';

export default function NotFoundPage() {
  useSeo({
    title: `Page Not Found | Garrison Plumbing — Pittsboro, NC`,
    description: `The page you were looking for could not be found. Call Garrison Plumbing at ${PHONE_DISPLAY}.`,
  });

  return (
    <section className="bg-navy-50/40">
      <div className="container-wide flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
        <span className="font-display text-7xl font-bold text-navy-200 md:text-9xl">404</span>
        <h1 className="mt-4 font-display text-3xl font-bold text-navy-950 md:text-4xl">
          That page isn't here
        </h1>
        <p className="mt-3 max-w-md text-charcoal-600">
          The link may be broken or the page may have moved. Try one of these, or just call us.
        </p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <a href={PHONE_TEL} className="btn-primary btn-lg" aria-label={`Call Garrison Plumbing at ${PHONE_DISPLAY}`}>
            <Phone className="h-5 w-5" aria-hidden="true" />
            Call {PHONE_DISPLAY}
          </a>
          <Link to="/" className="btn-outline btn-lg">
            <Home className="h-5 w-5" aria-hidden="true" />
            Back to home
          </Link>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {NAV_LINKS.filter((l) => l.path !== '/').map((l) => (
            <Link
              key={l.path}
              to={l.path}
              className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-sm font-semibold text-navy-800 shadow-soft ring-1 ring-navy-100 hover:bg-navy-50"
            >
              {l.label}
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
