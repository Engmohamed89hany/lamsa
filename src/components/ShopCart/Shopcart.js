import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AiOutlineInfoCircle } from "react-icons/ai";
import "./shopCart.css";
import "../card/card.css";
import { CartContext } from "../../Context/CartHooks";
import { Favourite } from "../../Context/FavouriteHooks.js";

import { MdOutlineFavorite } from "react-icons/md";
import { themeContext } from "../../Context/Theme";

const Shopcart = ({ item }) => {
  const cart = useContext(CartContext);
  const { themeState } = useContext(themeContext);
  const { favCart, dispatchFav } = useContext(Favourite);
  function addToCart() {
    dispatchFav({
      type: "ADD",
      payload: item,
    });
  }
  return (
    <div className="person cardshop">
      <div className="head w-full mx-auto flex items-center md:justify-between gap-x-5 md:gap-x-0 ">
        <div className="img w-24 h-24 rounded">
          <img src={item.image} alt={item.cuinise} className=" rounded-full" />
        </div>
        <h3
          className={`${themeState.dark ? "text-slate-100" : "text-stone-950"} italic text-[24px]`}
        >
          {item.name}
        </h3>
      </div>
      <div className="desc">
        <p
          className={`h-[100px] ${themeState.dark ? "text-slate-200" : "text-zinc-800"} w-4/5 ml-[90px] my-6`}
        >
          {item.instructions[0]}
          {item.instructions[1]}
        </p>
      </div>
      <div className="foot w-4/5 mx-auto flex items-center justify-between">
        <span
          className={`tex-[20px] italic ${themeState.dark ? "text-zinc-200" : "text-zinc-950"}`}
        >
          ${item.cookTimeMinutes}
        </span>
      </div>
      <span className="w-full h-[1px] bg-slate-300"></span>
      <div
        className={`actions absolute  left-0 w-full h-full hover:h-full overflow-hidden rounded-2xl ${themeState.dark ? "text-slate-100" : "text-stone-950"} text-[20px] flex justify-center items-center gap-8 ${themeState.dark && "active"}`}
      >
        <FaShoppingCart
          className=" cursor-pointer"
          onClick={() => {
            cart.dispatch({
              type: "ADD",
              item,
            });
          }}
        />
        <Link className="text-[20px]" to={`/shop/${item.id}`}>
          <AiOutlineInfoCircle />
        </Link>
        <MdOutlineFavorite
          className=" cursor-pointer"
          onClick={() => {
            dispatchFav({
              type: "ADD",
              payload: item,
            });
          }}
        />
      </div>
    </div>
  );
};

export default Shopcart;
