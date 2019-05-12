import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    E1: '1',
    JSON_FILE: '',
    JSON_TABLE: '',
    WORD_CLOUD: '',
    READY: false,
    UUID: '',
    BUTTON_NAME: 'Cancel'
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
    UUID: state => state.UUID,
    BUTTON_NAME: state => state.BUTTON_NAME
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
      state.BUTTON_NAME = 'Cancel'
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
    },
    SET_BUTTON_NAME: (state, payload) => {
      state.BUTTON_NAME = payload
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
      axios.post('https://corpuslivetest.herokuapp.com/api/cleaning/', {
        uuid: payload[0],
        checkboxes: payload[1],
        mostCommon: payload[2],
      }).then((response) => {
        if (response.status === 200) {
          let payload = []
          let table = []
          let wordCloud = []
          let temp = 1
          response.data.forEach(x => {
            payload.push({key: x[0], value: parseInt(x[1])})
            table.push({number: temp, word: x[0], frequency: parseInt(x[1])})
            wordCloud.push({
              text: x[0],
              weight: parseInt(x[1]),
              rotation: 1,
              rotationUnit: 'turn',
              fontFamily: 'Anton',
              fontStyle: 'italic', // normal|italic|oblique|initial|inherit
              fontVariant: '', // normal|small-caps|initial|inherit
              fontWeight: '', // normal|bold|bolder|lighter|number|initial|inherit
              color: '#' + (Math.random().toString(16) + "000000").substring(2, 8)
            })
            temp = temp + 1
          })
          context.commit("SET_WORD_CLOUD", wordCloud)
          context.commit("SET_JSON_TABLE", table)
          context.commit("SET_JSON_FILE", payload)
          context.commit("SET_READY", true)
        }
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
