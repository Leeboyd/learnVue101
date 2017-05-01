new Vue({
  el: '#app',
  template: `
    <div>
      <h1>Incompleted</h1>
      <Incompleted v-bind:tasks="tasks"></Incompleted>
      <h1>Completed</h1>
      <ul>
        <li v-for="task in taskCompleted" v-text="task.description"></li>
      </ul>
    </div>  
  `,
  name: 'root',
  data: {
    tasks: [
      { description: 'Arrows of Burning Heat', completed: true },
      { description: 'Cooking with Koko ', completed: false },
      { description: 'Koko Cuisine', completed: true },
      { description: 'Playtime with Cottla', completed: false },
      { description: 'Kokos Kitchen', completed: true },
      { description: 'Kokos Specialty', completed: false },
      { description: 'Rupees 133', completed: false }
    ],
    isHide: true
  },
  computed: {
    taskCompleted () {
      return this.tasks.filter((task) => task.completed)
    }
  }
})
