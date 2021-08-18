import Image from "next/image";

function TodoCard({ todoItem }) {
  return (
    <article className="w-11/12 sm:w-10/12 mx-auto px-4 py-2 mt-5 border-2 border-black rounded flex justify-between items-center">
      <div className="font-bold">{todoItem.task}</div>
      <div className="w-4/12 sm:w-2/12 flex justify-between">
        <figure
          onClick={() => console.log("check")}
          className="flex items-center"
        >
          <Image
            src="/x.svg"
            alt="x"
            width="32"
            height="32"
            className="flex items-center"
          />
        </figure>
        <figure>
          <Image
            src="/pause.svg"
            alt="pause"
            width="32"
            height="32"
            className="flex items-center"
          />
        </figure>
        <figure>
          <Image
            src="/check.svg"
            alt="check"
            width="32"
            height="32"
            className="flex items-center"
          />
        </figure>
      </div>
    </article>
  );
}

export default TodoCard;
