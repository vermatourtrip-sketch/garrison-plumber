import { useSeo } from '@/lib/seo';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ServiceCardGrid, SectionHeading, FinalCta } from '@/components/sections';
import { CallButton } from '@/components/CallButton';

export default function ServicesPage() {
  useSeo({
    title: 'Plumbing Services in Pittsboro, NC | Garrison Plumbing',
    description:
      'Full-service residential and commercial plumbing from Garrison Plumbing in Pittsboro, NC — plumbing repair, drain cleaning, leak detection, water heaters, sewer lines, and new construction. Call 919-240-9153.',
  });

  return (
    <>
      <section className="border-b border-navy-100 bg-navy-50/40">
        <div className="container-wide py-10 md:py-14">
          <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Plumbing Services' }]} />
          <div className="mt-6 max-w-3xl">
            <span className="eyebrow">Plumbing services</span>
            <h1 className="mt-3 font-display text-4xl font-bold text-navy-950 md:text-5xl text-balance">
              Residential & commercial plumbing in Pittsboro, NC
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-charcoal-600 text-pretty">
              Garrison Plumbing handles a complete range of plumbing work across Pittsboro and the surrounding area.
              Each service below has its own page with detail, common problems, and FAQs. Not sure which fits your
              situation? Call and describe what you are seeing.
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
            eyebrow="All services"
            title="Browse our plumbing services"
            intro="Every service page includes common symptoms, an explanation of the work, and service-specific FAQs."
          />
          <div className="mt-10">
            <ServiceCardGrid />
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
