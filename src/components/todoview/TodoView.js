import { useAppContext } from "../../context/AppContext";
import CompleteTodoCard from "./CompletedTodoCard";
import DoLaterTodoCard from "./DoLaterTodoCard";
import PendingTodoCard from "./PendingTodoCard";

function TodoView() {
  const { pending, paused, completed } = useAppContext();
  return (
    <section>
      {pending.map((todoItem) => (
        <PendingTodoCard key={todoItem.id} todoItem={todoItem} />
      ))}
      {paused.length > 0 && (
        <h2 className="w-11/12 sm:w-10/12 text-xl font-bold px-4 mt-5 sm:mx-12">
          Do Later
        </h2>
      )}
      {paused.map((todoItem) => (
        <DoLaterTodoCard key={todoItem.id} todoItem={todoItem} />
      ))}
      {completed.length > 0 && (
        <h2 className="w-11/12 sm:w-10/12 text-xl font-bold px-4 mt-5 sm:mx-12">
          Completed
        </h2>
      )}
      {completed.map((todoItem) => (
        <CompleteTodoCard key={todoItem.id} todoItem={todoItem} />
      ))}
    </section>
  );
}

export default TodoView;
