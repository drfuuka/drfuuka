"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Button, Skeleton } from "@nextui-org/react";
import React, { useEffect, useState } from "react";

export default function HeroSection() {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="grid grid-cols-1 md:grid-cols-5 px-6 py-10 md:px-32 md:py-16 lg:px-64 lg:py-32 min-h-[70vh] gap-10 bg-background-300"
      id="home"
    >
      <div className="md:col-span-3 flex items-center">
        <div className="flex flex-col">
          <span>Hello there,</span>
          <span className="text-4xl md:text-5xl mt-3">
            I&apos;m <b>Michael Al Furqon Akram</b>
          </span>
          <div className="flex my-6">
            <div className="flex gap-3 px-5 py-2 rounded-full bg-background text-foreground text-sm">
              <span>Software Engineer</span>
              <span>•</span>
              <span>Fullstack Developer</span>
            </div>
          </div>
          <div>
            <Button color="primary">Explore More</Button>
          </div>
        </div>
      </div>
      <div className="col-span-2">
        <div className="flex items-center justify-center md:justify-end h-full">
          {isLoading ? (
            <Skeleton className="w-full h-[200px] rounded" />
          ) : (
            <div className="w-full h-[350px] md:h-[400px]">
              <DotLottieReact src="/hero.lottie" loop autoplay speed={2} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
