<template> 
    <resource-view>
      <img slot="logo" src="./assets/logo.png">
    </resource-view>
</template>

<script>
import resource from './components/resource.vue'
export default {
  name: 'Tutorial',
  components: {
    'resource-view': resource,
  },
  data () {
    return {

    }
  }
}
</script>
