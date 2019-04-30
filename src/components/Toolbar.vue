<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <v-toolbar>
    <v-toolbar-title>Corpus Operations</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat v-on:click="goToHome">Home</v-btn>
      <v-btn flat v-on:click="goToOperations">Operations</v-btn>

      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn
              flat
              v-on="on"
          >
            Sign Up / Sign In
          </v-btn>
        </template>
        <v-list>
          <v-list-tile
              v-for="(item, index) in items"
              :key="index"
              @click="routeToGiven(item.title)"
          >
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>

    </v-toolbar-items>

    <!--<v-toolbar-side-icon></v-toolbar-side-icon>-->

  </v-toolbar>
</template>

<script>
  export default {
    data: () => ({
      items: [
        {title: 'Sign Up'},
        {title: 'Sign In'}
      ]
    }),
    methods: {
      goToHome() {
        this.$router.push({path: '/'})
      },
      goToOperations() {
        this.$router.push({path: '/operations'})
      },
      routeToGiven(title) {
        if(title === 'Sign Up') {
          this.$router.push({path: 'sign-up'})
        } else if(title === 'Sign In') {
          this.$router.push({path: 'sign-in'})
        }
      }
    }
  }
</script>

<style>
</style>
