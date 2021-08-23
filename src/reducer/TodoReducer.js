import { v4 as uuidv4 } from "uuid";

export function todoReducer(state, action) {
  let newTodoList = [];
  let uncompleteTodos = [];
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

    case "REMOVE_ITEM":
      newTodoList = state.filter((todo) => todo.id != action.payload);
      return newTodoList;

    case "ADD_TO_DO_LATER":
      let otherTodos = state.filter((todo) => todo.id != action.payload.id);
      let newDoLaterTodo = {
        ...action.payload,
        status: "paused",
      };
      newTodoList = [...otherTodos, newDoLaterTodo];
      return newTodoList;

    case "ADD_TO_COMPLETED":
      uncompleteTodos = state.filter((todo) => todo.id != action.payload.id);
      let newCompletedTodo = {
        ...action.payload,
        status: "completed",
      };
      newTodoList = [...uncompleteTodos, newCompletedTodo];
      return newTodoList;

    case "ADD_TO_PENDING":
      uncompleteTodos = state.filter((todo) => todo.id != action.payload.id);
      let pendingTodo = {
        ...action.payload,
        status: "pending",
      };
      newTodoList = [...uncompleteTodos, pendingTodo];
      return newTodoList;

    default:
      return state;
  }
}
