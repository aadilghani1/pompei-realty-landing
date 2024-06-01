import Image from "next/image";
import React from "react";
import CTAGroup from "./CTAGroup";
import HeroCard from "./HeroCard";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="relative h-[60vh] w-full mb-10 rounded-3xl">
      <Image
        src="/hero/banner.png"
        alt="banner"
        fill
        className="object-cover rounded-3xl border border-[#695A23]/12"
      />
      {/* Inner content */}
      <div className="absolute inset-0 px-12 py-14">
        <div className="flex flex-col gap-4">
          <h2 className="text-5xl w-[40%] leading-[3.5rem] font-bold text-tertiary">
            Easy way to find a perfect{" "}
            <span className="text-secondary">property</span>
          </h2>
          <p className="text-xl text-quaternary w-[40%] font-thin">
            We provide a complete service for the sale, purchase or rental of
            real estate.
          </p>
          <CTAGroup />
        </div>
      </div>
      {/* Card content outside */}
      <div className="absolute -bottom-12 left-12 flex items-center gap-10 w-full">
        <HeroCard title="300+" description="Successful projects" />
        <HeroCard title="20+" description="Satisfied Clients" />
      </div>
    </div>
  );
};

export default Hero;
