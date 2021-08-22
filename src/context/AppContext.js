import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import useLocalStorage from "../hooks/useLocalStorage";
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
  //console.log(localStorage);
  const [storedDarkMode, setStoredDarkMode] = useLocalStorage("dark", "light");
  const [darkMode, setDarkMode] = useState(storedDarkMode);

  useEffect(() => {
    setDarkMode(storedDarkMode);
  }, [storedDarkMode]);

  const toggleTheme = () => {
    setStoredDarkMode((currTheme) =>
      currTheme === "light" ? "dark" : "light"
    );
  };

  useEffect(() => {
    const pending = todoList.filter((item) => item.status === "pending");
    const paused = todoList.filter((item) => item.status === "paused");
    const completed = todoList.filter((item) => item.status === "completed");

    setPending(pending);
    setPaused(paused);
    setCompleted(completed);
  }, [todoList]);

  return (
    <AppContext.Provider
      value={{
        toggleTheme,
        darkMode,
        pending,
        paused,
        completed,
        completedPercentage: completed.length / todoList.length,
        pausedPercentage: paused.length / todoList.length,
        todoDispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
