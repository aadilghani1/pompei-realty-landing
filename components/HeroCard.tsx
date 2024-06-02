import React from "react";

type HeroCardProps = {
  title: string;
  description: string;
};

const HeroCard = ({ title, description }: HeroCardProps) => {
  return (
    <div className="flex flex-col shadow-2xl shadow-yellow-950/5 gap-3 relative rounded-3xl px-8 py-6 bg-white/75 backdrop-blur border border-yellow-950/10 w-[25%]">
      <div className="h-10 w-1 bg-gold absolute top-[14%] left-0 rounded-r-full" />
      <p className="text-3xl uppercase">{title}</p>
      <p className="text-lg uppercase tracking-wider text-gold max-w-[100px]">
        {description}
      </p>
    </div>
  );
};

export default HeroCard;
