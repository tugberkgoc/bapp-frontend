<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <v-layout v-if="E1 === '2'" column style="">

    <div class="firstVerticalBar">

      <div class="firstHeader">
        <h3>Word / Length Histogram</h3>
      </div>

      <d3-vertical-bar
          style="display: flex;"
          :data="JSON_FILE"
          :options="options"
          width="100%"
          height="300px"> <!-- :margin="margin" -->
      </d3-vertical-bar>

    </div>

    <!--<div class="secondVerticalBar">-->

      <!--<div class="firstHeader">-->
        <!--<h3>Sentence / Length Histogram</h3>-->
      <!--</div>-->

      <!--<d3-vertical-bar-->
          <!--style="display: flex;"-->
          <!--:data="sentenceData"-->
          <!--:options="sentenceOptions"-->
          <!--width="100%"-->
          <!--height="300px"> &lt;!&ndash; :margin="margin" &ndash;&gt;-->
      <!--</d3-vertical-bar>-->

    <!--</div>-->

    <!--<div class="firstTable">-->

      <!--<v-data-table-->
          <!--:headers="headers"-->
          <!--:items="wordFrequency"-->
          <!--class="elevation-1"-->
          <!--style="padding-bottom: 50px"-->
      <!--&gt;-->
        <!--<template v-slot:items="props">-->
          <!--<td>{{ props.item.number }}</td>-->
          <!--<td class="text-xs-left">{{ props.item.word }}</td>-->
          <!--<td class="text-xs-left">{{ props.item.frequency }}</td>-->
        <!--</template>-->
      <!--</v-data-table>-->

    <!--</div>-->

    <!--<div class="secondTable">-->

      <!--<v-data-table-->
          <!--:headers="headersBottom"-->
          <!--:items="wordFrequencyBottom"-->
          <!--class="elevation-1"-->
          <!--style="padding-bottom: 50px"-->
      <!--&gt;-->
        <!--<template v-slot:items="props">-->
          <!--<td>{{ props.item.number }}</td>-->
          <!--<td class="text-xs-left">{{ props.item.word }}</td>-->
          <!--<td class="text-xs-left">{{ props.item.frequency }}</td>-->
        <!--</template>-->
      <!--</v-data-table>-->

    <!--</div>-->

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
        options: {
          axisXLabel: 'Word',
          axisYLabel: 'Frequency'
        },
        // sentenceData: [
        //   {key: 'Tugberk', value: 10},
        //   {key: 'Tugce', value: 5},
        //   {key: 'Ali', value: 7},
        //   {key: 'Mert', value: 8},
        //   {key: 'Kemal', value: 9},
        //   {key: 'Random', value: 3},
        //   {key: 'Veli', value: 2},
        //   {key: 'Ibrahim', value: 5}
        // ],
        // sentenceOptions: {
        //   axisXLabel: 'Sentence',
        //   axisYLabel: 'Length'
        // },
        // headers: [
        //   {
        //     text: 'Number',
        //     align: 'left',
        //     sortable: false,
        //     value: 'number'
        //   },
        //   { text: 'Word', value: 'word' },
        //   { text: 'Frequency', value: 'frequency' }
        // ],
        // wordFrequency: [
        //   {
        //     number: 1,
        //     word: 'frozen',
        //     frequency: 159
        //   },
        //   {
        //     number: 2,
        //     word: 'tugberk',
        //     frequency: 140
        //   },
        //   {
        //     number: 3,
        //     word: 'tugce',
        //     frequency: 169
        //   },
        //   {
        //     number: 4,
        //     word: 'ali',
        //     frequency: 120
        //   },
        //   {
        //     number: 5,
        //     word: 'veli',
        //     frequency: 172
        //   },
        //   {
        //     number: 6,
        //     word: 'simge',
        //     frequency: 164
        //   },
        //   {
        //     number: 7,
        //     word: 'umut',
        //     frequency: 135
        //   },
        //   {
        //     number: 8,
        //     word: 'ekin',
        //     frequency: 127
        //   },
        //   {
        //     number: 9,
        //     word: 'murat',
        //     frequency: 174
        //   },
        //   {
        //     number: 10,
        //     word: 'dilara',
        //     frequency: 152
        //   }
        // ],
        // headersBottom: [
        //   {
        //     text: 'Number',
        //     align: 'left',
        //     sortable: false,
        //     value: 'number'
        //   },
        //   { text: 'Word', value: 'word' },
        //   { text: 'Frequency', value: 'frequency' }
        // ],
        // wordFrequencyBottom: [
        //   {
        //     number: 1,
        //     word: 'frozen',
        //     frequency: 159
        //   },
        //   {
        //     number: 2,
        //     word: 'tugberk',
        //     frequency: 140
        //   },
        //   {
        //     number: 3,
        //     word: 'tugce',
        //     frequency: 169
        //   },
        //   {
        //     number: 4,
        //     word: 'ali',
        //     frequency: 120
        //   },
        //   {
        //     number: 5,
        //     word: 'veli',
        //     frequency: 172
        //   },
        //   {
        //     number: 6,
        //     word: 'simge',
        //     frequency: 164
        //   },
        //   {
        //     number: 7,
        //     word: 'umut',
        //     frequency: 135
        //   },
        //   {
        //     number: 8,
        //     word: 'ekin',
        //     frequency: 127
        //   },
        //   {
        //     number: 9,
        //     word: 'murat',
        //     frequency: 174
        //   },
        //   {
        //     number: 10,
        //     word: 'dilara',
        //     frequency: 152
        //   }
        // ]
      }
    },
    computed: mapState(['E1', 'JSON_FILE']),
    methods: {
      convertData() {

      }
    }
  }

</script>

<style lang="stylus" scoped>

  .firstHeader {
    padding-left: 50vw - 5px;
    padding-bottom 2.5vh;
    padding-top: 1vw;
  }

</style>
