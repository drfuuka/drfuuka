"use client";

import { Button, Select, Selection, SelectItem } from "@nextui-org/react";
import { Mail } from "lucide-react";
import React, { useState } from "react";

export default function FooterSection() {
  const servicesData = [
    { key: "frontend", label: "Frontend Alchemist" },
    { key: "backend", label: "Backend Wizard" },
    { key: "fullstack", label: "Fullstack Prodigy" },
  ];

  const [selectedService, setSelectedService] = useState<Selection>(
    new Set([])
  );

  return (
    <div className="px-6 py-10 md:px-32 md:py-16 lg:px-64 lg:py-16 bg-background">
      <h1 className="text-xl font-bold">
        <span className="text-primary">Contact </span> Me
      </h1>
      <span className="font-light">
        Need a High Five? Feel Free to Contact Me.
      </span>

      <div className="grid grid-cols-12 items-center gap-5 gap-y-20 md:gap-y-5 mt-10">
        <div className="col-span-12 md:col-span-6">
          <div className="flex flex-col gap-3">
            <span className="font-semibold">How can i help you</span>
            <Select
              placeholder="What service do you want?"
              className="max-w-xs"
              onSelectionChange={setSelectedService}
            >
              {servicesData.map((item, index) => {
                return <SelectItem key={index}>{item.label}</SelectItem>;
              })}
            </Select>
            <div className="mt-3">
              <Button color="primary" size="sm">
                Go!
              </Button>
            </div>
          </div>
        </div>

        <div className="col-span-12 md:col-span-6">
          <span className="font-semibold">Want to know me more?</span>
          <p className="my-6 text-sm font-light">
            Hey! if you like my work, I would love hearing from you. Feel free
            to contact me and let’s talk about what you want, here below are my
            phone number & work email.
          </p>

          <div className="flex items-center">
            <Mail width={16} />
            <span className="ml-3 text-sm">michaelalfurqon@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}
