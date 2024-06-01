import React from "react";

const TitleWithLabel = ({ title, label }: { title: string; label: string }) => {
  return (
    <div>
      <span className="text-gold uppercase tracking-wider block max-w-max relative">
        <span className="absolute w-16 h-16 bg-gradient-to-b from-primary-faint/70 rotate-45 to-transparent rounded-full -right-8 -top-8" />
        {label}
      </span>
      <h2 className=" mt-2 text-secondary text-3xl font-medium max-w-xl">
        {title}
      </h2>
    </div>
  );
};

export default TitleWithLabel;
