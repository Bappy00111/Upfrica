import React, { useState } from "react";

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const QuestionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full md:w-2/5 mx-auto  space-y-2">
        <hr />
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={toggleOpen}
      >
        <span className="text-xl  font-bold">{question}</span>
        <span>
          {isOpen ? (
            <IoIosArrowUp className="text-3xl" />
          ) : (
            <IoIosArrowDown className="text-3xl" />
          )}
        </span>
      </div>
      <div
        className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="mt-4 text-xl">{answer}</div>
      </div>
      
    </div>
  );
};

const Questions = () => {
  const faqData = [
    {
      question: "Is there a setup fee or a subscription fee?",
      answer: "Is there a setup fee or a subscription fee?",
    },
    {
      question: "How will I know when my item is sold?",
      answer:
        " You will receive an email notification providing the order details so you can process and dispatch the order.",
    },
    {
      question: "How will I get paid when my item is sold?",
      answer:
        "We will pay to your momo/bank account immediately after the customer has received their item.",
    },
  ];

  return (
    <div>
      <div className=" py-10 space-y-6 px-6">
        <div className="flex justify-center items-center gap-4 font-bold tracking-wide text-xl">
            <p>Selling</p>
            <p>Buying</p>
            
        </div>
        {faqData.map((item, index) => (
          <QuestionItem
            key={index}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </div>
    </div>
  );
};

export default Questions;
