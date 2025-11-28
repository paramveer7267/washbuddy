import Link from "next/link";

const Hero = () => {
  const user = false;
  return (
    <section
      className="w-full min-h-dvh bg-cover"
      style={{ backgroundImage: "url('/hero.webp')" }}
    >
      {/* LEFT → RIGHT BLUR OVERLAY */}
      <div className="min-h-dvh flex items-center relative">
        <div
          className="absolute inset-0 
          bg-linear-to-r from-black/60 via-black/20 to-black/5"
        />

        <div className="relative max-w-7xl md:mx-10 px-6 flex flex-col gap-6 text-left">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white">
            Laundry <span className="text-[#003f78]">Made</span> Easy.
          </h1>

          <p className="mt-2 text-lg text-gray-200 max-w-2xl">
            Fast, reliable laundry pickup & delivery service. Fresh, folded and
            delivered to your doorstep.
          </p>

          <div className="mt-6 flex gap-4">
            <Link
              href={user ? "/" : "/auth/login"}
              className="bg-[#003f78] text-white font-semibold px-6 py-3 rounded-3xl 
             border-2 border-[#003f78]
             hover:bg-gray-200 hover:text-[#003f78]
             hover:border-[#003f78]
             transition-all duration-600"
            >
              Schedule Pickup
            </Link>

            <Link
              href={"/services"}
              className="border hover:scale-105 transition-transform duration-300 border-gray-400 text-gray-700 font-semibold px-6 py-3 rounded-3xl bg-white"
            >
              View Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
