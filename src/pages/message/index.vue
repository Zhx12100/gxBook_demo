<template>
  <div class="message_box">
    <navigator class="message_list flex flex_type_4" url="/pages/messageDetail/main" hover-class="navigator-hover" open-type="navigate">
      <div class="flex div1">
         <img src="/static/images/index/book_ul_none.png" alt="">
          <div class="div1_son ac">
            <p class="p1">系统助手</p>
            <p class="p2">[邮寄提醒]</p>
          </div>
      </div>
      <div class="div2 ac">
        <p class="p1">09:22</p>
        <p class="p2 ac">1</p>
      </div>
    </navigator>
  </div> 
</template>
<script>
// import addBtn from '@/components/addBtn'

export default {
  data () {
    return {
      
    }
  },
  components:{
    // addBtn
  },
  methods: {
    
  },

  created () {
    // let app = getApp()
  }
}
</script>
<style lang="wxss">
  page{
      height:100%;
  }
</style>
<style lang="scss" scoped>
  .message_box{
    height:100%;
    box-sizing: border-box;
    margin-top: 10rpx;
    padding: 0 30rpx;
    box-shadow: 0px -2px 5px rgba(0, 0, 0, .3);
    border:none;
    overflow: hidden; 
    padding:0 30rpx;  
    .message_list{
      width: 100%;
      box-sizing: border-box;
      height: 160rpx;
      border-bottom: 1px solid rgba(238,238,238,1);
      .div1{
        img{
          width: 100rpx;
          height:100rpx;
          border-radius: 50rpx;
          margin-right: 24rpx;
        }
        .div1_son{
          .p1{
            font-size:30rpx;
            color:rgba(26,26,26,1);
            line-height:32rpx;
          }
          .p2{
            font-size: 24rpx;
            color:#999;
            margin-top: 10rpx;
          }
        }
      }
      .div2{
        .p1{
          font-size: 24rpx;
          color:#999;
        }
        .p2{
          min-width: 40rpx;
          display:inline-block;
          width: auto;
          height: 40rpx;
          line-height: 40rpx;
          border-radius: 50rpx;
          padding: 0 8rpx;
          box-sizing: border-box;
          background:red;
          color:white;
          font-size: 28rpx;
          margin: 10rpx auto 0;
        }
      }
    } 
  }
</style>
