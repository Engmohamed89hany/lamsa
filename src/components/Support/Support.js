import React, { useContext } from 'react'
import Btn from '../btn/Btn'
import { motion } from 'framer-motion'
import { themeContext } from '../../Context/Theme';
const Support = () => {
      const { themeState } = useContext(themeContext);
    
  return (
          <motion.div
        transition={{ duration: 0.5, type: "tween" }}
        whileInView={{ x: 0, opacity: 1 }}
        initial={{ x: -200, opacity: 0 }}
        className="from my-16"
      >
        <h2
          className={`${themeState.dark ? "text-slate-100" : "text-zinc-950"} text-[35px] text-center`}
        >
          For more Support
        </h2>
        <div className="subscribe flex justify-center items-center">
          <div
            className={`input flex w-100 my-10 ${themeState.dark ? "border-gray-100" : "border-zinc-950"} border-2 pl-4 rounded-3xl overflow-hidden`}
          >
            <input
              type="email"
              className={`bg-transparent outline-none text-[20px] w-5/6 ${themeState.dark ? "text-white" : "text-zinc-800"}`}
              placeholder="email@..."
            />
            <Btn name={"Subscribe"} to={"/contact"} />
          </div>
        </div>
      </motion.div>
  )
}

export default Support