import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { todoReducer } from "../reducer/TodoReducer";

const AppContext = createContext();

export function useAppContext() {
  return useContext(AppContext);
}

export default function AppContextProvider({ children }) {
  const [todoList, todoDispatch] = useReducer(todoReducer, []);
  const [pending, setPending] = useState([]);
  const [paused, setPaused] = useState([]);
  const [completed, setCompleted] = useState([]);

  useEffect(() => {
    const pending = todoList.filter((item) => item.status === "pending");
    const paused = todoList.filter((item) => item.status === "paused");
    const completed = todoList.filter((item) => item.status === "completed");

    setPending(pending);
    setPaused(paused);
    setCompleted(completed);
  }, [todoList]);

  return (
    <AppContext.Provider value={{ pending, paused, completed, todoDispatch }}>
      {children}
    </AppContext.Provider>
  );
}
