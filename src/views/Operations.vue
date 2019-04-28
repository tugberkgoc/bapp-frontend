<template>
  <v-app>

    <v-layout column>

      <v-stepper fixed v-model="e1">

        <v-stepper-header>

          <v-stepper-step editable :complete="e1 > 1" step="1">Upload Files</v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step editable :complete="e1 > 2" step="2">First Cleaning</v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step editable :complete="e1 > 3" step="3">Second Cleaning</v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step editable :complete="e1 > 4" step="4">Third Cleaning</v-stepper-step>

        </v-stepper-header>

        <v-stepper-items>
          <v-stepper-content step="1">

            <div v-if="false" class="text-xs-center">
              <v-progress-circular
                  :size="50"
                  color="primary"
                  indeterminate
              ></v-progress-circular>
            </div>

            <Step1/>


          </v-stepper-content>

          <v-stepper-content step="2">

            <Step2/>

          </v-stepper-content>

          <v-stepper-content step="3">
            <v-card
                class="mb-5"
                color="grey lighten-1"
                height="200px"
            ></v-card>

          </v-stepper-content>

          <v-stepper-content step="4">
            <v-card
                class="mb-5"
                color="grey lighten-1"
                height="200px"
            ></v-card>

          </v-stepper-content>
        </v-stepper-items>


      </v-stepper>


    </v-layout>

    <v-layout class="footer">
      <div class="submit">

        <v-btn class="cancel" color="primary">Cancel</v-btn>

        <v-divider></v-divider>

        <v-btn
            class="continue"
            color="primary"
            @click="increaseStep"
        >
          Continue
        </v-btn>

      </div>
    </v-layout>

  </v-app>
</template>

<script>
  import Step1 from '../components/Step1'
  import Step2 from '../components/Step2'

  export default {
    components: {
      Step1,
      Step2
    },
    data() {
      return {
        e1: 0
      }
    },
    methods: {
      increaseStep() {
        this.e1 = (parseInt(this.e1) + 1).toString()
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
