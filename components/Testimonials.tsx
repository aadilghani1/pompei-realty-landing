"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import Container from "./Container";
import TitleWithLabel from "./TitleWithLabel";
import TestimonialItem from "./TestimonialItem";
import { BiArrowToLeft } from "react-icons/bi";
import {
  HiArrowLeftCircle,
  HiOutlineArrowLeftCircle,
  HiOutlineArrowRightCircle,
} from "react-icons/hi2";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const Testimonials = () => {
  const [currIdx, setCurrIdx] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const ITEMS_LENGTH = 4;

  const handleNext = () => {
    setCurrIdx(() => (currIdx + 1) % ITEMS_LENGTH);
  };

  const handlePrev = () => {
    setCurrIdx(() => (currIdx - 1 + ITEMS_LENGTH) % ITEMS_LENGTH);
  };

  useEffect(() => {
    const timeout = setTimeout(handleNext, 5000);
    return () => clearTimeout(timeout);
  }, [currIdx]);

  useEffect(() => {
    if (!containerRef.current) return;
    containerRef.current
      ?.querySelectorAll(":scope > div")
      ?.[currIdx]?.scrollIntoView({
        behavior: "smooth",
        inline: "start",
      });
  }, [currIdx]);

  return (
    <Container className="mb-24 grid gap-6 grid-cols-3">
      <div className="flex flex-col">
        <TitleWithLabel
          title="Look What Our Customers Say!"
          label="Testimonial"
          description="Fusce venenatis tellus a felis scelerisque, non pulvinar est pellentesque."
          className="max-w-sm"
        />
        <div className="flex gap-2 pt-8 mt-auto">
          <button
            className="text-gold opacity-50 hover:opacity-75 hover:bg-primary/20 transition-all border border-gold rounded-full p-2"
            onClick={handlePrev}
          >
            <BsArrowLeft className="w-6 h-6" />
          </button>
          <button
            className="text-gold opacity-50 hover:opacity-75 hover:bg-primary/20 transition-all border border-gold rounded-full p-2"
            onClick={handleNext}
          >
            <BsArrowRight className="w-6 h-6" />
          </button>
        </div>
      </div>
      <div className="relative col-span-2">
        <div
          ref={containerRef}
          className="flex py-16 -my-16 pl-10 -ml-10 pr-6 -mr-6 gap-6 overflow-y-auto hide-scrollbar snap-x snap-mandatory"
        >
          <span className="block absolute top-0 -left-10 h-[calc(100%+2.5rem)] w-10 bg-gradient-to-r from-white to-transparent" />
          <span className="block absolute top-0 -right-6 h-[calc(100%+2.5rem)] w-14 bg-gradient-to-l from-white to-transparent" />
          {[...Array(ITEMS_LENGTH)].map((_, idx) => (
            <TestimonialItem key={idx} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Testimonials;
