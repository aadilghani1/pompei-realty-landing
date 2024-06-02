import Image from "next/image";
import CTAwithImage from "@/components/CTAwithImage";
import Container from "@/components/Container";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Areas from "@/components/Areas";
import LinksToOtherSites from "@/components/LinksToOtherSites";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <Hero />
        <LinksToOtherSites />
        <Areas />
        <Features />
        <Testimonials />
      </main>
    </>
  );
}
