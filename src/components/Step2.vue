<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <v-layout v-if="E1 === '2'" column style="">

    <div class="firstVerticalBar">

      <div class="firstHeader">
        <h3>Word / Length Histogram</h3>
      </div>

      <d3-vertical-bar
          style="display: flex;"
          :data="data"
          :options="options"
          width="100%"
          height="300px"> <!-- :margin="margin" -->
      </d3-vertical-bar>

    </div>

    <div class="secondVerticalBar">

      <div class="firstHeader">
        <h3>Sentence / Length Histogram</h3>
      </div>

      <d3-vertical-bar
          style="display: flex;"
          :data="sentenceData"
          :options="sentenceOptions"
          width="100%"
          height="300px"> <!-- :margin="margin" -->
      </d3-vertical-bar>

    </div>

    <div class="firstTable">

      <v-data-table
          :headers="headers"
          :items="desserts"
          class="elevation-1"
      >
        <template v-slot:items="props">
          <td>{{ props.item.name }}</td>
          <td class="text-xs-right">{{ props.item.calories }}</td>
          <td class="text-xs-right">{{ props.item.fat }}</td>
          <td class="text-xs-right">{{ props.item.carbs }}</td>
          <td class="text-xs-right">{{ props.item.protein }}</td>
          <td class="text-xs-right">{{ props.item.iron }}</td>
        </template>
      </v-data-table>

    </div>

  </v-layout>
</template>

<script>
  import {d3VerticalBar} from 'd3-vs';

  import {mapState} from 'vuex';

  export default {
    components: {
      d3VerticalBar
    },
    data: () => {
      return {
        data: [
          {key: 'Tugberk', value: 10},
          {key: 'Tugce', value: 5},
          {key: 'Ali', value: 7},
          {key: 'Mert', value: 8},
          {key: 'Kemal', value: 9},
          {key: 'Random', value: 3},
          {key: 'Veli', value: 2},
          {key: 'Ibrahim', value: 5}
        ],
        options: {
          axisXLabel: 'Word',
          axisYLabel: 'Length'
        },
        sentenceData: [
          {key: 'Tugberk', value: 10},
          {key: 'Tugce', value: 5},
          {key: 'Ali', value: 7},
          {key: 'Mert', value: 8},
          {key: 'Kemal', value: 9},
          {key: 'Random', value: 3},
          {key: 'Veli', value: 2},
          {key: 'Ibrahim', value: 5}
        ],
        sentenceOptions: {
          axisXLabel: 'Sentence',
          axisYLabel: 'Length'
        },
        headers: [
          {
            text: 'Dessert (100g serving)',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          { text: 'Calories', value: 'calories' },
          { text: 'Fat (g)', value: 'fat' },
          { text: 'Carbs (g)', value: 'carbs' },
          { text: 'Protein (g)', value: 'protein' },
          { text: 'Iron (%)', value: 'iron' }
        ],
        desserts: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%'
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: '1%'
          },
          {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: '7%'
          },
          {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: '8%'
          },
          {
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: '16%'
          },
          {
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: '0%'
          },
          {
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: '2%'
          },
          {
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: '45%'
          },
          {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: '22%'
          },
          {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: '6%'
          }
        ]
      }
    },
    computed: mapState(['E1']),
  }

</script>

<style lang="stylus" scoped>

  .firstHeader {
    padding-left: 50vw - 5px;
    padding-bottom 2.5vh;
    padding-top: 1vw;
  }

</style>
