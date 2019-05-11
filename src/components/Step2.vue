<template>
  <v-layout v-if="E1 === '2'" row style="">

    <div class="wordCloud">
      <vue-word-cloud :words="WORD_CLOUD">
        <template slot-scope="{text, weight, word}">
          <div :title="weight" style="cursor: pointer;" @click="onWordClick(word)">
            {{ text }}
          </div>
        </template>
      </vue-word-cloud>
    </div>

    <div class="checkboxes">

      <h1 style="margin-bottom: 20px;">Options</h1>

      <div style="margin-left: 7vw;">
        <div v-for="c in checkboxes">
          <v-checkbox
              v-model="c.value"
              :label="c.label"
          ></v-checkbox>
        </div>
      </div>

      <v-btn
          class="continue"
          color="primary"
          @click="isActive">
        SUBMIT
      </v-btn>

    </div>

  </v-layout>
</template>

<script>
  import vueWordCloud from 'vuewordcloud'
  import {mapState, mapMutations, mapActions} from 'vuex'

  export default {
    components: {
      vueWordCloud
    },
    data: () => {
      return {
        checkboxes: [
          {value: false, label: "Semantic"},
          {value: false, label: "LoremIpsum"},
          {value: false, label: "Voluptatibus"},
          {value: false, label: "Salutandi"},
          {value: false, label: "Ipsum"}
        ]
      }
    },
    computed: {
      ...mapState({
        E1: 'E1',
        WORD_CLOUD: 'WORD_CLOUD',
        UUID: "UUID"
      })
    },
    methods: {
      ...mapMutations({
        POP_WORD_CLOUD: 'POP_WORD_CLOUD',
        SET_READY: 'SET_READY'

      }),
      ...mapActions({
        CLEAN_PARAMETERS: "CLEAN_PARAMETERS"
      }),
      onWordClick(word) {
        this.POP_WORD_CLOUD(word)
      },
      isActive() {
        this.CLEAN_PARAMETERS(this.UUID).then(x => {
          x === 1 ? this.SET_READY(true) : ''
        })
      }
    }
  }

</script>

<style lang="stylus" scoped>

  .wordCloud {
    width: 80vw;
    height 80vh;
  }

  .checkboxes {
    margin-top: 15vh;
    width: 20vw;
    height 60vh;
    text-align: center;
  }

</style>
