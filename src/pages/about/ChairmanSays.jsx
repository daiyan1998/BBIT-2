import React from "react";

const ChairmanSays = () => {
  return (
    <div className="bg-slate-50">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between gap-16 mb-2 py-20 px-4">
        <div className="basis-1/2">
          <h2 className="mb-6 font-semibold leading-normal lg:text-4xl text-2xl lg:text-left text-center">
            Welcome to <br /> M/S Ocean
          </h2>
          <p className="text-lg mb-9">
            “We've focused on providing exceptional maritime services to ensure your voyages succeed.

Our skilled team of professionals is dedicated to innovation and excellence, continually expanding our offerings to meet your needs.

We prioritize strong partnerships, personalized service, clear communication, and cost-effective solutions.

Thank you for considering M/S Ocean King as your trusted maritime partner. We look forward to supporting your maritime endeavors.”
          </p>
          <p>
            <strong>Poulo Rosado</strong> <br />
            M/S Chairman CEO
          </p>
        </div>
        <div className="basis-1/2">
          <img
            src="https://images.unsplash.com/photo-1562788869-4ed32648eb72?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default ChairmanSays;
