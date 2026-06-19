import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/home/Home";
import FoodDetails from "./pages/ProductDetails/FoodDetails";
import Login from "./pages/Login/Login";
import Shop from "./pages/Shop/Shop";
import Cart from "./pages/Cart/Cart";
import Contact from "./pages/ContactPage/Contact";
import Register from "./pages/register/Register";
import { useContext } from "react";
import { themeContext } from "./Context/Theme";
import Fav from "./pages/FavCart/Fav";
import Mouse from "./components/Mouse";
import NotFound from "./pages/NotFound";
import RequireAuth from "./RequireAuth";
const App = () => {
  const { themeState } = useContext(themeContext);
  return (
    <>
      <div
        className={`h-screen ${themeState.dark ? "bg-primary" : "bg-slate-100"}`}
      >
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<RequireAuth />}>
            <Route path="/menu" element={<Shop />} />
            <Route path="/shop/:id" element={<FoodDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/faviorate" element={<Fav />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Mouse />
      </div>
    </>
  );
};

export default App;
