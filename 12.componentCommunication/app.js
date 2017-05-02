Vue.component('coupon', {
  template: `
    <input type="text" placeholder="Enter" @blur="onCouponApplied">
  `,
  methods: {
    onCouponApplied () {
      this.$emit('applied')
    }
  }
})
new Vue({
  el: '#root',
  template: `
  <div>
    <coupon @applied="onCouponApplied"></coupon>
    <h1 v-if="couponApplied">用了一張優惠券</h1>
  </div>
  `,
  data: {
    couponApplied: false
  },
  methods: {
    onCouponApplied () {
      console.log('使用優惠券')
      this.couponApplied = true
    }
  }
})