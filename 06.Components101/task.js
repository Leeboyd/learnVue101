Vue.component('Incompleted', {
  template: `
      <ul>
        <li v-for="task in tasks">
          {{ task.description }}
        </li>
      </ul>  
  `,
  data() {
    return {
      tasks: [
        { description: 'Cooking with Koko ', completed: false },
        { description: 'Playtime with Cottla', completed: false },
        { description: 'Kokos Specialty', completed: false },
        { description: 'Rupees 133', completed: false }
      ]
    }
  }
})