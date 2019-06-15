<template>
  <div>
    <div class="tips" :class="showActive">
      <div class="tips_details">
        <div class="tips_details_text">
          {{text}}
        </div>
        <div class="flex">
          <slot></slot>
        </div>
      </div>
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
      'text':String,
      'showActive':String
    },
    methods: {

    },
  }
</script>
<style lang="scss" scoped>
  .showActive{
    top:0%!important;
    opacity: 1!important;
    .tips_details{
      transform: translateY(-50%)!important;
      top:50%!important;
    }
  }
  .tips{
    height:100%;
    width:100%;
    background:rgba(0,0,0,.3);
    position:fixed;
    top:100%;
    left:0;  
    transition: all .5s;
    opacity: 0; 
    .tips_details{
      position: absolute;;
      top:-100%;
      left:0; 
      right:0;
      margin:auto auto; 
      width: 560rpx;
      transform: translateY(0);
      // height:320rpx;
      padding:60rpx;
      background: white;
      border-radius:10rpx;
      box-sizing:border-box;
      font-size:28rpx;
      font-weight:500;
      color:rgba(26,26,26,1);
      line-height:46rpx;
      text-align: center;   
      transition: all .5s; 
      .tips_details_text{
        overflow-y: scroll;
        max-height: 500rpx; 
        margin-top:0rpx!important;
        font-size:28rpx!important;
      }
      // 隐藏滚动条
      ::-webkit-scrollbar {
        width: 0;
        height: 0;
        color: transparent;
      }
      div{
        margin-top:50rpx;
        font-size:0;
      }
    }
  }
</style>