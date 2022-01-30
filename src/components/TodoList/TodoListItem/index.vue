<template>
  <tr>
    <td class="title">
      <input
        type="text"
        name="title"
        :value="title"
        :disabled="completed"
        @change="updateTodoTitleLocal"
      />
    </td>
    <td>
      <input
        type="checkbox"
        name="completed"
        :checked="completed"
        @change="updateTodoStatusLocal"
      />
    </td>
    <td><button @click="deleteClicked">Delete</button></td>
  </tr>
</template>

<script>
import {
  DELETE_TODO,
  UPDATE_TODO_STATUS,
  UPDATE_TODO_TITLE,
} from "./../../../constants/emits";

export default {
  name: "TodoListItem",
  props: {
    title: String,
    completed: Boolean,
    index: Number,
  },
  methods: {
    updateTodoStatusLocal() {
      this.$emit(UPDATE_TODO_STATUS, !this.completed, this.index);
    },
    updateTodoTitleLocal(e) {
      this.$emit(UPDATE_TODO_TITLE, e.target.value, this.index);
    },
    deleteClicked() {
      this.$emit(DELETE_TODO, this.index);
    },
  },
};
</script>
