<template>
  <div>
    <h1>Product</h1>
    <div class="row">
      <carousel class="carousel" :perPage="1" :paginationEnable="true" paginationColor="red">
        <slide v-for="slide in product.gallery" :key="slide.name"><img class="img" :src="slide.img" alt="slide"></slide>
      </carousel>
      <div class="info">
        <h1 class="title">{{ product.title }}</h1>
        <p>{{ product.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: null,
    };
  },
  created() {
    let id = this.$route.params.id;
    this.product = this.$store.getters.getProduct(id);
  },
};
</script>

<style>
  .img{
    width: 240px;
    height: 200px;
    object-fit: contain;
    text-align: center;
    display: block;
    margin: 0 auto;
  }
  .carousel,
  .info{
  width: 48%;
  }
</style>