import { v4 as uuidv4 } from "uuid";

export function todoReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      let newTodo = {
        id: uuidv4(),
        task: action.payload,
        time: Date.now(),
        status: "pending",
      };
      const newState = [...state, newTodo];
      return newState;
  }
}
