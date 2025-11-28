"use client";

import ServiceCard from "@/components/ServiceCard";
import { services } from "@/constants/services";
import Image from "next/image";
import { steps } from "@/constants/steps";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <>
      {/* Header Section */}
      <section
        className="bg-linear-to-r from-[#003f78] to-[#0562b8] mt-5 text-white py-16 px-4 md:px-10"

      >
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Services</h1>
          <p className="text-lg mb-4">
            We go above and beyond to provide exceptional service
          </p>
          <p className="text-sm text-blue-100">
            Home <span className="text-white">/ Services</span>
          </p>
        </div>
      </section>

      {/* MAIN SERVICES SECTION */}
      <div className="bg-[#f5f7fa] px-6 py-20">
        <div className="max-w-7xl flex mx-auto flex-col items-center justify-center">
          {/* SECTION TITLE */}
          <h1
            className="text-3xl md:text-4xl font-extrabold text-[#003f78] text-center mb-12 relative drop-shadow-[0_3px_8px_rgba(0,63,120,0.35)] inline-block mx-auto"
            data-aos="fade-up"
          >
            Our Services
            <span className="absolute left-1/2 -bottom-2 -translate-x-1/2 w-20 h-[3px] bg-[#003f78] rounded-full"></span>
          </h1>

          {/* SERVICES GRID */}
          <div className="grid md:grid-cols-4 gap-10">
            {services.map((service, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  link={service.link}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* STEPS SECTION */}
      <section
        className="w-full py-20 bg-linear-to-r from-[#003f78] to-[#005bb5] relative overflow-hidden"
        data-aos="fade-up"
      >
        <div className="relative max-w-7xl mx-auto px-6 text-center flex flex-col items-center">
          {/* TITLE */}
          <h2
            className="text-3xl md:text-4xl font-bold text-white mb-16"
            data-aos="fade-up"
          >
            Simple Steps to Book Your Next Pickup
          </h2>

          {/* STEPS GRID */}
          <div className="grid md:grid-cols-4 gap-10 text-white">
            {steps.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center"
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                <span className="bg-white text-[#003f78] font-bold px-4 py-1 rounded-full mb-4">
                  STEP {item.step}
                </span>

                <h3 className="font-semibold text-lg">{item.title}</h3>

                <p className="text-sm opacity-90 mt-2 text-center max-w-xs">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA BUTTON */}
          <button
            className="mt-12 bg-white text-[#003f78] font-semibold px-10 py-4 rounded-full shadow-lg border-2 border-white hover:bg-[#003f78] hover:text-white transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            SCHEDULE PICKUP
          </button>
        </div>
      </section>
    </>
  );
};

export default Services;
