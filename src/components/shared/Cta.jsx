import { Button } from "@/components/ui/Button";
import React from "react";

const Cta = () => {
  return (
    <header>
      {/* Container */}
      <div className="px-5 py-16 md:px-10 md:py-24 lg:py-32">
        {/* Component */}
        <div className="mx-auto w-full max-w-7xl rounded-[48px] bg-[url('https://images.unsplash.com/photo-1513436539083-9d2127e742f1?q=80&w=2063&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center bg-no-repeat py-20 text-white [box-shadow:rgb(106,_218,_255)_9px_9px]">
          <div className="mx-auto max-w-3xl text-center">
            {/* Heading Div */}
            <div className="mb-6 max-w-[720px] lg:mb-12">
              <h2 className="mb-4 text-3xl font-semibold md:text-5xl">
                <span
                  className={`bg-[url('line.svg')] bg-cover bg-center px-4 text-white`}
                >
                  Fix Your Ship,
                </span>
                &nbsp;Fast!
              </h2>
              <div className="mx-auto max-w-[630px]">
                <p className="text-[#e0e0e0]">
                  We understand the urgency of getting your ship back in
                  operation.
                </p>
              </div>
            </div>
            {/* CTA */}
            <a
              href="#"
              className="inline-block rounded-xl bg-black px-8 py-4 font-semibold text-white [box-shadow:rgb(255,_255,_255)_6px_6px]"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Cta;
