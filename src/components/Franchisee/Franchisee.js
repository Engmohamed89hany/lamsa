import React, { useContext } from "react";
import Btn from "../btn/Btn";
import { motion } from "framer-motion";
import { themeContext } from "../../Context/Theme";
const Franchisee = () => {
  const { themeState } = useContext(themeContext);

  return (
    <div className="mx-auto w-5/6">
      <motion.h2
        initial={{ y: 20, opacity: 0, scale: 0 }}
        whileInView={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, type: "tween" }}
        className={`text-center text-[35px] ${themeState.dark ? "text-slate-100" : "text-slate-950"} my-8`}
      >
        Start The Adventure Today And <br /> Become a Franchisee
      </motion.h2>
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, type: "tween" }}
        className={`mx-auto md:w-5/6 ${themeState.dark ? "text-slate-300" : "text-gray-800"} md:text-center mb-5`}
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </motion.p>
      <div className="flex justify-center">
        {" "}
        <Btn name={"Become a Franchisee"} to={"/"} />
      </div>
    </div>
  );
};

export default Franchisee;
