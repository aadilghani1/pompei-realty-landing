import React from "react";
import TitleWithLabel from "./TitleWithLabel";
import AreaLink from "./AreaLink";

const Areas = () => {
  return (
    <div className="my-20 lg:my-32">
      <TitleWithLabel
        title="We are the leading agency in Rome for medium & long term rentals"
        label="Where are we"
      />
      <div className="grid mt-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <AreaLink image="/areas/area1.png" url="/" title="Area 1" />
        <AreaLink image="/areas/area2.png" url="/" title="Area 2" />
        <AreaLink image="/areas/area3.png" url="/" title="Area 3" />
        <AreaLink image="/areas/area4.png" url="/" title="Other Areas" />
      </div>
    </div>
  );
};

export default Areas;
