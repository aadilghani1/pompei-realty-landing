import Image from "next/image";
import React from "react";
import CTAGroup from "./CTAGroup";
import HeroCard from "./HeroCard";
import Container from "./Container";

type Props = {};

const Hero = (props: Props) => {
  return (
    <Container>
      <div className="relative w-full mb-10 rounded-3xl shadow-2xl shadow-yellow-950/20 border border-yellow-950/10">
        <Image
          src="/hero/banner.jpg"
          alt="banner"
          width={1280}
          height={720}
          className="object-cover rounded-3xl absolute inset-0 w-full h-full"
        />
        {/* Inner content */}
        <div className="px-12 py-14 relative z-10">
          <div className="flex flex-col gap-4">
            <h2 className="text-5xl w-[40%] leading-[3.5rem] font-bold text-secondary">
              Easy way to find a perfect property
            </h2>
            <p className="text-xl text-gold w-[40%] font-thin">
              We provide a complete service for the sale, purchase or rental of
              real estate.
            </p>
            <CTAGroup />
          </div>
          {/* Card content outside */}
          <div className="flex items-center mt-12 -mb-24 gap-10 w-full">
            <HeroCard title="300+" description="Successful projects" />
            <HeroCard title="20+" description="Satisfied Clients" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Hero;
