const Locations = () => {
  return (
    <>
      <div className="min-h-dvh bg-gray-50 text-gray-800">
       
        <section className="bg-[#f5f7fa] px-6 py-20">
          <div className="max-w-7xl mx-auto flex flex-col items-center">
            {/* TITLE */}
            <h1 className="text-3xl md:text-4xl font-extrabold text-[#003f78] text-center mb-12 relative drop-shadow-[0_3px_8px_rgba(0,63,120,0.35)] inline-block mx-auto">
              Our Locations
              <span className="absolute left-1/2 -bottom-2 -translate-x-1/2 w-20 h-[3px] bg-[#003f78] rounded-full"></span>
            </h1>

            {/* EMAIL */}
            <p className="text-lg text-[#003f78] font-semibold mb-10">
              Contact us at:{" "}
              <span className="underline">contact@washbud.com.au</span>
            </p>

            {/* LOCATIONS GRID */}
            <div className="grid md:grid-cols-2 gap-12 w-full">
              {/* PERTH */}
              <div className="bg-white rounded-2xl shadow-md p-6">
                <h2 className="text-2xl font-bold text-[#003f78] mb-4">
                  Perth
                </h2>
                <div className="rounded-xl overflow-hidden w-full h-72 border">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2689.631271548592!2d115.857048!3d-31.952312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a32bad9874e9e2f%3A0x504f0b535df4b70!2sPerth%20WA%2C%20Australia!5e0!3m2!1sen!2sin!4v1709905550000"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                  ></iframe>
                </div>
              </div>

              {/* MELBOURNE */}
              <div className="bg-white rounded-2xl shadow-md p-6">
                <h2 className="text-2xl font-bold text-[#003f78] mb-4">
                  Melbourne
                </h2>
                <div className="rounded-xl overflow-hidden w-full h-72 border">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.834140108986!2d144.963058!3d-37.813629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d0d82466e0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sin!4v1709905666000"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Locations;
