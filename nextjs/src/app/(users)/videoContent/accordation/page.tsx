"use client";
import React, { useEffect, useState } from "react";
import Image from 'next/image';
import TaskDropdown from "../taskDropdown/page";
import FileUploadButton from "../fileUpload/page";

interface AccordionProps {
  question: string;
  answer: string;
  task: string;
  objectOptions: string;
  openDropdown: string | null;
  setOpenDropdown: React.Dispatch<React.SetStateAction<string | null>>; //used to dispatch a new state value
}

export const questionsAnswersTaskAndObject = [
  {
    question: "Getting Started (12 min)",
    answerOptions: [
      "1. Introduction (0.53)",
      "2. Course Overview Don't Skip this Lecture (8.00)",
      "3. FAQ- Frequently Asked Questions (0.26)",
      "4. Course Set-Up and Installation (5.42)",
      "5. Notes on Updates Versions of Django (1.17)",
    ],
    task:'Task 1',
    objectOptions:'Create simple form using HTML'
  },
  {
    question: "HTML Level 1 Basics (13 min)",
    answerOptions: [
      "1. Introduction (0.50)",
      "2. HTML Documents (3.00)",
      "3. HTML Headings (2.53)",
      "4. HTML Paragraphs (1.40)",
      "5. HTML Link (2.47)",
      "6. HTML Images (1.50)",
    ],
    task:'Task 2',
    objectOptions:'Create simple form using HTML'
  },
  {
    question: "HTML Level 2 Advanced (14 min)",
    answerOptions: [
      "1. Tabels (1.00)",
      "2. Columns, Headers, Footers (4.40)",
      "3. HTML Forms Input Types (2.20)",
      "4. HTML Forms Attributes & Data Lists (2.25)",
      "5. Embedded Content (3.35)",
    ],
    task:'Task 3',
    objectOptions:'Create simple form using HTML'
  },
  {
    question: "CSS Level 1 Basics (13 min)",
    answerOptions: [
      "1. Introduction (0.50)",
      "2. HTML Documents (3.00)",
      "3. HTML Headings (2.53)",
      "4. HTML Paragraphs (1.40)",
      "5. HTML Link (2.47)",
      "6. HTML Images (1.50)",
    ],
    task:'Task 4',
    objectOptions:'Create simple form using HTML'
  },
  {
    question: "CSS Level 2 Advanced (14 min)",
    answerOptions: [
      "1. Introduction (0.50)",
      "2. HTML Documents (3.00)",
      "3. HTML Headings (2.53)",
      "4. HTML Paragraphs (1.40)",
      "5. HTML Link (2.47)",
      "6. HTML Images (1.50)",
    ],
    task:'Task 5',
    objectOptions:'Create simple form using HTML'
  },
  {
    question: "Capstone Project One (15 min)",
    answerOptions: [
      "1. Introduction (0.50)",
      "2. HTML Documents (3.00)",
      "3. HTML Headings (2.53)",
      "4. HTML Paragraphs (1.40)",
      "5. HTML Link (2.47)",
      "6. HTML Images (1.50)",
    ],
    task:'Task 6',
    objectOptions:'Create simple form using HTML'
  },
  {
    question: "Bootstrap Overview (14 min)",
    answerOptions: [
      "1. Introduction (0.50)",
      "2. HTML Documents (3.00)",
      "3. HTML Headings (2.53)",
      "4. HTML Paragraphs (1.40)",
      "5. HTML Link (2.47)",
      "6. HTML Images (1.50)",
    ],
    task:'Task 7',
    objectOptions:'Create simple form using HTML'
  },
  {
    question: "JavaScript Level 1 Basics (14 min)",
    answerOptions: [
      "1. Introduction (0.50)",
      "2. HTML Documents (3.00)",
      "3. HTML Headings (2.53)",
      "4. HTML Paragraphs (1.40)",
      "5. HTML Link (2.47)",
      "6. HTML Images (1.50)",
    ],
    task:'Task 8',
    objectOptions:'Create simple form using HTML'
  },
  {
    question: "JavaScript Level 2 Advanced (14 min)",
    answerOptions: [
      "1. Introduction (0.50)",
      "2. HTML Documents (3.00)",
      "3. HTML Headings (2.53)",
      "4. HTML Paragraphs (1.40)",
      "5. HTML Link (2.47)",
      "6. HTML Images (1.50)",
    ],
    task:'Task 9',
    objectOptions:'Create simple form using HTML'
  },
  {
    question: "DOM Basics (14 min)",
    answerOptions: [
      "1. Introduction (0.50)",
      "2. HTML Documents (3.00)",
      "3. HTML Headings (2.53)",
      "4. HTML Paragraphs (1.40)",
      "5. HTML Link (2.47)",
      "6. HTML Images (1.50)",
    ],
    task:'Task 10',
    objectOptions:'Create simple form using HTML'
  },
  {
    question: "DOM Advanced (14 min)",
    answerOptions: [
      "1. Introduction (0.50)",
      "2. HTML Documents (3.00)",
      "3. HTML Headings (2.53)",
      "4. HTML Paragraphs (1.40)",
      "5. HTML Link (2.47)",
      "6. HTML Images (1.50)",
    ],
    task:'Task 11',
    objectOptions:'Create simple form using HTML'
  },
  {
    question: "Back-End Introduction (14 min)",
    answerOptions: [
      "1. Introduction (0.50)",
      "2. HTML Documents (3.00)",
      "3. HTML Headings (2.53)",
      "4. HTML Paragraphs (1.40)",
      "5. HTML Link (2.47)",
      "6. HTML Images (1.50)",
    ],
    task:'Task 12',
    objectOptions:'Create simple form using HTML'
  },
  {
    question: "Python Level 1 (14 min)",
    answerOptions: [
      "1. Introduction (0.50)",
      "2. HTML Documents (3.00)",
      "3. HTML Headings (2.53)",
      "4. HTML Paragraphs (1.40)",
      "5. HTML Link (2.47)",
      "6. HTML Images (1.50)",
    ],
    task:'Task 13',
    objectOptions:'Create simple form using HTML'
  },
  {
    question: "Python Level 2 (14 min)",
    answerOptions: [
      "1. Introduction (0.50)",
      "2. HTML Documents (3.00)",
      "3. HTML Headings (2.53)",
      "4. HTML Paragraphs (1.40)",
      "5. HTML Link (2.47)",
      "6. HTML Images (1.50)",
    ],
    task:'Task 14',
    objectOptions:'Create simple form using HTML'
  },
  {
    question: "Django Basics (14 min)",
    answerOptions: [
      "1. Introduction (0.50)",
      "2. HTML Documents (3.00)",
      "3. HTML Headings (2.53)",
      "4. HTML Paragraphs (1.40)",
      "5. HTML Link (2.47)",
      "6. HTML Images (1.50)",
    ],
    task:'Task 15',
    objectOptions:'Create simple form using HTML'
  },
  {
    question: "Django Advanced (14 min)",
    answerOptions: [
      "1. Introduction (0.50)",
      "2. HTML Documents (3.00)",
      "3. HTML Headings (2.53)",
      "4. HTML Paragraphs (1.40)",
      "5. HTML Link (2.47)",
      "6. HTML Images (1.50)",
    ],
    task:'Task 16',
    objectOptions:'Create simple form using HTML'
  },
  {
    question: "Django Depolyment (14 min)",
    answerOptions: [
      "1. Introduction (0.50)",
      "2. HTML Documents (3.00)",
      "3. HTML Headings (2.53)",
      "4. HTML Paragraphs (1.40)",
      "5. HTML Link (2.47)",
      "6. HTML Images (1.50)",
    ],
    task:'Task 17',
    objectOptions:'Create simple form using HTML'
  },
  {
    question: "Customizing the Django (14 min)",
    answerOptions: [
      "1. Introduction (0.50)",
      "2. HTML Documents (3.00)",
      "3. HTML Headings (2.53)",
      "4. HTML Paragraphs (1.40)",
      "5. HTML Link (2.47)",
      "6. HTML Images (1.50)",
    ],
    task:'Task 18',
    objectOptions:'Create simple form using HTML'
  },
  // Add more questions and answer options as needed
];


