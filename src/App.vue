<template>
  <div id="app">
    <toast position="ne"></toast>
    <headerBar />
    <div class="container">
      <router-view />
    </div>
  </div>
</template>


<script>
import { Toast } from "vuex-toast";
import headerBar from "./components/header.vue";
export default {
  data: function () {
    return {
      text: "This is toast 232323message",
      position: "ne",
      type: "info",
    };
  },
  components: {headerBar,  Toast, },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


.container {
  max-width: 1160px;
  padding: 0 15px;
  margin: 0 auto;
}
</style>
