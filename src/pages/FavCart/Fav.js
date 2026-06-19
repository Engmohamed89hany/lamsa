import React, { useContext } from "react";
import { Favourite } from "../../Context/FavouriteHooks.js";
import { themeContext } from "../../Context/Theme.js";
import { Link } from "react-router-dom";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { IoCartSharp } from "react-icons/io5";
import { motion } from "framer-motion";
import "./Fav.css";
import { CartContext } from "../../Context/CartHooks.js";
import Btn from "../../components/btn/Btn.js";
import useLength from "../../hooks/useLength.js";
import Footer from "../../components/Footer/Footer.js";
const Fav = () => {
  const { themeState, dispatch } = useContext(themeContext);
  const { favCart, dispatchFav } = useContext(Favourite);
  const {length} = useLength(favCart)
  const cart = useContext(CartContext);
  if (length === 0) {
    return (
      <div
        className={`flex justify-center items-center flex-col h-[100vh] ${themeState.dark ? "bg-primary text-slate-100" : "bg-white text-zinc-950"}`}
      >
        <h3 className="text-[35px]">No Items In Favourite Cart</h3>
        <Btn name={"shop"} to={"/menu"} />
      </div>
    );
  } else {
    return (
      <div
        className={`pt-32 h-auto ${themeState.dark ? "bg-primary text-slate-100" : "bg-white text-zinc-950"}`}
      >
        <div className="w-5/6 mx-auto">
          <h2 className="text-[35px]"> {length} item in cart</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 ">
            {favCart
              .sort((a, b) => b.prepTimeMinutes - a.prepTimeMinutes)
              .map((item, i) => {
                return (
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.2 * i }}
                    key={item.id}
                    className="w-[85%] mx-auto relative cardfav overflow-hidden"
                  >
                    <img
                      className="rounded-md"
                      src={item.image}
                      alt={item.name}
                    />
                    <h3 className="ml-2 my-3 text-[20px]">{item.name}</h3>
                    <span className="ml-1 my-3 text-yellow-500">
                      ${item.prepTimeMinutes}
                    </span>
                    <div
                      className={`fav_actions w-12 h-24 flex flex-col pt-3 items-center gap-2 absolute top-[45%] right-0 ${themeState.dark ? "bg-primary" : "bg-[#fffc]"} text-[20px] rounded-md`}
                    >
                      <Link to={`/shop/${item.id}`}>
                        <AiOutlineInfoCircle
                          className={`${themeState.dark ? "text-slate-200" : "text-zinc-950"}`}
                        />
                      </Link>
                      <span
                        onClick={() =>
                          dispatchFav({
                            type: "Delete",
                            payload: item,
                          })
                        }
                      >
                        <MdDelete
                          className={`${themeState.dark ? "text-slate-200" : "text-zinc-950"} cursor-pointer `}
                        />
                      </span>
                      <span>
                        <IoCartSharp
                          onClick={() => {
                            cart.dispatch({
                              type: "ADD",
                              item,
                            });
                          }}
                          className={`${themeState.dark ? "text-slate-200" : "text-zinc-950"} cursor-pointer`}
                        />
                      </span>
                    </div>
                  </motion.div>
                );
              })}
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
};

export default Fav;
