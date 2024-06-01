import React from "react";
import Button from "./Button";

type Props = {};

const CTAGroup = (props: Props) => {
  return (
    <div className="flex items-center gap-8 mt-4">
      <Button label="Get Started" />
      <Button label="See all listing →" isSecondary />
    </div>
  );
};

export default CTAGroup;
