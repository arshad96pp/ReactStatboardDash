import { createContext, useContext, useReducer } from "react";
import { initalState, reducer } from "./reducer";
import { AppContextAction } from "./action";

const AppContext = createContext();
const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initalState);
  const values = [state, dispatch];
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

const useAppContext = () => {
  const contextData = useContext(AppContext);
  if (!contextData) {
    throw new Error();
  }
  const [state, dispatch] = contextData;
  const actionFunction = AppContextAction(dispatch);

  return { state, actionFunction };
};

export { AppContextProvider, useAppContext };
