<template>
    <ul >
       <li v-for="(item, index) in getList" :key="index" > {{item.title}}</li>
    </ul>
     
  
</template>

<script>

export default {
  name: "TodoItem",
  computed: {
  getList() {
      return this.$store.getters.getList;
    }
  },
  methods: {

  },
   created() {
     this.$store.dispatch("getList");
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.is-done {
  position: relative;
  display: inline-block;
  &::after {
    background: rgba(0, 0, 0, 0.5);
    content: "";
    height: 0.125em;
    right: 0;
    left: 0;
    position: absolute;
    top: 50%;
  }
}





.todo-helpers-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.todo-clear-done-button {
  width: 100%;
  background-color: #c62828;
  border-radius: 3px;
  color: #fff;
  padding: 10px 0;
  font-weight: bold;
  border: none;
  max-width: 100px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}

.todo-list {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0;
  margin: 20px 0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}

.todo-list-item {
  padding: 20px;
  background: #90a4ae5c;
  text-indent: 0;
  list-style-type: none;
  position: relative;
}

.todo-list-item:nth-child(even) {
  background: #37474f;
  color: #fff;
}

.todo-edit {
  padding: 5px;
  border-radius: 3px;
  outline: none;
  border: none;
}

.todo-cancel-button {
  background-color: #c62828;
  color: #fff;
  padding: 5px 3px;
  border-radius: 3px;
  border: none;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}

.todo-done {
  display: inline-block;
}
.todo-text {
  margin-left: 10px;
  display: inline-block;
  cursor: pointer;

  font-size: 20px;
}

.todo-list-delete {
  cursor: pointer;
  position: absolute;
  right: 10px;
  bottom: calc(50% - 10px);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
