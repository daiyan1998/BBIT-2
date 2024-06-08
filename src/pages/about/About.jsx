import React from "react";
import { GiAutoRepair } from "react-icons/gi";
import { TbPackageExport } from "react-icons/tb";
import { FaLeaf, FaRegNewspaper, FaShieldAlt } from "react-icons/fa";
import { GiWorld, GiTumbleweed } from "react-icons/gi";
import { AiOutlineLineChart } from "react-icons/ai";

const aboutData = [
  {
    icon: <AiOutlineLineChart />,
    title: "Ship Chandlery",
    des: "Guaranteed fast and reliable delivery of provisions, bonded stores, deck & engine supplies, cabin stores, and more.",
  },
  {
    icon: <GiAutoRepair />,
    title: "Ship Repair",
    des: "Our skilled technicians handle all your mechanical and electrical repair needs, ensuring your vessel meets safety regulations.",
  },
  {
    icon: <FaLeaf />,
    title: "Ship Supply",
    des: "We offer a one-stop solution for all your ship supply requirements, including equipment and efficient logistics services.",
  },
  {
    icon: <TbPackageExport />,
    title: "Export Support",
    des: "Leverage our global network to explore and fulfill your export needs seamlessly.",
  },
  {
    icon: <GiWorld />,
    title: "Efficient",
    des: "We aim to respond to all inquiries within 24 business hours. Stay connected with us on social media for industry news, team updates, and special offers.",
  },
];

const About = () => {
  return (
    <div className="bg-slate-50 py-9">
      <h2 className="heading-style flex gap-4 justify-center mb-20">
        <span>Our</span>
        <span>Expertise</span>
      </h2>

      <div className="max-w-screen-2xl mx-auto flex flex-wrap justify-center gap-5">
        {aboutData.map((data, i) => (
          <div
            key={i}
            className="flex flex-col gap-4 lg:basis-1/4 md:basis-1/2 p-9 group  cursor-pointer"
          >
            <div className="text-4xl group-hover:text-primary transition ease-linear 200ms">
              {data.icon}
            </div>
            <h4 className="border-b-4 border-black text-2xl font-semibold pb-3 group-hover:text-primary group-hover:border-primary transition ease-linear 200ms">
              {data.title}
            </h4>
            <p>{data.des}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
