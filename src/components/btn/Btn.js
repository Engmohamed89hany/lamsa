import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { themeContext } from "../../Context/Theme";
const Btn = ({ name, to, Class, onClick }) => {
  const { themeState } = useContext(themeContext);
  return (
    <div
      className={`btn bg-slate-200 capitalize text-black rounded-3xl px-5 py-2 hover:bg-transparent hover:border-[1px] hover:scale-105 hover:border-slate-100 hover:${themeState.dark && name !== "Become a Member" ? "text-slate-100" : "text-slate-900"} ${Class} ${name === "Become a Member" && "hover:text-white"} transition-all ease-in duration-300 hover:text-slate-1000 ${window.location.pathname === "login" ? "w-[100%] mx-auto" : "w-fit"}`}
    >
      <Link className="flex gap-x-1 items-center" to={to} onClick={onClick}>
        {name}
        {to === "/shop" ? (
          <span>
            <FaCartShopping />
          </span>
        ) : (
          ""
        )}
      </Link>
    </div>
  );
};

export default Btn;
