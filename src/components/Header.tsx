import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Phone, Menu, X, Droplet } from 'lucide-react';
import { NAV_LINKS, PHONE_DISPLAY, PHONE_TEL } from '@/data/business';

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 shadow-nav backdrop-blur supports-[backdrop-filter]:bg-white/85' : 'bg-white'
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-navy-900 focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <div className="container-wide flex h-16 items-center justify-between gap-4 md:h-20">
        <Link to="/" className="flex items-center gap-2.5" aria-label="Garrison Plumbing home">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-navy-900 text-white shadow-soft md:h-11 md:w-11">
            <Droplet className="h-5 w-5 text-accent-400" aria-hidden="true" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg font-bold text-navy-950 md:text-xl">Garrison Plumbing</span>
            <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-charcoal-500">Pittsboro, NC</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) =>
                `rounded-full px-3.5 py-2 text-sm font-semibold transition-colors ${
                  isActive ? 'bg-navy-50 text-navy-900' : 'text-charcoal-700 hover:bg-navy-50 hover:text-navy-900'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={PHONE_TEL}
            aria-label={`Call Garrison Plumbing at ${PHONE_DISPLAY}`}
            className="btn-primary hidden sm:inline-flex"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            <span className="hidden md:inline">{PHONE_DISPLAY}</span>
            <span className="md:hidden">Call Now</span>
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid h-11 w-11 place-items-center rounded-xl border border-navy-200 text-navy-900 lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden">
          <div className="container-wide pb-6 pt-2">
            <nav className="flex flex-col gap-1 rounded-3xl bg-navy-50 p-3" aria-label="Mobile">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) =>
                    `rounded-2xl px-4 py-3 text-base font-semibold transition-colors ${
                      isActive ? 'bg-white text-navy-900 shadow-soft' : 'text-charcoal-700 hover:bg-white'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>
            <a
              href={PHONE_TEL}
              className="btn-primary btn-lg mt-3 w-full"
              aria-label={`Call Garrison Plumbing at ${PHONE_DISPLAY}`}
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              Call {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
