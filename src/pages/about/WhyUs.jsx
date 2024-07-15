import Hr from "@/components/ui/Hr";
import React from "react";
import { FaCheckDouble } from "react-icons/fa6";

const reasonsToChooseUs = [
  {
    title: "Proven Track Record",
    description:
      "Established since [Year Founded], we have decades of experience navigating the maritime industry, ensuring the success of countless voyages.",
  },
  {
    title: "Comprehensive Services",
    description:
      "We offer a full range of services, including ship chandlery, repair, supply, and export support, all designed to meet your diverse maritime needs.",
  },
  {
    title: "Expert Team",
    description:
      "Our team comprises highly skilled and experienced maritime professionals, each driven by a passion for excellence and innovation.",
  },
  // {
  //   title: "Strong Partnerships",
  //   description:
  //     "We prioritize building strong, collaborative partnerships, providing personalized service and transparent communication tailored to your specific requirements.",
  // },
  // {
  //   title: "Efficiency and Reliability",
  //   description:
  //     "We ensure the timely and reliable delivery of supplies, efficient repair services, and seamless logistics, keeping your vessel operational and efficient.",
  // },
];

const WhyUs = () => {
  return (
    <div className="mb-20 py-20">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row gap-20 md:gap-0 justify-center">
        <div className="basis-1/2 flex flex-col gap-6 px-6">
          <h2 className="heading-style flex flex-col justify-center gap-2">
            <span className="lg:text-center text-center">Why You Should</span>
            <span className="lg:text-center text-center" >Choose US</span>
          </h2>
          {reasonsToChooseUs.map(({ title, description }) => (
            <div key={title} className="flex items-start gap-4">
              <div className="my-4 flex max-w-[480px] items-center rounded-xl border border-solid border-sky-500 bg-primary p-6 font-bold text-white [box-shadow:rgb(0,_0,_0)_-4px_4px]">
                <div className="relative mr-2 flex h-14 w-14 flex-none flex-col items-center justify-center rounded-md border border-[#9b9b9b] bg-white [box-shadow:rgb(0,_0,_0)_2px_2px]">
                  <img
                    alt=""
                    src="\src\assets\hand.png"
                    className="inline-block h-8"
                  />
                </div>
                <div>
                  <h4 className="ml-4">{title}</h4>
                  <p className="ml-4 text-sm font-normal">{description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="basis-1/2 relative">
          <img
            src="https://plus.unsplash.com/premium_photo-1663011388915-c502301a2b9a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-[550px] h-[640px] object-contain relative z-10"
          />
          <div className="absolute top-0 right-0 -translate-x-[20%] translate-y-[40%] h-[400px] w-64 bg-primary -z-1"></div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
