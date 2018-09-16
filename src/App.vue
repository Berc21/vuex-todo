<template>
  <div id="app">
  <div class="todo-container">
          <AddTodo/>
          <TodoItem  />
  </div>
    
  </div>
</template>

<script>
import TodoItem from './components/TodoItem.vue'
import AddTodo from './components/AddTodo.vue'

export default {
  name: 'app',
  components: {
    TodoItem,
    AddTodo
  },
  computed: {
 
  }
}
</script>

<style>

.todo-container {
  width: 600px;
  margin: 50px auto;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  position: relative;
}

</style>
