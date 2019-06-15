<template>
  <div class="ac" style="font-size:0;line-height:1;">
    <button @click="addBtn_son" class="btn" 
      :style="{ color : textColor, width : btnWidth,height : btnHeight, 'font-size' : textSize,
                background : btnBcakColor,'border-radius' : btnRadius,'line-height' : btnLine
      }">
      {{text}}
    </button>
  </div>
</template>
<script>
  export default {
    data () {
      return {

      }
    },
    props :{
      'text' :String,
      'textColor' :String,
      'btnWidth' :String,
      'btnHeight' :String,
      'btnBcakColor' :String,
      'btnRadius' :String,
      'btnLine' :String,
      'textSize':String
    },
    methods: {
      addBtn_son(){
        this.$emit('addBtn')
      }
    },
  }
</script>
<style lang="scss" scoped>
  .btn{
    text-align:center;
  }
</style>