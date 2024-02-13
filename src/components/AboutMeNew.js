import React from "react";
import { Link } from "react-scroll";

const AboutMeNew = () => {
  return (
    <div
      className="container block mx-auto min-h-[520px] lg:h-full dark:text-white "
      id="Aboutme"
    >
      <h1 className=" text-3xl py-4 lg:py-8 text-sky-500 text-center font-bold">
        About Me
      </h1>
      <div className="w-[80%] lg:max-w-[900px] h-full  flex flex-wrap mx-auto ">
        <div className="w-full  md:w-1/3 flex justify-center">
          <img
            src="images/jasabout.jpg"
            alt="jasmine's pic"
            className="hidden lg:block object-cover w-[300px] h-[450px] lg:w-[300px] lg:h-[450px]"
          />
        </div>
        <div className="w-full md:w-2/3 relative ">
          <img
            src="images/pink.png"
            alt="pink smoke"
            className="opacity-20 absolute lg:left-[90px] left-[70px]  inset-0 z-10 bg-blend-multiply"
          />
          <div className="px-3 lg:px-10 text-[16px] absolute z-20  lg:text-lg pt-2 lg:pt-10 first-letter:text-sky-500 first-letter:pl-10">
            I'm skilled at working with teams, fostering positive relationships,
            and communicating effectively. I'm a team player who values
            everyone's input and contributes actively to discussions. My
            creative mindset helps me approach problems in unique ways, leading
            to inventive solutions. I believe that strong interpersonal skills
            are key to successful partnerships and crucial for project success.
            <ul className="list-disc marker:text-sky-500 pl-10 pt-5">
              <li>Leadership Ability</li>
              <li>Creative Thinking</li>
              <li>Problem Solving</li>
              <li>Planning & Organizing</li>
            </ul>
            <div className="flex justify-around ">
              <Link
                to="Resume"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                <button className="mt-[20px] text-[18px] w-[150px] p-2  hover:scale-x-105  shadow-2xl shadow-sky-400 bg-gradient-to-r rounded-full text-white from-sky-400 to-sky-600">
                  Know more
                </button>
              </Link>
            </div>
            <div className="hidden lg:block absolute top-[26rem] left-[85%]  w-[18rem] h-[10rem] bg-sky-200 rounded-full  blur-2xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeNew;
