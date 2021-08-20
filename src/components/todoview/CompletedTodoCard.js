import Image from "next/image";
import { useAppContext } from "../../context/AppContext";

function CompleteTodoCard({ todoItem }) {
  const { todoDispatch } = useAppContext();
  return (
    <article className="w-full mx-auto px-4 py-2 mt-5 border-2 border-black rounded flex justify-between items-center">
      <div className="font-bold">{todoItem.task}</div>
      <div className="w-4/12 sm:w-2/12 flex flex-row-reverse justify-between">
        <figure
          className="flex items-center"
          onClick={() =>
            todoDispatch({ type: "REMOVE_ITEM", payload: todoItem.id })
          }
        >
          <Image src="/x.svg" alt="x" width="24" height="24" />
        </figure>
      </div>
    </article>
  );
}

export default CompleteTodoCard;
