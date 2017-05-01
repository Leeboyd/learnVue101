//-------------------------------------
// Global Registration
//-------------------------------------
Vue.component('Incompleted', {
  name: 'incompleted-components',
  props: ['tasks'],
  template: `
      <ul>
        <task v-for="task in taskInCompleted" v-on:done="moveToCompleted(task)">
          {{ task.description }}
        </task>
      </ul>  
  `,
  computed: {
    taskInCompleted () {
      return this.tasks.filter((task) => !task.completed)
    }
  },
  methods: {
    moveToCompleted (task) {
      task.completed = true
    }
  },
  //-------------------------------------
  // Local Registration
  //-------------------------------------
  components: {
    'task': {
      name: 'task-components',
      template: `
      <li v-show="isShow">
        <slot></slot>
        <button v-on:click.prevent="hideTask">X</button>
        <button v-on:click.prevent="$emit('done')">V</button>
      </li>`,
      data () {
        return {
          isShow: true
        }
      },
      methods: {
        hideTask () {
          this.isShow = false
        }
      }
    }
  }
})
