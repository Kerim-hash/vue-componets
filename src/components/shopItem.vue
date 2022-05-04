<template>
  <router-link :to="/shop/ + product.id" class="product">
    <img class="product-img" :src="product.img" alt="productImg" />
  <div class="product-info">
    <router-link :to="/shop/ + product.id" class="title">{{
      product.title
    }}</router-link>
    <p class="product-description">{{ product.description }}</p>
    </div>
 </router-link>
</template>


<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
};
</script> 

<style>
.product-img {
  max-width: auto;
  max-height: 300px !important;
}
.product {
  width: 30%;
}
.product-info{
    margin-top: 20px;
}
.product-description{
    color: rgb(54, 54, 54);
    text-decoration: none;
}
</style>