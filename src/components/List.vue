<template>
    <div class="">
        <div v-for="(list, index) in todoList" :key="index">
            
          {{list.text}}
          
          <button @click="addList(list)" v-if="list.status !== 'done'"  
          class="ui vertical animated button positive basic mini" tabindex="0">
            <div class="hidden content">
                {{(list.status == 'todo')?"Doing":"Done"}}
            </div>
            <div class="visible content">
                <i class="check icon"></i>
            </div>
        </button>

        
          <button v-if="list.status !== 'todo'" class="ui secondary basic button mini" @click="backStatusList(list)"><i class="icon undo"></i></button>
          <button @click="removeItem(list)" class="ui secondary basic button mini"><i class="icon x"></i></button>
            
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
