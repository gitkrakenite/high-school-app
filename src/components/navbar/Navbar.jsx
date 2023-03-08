import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      {/* Desktop Navigation */}
      <div className="hidden xl:flex justify-between pt-[10px] pl-[2em] pr-[2em] items-center">
        {/* logo */}
        <div className="flex items-center text-3xl cursor-pointer">
          <HiOutlineAcademicCap />
          <h1 style={{ fontWeight: 700 }}>EDUKATE</h1>
        </div>
        <div className="flex gap-9 items-center">
          <ul className="flex gap-5">
            <Link to="/" style={{ textDecoration: "none" }}>
              <li
                className="cursor-pointer text-gray-500 hover:text-slate-900"
                style={{ fontWeight: 600, fontSize: "18px" }}
              >
                Home
              </li>
            </Link>

            <Link to="/curriculum" style={{ textDecoration: "none" }}>
              <li
                className="cursor-pointer text-gray-500 hover:text-slate-900"
                style={{ fontWeight: 600, fontSize: "18px" }}
              >
                Curriculum
              </li>
            </Link>

            <Link to="/staff" style={{ textDecoration: "none" }}>
              <li
                className="cursor-pointer text-gray-500 hover:text-slate-900"
                style={{ fontWeight: 600, fontSize: "18px" }}
              >
                Staff
              </li>
            </Link>

            <Link to="/about" style={{ textDecoration: "none" }}>
              <li
                className="cursor-pointer text-gray-500 hover:text-slate-900"
                style={{ fontWeight: 600, fontSize: "18px" }}
              >
                About
              </li>
            </Link>

            <Link to="/fee" style={{ textDecoration: "none" }}>
              <li
                className="cursor-pointer text-gray-500 hover:text-slate-900"
                style={{ fontWeight: 600, fontSize: "18px" }}
              >
                Fee Structure
              </li>
            </Link>

            <Link to="/news" style={{ textDecoration: "none" }}>
              <li
                className="cursor-pointer text-gray-500 hover:text-slate-900"
                style={{ fontWeight: 600, fontSize: "18px" }}
              >
                News & Blog
              </li>
            </Link>

            <Link to="/contact" style={{ textDecoration: "none" }}>
              <li
                className="cursor-pointer text-gray-500 hover:text-slate-900"
                style={{ fontWeight: 600, fontSize: "18px" }}
              >
                Contact
              </li>
            </Link>
          </ul>

          <a href="mailto:highschool@example.com">
            <p className="bg-slate-900 text-white p-[10px] rounded-md cursor-pointer">
              Reach Out
            </p>
          </a>
        </div>
      </div>

      {toggle ? (
        <div className="flex flex-col justify-end items-end h-full w-[100%] pb-8 top-0 sticky z-50 bg-slate-100">
          <div className="flex justify-between  w-full items-center text-3xl cursor-pointer ">
            <div className="flex items-center text-3xl cursor-pointer ">
              <HiOutlineAcademicCap />
              <h1 style={{ fontWeight: 700 }}>EDUKATE</h1>
            </div>
            <div
              className="pr-[1em] pt-[1em] cursor-pointer"
              onClick={() => setToggle(!toggle)}
            >
              <AiOutlineClose />
            </div>
          </div>
          <div className="flex flex-col gap-9 items-center mt-[1em] text-center w-full">
            <ul className="flex flex-col gap-5">
              <Link
                to="/"
                onClick={() => setToggle(false)}
                style={{ textDecoration: "none" }}
              >
                <li
                  className="cursor-pointer text-gray-500 hover:text-slate-900"
                  style={{ fontWeight: 600, fontSize: "18px" }}
                >
                  Home
                </li>
              </Link>

              <Link
                to="/curriculum"
                onClick={() => setToggle(false)}
                style={{ textDecoration: "none" }}
              >
                <li
                  className="cursor-pointer text-gray-500 hover:text-slate-900"
                  style={{ fontWeight: 600, fontSize: "18px" }}
                >
                  Curriculum
                </li>
              </Link>

              <Link
                to="/staff"
                onClick={() => setToggle(false)}
                style={{ textDecoration: "none" }}
              >
                <li
                  className="cursor-pointer text-gray-500 hover:text-slate-900"
                  style={{ fontWeight: 600, fontSize: "18px" }}
                >
                  Staff
                </li>
              </Link>

              <Link
                to="/about"
                onClick={() => setToggle(false)}
                style={{ textDecoration: "none" }}
              >
                <li
                  className="cursor-pointer text-gray-500 hover:text-slate-900"
                  style={{ fontWeight: 600, fontSize: "18px" }}
                >
                  About
                </li>
              </Link>

              <Link
                to="/fee"
                onClick={() => setToggle(false)}
                style={{ textDecoration: "none" }}
              >
                <li
                  className="cursor-pointer text-gray-500 hover:text-slate-900"
                  style={{ fontWeight: 600, fontSize: "18px" }}
                >
                  Fee Structure
                </li>
              </Link>

              <Link
                to="/news"
                onClick={() => setToggle(false)}
                style={{ textDecoration: "none" }}
              >
                <li
                  className="cursor-pointer text-gray-500 hover:text-slate-900"
                  style={{ fontWeight: 600, fontSize: "18px" }}
                >
                  News & Blog
                </li>
              </Link>

              <Link
                to="/contact"
                onClick={() => setToggle(false)}
                style={{ textDecoration: "none" }}
              >
                <li
                  className="cursor-pointer text-gray-500 hover:text-slate-900"
                  style={{ fontWeight: 600, fontSize: "18px" }}
                >
                  Contact
                </li>
              </Link>
            </ul>
            <p className="bg-slate-900 text-white w-full ml-[15px] mr-[15px] p-[10px] rounded-md cursor-pointer">
              Reach Out
            </p>
          </div>
        </div>
      ) : (
        <div
          className="flex  justify-between items-end h-full w-[100%] pr-[1em] pt-[1em] text-3xl pb-[1em] cursor-pointer xl:hidden "
          onClick={() => setToggle(!toggle)}
        >
          <div>
            <div className="flex items-center text-3xl cursor-pointer">
              <HiOutlineAcademicCap />
              <h1 style={{ fontWeight: 700 }}>EDUKATE</h1>
            </div>
          </div>
          <div>
            <AiOutlineMenu />
          </div>
        </div>
      )}

      {/* Mobile Navigation */}
    </>
  );
};

export default Navbar;
