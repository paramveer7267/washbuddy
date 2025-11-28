"use client";

import Image from "next/image";
import { reviews } from "@/constants/reviews";

const Reviews = () => {
  return (
    <section className="bg-[#f5f7fa] px-6 py-20">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* TITLE */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#003f78] text-center mb-12 relative drop-shadow-[0_3px_8px_rgba(0,63,120,0.35)] inline-block mx-auto">
          Customer Reviews
          <span className="absolute left-1/2 -bottom-2 -translate-x-1/2 w-20 h-[3px] bg-[#003f78] rounded-full"></span>
        </h1>

        {/* REVIEWS GRID */}
        <div className="grid md:grid-cols-3 gap-10 w-full">
          {reviews.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                {/* Avatar */}
                {item.avatar && (
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    width={60}
                    height={60}
                    className="rounded-full border"
                  />
                )}
                <div>
                  <h3 className="font-semibold text-lg text-[#003f78]">
                    {item.name}
                  </h3>

                  {/* STAR RATING */}
                  <div className="flex">
                    {Array(item.rating)
                      .fill(0)
                      .map((_, i) => (
                        <span key={i} className="text-yellow-400 text-xl">
                          ★
                        </span>
                      ))}
                  </div>
                </div>
              </div>

              {/* REVIEW TEXT */}
              <p className="text-gray-700 leading-relaxed">{item.review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
