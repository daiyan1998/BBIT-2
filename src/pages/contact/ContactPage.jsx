import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaSearchLocation } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { FaShip } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

import ContactPageBanner from "./ContactPageBanner";

const ContactPage = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  return (
    <div className="main-div">
      <ContactPageBanner />
      <div className="ajaira mt-10">
     <div className="  part1    text-2xl   p-2 rounded-xl shadow-md bg-gray-50">
            {/* <h1 className="  lg:text-4xl md:text-3xl text-2xl font-semibold my-10 text-center">
            Reach out to us

            </h1> */}
          {/* <div>
          <p className=" text-sm    pr-4 text-gray ">
              M/S Ocean King is your reliable partner for all your maritime
              needs. Since 2005, we've provided a comprehensive suite of
              services designed to keep your vessel operational and efficient,
              no matter where you are in the world.
            </p>

          </div> */}
            <div className="grid lg:grid-cols-4 grid-cols-1 justify-center gap-5 mt-8">
              <div className="flex flex-col items-center gap-4">
                <span>
                  {/* map icon */}
                  <FaSearchLocation className="text-6xl text-primary" />
                  {/* map icon */}
                </span>
                <span className="text-slate-800 text-xl">
                  South Side of Aziz Mia Masjid Circle, 37No. Ward Munir Nagar,
                  Boropole, Chattogram, Bangladesh.
                </span>
              </div>
              <div className="flex flex-col items-center gap-4 ">
                <span>
                  {/* mail icon */}
                  <FaMailBulk className="text-6xl text-primary" />

                  {/* mail icon */}
                </span>
                <a href="mailto:.....">
                  {" "}
                  <span className=" lg:font-normal  text-slate-800 text-xl">
                    info@egistic.com
                  </span>
                </a>
              </div>
              <div className="flex flex-col items-center gap-4 ">
                <span >
                  <FaWhatsapp className="text-6xl text-primary" />
                  </span>
                  <a href="https://wa.me/8801682036423" target="_blank">
                    <span className="text-slate-800 text-xl">
                      +8801682036423,
                    </span>
                  </a>
            
              
              </div>

              <div className="flex flex-col items-center gap-4 ">
              <span >
                  {/* call icon  */}
                  <IoMdCall className="text-6xl text-primary" />
                  </span>
                  <a href="tel:+88031717297">
                    <span className="text-slate-800 text-xl">
                      {" "}
                      +88031717297
                    </span>
                  </a>
                  {/* call icon */}
          
              </div>
            </div>

            <div className="grid grid-cols-1 items-center gap-4 mb-5">
              <span className="text-3xl font-semibold mt-7 mb-10 text-center">
                Follow us
              </span>

              <span className="flex gap-10 justify-center items-center">
                <span className="hover:translate-y-1 ease duration-500 text-3xl text-primary">
                  <a
                    href="https://www.facebook.com/unitedmarinecare"
                    target="_blank"
                  >
                    {" "}
                    {/* fb icon */}
                    <FaFacebook />
                    {/* fb icon */}
                  </a>
                </span>
                <span className="hover:translate-y-1 ease duration-500 text-3xl text-primary">
                  <a
                    href="https://www.instagram.com/umeew2024/"
                    target="_blank"
                  >
                    {" "}
                    {/* insta icon */}
                    <FaInstagram />
                    {/* insta icon */}
                  </a>
                </span>
                <span className="hover:translate-y-1 ease duration-500 text-3xl text-primary">
                  <a
                    href="https://www.linkedin.com/company/100919519/admin/feed/posts/"
                    target="_blank"
                  >
                    {" "}
                    {/* insta icon */}
                    <FaLinkedin />
                    {/* insta icon */}
                  </a>
                </span>

                <span className="hover:translate-y-1 ease duration-500 text-3xl text-primary">
                  {" "}
                  <a href="https://twitter.com/marine_wor9861" target="_blank">
                    {" "}
                    {/* twit icon */}
                    <FaXTwitter />
                    {/* twit icon */}
                  </a>{" "}
                </span>
              </span>
            </div>
          </div>
     </div>
      <div className="part mt-5 mb-10  lg:relative">
   

          {/* part two div information section basically */}
  

        <div className="flex justify-center items-center lg:h-[450px] ">
          {/* part one div form section basically */}
          <div className="part2 bg-blue-50 lg:w-[60%] flex flex-col  lg:absolute lg:top-40  items-center  p-2 rounded-xl shadow-lg shadow-teal-700">
            <h1 className="  lg:text-4xl md:text-3xl text-2xl font-semibold my-10 text-center">
            Share your thoughts with us

            </h1>
            <form action="" method="POST" className="w-full max-w-lg ">
              <div className="flex flex-wrap  -mx-3 mb-6">
                <div className="w-full md:w-1/2  px-3 mb-6 md:mb-0">
                  <input
                    className="appearance-none block w-full text-gray-700 border-b-2 border-primary rounded py-3 px-4 mb-3 leading-tight focus:outline-none bg-transparent "
                    id="grid-first-name"
                    type="text"
                    placeholder="Name"
                    name="name"
                    required
                  />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <input
                    className="appearance-none block w-full text-gray-700 border-b-2 border-primary rounded py-3 px-4 mb-3 leading-tight focus:outline-none bg-transparent "
                    id="grid-last-name"
                    type="email"
                    placeholder="E-Mail"
                    name="email"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6 md:mb-0">
                <div className="w-full px-3 md:w-1/2 mb-6 md:mb-0">
                  <input
                    className="appearance-none block w-full text-gray-700 border-b-2 border-primary rounded py-3 px-4 mb-3 leading-tight focus:outline-none bg-transparent "
                    id="grid-password"
                    type="text"
                    placeholder="Phone"
                    name="phone"
                    required
                  />
                </div>
                <div className="w-full px-3 md:w-1/2 mb-6 md:mb-0">
                  <input
                    className="appearance-none block w-full text-gray-700 border-b-2 border-primary rounded py-3 px-4 mb-3 leading-tight focus:outline-none bg-transparent "
                    id="grid-password"
                    type="text"
                    placeholder="Subject"
                    name="subject"
                    required
                  />
                </div>
                <div className="w-full px-3">
                  <textarea
                    className="appearance-none block w-full text-gray-700 border-b-2 border-primary rounded py-3 px-4 mb-3 leading-tight focus:outline-none bg-transparent "
                    rows={5}
                    id="grid-password"
                    type="text"
                    placeholder="Message"
                    name="message"
                    required
                  />
                </div>
              </div>
              <button
                type="submit"
                className={`w-full mt-3 px-6 md:px-8 lg:px-8 py-2 md:py-3 lg:py-3 bg-slate-100    font-semibold text-primary rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-0.5 flex items-center justify-center gap-3 text-xl group`}
              >
                Ship
                {" "}
                <FaShip className="group-hover:skew-x-6 transition-transform ease-linear delay-300" />
              </button>
            </form>
          </div>


         
          {/* form div */}
          
          {/* part two div information section basically */}
        </div>
      </div>

      {/* map */}
      {/* part three div map section basically */}
      <div className="part3 my-16 ">
        <div className="">
          {/* <h1 className="   lg:text-4xl md:text-3xl text-2xl font-semibold my-10 text-center">
            Discover Our Location on Google Maps
          </h1> */}

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.817511993117!2d91.77688477391928!3d22.32274034208425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acdf36d2d89ee9%3A0xc928c75ddd6fa59a!2sUnited%20Marine%20Engineering%20and%20Electrical%20Works!5e0!3m2!1sen!2sbd!4v1711208148165!5m2!1sen!2sbd"
            style={{ border: "" }}
            className="rounded-lg px-4 w-[100%] h-[400px]   "
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
