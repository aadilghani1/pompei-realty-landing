import Image from "next/image";
import React from "react";
import { BiSolidStar, BiStar } from "react-icons/bi";

const TestimonialItem = () => {
  return (
    <div className="snap-start scroll-ml-6 first-of-type:scroll-ml-10 p-6 max-w-96 w-11/12 flex-none rounded-3xl shadow-2xl shadow-yellow-950/10 transition-all border border-yellow-950/10">
      <svg
        className="w-12 h-12 mb-2 -mt-4"
        viewBox="0 0 62 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.9973 0L0.812256 37.2632H22.8419L31.384 0H16.9973ZM47.2693 0L31.0843 37.2632H53.114L61.6561 0H47.2693Z"
          fill="#FFC700"
          fill-opacity="0.4"
        />
      </svg>

      <p className="text-secondary">
        I highly recommend Jodi J. Appleby. She was attentive to our needs and
        worked tirelessly to find us the perfect home. We couldn't be happier
        with our new place!
      </p>
      <div className="flex items-center gap-2 mt-4 border-yellow-950/10 border-t pt-4">
        <Image
          src="https://i.pravatar.cc/100"
          alt="jodi"
          width={100}
          height={100}
          className="w-10 h-10 rounded-full object-cover"
        />
        <p className="font-medium">Jodi J. Appleby</p>
        <span className="ml-auto flex items-center gap-1 text-primary">
          <BiSolidStar /> <BiSolidStar /> <BiSolidStar /> <BiStar />
          <BiStar />
        </span>
      </div>
    </div>
  );
};

export default TestimonialItem;
