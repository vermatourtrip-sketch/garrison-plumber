export const PHONE_DISPLAY = '919-240-9153';
export const PHONE_TEL = 'tel:+19192409153';

export const BUSINESS = {
  name: 'Garrison Plumbing',
  phone: PHONE_DISPLAY,
  phoneTel: PHONE_TEL,
  address: '1200 Manco Dairy Rd',
  city: 'Pittsboro',
  state: 'NC',
  zip: '27312',
  region: 'North Carolina',
  mapsListing: 'https://maps.app.goo.gl/e6e2q4ijRxKJCsPi9',
  license: 'NC Plumber License #32473',
  yearsExperience: '30+',
  serviceType: 'Residential & Commercial',
  ownerName: 'Earlee Garrison',
  mapsEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d414156.6355997827!2d-78.98433895000001!3d35.80978355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5074e811b4c4ff%3A0xe95a389f5aec50e1!2sGarrison%20Plumbing!5e0!3m2!1sen!2sin!4v1793006672181!5m2!1sen!2sin',
};

export type ServiceSlug =
  | 'plumbing-repair'
  | 'drain-cleaning'
  | 'leak-detection'
  | 'pipe-repair'
  | 'water-heater-repair'
  | 'water-heater-installation'
  | 'toilet-repair'
  | 'faucet-installation'
  | 'sewer-line-repair'
  | 'new-construction-plumbing';

export type AreaSlug = 'pittsboro' | 'siler-city' | 'apex' | 'cary' | 'raleigh' | 'chapel-hill';

export interface Service {
  slug: ServiceSlug;
  name: string;
  shortName: string;
  ctaLabel: string;
  icon: string;
  hero: string;
  excerpt: string;
  problems: string[];
  description: string[];
  faqs: { q: string; a: string }[];
  related: ServiceSlug[];
}

export interface ServiceArea {
  slug: AreaSlug;
  name: string;
  state: string;
  zipCode: string;
  county: string;
  blurb: string;
  intro: string[];
  localNeeds: string[];
  faqs: { q: string; a: string }[];
  image: string;
}

const HERO_PIPE_INSTALL =
  'https://images.pexels.com/photos/6419128/pexels-photo-6419128.jpeg?auto=compress&cs=tinysrgb&w=1200';
const HERO_BOILER =
  'https://images.pexels.com/photos/7859953/pexels-photo-7859953.jpeg?auto=compress&cs=tinysrgb&w=1200';
const FAUCET_IMG =
  'https://images.pexels.com/photos/4194862/pexels-photo-4194862.jpeg?auto=compress&cs=tinysrgb&w=1200';
const TOILET_IMG =
  'https://images.pexels.com/photos/8486928/pexels-photo-8486928.jpeg?auto=compress&cs=tinysrgb&w=1200';
const HEATER_IMG =
  'https://images.pexels.com/photos/34938439/pexels-photo-34938439.jpeg?auto=compress&cs=tinysrgb&w=1200';
const BATH_IMG =
  'https://images.pexels.com/photos/7167064/pexels-photo-7167064.jpeg?auto=compress&cs=tinysrgb&w=1200';
const RENO_IMG =
  'https://images.pexels.com/photos/36035073/pexels-photo-36035073.jpeg?auto=compress&cs=tinysrgb&w=1200';
const DRAIN_IMG =
  'https://images.pexels.com/photos/36842620/pexels-photo-36842620.jpeg?auto=compress&cs=tinysrgb&w=1200';
const RAD_PIPE_IMG =
  'https://images.pexels.com/photos/29226620/pexels-photo-29226620.jpeg?auto=compress&cs=tinysrgb&w=1200';
const IND_PIPE_IMG =
  'https://images.pexels.com/photos/16509869/pexels-photo-16509869.jpeg?auto=compress&cs=tinysrgb&w=1200';
const MANIFOLD_IMG =
  'https://images.pexels.com/photos/7937299/pexels-photo-7937299.jpeg?auto=compress&cs=tinysrgb&w=1200';
const FAUCET2_IMG =
  'https://images.pexels.com/photos/12196323/pexels-photo-12196323.jpeg?auto=compress&cs=tinysrgb&w=1200';
const WORKER_IMG =
  'https://images.pexels.com/photos/8486927/pexels-photo-8486927.jpeg?auto=compress&cs=tinysrgb&w=1200';
