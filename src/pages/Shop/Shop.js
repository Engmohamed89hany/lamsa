import React, { useContext, useEffect, useState } from "react";
import Btn from "../../components/btn/Btn";
import "./Shop.css";
import Count from "../../components/count/count";
import Shopcart from "../../components/ShopCart/Shopcart";
import Loading from "../../components/Loading/Loading";
import { themeContext } from "../../Context/Theme";
import Footer from "../../components/Footer/Footer";
import { motion } from "framer-motion";
import Clients from "../../components/Clients/Clients";
import Support from "../../components/Support/Support";
const Shop = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const { themeState } = useContext(themeContext);
  useEffect(() => {
    setLoading(true);
    fetch("https://dummyjson.com/recipes")
      .then((res) => res.json())
      .then((products) => setProduct(products.recipes))
      .then(() => {
        setLoading(false);
      })
      .catch((err) => setLoading(false));
  }, []);
  const show = product.map((pro, i) => {
    return <Shopcart key={i} item={pro} />;
  });
  return (
    <div className={themeState.dark ? "bg-primary" : "bg-white"}>
      {loading && <Loading />}
      <div className="hero-shop w-100 h-[100vh] md:px-[100px]">
        <motion.div
          initial={{ y: 20, opacity: 0, scale: 0 }}
          whileInView={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, type: "tween" }}
          className="content w-100 text-center mx-auto relative h-[100vh] flex flex-col justify-center items-center"
        >
          <h2 className="text-slate-100 text-[25px] md:text-[40px]  capitalize">
            Discover Our Menu
          </h2>
          <p className="md:text-[23px] text-[18px] text-slate-200 ">
            Freshly Prepared meals made{" "}
            <br className=" hidden md:inline-block" /> with the finest
            ingredients
          </p>
          <Btn name={"view Menu"} Class={"mx-auto my-2"} />
        </motion.div>
      </div>
      <Count />
      <div className="menu my-10 mx-auto w-5/6">
        <h3
          className={`${themeState.dark ? "text-slate-100" : "text-stone-950"} text-center italic text-[35px]`}
        >
          Our Delicious menu
        </h3>

        <div className=" grid grid-cols-1 md:grid-cols-2 gap-8 w-full mx-auto my-8 text-slate-100 ">
          {show}
        </div>
      </div>
      <Support/>
      <Footer />
    </div>
  );
};

export default Shop;
