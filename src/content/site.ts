/**
 * Single source of truth for MAIN Hub site copy.
 * Sourced from the approved press release (MAIN.FINAL.09092026), the ARI
 * communications plan, and the SCMC brand guidelines (updated 2026).
 * Edit copy here; components render whatever is defined below.
 */

export const siteConfig = {
  name: "MAIN Hub",
  shortName: "MAIN",
  fullName: "Microelectronics for American Innovation and National Security Hub",
  tagline: [
    { text: "One ", strong: "national", after: " ecosystem." },
    { text: "", strong: "Six critical technology", after: " areas." },
    { text: "A stronger pathway from ", strong: "innovation to deployment", after: "." },
  ],
  campaignLine: "One national pathway from research to deployment.",
  description:
    "The Microelectronics for American Innovation and National Security Hub connects more than 600 organizations across academia, industry, government, FFRDCs, and the startup community. By combining complementary strengths across the Northeast and Midwest, MAIN helps move emerging microelectronics technologies from research to domestic prototyping, manufacturing, and operational use.",
  mission:
    "By uniting more than 600 partners, the MAIN Hub harnesses the combined strengths of the Midwest and Northeast to accelerate domestic microelectronics from lab discovery to field-ready defense manufacturing.",
  /** Public launch date assumed by the communications plan. Update if the announcement moves. */
  announcementDate: "2026-10-01",
  contact: {
    mediaName: "Thomas McAninch",
    mediaTitle: "Director of Communications, Applied Research Institute",
    mediaEmail: "thomas.mcaninch@theari.us",
  },
  social: {
    linkedin: "", // Add the MAIN Hub LinkedIn page URL once it exists.
  },
  hashtags: ["#MAINHub", "#Microelectronics", "#NationalSecurity", "#AdvancedManufacturing"],
} as const;

export const navLinks = [
  { label: "About", section: "about" },
  { label: "Capabilities", section: "pathway" },
  { label: "Technology Areas", section: "technology" },
  { label: "Leadership", section: "leadership" },
  { label: "News", section: "news" },
  { label: "FAQ", section: "faq" },
] as const;

export const externalLinks = {
  nemc: "https://nemicroelectronics.org/",
  scmc: "https://pathfinder.theari.us/siliconcrossroads/home",
  ari: "https://www.theari.us/",
  masstech: "https://masstech.org/",
} as const;

export type LegacyHub = {
  id: "nemc" | "scmc";
  acronym: string;
  name: string;
  region: string;
  state: string;
  operator: string;
  operatorShort: string;
  operatorUrl: string;
  url: string;
  strengths: string[];
  accent: "sky" | "green";
};

export const legacyHubs: LegacyHub[] = [
  {
    id: "nemc",
    acronym: "NEMC",
    name: "Northeast Microelectronics Coalition Hub",
    region: "Northeast",
    state: "Massachusetts",
    operator: "Massachusetts Technology Collaborative",
    operatorShort: "MassTech",
    operatorUrl: externalLinks.masstech,
    url: externalLinks.nemc,
    strengths: [
      "Extraordinary concentration of semiconductor development and innovation",
      "Broad coalition spanning academia, industry, and government",
      "Established workforce and talent development programs",
    ],
    accent: "sky",
  },
  {
    id: "scmc",
    acronym: "SCMC",
    name: "Silicon Crossroads Microelectronics Commons Hub",
    region: "Midwest",
    state: "Indiana",
    operator: "Applied Research Institute",
    operatorShort: "ARI",
    operatorUrl: externalLinks.ari,
    url: externalLinks.scmc,
    strengths: [
      "Defense-transition expertise and system integration",
      "Industrial prototyping, testing, and manufacturing capacity",
      "Deep relationships with mission and transition partners",
    ],
    accent: "green",
  },
];

export const stats = [
  { value: 600, suffix: "+", label: "Organizations connected", detail: "Across academia, industry, government, FFRDCs, and startups" },
  { value: 6, suffix: "", label: "Critical technology areas", detail: "All six Microelectronics Commons technical areas" },
  { value: 2, suffix: "→1", label: "Regional hubs, one national ecosystem", detail: "NEMC and SCMC, now the MAIN Hub" },
  { value: 5, suffix: "", label: "Sectors in the ecosystem", detail: "Startups, industry, government labs, FFRDCs, academia" },
] as const;

export const pillars = [
  {
    title: "Accelerated Lab-to-Fab Transition",
    body: "Rapidly commercialize R&D into prototypes and production by connecting innovators with the facilities, equipment, and expertise they need.",
  },
  {
    title: "Unified Cross-Regional Power",
    body: "Combine Northeast research and development with Midwest manufacturing and testing, engaging the right capabilities wherever they exist.",
  },
  {
    title: "Workforce & Supply Chain Security",
    body: "Build domestic talent and onshore supply chains for critical hardware through hands-on education, training, and career pathways.",
  },
] as const;

