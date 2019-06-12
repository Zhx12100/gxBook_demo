<template>
  <div v-if="bookArr==''">
    <div class="add_book_box flex flex_type_6">
      <img class="add_book" @click="addBook" src="/static/images/index/book_none.png" alt="">
      <p class="remark">添加书籍</p>
    </div>
    <div class="share_box flex">
      <button class="share_btn flex" @click="shareBoox">
        <img src="/static/images/index/share_btn.png" alt="">
        <span>分享</span>
      </button>
    </div>
    <div class="book_ul flex flex_type_7">
      <div class="book_list ac" v-for="(item, index) in bookArr" :key="index">
        <img class="boox_list_img" :src="item.bookImg" alt="">
        <p class="txt_ellipsis2">{{item.bookRemark}}</p>
      </div>
      <!-- 两个空占位 -->
      <div class="book_list flexKong"></div>
      <div class="book_list flexKong"></div>
    </div>
  </div>
  <div v-else>
    <div class="book_ul_none ac">
      <img src="/static/images/index/book_ul_none.png" alt="">
      <p>您还没有添加书籍到书架！</p>
      <addBtn @addBtn="addBook" text="去添加"
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

export default {
  data () {
    return {
      motto: 'Hello miniprograme',
      bookArr:[
        {
          bookImg:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1560315658976&di=4c6acb64418ad39aa9cafd41e19682cb&imgtype=0&src=http%3A%2F%2Fbookbk.img.ireader.com%2Fgroup6%2FM00%2FE7%2FEC%2FCmQUNlsLwkaECSEsAAAAAJOpcg0715902694.jpg%3Fv%3DoMXJSqI4%26t%3DCmQUNlsL1Q4.",
          bookRemark:"视界.无界：写给UI设计师给UI设计师给UI设计师"
        },
        {
          bookImg:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1560315658976&di=4c6acb64418ad39aa9cafd41e19682cb&imgtype=0&src=http%3A%2F%2Fbookbk.img.ireader.com%2Fgroup6%2FM00%2FE7%2FEC%2FCmQUNlsLwkaECSEsAAAAAJOpcg0715902694.jpg%3Fv%3DoMXJSqI4%26t%3DCmQUNlsL1Q4.",
          bookRemark:"视界.无界：写给UI设计师给UI设计师给UI设计师"
        },
        {
          bookImg:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1560315658976&di=4c6acb64418ad39aa9cafd41e19682cb&imgtype=0&src=http%3A%2F%2Fbookbk.img.ireader.com%2Fgroup6%2FM00%2FE7%2FEC%2FCmQUNlsLwkaECSEsAAAAAJOpcg0715902694.jpg%3Fv%3DoMXJSqI4%26t%3DCmQUNlsL1Q4.",
          bookRemark:"视界.无界：写给UI设计师给UI设计师给UI设计师"
        },
        {
          bookImg:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1560315658976&di=4c6acb64418ad39aa9cafd41e19682cb&imgtype=0&src=http%3A%2F%2Fbookbk.img.ireader.com%2Fgroup6%2FM00%2FE7%2FEC%2FCmQUNlsLwkaECSEsAAAAAJOpcg0715902694.jpg%3Fv%3DoMXJSqI4%26t%3DCmQUNlsL1Q4.",
          bookRemark:"视界.无界：写给UI设计师给UI设计师给UI设计师"
        }
      ]
    }
  },
  components:{
    addBtn
  },
  methods: {
    //添加书籍按钮
    addBook () {
      console.log('添加书籍');
      wx.navigateTo({
        url: '../addBook_code/main',        
      });
    },
    //分享按钮
    shareBoox () {
      console.log('分享书籍')
    }
  },
  mounted () {
    console.log('书架的mounted')
  }
}
</script>

<style lang="scss" scoped>
  .add_book_box{
    .add_book{
      width: 244rpx;
      height: 204rpx;
    }
    .remark{
      font-size:26rpx;
      font-weight:500;
      color:rgba(153,153,153,1);
      margin-top:-70rpx;
    }
    height: 355rpx;
  }
  .share_box{
    height:158rpx;
    background:linear-gradient(180deg,rgba(255,255,255,1),rgba(245,245,245,1));
    opacity:0.9;
    position:relative;
    &:before {
        content: "";
        width:690rpx;
        height:2rpx;
        background:rgba(245,245,245,1);
        position:absolute;
        top:0;
        left:50%;
        transform:translateX(-50%);
    }
    .share_btn{
      width:200rpx;
      height:70rpx;
      background:#d5fcf0;
      border-radius:50px;
      img{
        width:30rpx;
        height:30rpx;
      }
      span{
        font-size:30rpx;
        font-weight:bold;
        color:rgba(43,207,156,1);
      }
    }
  }
  .book_ul{
    padding:40rpx 0;
    .book_list{
      width:190rpx;
      padding-bottom: 70rpx;
      img{
        width:166rpx;
        height:240rpx;
        object-fit: fill;
      }
      p{
        font-size:24rpx;
        font-weight:500;
        color:rgba(26,26,26,1);
        line-height:36rpx;
      }
    }
  }
  .book_ul_none{
    padding-top:62rpx;
    img{
      width:483rpx;
      height:401rpx;
    }
    p{
      font-size:28rpx;
      font-weight:500;
      color:rgba(153,153,153,1);
      line-height:36rpx;
    }
    /deep/ .btn{
      margin-top:160rpx;
    }
  }
</style>
