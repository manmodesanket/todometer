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
        <h2 className="w-full text-xl font-bold mt-5">Do Later</h2>
      )}
      {paused.map((todoItem) => (
        <DoLaterTodoCard key={todoItem.id} todoItem={todoItem} />
      ))}
      {completed.length > 0 && (
        <h2 className="w-full text-xl font-bold mt-5">Completed</h2>
      )}
      {completed.map((todoItem) => (
        <CompleteTodoCard key={todoItem.id} todoItem={todoItem} />
      ))}
    </section>
  );
}

export default TodoView;
