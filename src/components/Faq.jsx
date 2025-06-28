import { useState } from "react";

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(0);
  console.log("this is faq");

  const FAQ = [
    {
      question: "What is the capital of France?",
      answer: "The capital of France is Paris.",
    },
    {
      question: "What is the capital of Germany?",
      answer: "The capital of Germany is Berlin.",
    },
    {
      question: "What is the capital of Italy?",
      answer: "The capital of Italy is Rome.",
    },
    {
      question: "What is the capital of Spain?",
      answer: "The capital of Spain is Madrid.",
    },
  ];

  return (
    <div style={{ backgroundColor: "lightgray", padding: "10px" }}>
      <h1>Frequently Asked Questions</h1>
      {FAQ.map((faq, index) => {
        return (
          <div
            key={index}
            style={{
              backgroundColor: "white",
              padding: 3,
              margin: 3,
            }}
            onClick={() => setActiveIndex(index)}
          >
            <h2>{faq.question}</h2>
            {activeIndex === index ? <p>{faq.answer}</p> : null}
          </div>
        );
      })}
    </div>
  );
}
