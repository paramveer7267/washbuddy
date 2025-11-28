"use client";
import Blogs from "@/sections/Blogs";
import Hero from "@/sections/Hero";
import Reviews from "@/sections/Reviews";
import Services from "@/sections/Services";
import WhyUs from "@/sections/WhyUs";
import Locations from "@/sections/Locations";
import Faq from "@/sections/Faq";
import Contact from "@/sections/Contact";
const page = () => {
  return (
    <div>
      <Hero />
      <Services />
      <WhyUs />
      <Blogs />
      <Locations />
      <Reviews />
      <Faq />
      <Contact />
    </div>
  );
};

export default page;
// #003f78 - button
// bg-[#f5f7fa] - section background
