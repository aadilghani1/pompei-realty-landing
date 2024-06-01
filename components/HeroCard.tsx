import React from "react";

type HeroCardProps = {
  title: string;
  description: string;
};

const HeroCard = ({ title, description }: HeroCardProps) => {
  return (
    <div className="flex flex-col gap-3 relative rounded-3xl px-8 py-6 bg-white/85 backdrop-blur-sm border border-primary-faint/12 w-[25%]">
      <div className="h-10 w-1 bg-gold absolute top-[14%] left-0 rounded-r-full" />
      <p className="text-4xl uppercase">{title}</p>
      <p className="text-xl uppercase tracking-wider text-gold max-w-[100px]">
        {description}
      </p>
    </div>
  );
};

export default HeroCard;
