"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const blogPosts = [
  {
    title: "How to Keep Your Clothes Fresh and Clean",
    description:
      "Learn expert tips to maintain fabric quality and keep your clothes looking brand new.",
    image: "/blogs/blog1.jpg",
    author: "WashBud Team",
    date: "Jan 21, 2025",
  },
  {
    title: "Top 5 Laundry Mistakes to Avoid",
    description:
      "Most people make these common mistakes when washing clothes — avoid them easily.",
    image: "/blogs/blog2.jpg",
    author: "WashBud Experts",
    date: "Feb 2, 2025",
  },
  {
    title: "Why Professional Laundry Pickup Saves You Time",
    description:
      "Discover how laundry pickup services can save busy individuals hours every week.",
    image: "/blogs/blog3.jpg",
    author: "WashBud Team",
    date: "Feb 10, 2025",
  },
];

const Blogs = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <>
      <div className="min-h-dvh mt-5 bg-gray-50 text-gray-800">
        {/* HEADER SECTION */}
        <section className="bg-linear-to-r from-[#003f78] to-[#0562b8] text-white py-16 px-4 md:px-10">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Blogs</h1>
            <p className="text-lg mb-4">
              Stay updated with the latest tips, trends, and insights in laundry
            </p>
            <p className="text-sm text-blue-100">
              Home <span className="text-white">/ Blogs</span>
            </p>
          </div>
        </section>

        {/* BLOG SECTION */}
        <section className="px-6 py-24">
          <div className="max-w-7xl mx-auto flex flex-col">
            {/* TITLE */}
            <h2
              className="text-3xl md:text-4xl font-extrabold text-[#003f78] text-center mb-16 relative drop-shadow-[0_3px_8px_rgba(0,63,120,0.35)]"
              data-aos="fade-up"
            >
              Latest Blog Posts
              <span className="block mx-auto mt-3 w-24 h-[4px] bg-[#003f78] rounded-full"></span>
            </h2>

            {/* BLOG GRID */}
            <div className="grid md:grid-cols-3 gap-12">
              {blogPosts.map((blog, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 200}
                  className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                >
                  {/* IMAGE */}
                  <div className="h-60 w-full overflow-hidden">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      width={500}
                      height={300}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="p-6 flex flex-col justify-between h-56">
                    <h3 className="text-xl font-bold text-[#003f78] leading-tight mb-3">
                      {blog.title}
                    </h3>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {blog.description}
                    </p>

                    <div className="text-xs text-gray-500">
                      By{" "}
                      <span className="font-semibold text-[#003f78]">
                        {blog.author}
                      </span>{" "}
                      · {blog.date}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA BUTTON */}
            {/* <div className="mt-20 flex justify-center" data-aos="fade-up">
              <button className="px-10 py-4 bg-[#003f78] text-white font-semibold rounded-full shadow-lg hover:bg-[#0257a5] transition-all">
                View All Articles
              </button>
            </div> */}
          </div>
        </section>
      </div>
    </>
  );
};

export default Blogs;
