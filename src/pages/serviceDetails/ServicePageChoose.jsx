import { useState } from "react";

const ServicePageChoose = () => {
  const choiceCards = [
    {
      id: 1,
      title: "Unmatched Experience",
      message:
        "We have a proven track record of successfully repairing vessels of all sizes and types, ensuring quality workmanship and lasting solutions. ",
    },
    {
      id: 2,

      title: "Highly Skilled Technicians",
      message:
        "Our team comprises certified and experienced technicians with a deep understanding of all aspects of ship repair.",
    },
    {
      id: 3,
      title: "Competitive Rates",
      message:
        "We offer transparent pricing and strive to keep your repair costs within budget.",
    },
    {
      id: 4,
      title: "Fast Turnaround Times",
      message:
        "We understand the importance of minimizing downtime. Our streamlined processes ensure your vessel is back in operation quickly and efficiently.",
    },
    {
      id: 5,
      title: "Clear Communication",
      message:
        "We keep you informed throughout the repair process, providing detailed updates and cost estimates to maintain transparency.",
    },
  ];
  const [isOpen, setIsOpen] = useState(null);

  const handleToggle = (idx) =>
    setIsOpen((prevIdx) => (prevIdx === idx ? null : idx));
  return (
    <>
      <div class="mb-8 text-center md:mb-12 lg:mb-16">
        <h2 class="text-3xl font-semibold md:text-5xl">
          Frequently Asked Questions
        </h2>
        <p class="mx-auto mt-4 max-w-[528px] text-[#636262]">
          Lorem ipsum dolor sit amet consectetur adipiscing elit ut
          aliquam,purus sit amet luctus magna fringilla urna
        </p>
      </div>
      <div className="mb-20">
        <div className="space-y-12 my-5">
          <div className="space-y-4 p-2 md:p-6">
            {choiceCards?.map((data, idx) => (
              <div key={idx}>
                {/* header / Title */}
                <div
                  onClick={() => handleToggle(idx)}
                  className={`px-4 md:px-8 py-6 bg-sky-50 border-primary border-l-[3px] cursor-pointer mb-6 rounded-xl border border-solid  p-8`}
                >
                  <div className="flex items-center">
                    <span>
                      <svg
                        className={`mr-4 ${
                          idx === 0
                            ? "fill-green-900"
                            : idx === 1
                            ? "fill-sky-900"
                            : idx === 2
                            ? "fill-purple-900"
                            : idx === 3
                            ? "fill-amber-900"
                            : idx === 4
                            ? "fill-red-900"
                            : "fill-orange-900"
                        } shrink-0`}
                        width="16"
                        height="16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          y="7"
                          width="16"
                          height="2"
                          rx="1"
                          className={`transform origin-center transition duration-200 ease-out ${
                            isOpen === idx && "!rotate-180"
                          }`}
                        />
                        <rect
                          y="7"
                          width="16"
                          height="2"
                          rx="1"
                          className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                            isOpen === idx && "!rotate-180"
                          }`}
                        />
                      </svg>
                    </span>
                    <h4 className={`text-black text-2xl font-semibold`}>
                      {data.title}
                    </h4>
                  </div>
                  <div
                    className={`grid overflow-hidden transition-all duration-300 ease-in-out mt-5  ${
                      isOpen === idx
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className={``}>{data?.message}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicePageChoose;
