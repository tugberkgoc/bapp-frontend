import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    E1: 1,
    JSON_FILE: '',
    JSON_TABLE: '',
    WORD_CLOUD: '',
    READY: false,
    UUID: '',
  },
  plugins: [createPersistedState()],
  getters: {
    E1: state => {
      return state.E1
    },
    JSON_FILE: state => {
      return state.JSON_FILE
    },
    JSON_TABLE: state => {
      return state.JSON_TABLE
    },
    WORD_CLOUD: state => {
      return state.WORD_CLOUD
    },
    READY: state => state.READY,
    UUID: state => state.UUID
  },
  mutations: {
    SET_E1: (state, payload) => {
      state.E1 = parseInt(payload).toString()
    },
    SET_ZERO: (state) => {
      state.E1 = 1
      state.JSON_FILE = ''
      state.JSON_TABLE = ''
      state.WORD_CLOUD = ''
      state.READY = false
    },
    SET_JSON_FILE: (state, payload) => {
      state.JSON_FILE = payload
    },
    SET_JSON_TABLE: (state, payload) => {
      state.JSON_TABLE = payload
    },
    SET_WORD_CLOUD: (state, payload) => {
      state.WORD_CLOUD = payload
    },
    POP_WORD_CLOUD: (state, payload) => {
      let removeIndex = state.WORD_CLOUD.map(item => item.text).indexOf(payload.text);
      state.WORD_CLOUD.splice(removeIndex, 1);
      state.JSON_FILE.splice(removeIndex, 1);
      state.JSON_TABLE.splice(removeIndex, 1);
    },
    SET_READY: (state, payload) => {
      state.READY = payload
    },
    SET_UUID: (state, payload) => {
      state.UUID = payload
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
    CLEAN_PARAMETERS: async (context, payload) => {
      axios.post('https://corpuslivetest.herokuapp.com/api/cleaning/', {uuid: payload}).then(() => {
        console.log("Success")
        return 1;
      }).catch(() => {
        console.log("Failure")
        return 0;
      })
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
    SET_E1: (context, payload) => {
      context.commit("SET_E1", payload)
    },
    SET_ZERO: (context) => {
      context.commit("SET_ZERO")
    },
    SET_JSON_FILE: async (context, payload) => {
      context.commit("SET_JSON_FILE", payload)
    },
    SET_JSON_TABLE: async (context, payload) => {
      context.commit("SET_JSON_TABLE", payload)
    },
    SET_WORD_CLOUD: async (context, payload) => {
      context.commit("SET_WORD_CLOUD", payload)
    }
  },
})
