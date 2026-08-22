"use client";

import { useState } from "react";

type Faq = {
  question: string;
  answer: string;
};

type FaqAccordionProps = {
  items: Faq[];
};

export function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div className="faq-item" key={item.question}>
            <button
              className={`faq-question${isOpen ? " active" : ""}`}
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              {item.question}
              <i className={`fas ${isOpen ? "fa-minus" : "fa-plus"}`} />
            </button>
            <div className="faq-answer" style={{ display: isOpen ? "block" : "none" }}>
              {item.answer}
            </div>
          </div>
        );
      })}
    </>
  );
}
