import React, { useContext } from "react";
import Client from "../card/client";
import { motion } from "framer-motion";
import { themeContext } from "../../Context/Theme";
const Clients = () => {
  const { themeState } = useContext(themeContext);
  const clients = [
    {
      id: 1,
      name: "Ahmed Yaser",
      job: "Head of sales at Tesla ",
      rate: 5,
      img: "https://imageio.forbes.com/specials-images/imageserve/5f469ea85cc82fc8d6083f05/Amazon-Founder-and-CEO-Jeff-Bezos/0x0.jpg?format=jpg&width=480",
      desc: "There are many variatioof passages of Lorem Ipsum ava but the majority If you are going to use a passage of Lorem Ipsum, you need tasure there isn't anything embarrassinhidden in believable.",
    },
    {
      id: 2,
      name: "Sara Jamel",
      job: "Accountant of Ozone",
      rate: 3,
      img: "https://www.rollingstone.com/wp-content/uploads/2023/03/a-good-person-022_37C-3_B078C005_211122_R28J-022_37C-3_B078C005_211122_R28J_R_rgb.jpg",
      desc: "There are many variatioof passages of Lorem Ipsum ava but the majority If you are going to use a passage of Lorem Ipsum, you need tasure there isn't anything embarrassinhidden in believable.",
    },
    {
      id: 3,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU4bfSHw6wBubBRvB6IS6gG3GRq2O0rYLKLA&s",
      name: "Yahia Wael",
      job: "CEO Of Montee",
      rate: 4,
      desc: "There are many variatioof passages of Lorem Ipsum ava but the majority If you are going to use a passage of Lorem Ipsum, you need tasure there isn't anything embarrassinhidden in believable.",
    },
    {
      id: 4,
      name: "Hala Elsayed",
      job: "Gamer",
      rate: 5,
      img: "https://live-production.wcms.abc-cdn.net.au/9826dadbc7a9cd88cd3ebbe4a40ebf92?impolicy=wcms_crop_resize&cropH=608&cropW=1080&xPos=0&yPos=0&width=862&height=485",
      desc: "There are many variatioof passages of Lorem Ipsum ava but the majority If you are going to use a passage of Lorem Ipsum, you need tasure there isn't anything embarrassinhidden in believable.",
    },
  ];
  let showClients = clients.map((client, i) => (
    <Client
      key={i}
      id={i}
      desc={client.desc}
      job={client.job}
      name={client.name}
      img={client.img}
      rate={client.rate}
    />
  ));
  return (
    <>
      <div className="clients w-5/6 mx-auto">
        <motion.h2
          initial={{ y: 20, opacity: 0, scale: 0 }}
          whileInView={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, type: "tween" }}
          className={`text-center text-[35px] ${themeState.dark ? "text-slate-100" : "text-zinc-950"} my-16`}
        >
          What Our Clients Are Saying
        </motion.h2>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-3">
          {showClients}
        </div>
      </div>
    </>
  );
};

export default Clients;
