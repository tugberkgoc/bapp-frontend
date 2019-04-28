<template>
  <v-layout column style="">

    <d3-vertical-bar
        :data="data"
        :options="options"
        :margin="margin"
        width="100%"
        height="300px">
    </d3-vertical-bar>

  </v-layout>
</template>

<script>
  import { d3VerticalBar } from 'd3-vs';

  export default {
    components: {
      d3VerticalBar
    },
    data: () => {
      return {
        data: [
          {key: 'Tugberk', value: 10},
          {key: 'Tugce', value: 5}
        ],
        options: {
          axisXInterval: null
        },
        margin: 5,
      }
    }
  }

</script>

<style>

</style>
