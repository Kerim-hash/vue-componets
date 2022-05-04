<template>
  <div>
      <h1>Blog</h1>
      <img :src="blog.blogPhoto" alt="">
      <h1>{{blog.title}}</h1>
      <p>{{blog.description}}</p>
      <time>{{blog.blogDate}}</time>
  </div>
</template>

<script>
export default {
    data() {
    return {
      blog: null,
    };
  },
  created() {
    let id = this.$route.params.id;
    this.blog = this.$store.getters.getBlog(id);
  },
}
</script>

<style>

</style>