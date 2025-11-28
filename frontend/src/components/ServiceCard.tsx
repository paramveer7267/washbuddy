import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  //   icon: string; // image path
  link?: string;
}

const ServiceCard = ({ title, description, link }: ServiceCardProps) => {
  return (
    <>
      <div className="bg-white shadow-md rounded-xl p-8 text-center border border-gray-200 hover:shadow-lg transition-all duration-300">
        {/* ICON */}
        {/* <div className="flex justify-center mb-4">
        <Image src={icon} alt={title} className="w-20 h-20" />
        </div> */}

        {/* TITLE */}
        <h2 className="text-xl font-semibold text-[#003f78] mb-2">{title}</h2>

        {/* DESCRIPTION */}
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>

        {/* BUTTON */}
        <Link
          href={link || "#"}
          className="inline-block mt-6 bg-[#003f78] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-white hover:text-[#003f78] border-2 border-[#003f78] transition-all duration-600"
        >
          VIEW MORE
        </Link>
      </div>
    </>
  );
};

export default ServiceCard;
