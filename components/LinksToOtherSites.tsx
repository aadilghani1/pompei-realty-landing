import React from "react";
import CTAwithImage from "./CTAwithImage";
import Container from "./Container";

const LinksToOtherSites = () => {
  return (
    <Container className="mb-24">
      <div className="flex gap-10">
        <CTAwithImage
          title="Vacation in Rome"
          url="/"
          image="/cta/vacation.png"
        />
        <CTAwithImage title="Work in Rome" url="/" image="/cta/work.webp" />
      </div>
    </Container>
  );
};

export default LinksToOtherSites;
