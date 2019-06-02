<template>
  <div id="app">
    <v-container fluid grid-list-md>
      <v-layout row wrap>
        <v-flex offset-md4 md4>
          <v-layout id="query" column>

            <v-combobox
                v-model="state"
                label="Query"
                :items="states"
                v-on:keyup="enterPressed"
                @input.native="debounce"
            ></v-combobox>

            <div v-for="t in texts">
              <v-text-field
                  v-if="t.bool"
                  v-bind:value="t.text"
                  @click:clear="t.bool = false"
                  readonly
                  single-line
                  solo
                  clearable>
              </v-text-field>
            </div>

            <v-btn color="info">Query from Database</v-btn>

          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data: () => {
      return {
        texts: [],
        state: null,
        states: []
      }
    },
    computed: {},
    components: {},
    methods: {
      afterComplete(file) {
        console.log(file);
        console.log(file.status);

        let payload = []
        let table = []
        let wordCloud = []
        let temp = 1
        let array = JSON.parse("[" + file.xhr.response + "]");
        array[0].forEach(x => {
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
        this.$store.dispatch("SET_WORD_CLOUD", wordCloud).then()
        this.$store.dispatch("SET_JSON_TABLE", table).then()
        this.$store.dispatch("SET_JSON_FILE", payload).then()
      },
      enterPressed(e) {
        if (e.key === "Enter" && this.state) {
          this.texts.push({text: this.state, bool: true})
          this.state = null
          this.states = []
        }
      },
      debounce(event) {
        if (event.target.value.length > 1) {
          axios.post("http://localhost:8000/api/query/", {query: event.target.value}).then(({data}) => {
            let temp = JSON.parse(data)
            let tempArray = []
            temp.data.forEach(x => {
              tempArray.push(x.filename)
            })
            this.states = tempArray
          })
        }
      },
    }
  };
</script>

<style lang="stylus" scoped>

  #app {
    height: 100vh;
  }

  #query {
    margin-top: 5vh;
  }

</style>
