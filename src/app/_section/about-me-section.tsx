"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Button, Chip, Skeleton } from "@nextui-org/react";
import { CheckIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import BasicTimeline from "./components/timeline";
import { TTimeLineProps } from "@/types/timeline.type";

export default function AboutMeSection() {
  const [isLoading, setLoading] = useState(true);

  const experiences: TTimeLineProps[] = [
    {
      timeText: "2019 (6 Month)",
      title: "Ginga ID",
      description:
        "I’ve worked here as Junior Web Designer and their Graphic Designer.",
    },
    {
      timeText: "2019 (6 Month)",
      title: "Ginga ID",
      description:
        "I’ve worked here as Junior Web Designer and their Graphic Designer.",
    },
    {
      timeText: "2019 (6 Month)",
      title: "Ginga ID",
      description:
        "I’ve worked here as Junior Web Designer and their Graphic Designer.",
    },
    {
      timeText: "2019 (6 Month)",
      title: "Ginga ID",
      description:
        "I’ve worked here as Junior Web Designer and their Graphic Designer.",
    },
  ];

  const certificates: TTimeLineProps[] = [
    {
      timeText: "2019 (6 Month)",
      title: "Ginga ID",
      description:
        "I’ve worked here as Junior Web Designer and their Graphic Designer.",
    },
    {
      timeText: "2019 (6 Month)",
      title: "Ginga ID",
      description:
        "I’ve worked here as Junior Web Designer and their Graphic Designer.",
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="px-6 py-10 md:px-32 md:py-16 lg:px-64 lg:py-16 bg-background">
      <h1 className="text-xl font-bold">
        About <span className="text-primary">Me</span>
      </h1>
      <span className="font-light">
        A Little Things About Me and What I Love To Do
      </span>

      <div className="grid grid-cols-5 gap-10 my-16">
        <div className="col-span-2">
          <div className="flex items-center justify-center md:justify-end h-full">
            {isLoading ? (
              <Skeleton className="w-full h-[200px] rounded" />
            ) : (
              <div className="relative w-full h-full">
                <div className="w-full h-[350px] md:h-[400px]">
                  <div className="flex items-center justify-center w-full h-full">
                    <DotLottieReact
                      src="/about.lottie"
                      loop
                      autoplay
                      speed={2}
                    />
                  </div>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 bottom-5 p-3">
                  <Button variant="bordered" color="primary">
                    Get My CV
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="col-span-3 flex items-center">
          <div className="flex flex-col">
            <h1 className="text-lg font-bold">Hello, I&apos;m Michael</h1>
            <div className="flex flex-col gap-5 mt-4 font-light">
              <p>
                I am a hard worker and a very curious person. I believe in
                persistence, honesty, and the quality of work that I provide.
              </p>
              <p>
                I have some s in the field of design and want to find more s so
                that I can continue to improve the quality of the work I
                provide.
              </p>
              <p>
                I have a desire to build and provide the best design that gives
                satisfaction to users when they use the products I design
              </p>
            </div>
            <Chip
              startContent={<CheckIcon size={18} />}
              variant="flat"
              color="success"
              size="sm"
              radius="sm"
              className="mt-5"
              classNames={{
                base: "p-2",
              }}
            >
              Currently Working
            </Chip>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-10 mt-16">
        <div className="col-span-1">
          <h1 className="text-xl font-bold mb-5">
            My <span className="text-primary">Experiences</span>
          </h1>
          <BasicTimeline data={experiences} />
        </div>
        <div className="col-span-1">
          <h1 className="text-xl font-bold mb-5">
            My <span className="text-primary">Certificates</span>
          </h1>
          <BasicTimeline data={certificates} />
        </div>
      </div>
    </div>
  );
}
