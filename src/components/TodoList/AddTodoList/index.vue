<template>
  <div>
    <form @submit.prevent="submit">
      <input
        type="text"
        name="title"
        id="title-input"
        placeholder="Title"
        v-model="todo.title"
        required
      />
      <button type="submit">Done</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { TOGGLE_ADD_FORM } from "../../../constants/emits";
import { ADD_TODO } from "./../../../constants/vuex";

export default {
  name: "AddTodoList",
  data() {
    return {
      todo: {
        completed: false,
        title: "",
      },
    };
  },
  methods: {
    ...mapActions([ADD_TODO]),
    submit() {
      this.todo = { ...this.todo, id: Date.now() };
      this.addTodo(this.todo);
      this.todo = {
        completed: false,
        title: "",
      };
      this.$emit(TOGGLE_ADD_FORM);
    },
  },
};
</script>
