"use client";
import Image from "next/image";
//import Link from "next/link";
//import Accordion from "./course/types/page";
import React, { useState } from "react";
import Accordion, { questionsAnswersTaskAndObject } from "../accordation/page";
//import AboutCourse from "./aboutCourse/page";
import img from "../../../../../public/images/Full Screen.png";
import AboutCourse from "../aboutCourse/page";
import QnaPage from "../QnaPage/page"
import TaskDropdown from "../taskDropdown/page";

const ParentComponent: React.FC = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [showAboutCourse, setShowAboutCourse] = useState(true);
  const [showQuestionAnswer, setShowQuestionAnswer] = useState(false);
  const [activeTab, setActiveTab]= useState(showAboutCourse ? 'AboutCourse' : 'QnaPage');


  const toggleAboutCourse = () => {
    setShowAboutCourse(true);
    setShowQuestionAnswer(false);
    setActiveTab('AboutCourse')

  };

  const toggleQuestionAnswer = () => {
    setShowQuestionAnswer(true);
    setShowAboutCourse(false);
    setActiveTab('QnaPage')
  };

  return (
    <div className="flex w-full">
      <div className="grid w-7/12 h-full justify-items-end">
        <div className="relative w-[676px] h-[391px] bg-black">
          {/*play button */}
          <div className="flex justify-center items-center h-full">
            <svg
              width="80"
              height="80"
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                id="Ellipse 10"
                opacity="0.5"
                cx="40"
                cy="40"
                r="40"
                fill="white"
              />
              {/*nest the polygon  <svg> inside the circle <svg> */}
              <svg
                width="27"
                height="32"
                viewBox="0 0 27 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                x="29"
                y="24"
              >
                <path
                  id="Polygon 2"
                  d="M27 16L0 31.5885V0.411543L27 16Z"
                  fill="white"
                />
              </svg>
            </svg>
          </div>
          <div className="absolute bottom-0 right-0 ">
            <Image src={img} alt="image" />
          </div>
        </div>
        {/* {/ course video title /} */}
        <div className="w-[676px] bottom-0 left-0 px-4 pb-2 bg-zinc-100">
          <div className="font-semibold text-zinc-800">
            Python and Django Full Stack Web Developer Bootcamp
          </div>
        </div>
        <div className="w-[676px]">
          <ul
            className="w-[676px] bg-White text-xl font-semibold text-slate-900 border-b-2 border-t-2 border-gray-300"
            id="defaultTab"
            data-tabs-toggle="#defaultTabContent"
            role="tablist"
          >
            <li
              className={`inline-block p-2 hover:text-white hover:bg-indigo-500
              ${activeTab === 'AboutCourse' && "bg-indigo-500 text-white"}`}
              onClick={toggleAboutCourse}
            >
              Overview
            </li>
            <li
              className={`mr-2 inline-block p-2 hover:text-white hover:bg-indigo-500
              ${activeTab === 'QnaPage' && "bg-indigo-500 text-white"}`}
              onClick={toggleQuestionAnswer}
            >
              Q & A{" "}
            </li>
          </ul>
          {showAboutCourse && <AboutCourse />}
          {showQuestionAnswer && <QnaPage />}
        </div>
      </div>

      <div className="flex-col w-5/12  ">
        <div className="flex w-[380px] bg-zinc-100 bg-opacity-95 border border-neutral-200 ">
          <h3 className="flex-auto px-3 py-3 text-lg font-semibold text-slate-900">
            Course Content
          </h3>
        </div>
        <div className="w-[380px] h-[900px] overflow-y-scroll ">
          <div className=" container">
            <div className="flex-none w-[360px]border border-neutral-200">
              {questionsAnswersTaskAndObject.map((item, index) => (
                <Accordion
                  key={index} 
                  question={item.question || ""}
                  answer={item.answerOptions.join("\n") || ""} 
                  task={item.task || ""}
                  objectOptions={item.objectOptions || ""}
                  openDropdown={openDropdown}
                  setOpenDropdown={setOpenDropdown}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ParentComponent;