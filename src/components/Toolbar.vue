<template>
  <v-toolbar>
    <v-toolbar-title>Corpus Operations</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat v-on:click="goToHome">Home</v-btn>
      <v-btn flat v-on:click="goToOperations">Operations</v-btn>
      <v-btn flat>Sign Up / Sign In</v-btn>
    </v-toolbar-items>
    <!--<v-toolbar-side-icon></v-toolbar-side-icon>-->
  </v-toolbar>
</template>

<script>
  export default {
    methods: {
      goToHome() {
        this.$router.push({ path: '/'})
      },
      goToOperations() {
        this.$router.push({ path: '/operations'})
      }
    }
  }
</script>

<style>
</style>
