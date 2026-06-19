import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { useContext, useState } from "react";
import { themeContext } from "../../Context/Theme";
import Footer from "../../components/Footer/Footer";

const Login = () => {
  const { themeState } = useContext(themeContext);
  const [eye, setEye] = useState(true);
  const [err, setErr] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  function handelEye() {
    setEye((prev) => !prev);
  }
  function handelChange(e) {
    setForm({ ...form, [e.target.id]: e.target.value });
  }
  function handelSubmit(e) {
    e.preventDefault();
    if (form.email.trim() === "" || form.password.trim() === "") {
      setErr(true);
    } else {
      localStorage.setItem("form", JSON.stringify(form));
      window.location.pathname = "/";
    }
  }
  if (window.localStorage.getItem("form")) {
    window.history.go(-1);
    return;
  } else {
    return (
      <div className={`w-full ${themeState.dark ? "bg-primary" : "bg-white"}`}>
        <div
          className={`form grid grid-cols-1 md:grid-cols-2 w-5/6 mx-auto pt-24 mb-7`}
        >
          <div className="img">
            <img
              className="rounded-2xl"
              src="https://www.peterboroughtoday.co.uk/webimg/b25lY21zOmJjMDk1YTA0LWZiNjMtNDcxMi1hZTlhLTc3OWNjODdmNjU4NDplODRjZDM0NC0wMzhmLTQ2ZTctODRlMy0wM2NiNWYyZGJiNjY=.jpg?crop=3:2,smart&trim=&width=990&quality=65&enable=upscale"
              alt=""
            />
          </div>
          <form
            onSubmit={handelSubmit}
            className={`lg:w-3/4 md:w-5/6 w-[100%] mx-auto ${themeState.dark ? "bg-zinc-900 border-zinc-700" : "bg-slate-100 border-slate-400"} my-4 md:my-1  border-2 rounded-2xl p-5`}
          >
            <h2
              className={`${themeState.dark ? "text-slate-200" : "text-zinc-950"} text-start text-[30px]`}
            >
              Login
            </h2>
            <label
              htmlFor="email"
              className={`${themeState.dark ? " text-slate-300" : "text-zinc-900"} text-[15px] block mt-2 capitalize`}
            >
              email
            </label>
            <input
              type="email"
              id="email"
              value={form.email}
              onChange={handelChange}
              placeholder="Email@..."
              className={`${themeState.dark ? "bg-zinc-800 text-slate-200 border-zinc-600" : "text-slate-950 bg-slate-200 border-slate-400"} rounded-2xl w-[90%]
         mx-auto text-[20px]  outline-none py-1 px-2 border-2 my-3 `}
            />
            <div className="label flex justify-between items-center text-slate-400">
              <label
                htmlFor="password"
                className={`${themeState.dark ? " text-slate-300" : "text-zinc-900"} text-[15px] block mt-2 capitalize`}
              >
                password
              </label>
              <p
                className={`${themeState.dark ? " text-slate-300" : "text-zinc-900"} text-[15px] block mt-2 capitalize`}
              >
                Forgot your password
              </p>
            </div>
            <div className=" flex gap-2 w-full items-center">
              <input
                type={eye ? "password" : "text"}
                id="password"
                value={form.password}
                required
                minLength={6}
                onChange={handelChange}
                placeholder="Password..."
                className={`${themeState.dark ? "bg-zinc-800 text-slate-200 border-zinc-600" : "text-slate-950 bg-slate-200 border-slate-400"} rounded-2xl w-[90%]
         mx-auto text-[20px]  outline-none py-1 px-2 border-2 my-3 `}
              />
              {eye ? (
                <FaRegEyeSlash
                  onClick={handelEye}
                  className={
                    "text-2xl cursor-pointer " +
                    `${themeState.dark ? "text-white" : "text-zinc-900"}`
                  }
                />
              ) : (
                <FaRegEye
                  onClick={handelEye}
                  className={`text-2xl cursor-pointer ${themeState.dark ? "text-white" : "text-zinc-800"}`}
                />
              )}
            </div>
            <button
              type={"submit"}
              className={`btn w-full ${themeState.dark ? "bg-slate-200 text-zinc-950 border-slate-900 hover:border-zinc-100 hover:text-zinc-100" : "bg-zinc-950 text-zinc-50 hover:border-slate-900 hover:text-zinc-950"}  text-center cursor-pointer my-4  rounded-2xl px-3 py-2 hover:bg-transparent hover:border-[1px]  transition-all ease-in duration-300 `}
            >
              Signin
            </button>
            {err && (
              <span className="text-center text-[15px] text-red-600 w-full block">
                invaild password or email
              </span>
            )}
            <p
              className={`text-center ${themeState.dark ? " text-slate-300" : "text-zinc-700"} text-[15px] block mt-2 capitalize`}
            >
              Don't have an account? <Link to={"/register"}>SignUp</Link>
            </p>
            <p
              className={`text-center ${themeState.dark ? "text-slate-500" : "text-slate-900"} my-2 capitalize`}
            >
              or signin with :
            </p>
            <div
              className={`icons text-[25px] ${themeState.dark ? "text-slate-300" : "text-zinc-800"} w-fit mx-auto flex gap-3`}
            >
              <FaGoogle
                className={` cursor-pointer ${themeState.dark ? "hover:text-slate-200" : "hover:text-zinc-950"} duration-200 transition-all`}
              />
              <FaFacebook
                className={` cursor-pointer ${themeState.dark ? "hover:text-slate-200" : "hover:text-zinc-950"} duration-200 transition-all`}
              />
            </div>
          </form>
        </div>
        <Footer />
      </div>
    );
  }
};

export default Login;