const BATH2_IMG =
  'https://images.pexels.com/photos/6653889/pexels-photo-6653889.jpeg?auto=compress&cs=tinysrgb&w=1200';
const BATH3_IMG =
  'https://images.pexels.com/photos/35493886/pexels-photo-35493886.jpeg?auto=compress&cs=tinysrgb&w=1200';
const NC_TOWN =
  'https://images.pexels.com/photos/19571847/pexels-photo-19571847.jpeg?auto=compress&cs=tinysrgb&w=1200';
const MAIN_STREET =
  'https://images.pexels.com/photos/12641333/pexels-photo-12641333.jpeg?auto=compress&cs=tinysrgb&w=1200';

export const IMAGES = {
  heroPipeInstall: HERO_PIPE_INSTALL,
  heroBoiler: HERO_BOILER,
  faucet: FAUCET_IMG,
  faucet2: FAUCET2_IMG,
  toilet: TOILET_IMG,
  heater: HEATER_IMG,
  bath: BATH_IMG,
  bath2: BATH2_IMG,
  bath3: BATH3_IMG,
  reno: RENO_IMG,
  drain: DRAIN_IMG,
  radPipe: RAD_PIPE_IMG,
  indPipe: IND_PIPE_IMG,
  manifold: MANIFOLD_IMG,
  worker: WORKER_IMG,
  ncTown: NC_TOWN,
  mainStreet: MAIN_STREET,
};

