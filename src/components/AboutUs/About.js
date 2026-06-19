import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import { themeContext } from "../../Context/Theme";
const About = () => {
      const { themeState } = useContext(themeContext);
  return (
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, type: "tween", delay: 0.5 }}
        className="w-5/6 mx-auto my-16"
      >
        <motion.div
          initial={{
            opacity: 1,
            y: -100,
            scale: 0,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{ duration: 0.5, type: "tween" }}
          className={`text-center`}
        >
          <h2
            className={`text-[35px] ${themeState.dark ? "text-slate-50" : "text-slate-950"} my-5`}
          >
            Why We are Best Food Maker 
          </h2>
          <p
            className={`text-[17px] ${themeState.dark ? " text-gray-300" : "text-gray-800"}`}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
            <br /> Lorem scrambled it to make a type specimen book.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, type: "keyframes" }}
            className={`${themeState.dark ? " text-slate-300" : "text-slate-800"} text-[20px] text-start my-10`}
          >
            It is a long established fact that a reader will be distracted
            layout. The point of using Lorem Ipsum is that it has a more-or-less
            normal distribution of letters, as opposed to using English. Many
            desktop publishing packages and web page editors now use Lorem Ipsum
            as their default model text, and a search for 'lorem ipsum' will
            uncover many web sites still in their infancy. Various versions have
            evolved over the years, sometimes by accident, sometimes on purpose
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The
            normal distribution of letters, as opposed to using 'Content Many
            desktop publishing packages and web page editors search for 'lorem
            ipsum' will uncover many web sites still in humour and the like.
            Read More
          </motion.p>
          <motion.img
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, type: "keyframes" }}
            className="w-8/12 mx-auto rounded-lg my-11 lg:ml-[200px] object-contain"
            src="https://chefteey.com/wp-content/uploads/2023/09/cHEF-t-1100-x-500-px-480-x-640-px.jpg"
            alt="cheef"
          />
        </div>
      </motion.div>
  )
}

export default About