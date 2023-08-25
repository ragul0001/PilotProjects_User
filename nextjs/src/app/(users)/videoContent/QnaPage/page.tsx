"use client";
import { useState } from "react";

interface QnaItem {
  question: string;
  answer: string;
}

export const qnaData: QnaItem[] = [
  //q and a data
  // { question: "q",
  //  answer: "First you have to study html css then javascript " 
  // },
  // { question: "q",
  //  answer: "First you have to study html css then javascript " 
  // },
  // { question: "q",
  //  answer: "First you have to study html css then javascript " 
  // },
  // { question: "q",
  //  answer: "First you have to study html css then javascript " 
  // },
  // { question: "q",
  //  answer: "First you have to study html css then javascript " 
  // },
  // { question: "q",
  //  answer: "First you have to study html css then javascript " 
  // },

];
const initialQuestion = 5;
const incrementInitialQuestion = 4;

function QnaPage() {
  const [input, setInput] = useState("");
  const [submittedQuestions, setSubmittedQuestions] = useState<string[]>([]);
  const [showAnswer, setShowAnswer] = useState<number | undefined>(undefined);
  const [displayQuestion, setDisplayQuestion] = useState(initialQuestion);

  const handleShowMore = () => {
    setDisplayQuestion(displayQuestion + incrementInitialQuestion);
  };

    const handleShowLess = () => {
      const newIndex = Math.max(0, initialQuestion);
      setDisplayQuestion(newIndex);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSendQuestion = () => {
    if (input.trim() === "") return;
    setSubmittedQuestions([...submittedQuestions, input]);
    setInput("");
  };

  const handleShowAnswer = (index: number) => {
    setShowAnswer(showAnswer === index ? undefined : index);
  };

  return (
    <div className="qna-container flex-col">
      <div className="input-section">
        <div className="ask-new-question py-4 font-semibold">
          Ask New Question
        </div>
        <div className="input-container flex">
          <input
            className="w-[600px] h-[50px] border-2 pl-3"
            type="text"
            value={input}
            onChange={handleInputChange}
            placeholder="Type your question..."
          />
          <button
            className="mx-3 p-3 border-2 bg-indigo-400"
            onClick={handleSendQuestion}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="chat-section py-4 w-[640px]">
        <p className="font-semibold">All questions in this course</p>
        {submittedQuestions
        .slice()
        .reverse()
        .slice(0, displayQuestion)
        .map((question, index) => (
          <div key={index} className="question py-2">
            <div className="flex items-center">
              <p className="flex-grow">Qstn: {question}</p>
              <button
                className="answer"
                onClick={() => handleShowAnswer(index)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                  />
                </svg>
              </button>
            </div>
            {showAnswer === index && (
              <p className="mx-5 mt-2 font-normal text-gray-600">
                Ans: {qnaData[index]?.answer}
              </p>
            )}
            {/* {/ <p className="answer">{qnaData[index]?.answer}</p> /} */}
          </div>
        ))}
        <div className="flex justify-end">

          {displayQuestion <= submittedQuestions.length ? (
            <button className="py-6" onClick={handleShowMore}>
              Show More...
            </button>
          ):(
             displayQuestion !== initialQuestion && (
            <button className="py-6" onClick={handleShowLess}>
              Show Less...
            </button>
             )
          )}
        </div>
      </div>
    </div>
  );
}

export default QnaPage;