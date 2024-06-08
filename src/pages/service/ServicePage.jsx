import { GiAutoRepair } from "react-icons/gi";
import { Link } from "react-router-dom";

const servicesData = [
  {
    title: "SHIP REPAIR",
    description:
      "Comprehensive repair services for ships including hull, machinery, and systems.",
  },
  {
    title: "BUNKER LUBE OIL SUPPLY",
    description: "Supply of bunker fuel and lubricating oil for ships.",
  },
  {
    title: "SPARE PARTS SUPPLY",
    description:
      "Provision of spare parts for various ship components and systems.",
  },
  {
    title: "EXPORT PRODUCT",
    description: "Exporting various products related to the maritime industry.",
  },
  {
    title: "PROVISION, BONDED SUPPLY",
    description: "Supply of provisions and bonded items for ships.",
  },
  {
    title: "STORE SUPPLY",
    description: "Supply of various supplies needed on ships.",
  },
  {
    title: "DECK REPAIR",
    description:
      "Repair services for ship decks including structural repairs and maintenance.",
  },
  {
    title: "CRANE REPAIR",
    description: "Repair and maintenance services for ship cranes.",
  },
  {
    title: "HYDRAULIC REPAIR",
    description: "Repair services for hydraulic systems on ships.",
  },
  {
    title: "ELECTRICAL REPAIR",
    description:
      "Repair and maintenance services for electrical systems on ships.",
  },
  {
    title: "ENGINE REPAIR",
    description: "Repair and maintenance services for ship engines.",
  },
  {
    title: "PORT AGENCY",
    description:
      "Agency services for ships including port agency and owner protecting agency.",
  },
  {
    title: "SURVEY SERVICE",
    description:
      "Survey services for various aspects of ships including damage assessment, cargo inspection, joint inspection, bunker survey, and draft survey.",
  },
  {
    title: "CLEANING SERVICE",
    description:
      "Cleaning services for ships including hull cleaning and maintenance.",
  },
  {
    title: "SECURITY SERVICE",
    description:
      "Security guard services for ships to ensure safety and security.",
  },
  {
    title: "CREW HANDLING",
    description: "Handling crew sign-off and sign-on procedures for ships.",
  },
  {
    title: "MAIN ENGINE",
    description: "Repair and maintenance services for main ship engines.",
  },
  {
    title: "AUXILIARY ENGINE",
    description: "Repair and maintenance services for auxiliary ship engines.",
  },
  {
    title: "HYDRAULIC PUMP",
    description: "Repair and maintenance services for ship hydraulic pumps.",
  },
  {
    title: "SCUBA",
    description: "Underwater inspection and repair services for ships.",
  },
  {
    title: "Salvage",
    description: "Salvage services for recovering lost anchors and chains.",
  },
  {
    title: "Export spare parts",
    description: "Exporting spare parts for all kinds of ship components.",
  },
  {
    title: "Chipping & Painting",
    description:
      "Chipping and painting services for ships to maintain aesthetics and prevent corrosion.",
  },
  {
    title: "Fender Supply",
    description:
      "Supply of fenders for ships to aid in docking and protection.",
  },
];

const ServiceCardX = ({ title, description }) => (
  <>
    {/* <div className="px-4 mb-12 relative w-full md:w-1/2">
    <div className="shadow-lg rounded-lg relative flex flex-col min-w-0 break-words bg-blue-100 w-full mb-6 group transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:z-2">
      <div className="-mt-6 shadow-lg rounded-full mx-auto w-16 h-16 inline-flex justify-center items-center transition-all duration-300 ease-in-out transform group-hover:scale-75 bg-lightBlue-500 bg-primary text-white text-3xl">
        <GiAutoRepair />
      </div>
      <div className="pt-8 pb-16 px-10 flex-auto relative overflow-hidden">
        <h4 className="text-2xl font-bold mt-0 mb-2">{title}</h4>
        <p className="text-blueGray-500 leading-relaxed h-[80px]">
          {description}
        </p>
        <div className="text-lightBlue-500 border-blueGray-200 opacity-0 rounded-b px-4 py-4 border-t absolute bottom-0 left-0 w-full text-center flex items-center justify-center transition-all duration-300 ease-in-out transform translate-y-1/2 group-hover:translate-y-0 group-hover:opacity-100">
          <Link to={`/services/${title}`}>More details...</Link>
        </div>
      </div>
    </div>
  </div> */}
    <Link to={`/services/${title}`}>
      <div class="relative flex  flex-col justify-center py-6 sm:py-12">
        <div class="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
          <div class="relative z-10 mx-auto max-w-md">
            <span class="relative grid h-20 w-20 place-items-center rounded-full bg-primary transition-all duration-300 group-hover:bg-primary">
              <GiAutoRepair className="text-2xl text-white" />
              <span class="absolute top-0 -z-20  h-20 w-20 rounded-full bg-primary transition-all duration-300 group-hover:scale-[10]"></span>
            </span>
            <div class="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
              <h4 className="text-2xl font-bold mt-0 mb-2">{title}</h4>
              <p className="text-blueGray-500 leading-relaxed h-[80px]">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  </>
);

const ServicePage = () => {
  window.scrollTo({
    top: 0,
    behavior: "instant",
  });
  return (
    <>
      <h2 className="text-center my-10">Our Services</h2>
      <div className="max-w-screen-xl mx-auto grid grid-cols-3">
        {servicesData.map((data) => (
          <ServiceCardX key={data} {...data} />
        ))}
      </div>
    </>
  );
};

export default ServicePage;