export const pathway = [
  {
    step: "01",
    title: "Research",
    body: "Breakthrough science from universities, FFRDCs, government laboratories, and startups across the national ecosystem.",
  },
  {
    step: "02",
    title: "Prototyping",
    body: "Access to the facilities, equipment, and expertise needed to build, test, and validate prototypes beyond the laboratory.",
  },
  {
    step: "03",
    title: "Manufacturing",
    body: "Practical guidance on cost, scale, manufacturing readiness, and supply-chain considerations for domestic production.",
  },
  {
    step: "04",
    title: "Deployment",
    body: "Alignment with mission requirements and transition partners to deliver new capabilities to the warfighter and the market.",
  },
] as const;


export type TechArea = {
  id: string;
  title: string;
  short: string;
  body: string;
  icon: "radio" | "cpu" | "rocket" | "radar" | "shield" | "atom";
};

export const technologyAreas: TechArea[] = [
  {
    id: "5g-6g",
    title: "5G / 6G",
    short: "Next-generation wireless",
    body: "Secure, resilient wireless technologies that keep communications connected in contested and congested environments.",
    icon: "radio",
  },
  {
    id: "ai-hardware",
    title: "AI Hardware",
    short: "Compute for intelligent systems",
    body: "Microelectronics purpose-built for artificial intelligence workloads at the edge and at scale.",
    icon: "cpu",
  },
  {
    id: "leap-ahead",
    title: "Commercial Leap-Ahead Technologies",
    short: "Disruptive commercial advances",
    body: "Emerging commercial technologies with the potential to deliver step-change capability for national security missions.",
    icon: "rocket",
  },
  {
    id: "electromagnetic-warfare",
    title: "Electromagnetic Warfare",
    short: "Spectrum dominance",
    body: "Devices and systems that sense, protect, and operate across the electromagnetic spectrum.",
    icon: "radar",
  },
  {
    id: "secure-edge",
    title: "Secure Edge / IoT",
    short: "Trusted devices everywhere",
    body: "Trusted, low-power microelectronics for connected sensors and systems operating at the tactical edge.",
    icon: "shield",
  },
  {
    id: "quantum",
    title: "Quantum Technology",
    short: "The next computing frontier",
    body: "Quantum sensing, communication, and computing hardware with exceptional performance and reliability demands.",
    icon: "atom",
  },
];

export const ecosystem = [
  { title: "Startups & emerging companies", body: "Non-traditional innovators bringing new ideas to national security missions." },
  { title: "Defense & commercial industry", body: "Primes, suppliers, and manufacturers with the capacity to scale." },
  { title: "Government laboratories", body: "Mission owners and labs that define requirements and validate results." },
  { title: "FFRDCs", body: "Federally funded research and development centers advancing critical science." },
  { title: "Academic institutions", body: "Universities driving discovery and preparing the next generation of talent." },
] as const;

export type Quote = {
  quote: string;
  name: string;
  title: string;
  org: string;
};

export const leadership: Quote[] = [
  {
    quote:
      "SCMC and NEMC bring complementary strengths that, together, create a more powerful national platform for microelectronics innovation. By combining SCMC's defense-transition expertise with NEMC's broad coalition, MAIN can help more promising technologies move from innovation to meaningful national security impact.",
    name: "Ben Griffin",
    title: "Executive Director, Silicon Crossroads Microelectronics Commons Hub; Senior Vice President of Research Partnerships",
    org: "Applied Research Institute",
  },
  {
    quote:
      "Bringing together the NEMC and SCMC hubs creates a uniquely powerful national asset for strengthening America's microelectronics ecosystem. By combining the Northeast's extraordinary concentration of semiconductor development and innovation with SCMC's expertise in defense sector system integration, we can create a more connected pathway from breakthrough research to prototyping, manufacturing, and deployment.",
    name: "Mark Halfman",
    title: "Director, Northeast Microelectronics Coalition Hub",
    org: "Massachusetts Technology Collaborative",
  },
  {
    quote:
      "America's microelectronics advantage depends not only on breakthrough research, but on our ability to turn that research into technologies that can be manufactured, scaled, and deployed. MAIN brings mission needs, technical expertise, industrial capabilities, and transition partners into one coordinated ecosystem.",
    name: "Andrew Kossack",
    title: "President & CEO",
    org: "Applied Research Institute",
  },
];

export const workforce = {
  heading: "Infrastructure matters. So do people",
  body:
    "The MAIN Hub builds on successful workforce and talent development programs established by NEMC and SCMC, and will expand access to hands-on education, training, and career pathways that prepare the next generation of the microelectronics workforce.",
  points: [
    "University networks across Massachusetts, Indiana, and beyond",
    "Hands-on education and training programs",
    "Career pathways into the domestic microelectronics industry",
  ],
} as const;

