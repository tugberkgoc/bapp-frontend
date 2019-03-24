<template>
  <v-container>

    <v-layout row>

      <v-flex xs6>

        <v-layout> <!--align-center justify-center row fill-height-->

          <v-card tile flat>

            <v-layout>

              <material-upload-button icon style="transform: scale(3);  padding-left: 150px;"
                                      :fileChangedCallback="fileChanged">
                <template slot="icon">
                  <v-icon style="background: red;  display: inline-block; color: white;">mdi-upload</v-icon>
                </template>
              </material-upload-button>

            </v-layout>

            <br>

            <v-card prominent flat style="padding-left: 180px;">

              <v-radio-group v-model="row" row>

                <v-radio
                  v-for="n in radioOptions"
                  :key="n.value"
                  :label="n.label"
                  :value="n.value"
                ></v-radio>

              </v-radio-group>

            </v-card>

            <v-layout justify-center style="padding-left: 160px">
              <v-btn style="background: red" v-on:click="submitFile()">Upload</v-btn>
            </v-layout>

          </v-card>

        </v-layout>

      </v-flex>

      <v-flex xs6 order-lg2>
        <v-card flat style="border: #000000;">

          <div
            style="height: 100%; padding-top: 40px; box-sizing: border-box; background: #ffffff; padding-left: 40px;">
            <ag-grid-vue style="width: 100%; height: 100%;"
                         id="myGrid"
                         class="ag-theme-material"
                         :gridOptions="gridOptions"
                         @grid-ready="onGridReady"
                         v-if="isPie"
                         :defaultColDef="defaultColDef"
                         :columnDefs="columnDefs"
                         :rowData="rowData"

            >
            </ag-grid-vue>
          </div>

        </v-card>
      </v-flex>

    </v-layout>

    <br>

    <v-layout row>

      <v-flex xs6>
          <material-g-chart type="ColumnChart" :data="chartData" :options="chartOptions"/>
      </v-flex>

      <v-flex xs6 order-lg2>
        <v-layout justify-center>
          <RotatingPieChart v-if="isPie" :data="data"></RotatingPieChart>
        </v-layout>
      </v-flex>

    </v-layout>

  </v-container>
</template>

<script>
  import {AgGridVue} from "ag-grid-vue";

  import axios from '../plugins/axios';

  import RotatingPieChart from "vue-d3-rotating-piechart";

  export default {
    name: 'Domain',
    data: () => ({
      file: null,
      columnDefs: null,
      rowData: null,
      gridOptions: null,
      gridApi: null,
      columnApi: null,
      defaultColDef: null,
      data: [],
      isPie: false,
      chartData: [
        ['Year', 'Sales', 'Expenses', 'Profit'],
        ['2014', 1000, 400, 200],
        ['2015', 1170, 460, 250],
        ['2016', 660, 1120, 300],
        ['2017', 1030, 540, 350]
      ],
      chartOptions: {
        chart: {
          title: 'Company Performance',
          subtitle: 'Sales, Expenses, and Profit: 2014-2017',
        }
      },
      radioOptions: [
        {label: 'CSV', value: 'csv'},
        {label: 'EXCEL', value: 'excel'},
        {label: 'JSON', value: 'json'}
      ]
    }),
    components: {
      AgGridVue,
      RotatingPieChart
    },
    created() {
    },
    beforeMount() {
      this.gridOptions = {};
      this.columnDefs = [
        {
          headerName: "Name",
          field: "a",
          editable: true,
          unSortIcon: true
          // valueParser: this.numberValueParser
        },
        {
          headerName: "Surname",
          field: "b",
          editable: true,
          // valueParser: this.numberValueParser
        },
        {
          headerName: "Number",
          field: "c",
          editable: true,
          valueParser: this.numberValueParser
        },
        {
          headerName: "Number",
          field: "d",
          editable: true,
          valueParser: this.numberValueParser
        },
        {
          headerName: "Number",
          field: "3",
          editable: true,
          valueParser: this.numberValueParser
        },
        {
          headerName: "Number",
          field: "f",
          editable: true,
          valueParser: this.numberValueParser
        },
      ];
      this.defaultColDef = {
        valueFormatter: params => {
          return this.formatNumber(params.value);
        },
        cellClass: "align-right",
        resizable: true
      };
      this.rowData = '' //this.createRowData();
      this.defaultColDef = {sortable: true};
    },
    mounted() {
      this.gridApi = this.gridOptions.api;
      this.gridColumnApi = this.gridOptions.columnApi;
    },
    computed: {
      isDisabled() {
      },
    },
    methods: {
      onGridReady(params) {
        params.api.sizeColumnsToFit();
      },
      numberValueParser(params) {
        return Number(params.newValue);
      },
      formatNumber(number) {
        return Math.floor(number).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
      },
      fillData() {
        this.rowData = this.$store.state.rowData
        console.log(this.state)
        this.data = [
          {label: 'ex01', value: this.rowData[0].a},
          {label: 'ex02', value: this.rowData[1].a}
        ]
        this.isPie = true
      },
      submitFile() {
        this.fillData();

        if (this.file === null) {
          return;
        }

        let formData = new FormData();
        formData.append('file', this.file);
        axios.post('/api/excel', formData, {
            headers: {'Content-Type': 'multipart/form-data'}
          }
        ).then(() => {
          this.fillData();
        }).catch(() => {
          console.log('FAILURE!!');
        });
      },
      fileChanged(file) {
        this.file = file;
      }
    }
  }
</script>

