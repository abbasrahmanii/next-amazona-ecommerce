import { createContext, useReducer } from "react";
import Cookies from "js-cookie";

export const Store = createContext();
const initialState = {
  darkMode: Cookies.get("darkMode") === "ON" ? true : false,
  // darkMode: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "DARK_MODE_ON":
      return {
        ...state,
        darkMode: true,
      };
    case "DARK_MODE_OFF":
      return {
        ...state,
        darkMode: false,
      };
    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  //dar eslintrc.json taghir dadim
  const value = { state, dispatch };
  return <StoreProvider value={value}>{props.children}</StoreProvider>;
}
