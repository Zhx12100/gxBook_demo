<template>
  <div class="collect_box">
    <div class="book_ul flex flex_type_7">
      <navigator class="book_list ac" v-for="(item, index) in bookArr" :key="index">
        <img class="boox_list_img" :src="item.bookImg" alt="">
        <p class="txt_ellipsis2">{{item.bookRemark}}</p>
      </navigator>
      <!-- 两个空占位 -->
      <div class="book_list flexKong"></div>
      <div class="book_list flexKong"></div>
    </div>
  </div> 
</template>

<script>
// import addBtn from '@/components/addBtn'

export default {
  data () {
    return {
      bookArr:[
        {
          bookImg:"https://b325.photo.store.qq.com/psb?/V14UmIh83jEXEo/J2Y8Pk0L0DTp3k*nsEgD9XD1gi8uL4dduCMuW0gp30A!/b/dLotusE3LgAA&bo=mAEyAQAAAAABB4o!&rf=viewer_4",
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
  .collect_box{
    height:100%;
    box-sizing: border-box;
    margin-top: 10rpx;
    padding: 0 30rpx;
    box-shadow: 0px -2px 5px rgba(0, 0, 0, .3);
    border:none;
    overflow: hidden;
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
  }
</style>
