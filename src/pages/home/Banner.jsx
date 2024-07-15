import React from "react";
import transporationimg from "@/assets/homeImg/transportation.png";
const Banner = () => {
  return (
    <div className="flex flex-wrap py-8">
      <div className="w-full">
        <div className="h-full  w-full">
        <div className="lg:h-[900px] h-[500px] w-full flex justify-center items-center bg-[url('https://images.pexels.com/photos/843085/pexels-photo-843085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-no-repeat">
        <div className="w-full">
              <h1 className="text-3xl lg:text-6xl font-bold text-white  lg:w-[550px] ">
                Tomorrow Expert Ship{" "}
                <span className="text-blue-300"><span className="text-blue-600">{`'`}</span> Repair <span className="text-blue-600">{`'`}</span></span> for a Smooth
                Voyage
              </h1>
              <div className="w-20 h-2 bg-primary my-4"></div>
              <p className="text-lg lg:text-xl mb-10 text-white lg:w-[600px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae maiores neque eaque ea odit placeat, tenetur illum
                distinctio nulla voluptatum a corrupti beatae tempora aperiam
                quia id aliquam possimus aut.
              </p>
              <button className="bg-primary text-white text-2xl font-medium px-4 py-2 rounded shadow">
                Learn More
              </button>
            </div>
      </div>
        
        </div>
      </div>

     
    
        
  
  
    </div>
  );
};

export default Banner;
