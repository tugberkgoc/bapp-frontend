<template>
  <div id="app">

    <v-layout id="query" column>

      <v-text-field
          label="Query"
          v-model="query"
          v-on:keyup="enterPressed"
      >
      </v-text-field>

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

      <v-btn color="info" style="width: 13vw; margin-left: 8.5vw;">Query from Database</v-btn>

    </v-layout>

  </div>
</template>

<script>

  export default {
    data: () => ({
      query: null,
      texts: [],
    }),
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
        if (e.key === "Enter") {
          this.texts.push({text: this.query, bool: true})
          this.query = null
        }
      }
    }
  };
</script>

<style lang="stylus" scoped>

  #app {
    height: 100vh;
  }

  #query {
    width: 30vw;
    margin-top: 5vh;
    margin-left: 35vw;
  }

</style>
