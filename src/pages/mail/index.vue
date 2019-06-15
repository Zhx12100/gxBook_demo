<template>
  <div class="mail_box bg_back">
    <div class="mail">
      <!-- 书籍信息 -->
      <div class="mail_book_detail flex flex_type_7 flex_type_1">
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1560315658976&di=4c6acb64418ad39aa9cafd41e19682cb&imgtype=0&src=http%3A%2F%2Fbookbk.img.ireader.com%2Fgroup6%2FM00%2FE7%2FEC%2FCmQUNlsLwkaECSEsAAAAAJOpcg0715902694.jpg%3Fv%3DoMXJSqI4%26t%3DCmQUNlsL1Q4." alt="">
        <div class="">
          <p class="p1 lh_1">告别天堂</p>
          <p class="p2 lh_1">迪安</p>
        </div>
      </div>
      <!-- 收货地址 -->
      <navigator url="" hover-class="navigator-hover" open-type="navigate" class="set_location flex">
        <img class="img1" src="/static/images/you/location_icon1.png" alt="">
        <div class="al div1">
          <!-- <p class="p1">请填写收货地址</p> -->
          <div class="div2">
            <p class="p2 flex flex_type_4">
              <span class="span1 txt_ellipsis">收货人：马兆颖</span>
              <span>18211539601</span>
            </p>
            <p class="p3 txt_ellipsis3">
              收货地址：广东省广州市越秀区农林街道东风东路754号之一大院4号楼804
            </p>
          </div>
        </div>
        <img class="img2" src="/static/images/you/location_icon2.png" alt="">
      </navigator>
      <!-- 提示 -->
      <p class="mail_remark">注：当前书籍持有人将邮寄给您，邮费到付。</p>
      <addBtn @addBtn="request_mail" text="请求邮寄"
      textColor="white"
      textSize="32rpx"
      btnWidth="400rpx"
      btnHeight="76rpx"
      btnBcakColor="#2bcf9c"
      btnRadius="50rpx"
      btnLine="76rpx"></addBtn>
    </div>
    <!-- 弹窗提示 -->
    <div>
      <div class="tips" :class="{showActive:mail_tips}">
        <div class="tips_details">
          <div class="tips_details_text">
            已向当前书本持有人发送邮寄请求，对方确认邮寄后系统会通过公众号发送消息通知您。为了接收消息，请关注公众号xxxx。
          </div>
          <div class="flex">
            <addBtn @addBtn="follow_comfirm" text="前往关注"
            textColor="#2BCF9C" 
            textSize="30rpx"
            btnWidth="166rpx"
            btnHeight="60rpx"
            btnBcakColor="#d5fcf0"
            btnRadius="50rpx"
            btnLine="60rpx"></addBtn>
            <addBtn @addBtn="mail_comfirm" text="确认"
            textColor="white"
            textSize="30rpx"
            btnWidth="166rpx"
            btnHeight="60rpx"
            btnBcakColor="#2bcf9c"
            btnRadius="50rpx"
            btnLine="60rpx"></addBtn>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import addBtn from '@/components/addBtn'
// const url = require("../../../static/images/index/bg_btn.png");
export default {
  data () {
    return {
      mail_tips:false
    }
  },
  components:{
    addBtn
  },
  methods: {
    //请求邮寄
    request_mail () {
      this.mail_tips = true
    },
    //前往关注
    follow_comfirm () {
      this.mail_tips = false
    },
    //确认邮寄请求
    mail_comfirm () {
      this.mail_tips = false
    }
  },
  mounted () {
    // console.log(this.url)
    // wx.scanCode({
    //     success (res) {
    //         console.log(res)
    //     }
    // })
  }
}
</script>
<style lang="wxss">
    page{
        height:100%;
    }
</style>

<style lang="scss" scoped>
    .mail_box{
      position: relative;
      height: 100%;
      .mail{
        position:absolute;
        top:0;
        bottom:0;
        left:0;
        right:0;
        padding: 0 60rpx;
        margin:auto auto;        
        box-sizing: border-box;
        margin: 12rpx;
        background:url('http://a3.qpic.cn/psb?/V14UmIh84649nP/06vLVJ76HVu7ZUpoBAKCQJU**WfWd9j8OKs84Ui69P8!/b/dFYBAAAAAAAA&ek=1&kp=1&pt=0&bo=OATYBgAAAAADF9A!&tl=1&vuin=878076517&tm=1560520800&sce=60-2-2&rf=viewer_4') no-repeat;
        background-size:100% 100%;
        .mail_book_detail{
          padding-top: 78rpx;
          img{
            width: 190rpx;
            height:256rpx;  
            margin-right: 30rpx;          
          }
          .p1{
            font-size:36rpx;
            font-weight:500;
            color:rgba(26,26,26,1);
            margin-top: 20rpx;
          }
          .p2{
            font-size:28rpx;
            font-weight:500;
            color:rgba(153,153,153,1);
            margin-top: 30rpx;
          }
        }
        .set_location{
          width:100%;
          // height: 90rpx;
          background:#eee;
          padding: 30rpx 20rpx;
          margin-top: 50rpx;
          box-sizing: border-box;
          // background-size: 100% 100%;
          .img1{
            width: 30rpx;
            height: 34rpx;
          }
          .div1{
            display: inline-block;
            width: 100%;
            padding: 0 28rpx;
            box-sizing: border-box;
            .span1{
              width:60%;
            }
            .p1{
              font-size:26rpx;
              color:rgba(153,153,153,1);
            }
            .p2{
              font-size:26rpx;
              color:rgba(26,26,26,1);
            }
            .p3{
              font-size:24rpx;
              color:rgba(102,102,102,1);
              line-height:32rpx;
              margin-top: 15rpx
            }

          }
          .img2{
            width: 13rpx;
            height:18rpx;
          }
        }
        .mail_remark{
          font-size:22rpx;
          color:rgba(26,26,26,1);
          line-height:32rpx;
          margin-top: 30rpx;
        }
        /deep/ .btn{
          margin-top:160rpx;
        }
      }

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
          top:-200%;
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
    }
</style>
