<template>
 <div class="container">
   <hr class="my-4">
   <b-button class="button" variant="danger" v-on:click="submit">Selam</b-button>

   <material-g-chart
       class="my-bar-chart"
       type="ColumnChart"
       :data="chartData"
       :options="chartOptions"
   >
   </material-g-chart>

 </div>
</template>

<script>

  export default {
    data: () => {
      return {
        chartData: null,
        chartOptions: {
          chart: {
            title: "Company Performance",
            subtitle: "Sales, Expenses, and Profit: 2014-2017"
          }
        },
      }
    },
    methods: {
      submit() {
        this.$emit('can-continue', {value: true})
      }
    }
  }

</script>

<style>
 .button {
   width: 200px;
   height: 50px;
 }

</style>
