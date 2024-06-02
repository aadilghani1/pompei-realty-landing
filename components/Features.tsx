import { BiBed } from "react-icons/bi";
import Container from "./Container";
import FeatureCard from "./FeatureCard";
import TitleWithLabel from "./TitleWithLabel";
import { TbHours24, TbBed, TbTool } from "react-icons/tb";
import Image from "next/image";

const Features = () => {
  return (
    <Container className="mb-24 grid gap-6 grid-cols-2">
      <div>
        <TitleWithLabel
          title="Assisting individuals in locating the appropriate real estate."
          label="Who we are"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
          quidem amet, possimus consequatur quisquam rerum unde earum sequi
          ratione nisi!"
          attachGradientTo="title"
          className="max-w-lg"
        />

        <div className="flex flex-col gap-2 mt-8">
          <FeatureCard
            Icon={TbHours24}
            title="Check in within days"
            description="Save time and effort by choosing from a wide range of apartments."
            index={0}
          />
          <FeatureCard
            Icon={BiBed}
            iconSize={40}
            title="Fully furnished apartments"
            description="All of our apartments come fully furnished with quality bedding, towels, and linens."
            index={1}
          />
          <FeatureCard
            Icon={TbTool}
            title="Handyman service"
            description="We offer a handyman service for any repairs or maintenance needed."
            index={2}
          />
        </div>
      </div>
      <div className="relative grid grid-cols-2 gap-6">
        <svg
          className="absolute w-64 z-10 -top-20 left-1/2 -translate-x-1/2 text-gold stamp-spin"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 500 500"
        >
          <defs>
            <path
              d="M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250"
              id="textcircle"
            >
              <animateTransform
                attributeName="transform"
                begin="0s"
                dur="30s"
                type="rotate"
                from="0 250 250"
                to="360 250 250"
                repeatCount="indefinite"
              />
            </path>
          </defs>
          <text
            className="text-4xl text-gold font-bold"
            fill="currentColor"
            dy="70"
            textLength="1220"
          >
            <textPath xlinkHref="#textcircle">
              REAL ESTATE SINCE 1996 - POMPEI REALTY -
            </textPath>
          </text>
        </svg>
        <div className="mt-[4.25rem] relative">
          <Image
            src="/areas/area1.png"
            width={256}
            height={512}
            alt=""
            className="aspect-[0.5] object-cover w-full rounded-3xl shadow-2xl shadow-yellow-950/30 border border-yellow-950/10"
          />
          <span className="absolute w-24 h-24 bg-gradient-to-b from-primary-faint/70 rotate-[135deg] to-transparent rounded-full -right-12 -bottom-12" />
        </div>
        <div className="flex flex-col gap-6">
          <Image
            src="/areas/area2.png"
            width={256}
            height={512}
            alt=""
            className="aspect-square object-cover w-full rounded-3xl shadow-2xl shadow-yellow-950/30 border border-yellow-950/10"
          />
          <Image
            src="/areas/area3.png"
            width={256}
            height={512}
            alt=""
            className="aspect-[1.5] w-full object-cover rounded-3xl shadow-2xl shadow-yellow-950/30 border border-yellow-950/10"
          />
        </div>
      </div>
    </Container>
  );
};

export default Features;
