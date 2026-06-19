import React, { useContext } from "react";
import { themeContext } from "../../Context/Theme";
import Footer from "../../components/Footer/Footer";

const Contact = () => {
  const { themeState } = useContext(themeContext);
  return (
    <>
      <section className={themeState.dark ? "bg-primary" : "bg-white"}>
        <div className="md:w-5/6 w-[90%] mx-auto h-fit">
          <div className="heading text-center pt-24">
            <h2
              className={`${themeState.dark ? "text-slate-100" : "text-zinc-950"} text-[35px]`}
            >
              Contact Us
            </h2>
            <p
              className={`${themeState.dark ? "text-slate-300" : "text-zinc-700"} my-3 text-[16px]`}
            >
              We're always ready to serve you 🍽️
            </p>
          </div>
          <div className=" grid grid-cols-1 md:grid-cols-2 relative">
            <div
              className={`${themeState.dark ? "bg-zinc-950" : "bg-slate-50"} rounded-md p-4 md:w-[70%] w-full mx-auto h-fit`}
            >
              <h3
                className={`${themeState.dark ? "text-slate-100" : "text-zinc-950"} text-[23px]`}
              >
                Get in Touch
              </h3>
              <p
                className={`${themeState.dark ? "text-slate-200" : "text-zinc-800"} text-[18px] my-6`}
              >
                📢 Address :{" "}
                <span
                  className={`${themeState.dark ? "text-slate-300" : "text-zinc-700"} mx-3`}
                >
                  Cairo, Egypt
                </span>{" "}
              </p>
              <p
                className={`${themeState.dark ? "text-slate-200" : "text-zinc-800"} text-[18px] my-6`}
              >
                📞phone :{" "}
                <span
                  className={`${themeState.dark ? "text-slate-300" : "text-zinc-700"} mx-3`}
                >
                  +012030405060
                </span>{" "}
              </p>
              <p
                className={`${themeState.dark ? "text-slate-200" : "text-zinc-800"} text-[18px] my-6`}
              >
                ✉️ Email :{" "}
                <span
                  className={`${themeState.dark ? "text-slate-300" : "text-zinc-700"} mx-3`}
                >
                  info@resturant.com
                </span>{" "}
              </p>
              <h3
                className={`${themeState.dark ? "text-slate-100" : "text-zinc-950"} text-[23px]`}
              >
                Opening Hours
              </h3>
              <p
                className={`${themeState.dark ? "text-slate-200" : "text-zinc-800"} text-[18px] my-6`}
              >
                Mon - Sun :
                <span
                  className={`${themeState.dark ? "text-slate-300" : "text-zinc-700"} mx-3`}
                >
                  10:00 AM-1200 AM
                </span>
              </p>
            </div>
            <div>
              <div className="relative h-[110vh]">
                <form
                  className={`border-1 ${themeState.dark ? "bg-zinc-950 text-slate-100 border-zinc-800" : "bg-slate-50 text-zinc-950 border-slate-200"} md:w-4/5  w-full rounded-md p-3 absolute right-0`}
                >
                  <div className="heading">
                    <h2
                      className={`${themeState.dark ? "text-slate-200" : "text-zinc-950"} text-start text-[30px]`}
                    >
                      Contact Us
                    </h2>
                  </div>
                  <div>
                    <label className="text-[16px] block my-2" htmlFor="name">
                      Name :
                    </label>
                    <input
                      className={`${themeState.dark ? "bg-zinc-800 text-slate-200 border-zinc-600" : "text-slate-950 bg-slate-200 border-slate-400"} rounded-2xl w-[90%]
                     mx-auto text-[20px]  outline-none py-1 px-2 border-2 my-3 `}
                      type="text"
                      placeholder="Name..."
                      id="name"
                    />
                  </div>
                  <div>
                    <label className="text-[16px] block my-2" htmlFor="email">
                      Email :
                    </label>
                    <input
                      type="email"
                      placeholder="Email..."
                      name="email"
                      id="email"
                      className={`${themeState.dark ? "bg-zinc-800 text-slate-200 border-zinc-600" : "text-slate-950 bg-slate-200 border-slate-400"} rounded-2xl w-[90%]
         mx-auto text-[20px]  outline-none py-1 px-2 border-2 my-3 `}
                    />
                  </div>
                  <div>
                    <label
                      className="text-[16px] block my-2"
                      htmlFor="suggestions : "
                    >
                      Suggestions :
                    </label>
                    <textarea
                      className={`${themeState.dark ? "bg-zinc-800 text-slate-200 border-zinc-600" : "text-slate-950 bg-slate-200 border-slate-400"} rounded-2xl w-[90%]
                     mx-auto text-[20px]  outline-none py-1 px-2 border-2 my-3 `}
                      placeholder="suggest..."
                      rows={8}
                    ></textarea>
                  </div>
                  <div className="btn">
                    <button
                      className={`btn w-full ${themeState.dark ? "bg-slate-200 text-zinc-950 border-slate-900 hover:border-zinc-100 hover:text-zinc-100" : "bg-zinc-950 text-zinc-50 hover:border-slate-900 hover:text-zinc-950"}  text-center cursor-pointer my-4  rounded-2xl px-3 py-2 hover:bg-transparent hover:border-[1px]  transition-all ease-in duration-300 `}
                      type="submit"
                    >
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="my-16">
          <iframe
            title="Googel Map"
            loading="lazy"
            src="https://www.google.com/maps?q=Cairo%20Egypt&output=embed"
            className="w-full h-[70vh] border-1 border-gray-300 grayscale brightness-90"
          ></iframe>
        </div>
        <Footer />
      </section>
    </>
  );
};

export default Contact;
