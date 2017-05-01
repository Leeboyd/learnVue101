Vue.component('tabs', {
  template: `
    <div>
      <div class="tabs">
        <ul>
          <li v-for="tab in tabs" :class="{ 'is-active': tab.isActived }">
            <a :href="tab.href" @click.stop="switchTab(tab)">{{ tab.name }}</a>
          </li>
        </ul>
      </div>
      <div class="tabs-details">
        <slot></slot>
      </div>
    </div>
  `,
  data () {
    return {
      tabs: []
    }
  },
  created () {
    this.tabs = this.$children
  },
  methods: {
    switchTab (selectedTab) {
      this.tabs.forEach((tab) => {
        tab.isActived = (tab.name === selectedTab.name)
      })
    }
  }
})

Vue.component('tab', {
  template: `
    <div v-show="isActived">
      <slot></slot>
    </div>
  `,
  props: {
    name: {
      type: String,
      required: true
    },
    selected: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      isActived: false
    }
  },
  computed: {
    href () {
      return `#${this.name.toLowerCase().replace(/ /g, '-')}`
    }
  },
  mounted () {
    this.isActived = this.selected
  }
})

new Vue({
  name: 'root',
  el: '#app',
  template: `
    <tabs>
      <tab name="About Me" :selected="true">
        <h1>1同球的！你手歡視過所顯商布主一別；爭毛的家馬風名愛親不更，向笑上年強市港對飛聽票他人去？放真一觀的再相的白此活廣住朋美首在……媽了小部知灣加，了苦行可食營高花還爸記們所童復思行沒音、考的國後現像是理全沒然達得工不本手德準。上大他新電的近新料決全……</h1>
      </tab>
      <tab name="About Culture">
        <h1>2同球的！你手歡視過所顯商布主一別；爭毛的家馬風名愛親不更，向笑上年強市港對飛聽票他人去？放真一觀的再相的白此活廣住朋美首在……媽了小部知灣加，了苦行可食營高花還爸記們所童復思行沒音、考的國後現像是理全沒然達得工不本手德準。上大他新電的近新料決全……</h1>
      </tab>
      <tab name="About Vision">
        <h1>3同球的！你手歡視過所顯商布主一別；爭毛的家馬風名愛親不更，向笑上年強市港對飛聽票他人去？放真一觀的再相的白此活廣住朋美首在……媽了小部知灣加，了苦行可食營高花還爸記們所童復思行沒音、考的國後現像是理全沒然達得工不本手德準。上大他新電的近新料決全……</h1>
      </tab>
    </tabs>
  `,
  data: {

  },
  computed: {

  }
})
