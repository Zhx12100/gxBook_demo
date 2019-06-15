<template>
  <div class="mine_box">
    <div class="mine_detail flex flex_type_1">      
      <div class="open1">
        <open-data class="parent_head" type="userAvatarUrl"></open-data>
      </div>
      <open-data class="open2" type="userNickName"></open-data>
    </div>
    <!-- 分割线 -->
    <div class="fenge"></div>

    <ul class="mine_operation">
      <navigator url="/pages/mineCollect/main" class="mine_operation_list flex flex_type_4">
        <span>我的收藏</span>
        <img src="/static/images/you/location_icon2.png" alt="">
      </navigator>
    </ul>
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
  .mine_box{
    height:100%;
    box-sizing: border-box;
    margin-top: 10rpx;
    // padding: 0 30rpx;
    box-shadow: 0px -2px 5px rgba(0, 0, 0, .3);
    border:none;
    overflow: hidden;    
    .mine_detail{
      height: 192rpx;
      padding: 0 30rpx;
      box-sizing: border-box;
      position: relative;
      &:after {
        content: "";
        width:100%;
        height:10rpx;  
        background:#F5F5F5;
        position:absolute;
        bottom:0;
        left:0;
      }
      .open1{
        width: 100rpx;
        height:100rpx;
        margin-right: 24rpx;
        display: inline-block;
        border-radius: 50rpx;
        overflow: hidden;
        .parent_head{
          width: 100%;
          height: 100%;
        }
      }
      .open2{
        font-size:30rpx;
        font-weight:500;
        color:rgba(26,26,26,1);
      }
    }

    .mine_operation{
      padding: 0 30rpx;
      box-sizing: border-box;
      .mine_operation_list{
        height: 100rpx;
        padding: 0 10rpx;
        box-sizing: border-box;
        border-bottom:1px solid #EEEEEE;
        span{
          font-size:28rpx;
          color:rgb(36, 18, 18);
        }
        img{
          width:13rpx;
          height:18rpx;
        }
      }
    }
    
  }
</style>
