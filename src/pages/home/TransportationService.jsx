import { SiCoronaengine } from "react-icons/si";
import { MdElectricBolt } from "react-icons/md";

import { GiIronHulledWarship } from "react-icons/gi";

const transportationServices = [
  {
    title: "Engine Repairs",
    description:
      "Our team of experts specializes in diagnosing and repairing engine issues, ensuring your vessel operates at peak performance.",
    icon: <SiCoronaengine />,
  },
  {
    title: "Hull Repairs",
    description:
      "We provide comprehensive hull repair services, addressing structural damages and maintaining the integrity of your vessel.",
    icon: <GiIronHulledWarship />,
  },
  {
    title: "Electrical Repairs",
    description:
      "Our skilled technicians handle all electrical repair needs, from troubleshooting to complete system overhauls, ensuring safe and efficient operation.",
    icon: <MdElectricBolt />,
  },
];

const TransportationCard = ({ title, description, icon }) => {
  return (
    <div className="flex items-center gap-9 md:w-[400px] py-6 shadow-lg bg-white group hover:bg-primary hover:text-white transition ease-linear duration-200">
      <div className="group-hover:text-white text-primary text-6xl mb-3 border-gray-200 border-[1px] p-2">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-xl">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export const TransportationService = () => {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto grid md:grid-cols-3 grid-cols-1 justify-items-center p-4">
        {transportationServices.map((item, i) => (
          <TransportationCard key={i} {...item} />
        ))}
      </div>
    </div>
  );
};
