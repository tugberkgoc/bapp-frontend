<template>
  <v-container>


    <div class="container">


      <div class="md-top-left">


        <v-label>Upload File Here
          <input type="file" id="file" ref="file" v-on:change="handleFileUpload()"/>
        </v-label>

        <br>

        <v-btn flat prominent style="background: #f44336;" v-on:click="submitFile()">Submit</v-btn>

      </div>
    </div>


    <div style="height: 100%; padding-top: 40px; box-sizing: border-box; background: #ffffff; padding-left: 40px;">
      <ag-grid-vue style="width: 100%; height: 100%;"
                   id="myGrid"
                   class="ag-theme-material"
                   v-if="isPie"
                   :gridOptions="gridOptions"
                   @grid-ready="onGridReady"
                   :defaultColDef="defaultColDef"
                   :columnDefs="columnDefs"
                   :rowData="rowData"

      >
      </ag-grid-vue>


    </div>

    <!--<div class="container" style=" padding-top: 4px; top: 0px; left: 0px;"> &lt;!&ndash; position: absolute; &ndash;&gt;-->
      <!--<v-btn style="background: #f44336" v-on:click="onUpdateSomeValues()">Update Some D &amp; E Values</v-btn>-->
    <!--</div>-->

    <div>
      <RotatingPieChart v-if="isPie" :data="data" >

      </RotatingPieChart>
    </div>

  </v-container>
</template>

<script>
  import {AgGridVue} from "ag-grid-vue";

  import axios from '../plugins/axios';

  import RotatingPieChart from "vue-d3-rotating-piechart";

  export default {
    name: 'Domain',
    data: () => ({
      file: '',
      columnDefs: null,
      rowData: null,
      gridOptions: null,
      gridApi: null,
      columnApi: null,
      defaultColDef: null,
      data:  [],
      isPie: false
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
      ];
      this.defaultColDef = {
        valueFormatter: params => {
          return this.formatNumber(params.value);
        },
        cellClass: "align-right",
        resizable: true
      };
      this.rowData = '' //this.createRowData();
      this.defaultColDef = { sortable: true };
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
      // onUpdateSomeValues() {
      //   var rowCount = this.gridApi.getDisplayedRowCount();
      //   for (var i = 0; i < 10; i++) {
      //     var row = Math.floor(Math.random() * rowCount);
      //     var rowNode = this.gridApi.getDisplayedRowAtIndex(row);
      //     rowNode.setDataValue("d", Math.floor(Math.random() * 10000));
      //     rowNode.setDataValue("e", Math.floor(Math.random() * 10000));
      //   }
      // },
      onGridReady(params) {
        params.api.sizeColumnsToFit();
      },
      // createRowData() {
      //   var rowData = [];
      //   for (var i = 0; i < 20; i++) {
      //     rowData.push({
      //       a: Math.floor(((i + 323) * 25435) % 10000),
      //       b: Math.floor(((i + 323) * 23221) % 10000),
      //       c: Math.floor(((i + 323) * 468276) % 10000),
      //       d: 0,
      //       e: 0
      //     });
      //   }
      //   return rowData;
      // },
      numberValueParser(params) {
        return Number(params.newValue);
      },
      formatNumber(number) {
        return Math.floor(number)
          .toString()
          .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
      },

      handleFileUpload() {
        this.file = this.$refs.file.files[0];
      },
      fillData() {
        this.rowData = [
          {a: 40, b: 20, c:10},
          {a: 50, b: 20, c:10}
        ]
        this.data = [
          {label: 'ex01', value: this.rowData[0].a},
          {label: 'ex02', value: this.rowData[1].a}
        ]
        this.isPie = true
      },
      submitFile() {
        /*
                Initialize the form data
            */
        let formData = new FormData();

        /*
            Add the form data we need to submit
        */
        formData.append('file', this.file);

        /*
          Make the request to the POST /single-file URL
        */
        axios.post('/api/excel',
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }
        ).then(() => {
          this.fillData();
        })
          .catch(function () {
            console.log('FAILURE!!');
          });
      }
      ,
    }
  }
</script>

