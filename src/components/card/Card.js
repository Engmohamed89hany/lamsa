import React, { useContext } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { MdOutlineFavorite } from "react-icons/md";
import { Link } from "react-router-dom";
import { themeContext } from "../../Context/Theme";
import { Favourite } from "../../Context/FavouriteHooks.js";

const Card = ({ item }) => {
  const { themeState } = useContext(themeContext);
  const { favCart, dispatchFav } = useContext(Favourite);
  function addToCart() {
    dispatchFav({
      type: "ADD",
      payload: item,
    });
  }
  return (
    <div
      className={`card my-5 pb-2 ${themeState.dark ? "bg-zinc-950" : "bg-zinc-200"} rounded-lg w-[70%] mx-auto relative`}
    >
      <div className="img w-full">
        <img className="w-full rounded-t-xl" src={item.image} alt={item.name} />
      </div>
      <h3
        className={`${themeState.dark ? "text-slate-100" : "text-slate-900"} text-[20px] mx-3 my-2`}
      >
        {item.name}
      </h3>
      <p
        className={`text-start ${themeState.dark ? "text-gray-100" : "text-slate-900"} mx-3 my-2 mb-8`}
      >
        {item.instructions[0]}
      </p>
      <div
        className={`flex justify-between items-center ${themeState.dark ? "text-slate-300" : "text-gray-900"} absolute bottom-[10px] w-5/6 mx-3`}
      >
        <span className=" italic">${item.prepTimeMinutes}</span>
        <div className="flex gap-[5px]">
          <span className=" cursor-pointer" onClick={addToCart}>
            <MdOutlineFavorite />
          </span>
          <Link className="text-[20px]" to={`/shop/${item.id}`}>
            <AiOutlineInfoCircle />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
