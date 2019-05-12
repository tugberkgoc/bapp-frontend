<template>
  <v-layout v-if="E1 === '2'" row style="">

    <div class="wordCloud">
      <vue-word-cloud :words="WORD_CLOUD">
        <template slot-scope="{text, weight, word}">
          <div v-tooltip="'Word: ' + text + ', Frequency: ' + weight" :title="weight" style="cursor: pointer;" @click="onWordClick(word)">
            {{ text }}
          </div>
        </template>
      </vue-word-cloud>
    </div>

    <v-divider class="mx-5"
               inset
               vertical></v-divider>

    <div class="checkboxes">

        <h1 style="margin-bottom: 20px;">Cleaning Options</h1>

      <div>
        <div v-for="c in checkboxes">
          <v-checkbox
              v-model="c.value"
              :label="c.label"
          ></v-checkbox>
        </div>
      </div>

      <v-text-field
          style=""
          label="How many words do you want to get?"
          v-model="howMany"
      ></v-text-field>

      <v-btn
          class="continue"
          color="primary"
          @click="isActive"
          :loading="loading"
      >
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
          {label: "NON-ASCII", value: false},
          {label: "STOP WORDS", value: false}
        ],
        howMany: 50,
        loading: false
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
        this.loading = true //TODO: After receiving data from server turn as false
        let payload = []
        payload.push(this.UUID)
        let checkboxes = []
        this.checkboxes.forEach(x => {
          if(x.value === true) {
            checkboxes.push(x.label)
          }
        })
        payload.push(checkboxes)
        payload.push(this.howMany)
        this.CLEAN_PARAMETERS(payload)
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
    margin-top: 25vh;
    width: 20vw;
    height 60vh;
    text-align: left;
  }

</style>
