"use client";

import { Button, Chip, Image, Skeleton } from "@nextui-org/react";
import { CheckIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import Experiences from "./components/experiences";
import Projects from "./components/projects";
import dynamic from "next/dynamic";

const DotLottieReact = dynamic(
  () =>
    import("@lottiefiles/dotlottie-react").then((mod) => mod.DotLottieReact),
  { ssr: false }
);

export default function AboutMeSection() {
  const specializations = [
    {
      name: "React",
      icon: "assets/code-lang-icon/react.svg",
      experience: "4yrs",
    },
    {
      name: "Vue",
      icon: "assets/code-lang-icon/vue.svg",
      experience: "4yrs",
    },
    {
      name: "HTML",
      icon: "assets/code-lang-icon/html.svg",
      experience: "4yrs",
    },
    {
      name: "CSS",
      icon: "assets/code-lang-icon/css.svg",
      experience: "4yrs",
    },
    {
      name: "Javascript",
      icon: "assets/code-lang-icon/js.svg",
      experience: "4yrs",
    },
    {
      name: "Laravel",
      icon: "assets/code-lang-icon/laravel.svg",
      experience: "4yrs",
    },
    {
      name: "NodeJS",
      icon: "assets/code-lang-icon/node.svg",
      experience: "3yrs",
    },
    {
      name: "SASS",
      icon: "assets/code-lang-icon/sass.svg",
      experience: "3yrs",
    },
  ];

  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="px-6 py-10 md:px-32 md:py-16 lg:px-64 lg:py-16 bg-background"
      id="about"
    >
      <h1 className="text-xl font-bold">
        About <span className="text-primary">Me</span>
      </h1>
      <span className="font-light">
        A Little Things About Me and What I Love To Do
      </span>

      <div className="grid grid-cols-5 gap-10 mt-8 mb-16">
        <div className="col-span-5 md:col-span-2">
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
        <div className="col-span-5 md:col-span-3 flex items-center">
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

      <div className="p-3 rounded">
        <div className="flex items-center gap-3 flex-wrap">
          {specializations.map((item, index) => (
            <Chip
              size="lg"
              radius="md"
              color="primary"
              variant="flat"
              key={index}
            >
              <div className="flex items-center gap-2">
                <Image src={item.icon} width={20} height={20} alt="" />
                <div className="flex gap-1">
                  <span className="text-xs">{item.name}</span>
                  <span className="opacity-70 text-xs">{item.experience}</span>
                </div>
              </div>
            </Chip>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-10 mt-16">
        <div className="col-span-2 md:col-span-1">
          <h1 className="text-xl font-bold mb-5">
            My <span className="text-primary">Experiences</span>
          </h1>
          <Experiences />
        </div>
        <div className="col-span-2 md:col-span-1">
          <h1 className="text-xl font-bold mb-5">
            My <span className="text-primary">Works</span>
          </h1>
          <Projects />
        </div>
      </div>
    </section>
  );
}
