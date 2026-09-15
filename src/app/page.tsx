import { Contact } from "@/components/sections/Contact";
import { Corridor } from "@/components/sections/Corridor";
import { Ecosystem } from "@/components/sections/Ecosystem";
import { Faq } from "@/components/sections/Faq";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { Leadership } from "@/components/sections/Leadership";
import { LegacyHubs } from "@/components/sections/LegacyHubs";
import { Mission } from "@/components/sections/Mission";
import { Navbar } from "@/components/sections/Navbar";
import { News } from "@/components/sections/News";
import { Pathway } from "@/components/sections/Pathway";
import { Stats } from "@/components/sections/Stats";
import { Technology } from "@/components/sections/Technology";
import { Workforce } from "@/components/sections/Workforce";

export default function HomePage() {
  return (
    <>
      <a
        href="#hubs"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-brand-navy"
      >
        Skip to content
      </a>
      <Navbar initialTone="light" />
      <main>
        <Hero />
        <LegacyHubs />
        <Stats />
        <Mission />
        <Pathway />
        <Corridor />
        <Technology />
        <Ecosystem />
        <Leadership />
        <Workforce />
        <News />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
