import transporationimg from "@/assets/homeImg/transportation.png";
import { Button } from "@/components/ui/Button";
import { Link } from "react-router-dom";

const Transportation = () => {
  return (
    <div className="max-w-5xl mx-auto flex md:flex-row flex-col items-center justify-center my-20 gap-6 px-4">
      {/* 1 */}
      <div className="basis-1/2">
        <h2 className="flex flex-col gap-3 mb-10">
          <span>Providing Full Range</span>
          <span className="text-primary">Of Transportation</span>
        </h2>
        <p className="mb-4">
          M/S Ocean King offers a comprehensive suite of transportation services
          designed to meet all your maritime needs, ensuring smooth and
          efficient operations for your vessel.
        </p>
        <p className="mb-10">
          Our experienced team is dedicated to delivering exceptional service,
          from timely supply deliveries to expert repair and maintenance. With a
          focus on reliability and efficiency, we strive to exceed your
          expectations and keep your maritime operations running seamlessly.
        </p>
        <Link to="/about">
          <button className="relative h-14 w-36 origin-top transform rounded-lg border-2 border-primary text-lg text-white-500 before:absolute before:top-0 before:block before:h-0 before:w-full before:duration-500 hover:text-white hover:before:absolute hover:before:left-0 hover:before:-z-10 hover:before:h-full hover:before:bg-primary cursor-pointer">
            Discover More
          </button>
        </Link>
      </div>
      {/* 2 */}
      <div className="relative basis-1/3">
      <img
        src="https://images.unsplash.com/photo-1552207802-77bcb0d13122?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Leafs"
        className="rounded-xl"
      />
        {/* <div className="absolute bottom-[12%] left-[30%] bg-white h-[150px] w-[190px] shadow-lg flex flex-col justify-center items-center rounded-md">
          <div className="text-5xl text-primary">20+</div>
          <div>Years of Experience</div>
        </div> */}
        
      </div>
    </div>
  );
};

export default Transportation;
