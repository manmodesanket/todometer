import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useAppContext } from "../../context/AppContext";

export default function AddItemForm() {
  const { todoDispatch } = useAppContext();
  const [content, saveContent] = useState("");
  let inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content) {
      todoDispatch({
        type: "ADD_ITEM",
        payload: content,
      });
    }

    saveContent("");
    inputRef.current.focus();
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <section>
      <form
        className="w-full relative mt-10 flex justify-center items-center"
        onSubmit={() => handleSubmit(e)}
      >
        <input
          value={content}
          ref={inputRef}
          onChange={(e) => saveContent(e.target.value)}
          className="w-full border-2 p-2 sm:p-4 rounded border-black dark:bg-inputColor "
          placeholder="Add new item"
        />
        <button
          type="submit"
          className="absolute right-6 w-6 h-6 flex items-center"
          onClick={handleSubmit}
        >
          <Image src="/plus.svg" alt="plus" width="24" height="24" />
        </button>
      </form>
    </section>
  );
}
