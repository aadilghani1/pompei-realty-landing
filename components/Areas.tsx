import React from "react";
import TitleWithLabel from "./TitleWithLabel";
import AreaLink from "./AreaLink";
import Container from "./Container";

const Areas = () => {
  return (
    <Container className="mb-24">
      <TitleWithLabel
        title="We are the leading agency in Rome for medium & long term rentals"
        label="Where are we"
        className="max-w-2xl"
      />
      <div className="grid mt-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <AreaLink image="/areas/area1.png" url="/" title="Trastevere" />
        <AreaLink image="/areas/area2.png" url="/" title="Centro Storico" />
        <AreaLink image="/areas/area3.png" url="/" title="Monteverde" />
        <AreaLink image="/areas/area4.png" url="/" title="Other Areas" />
      </div>
    </Container>
  );
};

export default Areas;
