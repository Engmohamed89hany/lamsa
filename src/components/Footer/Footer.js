import React, { useContext } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { themeContext } from "../../Context/Theme";
const Footer = () => {
  const { themeState } = useContext(themeContext);

  return (
    <div
      className={`${themeState.dark ? "bg-primary" : "bg-white"}  mt-10`}
    >
      <div className="bg-zinc-950 w-5/6 mx-auto pt-[70px] rounded-tl-[100px] rounded-tr-[100px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="products mx-[60px]">
            <h3 className=" text-[25px] text-slate-100 my-2 captalize">
              Our Products
            </h3>
            <ul className="flex flex-col items-start  justify-content-between gap-3 text-[18px] text-slate-300">
              <li>
                <span>Our menus</span>
              </li>
              <li>
                <span>Our burgers</span>
              </li>
              <li>
                <span>Our times sides</span>
              </li>
              <li>
                <span>Our naandwiches</span>
              </li>
            </ul>
          </div>
          <div className="logel mx-[55px]">
            <h3 className="text-slate-100 my-2 text-[25px]">
              legal information
            </h3>
            <p className="text-slate-300 my-1 text-[18px]">Legal Notice</p>
          </div>
          <div className="mx-[55px]">
            <h3 className=" text-[25px] text-slate-100 my-2 captalize">
              Contact us
            </h3>
            <ul className="flex flex-col items-start  justify-content-between gap-3 text-[18px] text-slate-300">
              <li>
                <span>Contacts</span>
              </li>
              <li>
                <span>Our addresses</span>
              </li>
              <li>
                <span>Become a Times Square franchisee</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="line w-5/6 mx-auto h-[1px] bg-slate-400 my-10 "></div>
        <div className="links w-[90%] mx-auto flex flex-col md:flex-row gap-y-5 justify-between items-center mb-10">
          <ul className="flex gap-x-3 text-slate-200 text-[18px]">
            <li>
              <FaFacebook className=" hover:translate-x-1 transition-all duration-300" />
            </li>
            <li>
              <FaTiktok className=" hover:translate-x-1 transition-all duration-300" />
            </li>
            <li>
              <FaTwitter className=" hover:translate-x-1 transition-all duration-300" />
            </li>
            <li>
              <FaLinkedin className=" hover:translate-x-1 transition-all duration-300" />
            </li>
          </ul>
          <div className="copyright text-slate-300">
            © 2026 Hama All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
