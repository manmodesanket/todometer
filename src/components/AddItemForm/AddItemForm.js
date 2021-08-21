import { useState } from "react";
import { useAppContext } from "../../context/AppContext";

export default function AddItemForm() {
  const { todoDispatch } = useAppContext();
  const [content, saveContent] = useState("");

  const handleSubmit = (e) => {
    //it triggers by pressing the enter key
    if (e.code === "Enter") {
      e.preventDefault();
      todoDispatch({
        type: "ADD_ITEM",
        payload: content,
      });
      saveContent("");
    }
  };

  return (
    <section>
      <form
        className="w-full mt-10 flex justify-center"
        onSubmit={() => handleKeyPress(e)}
      >
        <input
          value={content}
          className="form__input form__element"
          onChange={(e) => saveContent(e.target.value)}
          className="w-full border-2 p-2 sm:p-4 rounded border-black"
          placeholder="Add new item"
          onKeyPress={handleSubmit}
        />
      </form>
    </section>
  );
}

//className="border-2 p-2 sm:p-4 w-11/12 sm:w-10/12 rounded border-black"
