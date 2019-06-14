<template>
  <div>
    <div class="headTop" :style="{height:height}">
      <!-- {{title}} -->
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        height:this.globalData.headerHeight
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
<style lang="scss" scoped>
  .headTop{
    // height:138rpx;
    width:100%;
    background:white;
    position:fixed;
    top:0;
    left:0;  
  }
</style>