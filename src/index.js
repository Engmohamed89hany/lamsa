import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import CartProvider from "./Context/CartHooks";
import ThemeProvider from "./Context/Theme";
import FavouriteProvider from "./Context/FavouriteHooks";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <CartProvider>
      <FavouriteProvider>
        <ThemeProvider>
            <App />
        </ThemeProvider>
      </FavouriteProvider>
    </CartProvider>
  </BrowserRouter>,
  // </React.StrictMode>
);
