import { GiShipBow } from "react-icons/gi";
import { GiElectricalResistance } from "react-icons/gi";
import { SiWpengine } from "react-icons/si";
import { GiMechanicalArm } from "react-icons/gi";

const ShipRepairSolution = () => {
  const solutionCards = [
    {
      id: 1,
      icon: <GiShipBow className="text-primary text-3xl" />,
      title: "Hull Repairs",
      message:
        "From collision damage and grounding incidents to wear and tear from constant exposure to the elements, our team has the expertise to restore your hull's integrity and strength.",
    },
    {
      id: 2,
      icon: <GiElectricalResistance className="text-primary text-3xl" />,
      title: "Electrical Repairs",
      message:
        "Electrical issues can cause significant downtime. Our qualified electricians can pinpoint and rectify any electrical malfunction, from minor repairs to complex rewiring projects.",
    },
    {
      id: 3,
      icon: <SiWpengine className="text-primary text-3xl" />,
      title: "Engine Repairs",
      message:
        "Our technicians can diagnose and repair any engine problem, ensuring your vessel operates at peak performance for optimal efficiency and reliability.",
    },
    {
      icon: <GiMechanicalArm className="text-primary text-3xl" />,
      id: 4,
      title: "Mechanical Repairs",
      message:
        "Our team of mechanical specialists can handle all your machinery needs, from routine maintenance to overhauls, keeping your vessel running smoothly and efficiently.",
    },
  ];

  return (
    <div className="mt-5">
      <div className="space-y-12 my-5">
        <h4 className="text-center text-2xl text-black font-bold mt-10">
          Comprehensive Ship Repair Solutions
        </h4>
        <p className="md:max-w-[60%] mx-auto text-center mt-0 p-4">
          We provide a complete range of ship repair services to address any
          challenge your vessel may face. Our highly skilled technicians are
          equipped to handle
        </p>
        <div className=" max-w-screen-2xl mx-auto flex flex-wrap gap-5 justify-center p-4">
          {solutionCards?.map((solutionCard, index) => (
            <>
              <div
                className={`flex md:w-1/4 gap-2.5 p-5 shadow-lg relative bg-cover bg-right-bottom rounded-xl  border-2 border-r-primary border-b-primary
            hover:scale-105 transition-transform duration-200 ease-linear cursor-default
            }`}
              >
                <div className="space-y-2.5 z-50 text-black">
                  <h4 className="font-semibold flex  gap-4 items-center  ">
                    {solutionCard.title || "Type of Repair"} {solutionCard.icon}
                  </h4>
                  <p className="text-sm">
                    {solutionCard.message ||
                      "The complexity of the repairs needed will naturally affect the cost"}
                  </p>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShipRepairSolution;
