import { FaShip } from "react-icons/fa6";
import { FaArrowAltCircleRight } from "react-icons/fa";

const ServiceCard = ({ title, desc, img }) => {
  return (
    <>
      <div className="relative flex  flex-col justify-center   py-6 sm:py-12">
        <div className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
          <img src={img} alt="" className="relative z-50 rounded-lg mb-4" />
          <div className="relative z-10 mx-auto max-w-md">
            <span className="relative grid h-20 w-20 place-items-center rounded-full bg-primary transition-all duration-300 group-hover:bg-primary">
              <FaShip className="text-2xl text-white" />
              <span className="absolute top-0 -z-20  h-20 w-20 rounded-full bg-primary transition-all duration-300 group-hover:scale-[10]"></span>
            </span>
            <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
              <h4 className="text-2xl font-semibold">{title}</h4>
              <p>{desc}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
