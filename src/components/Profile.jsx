import React from "react";
import { useContext } from "react";
import { SiteContext } from "../context/SiteContext";
import "../index.css";
function Profile() {
  const { texts } = useContext(SiteContext);

  return (
    <div className="w-[80%] mx-auto flex-column ">
      <hr className="h-px my-[4rem] bg-indigo-700 border-0 dark:bg-[#BAB2E7] w-[full]" />
      <div>
        <h3 className="text-[48px] text-center dark:text-[#AEBCCF] m:text-center light-text-header">
          {texts.profile.title}
        </h3>
        <div className="flex-column text-center ">
          <div className="flex justify-between flex-wrap items-center ">
            <div className=" m:w-screen leading-[27px]">
              <p className="light-text-paragraph-medium dark:text-white">
                {texts.profile.about1}
              </p>
              <div className="h-[2rem] " />
              <p className="light-text-paragraph-medium dark:text-white">
                {texts.profile.about2}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div></div>
      <hr className="h-px my-[4rem] bg-indigo-700 border-0 dark:bg-[#BAB2E7] w-[full]" />
    </div>
  );
}

export default Profile;
