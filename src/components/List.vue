<template>
    <div>
        <div v-for="(list, index) in todoList" :key="index">
            
          {{list.text}}
          
          <button v-if="list.status !== 'done'" @click="addList(list)">next</button>
          <button v-if="list.status !== 'todo'" @click="backStatusList(list)">back</button>
            
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
    },
    methods: {
       
    }
};
</script>
