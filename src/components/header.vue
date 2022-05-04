<template>
  <div>
    <md-toolbar class="header__inner">
      <img class="logo" alt="Vue logo" src="../assets/logo.png" />
      <div id="nav" v-if="!mobile">
        <router-link to="/">Blogs</router-link>
        <router-link to="/products">Products</router-link>
        <router-link to="/users">Users</router-link>
        <router-link to="/modal">Modal</router-link>
        <router-link v-if="getUserEmail" to="/profile">{{
          getUserEmail
        }}</router-link>
        <router-link v-else to="/login">Login</router-link>
        <router-link to="/register">Register</router-link>
      </div>
      <button
        @click="toggleMobileNav"
        v-if="mobile"
        :class="`burger ${mobileNav && 'burger--active'}`"
      >
        <span></span>
      </button>
    </md-toolbar>

    <transition name="mobile-nav">
      <div
        id="mobile"
        class="mobile-nav"
        v-show="mobileNav"
        @click="toggleMobileNav"
      >
        <div class="mobile-wrapper" @click.stop="">
          <router-link to="/">Blogs</router-link>
          <router-link to="/products">Products</router-link>
          <router-link to="/users">Users</router-link>
          <router-link to="/modal">Modal</router-link>
          <router-link to="/login">Login</router-link>
          <router-link to="/register">Register</router-link>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mobile: null,
      mobileNav: null,
      windowWidth: null,
      user: null,
    };
  },
  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
    this.getUser();
  },
  computed: {
    getUserEmail: function () {
      return this.$store.state.auth.user;
    },
  },
  methods: {
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 750) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    },
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },
    getUser() {
      return this.$store.state.auth.user;
    },
  },
};
</script>

<style>
.logo {
  width: 50px;
}
.header__inner {
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a + a {
  font-weight: bold;
  color: #2c3e50;
  margin-left: 20px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.burger {
  display: flex;
  justify-content: center;
  width: 22px;
  height: 19px;
  position: relative;
  border: none;
  outline: none;
  cursor: pointer;
  background: transparent;
}
.burger::after,
.burger::before {
  content: "";
  width: 100%;
  height: 2px;
  background-color: #42b983;
  position: absolute;
  transition: all 0.5s;
}
.burger span {
  width: 100%;
  height: 2px;
  background-color: #42b983;
  top: 9px;
  position: absolute;
}

.burger::after {
  bottom: 0;
}
.burger::before {
  top: 0;
}
.burger.burger--active {
  z-index: 3;
}
.burger.burger--active span {
  opacity: 0;
  transition: opacity 0.3s;
}
.burger.burger--active::after {
  width: 26px;
  transform: translateY(-10px) rotate(-135deg);
}
.burger.burger--active::before {
  width: 26px;
  transform: translateY(7px) rotate(135deg);
}

.mobile-nav {
  position: fixed;
  z-index: 2;
  top: 50px;
  left: 0;
  position: fixed;
}
.mobile-wrapper {
  background: #2c3e50;
  width: 250px;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.mobile-nav::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.6);
  width: 100vw;
  height: 100%;
  z-index: -2;
}

.mobile-nav-enter-active,
.mobile-nav-leave-active {
  transition: all 0.5s ease;
}
.mobile-nav-enter {
  transform: translateX(-100%);
}
.mobile-nav-enter-to {
  transform: translateX(0);
}
.mobile-nav-leave-to {
  transform: translateX(-100%);
}
</style>