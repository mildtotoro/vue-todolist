<template>
    <div class="">
        <div v-for="(list, index) in todoList" :key="index">
            
          {{list.text}}
          
          <button v-if="list.status !== 'done'" @click="addList(list)">next</button>
          <button v-if="list.status !== 'todo'" @click="backStatusList(list)">back</button>
          <button @click="removeItem(list)">remove</button>
            
        </div>
    </div>
</template>

<script>

export default {
  name: 'List',
    props: {
        todoList: Array,
        addList: Function,
        backStatusList: Function,
        removeItem: Function,
    }
};
</script>
