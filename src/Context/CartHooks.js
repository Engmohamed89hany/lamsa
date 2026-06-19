import { createContext, useEffect, useReducer } from "react";

export const CartContext = createContext();

const initialState = JSON.parse(localStorage.getItem("cart")) || [];

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD": {
      const inCart = state.find(item => item.id === action.item.id);

      if (inCart) {
        return state.map(item =>
          item.id === action.item.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...state, { ...action.item, quantity: 1 }];
    }

    case "PLUS":
      return state.map(item =>
        item.id === action.item.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

    case "MINUS":
      return state
        .map(item =>
          item.id === action.item.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0);

    case "REMOVE":
      return state.filter(item => item.id !== action.id);

    case "CLEAR":
      return [];

    default:
      return state;
  }
}

export default function CartProvider({ children }) {
  const [cartList, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartList));
  }, [cartList]);

  return (
    <CartContext.Provider value={{ cartList, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}
