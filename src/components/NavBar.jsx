import React from "react";
import { Images } from "../assets/photos/Images";
import "./NavBar.css";
import { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";
import { SiteContext } from "../context/SiteContext";

function NavBar() {
  const { theme } = useContext(DarkModeContext);
  const { texts } = useContext(SiteContext);

  const skillsScroll = () => {
    const element = document.getElementById("skills-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const projectsScroll = () => {
    const element = document.getElementById("projects-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="flex flex-wrap justify-between w-[80%] mt-6 mx-auto">
      <div className="ellipse-container   ">
        <img
          src={
            theme === "DARK"
              ? Images.ellipses.ellipse2
              : Images.ellipses.ellipse
          }
          alt="ellipse"
        />
        <span className="inside-ellipse dark:text-[#8F88FF]">E</span>
      </div>
      <div className="flex gap-16">
        <button
          onClick={skillsScroll}
          className="light-text-paragraph-medium font-medium dark:text-[#6B7280]"
        >
          {texts.nav.skills}
        </button>
        <button
          onClick={projectsScroll}
          className="light-text-paragraph-medium font-medium dark:text-[#6B7280]"
        >
          {texts.nav.projects}
        </button>
        <a
          href="mailto:aemreakyuz@gmail.com"
          className="border-2 py-[0.75rem] px-[2rem] rounded-md hover:bg-indigo-800 hover:text-[#E1E1FF] text-indigo-800 border-indigo-800 dark:bg-white dark:text-[#3730A3] dark:hover:bg-indigo-800 dark:hover:text-[#E1E1FF]
          "
        >
          {texts.nav.hire}
        </a>
      </div>
    </div>
  );
}

export default NavBar;
