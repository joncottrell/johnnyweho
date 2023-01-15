import Image from "next/image";
import React from "react";
import watercolorImg from "../public/images/watercolor.png";
import { SocialIcon } from "react-social-icons";
import { Rubik_80s_Fade } from "@next/font/google";

const titleFont = Rubik_80s_Fade({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <div className="h-screen w-screen relative max-w-full">
        <Image
          className="w-full h-full object-cover absolute"
          src={watercolorImg}
          alt="Johnny WEHO walking across a rainbow crosswalk"
        />
        <div className="absolute w-full h-full flex items-center justify-center">
          <div className="bg-white bg-opacity-40 rounded-2xl p-8 flex flex-col gap-4 items-center justify-center drop-shadow-xl">
            <p
              className={`md:text-5xl lg:text-6xl text-4xl ${titleFont.className}`}
            >
              JOHNNY WEHO
            </p>
            <div className="flex row">
              <SocialIcon url="https://instagram.com/johnnyweho" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
