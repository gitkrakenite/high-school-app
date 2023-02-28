import React from "react";
import { FaFacebookF, FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import {
  AiFillYoutube,
  AiOutlineInstagram,
  AiOutlineMail,
  AiOutlineTwitter,
} from "react-icons/ai";

const Topbar = () => {
  return (
    <div className="hidden md:flex justify-between pl-[2em] pr-[2em] pt-[1em] pb-[1em] items-center bg-slate-900 text-white">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-6 mr-[2em]">
          <FaPhoneAlt />
          <span>+012 345 6789</span>
        </div>
        <div className="h-[16px] w-[2px] bg-white mr-[2em]" />
        <div className="flex items-center gap-7">
          <AiOutlineMail />
          <span>mail@domain.com</span>
        </div>
      </div>
      {/*  */}
      <div className="flex gap-5 text-xl items-center">
        <a href="https://www.facebook.com/">
          <FaFacebookF />
        </a>
        <a href="https://twitter.com/">
          <AiOutlineTwitter />
        </a>
        <a href="https://www.linkedin.com/feed/">
          <FaLinkedinIn />
        </a>
        <a href="https://www.instagram.com/">
          <AiOutlineInstagram />
        </a>
        <a href="https://www.youtube.com/">
          <AiFillYoutube />
        </a>
      </div>
    </div>
  );
};

export default Topbar;
