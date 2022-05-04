<template>
  <div id="app">
    <button @click="modalFirst = !modalFirst">show first modal</button>
    <modal
      title="modal title"
      v-show="modalFirst"
      @close="modalFirst = !modalFirst"
    >
      <div slot="body"><h1>Modal Vue</h1>
        <img alt="Vue logo" src="../assets/logo.png" />
      </div>
    
    </modal>
    <button @click="modalSecond.show = !modalSecond.show">
      show Second modal
    </button>
    <modal
      title="modal title"
      v-show="modalSecond.show"
      @close="modalSecond.show = !modalSecond.show"
    >
      <div slot="body">
        <h1>Modal2</h1>
        <form class="form" @submit.prevent="">
          <label>Email:</label>
          <input v-model="modalSecond.email" type="email" placeholder="email" />
          <label>Password:</label>
          <input
            v-model="modalSecond.password"
            type="password"
            placeholder="password"
          />
          <button type="submit">submit</button>
        </form>
      </div>
    </modal>
  </div>
</template>

<script>
import modal from "@/components/Modal.vue";
export default {
  name: "App",
  components: {
    modal,
  },
  data() {
    return {
      modalFirst: false,
      modalSecond: {
        show: false,
        email: null,
        password: null,
      },
      modalValidate: {
        show: false,
        email: null,
        password: null,
      },
    };
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
h1{
  color: #fff;
}
button {
  border: none;
  outline: none;
  border-radius: 10px;
  padding: 10px;
  background: rgb(76, 76, 250);
  cursor: pointer;
}
input {
  background-color: #e3edf7;
  padding: 16px 32px;
  border: none;
  display: block;
  font-family: "Orbitron", sans-serif;
  font-weight: 600;
  color: #a9b8c9;
  -webkit-appearance: none;
  transition: all 240ms ease-out;
  border-radius: 12px;
  margin: 10px 0 20px;
}
input::placeholder {
  color: #6d7f8f;
}
input:focus {
  outline: none;
  color: #6d7f8f;
  box-shadow: 5px 5px 10px rgba(163, 177, 198, 0.6),
    -5px -5px 10px rgba(255, 255, 255, 0.5);
  background-color: lighten(#e3edf7, 3%);
}
.form {
  display: flex;
  flex-direction: column;
}
</style>
