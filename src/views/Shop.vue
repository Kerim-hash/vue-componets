<template>
  <div class="about">
    <h1>This is an shop page</h1>
    <div class="row">
        <shopItem class="item" v-for="product in shopList" :product="product" :key="product.id" />
    </div>
  </div>
</template>


<script>
import shopItem from '@/components/shopItem.vue'
export default {
  components : {shopItem},
  data () {
    return {
      message : null,
      shopList : null,
    }
  },
  created () {
    this.shopList = this.$store.state.shop.shopList
   
  },
  mounted(){
     console.log(this.$store )
  }
}
</script>



<style>
  .row{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .img{
    width: 240px;
    height: 200px;
    object-fit: contain;
  }
  .title{
    font-size: 22px;
  }
</style>