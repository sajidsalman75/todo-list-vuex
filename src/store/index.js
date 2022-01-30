import Vue from "vue";
import Vuex from "vuex";

import { LOCAL_STORAGE_TODOS } from "./../constants/localstorage";
import {
  ADD_TODO,
  UPDATE_TODO,
  DELETE_TODO,
  getInitialStateFromLocalStorage,
} from "./../constants/vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: getInitialStateFromLocalStorage(),
  },
  mutations: {
    addTodo(state, payload) {
      state.todos = [...payload];
      localStorage.setItem(LOCAL_STORAGE_TODOS, JSON.stringify(payload));
    },
    updateTodo(state, payload) {
      state.todos = [...payload];
      localStorage.setItem(LOCAL_STORAGE_TODOS, JSON.stringify(payload));
    },
    deleteTodo(state, payload) {
      state.todos = [...payload];
      localStorage.setItem(LOCAL_STORAGE_TODOS, JSON.stringify(payload));
    },
  },
  actions: {
    addTodo({ commit, state }, payload) {
      const todos = state.todos;
      todos.push(payload);
      commit(ADD_TODO, todos);
    },
    updateTodo({ commit, state }, payload) {
      console.log(payload);
      const todos = state.todos;
      todos[payload.index] = payload.newValue;
      commit(UPDATE_TODO, todos);
    },
    deleteTodo({ commit, state }, payload) {
      const todos = state.todos;
      const newTodos = todos.filter((todo, index) => index != payload);
      commit(DELETE_TODO, newTodos);
    },
  },
  getters: {
    getAllTodos(state) {
      return state.todos;
    },
  },
});
