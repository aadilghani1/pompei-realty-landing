import Image from "next/image";
import CTAwithImage from "@/components/CTAwithImage";
import Container from "@/components/Container";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Areas from "@/components/Areas";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Container>
        <Hero />
      </Container>
      <Container>
        <div className="flex gap-6">
          <CTAwithImage title="Vacation in Rome" url="/" />
          <CTAwithImage title="Work in Rome" url="/" />
        </div>
        <Areas />
      </Container>
    </main>
  );
}
