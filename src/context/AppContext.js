import { createContext, useContext, useReducer } from "react";
import { todoReducer } from "../reducer/TodoReducer";

const AppContext = createContext();

export function useAppContext() {
  return useContext(AppContext);
}

export default function AppContextProvider({ children }) {
  let [todoList, todoDispatch] = useReducer(todoReducer, []);
  return (
    <AppContext.Provider value={{ todoList, todoDispatch }}>
      {children}
    </AppContext.Provider>
  );
}
