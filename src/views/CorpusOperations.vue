<template>
  <div class="stepper">
    <horizontal-stepper
      class="stepper"
      :steps="steps"
      @completed-step="completeStep"
      @active-step="isStepActive"
      @stepper-finished="alert">
    </horizontal-stepper>
  </div>
</template>

<script>
  import HorizontalStepper from 'vue-stepper';

  // This components will have the content for each stepper step.
  import StepOne from './StepOne';
  import StepTwo from './StepTwo';
  import StepThree from './StepThree';

  export default {
    components: {
      HorizontalStepper
    },
    data() {
      return {
        steps: [
          {
            icon: '',
            name: 'first',
            title: 'Step 1',
            component: StepOne,
            completed: false
          },
          {
            icon: '',
            name: 'second',
            title: 'Step 2',
            component: StepTwo,
            completed: false
          },
          {
            icon: '',
            name: 'third',
            title: 'Step 3',
            component: StepThree,
            completed: false

          }
        ]
      }
    },
    watch: {
      steps(steps) {
        // Fetch data about the movie
        fetch(`/${steps}`).then((data) => {
          console.log(data)
        });
      }
    },
    methods: {
      // Executed when @completed-step event is triggered
      completeStep(payload) {
        this.demoSteps.forEach((step) => {
          if (step.name === payload.name) {
            step.completed = true;
          }
        })
      },
      // Executed when @active-step event is triggered
      isStepActive(payload) {
        this.demoSteps.forEach((step) => {
          if (step.name === payload.name) {
            if (step.completed === true) {
              step.completed = false;
            }
          }
        })
      },
      // Executed when @stepper-finished event is triggered
      alert(payload) {
        alert('end')
      }
    }
  }
</script>

<style>
  .stepper .top {
    display: flex;
    height: 10vh;
  }
</style>
