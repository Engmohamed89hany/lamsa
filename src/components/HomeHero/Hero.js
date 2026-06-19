import { motion } from 'framer-motion'
import React from 'react'
import Btn from '../btn/Btn'

const Hero = () => {
  return (
      <div className="hero">
        <div
          className={
            "relative z-10 w-5/6 mx-auto flex flex-col items-start justify-center h-[100vh]  text-white"
          }
        >
          <motion.h2
            initial={{
              opacity: "0",
              x: -100,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{ duration: 0.5, type: "keyframes" }}
            className="text-[45px] mb-5"
          >
            Welcome!
            <br />
            We Made
            <br />
            Delicious Food
            <br />
            for You
          </motion.h2>
          <motion.p
            initial={{
              opacity: 1,
              x: -100,
              scale: 0,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            transition={{ duration: 0.7, type: "tween" }}
            className="mb-4 line-clamp-2 w-[50%]"
          >
            Lorem Ipsum is simply dummy text of <br /> the printing and{" "}
            typesetting industry.{" "}
          </motion.p>
          <Btn to={"/menu"} name={`order Now`} />
        </div>
      </div>
  )
}

export default Hero