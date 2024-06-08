const ServicePageTopBanner = () => {
  return (
    <div className="">
      <div className="flex flex-col lg:flex-row items-center justify-around">
        <div className="flex flex-col gap-5 lg:w-1/2 p-4">
          <h2 className="leading-normal">
            M/S Ocean King: Your Trusted Partner for Expert Ship Repair
          </h2>
          <p className="">
            Your vessel is your investment. It's how you conduct business,
            transport cargo, and navigate the vast seas. When your ship requires
            repairs, you need a reliable and experienced partner to get you back
            on the water efficiently and safely. That's where M/S Ocean King
            steps in.
          </p>
        </div>

        <img
          src="https://images.pexels.com/photos/2880871/pexels-photo-2880871.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          className="h-96 lg:w-[300px] w-full rounded-md"
          alt=""
        />
      </div>
    </div>
  );
};

export default ServicePageTopBanner;
