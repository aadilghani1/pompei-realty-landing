import Image from "next/image";
import CTAwithImage from "@/components/CTAwithImage";
import Container from "@/components/Container";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Areas from "@/components/Areas";
import LinksToOtherSites from "@/components/LinksToOtherSites";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <LinksToOtherSites />
      <Areas />
    </main>
  );
}
