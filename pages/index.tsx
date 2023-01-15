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
        <div className="absolute w-full h-full flex items-center justify-center text-center">
          <div
            style={{ color: "#12336Fff" }}
            className="bg-white bg-opacity-50 rounded-2xl p-8 m-8 flex flex-col gap-8 items-center justify-center drop-shadow-xl"
          >
            <p
              className={`md:text-5xl lg:text-6xl text-4xl ${titleFont.className}`}
            >
              JOHNNY WEHO
            </p>
            <p className="text-slate-600 leading-7 max-w-lg text-lg">
              Looking for some fun and inspiring content about living in{" "}
              <span className="font-bold">West&nbsp;Hollywood</span>?
            </p>
            <p className="text-slate-600 leading-7 max-w-lg text-lg">
              <span className="font-bold">Follow me</span>
              {" and let's explore this beautiful town together!"}
            </p>
            <div className="flex row">
              <SocialIcon
                fgColor="white"
                url="https://instagram.com/johnnyweho"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
