<template>
  <div class="book_details_box bg_back">
    <!-- <headTop></headTop> -->
    <div class="book_details ac">
      
      <div class="book_details_son">
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1560315658976&di=4c6acb64418ad39aa9cafd41e19682cb&imgtype=0&src=http%3A%2F%2Fbookbk.img.ireader.com%2Fgroup6%2FM00%2FE7%2FEC%2FCmQUNlsLwkaECSEsAAAAAJOpcg0715902694.jpg%3Fv%3DoMXJSqI4%26t%3DCmQUNlsL1Q4." alt="">
        <p class="p1 lh_1">告别天堂</p>
        <p class="p2 lh_1">迪安</p>
        <div class="book_remark box_border txt_ellipsis3">
          告别天堂（2010年修订版）》内容简介：上海柯艾》内容简介：上海柯艾、《最小说》最强示例作家笛安的首部版）》内容简介：上海柯艾、《最小说》最强示例作家笛安的首部
        </div>
        <div class="lh_1 dis_inb a" @click="book_more">更多>></div>
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
                <img src="/static/images/bookDetail/second.png" alt="">
              </div>
              <img class="head" src="http://b.hiphotos.baidu.com/zhidao/pic/item/48540923dd54564e7b326b2bb3de9c82d1584f49.jpg" alt="">
              <div class="xinxi flex flex_type_6">
                <p class="name">张恒信</p>
                <p class="time">书籍贡献者</p>
              </div>
            </li>
            <li class="share_footprint_son flex flex_type_1">
              <div class="rank">
                <img src="/static/images/bookDetail/third.png" alt="">
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
      <div class="book_details_operation flex">
        <button class="guize_box ac active" @click="guize" hover-class="hover_button">
          <img src="/static/images/operation/guize.png" alt="">
          <p>规则</p>
        </button>
        <button class="zan_box ac " @click="zanClick" hover-class="hover_button">
          <img v-if="zan==false" src="/static/images/operation/zan.png" alt="">
          <img v-else src="/static/images/operation/zan_active.png" alt=""> 
          <p v-if="zan==false">点赞</p>
          <p v-else style="color:rgba(231,62,81,1)!important;">点赞</p>
        </button>
        <button class="shou_box ac" @click="shouClick" hover-class="hover_button">
          <img v-if="shou==false" src="/static/images/operation/shou.png" alt="">
          <img v-else src="/static/images/operation/shou_active.png" alt="">
          <p v-if="shou==false">收藏</p>
          <p v-else style="color:rgba(231,62,81,1)!important;">收藏</p>
        </button>
        <!-- 作为请求者 -->
          <!-- 可以邮寄 -->
        <addBtn v-if="youState==0"  @addBtn="you_go" text="请求邮寄"
        textColor="white"
        textSize="32rpx"
        btnWidth="210rpx"
        btnHeight="76rpx"
        btnBcakColor="#2BCF9C"
        btnRadius="6rpx"
        btnLine="76rpx"></addBtn>
          <!-- 查看邮寄 -->
        <addBtn v-else-if="youState==1" @addBtn="you_look" text="查看邮寄"
        textColor="#2BCF9C"
        textSize="32rpx"
        btnWidth="210rpx"
        btnHeight="76rpx"
        btnBcakColor="#d5fcf0"
        btnRadius="6rpx"
        btnLine="76rpx"></addBtn>
          <!-- 不可以请求邮寄 -->
        <addBtn v-else-if="youState==2" @addBtn="you_none" text="请求邮寄"
        textColor="white"
        textSize="32rpx"
        btnWidth="210rpx"
        btnHeight="76rpx"
        btnBcakColor="#bfbfbf"
        btnRadius="6rpx"
        btnLine="76rpx"></addBtn>
        <!-- 作为贡献者 -->
          <!-- 确认已邮寄-->
        <addBtn v-else  @addBtn="you_comfirm" text="确认已邮寄"
        textColor="white"
        textSize="32rpx"
        btnWidth="210rpx"
        btnHeight="76rpx"
        btnBcakColor="#bfbfbf"
        btnRadius="6rpx"
        btnLine="76rpx"></addBtn>
      </div>
      <button class="share_box flex" hover-class="hover_button">
        <img src="/static/images/share_btn.png" alt="">
      </button>
    </div>
    <!-- 弹窗消息 -->
    <tips :showActive="tipsShow?'showActive':''" :text="text">
      <addBtn @addBtn="tips_comfirm" text="确认"
        textColor="white"
        textSize="30rpx"
        btnWidth="146rpx"
        btnHeight="60rpx"
        btnBcakColor="#2bcf9c"
        btnRadius="50rpx"
        btnLine="60rpx"></addBtn>
        <!-- <addBtn slot="btn2"  @addBtn="tips_comfirm" text="确认"
        textColor="white"
        textSize="30rpx"
        btnWidth="146rpx"
        btnHeight="60rpx"
        btnBcakColor="#2bcf9c"
        btnRadius="50rpx"
        btnLine="60rpx"></addBtn> -->
    </tips>
  </div>
