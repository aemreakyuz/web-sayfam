import React from "react";
import { Images } from "../assets/photos/Images";

import { useContext } from "react";
import { SiteContext } from "../context/SiteContext";
import "../index.css";
function Hero() {
  const { texts } = useContext(SiteContext);
  return (
    <div className="w-[80%] mx-auto flex-column flex-wrap items-start justify-center min relative ">
      <hr className=" my-[2rem] bg-indigo-700 border-0 dark:bg-[#BAB2E7] w-[full]" />
      <div className="flex items-center  ">
        <hr className="h-px mr-[1rem] bg-indigo-700 border-0 dark:bg-[#BAB2E7] w-[6.375rem]" />
        <h1 className="text-indigo-800 dark:text-[#B7AAFF]">Emre Akyüz</h1>
      </div>
      <div className="flex gap-4 flex-wrap justify-between mt-8 m:w-full m:justify-center">
        <div className="w-[50%] m:w-screen m:text-center ">
          <div className="h-[2rem]" />
          <p className="light-text-paragraph-medium leading-[1.75rem] dark:text-white">
            {texts.hero.description}
          </p>
          <div className="h-[2rem]" />
          <div className="flex gap-4 text-[18px] m:justify-center">
            <a
              href="https://github.com/aemreakyuz"
              className="button-light flex items-center justify-center gap-2 hover:bg-indigo-800 hover:text-[#E1E1FF]  dark:text-[#E1E1FF] dark:border-[#E1E1FF] dark:bg-[#383838;] dark:hover:bg-indigo-800 dark:hover:text-[#E1E1FF]"
            >
              <img
                className="w-[24px]"
                src={Images.socials.githubLogo}
                alt=""
              />{" "}
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/emreakyuz1/"
              className=" button-light flex items-center justify-center gap-2 hover:bg-indigo-800 hover:text-[#E1E1FF] dark:text-[#E1E1FF] dark:border-[#E1E1FF] dark:bg-[#383838] dark:hover:bg-indigo-800 dark:hover:text-[#E1E1FF]"
            >
              <img
                className="w-[24px] h-[25px]   fill-[#3730A3]"
                src={Images.socials.linkedinLogo}
                alt=""
              />{" "}
              LinkedIn
            </a>
          </div>
        </div>
        <div className="">
          <img
            className=" w-[25.75rem] h-[24rem] object-cover rounded-2xl"
            src={Images.profile.profilePhoto}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
