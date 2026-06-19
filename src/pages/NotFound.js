import { useContext } from "react";
import { themeContext } from "../Context/Theme";
import Btn from "../components/btn/Btn";

const NotFound = () => {
  const { themeState } = useContext(themeContext);
  return (
    <div
      className={`flex flex-col justify-center items-center w-100 h-[100vh]`}
    >
      <h2
        className={`text-[50px] ${themeState.dark ? "text-slate-100" : "text-zinc-950"}`}
      >
        Ooops, Page Not Found
      </h2>
      <p
        className={` capitalize my-3 ${themeState.dark ? "text-slate-300" : "text-zinc-800"}`}
      >
        please check Your path Name{" "}
      </p>
      <Btn name={"Go to Home"} to={"/"} />
    </div>
  );
};

export default NotFound;
