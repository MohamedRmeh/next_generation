"use client";
import { HoverEffect } from "../ui/card-hover-effect";
import { projects } from "./Projects";  

export default function Skills() {
  return (
    <section className="mb-14">
      <div>
        <div className="flex justify-center items-center flex-col">
          <h1 className="sm:text-5xl text-4xl font-semibold gradient-text Italicized-word uppercase">
          Our team skills
          </h1>
          <hr className="lg:w-[1200px] w-[300px] md:w-[700px] sm:w-[400px] border-t-2 border-neutral-400 my-8" />
        </div>
        <div className="max-w-5xl mx-auto px-8">
          <HoverEffect items={projects} />
        </div>
      </div>
    </section>
  );
}