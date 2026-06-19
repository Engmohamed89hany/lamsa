import { createContext, useEffect, useReducer } from "react";
let intialValue = JSON.parse(localStorage.getItem("fav")) || [];
export const Favourite = createContext([]);
function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      const isFound = state.find((item) => item.id === action.payload.id);
      if (!isFound) {
        return [...state, action.payload];
      } else {
        return state;
      }
    case "Delete":
      return state.filter((item) => item.id !== action.payload.id);
    default:
      return state;
  }
}

export default function FavouriteProvider({ children }) {
  const [favCart, dispatchFav] = useReducer(reducer, intialValue);
  useEffect(()=>{
    localStorage.setItem("fav",JSON.stringify(favCart))
  },[favCart])
  return (
    <Favourite.Provider value={{ favCart, dispatchFav }}>
      {children}
    </Favourite.Provider>
  );
}
