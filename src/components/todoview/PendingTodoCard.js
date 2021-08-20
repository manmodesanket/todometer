import Image from "next/image";
import { useAppContext } from "../../context/AppContext";
import { addToComplete, addTodoLater, removeTodo } from "../../utils/utils";

function PendingTodoCard({ todoItem }) {
  const { todoDispatch } = useAppContext();

  function handleAction(action) {
    if (action === "REMOVE") {
      removeTodo({ id: todoItem.id, dispatch: todoDispatch });
    } else if (action === "DO_LATER") {
      addTodoLater({ todo: todoItem, dispatch: todoDispatch });
    } else if (action === "COMPLETED") {
      addToComplete({ todo: todoItem, dispatch: todoDispatch });
    }
  }

  return (
    <article className="w-full mx-auto px-4 py-2 mt-5 border-2 border-black rounded flex justify-between items-center">
      <div className="font-bold">{todoItem.task}</div>
      <div className="w-4/12 sm:w-2/12 flex justify-between">
        <figure
          className="flex items-center cursor-pointer"
          onClick={() => handleAction("REMOVE")}
        >
          <Image
            src="/x.svg"
            alt="x"
            width="24"
            height="24"
            className="flex items-center cursor-pointer"
          />
        </figure>

        <figure
          onClick={() => handleAction("DO_LATER")}
          className="flex items-center cursor-pointer"
        >
          <Image src="/pause.svg" alt="pause" width="24" height="24" />
        </figure>

        <figure
          onClick={() => handleAction("COMPLETED")}
          className="flex items-center cursor-pointer"
        >
          <Image src="/check.svg" alt="check" width="24" height="24" />
        </figure>
      </div>
    </article>
  );
}

export default PendingTodoCard;
