<template>
  <div class="book_details_box bg_back">
    <div class="book_details ac">
      <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1560315658976&di=4c6acb64418ad39aa9cafd41e19682cb&imgtype=0&src=http%3A%2F%2Fbookbk.img.ireader.com%2Fgroup6%2FM00%2FE7%2FEC%2FCmQUNlsLwkaECSEsAAAAAJOpcg0715902694.jpg%3Fv%3DoMXJSqI4%26t%3DCmQUNlsL1Q4." alt="">
      <p class="p1 lh_1">告别天堂</p>
      <p class="p2 lh_1">迪安</p>
      <div class="book_remark dis_inb box_border">
        <div class="txt_ellipsis3">
          《告别天堂（2010年修订版）》内容简介：上海柯艾、《最小说》最强示例作家笛安的首部版）》内容简介：上海柯艾、《最小说》最强示例作家笛安的首部
        </div>
      </div>
      <addBtn @addBtn="addBook" text="添加"
      textColor="white"
      textSize="32rpx"
      btnWidth="400rpx"
      btnHeight="76rpx"
      btnBcakColor="#2bcf9c"
      btnRadius="50rpx"
      btnLine="76rpx"></addBtn>
    </div>
  </div>
</template>

<script>
import addBtn from '@/components/addBtn'
// const url = require("../../../static/images/index/bg_btn.png");
export default {
  data () {
    return {
      // bgImg: {
      //   backgroundImage: "url(" + url + ")"
      // }
    }
  },
  components:{
    addBtn
  },
  methods: {

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
    .book_details_box{
      position: relative;
      height: 100%;
      .book_details{
        position:absolute;
        top:0;
        bottom:0;
        left:0;
        right:0;
        margin:auto auto;        
        box-sizing: border-box;
        margin: 12rpx;
        background:url('http://a3.qpic.cn/psb?/V14UmIh84649nP/06vLVJ76HVu7ZUpoBAKCQJU**WfWd9j8OKs84Ui69P8!/b/dFYBAAAAAAAA&ek=1&kp=1&pt=0&bo=OATYBgAAAAADF9A!&tl=1&vuin=878076517&tm=1560520800&sce=60-2-2&rf=viewer_4') no-repeat;
        background-size:100% 100%;
        img{
          width: 286rpx;
          height:410rpx;
          margin-top:78rpx;
        }
        .p1{
          font-size:46rpx;
          font-weight:500;
          color:rgba(26,26,26,1);
          margin-top: 47rpx;
        }
        .p2{
          font-size:28rpx;
          font-weight:500;
          color:rgba(153,153,153,1);
          margin-top: 30rpx;
        }
        .book_remark{
          width: 528rpx;
          height: 220rpx;
          padding: 48rpx 38rpx;
          font-size:28rpx;
          font-weight:500;
          color:rgba(26,26,26,1);
          line-height:46rpx;
          border: 1px dashed #666;
          margin-top: 49rpx;
        }
        /deep/ .btn{
          margin-top:85rpx;
        }
      }
    }
</style>
