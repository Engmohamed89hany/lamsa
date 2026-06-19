import "./Header.css";
import { Link } from "react-router-dom";
import { MdOutlineFavorite } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { LuLightbulb } from "react-icons/lu";
import Btn from "../btn/Btn.js";
import { HiBars2 } from "react-icons/hi2";
import { useContext, useEffect, useRef, useState } from "react";
import { CartContext } from "../../Context/CartHooks.js";
import { FaXmark } from "react-icons/fa6";
import { CiDark } from "react-icons/ci";
import { themeContext } from "../../Context/Theme.js";
import { Favourite } from "../../Context/FavouriteHooks.js";
const Header = () => {
  const cart = useContext(CartContext);
  const { themeState, dispatch } = useContext(themeContext);
  const { favCart } = useContext(Favourite);
  const [isActive, setIsActive] = useState(false);
  const [form, setForm] = useState({});
  useEffect(() => {
    setForm(JSON.parse(localStorage.getItem("form")) || null);
  }, []);
  const ref = useRef(null);
  useEffect(() => {
    const handelHeader = () => {
      if (window.scrollY > 60) {
        ref.current.classList.add("backdrop-blur-sm");
      } else {
        ref.current.classList.remove("backdrop-blur-sm");
      }
    };
    window.addEventListener("scroll", handelHeader);
    return () => {
      window.removeEventListener("scroll", handelHeader);
    };
  }, []);
  function handleLogout() {
    localStorage.removeItem("form");
    window.location.pathname = "/";
  }
  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-[#00000073]`}
      ref={ref}
    >
      <div className="w-5/6 mx-auto py-5 flex justify-between items-center">
        <ul
          className={`flex justify-content-between items-center gap-x-5 md:flex-row flex-col absolute md:relative md:top-0 md:right-0 top-full  left-0  md:w-fit transition-all duration-500 ease-in ${isActive ? "active" : ""}`}
        >
          {" "}
          <li className="text-slate-100 captalize text-[20px]">
            <Link  onClick={() => setIsActive(false)} to={"/"}>
              Home
            </Link>
          </li>
          <li className="text-slate-100 captalize text-[20px]">
            <Link onClick={() => setIsActive(false)} to={"/menu"}>
              Shop
            </Link>
          </li>
          <li className="text-slate-100 captalize text-[20px]">
            <Link onClick={() => setIsActive(false)} to={"/contact"}>
              Contact
            </Link>
          </li>
          <li className="text-slate-100 captalize text-[20px] block md:hidden">
            <Link onClick={() => setIsActive(false)} to={"/login"}>
              Login
            </Link>
          </li>
        </ul>
        <Link
          to={"/"}
          className="logo flex items-center flex-row-reverse text-white text-[23px]"
        >
          Lamsa🍽️
        </Link>
        <div
          className={`${window.location.pathname === "/" ? "right-[25%]" : "right-0"} flex items-center md:gap-x-4 gap-2 md:translate-x-0 relative  md:right-0`}
        >
          <i
            className="text-slate-50 font-thin text-[25px] inline-block md:hidden"
            onClick={() => setIsActive((prev) => !prev)}
          >
            {isActive ? (
              <FaXmark className=" transition-all duration-300" />
            ) : (
              <HiBars2 className=" transition-all duration-300" />
            )}
          </i>
          <div className="text-slate-100 captalize text-[20px] relative">
            <span className=" absolute w-4 h-4 bg-red-600 rounded-full flex items-center justify-center top-[-10px] right-[-7px] text-slate-100 text-[12px]">
              {form ? cart.cartList.length : 0}
            </span>
            <Link to={"/cart"}>
              <FaShoppingCart />
            </Link>
          </div>
          <div className="text-slate-100 captalize text-[20px] relative">
            <span className=" absolute w-4 h-4 bg-red-600 rounded-full flex items-center justify-center top-[-10px] right-[-7px] text-slate-100 text-[12px]">
              {form ? favCart.length : 0}
            </span>

            <Link to={"/faviorate"}>
              <MdOutlineFavorite />
            </Link>
          </div>
          {themeState.dark ? (
            <LuLightbulb
              onClick={() => {
                dispatch({ type: "LIGHT" });
              }}
              className="text-[30px] text-white cursor-pointer border-gray-100 border-[1px] p-[5px] rounded-full"
            />
          ) : (
            <CiDark
              onClick={() => {
                dispatch({ type: "DARK" });
              }}
              className="text-[30px] text-white cursor-pointer border-gray-100 border-[1px] p-[5px] rounded-full"
            />
          )}
          <div className=" hidden md:inline-block">
            {!form ? (
              <Btn name="Become a Member" to={"/login"} />
            ) : (
              <Btn name={"Log out"} onClick={handleLogout} />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
