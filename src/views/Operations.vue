<template>
  <v-app>

    <v-layout column>

      <v-stepper fixed :value="E1">

        <v-stepper-header>

          <v-stepper-step :complete="E1 > 1" step="1">Preparing Data</v-stepper-step> <!-- editable -->

          <v-divider></v-divider>

          <v-stepper-step :complete="E1 > 2" step="2">Preview - Processing</v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step :complete="E1 > 3" step="3">Cleaning</v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step :complete="E1 > 4" step="4">Download</v-stepper-step>

        </v-stepper-header>

        <v-stepper-items>
          <v-stepper-content step="1">
            <h1>Please choose method from tabs.</h1>
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
            v-on:click="back"
            color="primary">
          {{ buttonName }}
        </v-btn>

        <v-divider></v-divider>

        <!--<v-btn-->
            <!--class="default"-->
            <!--color="primary"-->
            <!--@click="defaultState">-->
          <!--DEFAULT-->
        <!--</v-btn>-->

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
      return {
        buttonName: ''
      }
    },
    computed: {
      ...mapState(['E1', 'READY', 'BUTTON_NAME'])
    },
    created() {
      this.buttonName = this.$store.getters.BUTTON_NAME;
    },
    methods: {
      ...mapMutations({
        SET_READY: 'SET_READY',
        SET_E1: 'SET_E1',
        SET_BUTTON_NAME: 'SET_BUTTON_NAME',
        SET_ZERO: 'SET_ZERO'
      }),
      increaseStep() {
        let step = parseInt(this.$store.getters.E1)
        if (step !== 2) {
          this.SET_READY(false)
        }
        if (step !== 4) {
          this.SET_E1(step + 1)
          if (parseInt(this.$store.getters.E1) === 3) {
            window.location.reload()
          }
        }
        if (step === 1) {
          this.SET_BUTTON_NAME('Back')
          this.buttonName = 'Back'
        }


      },
      back() {
        let step = parseInt(this.$store.getters.E1)
        if (step !== 1) {
          this.SET_E1(step - 1);
        }
        if (step === 2) {
          this.SET_BUTTON_NAME('Cancel')
          this.buttonName = 'Cancel'
          // this.SET_ZERO()
        }
        if (step === 4) {
          this.SET_READY(true)
          window.location.reload()
        }
      },
      defaultState() {
        this.$store.dispatch("SET_ZERO").then()
      },
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

  .default {
    position: absolute;
    top: 5px;
    right: 150px;
  }

  .cancel {
    position: absolute;
    top: 5px;
    left: 25px;
  }

</style>