</template>

<script>
import addBtn from '@/components/addBtn'
import tips from '@/components/tips'
// import headTop from '@/components/headTop'
// const url = require("../../../static/images/index/bg_btn.png");
export default {
  data () {
    return {
      zan:false,
      shou:false,
      text:"",
      youState:2 ,//0 可以请求邮寄  1  查看邮寄   2  不可以请求邮寄  3  确认已邮寄
      tipsShow:false//控制提示框是否显示
    }
  },
  components:{
    addBtn,
    tips
    // headTop
  },
  methods: {
    //添加书籍按钮
    guize () {
      console.log('规则')
    },
    zanClick () {
      this.zan = !this.zan
    },
    shouClick () {
      this.shou = !this.shou
    },
    you_go () {//请求邮寄
      // this.tipsShow = false;
    },
    you_look () {//查看邮寄
      this.tipsShow = true
    },
    you_none () {//无法请求邮寄
      this.text = "此书仍然在上一个读者的阅读期内， 暂时无法请求邮寄。"
      this.tipsShow = true
    },
    you_comfirm () {//确认邮寄
      this.tipsShow = true
    },
    tips_comfirm () {
      this.tipsShow = false
    },
    //更多
    book_more () {
      this.text = "《告别天堂》是作家笛安创作的首部长篇小说，《告别天堂》是作家笛安创作的首部长篇小说，首次出版于2005年2《告别天堂》是作家笛安创作的首部长篇小说，首次出版于2005年2首次出版于2005年2月。该小说分别从宋天杨、江东、肖强和周雷的个人视角来描述他们的生活，并以此回忆高中时代的他们——温暖而倔强的天杨，绚烂而脆弱的方可寒，带点江湖味道其实不太坏的肖强，简单憨厚的周雷，还有明明比谁都敏感却羞于承认的江东。小说通过展现天杨等人青春岁月中的故事，反映了作者对于理想与现实的纷繁看法。"
      this.tipsShow = true      
    }
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
        top:0rpx;
        bottom:0;
        left:0;
        right:0;
        margin: 12rpx;
        background:url('http://a3.qpic.cn/psb?/V14UmIh84649nP/06vLVJ76HVu7ZUpoBAKCQJU**WfWd9j8OKs84Ui69P8!/b/dFYBAAAAAAAA&ek=1&kp=1&pt=0&bo=OATYBgAAAAADF9A!&tl=1&vuin=878076517&tm=1560520800&sce=60-2-2&rf=viewer_4') no-repeat;
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
          padding-bottom:98rpx;          
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
        // 隐藏滚动条
        ::-webkit-scrollbar {
          width: 0;
          height: 0;
          color: transparent;
        }
        .book_details_operation{
          width:670rpx;
          height:98rpx;
          background:rgba(250,250,250,1);
          position:absolute;
          bottom:20rpx;
          left:50%;
          transform: translateX(-50%);
          padding:0 10rpx;
          font-size:0;
          border-radius:15rpx;
          /deep/ .btn{
            margin-left:50rpx;
          }
          button{
            width:100rpx;
            border: none;
            padding:0;
            // background:none;
            line-height: 1;
            img{
              width: 32rpx;
              height:32rpx;
            }
            p{
              line-height: 1;
              font-size:24rpx;
              color:rgba(102,102,102,1);
              margin-top: 10rpx;
            }
          }          
          .active{
            p{
              color:rgba(231,62,81,1)!important;
            }            
          }          
        }
        .share_box{
          width: 100rpx;
          height:100rpx;
          background:transparent;
          position:absolute;
          right:10rpx;
          top:10rpx;
          img{
            width:40rpx;
            height:40rpx;
            
          }
        }
      }
      
    }
    .hover_button{
      opacity: 0.9;//透明度变化
      transform: scale(0.7,0.7);//缩放
      transition: all .2s;
    }
</style>
