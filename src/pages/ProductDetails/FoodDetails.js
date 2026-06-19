import { useContext, useEffect, useMemo, useReducer, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Btn from "../../components/btn/Btn";
import { FaStar } from "react-icons/fa";
import { MdOutlineFavorite } from "react-icons/md";
import Cards from "../../components/cards/Cards";
import { cart, CartContext } from "../../Context/CartHooks";
import { Favourite } from "../../Context/FavouriteHooks";
import { themeContext } from "../../Context/Theme";
import Loading from "../../components/Loading/Loading";
import Footer from "../../components/Footer/Footer";
const FoodDetails = () => {
  const { id } = useParams();
  const [inCart, setIncart] = useState(id);
  const [isInCart, setisIncart] = useState(false);
  const { themeState, dispatch } = useContext(themeContext);
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({
    instructions: [],
  });
  const cart = useContext(CartContext);
  const { favCart, dispatchFav } = useContext(Favourite);
  const nav = useNavigate();
  useEffect(() => {
    setIncart(id);
    setisIncart(false);
  }, [id]);
  useEffect(() => {
    setLoading(true);
    fetch(`https://dummyjson.com/recipes/${id}`)
      .then((res) => res.json())
      .then((productFood) => setProduct(productFood))
      .catch((_) => nav("/Not"))
      .finally((_) => setLoading(false));
  }, [id]);
  let isFound = useMemo(() => {
    return favCart.findIndex((pro) => pro.id === id);
  }, [id, favCart]);

  return (
    <>
      {loading && <Loading />}
      <div
        className={`productpage ${themeState.dark ? "bg-primary" : "bg-white"}`}
      >
        <div className="w-5/6 mx-auto mb-12">
          <div className="product grid grid-cols-1 md:grid-cols-2 items-start">
            <div className="img mt-24  md:w-5/6 ms-0">
              <img
                className="w-full rounded-2xl"
                src={product.image}
                alt={product.name}
              />
            </div>
            <div className="details mt-24">
              <h3
                className={`${themeState.dark ? "text-slate-100" : "text-zinc-950"} text-[35px] mb-16`}
              >
                {product.name}
              </h3>
              {product.instructions.map((p, i) => (
                <p
                  key={i}
                  className={`${themeState.dark ? "text-slate-300" : "text-zinc-800"} my-2 text-start`}
                >
                  {p}
                </p>
              ))}
              <div className="flex gap-x-2 my-9">
                {Array.from({ length: Math.round(product.rating) }).map(
                  (_, i) => (
                    <i key={i} className="text-yellow-400">
                      <FaStar />
                    </i>
                  ),
                )}
              </div>
              <div className="price-cart flex justify-between items-center w-5/6  mt-10">
                <div className="price text-yellow-400 text-[18px]">
                  <span className="mr-1">${product.prepTimeMinutes}</span>
                  <del>${product.prepTimeMinutes * 2}</del>
                </div>
                <div className="flex gap[200px] items-center">
                  <span
                    onClick={() => {
                      dispatchFav({
                        type: "ADD",
                        payload: product,
                      });
                    }}
                    className={`text-[25px] ${themeState.dark ? "text-slate-50" : "text-zinc-900"} inline-block mr-5 cursor-pointer`}
                  >
                    <MdOutlineFavorite />
                  </span>
                  <Btn
                    name={
                      isFound !== -1 ? "item in cart" : "Add to Cart"
                    }
                    onClick={() => {
                      cart.dispatch({ 
                        type: "ADD",
                        item: product,        
                      });
                      setisIncart(true);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="similar-products">
            <h2 className="heading text-slate-100 text-[35px] my-12 italic capitalize ">
              freshly prepared, for you :
            </h2>
            <Cards start={id} end={id + 2} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FoodDetails;