export const SERVICES: Service[] = [
  {
    slug: 'plumbing-repair',
    name: 'Plumbing Repair',
    shortName: 'Plumbing Repair',
    ctaLabel: 'Call for Plumbing Repair',
    icon: 'Wrench',
    hero: HERO_PIPE_INSTALL,
    excerpt:
      'Diagnosis and repair of common and complex plumbing issues across residential and commercial properties in Pittsboro.',
    problems: [
      'Dripping, leaking, or running fixtures that drive up water bills',
      'Low water pressure in showers, sinks, or appliances',
      'Banging pipes, water hammer, or noisy plumbing lines',
      'Discolored or rusty water from aging pipes',
      'Fixtures that will not fully shut off',
    ],
    description: [
      'Plumbing repair covers the broad day-to-day work that keeps water moving safely through your home or building. Whether a fitting has loosened, a fixture has worn out, or a hidden leak is slowly damaging drywall, Garrison Plumbing can assess the issue, explain what is happening, and recommend a clear path to fix it.',
      'We work on residential and commercial systems throughout Pittsboro and the surrounding areas. Call to describe the problem you are seeing and we will help you decide whether a repair visit makes sense for your situation.',
    ],
    faqs: [
      {
        q: 'How do I know if a plumbing problem needs a repair visit?',
        a: 'If you notice persistent leaks, pressure changes, unusual noises, or water where it should not be, it is worth a phone call. Describe what you see and we can help you decide whether to schedule a visit.',
      },
      {
        q: 'Can you work on both residential and commercial plumbing?',
        a: 'Yes. Garrison Plumbing is a full-service residential and commercial plumbing company based in Pittsboro, NC.',
      },
      {
        q: 'Do you handle small repairs like a dripping faucet?',
        a: 'Yes. Small repairs are a normal part of plumbing work. Call to describe the repair and we can confirm whether it is something we cover.',
      },
    ],
    related: ['leak-detection', 'faucet-installation', 'pipe-repair'],
  },
  {
    slug: 'drain-cleaning',
    name: 'Drain Cleaning & Clog Removal',
    shortName: 'Drain Cleaning',
    ctaLabel: 'Call for Drain Cleaning',
    icon: 'Droplets',
    hero: DRAIN_IMG,
    excerpt:
      'Clearing slow and blocked drains in kitchens, bathrooms, and main lines for homes and businesses in the Pittsboro area.',
    problems: [
      'Sinks, tubs, or showers that drain slowly or not at all',
      'Recurring clogs that come back after plunging',
      'Gurgling sounds from drains or toilets',
      'Multiple fixtures backing up at once',
      'Foul odors rising from a floor or sink drain',
    ],
    description: [
      'Drain cleaning removes the buildup and blockages that slow or stop water from leaving your fixtures. Kitchen drains collect grease and food, bathroom drains collect hair and soap, and main lines can be affected by debris or root intrusion over time.',
      'Garrison Plumbing can evaluate the affected drain and discuss the best approach to clear it. Call to describe the symptoms — which fixtures are slow, whether multiple drains are affected, and how long it has been happening — and we will help determine next steps.',
    ],
    faqs: [
      {
        q: 'Can I use a store-bought drain cleaner first?',
        a: 'Chemical cleaners can corrode older pipes and often only clear a partial blockage. If a drain is recurring or completely stopped, a phone call helps us recommend the right approach before it worsens.',
      },
      {
        q: 'Do you clear main line clogs, not just sinks?',
        a: 'Yes. We work on fixture drains as well as larger main lines. Describe the situation when you call and we can confirm coverage.',
      },
      {
        q: 'How can I prevent drains from clogging again?',
        a: 'Routine habits — keeping grease out of kitchen drains, using drain screens, and flushing with hot water — help a great deal. We can share more guidance when you call.',
      },
    ],
    related: ['plumbing-repair', 'sewer-line-repair', 'leak-detection'],
  },
  {
    slug: 'leak-detection',
    name: 'Leak Detection & Repair',
    shortName: 'Leak Detection',
    ctaLabel: 'Call for Leak Detection',
    icon: 'Search',
    hero: IND_PIPE_IMG,
    excerpt:
      'Locating hidden leaks behind walls, under slabs, and in underground lines before they cause structural damage.',
    problems: [
      'Unexplained increase in your water bill',
      'Sound of running water when nothing is turned on',
      'Warm or damp spots on floors',
      'Mildew or musty smell in a specific area',
      'Cracks in walls or foundation that appear without cause',
    ],
    description: [
      'Leaks do not always show themselves. A small leak behind a wall or under a slab can run for weeks before it is noticed, wasting water and quietly damaging the structure around it. Leak detection is the process of narrowing down where that leak actually is before walls are opened or floors are torn up.',
      'Garrison Plumbing can help assess the signs you are seeing and recommend a plan to locate and repair the leak. Call to describe the symptoms — where the moisture appears, how the bill has changed, and when it started.',
    ],
    faqs: [
      {
        q: 'How can you find a leak without tearing into walls?',
        a: 'We start from the symptoms you describe and the area affected, then narrow down likely sources. Call to discuss what you are seeing and we can outline the approach.',
      },
      {
        q: 'Is a higher water bill always a leak?',
        a: 'Not always, but a sudden unexplained jump is a strong signal. If usage has not changed, a hidden leak is a common cause worth investigating.',
      },
      {
        q: 'What should I do if I suspect a slab leak?',
        a: 'Call before the situation worsens. Warm spots on the floor, damp carpet, or the sound of running water are all reasons to investigate promptly.',
      },
    ],
    related: ['plumbing-repair', 'pipe-repair', 'water-heater-repair'],
  },
  {
    slug: 'pipe-repair',
    name: 'Pipe Repair & Replacement',
    shortName: 'Pipe Repair',
    ctaLabel: 'Call for Pipe Repair',
    icon: 'GitFork',
    hero: RAD_PIPE_IMG,
    excerpt:
      'Repairing and replacing damaged, corroded, or burst pipes in residential and commercial plumbing systems.',
    problems: [
      'Visible water staining on ceilings or walls',
      'A sudden drop in water pressure',
      'Pipes that freeze and burst in cold snaps',
      'Green or white mineral buildup around fittings',
      'Pipes that have reached the end of their service life',
    ],
    description: [
      'Pipes are the backbone of any plumbing system. Over time, joints loosen, materials corrode, and older pipes — particularly galvanized steel or aging copper — can develop pinhole leaks or fail outright. Pipe repair addresses the damaged section; replacement is the right call when a larger run has reached the end of its life.',
      'Garrison Plumbing can evaluate the pipe in question, explain whether a repair or a replacement makes more sense, and outline the scope. Call to describe the pipe material, the symptom, and where it is located.',
    ],
    faqs: [
      {
        q: 'Can a section of pipe be repaired, or does the whole line need replacing?',
        a: 'It depends on the condition of the surrounding pipe. A single damaged section can often be repaired; widespread corrosion usually calls for replacement. We can advise once you describe the situation.',
      },
      {
        q: 'What pipe materials do you work with?',
        a: 'We work with the common residential and commercial pipe materials. Call to describe your situation and the pipe involved.',
      },
      {
        q: 'Do you handle frozen and burst pipes?',
        a: 'Yes. If a pipe has frozen or burst, call right away and describe the location and what you are seeing.',
      },
    ],
    related: ['plumbing-repair', 'leak-detection', 'new-construction-plumbing'],
  },
  {
    slug: 'water-heater-repair',
    name: 'Water Heater Repair',
    shortName: 'Water Heater Repair',
    ctaLabel: 'Call for Water Heater Repair',
    icon: 'Flame',
    hero: HEATER_IMG,
    excerpt:
      'Diagnosing and repairing tank and tankless water heaters that have stopped heating or are underperforming.',
    problems: [
      'No hot water, or water that runs cold quickly',
      'Lukewarm water even with the thermostat turned up',
      'Rumbling, popping, or banging from the tank',
      'Water pooling around the base of the heater',
      'Discolored or metallic-smelling hot water',
    ],
    description: [
      'A water heater that stops producing hot water or starts making noise often points to a specific failing part — a heating element, a thermostat, a relief valve, or sediment buildup in the tank. Repair can restore the unit without the cost of replacement when the rest of the heater is in serviceable condition.',
      'Garrison Plumbing can talk through the symptoms, the age of the unit, and whether a repair or a new installation makes more sense for your home or business. Call to describe what the heater is doing.',
    ],
    faqs: [
      {
        q: 'Should I repair or replace my water heater?',
        a: 'It depends on the age of the unit and what has failed. A simple part on a newer heater is usually worth repairing; repeated failures on an older tank usually point toward replacement. We can help you weigh both when you call.',
      },
      {
        q: 'Do you repair tankless water heaters as well as tanks?',
        a: 'Yes. Describe your unit and what it is doing when you call and we can confirm coverage.',
      },
      {
        q: 'What does rumbling from my water heater mean?',
        a: 'It usually points to sediment settling in the bottom of the tank. Flushing can help, but a phone call lets us assess whether more is going on.',
      },
    ],
    related: ['water-heater-installation', 'plumbing-repair', 'leak-detection'],
  },
  {
    slug: 'water-heater-installation',
    name: 'Water Heater Installation',
    shortName: 'Water Heater Installation',
    ctaLabel: 'Call for Water Heater Installation',
    icon: 'Thermometer',
    hero: HEATER_IMG,
    excerpt:
      'Installing new tank and tankless water heaters for homes and businesses, sized correctly for the property.',
    problems: [
      'An aging tank that has corroded through',
      'Switching from a tank to a tankless system',
      'A growing household that needs more hot water capacity',
      'Replacing a unit that can no longer be repaired',
      'Building a new home or adding a fixture',
    ],
    description: [
      'A new water heater is an investment in reliable hot water for years. The right unit depends on the size of the household or business, the fixtures it serves, and whether a tank or tankless setup fits the property best. Proper installation protects that investment and keeps the system working safely.',
      'Garrison Plumbing can help you think through the options and install the unit you choose. Call to discuss the property, your hot water needs, and the type of heater you are considering.',
    ],
    faqs: [
      {
        q: 'How do I choose between tank and tankless?',
        a: 'Tankless heaters deliver hot water on demand without storage and can save space; tanks are simpler and often less expensive up front. The right choice depends on usage, space, and budget. We can walk through it when you call.',
      },
      {
        q: 'How long does a water heater installation take?',
        a: 'A straightforward replacement is usually a same-day job, but new locations or upgrades to a different type of heater can take longer. Describe your situation when you call and we can give a clearer sense.',
      },
      {
        q: 'Do you handle permits for new installations?',
        a: 'Yes, Garrison Plumbing handles permits where required. Call to discuss the installation details.',
      },
    ],
    related: ['water-heater-repair', 'new-construction-plumbing', 'plumbing-repair'],
  },
  {
    slug: 'toilet-repair',
    name: 'Toilet Repair & Installation',
    shortName: 'Toilet Repair & Installation',
    ctaLabel: 'Call for Toilet Repair',
    icon: 'Replace',
    hero: TOILET_IMG,
    excerpt:
      'Fixing running, leaking, or clogged toilets and installing new toilets for residential and commercial properties.',
    problems: [
      'A toilet that runs continuously after flushing',
      'A weak or incomplete flush',
      'Water leaking from the base of the toilet',
      'A cracked tank or bowl',
      'Replacing an outdated or inefficient toilet',
    ],
    description: [
      'Toilets are one of the most-used fixtures in any building, and most toilet problems come down to a few parts — the flapper, the fill valve, the flush handle, or the wax ring at the base. Many of these can be repaired without replacing the whole toilet; other times, a new toilet is the better long-term choice.',
      'Garrison Plumbing can repair the failing parts or install a new toilet that fits the space and the plumbing. Call to describe the symptom — running water, a leak, a weak flush — and whether you are considering a replacement.',
    ],
    faqs: [
      {
        q: 'Why does my toilet keep running after a flush?',
        a: 'It usually points to a worn flapper, an out-of-adjustment fill valve, or an overflow tube set too high. These are common repairs — call to describe what you are hearing.',
      },
      {
        q: 'Is a leaking toilet base an emergency?',
        a: 'Water at the base can damage the floor and subfloor over time, so it is worth addressing promptly. Call to describe what you are seeing.',
      },
      {
        q: 'Can you install a new toilet I have already purchased?',
        a: 'In most cases yes. Describe the toilet and the installation location when you call so we can confirm.',
      },
    ],
    related: ['plumbing-repair', 'drain-cleaning', 'faucet-installation'],
  },
  {
    slug: 'faucet-installation',
    name: 'Faucet & Fixture Installation',
    shortName: 'Faucet & Fixture Installation',
    ctaLabel: 'Call for Faucet Installation',
    icon: 'Droplet',
    hero: FAUCET_IMG,
    excerpt:
      'Installing and replacing faucets, sinks, and plumbing fixtures in kitchens, bathrooms, and laundry areas.',
    problems: [
      'An old faucet that drips and cannot be repaired',
      'Upgrading to a modern faucet or fixture style',
      'A sink that needs replacing along with the faucet',
      'Adding a fixture to a new location',
      'A leaking fixture connection under the sink',
    ],
    description: [
      'Faucets and fixtures combine function with the look of a room. A new faucet can solve persistent drips, modernize a kitchen or bath, and improve water efficiency. The work includes setting the fixture, connecting supply lines, and making sure everything seals correctly so no leaks develop under the counter.',
      'Garrison Plumbing installs kitchen and bathroom faucets, sinks, and related fixtures. Call to describe the fixture and the location, and whether you are replacing an existing one or adding something new.',
    ],
    faqs: [
      {
        q: 'Can you install a faucet I bought myself?',
        a: 'Usually yes. Describe the faucet and the existing setup when you call so we can confirm it will fit the sink and supply lines.',
      },
      {
        q: 'How long does a faucet installation take?',
        a: 'A straightforward replacement is typically a short job. Replacing the sink or moving supply lines adds time. Call to describe the scope.',
      },
      {
        q: 'Should I replace a faucet or just repair it?',
        a: 'If the faucet body is in good shape and only an internal part has failed, a repair is often enough. If it is corroded or you want to upgrade, a new fixture is usually the better choice.',
      },
    ],
    related: ['plumbing-repair', 'toilet-repair', 'water-heater-installation'],
  },
  {
    slug: 'sewer-line-repair',
    name: 'Sewer Line Services',
    shortName: 'Sewer Line Services',
    ctaLabel: 'Call for Sewer Line Service',
    icon: 'Waves',
    hero: MANIFOLD_IMG,
    excerpt:
      'Diagnosing and repairing sewer line issues, from clogs and breaks to sections of line that need replacing.',
    problems: [
      'Multiple drains backing up at the same time',
      'Sewage odors inside or outside the home',
      'Lush, unusually green patches in the yard',
      'Gurgling toilets when other fixtures run',
      'Slow drains throughout the entire building',
    ],
    description: [
      'The sewer line carries waste from your home or building out to the municipal system. Problems in this line — clogs, cracks, root intrusion, or a collapsed section — show up as multiple slow or backing-up drains at once, often with odors or wet spots in the yard.',
      'Garrison Plumbing can help assess the symptoms and recommend a repair or replacement plan. Call to describe what you are seeing across the building and outside.',
    ],
    faqs: [
      {
        q: 'How can I tell if the problem is the sewer line and not a single drain?',
        a: 'When more than one fixture backs up at the same time, or the issue affects the whole building, the sewer line is a likely culprit. Call to describe which fixtures are affected.',
      },
      {
        q: 'Can tree roots really break a sewer line?',
        a: 'Yes. Roots seek moisture and can enter through small joints or cracks, eventually causing a blockage or break. We can discuss this when you call.',
      },
      {
        q: 'Does a sewer line problem mean the whole line needs replacing?',
        a: 'Not always. A single damaged section can often be repaired; widespread failure points to replacement. We can advise based on the symptoms you describe.',
      },
    ],
    related: ['drain-cleaning', 'pipe-repair', 'plumbing-repair'],
  },
  {
    slug: 'new-construction-plumbing',
    name: 'Plumbing for Renovations & New Construction',
    shortName: 'Renovations & New Construction',
    ctaLabel: 'Call for Renovation Plumbing',
    icon: 'Building2',
    hero: RENO_IMG,
    excerpt:
      'Rough-in and finish plumbing for home renovations, additions, and new construction across the Pittsboro area.',
    problems: [
      'Planning plumbing for a new home or commercial build',
      'Adding a bathroom or kitchen in a renovation',
      'Reconfiguring plumbing during a remodel',
      'Replacing outdated rough-in during a gut renovation',
      'Coordinating plumbing with other trades on a build',
    ],
    description: [
      'Renovations and new construction are where the plumbing system is laid out from the start — the rough-in that runs through walls and floors, and the finish work that sets fixtures in place. Getting the layout right at the rough-in stage prevents expensive corrections later.',
      'Garrison Plumbing handles residential and commercial construction plumbing, from additions and renovations to full new builds. Call to describe the project, the stage you are at, and the scope of plumbing involved.',
    ],
    faqs: [
      {
        q: 'When in a build should the plumber be involved?',
        a: 'Ideally before framing is complete, so the rough-in can be planned alongside the layout. If you are already further along, call to describe where the project stands.',
      },
      {
        q: 'Do you work with my general contractor?',
        a: 'Yes. We coordinate with builders and other trades regularly. Call to discuss the project and your timeline.',
      },
      {
        q: 'Can you plumb a full new home or commercial building?',
        a: 'Yes. Garrison Plumbing is a full-service residential and commercial plumbing company. Describe the project when you call.',
      },
    ],
    related: ['water-heater-installation', 'faucet-installation', 'pipe-repair'],
  },
];

