import React from "react";
import { BsTwitter, BsInstagram, BsGithub } from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div className="flex justify-end items-center flex-col p-4">
      <div className="w-10 h-10 rounded-full bg-white my-1 border-[1px] border-solid border-gray-300 flex justify-center items-center transition-all duration-300 ease-in-out hover:bg-color-palette-2 hover:border-color-palette-2">
        <BsTwitter className="w-4 h-4 text-gray-400 hover:text-white" />
      </div>
      <div className="w-10 h-10 rounded-full bg-white my-1 border-[1px] border-solid border-gray-300 flex justify-center items-center transition-all duration-300 ease-in-out hover:bg-color-palette-2 hover:border-color-palette-2">
        <BsInstagram className="w-4 h-4 text-gray-400 hover:text-white" />
      </div>
      <div className="w-10 h-10 rounded-full bg-white my-1 border-[1px] border-solid border-gray-300 flex justify-center items-center transition-all duration-300 ease-in-out hover:bg-color-palette-2 hover:border-color-palette-2">
        <BsGithub className="w-4 h-4 text-gray-400 hover:text-white" />
      </div>
    </div>
  );
};

export default SocialMedia;
