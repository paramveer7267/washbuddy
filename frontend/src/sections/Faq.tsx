"use client";

import React, { useState } from "react";

const faqData = [
  {
    question: "How does WashBud pickup & delivery work?",
    answer:
      "You schedule a pickup through our website. Our team arrives at the selected time, collects your laundry, processes it, and delivers it back fresh and clean.",
  },
  {
    question: "Do you charge extra for urgent delivery?",
    answer:
      "Yes, urgent deliveries have a small additional charge depending on location and service type.",
  },
  {
    question: "What areas do you currently serve?",
    answer:
      "We are currently operating in Perth and Melbourne, with more locations coming soon.",
  },
  {
    question: "How can I contact support?",
    answer: "You can reach our support team anytime at contact@washbud.com.",
  },
  {
    question: "Do you offer bulk or commercial laundry services?",
    answer:
      "Yes, we provide commercial laundry services for hotels, gyms, hostels, and corporate clients.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="min-h-dvh bg-gray-50 py-16 px-6">
      <div className="max-w-4xl mx-auto flex flex-col">
        {/* TITLE */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#003f78] text-center mb-8 relative drop-shadow-[0_3px_8px_rgba(0,63,120,0.35)] inline-block mx-auto">
          Frequently Asked Questions
          <span className="block mx-auto mt-2 w-20 h-[3px] bg-[#003f78] rounded-full"></span>
        </h1>
        <p className="text-center text-gray-600 mb-12">
          Find answers to the most common questions asked by our customers.
        </p>

        {/* FAQ ACCORDION */}
        <div className="space-y-5">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all"
            >
              {/* Question */}
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center p-5 text-left"
              >
                <span className="text-lg font-semibold text-[#003f78]">
                  {item.question}
                </span>

                <span
                  className={`text-2xl transition-transform ${
                    openIndex === index ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>

              {/* Answer */}
              {openIndex === index && (
                <div className="px-5 pb-5 text-gray-600 animate-fadeIn">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
