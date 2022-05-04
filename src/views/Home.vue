<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div class="blog-card-wrap">
      <div class="blog-cards">
      <BlogCards :blog="blog" v-for="(blog, index) in blogs" :key="index" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import BlogCards from '../components/blogCard.vue'
export default {
    components: {BlogCards},
    computed : {
      blogs(){
        return this.$store.state.blogs.blogs
      }
    }
}

</script>
