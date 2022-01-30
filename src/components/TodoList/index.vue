<template>
  <div>
    <div class="d-flex jc-space-between ai-center">
      <h1>TodoList</h1>
      <button @click="showAddForm = !showAddForm">Add</button>
    </div>
    <add-todo-list
      v-if="showAddForm"
      @toggle-add-form="showAddForm = !showAddForm"
    />
    <table class="table">
      <thead>
        <tr>
          <th class="title">TITLE</th>
          <th>COMPLETED</th>
          <th>ACTIONS</th>
        </tr>
      </thead>
      <tbody>
        <todo-list-item
          v-for="(todo, index) in localTodos"
          @update-todo-status="updateTodoStatusLocal"
          @update-todo-title="updateTodoTitleLocal"
          @delete-todo="deleteTodoLocal"
          :key="index"
          :title="todo.title"
          :completed="todo.completed"
          :index="index"
        >
          <tr></tr>
        </todo-list-item>
      </tbody>
    </table>
  </div>
</template>

<script>
import TodoListItem from "./TodoListItem";
import AddTodoList from "./AddTodoList";
import { mapActions, mapState } from "vuex";
import { DELETE_TODO, UPDATE_TODO, VUEX_TODOS } from "./../../constants/vuex";

export default {
  name: "TodoList",
  components: {
    "todo-list-item": TodoListItem,
    "add-todo-list": AddTodoList,
  },
  data() {
    return {
      showAddForm: false,
    };
  },
  methods: {
    ...mapActions([UPDATE_TODO, DELETE_TODO]),
    updateTodoStatusLocal(completed, index) {
      let updatedTodo = { ...this.localTodos[index], completed: completed };
      this.updateTodo({ newValue: updatedTodo, index: index });
    },
    updateTodoTitleLocal(title, index) {
      let updatedTodo = { ...this.localTodos[index], title: title };
      this.updateTodo({ newValue: updatedTodo, index: index });
    },
    deleteTodoLocal(index) {
      this.deleteTodo(index);
    },
  },
  computed: {
    ...mapState({
      localTodos: VUEX_TODOS,
    }),
  },
};
</script>
