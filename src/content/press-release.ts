/**
 * The launch press release, as approved (MAIN.FINAL.09092026).
 * Rendered at /news/[slug]. Keep paragraphs in order.
 */

export type ReleaseBlock =
  | { type: "p"; text: string }
  | { type: "quote"; text: string; name: string; title: string }
  | { type: "h2"; text: string };

export const pressRelease = {
  slug: "nemc-scmc-unite-to-form-main-hub",
  label: "For immediate release",
  dateline: "INDIANAPOLIS, Ind.",
  title: "Silicon Crossroads and Northeast Microelectronics Coalition Unite to Form The MAIN Hub",
  subtitle:
    "National hub connects more than 600 organizations to accelerate domestic microelectronics innovation and strengthen national security",
  summary:
    "The Northeast Microelectronics Coalition (NEMC) Hub and Silicon Crossroads Microelectronics Commons (SCMC) Hub announced their consolidation into the Microelectronics for American Innovation and National Security (MAIN) Hub.",
  blocks: [
    {
      type: "p",
      text: "The Northeast Microelectronics Coalition (NEMC) Hub and Silicon Crossroads Microelectronics Commons (SCMC) Hub today announced their consolidation into the Microelectronics for American Innovation and National Security (MAIN) Hub. The combined national ecosystem brings together more than 600 organizations, including startups and emerging technology companies, defense and commercial industry partners, government laboratories, federally funded research and development centers, and leading academic institutions.",
    },
    {
      type: "p",
      text: "By uniting these networks through a single national hub, MAIN provides a broader, more coordinated pathway for advancing emerging U.S. microelectronics technologies from research and development through prototyping, manufacturing, and deployment. The Hub connects innovators with the expertise, infrastructure, industry relationships, and mission partners needed to address critical national security challenges and move technologies toward real-world adoption.",
    },
    {
      type: "p",
      text: "The MAIN Hub's core strength is connecting technology with mission and market impact – aligning technical performance, affordability, manufacturability, and development milestones with the unique requirements of the warfighter and the realities of the microelectronics supply chain. The Hub focuses on technologies where conventional approaches may not meet emerging mission demands, including applications requiring exceptional performance, reliability, security, power handling, or operation in extreme environments.",
    },
    {
      type: "p",
      text: "MAIN also brings a practical understanding of the industrial base and economics required to move technologies beyond the laboratory. This includes helping innovators navigate cost, scale, manufacturing readiness, supply-chain considerations, and pathways to adoption. By bringing technical innovation, mission requirements, and industrial realities together, MAIN helps identify promising technologies, accelerate their development, and create viable pathways to deliver new capabilities to the warfighter and strengthen national security.",
    },
    {
      type: "quote",
      text: "SCMC and NEMC bring complementary strengths that, together, create a more powerful national platform for microelectronics innovation. By combining SCMC's defense-transition expertise with NEMC's broad coalition, MAIN can help more promising technologies move from innovation to meaningful national security impact. Our goal is to ensure that more of the innovation emerging from this ecosystem reaches the warfighter and delivers meaningful national security impact.",
      name: "Ben Griffin",
      title: "Executive Director of the Silicon Crossroads Microelectronics Commons Hub (SCMC) and Senior Vice President of Research Partnerships at the Applied Research Institute",
    },
    {
      type: "quote",
      text: "Bringing together the NEMC and SCMC hubs creates a uniquely powerful national asset for strengthening America's microelectronics ecosystem. By combining the Northeast's extraordinary concentration of semiconductor development and innovation with SCMC's expertise in defense sector system integration, we can create a more connected pathway from breakthrough research to prototyping, manufacturing, and deployment.",
      name: "Mark Halfman",
      title: "Director of the Northeast Microelectronics Coalition (NEMC) Hub at the Massachusetts Technology Collaborative",
    },
    {
      type: "p",
      text: "At the center of the MAIN Hub is a broad community of startups, emerging companies, and other non-traditional innovators connected to defense and commercial industry, government laboratories, FFRDCs, and academic institutions. By combining the networks and capabilities of two established Microelectronics Commons Hubs, MAIN creates a national platform that connects organizations to the expertise, facilities, equipment, capital, manufacturing capabilities, and transition partners they need to advance technologies beyond the laboratory – engaging the right capabilities and partners based on where they exist, rather than being constrained by geography. This broader aperture enables MAIN to identify promising technologies and accelerate their path to impact at the right stage of development.",
    },
    {
      type: "quote",
      text: "America's microelectronics advantage depends not only on breakthrough research, but on our ability to turn that research into technologies that can be manufactured, scaled, and deployed. MAIN brings mission needs, technical expertise, industrial capabilities, and transition partners into one coordinated ecosystem. Together, we can reduce barriers for innovators and move critical technologies toward the warfighter with greater speed and purpose.",
      name: "Andrew Kossack",
      title: "President & CEO, Applied Research Institute",
    },
    {
      type: "p",
      text: "The MAIN Hub builds on successful workforce and talent development programs established by NEMC and SCMC, and will expand access to hands-on education, training, and career pathways that prepare the next generation of the microelectronics workforce.",
    },
    {
      type: "p",
      text: "Applied Research Institute (ARI) operates the SCMC Hub, while the Massachusetts Technology Collaborative (MassTech) operates the NEMC Hub. Through the consolidation, ARI and MassTech are bringing together their respective networks, capabilities, and partnerships to support the continued growth and operation of the MAIN Hub as a single, nationally focused ecosystem.",
    },
    {
      type: "quote",
      text: "The strength of MAIN is its national reach. Innovators should not have to be in a particular place to access the expertise, infrastructure, and partners needed to advance a technology. By combining NEMC and SCMC, MAIN can broaden that access and help promising technologies find the right path to impact, wherever they emerge.",
      name: "Andrew Kossack",
      title: "President & CEO, Applied Research Institute",
    },
    { type: "h2", text: "About the MAIN Hub" },
    {
      type: "p",
      text: "The Microelectronics for American Innovation and National Security (MAIN) Hub is a national coalition established under the Microelectronics Commons program dedicated to accelerating the development, prototyping, manufacturing and deployment of advanced microelectronics. Formed through the consolidation of the NEMC and SCMC hubs, it connects more than 600 organizations across academia, industry, government, FFRDCs, startups and emerging technology companies. The MAIN Hub is funded through Microelectronics Commons, established through the Strategic & Spectrum Missions Advanced Resilient Trusted Systems (S²MARTS) Other Transaction Agreement (OTA) established by the Naval Surface Warfare Center (NSWC), Crane Division and is managed by the National Security Technology Accelerator (NSTXL).",
    },
    { type: "h2", text: "About the Applied Research Institute (ARI)" },
    {
      type: "p",
      text: "The Applied Research Institute is a 501(c)(3) nonprofit organization that accelerates the transition of breakthrough science and technology into mission-ready impact. ARI works across government, industry, academia, and communities to build partnerships, manage complex initiatives, and create pathways that move innovation from discovery through validation, transition, and scale. Its work spans national security, advanced technology, economic development, workforce, and emerging technology ecosystems, including microelectronics, biomanufacturing, artificial intelligence, advanced manufacturing, and autonomous systems. Through initiatives such as Silicon Crossroads, Heartland BioWorks, DARPAConnect, and other mission-driven programs, ARI serves as an operational partner connecting innovators and institutions with the resources, expertise, and pathways needed to turn ideas into real-world capabilities.",
    },
    { type: "h2", text: "About the Massachusetts Technology Collaborative" },
    {
      type: "p",
      text: "The Massachusetts Technology Collaborative (MassTech) is a statewide public agency focused on advancing technology. The organization strengthens the competitiveness of the tech and innovation economy by driving strategic investments, partnerships and insights that harness the talent of Massachusetts. MassTech supports the Bay State's tech sector with a strategic focus on talent, ecosystems and innovation infrastructure across its diverse divisions and programs. MassTech is working to create and grow economic opportunity in the following areas: artificial intelligence, advanced manufacturing, broadband, cybersecurity, digital health, innovation and microelectronics.",
    },
  ] satisfies ReleaseBlock[],
};
