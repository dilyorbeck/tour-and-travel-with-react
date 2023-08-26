import { logo } from "../assets"
import { footerLinks } from "../constants"
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
const Footer = () => (
  <section className="bg-whitishGray">
    <div className="container mx-auto pt-14 text-center md:mt-40 md:text-left px-6 md:px-0">
      <div className="flex flex-col  space-y-5 md:space-y-0 md:space-x-10 md:flex-row pb-16">
        <div className="md:w-2/5">
          <a href="#">
            <img src={logo} className="mx-auto md:mx-0" alt="logo" />
          </a>
          <p className="text-brightGray pt-6 md:pr-10">Plan and book your perfect trip with
            expert advice, travel tips destination
            information from us</p>
          <p className="text-brightGray pt-12">
            ©2020 Thousand Sunny. All rights reserved
          </p>
        </div>
        <div className="flex-[1.5] w-full flex flex-col justify-between space-y-8 md:space-y-0 md:flex-row md:mt-0 mt-10">
          {footerLinks.map((footerlink) => (
            <div key={footerlink.title} className="flex flex-col">
              <h4 className="font-medium text-base">
                {footerlink.title}
              </h4>
              <ul className="list-none mt-3">
                {footerlink.links.map((link, index) => (
                  <li
                    key={link.name}
                    className={`text-brightGray hover:text-normalBlack cursor-pointer ${index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                      }`}
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center border-t border-lightGray py-6 space-x-7 text-lg">
        <a href="#" className="cursor-pointer  hover:text-lightGray">
          <FaTwitter />
        </a>
        <a href="#" className="cursor-pointer  hover:text-lightGray">
          <FaFacebookF />
        </a>
        <a href="#" className="cursor-pointer  hover:text-lightGray">
          <FaInstagram />
        </a>
        <a href="#" className="cursor-pointer  hover:text-lightGray">
          <FaLinkedinIn />
        </a>
        <a href="#" className="cursor-pointer  hover:text-lightGray">
          <FaYoutube />
        </a>
      </div>
    </div>
  </section >
)


export default Footer