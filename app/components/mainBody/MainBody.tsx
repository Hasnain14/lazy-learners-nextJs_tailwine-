import React from "react";
import CourseShow from "../courseShow/CourseShow";
import courseData from "../../fakeData/fakeData.json";
import Link from "next/link";
import { CourseShowProps } from "../courseShow/types";

const MainBody = () => {
  const rand = [];
  for (let i = 0; i < 3; i++) {
    let r = Math.floor(Math.random() * 20);
    if (rand.indexOf(r) === -1) {
      rand[i] = r;
    } else {
      rand[i] = r + 1;
    }
  }

  return (
    <div>
      <div>
        <h1 className="text-center text-3xl font-bold p-4">
          A broad selection of courses
        </h1>
        <p className="pl-8 text-center">
          Choose from over 210,000 online video courses with new additions
          published every month
        </p>
      </div>
      <div className="p-10 flex flex-wrap gap-6 justify-center">
        {rand.map((i) => {
          const { course_name, description, images, name, price } = courseData[
            i
          ] as CourseShowProps;
          return (
            <CourseShow
              key={i}
              price={price}
              name={name}
              images={images}
              description={description}
              course_name={course_name}
            ></CourseShow>
          );
        })}
      </div>
      <div className="pb-5 flex justify-center">
        <Link href="\course">
          <button className="btn btn-primary m-auto h-[1rem]">
            {"View All >> "}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MainBody;
