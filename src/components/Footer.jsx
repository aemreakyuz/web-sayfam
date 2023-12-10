import React from "react";
import { useContext } from "react";
import { SiteContext } from "../context/SiteContext";
import "../index.css"
function Footer() {

  const {texts} = useContext(SiteContext)
  return <div className="w-full m-auto bg-[#F9F9F9] dark:bg-[#141414] dark:text-[#AEBCCF] py-[4rem]">
    <div className="px-[10%] ">
      <h3 className=" light-text-header text-[42px] mb-[4rem] dark:text-[#AEBCCF]"> 
       {texts.footer[0]} <br/> {texts.footer[1]} 
      </h3>
      <div className="flex justify-between">
        <div>
      👉<a className=" ml-2 underline text-[#AF0C48;] dark:text-[#BAB2E7]" href="mailto:aemreakyuz@gmail.com">aemreakyuz@gmail.com</a>
      </div>
      <div className="flex gap-4"> 
        <a className="text-[#17D18B]" href="https://github.com/aemreakyuz">GitHub</a>
        <a className="text-[#0BA6F6]" href="https://www.linkedin.com/in/emreakyuz1/">Linkedin</a>
      </div>
      </div>
    
    </div>
  </div>;
}

export default Footer;
