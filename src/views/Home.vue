<template>
  <div class="home">
    <todo-list />
  </div>
</template>

<script>
// @ is an alias to /src
import TodoList from "@/components/TodoList";

export default {
  name: "Home",
  components: {
    "todo-list": TodoList,
  },
};
</script>
