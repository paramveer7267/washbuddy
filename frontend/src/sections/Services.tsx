import ServiceCard from "@/components/ServiceCard";
import { services } from "@/constants/services";
import Image from "next/image";
import { steps } from "@/constants/steps";
const Services = () => {
  return (
    <>
      <div className=" bg-[#f5f7fa] px-6 py-20">
        <div className="max-w-7xl flex mx-auto flex-col items-center justify-center">
          {/* SECTION TITLE */}
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#003f78] text-center mb-12 relative drop-shadow-[0_3px_8px_rgba(0,63,120,0.35)] inline-block mx-auto">
            Our Services
            <span className="absolute left-1/2 -bottom-2 -translate-x-1/2 w-20 h-[3px] bg-[#003f78] rounded-full"></span>
          </h1>

          {/* SERVICES GRID */}
          <div className="grid md:grid-cols-4 gap-10">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                link={service.link}
              />
            ))}
          </div>
        </div>
      </div>
      {/* STEPS SECTION */}
      <section className="w-full py-20 bg-linear-to-r from-[#003f78] to-[#005bb5] relative overflow-hidden">
        {/* BUBBLE OVERLAY */}
        {/* <Image
        //   src="/bubbles.png"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
          alt="Bubble background"
        /> */}

        <div className="relative max-w-7xl mx-auto px-6 text-center flex flex-col items-center">
          {/* TITLE */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16">
            Simple Steps to Book Your Next Pickup
          </h2>

          {/* STEPS GRID */}
          <div className="grid md:grid-cols-4 gap-10 text-white">
            {steps.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <span className="bg-white text-[#003f78] font-bold px-4 py-1 rounded-full mb-4">
                  STEP {item.step}
                </span>

                {/* ICON (optional) */}
                {/* {item.icon && (
                  <Image src={item.icon} className="h-16 mb-4" alt={item.title} />
                )} */}

                <h3 className="font-semibold text-lg">{item.title}</h3>

                <p className="text-sm opacity-90 mt-2 text-center max-w-xs">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA BUTTON */}
          <button className="mt-12 bg-white text-[#003f78] font-semibold px-10 py-4 rounded-full shadow-lg border-2 border-white hover:bg-[#003f78] hover:text-white transition-all duration-300">
            SCHEDULE PICKUP
          </button>
        </div>
      </section>
    </>
  );
};

export default Services;
