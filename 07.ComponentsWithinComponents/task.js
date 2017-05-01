//-------------------------------------
// Global Registration
//-------------------------------------
Vue.component('Incompleted', {
  template: `
      <ul>
        <task v-for="task in tasks">
          {{ task.description }}
        </task>
      </ul>  
  `,
  data () {
    return {
      tasks: [
        { description: 'Cooking with Koko ', completed: false },
        { description: 'Playtime with Cottla', completed: false },
        { description: 'Kokos Specialty', completed: false },
        { description: 'Rupees 133', completed: false }
      ]
    }
  },
  //-------------------------------------
  // Local Registration
  //-------------------------------------
  components: {
    'task': {
      template: `<li><slot></slot></li>`
    }
  }
})
