"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { blogPosts } from "@/constants/blogs";

const Blogs = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <>
      <div className="min-h-dvh bg-gray-50 text-gray-800">
        {/* BLOG SECTION */}
        <section className="px-6 py-20">
          <div className="max-w-7xl mx-auto flex flex-col items-center">
            {/* TITLE */}
            <h2
              className="text-3xl md:text-4xl font-extrabold text-[#003f78] text-center mb-12 relative drop-shadow-[0_3px_8px_rgba(0,63,120,0.35)] inline-block mx-auto"
              data-aos="fade-up"
            >
              Latest Blog Posts
              <span className="block mx-auto mt-2 w-20 h-[3px] bg-[#003f78] rounded-full"></span>
            </h2>

            {/* BLOG GRID */}
            <div className="grid md:grid-cols-3 gap-12">
              {blogPosts.map((blog, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  {/* IMAGE */}
                  <div className="h-56 w-full overflow-hidden">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      width={500}
                      height={300}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#003f78] mb-2">
                      {blog.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
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
          </div>
        </section>
      </div>
    </>
  );
};

export default Blogs;
