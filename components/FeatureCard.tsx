import React, { ReactNode } from "react";
import { IconType } from "react-icons";

const FeatureCard = ({
  title,
  description,
  Icon,
  iconSize = 34,
  index,
}: {
  title: string;
  description: string;
  Icon: IconType;
  iconSize?: number;
  index: number;
}) => {
  return (
    <div
      style={{
        left: index * 32 + "px",
      }}
      className="relative max-w-lg p-6 flex gap-6 rounded-3xl bg-gradient-to-b from-transparent to-primary-faint/5 shadow-xl shadow-yellow-950/5"
    >
      <Icon size={iconSize} className="text-gold" />
      <div>
        <h3 className="text-lg text-gold font-medium">{title}</h3>
        <p className="text-secondary/60">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
