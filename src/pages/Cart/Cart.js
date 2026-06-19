import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import { CartContext } from "../../Context/CartHooks";
import { themeContext } from "../../Context/Theme";
import Btn from "../../components/btn/Btn";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { MdOutlineFavorite } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import { Favourite } from "../../Context/FavouriteHooks";
import useLength from "../../hooks/useLength";
const Cart = () => {
  const cart = useContext(CartContext);
  const { themeState } = useContext(themeContext);
  const { dispatchFav } = useContext(Favourite);
  const [search, setSearch] = useState("");
  const { length } = useLength(cart.cartList);
  const inputRef = useRef();
  const cartShow = useMemo(
    () =>
      cart.cartList.filter((item) =>
        item.name.toLowerCase().includes(search.trim().toLowerCase()),
      ),
    [search, cart.cartList],
  );
  useEffect(() => {
    if (length > 0) {
      inputRef.current?.focus();
    }
  }, []);
  function AddtoFav(item) {
    dispatchFav({
      type: "ADD",
      payload: item,
    });
  }
  function Plus(item) {
    cart.dispatch({
      type: "PLUS",
      item,
    });
  }
  function MINUS(item) {
    cart.dispatch({
      type: "MINUS",
      item,
    });
  }
  function REMOVE(item) {
    cart.dispatch({
      type: "REMOVE",
      id: item.id,
    });
  }
  let total = useMemo(() => {
    return cart.cartList.reduce(
      (acc, ele) => acc + +ele.cookTimeMinutes * +ele.quantity,
      0,
    );
  }, [cart.cartList]);
  function handelSearch(e) {
    setSearch(e.target.value);
  }
  if (length === 0) {
    return (
      <div
        className={`h-[100vh] flex flex-col justify-center items-center ${themeState.dark ? "bg-primary text-slate-100" : "bg-white text-zinc-950"} `}
      >
        <h2 className="text-[35px] my-5">No items in cart</h2>
        <Btn name={"Shop"} to={"/menu"} />
      </div>
    );
  }
  return (
    <div
      className={` ${themeState.dark ? "text-slate-100 bg-primary" : "text-zinc-950 bg-white"}`}
    >
      <div className="cart pt-24 w-5/6 mx-auto">
        <div className="mx-auto w-full flex flex-col md:flex-row justify-between items-center">
          <h2 className="text-[40px]">{length} item in cart</h2>
          <input
            type="text"
            value={search}
            placeholder="search for item"
            onChange={handelSearch}
            ref={inputRef}
            className="py-1 px-1 bg-transparent rounded-md text-white outline-none border "
          />
        </div>
        <div className={`cards grid grid-cols-1 md:grid-cols-2`}>
          {cartShow
            .sort((a, b) => b.quantity - a.quantity)
            .map((item, key) => {
              return (
                <div
                  key={key}
                  className={`cards flex justify-between items-center w-4/5 my-4 mx-auto rounded-md overflow-hidden border-[2px] ${themeState.dark ? "border-slate-100" : "border-zinc-950"}`}
                >
                  <div className="w-20 h-full mr-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className=" h-full object-cover"
                    />
                  </div>
                  <div className="content w-4/5">
                    <h3
                      className={`${themeState.dark ? "text-teal-50" : "text-slate-950"} text-[23px] my-2 mx-auto`}
                    >
                      {item.name}
                    </h3>
                    <div className="flex justify-between items-center w-32">
                      <span
                        className={` cursor-pointer hover:bg-slate-900 text-[16px] w-7 h-7 rounded-full bg-slate-700 flex items-center justify-center ${themeState.dark ? "text-slate-100" : "text-zinc-100"}`}
                        onClick={() => Plus(item)}
                      >
                        +
                      </span>
                      <span
                        className={`my-2 italic text-[16px] text-yellow-400 mx-4`}
                      >
                        {" "}
                        {item.quantity}
                      </span>
                      <span
                        className={` cursor-pointer hover:bg-slate-900 text-[16px] w-7 h-7 rounded-full bg-slate-700 flex items-center justify-center ${themeState.dark ? "text-slate-100" : "text-zinc-100"}`}
                        onClick={() => MINUS(item)}
                      >
                        -
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 text-[18px] mr-2">
                    <p
                      className=" cursor-pointer"
                      onClick={() => AddtoFav(item)}
                    >
                      <MdOutlineFavorite />
                    </p>
                    <p className=" cursor-pointer">
                      <Link to={`/shop/${item.id}`}>
                        <AiOutlineInfoCircle />
                      </Link>
                    </p>
                    <p className=" cursor-pointer">
                      <MdDelete onClick={() => REMOVE(item)} />
                    </p>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="flex justify-between items-center my-5 flex-wrap">
          <div className="price">
            <h2
              className={`text-[35px] italic ${themeState.dark ? "text-slate-100" : "text-slate-950"}`}
            >
              Total : ${total}
            </h2>
          </div>
          <div className="flex justify-between items-center gap-3">
            <Btn name={"Place order"} />
            <Btn
              name={"Remove All"}
              onClick={() => {
                cart.dispatch({
                  type: "CLEAR",
                });
              }}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
