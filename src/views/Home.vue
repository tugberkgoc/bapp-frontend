<template>
  <div id="main">
    <b-jumbotron>
      <template slot="header">Quenteda UI</template>

      <template slot="lead">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </template>

      <hr class="my-4">

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>

      <b-button variant="primary" to="/corpus-operations">Start Operations</b-button>
      <!--<b-button variant="success" href="#">Do Something Else</b-button>-->
    </b-jumbotron>
  </div>
</template>

<script>

  export default {
    name: 'Domain',
    data: () => ({

    }),
    components: {
    },
    created() {
    },
    beforeMount() {

    },
    mounted() {

    },
    computed: {
      isDisabled() {
      },
    },
    methods: {

    }
  }
</script>

<style lang="scss">
#main {
  padding-top: 5vh;
  display: flex;
  justify-content: center;
}
</style>
