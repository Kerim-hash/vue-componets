import * as firebase from "firebase";
import { ADD_TOAST_MESSAGE } from "vuex-toast";
export default {
  state: {
    user: null,
    sending: false,
  },
  mutations: {
    SET_USER(state, payload) {
      document.cookie = "token" + "=" + (payload.refreshToken || "");
      state.user = payload.email;
      console.log(firebase.auth().currentUser)
    },
    SET_SENDING(state) {
      state.sending = false;
    },
  },
  actions: {
    async signup({ dispatch, commit, state }, { email, password }) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((response) => {
          commit("SET_USER", response)
          dispatch(ADD_TOAST_MESSAGE, {
            text: `you have successfully registered`,
            type: "success",
          })
          this.$router.push({name: "Home"});
        })
        .catch((err) =>
          dispatch(ADD_TOAST_MESSAGE, { text: err.message, type: "danger" })
        )
        .finally(() => commit("SET_SENDING"));
      state.sending = true;
    },
    async signin({ dispatch, commit, state }, { email, password }) {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((response) => {
          commit("SET_USER", response)
          dispatch(ADD_TOAST_MESSAGE, {
            text: `you have successfully entered`,
            type: "success",
          })
         
        })
        .catch((err) =>
          dispatch(ADD_TOAST_MESSAGE, { text: err.message, type: "danger" })
        )
        .finally(() => commit("SET_SENDING"));

      state.sending = true;
    },
  },
};
