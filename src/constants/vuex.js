import { LOCAL_STORAGE_TODOS } from "./localstorage";
export const ADD_TODO = "addTodo";
export const UPDATE_TODO = "updateTodo";
export const DELETE_TODO = "deleteTodo";
export const VUEX_TODOS = "todos";

export const getInitialStateFromLocalStorage = () => {
  const localTodosString = localStorage.getItem(LOCAL_STORAGE_TODOS);
  if (localTodosString) {
    return JSON.parse(localTodosString);
  } else {
    return [];
  }
};
