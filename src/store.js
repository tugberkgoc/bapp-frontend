import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    E1: 1,
  },
  plugins: [createPersistedState()],
  getters: {
    E1: state => {
      return state.E1
    }
  },
  mutations: {
    SET_E1: (state) => {
      state.E1 = (parseInt(state.E1) + 1).toString()
    },
    SET_E1_ZERO: (state) => {
      state.E1 = 1
    }
  },
  actions: {
    SIGN_UP: async (mutations, form) => {
      let {data} = await axios.post('http://localhost:3000/users/register', {
        name: form.name,
        email: form.email,
        password: form.password,
        password2: form.password2
      })
      if (data.status === 200) {
        mutations.commit('SET_NAME', form.name)
        mutations.commit('SET_EMAIL', form.email)
        console.log("User succesfully registered.")
        return 200;
      }
      return 404;
    },
    SIGN_IN: async (mutations, form) => {
      let {data} = await axios.post('http://localhost:3000/users/login', {email: form.email, password: form.password})
      if (data.status === 200) {
        mutations.commit('SET_NAME', data.name)
        mutations.commit('SET_EMAIL', data.email)
        console.log("User succesfully registered.")
        return 200;
      }
      return 400;
    },
    SET_CHAT: async (context, payload) => {
      let {data} = await axios.get('http://localhost:3000/chat');
      console.log(data);
      context.commit("SET_CHAT", data);
    },
    ADD_CHAT: (context, payload) => {
      context.commit("ADD_CHAT", payload);
    },
    SET_HANDLE: (context, payload) => {
      context.commit("SET_HANDLE", payload);
    },
    SET_EMPTY_STORE: (context, payload) => {
      context.commit("SET_EMPTY", payload);
    },
    SET_E1: (context) => {
      context.commit("SET_E1")
    },
    SET_E1_ZERO: (context) => {
      context.commit("SET_E1_ZERO")
    }
  },
})
