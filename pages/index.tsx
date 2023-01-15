import Image from "next/image";
import React from "react";
import watercolorImg from "../public/images/watercolor.png";
import { SocialIcon } from "react-social-icons";

export default function Home() {
  return (
    <main>
      <div className="h-screen w-screen relative max-w-full">
        <Image
          className="w-full h-full object-cover absolute"
          src={watercolorImg}
          alt="Johnny WEHO walking across a rainbow crosswalk"
        />
        <div className="absolute w-full h-full flex items-center justify-center">
          <div className="bg-white bg-opacity-40 rounded-lg p-4 flex flex-col gap-4 items-center justify-center drop-shadow-xl">
            <p className="font-bold text-3xl">Johnny WEHO</p>
            <div className="flex row">
              <SocialIcon url="https://instagram.com/johnnyweho" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
