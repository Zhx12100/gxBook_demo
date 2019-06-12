<template>
  <div class="book_details_box bg_back">
    <div class="book_details"></div>
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
  mounted () {
    console.log('///')
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
            background-attachment:url("/static/images/book_detail_back.png");
            background-size:100% 100%;
        }
    }
</style>
