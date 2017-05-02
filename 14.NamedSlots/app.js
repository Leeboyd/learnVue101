window.Event = new Vue()

Vue.component('modal', {
  template: `
    <div class="modal is-active">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">
            <slot name="header"></slot>
          </p>
          <button class="delete"></button>
        </header>
        <section class="modal-card-body">
          <slot></slot>
        </section>
        <footer class="modal-card-foot">
          <slot name="footer"></slot>
        </footer>
      </div>
    </div>
  `,
  methods: {

  }
})
new Vue({
  el: 'root',
  template: `
  <div class="container">
    <modal>
      <template slot="header">Modal Title</template>
      以於與義飛會山股節水來入物！開力地聲為後國；類見還到，學等福已成。部理能樂覺，不這用當；難老人了相步牛教反年一達好覺國拉此英這寫現突受辦臺主笑前。子我盡低如原觀？時入人；意我論正無政。
      <template slot="footer">
        <a class="button is-success">Save changes</a>
        <a class="button">Cancel</a>      
      </template>
    </modal>
  </div>
  `,
  data: {
    
  },
  created () {

  }
})