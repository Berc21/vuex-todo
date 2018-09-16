<template>
<div>


   <form  @submit.prevent="addItem" class="todo-form" >
      <input class="todo-input" type="text" v-model='newItem' placeholder="add new todo">
      <button class="todo-button" type="submit">Add</button>
    </form>
  </div>
</template>
<script>
export default {
  name: "AddTodo",
  data() {
    return {
      newItem: '',
    }
  },
  computed: {
     getList() {
      return this.$store.getters.getList;
    }
  },
  methods: {
    addItem() {

      const newTodo = {
        title: this.newItem,
        completed: false,
      } 
      this.$store.dispatch("addItem", newTodo);
      this.newItem = '';  
    }
  },

};
</script>


<style lang="scss" scoped>
.todo-form {
  display: flex;
  justify-content: space-between;
}

.todo-input {
  width: 100%;
  max-width: 400px;
  font-size: 18px;
  padding: 10px 10px 10px 10px;
  display: block;
  border: none;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}
.todo-button {
  width: 100%;
  background-color: #67daff;
  border-radius: 3px;
  font-weight: bold;
  border: none;
  max-width: 100px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}
</style>
