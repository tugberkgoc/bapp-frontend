<template>
  <v-tabs fixed-tabs>

    <v-tab
        v-for="n in tabs"
        :key="n"
        ripple
    >
      {{ n }}
    </v-tab>

    <v-tab-item :key="1">
      <Upload/>
    </v-tab-item>

    <v-tab-item :key="2">
      <Query/>
    </v-tab-item>

  </v-tabs>
</template>

<script>
  import Upload from '../components/Step1Upload'
  import Query from '../components/Step1Query'

  export default {
    data: () => {
      return {
        tabs: ['UPLOAD', 'QUERY'],
      }
    },
    components: {
      Upload,
      Query
    }
  }

</script>

<style lang="scss" scoped>

</style>
