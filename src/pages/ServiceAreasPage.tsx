import { useSeo } from '@/lib/seo';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { AreaCardGrid, SectionHeading, FinalCta } from '@/components/sections';
import { CallButton } from '@/components/CallButton';

export default function ServiceAreasPage() {
  useSeo({
    title: 'Plumbing Service Areas | Garrison Plumbing — Pittsboro, NC',
    description:
      'Garrison Plumbing serves Pittsboro, Siler City, Apex, Cary, Raleigh, and Chapel Hill, NC with residential and commercial plumbing. Call 919-240-9153 to confirm availability.',
  });

  return (
    <>
      <section className="border-b border-navy-100 bg-navy-50/40">
        <div className="container-wide py-10 md:py-14">
          <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Service Areas' }]} />
          <div className="mt-6 max-w-3xl">
            <span className="eyebrow">Service areas</span>
            <h1 className="mt-3 font-display text-4xl font-bold text-navy-950 md:text-5xl text-balance">
              Where Garrison Plumbing works
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-charcoal-600 text-pretty">
              Based in Pittsboro, Garrison Plumbing serves a confirmed area across Chatham County and the surrounding
              region. Each area below has its own page with locally relevant plumbing detail, FAQs, and links to
              services offered there.
            </p>
            <div className="mt-7">
              <CallButton size="lg" ctaLabel="Call Garrison Plumbing now" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Confirmed coverage"
            title="Verified service areas"
            intro="Call to confirm availability for your specific location — coverage is verified but availability can depend on the job."
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
