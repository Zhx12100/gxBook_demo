<template>
  <div class="set_location_box">
    <div class="inp">
      <input v-model="name" type="text" placeholder="收货人" placeholder-style="color:#999;">
    </div>
    <div class="inp">
      <input v-model="phone" type="number" placeholder="手机号码" placeholder-style="color:#999;">
    </div>
    <div class="section inp">
      <picker mode="region" class="picker_box" :value="region" @change="bindRegionChange">
        <div class="picker">
          {{region[0]}} {{region[1]}} {{region[2]}}
        </div>
        <img src="/static/images/you/location_icon2.png" alt="">
      </picker>
    </div>
    <div class="text">
      <textarea v-model="region_detail" name="" id="" cols="10" rows="10" 
      placeholder="详细地址：如道路、门牌号、小区、楼栋号、单元室等" placeholder-style="color:#999;">

      </textarea>
    </div>
    <addBtn @addBtn="edit_location" text="确认"
      textColor="white"
      textSize="32rpx"
      btnWidth="400rpx"
      btnHeight="76rpx"
      btnBcakColor="#2bcf9c"
      btnRadius="50rpx"
      btnLine="76rpx"></addBtn>
  </div>
</template>

<script>
import addBtn from '@/components/addBtn'

export default {
  data () {
    return {
      name:'',
      phone:'',
      region:["所在地区","",""],
      region_detail:''
    }
  },
  components:{
    addBtn
  },
  methods: {
    bindRegionChange: function (e) {
      // console.log(e)
      console.log('picker发送选择改变，携带值为', e.mp.detail.value)
      this.region= e.mp.detail.value
    },
    edit_location (){
      console.log(this.name,this.phone,this.region,this.region_detail)
    }
  },

  created () {
    // let app = getApp()
  }
}
</script>

<style lang="scss" scoped>
  
  .set_location_box{
    margin-top: 10rpx;
    padding: 0 30rpx;
    box-shadow: 0px -2px 5px rgba(0, 0, 0, .3);
    border:none;
    
    .inp{
      height:100rpx;
      border-bottom:1px solid #eee;
      font-size:0;
      // &:last-child{
      //   border: none;
      // }
      .picker_box{
        height:100%;
        position: relative;
        .picker{
          height: 100rpx;
          font-size: 30rpx;
          line-height: 100rpx;
          color:#999;
        }
        img{
          width: 13rpx;
          height: 18rpx;
          position:absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
        }
      } 
      input{
        display: inline-block;        
        height: 100%;
        width: 100%;
        padding:0;
        margin:0;
        color:#444;
        font-size: 30rpx;
               
      }      
    }
    .text{
      padding-top: 35rpx;
      font-size: 30rpx;
      color:#444;
      height: 200rpx;
    }
    /deep/ .btn{
      margin-top:160rpx;
    }
  }
</style>