const Accordion: React.FC<AccordionProps> = ({ question, answer,task, objectOptions,openDropdown, setOpenDropdown }) => {
  const [isOpenQuestion, setIsOpenQuestion] = useState(false);
  const [isOpenTask, setIsOpenTask] =useState(false);

  const toggleAccordionQ = () =>{
    setIsOpenQuestion(!isOpenQuestion);
    setIsOpenTask(false);
  };

  const toggleAccordionT = () =>{
    setIsOpenTask(!isOpenTask);
    setIsOpenQuestion(false);
  }

  useEffect(()=>{
    //if another dropdown is opened, close this dropdown
    if(openDropdown && openDropdown !== question ) {
      setIsOpenQuestion(false);
    }
  },[openDropdown, question]);

  useEffect (()=>{
    if (openDropdown && openDropdown !== task) {
      setIsOpenTask(false);
    }
  },[openDropdown,task]);

  return (
    <div className="  bg-white border-neutral-200 ">
      <div
        className=" bg-Cstone flex-shrink-0 flex items-center justify-between px-4 b cursor-pointer"
        onClick={()=>{
          toggleAccordionQ();
          setOpenDropdown(isOpenQuestion ? null :question);
        }}
      >
        <span className=" text-slate-900 text-[15px] text-md leading-[38px]">
          {question}
        </span>
        <svg
          className={`h-6 w-6 text-gray-500 transition-transform transform ${
            isOpenQuestion ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </div>
      {isOpenQuestion && (
        <div>
          {" "}
          <div className="py-0 text-left text-zinc-800 text-sm font-normal leading-tight">
            {answer.split("\n").map((option, index) => (
              <div key={index} className={`ml-0 ${index !== 0 ? "" : "" }`}>
                {/*Add svg icon code */}
                <div className="flex hover:bg-Cblue py-2 pl-2">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="Iconsax/Bold/youtube">
                    <path
                      id="Vector"
                      d="M11.3334 2.6665H4.66671C2.66671 2.6665 1.33337 3.99984 1.33337 5.99984V9.99984C1.33337 11.9998 2.66671 13.3332 4.66671 13.3332H11.3334C13.3334 13.3332 14.6667 11.9998 14.6667 9.99984V5.99984C14.6667 3.99984 13.3334 2.6665 11.3334 2.6665ZM9.26004 8.6865L7.61337 9.67317C6.94671 10.0732 6.40004 9.7665 6.40004 8.9865V7.0065C6.40004 6.2265 6.94671 5.91984 7.61337 6.31984L9.26004 7.3065C9.89337 7.69317 9.89337 8.3065 9.26004 8.6865Z"
                      fill="#333333"
                    />
                  </g>
                </svg>

                {option}

                </div>
                </div>
            ))}
          </div>
        </div>
      )}
  <div
        className=" bg-Cstone flex-shrink-0 flex items-center justify-between px-4 b cursor-pointer"
        onClick={()=>{
          toggleAccordionT();
          setOpenDropdown(isOpenTask ? null :task);
        }}
      >
        <span className=" text-slate-900 text-[15px] text-md leading-[38px]">
          {task}
        </span>
        <svg
          className={`h-6 w-6 text-gray-500 transition-transform transform ${
            isOpenTask ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </div>
      {isOpenTask && (
      <div>
        <TaskDropdown task={task} objectOptions={objectOptions}/>
        </div>
     )}
    </div>
  );
};

export default Accordion;