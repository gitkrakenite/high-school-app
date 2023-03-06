import React from "react";
import "./courses.css";

const Courses = () => {
  return (
    <div className="pl-[1em] pr-[1em] mt-[1em]">
      <div className="mb-[2em]">
        <h1 className="text-2xl">What We Teach </h1>
        <p className="text-gray-500">
          Apart from the normal highschool 8-4-4 Curriculum we invest our
          knowledge and effort in equipping our students with the necessary soft
          skills and spiritual guidance to become all rounded Students
        </p>
      </div>

      <div className="coursesWrap">
        <div>
          <h1 className="text-2xl ml-1">8-4-4 Curriculum</h1>
          <img
            src="https://images.pexels.com/photos/5427868/pexels-photo-5427868.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
            className="w-full"
          />
          <p>
            In Kenya we have the current 8-4-4 system which demands that a
            student has to go through high school for 4 years. Subjects covered
            include Math, English, Kiswahili, Pick two in the following
            \(Biology, Physics, Chemistry) pick one (History and CRE) and lastly
            one of the following (Agriculture or Business)
          </p>
        </div>
        <div>
          <h1 className="text-2xl ml-1">IG Curriculum</h1>
          <img
            src="https://images.pexels.com/photos/6209801/pexels-photo-6209801.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi
            obcaecati aperiam nobis, pariatur quidem explicabo tenetur culpa a
            voluptates, repudiandae consequatur, ipsam in corrupti dolores quae
            quibusdam laudantium voluptatibus vitae veniam assumenda modi itaque
            mollitia nisi? Eveniet, asperiores. Facere, ab facilis? Distinctio
            sit, corporis sint, amet et nihil dolorum tempora nesciunt, ipsam
            est explicabo enim provident cumque reiciendis ab. Quos.
          </p>
        </div>
        <div>
          <h1 className="text-2xl ml-1">Value Based Education</h1>
          <img
            src="https://images.pexels.com/photos/7092613/pexels-photo-7092613.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi
            obcaecati aperiam nobis, pariatur quidem explicabo tenetur culpa a
            voluptates, repudiandae consequatur, ipsam in corrupti dolores quae
            quibusdam laudantium voluptatibus vitae veniam assumenda modi itaque
            mollitia nisi? Eveniet, asperiores. Facere, ab facilis? Distinctio
            sit, corporis sint, amet et nihil dolorum tempora nesciunt, ipsam
            est explicabo enim provident cumque reiciendis ab. Quos.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Courses;
