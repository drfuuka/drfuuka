import React from "react";
import Works from "./components/works";

export default function MyWorksSection() {
  return (
    <div className="px-6 py-10 md:px-32 md:py-16 lg:px-64 lg:py-16 bg-background">
      <h1 className="text-xl font-bold">
        My <span className="text-primary">Works</span>
      </h1>
      <span className="font-light">
        Take a look at my latest work and project
      </span>
      <div className="grid grid-cols-12 mt-10 gap-5">
        <Works />
        <Works />
        <Works />
        <Works />
        <Works />
        <Works />
      </div>
    </div>
  );
}
