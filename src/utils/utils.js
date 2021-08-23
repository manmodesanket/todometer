export function removeTodo({ id, dispatch }) {
  dispatch({
    type: "REMOVE_ITEM",
    payload: id,
  });
}

export function addTodoLater({ todo, dispatch }) {
  dispatch({
    type: "ADD_TO_DO_LATER",
    payload: todo,
  });
}

export function addToComplete({ todo, dispatch }) {
  dispatch({
    type: "ADD_TO_COMPLETED",
    payload: todo,
  });
}

export function addToPending({ todo, dispatch }) {
  dispatch({
    type: "ADD_TO_PENDING",
    payload: todo,
  });
}
