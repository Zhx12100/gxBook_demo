<template>
  <div>
    <div class="add_book_box flex flex_type_6">
      <img class="add_book" @click="addBook" src="../../../static/images/index/book_none.png" alt="">
      <p class="remark">添加书籍</p>
    </div>
    <div class="share_box">

    </div>
  </div>
</template>

<script>
// import card from '@/components/card'

export default {
  data () {
    return {
      motto: 'Hello miniprograme',
      userInfo: {
        nickName: 'mpvue',
        avatarUrl: 'http://mpvue.com/assets/logo.png'
      }
    }
  },

  methods: {
    addBook () {
      console.log('添加书记')
    }
  },

  created () {
    // let app = getApp()
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
</style>
