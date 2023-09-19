import React, { useState } from "react";
// import bgVideo from "../../assets/bg5.mp4";
import { BsGlobe, BsPeopleFill } from "react-icons/bs";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { FaMoneyBillWave } from "react-icons/fa";

const Stats = () => {
  return (
    <div className=" hidden lg:block relative mt-[2em]">
      <img
        src="https://images.pexels.com/photos/3613021/pexels-photo-3613021.jpeg?auto=compress&cs=tinysrgb&w=1600"
        alt=""
        className="h-[500px] w-[100%] object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,.6)] " />
      <div className="absolute w-full h-full top-0 flex flex-col justify-center pl-[1em] pr-[1em] text-white">
        {/* content */}
        <div className="flex justify-evenly items-center">
          <div className="flex  flex-col items-center text-4xl">
            <BsGlobe className="mb-[1em]" />
            <p>32567</p>
            <p>Alumnis</p>
          </div>
          <div className="flex  flex-col items-center text-4xl">
            <HiOutlineAcademicCap className="mb-[1em]" />
            <p>12342</p>
            <p>Current Students</p>
          </div>
          <div className="flex  flex-col items-center text-4xl">
            <BsPeopleFill className="mb-[1em]" />
            <p>30</p>
            <p>Teaching Staff</p>
          </div>
          <div className="flex  flex-col items-center text-4xl">
            <FaMoneyBillWave className="mb-[1em]" />
            <p>110</p>
            <p>Donors and Mentors</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
