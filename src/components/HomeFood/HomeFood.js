import React, { useContext } from "react";
import Btn from "../btn/Btn";
import Cards from "../cards/Cards";
import { motion } from "framer-motion";
import { themeContext } from "../../Context/Theme";
const HomeFood = () => {
  const { themeState } = useContext(themeContext);

  return (
    <div>
      <motion.h2
        initial={{
          y: -20,
          opacity: 0,
          scale: 0.6,
        }}
        whileInView={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, type: "tween" }}
        className={`${themeState.dark ? "text-slate-50" : "text-slate-900"} text-center text-[35px] mt-16 mb-7`}
      >
        Our Best & Delicious Menu
      </motion.h2>
      <div>
        <Cards start={20} end={30} />
      </div>
      <div className="flex justify-center my-3">
        <Btn name={"See All"} to={"/menu"} />
      </div>
    </div>
  );
};

export default HomeFood;