export const operators = [
  {
    name: "Applied Research Institute",
    short: "ARI",
    role: "Operates the SCMC Hub",
    url: externalLinks.ari,
    body:
      "A 501(c)(3) nonprofit that accelerates the transition of breakthrough science and technology into mission-ready impact. ARI works across government, industry, academia, and communities to build partnerships, manage complex initiatives, and create pathways that move innovation from discovery through validation, transition, and scale.",
  },
  {
    name: "Massachusetts Technology Collaborative",
    short: "MassTech",
    role: "Operates the NEMC Hub",
    url: externalLinks.masstech,
    body:
      "A statewide public agency focused on advancing technology. MassTech strengthens the competitiveness of the tech and innovation economy by driving strategic investments, partnerships, and insights that harness the talent of Massachusetts, with a strategic focus on talent, ecosystems, and innovation infrastructure.",
  },
] as const;

export const faqs = [
  {
    q: "Why are NEMC and SCMC consolidating?",
    a: "Uniting the two Microelectronics Commons hubs creates a single national ecosystem with a broader, more coordinated pathway for advancing U.S. microelectronics from research through prototyping, manufacturing, and deployment. Innovators no longer need to be in a particular place to reach the expertise, infrastructure, and partners required to advance a technology.",
  },
  {
    q: "What is the MAIN Hub?",
    a: "The Microelectronics for American Innovation and National Security (MAIN) Hub is a national coalition established under the Microelectronics Commons program and dedicated to accelerating the development, prototyping, manufacturing, and deployment of advanced microelectronics. It connects more than 600 organizations across academia, industry, government, FFRDCs, startups, and emerging technology companies.",
  },
  {
    q: "What does this mean for organizations in the NEMC and SCMC networks?",
    a: "Organizations from both hubs are now part of one national platform. MAIN engages the right capabilities and partners based on where they exist rather than geography, expanding access to expertise, facilities, equipment, capital, manufacturing capabilities, and transition partners.",
  },
  {
    q: "Who operates the MAIN Hub?",
    a: "The Applied Research Institute (ARI) operates the SCMC Hub and the Massachusetts Technology Collaborative (MassTech) operates the NEMC Hub. Through the consolidation, ARI and MassTech are bringing together their networks, capabilities, and partnerships to support the MAIN Hub as a single, nationally focused ecosystem.",
  },
  {
    q: "How is the MAIN Hub funded?",
    a: "The MAIN Hub is funded through Microelectronics Commons, established through the Strategic & Spectrum Missions Advanced Resilient Trusted Systems (S²MARTS) Other Transaction Agreement established by the Naval Surface Warfare Center (NSWC), Crane Division, and managed by the National Security Technology Accelerator (NSTXL).",
  },
  {
    q: "Which technology areas does the hub support?",
    a: "MAIN's capabilities span all six Microelectronics Commons technology areas: 5G/6G, AI hardware, commercial leap-ahead technologies, electromagnetic warfare, secure edge and IoT, and quantum technology.",
  },
  {
    q: "Where can I find the original NEMC and SCMC websites?",
    a: "Both legacy sites remain available and are linked throughout this page. Visit the Northeast Microelectronics Coalition Hub at nemicroelectronics.org and the Silicon Crossroads Microelectronics Commons Hub at pathfinder.theari.us/siliconcrossroads.",
  },
  {
    q: "How do I connect with the MAIN Hub?",
    a: "Use the form at the bottom of this page to share your organization and interests. Media inquiries can be directed to the communications contact listed in the footer.",
  },
] as const;

export const organizationTypes = [
  "Startup or emerging technology company",
  "Defense or commercial industry",
  "Government laboratory",
  "FFRDC",
  "Academic institution",
  "Investor",
  "Media",
  "Other",
] as const;

export const interestAreas = [
  "Joining the ecosystem",
  "Prototyping or manufacturing capabilities",
  "Research collaboration",
  "Workforce and talent programs",
  "Partnership or sponsorship",
  "Media or speaking request",
  "General inquiry",
] as const;

export const aboutMainHub =
  "The Microelectronics for American Innovation and National Security (MAIN) Hub is a national coalition established under the Microelectronics Commons program dedicated to accelerating the development, prototyping, manufacturing and deployment of advanced microelectronics. Formed through the consolidation of the NEMC and SCMC hubs, it connects more than 600 organizations across academia, industry, government, FFRDCs, startups and emerging technology companies. The MAIN Hub is funded through Microelectronics Commons, established through the Strategic & Spectrum Missions Advanced Resilient Trusted Systems (S²MARTS) Other Transaction Agreement (OTA) established by the Naval Surface Warfare Center (NSWC), Crane Division and is managed by the National Security Technology Accelerator (NSTXL).";
