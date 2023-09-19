import React from "react";

const About = () => {
  return (
    <div className="pl-[1em] pr-[1em] pt-[2em]">
      {/* mission and vision */}
      <div className="bg-slate-900 p-[50px] text-white flex flex-col md:flex-row gap-[20px] justify-between rounded-md mb-[1em]">
        <div>
          <h1>Our Vision</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            sed architecto ipsum itaque deserunt. Architecto recusandae suscipit
            sint perferendis necessitatibus corporis quis eos obcaecati esse,
            praesentium voluptates, hic, ratione tenetur.
          </p>
        </div>
        <div className="h-[150px] w-[10px] bg-white rounded-lg hidden md:block" />
        <div>
          <h1>Our Mission</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia
            dolores tenetur repellat magnam impedit minus! Commodi, quasi!
            Explicabo velit vel eum amet excepturi illum sed laboriosam.
            Voluptates aliquid suscipit cupiditate.
          </p>
        </div>
      </div>
      {/* Pursuasion */}
      <div className="">
        <h1 className="text-2xl">Why Should You Choose Us ?</h1>
        {/* first */}
        <div className="flex flex-col md:flex-row gap-[2em] items-center mb-9 mt-6">
          <div className="flex-[0.4]">
            <img
              src="https://images.pexels.com/photos/6683580/pexels-photo-6683580.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
              className="rounded-md"
            />
          </div>
          <div className="flex-[0.6]">
            <h1>First Choice For High </h1>
            <h1>School Excellence</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
              nisi aliquam voluptate atque doloremque ipsum deserunt cum
              mollitia fugit. Nisi enim eum voluptas deserunt tenetur commodi
              perspiciatis voluptatum repellendus ad veritatis molestiae sit
              soluta, quos neque corrupti dolores, quasi labore animi vitae id
              provident consectetur dignissimos alias? Omnis, rem animi.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              facilis inventore molestias minus, consequuntur placeat, odit
              repellat, quam est a saepe voluptatibus dolores earum dolorem!
              Cumque deserunt perferendis voluptate itaque corrupti dolor esse
              saepe sequi iure facilis. Pariatur quaerat nostrum, esse
              laudantium fugiat deleniti illum totam quam? Quos, id fugit.
            </p>
          </div>
        </div>
        {/*  */}
        <div className="flex flex-col md:flex-row items-center">
          <div>
            <h1>Perfect Blend of Sports </h1>
            <h1>and Academic Excellence</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
              nisi aliquam voluptate atque doloremque ipsum deserunt cum
              mollitia fugit. Nisi enim eum voluptas deserunt tenetur commodi
              perspiciatis voluptatum repellendus ad veritatis molestiae sit
              soluta, quos neque corrupti dolores, quasi labore animi vitae id
              provident consectetur dignissimos alias? Omnis, rem animi.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
              nisi aliquam voluptate atque doloremque ipsum deserunt cum
              mollitia fugit. Nisi enim eum voluptas deserunt tenetur commodi
              perspiciatis voluptatum repellendus ad veritatis molestiae sit
              soluta, quos neque corrupti dolores, quasi labore animi vitae id
              provident consectetur dignissimos alias? Omnis, rem animi.
            </p>
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/262524/pexels-photo-262524.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
              className="rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
