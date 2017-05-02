window.Event = new Vue()

Vue.component('coupon', {
  template: `
    <input type="text" placeholder="Enter" @blur="onCouponApplied">
  `,
  methods: {
    onCouponApplied () {
      Event.$emit('applied')
    }
  }
})
new Vue({
  el: '#root',
  template: `
  <div>
    <coupon></coupon>
    <h1 v-if="couponApplied">用了一張優惠券</h1>
  </div>
  `,
  data: {
    couponApplied: false
  },
  created () {
    Event.$on('applied', () => {
      console.log('使用優惠券')
      this.couponApplied = true
    })
  }
})