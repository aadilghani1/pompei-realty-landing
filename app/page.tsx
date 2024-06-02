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
        <div className="flex gap-10">
          <CTAwithImage
            title="Vacation in Rome"
            url="/"
            image="/cta/vacation.png"
          />
          <CTAwithImage title="Work in Rome" url="/" image="/cta/work.webp" />
        </div>
        <Areas />
      </Container>
    </main>
  );
}
