import React, { useContext } from "react";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import "./card.css";
import { themeContext } from "../../Context/Theme";
import { motion } from "framer-motion";
const Client = ({ name, img, rate, desc, job, id }) => {
  const stars = Array.from({ length: 5 }, (_, i) =>
    i < rate ? <FaStar key={i} /> : <FaRegStar key={i} />,
  );
  const { themeState } = useContext(themeContext);
  return (
    <motion.div
      initial={{
        y: 40,
        opacity: 0,
        scale: 0.4,
      }}
      whileInView={{ y: 0, opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, type: "tween", delay: id * 0.1 }}
      className={`${themeState.dark ? " bg-zinc-950" : "bg-slate-100"} p-4 mx-3 rounded-xl`}
    >
      <div
        className={`person h-[100px] flex justify-between items-center text-center ${themeState.dark ? "text-slate-100" : "text-zinc-800"}`}
      >
        <img
          className="w-20 h-20 rounded-full object-contain"
          src={img}
          alt={name}
        />
        <div className="name flex items-center flex-col">
          <h3>{name}</h3>
          <p className="">{job}</p>
          <div className="flex text-yellow-500  gap-2 mb-4">{stars}</div>
        </div>
      </div>
      <div
        className={`desc ${themeState.dark ? "text-slate-400" : "text-gray-900"} mt-4`}
      >
        {desc}
      </div>
    </motion.div>
  );
};

export default Client;
