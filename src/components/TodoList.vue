<template>
  <div>
    <h2>Todolist</h2>
    <div class="ui grid">
      <div class="column one">
        <form
          @submit="handleSubmit"
        >
        <div class="ui input">
  <input v-model="text"  type="text" placeholder="Today i will">
</div>
         <button type="submit"  class="ui blue button">Add</button>
          <!-- <input type="submit" value="submit"> -->
        </form>
      </div>
   
    </div>
   
    <div class="ui three column grid">
    <div class="row">
        <div class="column">
           <h2>To do</h2>
          <List 
            :todoList="todoList"
            :addList="addDoingList"
            :removeItem="removeItem"
          />
        </div>
        <div class="column">
          <h2>Doing</h2>
          <List 
            :todoList="doingList"
            :addList="addDoneList"
            :removeItem="removeItem"
            :backStatusList="backStatusList"
          />
        </div>
        <div class="column">
          <h2>Done</h2>
          <List 
            :todoList="doneList"
            :removeItem="removeItem"
            :backStatusList="backStatusList"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import List from "./List.vue";

export default {
  name: 'TodoList',
  data () {
    return {
      todoList: [],
      doingList: [],
      doneList: [],
      text: null
    }
  },
  components: {
    List
  },
  methods: {
    backStatusList(item) {
      const oldStatus = item.status;
      this.removeItem(item);
      if(oldStatus == 'done') {
        this.addDoingList(item);
      } else if(oldStatus == 'doing') {
        this.todoList.push({
          ...item,
          status: 'todo',
        });
      }
    },
    handleSubmit: function(e) {
      console.log("e, ",e);
      if(this.text) {
        this.todoList.push({
          id: this.generateUUID(),
          text: this.text,
          status: 'todo'
        });
        this.text = null;
      }
      e.preventDefault();
    },
    removeItem(item) {
      if(item.status == 'todo') {
        const newList = this.todoList.filter((list) => {
          return (list.id !== item.id);
        });

        this.todoList = newList;
      }else if(item.status == 'doing') {
        const newList = this.doingList.filter((list) => {
          return (list.id !== item.id);
        });

        this.doingList = newList;
      } else if(item.status == 'done'){
        const newList = this.doneList.filter((list) => {
          return (list.id !== item.id);
        });

        this.doneList = newList;
      }
    },
    addDoingList(item) {
      this.removeItem(item);
      this.doingList.push({
        ...item,
        status: 'doing'
      });
    },
    addDoneList(item) {
      this.removeItem(item);
      this.doneList.push({
        ...item,
        status: 'done'
      });
    },
    generateUUID() {
      let d = new Date().getTime();
      if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
        d += performance.now(); //use high-precision timer if available
      }
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        let r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === 'x' ? r : (r && 0x3 | 0x8)).toString(16);
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
