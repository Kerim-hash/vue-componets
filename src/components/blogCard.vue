<template>
  <router-link :to="/blog/ + blog.id" class="product">
  <md-card>
    <md-card-media-cover md-solid>
      <div class="blog-icons" v-if="editBlog">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="far"
          data-icon="edit"
          class="svg-icon svg-inline--fa fa-edit fa-w-18 trash"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
        >
          <path
            fill="currentColor"
            d="M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"
          ></path>
        </svg>
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="far"
          data-icon="trash"
          class=" svg-icon svg-inline--fa fa-trash fa-w-14"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            fill="currentColor"
            d="M432 80h-82.4l-34-56.7A48 48 0 0 0 274.4 0H173.6a48 48 0 0 0-41.2 23.3L98.4 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16l21.2 339a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM173.6 48h100.8l19.2 32H154.4zm173.3 416H101.11l-21-336h287.8z"
          ></path>
        </svg>
      </div>
      <md-card-media md-ratio="4:3">
        <img class="logo" alt="Vue logo" :src="blog.blogPhoto" />
      </md-card-media>
      <md-card-area>
        <md-card-header>
          <span class="md-title">{{ blog.title }}</span>
          <span class="md-subhead">{{ blog.blogDate }}</span>
        </md-card-header>
      </md-card-area>
    </md-card-media-cover>
  </md-card>
  </router-link>
</template>

<script>
export default {
  props: {
    blog: {
      type: Object,
      require: true,
    },
  },
  computed : {
    editBlog() {
      return  this.$store.state.blogs.editPost 
    }
  }
};
</script>

<style>
.md-card {
  width: 320px;
  margin: 4px;
  display: inline-block;
  vertical-align: top;
  position: relative;
}
.blog-icons{
  display: flex;
  position: absolute;
  bottom: 10px;
  right: 10px;
z-index: 3;
}
.blog-icons svg + svg{
  margin-left: 10px;
}
.svg-icon{
  width: 20px;
  height: 20px;
  cursor: pointer;
}
</style>