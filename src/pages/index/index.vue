<template>
  <div>
    <div class="add_book_box flex flex_type_6">
      <img class="add_book" @click="addBook" src="../../../static/images/index/book_none.png" alt="">
      <p class="remark">添加书籍</p>
    </div>
    <div class="share_box">

    </div>
    <!-- <addBtn @addBtn="addBtn_parent" text="添加书籍"
      textColor="white"
      btnWidth="200rpx"
      btnHeight="300rpx"
      btnBcakColor="pink"
      btnRadius="50rpx"
      btnLine="300rpx"></addBtn> -->
  </div>
</template>

<script>
// import addBtn from '@/components/addBtn'

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
  // components:{
  //   addBtn
  // },
  methods: {
    addBook () {
      console.log('添加书记')
    },
    addBtn_parent(){
      console.log('ggg')
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
  .share_box{
    
  }
</style>
