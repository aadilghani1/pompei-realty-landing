import React from "react";
import Container from "./Container";
import TitleWithLabel from "./TitleWithLabel";

const Testimonials = () => {
  return (
    <Container className="mb-24 grid gap-6 grid-cols-3">
      <div>
        <TitleWithLabel
          title="Look What Our Customers Say!"
          label="Testimonial"
          description="Fusce venenatis tellus a felis scelerisque, non pulvinar est pellentesque."
          className="max-w-sm"
        />
      </div>
      <div className="col-span-2 bg-yellow-50"></div>
    </Container>
  );
};

export default Testimonials;
