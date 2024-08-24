import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Works() {
  return (
    <div className="col-span-6 md:col-span-4">
      <Link href={`/works`}>
        <div className="rounded-lg shadow-lg max-h-[300px] flex justify-center items-center overflow-hidden">
          <div className="relative w-full h-[300px]">
            <Image
              src="https://i.pinimg.com/originals/7f/de/a1/7fdea1042a627b2f7a2266ea301bf3af.jpg"
              alt="Picture of the author"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className="hover:scale-110 transition duration-300"
            />
          </div>
        </div>
        <div className="flex items-center text-sm justify-between mt-3">
          <span className="font-medium">Dashboard Design - Website</span>
          <div className="flex items-center gap-3">
            <div className="flex gap-2 items-center pr-3">
              <Heart width={14} />
              <span className="text-xs">25</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
