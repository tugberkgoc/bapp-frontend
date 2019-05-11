<template>
  <v-app>

    <v-layout column>

      <v-stepper fixed :value="E1">

        <v-stepper-header>

          <v-stepper-step :complete="E1 > 1" step="1">Upload Data</v-stepper-step> <!-- editable -->

          <v-divider></v-divider>

          <v-stepper-step :complete="E1 > 2" step="2">Preview - Processing</v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step :complete="E1 > 3" step="3">Cleaning</v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step :complete="E1 > 4" step="4">Download</v-stepper-step>

        </v-stepper-header>

        <v-stepper-items>
          <v-stepper-content step="1">

            <UploadTabs/>

          </v-stepper-content>

          <v-stepper-content step="2">

            <Step2/>

          </v-stepper-content>

          <v-stepper-content step="3">

            <Step3/>

          </v-stepper-content>

          <v-stepper-content step="4">

            <Step4/>

          </v-stepper-content>
        </v-stepper-items>


      </v-stepper>


    </v-layout>

    <v-layout class="footer">
      <div class="submit">

        <v-btn
            class="cancel"
            v-on:click="cancel"
            color="primary">
          Cancel
        </v-btn>

        <v-divider></v-divider>

        <v-btn
            class="continue"
            color="primary"
            @click="increaseStep"
            :disabled="READY === false">
          Continue
        </v-btn>

      </div>
    </v-layout>

  </v-app>
</template>

<script>
  import Step2 from '../components/Step2'
  import Step3 from '../components/Step3'
  import Step4 from '../components/Step4'
  import UploadTabs from './UploadTabs'

  import {mapState, mapMutations} from 'vuex'

  export default {
    components: {
      Step2,
      Step3,
      Step4,
      UploadTabs
    },
    data() {
      return {}
    },
    computed: mapState(['E1', 'READY']),
    methods: {
      ...mapMutations({
        SET_READY: 'SET_READY'
      }),
      increaseStep() {
        if (this.$store.getters.E1 !== '4') {
          this.$store.dispatch("SET_E1")
          if (this.$store.getters.E1 === '3') {
            window.location.reload()
          }
        }
        this.SET_READY(false)
      },
      cancel() {
        this.$store.dispatch("SET_E1_ZERO").then()
      }
    }
  }
</script>

<style lang="stylus" scoped>

  .v-progress-circular
    margin: 1rem

  .footer {
    background-color: #F5F5F5;
    position: fixed;
    height: 60px;
    bottom: 0;
    left: 0;
    right: 0;
    margin-bottom: 0;
  }

  .submit {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }

  .continue {
    position: absolute;
    top: 5px;
    right: 25px;
  }

  .cancel {
    position: absolute;
    top: 5px;
    left: 25px;
  }

</style>