export const AREAS: ServiceArea[] = [
  {
    slug: 'pittsboro',
    name: 'Pittsboro',
    state: 'NC',
    zipCode: '27312',
    county: 'Chatham County',
    blurb:
      'Pittsboro, the Chatham County seat, blends a historic downtown with fast-growing residential development, and Garrison Plumbing is based right here.',
    intro: [
      'Pittsboro is home to Garrison Plumbing. As a local business based at 1200 Manco Dairy Road, we serve homeowners, businesses, and builders across Pittsboro and the wider Chatham County area.',
      'From the older homes near the historic courthouse to the new construction spreading across the county, plumbing needs here range from aging pipe repairs to full rough-ins on new builds. Because we are local, a phone call reaches a team that knows the area and the common plumbing situations it produces.',
    ],
    localNeeds: [
      'Older homes near downtown with original or aging supply lines',
      'New construction across Chatham County needing full rough-in and finish plumbing',
      'Rural and well-water properties with their own fixture and pressure considerations',
      'Commercial plumbing for small businesses along the Highway 15-501 corridor',
    ],
    faqs: [
      {
        q: 'Are you actually located in Pittsboro?',
        a: 'Yes. Garrison Plumbing is based at 1200 Manco Dairy Road in Pittsboro, NC 27312. We are a local business, not an out-of-town referral service.',
      },
      {
        q: 'Do you work on the older homes near downtown Pittsboro?',
        a: 'Yes. Older homes often have aging supply lines, original fixtures, and galvanized or aging pipe that benefits from repair or replacement. Call to describe the home and the issue.',
      },
      {
        q: 'Can you handle new construction plumbing in Chatham County?',
        a: 'Yes. We do residential and commercial new construction plumbing, including rough-in and finish work. Call to describe the project.',
      },
    ],
    image: NC_TOWN,
  },
  {
    slug: 'siler-city',
    name: 'Siler City',
    state: 'NC',
    zipCode: '27344',
    county: 'Chatham County',
    blurb:
      'Siler City sits west of Pittsboro in Chatham County, with a mix of established neighborhoods, industrial sites, and rural homes.',
    intro: [
      'Siler City sits about 20 minutes west of Pittsboro in Chatham County. It is a community where residential neighborhoods, small industrial sites, and rural homes all meet, and each comes with its own plumbing considerations.',
      'Garrison Plumbing serves Siler City from our base in Pittsboro. Call to describe the property and the plumbing issue, and we can confirm service availability for your part of town.',
    ],
    localNeeds: [
      'Established residential neighborhoods with aging fixtures and supply lines',
      'Rural properties with well water and pressure considerations',
      'Small commercial and industrial plumbing needs',
      'Renovation plumbing for older homes',
    ],
    faqs: [
      {
        q: 'Do you travel to Siler City?',
        a: 'Yes. Siler City is one of our confirmed service areas. Call to describe the work and confirm availability.',
      },
      {
        q: 'Can you work on rural properties with well water systems?',
        a: 'Many of the homes we serve are on well water. Call to describe the system and the issue.',
      },
      {
        q: 'Do you handle commercial plumbing in Siler City?',
        a: 'Yes, Garrison Plumbing is a full-service residential and commercial plumbing company. Describe the business and the work when you call.',
      },
    ],
    image: MAIN_STREET,
  },
  {
    slug: 'apex',
    name: 'Apex',
    state: 'NC',
    zipCode: '27502',
    county: 'Wake County',
    blurb:
      'Apex is a fast-growing Wake County town just east of Pittsboro, with a mix of new construction and established neighborhoods.',
    intro: [
      'Apex is one of the fastest-growing towns in the region, with new residential communities, established neighborhoods, and a busy commercial stretch. That growth means a wide range of plumbing needs — from new construction rough-ins to repairs in homes that are now a few decades old.',
      'Garrison Plumbing serves Apex from our base in Pittsboro. Call to describe the property, the plumbing issue, and whether it is repair or new work.',
    ],
    localNeeds: [
      'New construction neighborhoods requiring full rough-in and finish plumbing',
      'Established homes with aging water heaters and fixtures',
      'Bathroom and kitchen renovations in older Apex homes',
      'Commercial plumbing along the Highway 55 corridor',
    ],
    faqs: [
      {
        q: 'Is Apex within your service area?',
        a: 'Yes. Apex is one of our confirmed service areas. Call to describe the work and confirm availability.',
      },
      {
        q: 'Do you install water heaters in Apex homes?',
        a: 'Yes. We install and repair tank and tankless water heaters. Describe your unit and needs when you call.',
      },
      {
        q: 'Can you handle plumbing for Apex renovations?',
        a: 'Yes. Renovation plumbing — including reconfigured kitchens and baths — is a normal part of our work. Describe the project when you call.',
      },
    ],
    image: NC_TOWN,
  },
  {
    slug: 'cary',
    name: 'Cary',
    state: 'NC',
    zipCode: '27513',
    county: 'Wake County',
    blurb:
      'Cary is a large, established Wake County town with mature neighborhoods, higher-end homes, and steady renovation activity.',
    intro: [
      'Cary is one of the larger towns in our service area, with mature neighborhoods, established commercial areas, and a steady stream of renovations and upgrades. Plumbing needs here often center on updating aging fixtures, replacing older water heaters, and reconfiguring plumbing during remodels.',
      'Garrison Plumbing serves Cary from our base in Pittsboro. Call to describe the home, the project, and whether it is a repair, an installation, or a renovation.',
    ],
    localNeeds: [
      'Established neighborhoods with aging supply lines and fixtures',
      'Kitchen and bath renovations that reconfigure plumbing',
      'Water heater replacement in older homes',
      'Commercial plumbing for established Cary businesses',
    ],
    faqs: [
      {
        q: 'Is Cary within your service area?',
        a: 'Yes. Cary is one of our confirmed service areas. Call to describe the work and confirm availability.',
      },
      {
        q: 'Do you handle larger renovation plumbing projects in Cary?',
        a: 'Yes. We work on full bathroom and kitchen renovations, including reconfigured plumbing. Describe the scope when you call.',
      },
      {
        q: 'Can you replace an older water heater in a Cary home?',
        a: 'Yes. We repair and install both tank and tankless water heaters. Describe your unit when you call.',
      },
    ],
    image: MAIN_STREET,
  },
  {
    slug: 'raleigh',
    name: 'Raleigh',
    state: 'NC',
    zipCode: '27601',
    county: 'Wake County',
    blurb:
      'Raleigh, the state capital, is the largest market in our confirmed service area, with a wide mix of homes, businesses, and construction.',
    intro: [
      'Raleigh is the largest city in our confirmed service area, with a mix of historic homes, established suburbs, and constant new construction. The range of buildings here means an equally wide range of plumbing work — from repairs in older homes to rough-ins on new builds.',
      'Garrison Plumbing serves Raleigh from our base in Pittsboro. Call to describe the property, the plumbing issue, and the part of town you are in.',
    ],
    localNeeds: [
      'Repairs in older Raleigh homes with original plumbing',
      'New construction plumbing across the growing metro area',
      'Commercial plumbing for Raleigh businesses',
      'Renovation plumbing for kitchens and bathrooms',
    ],
    faqs: [
      {
        q: 'Do you serve all of Raleigh?',
        a: 'Raleigh is a large city, so call to describe your location and the work. We can confirm availability based on the part of town.',
      },
      {
        q: 'Can you handle commercial plumbing in Raleigh?',
        a: 'Yes. Garrison Plumbing is a full-service residential and commercial plumbing company. Describe the business and the work when you call.',
      },
      {
        q: 'Do you work on older homes in established Raleigh neighborhoods?',
        a: 'Yes. Repairs on aging plumbing are a normal part of our work. Describe the home and the issue when you call.',
      },
    ],
    image: NC_TOWN,
  },
  {
    slug: 'chapel-hill',
    name: 'Chapel Hill',
    state: 'NC',
    zipCode: '27514',
    county: 'Orange County',
    blurb:
      'Chapel Hill, home to UNC, mixes longtime residential neighborhoods, student housing, and commercial corridors near the university.',
    intro: [
      'Chapel Hill is a unique market in our service area, with a mix of established residential neighborhoods, higher-density housing, and commercial properties near the university. Plumbing needs here run from repairs in older homes to fixture and water heater replacement and renovation work.',
      'Garrison Plumbing serves Chapel Hill from our base in Pittsboro. Call to describe the property and the plumbing issue.',
    ],
    localNeeds: [
      'Established neighborhoods with aging fixtures and water heaters',
      'Renovation plumbing in older Chapel Hill homes',
      'Fixture replacement and upgrades',
      'Commercial plumbing near the university corridor',
    ],
    faqs: [
      {
        q: 'Is Chapel Hill within your service area?',
        a: 'Yes. Chapel Hill is one of our confirmed service areas. Call to describe the work and confirm availability.',
      },
      {
        q: 'Do you work on homes near UNC?',
        a: 'Yes. We work on residential plumbing throughout Chapel Hill. Describe the home and the issue when you call.',
      },
      {
        q: 'Can you handle commercial plumbing near the university?',
        a: 'Yes. We are a full-service residential and commercial plumbing company. Describe the property and the work when you call.',
      },
    ],
    image: MAIN_STREET,
  },
];

export const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'Plumbing Services', path: '/services' },
  { label: 'Service Areas', path: '/service-areas' },
  { label: 'About', path: '/about' },
  { label: 'Reviews', path: '/reviews' },
  { label: 'Contact', path: '/contact' },
];

export function servicePath(slug: ServiceSlug, area: AreaSlug | 'main' = 'main'): string {
  if (area === 'main') return `/${slug}-pittsboro-nc`;
  return `/${slug}-${area}-nc`;
}

export function areaPath(slug: AreaSlug): string {
  if (slug === 'pittsboro') return '/service-areas/pittsboro-nc';
  return `/service-areas/${slug}-nc`;
}

export function serviceByName(slug: ServiceSlug): Service {
  return SERVICES.find((s) => s.slug === slug)!;
}

export function areaByName(slug: AreaSlug): ServiceArea {
  return AREAS.find((a) => a.slug === slug)!;
}
