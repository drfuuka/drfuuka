import Image from "next/image";
import React from "react";

export default function Works() {
  return (
    <div className="px-6 py-10 md:px-32 md:py-16 lg:px-64 lg:py-20">
      <h1 className="text-lg font-semibold">
        Wallet Page for Crypto Admin & Dashboard React Web Template
      </h1>

      <div className="rounded-2xl max-h-[700px] flex justify-center items-center overflow-hidden mt-10">
        <div className="relative w-full h-[700px]">
          <Image
            src="https://i.pinimg.com/originals/7f/de/a1/7fdea1042a627b2f7a2266ea301bf3af.jpg"
            alt="Picture of the author"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
      </div>

      <div className="my-10 px-40 ">
        <h3 className="font-semibold text-xl mb-5">Hi Fuuka!</h3>
        <p>
          Extej offers a comprehensive solution for finance and crypto
          businesses seeking to build outstanding SaaS products. With its
          polished <b>UI/UX design</b>, robust functionality, and pre-built
          components, Extej streamlines development, reduces costs, and ensures
          an exceptional user experience.
        </p>

        <div className="my-3"></div>

        <p>
          You can also buy this template. You can check the website demo from
          the link below
        </p>
        <span>https://dashboard.extej.com/</span>
      </div>
    </div>
  );
}
