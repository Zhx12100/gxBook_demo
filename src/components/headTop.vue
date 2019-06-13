<template>
  <div>
    <div class="headTop" style="background:pink">
      <!-- {{title}} -->
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {

      }
    },
    props :{
      // 'title':String
    },
    methods: {
      // addBtn_son(){
      //   this.$emit('addBtn')
      // }
    },
  }
</script>
<style lang="scss">
  .headTop{
    height:400rpx;
    width:100%;
    background:green;
  }
</style>