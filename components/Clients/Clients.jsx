/* eslint-disable @next/next/no-img-element */
import React from "react";
import { InfiniteMovingCards } from "../ui/InfiniteMovingCards";
import { testimonials } from "./data";

const Clients = () => {
  return (
    <section id="testimonials" className="mt-32 md:mt-0">
      <h1 className="flex justify-center text-3xl text-center md:text-4xl gradient-text font-semibold uppercase">
        Kind Words From Satisfied Clients
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="fast"
          />
        </div>
      </div>
    </section>
  );
};

export default Clients;
