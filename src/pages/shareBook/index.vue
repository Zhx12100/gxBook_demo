<template>
  <div>
    <div class="share_parent flex flex_type_1">      
      <div class="open1">
        <open-data class="parent_head" type="userAvatarUrl"></open-data>
      </div>
      <open-data class="open2" type="userNickName"></open-data>
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
  },
  mounted () {
    console.log('书架的mounted')
  }
}
</script>

<style lang="scss" scoped>
  .share_parent{
    height: 192rpx;
    padding: 0 30rpx;
    box-sizing: border-box;
    &:after {
      content: "";
      width:690rpx;
      height:2rpx;
      background:#eee;
      position:absolute;
      top:190rpx;
      left:50%;
      transform:translateX(-50%);
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
</style>
