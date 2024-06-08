import { FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaMailBulk } from "react-icons/fa";
import { FaSearchLocation } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";

const Footer = () => {
  return (
    <div>
      <div className="section_1 grid lg:grid-cols-3  grid-cols-1 gap-10 px-8 py-20 bg-[#062b3b]">
        {/* part1 */}
        <div className="part_1 flex flex-col gap-5 px-4 ">
          <h1 className="text-xl font-semibold text-primary">
            We Are MS-OCEAN-KING
          </h1>
          <p className="text-xl  text-white mt-10">
            At M/S - OCEAN KING, we offer expert ship repair services to keep
            your vessel seaworthy and safe.
          </p>
          <div className="social_icon flex justify-between text-primary my-10">
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
                <a href="https://www.instagram.com/umeew2024/" target="_blank">
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
        {/* part2 */}
        <div className="part_2 flex flex-col gap-5 px-4 lg:ml-20 ml-0  ">
          <h1 className="text-xl font-semibold text-white ">Quick Links</h1>
          <hr className="   border-primary w-1/4" />
          <div className="grid grid-cols-1 font-medium text-white gap-4 text-xl ">
            <Link className="hover:text-primary transition ease-in-out" to="/">
              Home
            </Link>
            <Link
              className="hover:text-primary transition ease-in-out"
              to="/about"
            >
              About Us
            </Link>
            <Link
              className="hover:text-primary transition ease-in-out"
              to="/services"
            >
              Services
            </Link>
            <Link
              className="hover:text-primary transition ease-in-out"
              to="/products"
            >
              Product
            </Link>
            <Link
              className="hover:text-primary transition ease-in-out"
              to="/contact"
            >
              Contact Us
            </Link>
          </div>
        </div>
        {/* part3 */}
        <div className="part_3 flex flex-col gap-5 px-4">
          <h1 className="text-xl font-semibold text-white">Contact Us</h1>
          <hr className="   border-primary w-1/4" />
          <div className="grid grid-cols-1 font-medium text-white gap-4 text-xl ">
            <span className="flex  gap-3 items-center">
              {" "}
              <FaMailBulk className="text-3xl font-semibold text-primary" />
              Help@gmail.com{" "}
            </span>
            <div className="flex items-center gap-4">
              <span>
                {/* map icon */}
                <FaSearchLocation className="text-3xl text-primary" />
                {/* map icon */}
              </span>
              <span className="text-white text-xl">
                South Side of Aziz Mia Masjid Circle, 37No. Ward Munir Nagar,
                Boropole, Chattogram, Bangladesh.
              </span>
            </div>
            <div className="flex  flex-col  gap-4 mb-5  ">
              <span className="flex gap-2">
                <FaWhatsapp className="text-3xl text-primary" />
                <a href="https://wa.me/8801682036423" target="_blank">
                  <span className="text-white text-xl">+8801682036423,</span>
                </a>
              </span>
              <span className="flex gap-2">
                {/* call icon  */}
                <IoMdCall className="text-3xl text-primary" />

                <a href="tel:+88031717297">
                  <span className="text-white text-xl"> +88031717297</span>
                </a>
                {/* call icon */}
              </span>
            </div>
          </div>
        </div>
        {/* part4 */}
      </div>
      <div className="section_2 bg-primary px-6 py-4">
        <div className="lg:text-lg text-base lg:text-justify text-center  text-white lg:flex lg:justify-between grid grid-cols-1">
          <p>© All Right Reserved .</p>
          <p>
            <Link to={"#"}>Privacy Policy</Link> <span className="mx-2">|</span>
            <Link to={"#"}>Terms of Services</Link>
          </p>
        </div>
        <div>
          <h1 className="text-base text-center text-sky-200">
            Developed By Backbenchers It House
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
