import React from "react";

const Banner = () => {
  return (
    <div className="flex flex-wrap py-8">
      <div className="w-full sm:w-8/12">
        <div className="h-full ">
          {/* <nav className="flex px-4 justify-between items-center">
            <div className="text-4xl font-bold">
              Repair<span className="text-primary">.</span>
            </div>
            <div>
              <img
                src="https://image.flaticon.com/icons/svg/497/497348.svg"
                alt=""
                className="w-8"
              />
            </div>
          </nav> */}
          <header
            className={`container px-4 lg:flex mt-10 items-center h-full lg:mt-0 bg-[url('/waves.svg')] bg-no-repeat bg-cover bg-bottom`}
          >
            <div className="w-full">
              <h1 className="text-4xl lg:text-6xl font-bold">
                Tomorrow Expert Ship{" "}
                <span className="text-blue-600">Repair</span> for a Smooth
                Voyage
              </h1>
              <div className="w-20 h-2 bg-primary my-4"></div>
              <p className="text-xl mb-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae maiores neque eaque ea odit placeat, tenetur illum
                distinctio nulla voluptatum a corrupti beatae tempora aperiam
                quia id aliquam possimus aut.
              </p>
              <button className="bg-primary text-white text-2xl font-medium px-4 py-2 rounded shadow">
                Learn More
              </button>
            </div>
          </header>
        </div>
      </div>
      <img
        src="https://images.unsplash.com/photo-1552207802-77bcb0d13122?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Leafs"
        className="w-full h-48 object-cover sm:h-full sm:w-4/12 md:block hidden"
      />
    </div>
  );
};

export default Banner;
