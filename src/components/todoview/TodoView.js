import { useAppContext } from "../../context/AppContext";
import TodoCard from "./TodoCard";

function TodoView() {
  const { todoList } = useAppContext();
  return (
    <section>
      {todoList.map((todoItem) => (
        <TodoCard key={todoItem.id} todoItem={todoItem} />
      ))}
    </section>
  );
}

export default TodoView;
