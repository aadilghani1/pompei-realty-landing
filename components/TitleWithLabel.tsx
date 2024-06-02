import clsx from "clsx";
import React from "react";

const TitleWithLabel = ({
  title,
  label,
  className,
  attachGradientTo = "label",
  description,
}: {
  title: string;
  label: string;
  attachGradientTo?: "label" | "title";
  className?: string;
  description?: string;
}) => {
  return (
    <div className={className}>
      <span className="text-gold uppercase tracking-widest block max-w-max relative">
        {attachGradientTo === "label" && (
          <span className="absolute w-16 h-16 bg-gradient-to-b from-primary-faint/70 rotate-45 to-transparent rounded-full -right-8 -top-8" />
        )}
        {label}
      </span>
      <h2
        className={clsx(
          "relative mt-2 text-secondary text-3xl lg:text-4xl font-semibold w-max",
          className
        )}
      >
        {attachGradientTo === "title" && (
          <span className="absolute w-32 h-32 bg-gradient-to-b from-primary-faint/70 rotate-45 to-transparent rounded-full -right-12 -top-12" />
        )}
        <span className="relative">{title}</span>
      </h2>
      {description && (
        <p className="max-w-lg mt-4 text-secondary/60">{description}</p>
      )}
    </div>
  );
};

export default TitleWithLabel;
