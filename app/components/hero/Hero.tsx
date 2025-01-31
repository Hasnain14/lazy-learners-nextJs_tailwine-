import React from "react";
import Image from "next/image";
import test from "../../../public/heroImage.png";

// const test = "/heroImage.png";

const HeroSection = () => {
  return (
    <div>
      <div className="hero min-h-fit ">
        <div className="hero-content flex-col lg:flex-row-reverse p-0">
          <Image
            className="max-w-sm  rounded-lg shadow-2xl"
            src={test}
            alt="Hero Image"
          />
          <div className="w-full md:w-1/2 px-4 text-center md:text-left">
            <h1 className=" text-xl md:text-2xl lg:text-4xl font-bold">
              Learn without limits
            </h1>
            <p className="py-4">
              Start, switch, or advance your career with more than 5,800
              courses, Professional Certificates, and degrees from world-class
              universities and companies.
            </p>
            <button className="btn btn-primary w-full md:w-auto">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
