import React from "react";
import "./events.css";

const Events = () => {
  return (
    <div className="pl-[1em] pr-[1em] mt-[4em] mb-[2em]">
      <div className="text-center mb-[4em]">
        <h1 className="text-3xl">BLOG & EVENTS</h1>
        <p className="text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero alias
          rem beatae debitis sit aliquid doloremque nihil sunt minus adipisci?
        </p>
      </div>

      <div></div>

      {/* wrapper */}
      <div className="flex flex-col lg:flex-row gap-[1em]">
        {/*  */}
        <div className="flex gap-6">
          <div
            className="text-xl text-slate-700"
            style={{ lineHeight: "1em", fontWeight: "800" }}
          >
            <p>15</p>
            <p>Mar.</p>
          </div>
          <div>
            <div
              style={{ lineHeight: "0.5em", fontWeight: "600" }}
              className="text-xl text-black"
            >
              <p>Career Talk</p>
              <p>Open Air Session</p>
            </div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
              perspiciatis impedit aut sit consectetur ducimus reprehenderit,
              optio, numquam nesciunt, laudantium maxime sed soluta esse eaque
              magni ex suscipit enim aliquam? Atque doloremque voluptatem beatae
              nam.
            </div>
            <span>Read More</span>
          </div>
        </div>
        {/*  */}
        <div className="flex gap-6">
          <div
            className="text-xl text-slate-700"
            style={{ lineHeight: "1em", fontWeight: "800" }}
          >
            <p>16</p>
            <p>Mar.</p>
          </div>
          <div>
            <div
              style={{ lineHeight: "0.5em", fontWeight: "600" }}
              className="text-xl text-black"
            >
              <p>Sports Day</p>
              <p>Regional Championship</p>
            </div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
              perspiciatis impedit aut sit consectetur ducimus reprehenderit,
              optio, numquam nesciunt, laudantium maxime sed soluta esse eaque
              magni ex suscipit enim aliquam? Atque doloremque voluptatem beatae
              nam.
            </div>
            <span>Read More</span>
          </div>
        </div>
        {/*  */}
        <div className="flex gap-6">
          <div
            className="text-xl text-slate-700"
            style={{ lineHeight: "1em", fontWeight: "800" }}
          >
            <p>18</p>
            <p>Mar.</p>
          </div>
          <div>
            <div
              style={{ lineHeight: "0.5em", fontWeight: "600" }}
              className="text-xl text-black"
            >
              <p>Zusha FM</p>
              <p>Number one Station</p>
            </div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
              perspiciatis impedit aut sit consectetur ducimus reprehenderit,
              optio, numquam nesciunt, laudantium maxime sed soluta esse eaque
              magni ex suscipit enim aliquam? Atque doloremque voluptatem beatae
              nam.
            </div>
            <span>Read More</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
