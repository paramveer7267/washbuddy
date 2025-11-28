"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactPage = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="min-h-dvh mt-5 bg-gray-50 text-gray-800">
      {/* HEADER SECTION — unchanged */}
      <section className="bg-linear-to-r from-[#003f78] to-[#0562b8] text-white py-16 px-4 md:px-10 shadow-lg">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg mb-4 text-blue-100">
            We’re here to help! Reach out anytime.
          </p>
          <p className="text-sm text-blue-200">
            Home <span className="text-white">/ Contact</span>
          </p>
        </div>
      </section>

      {/* MAIN SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        {/* TITLE (same style as Services, Blogs, Locations) */}
        <h2
          className="text-3xl md:text-4xl font-extrabold text-[#003f78] text-center mb-16 relative drop-shadow-[0_3px_8px_rgba(0,63,120,0.35)]"
          data-aos="fade-up"
        >
          Get in Touch
          <span className="block mx-auto mt-2 w-20 h-[3px] bg-[#003f78] rounded-full"></span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* CONTACT FORM */}
          <div
            className="bg-white rounded-3xl shadow-md p-8"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h2 className="text-2xl font-bold text-[#003f78] mb-4">
              Send us a Message
            </h2>
            <p className="text-gray-600 mb-8">
              Fill out the form below and we will get back to you soon.
            </p>

            <form className="space-y-5">
              <div>
                <label className="text-sm font-semibold text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full mt-2 px-4 py-3 border rounded-xl focus:outline-none focus:ring focus:ring-blue-300"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full mt-2 px-4 py-3 border rounded-xl focus:outline-none focus:ring focus:ring-blue-300"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full mt-2 px-4 py-3 border rounded-xl focus:outline-none focus:ring focus:ring-blue-300"
                  placeholder="+123 456 7890"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-700">
                  Message
                </label>
                <textarea
                  className="w-full mt-2 px-4 py-3 border rounded-xl focus:outline-none focus:ring focus:ring-blue-300 h-32 resize-none"
                  placeholder="Write your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#003f78] text-white font-semibold rounded-xl hover:bg-[#0257a5] transition-all"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* CONTACT INFORMATION */}
          <div className="space-y-10">
            <div
              className="bg-white rounded-3xl shadow-md p-8"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h2 className="text-2xl font-bold text-[#003f78] mb-4">
                Contact Info
              </h2>

              <p className="text-gray-700 mb-3">
                📧 <span className="font-semibold">Email:</span>{" "}
                contact@washbud.com.au
              </p>

              <p className="text-gray-700 mb-3">
                📍 <span className="font-semibold">Perth:</span> Western
                Australia
              </p>

              <p className="text-gray-700 mb-3">
                📍 <span className="font-semibold">Melbourne:</span> Victoria,
                Australia
              </p>

              <p className="text-gray-700">
                🕒 <span className="font-semibold">Working Hours:</span>
                Mon–Sat, 9AM – 7PM
              </p>
            </div>

            {/* MAP */}
            <div
              className="rounded-3xl overflow-hidden shadow-md h-72"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2689.631271548592!2d115.857048!3d-31.952312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a32bad9874e9e2f%3A0x504f0b535df4b70!2sPerth%20WA%2C%20Australia!5e0!3m2!1sen!2sin!4v1709905550000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
