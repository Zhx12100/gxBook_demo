<template>
  <div class="message_detail_box">
    <div class="message_detail_list">
      <div class="message_detail_title">
        <span class="span1">星期一  </span>
        <span class="span2">11:16</span>
      </div>
      <div class="message_detail_content">
        <div class="message_detail_head flex flex_type_1">
          <img src="/static/images/operation/guize.png" alt="">
          <span class="name">系统助手</span>
        </div>
        <div class="message_detail_mess">
          <div class="book flex flex_type_1 flex_type_7">
            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1560315658976&di=4c6acb64418ad39aa9cafd41e19682cb&imgtype=0&src=http%3A%2F%2Fbookbk.img.ireader.com%2Fgroup6%2FM00%2FE7%2FEC%2FCmQUNlsLwkaECSEsAAAAAJOpcg0715902694.jpg%3Fv%3DoMXJSqI4%26t%3DCmQUNlsL1Q4." alt="">
            <div>
              <p class="p1">告别天堂</p>
              <p class="p2">笛安</p>
            </div>
          </div>
          <div class="remark">
            <p class="p1">收货人：马兆颖</p>
            <p class="p1">电话：18211539601</p>
            <p class="p3 p2">收货地址：</p>
            <p class="p3">广东省广州市越秀区农林街道东风东路754号之一大院4号楼804</p>
          </div>
          <div class="message_detail_operation">
            <button class="active">
              我已邮寄
            </button>
          </div>
        </div>
        
      </div>
    </div>
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
  .message_detail_box{
    background:#F5F5F5;
    height: 100%;
    padding: 0 30rpx;
    .message_detail_list{
      padding-top: 30rpx;
      text-align: center;
      .message_detail_title{
        display: inline-block;
        height:40rpx;
        line-height: 40rpx;
        padding:  0 20rpx;
        background:rgba(204,204,204,1);
        border-radius:6rpx;
        font-size: 0;
        span{
          font-size:24rpx;
          line-height: 40rpx;
          color:rgba(255,255,255,1);
        }
      }
      .message_detail_content{
        text-align: left;
        margin-top:40rpx;
        .message_detail_head{
          img{
            width: 80rpx;
            height: 80rpx;
            margin-right: 20rpx;
          }
          span{
            font-size:30rpx;
            color:rgba(26,26,26,1);
          }
        }
        .message_detail_mess{
          display: inline-block;
          width: 430rpx;
          box-sizing: border-box;
          background:white;
          border-radius: 10rpx;
          padding: 30rpx 20rpx;
          margin-left: 100rpx;
          .message_detail_operation{
            text-align: center;
            button{
              width: 166rpx;
              height: 60rpx;
              font-size:30rpx;              
              line-height:60rpx;
              border-radius: 10rpx;
              margin-top:30rpx;
            }
            .active{
              background:#2bcf9c;
              color:rgba(255,255,255,1);
            }
          }
          .book{
            padding-bottom:20rpx;
            position: relative;
            &:after{
              content:"";
              position:absolute;
              background: #eee;
              height: 1px;
              bottom: 0px;
              left: 0;
              width: 100%;
            }
            img{
              width: 120rpx;
              height:160rpx;
              margin-right: 20rpx;
            }
            div{
              .p1{
                font-size:28rpx;
                color:rgba(26,26,26,1);
                margin-top: 10rpx;
              }
              .p2{
                font-size:24rpx;
                color:rgba(153,153,153,1);
                margin-top: 16rpx;
              }
            }
          }
          .remark{
            padding: 30rpx 0;
            &:after{
              content:"";
              position:absolute;
              background: #eee;
              height: 1px;
              bottom: 0px;
              left: 0;
              width: 100%;
            }
            .p1{
              font-size:24rpx;
              color:rgba(26,26,26,1);
              line-height:32rpx;
            }
            .p2{
              margin-top: 10rpx;
            }
            .p3{
              font-size:24rpx;
              color:rgba(153,153,153,1);
              line-height:32rpx;
            }
          }
        }
        
      }
    }
  }
</style>  
