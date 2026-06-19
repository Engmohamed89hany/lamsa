import Btn from "../../components/btn/Btn";
import "./home.css";

import Count from "../../components/count/count";
import Client from "../../components/card/client";

import Cards from "../../components/cards/Cards";

import { motion } from "framer-motion";
import { useContext } from "react";
import { themeContext } from "../../Context/Theme";
import Footer from "../../components/Footer/Footer";
import Clients from "../../components/Clients/Clients";
import Hero from "../../components/HomeHero/Hero";
import About from "../../components/AboutUs/About";
import Support from "../../components/Support/Support";
import Franchisee from "../../components/Franchisee/Franchisee";
import HomeFood from "../../components/HomeFood/HomeFood";
const Home = () => {
  const { themeState } = useContext(themeContext);

  return (
    <motion.div
      whileInView={{ x: 0, y: 0 }}
      className={`${themeState.dark ? "bg-primary" : "bg-slate-100"} mb-0`}
    >
      <Hero />
      <About />
      <HomeFood />
      <Count />
      <Franchisee />
      <Clients />
      <Support />
      <Footer />
    </motion.div>
  );
};

export default Home;
