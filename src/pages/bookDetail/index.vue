<template>
  <div class="book_details_box bg_back">
    <div class="book_details ac">
      <div class="book_details_son">
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1560315658976&di=4c6acb64418ad39aa9cafd41e19682cb&imgtype=0&src=http%3A%2F%2Fbookbk.img.ireader.com%2Fgroup6%2FM00%2FE7%2FEC%2FCmQUNlsLwkaECSEsAAAAAJOpcg0715902694.jpg%3Fv%3DoMXJSqI4%26t%3DCmQUNlsL1Q4." alt="">
        <p class="p1 lh_1">告别天堂</p>
        <p class="p2 lh_1">迪安</p>
        <div class="book_remark box_border txt_ellipsis3">
          告别天堂（2010年修订版）》内容简介：上海柯艾》内容简介：上海柯艾、《最小说》最强示例作家笛安的首部版）》内容简介：上海柯艾、《最小说》最强示例作家笛安的首部
        </div>
        <navigator class="lh_1 dis_inb a" url="/pages/index/main" open-type="switchTab">更多>></navigator>
        <div class="share_footprint_box">
          <p class="p1 lh_1">书籍分享逐迹</p>
          <ul class="share_footprint">
            <li class="share_footprint_son flex flex_type_1">
              <div class="rank">
                <img src="/static/images/bookDetail/first.png" alt="">
              </div>
              <img class="head" src="http://b.hiphotos.baidu.com/zhidao/pic/item/48540923dd54564e7b326b2bb3de9c82d1584f49.jpg" alt="">
              <div class="xinxi flex flex_type_6">
                <p class="name">张恒信</p>
                <p class="time">书籍贡献者</p>
              </div>
            </li>
            <li class="share_footprint_son flex flex_type_1">
              <div class="rank">
                <img src="/static/images/bookDetail/first.png" alt="">
              </div>
              <img class="head" src="http://b.hiphotos.baidu.com/zhidao/pic/item/48540923dd54564e7b326b2bb3de9c82d1584f49.jpg" alt="">
              <div class="xinxi flex flex_type_6">
                <p class="name">张恒信</p>
                <p class="time">书籍贡献者</p>
              </div>
            </li>
            <li class="share_footprint_son flex flex_type_1">
              <div class="rank">
                <img src="/static/images/bookDetail/first.png" alt="">
              </div>
              <img class="head" src="http://b.hiphotos.baidu.com/zhidao/pic/item/48540923dd54564e7b326b2bb3de9c82d1584f49.jpg" alt="">
              <div class="xinxi flex flex_type_6">
                <p class="name">张恒信</p>
                <p class="time">书籍贡献者</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import addBtn from '@/components/addBtn'
// const url = require("../../../static/images/index/bg_btn.png");
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
  mounted () {

  }
}
</script>
<style lang="wxss">
    page{
        height:100%;
    }
</style>

<style lang="scss" scoped>
    .book_details_box{
      position: relative;
      height: 100%;
      .book_details{
        position:absolute;
        top:0;
        bottom:0;
        left:0;
        right:0;
        margin: 12rpx;
        background:url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1560955569&di=3438d2d9877001bff89e7ade2eac5a89&imgtype=jpg&er=1&src=http%3A%2F%2Fpic.51yuansu.com%2Fpic3%2Fcover%2F00%2F74%2F52%2F58b825272130d_610.jpg') no-repeat;
        background-size:100% 100%;
        box-sizing: border-box;
        overflow:hidden;
        .book_details_son{
          position:absolute;
          top:0;
          bottom:0;
          left:0;
          right:0;     
          margin:50rpx 0; 
          overflow-y:scroll;
          img{
            width: 226rpx;
            height:320rpx;
            margin-top:59rpx;
          }
          .p1{
            font-size:46rpx;
            font-weight:500;
            color:rgba(26,26,26,1);
            margin-top: 40rpx;
          }
          .p2{
            font-size:28rpx;
            font-weight:500;
            color:rgba(153,153,153,1);
            margin-top: 20rpx;
          }
          .book_remark{
            width: 457rpx;
            height: 120rpx;
            font-size:28rpx;
            font-weight:500;
            color:rgba(26,26,26,1);
            line-height:40rpx;
            margin: 30rpx auto 0;
          }
          .a{
            font-size:28rpx;
            font-weight:500;
            color:rgba(2,140,215,1);
            margin-top: 48rpx;
          }
          .share_footprint_box{
            margin-top: 50rpx;
            padding-left: 70rpx;
            text-align: left;
            position: relative;
            &:after {
              content: "";
              width:690rpx;
              height:2rpx;
              background:#eee;
              position:absolute;
              top:0;
              left:50%;
              transform:translateX(-50%);
            }
            .p1{
              font-size:28rpx;
              font-weight:500;
              color:rgba(153,153,153,1);
              padding: 50rpx 0 30rpx;
            }
            .share_footprint{
              .share_footprint_son{
                height:130rpx;
                .rank{
                  width: 66rpx;
                  height: 66rpx;
                  margin-right: 60rpx;
                  img{
                    width: 100%;
                    height: 100%;
                    margin-top:0; 
                  }
                }
                .head{
                  width: 90rpx;
                  height: 90rpx;
                  border-radius: 50rpx;
                  margin-top:0; 
                  margin-right: 26rpx;
                }
                .xinxi{
                  // height: 100%;
                  .name{
                    font-size:28rpx;
                    font-weight:500;
                    color:rgba(26,26,26,1);
                  }
                  .time{
                    font-size:24rpx;
                    font-weight:400;
                    color:rgba(153,153,153,1);
                    margin-top: 10rpx;
                  }
                }
              }
            }
          }
        }
      }
      
    }
</style>
