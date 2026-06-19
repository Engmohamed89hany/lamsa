import { useContext } from "react";
import { themeContext } from "../../Context/Theme";
import { motion } from "framer-motion";
const Count = () => {
  const { themeState } = useContext(themeContext);

  const info = [
    {
      h3: "+2M",
      span: "Happy Customers",
    },
    {
      h3: "+98%",
      span: "Customers Satisfaction",
    },
    {
      h3: "+20",
      span: "our Branches",
    },
    {
      h3: "+100",
      span: "total employees",
    },
  ];
  return (
    <div
      className={`counts my-44 ${themeState.dark ? "text-slate-50" : "text-slate-900"}`}
    >
      <motion.h2
        initial={{ y: 20, opacity: 0, scale: 0.1 }}
        whileInView={{ y: 0, opacity: 1, scale: 1 }}
        className="text-[35px] text-center my-14"
      >
        We believe in making quality food
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-5/6 mx-auto text-center">
        {info.map((item, i) => {
          return (
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 2, duration: i }}
              className="count"
              key={i}
              data-aos="fade-up"
              data-aos-delay={`${i * 300}`}
            >
              <h3 className="text-[25px] italic my-5">{item.h3}</h3>
              <span
                className={`${themeState.dark ? "text-gray-200" : "text-gray-900"} capitalize`}
              >
                {item.span}{" "}
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Count;
