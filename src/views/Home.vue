<template>
  <div>
    <div id="main" class="container-fluid">

      <div class="main-container">
        <div class="row">

          <div class="col-12 col-sm-6 col-md-6 main-position" v-if="isUploadSelected">

            <h1 class="main-h1 text-center">Upload File Here</h1>
            <p class="intro-text text-center">Lorem ipsum dolor sit amet</p>
            <b-form-group>
              <div class="d-flex justify-content-center">
                <b-form-file v-model="file" ref="fileinput" class="mb-2 my-file-input"
                             :fileChangedCallback="fileChanged"></b-form-file>
              </div>
              <div class="d-flex justify-content-center">
                <b-form-radio-group v-model="selected" :options="radioOptions" name="radioInline"></b-form-radio-group>
              </div>
              <div class="d-flex justify-content-center my-submit-btn">
                <b-button v-on:click="submitFile()" class="mr-2">SUBMIT</b-button>
              </div>
            </b-form-group>

          </div>

          <div class="col-12 col-sm-6 col-md-6 main-position" v-if="isQuerySelected">

            <b-form @submit="fillData()" @reset="onReset">
              <b-form-group
                id="input-group-1"
                label="Query:"
                label-for="input-1"
                description="We'll never share your query with anyone else."
              >
                <b-form-input
                  id="input-1"
                  v-model="query"
                  type="text"
                  required
                  placeholder="Enter query"
                ></b-form-input>
              </b-form-group>

              <b-button type="submit" variant="primary">Submit</b-button>
              <b-button type="reset" variant="danger">Reset</b-button>
            </b-form>

          </div>


          <div class="col-12 col-sm-6 col-md-6 main-position" v-if="!isUploadSelected && !isQuerySelected">

            <div>
              <b-button block variant="info" @click="isUploadSelected = true">Upload Excel, CSV or JSON</b-button>
              <b-button block variant="info" @click="isQuerySelected = true">Query from Database</b-button>
              <b-button block variant="info">Lorem Ipsum</b-button>
            </div>

          </div>


          <div class="col-12 col-sm-6 col-md-6 vue-ag-grid"
               style="height: 100%; padding-top: 40px; box-sizing: border-box; background: white; padding-left: 40px;">

            <div class="ag-grid-div">
              <ag-grid-vue style="height: 50vh; width: 50vw;"
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
          </div>
        </div>

        <div class="row">

          <div class="col-12 col-sm-6 col-md-6 g-chart">
            <material-g-chart
              class="my-bar-chart"
              type="ColumnChart"
              v-if="isPie"
              :data="chartData"
              :options="chartOptions"
            >
            </material-g-chart>
          </div>

          <div class="col-12 col-sm-6 col-md-6 word-cloud">

            <vue-word-cloud style="position:center;" :words="words" v-if="isPie" animation-overlap="0"
                            animation-easing="ease"
                            spacing="0.01">
              <template slot-scope="{text, weight, word}">
                <div v-b-tooltip.hover :title="text + '\n' + weight" style="cursor: pointer;"
                     @click="onWordClick(word)">
                  {{ text }}
                </div>
              </template>
            </vue-word-cloud>

          </div>

        </div>

      </div>

    </div>

    <div id="about" class="container-fluid">
      <div class="row">
        <div class="col-sm-12 col-md-4 col-lg-4 text-center">
          <img class="about-img">
        </div>
        <div class="col-sm-12 col-md-8 col-lg-8">
          <h1>GENERAL INFORMATION</h1>
          <p>
            Welcome to QuantedaUI. Created by Ahmet Süerdem, Fuat Can Beylunioğlu and Oğulcan Gök. This application will
            help you to analyze your text data by creating various plots. IN order to use you should arrange your data
            in a CSV file. Your text column name should be “Text” and date format must be DD/MM/YYYY.
            You can initilaze the app by uploading your CSV to the slot located in Corpus Creation tab. After the
            calculations the app will create a .rda file to your working directory which you can upload to continue to
            your work anytime you want. It will hold all the changes you make to your csv file.
            If you want to save your progress any moment, you can just simply click the save button.
            Let's see the basics..
          </p>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {AgGridVue} from "ag-grid-vue";
  import VueWordCloud from 'vuewordcloud';
  import axios from '../plugins/axios';

  export default {
    name: 'Domain',
    data: () => ({
      words: null,
      file: null,
      columnDefs: null,
      rowData: null,
      gridOptions: null,
      gridApi: null,
      columnApi: null,
      defaultColDef: null,
      isPie: false,
      isUploadSelected: false,
      isQuerySelected: false,
      query: null,
      chartData: null,
      chartOptions: {
        chart: {
          title: "Company Performance",
          subtitle: "Sales, Expenses, and Profit: 2014-2017"
        }
      },
      selected: "first",
      radioOptions: [
        {text: 'CSV', value: 'csv'},
        {text: 'EXCEL', value: 'excel'},
        {text: 'JSON', value: 'json'}
      ]
    }),
    components: {
      AgGridVue,
      VueWordCloud
    },
    created() {
    },
    beforeMount() {
      this.gridOptions = {};
      this.columnDefs = [
        {
          headerName: "No",
          field: "a",
          editable: true,
          unSortIcon: true
        },
        {
          headerName: "Newspaper Name",
          field: "b",
          editable: true,
        },
        {
          headerName: "Lorem",
          field: "c",
          editable: true,
          valueParser: this.numberValueParser
        },
        {
          headerName: "Lorem",
          field: "d",
          editable: true,
          valueParser: this.numberValueParser
        },
        {
          headerName: "Lorem",
          field: "e",
          editable: true,
          valueParser: this.numberValueParser
        },
        {
          headerName: "Lorem",
          field: "f",
          editable: true,
          valueParser: this.numberValueParser
        },
        {
          headerName: "Lorem",
          field: "g",
          editable: true,
          valueParser: this.numberValueParser
        },
        {
          headerName: "Lorem",
          field: "h",
          editable: true,
          valueParser: this.numberValueParser
        },
        {
          headerName: "Lorem",
          field: "j",
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


      let enterAnimation = {opacity: 0};
      let leaveAnimation = {opacity: 0};
      this.createCanvas();
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
      randomColor() {
        return rgb(Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255)).toString()
      },
      createCanvas() {
        return document.createElement('canvas');
      },
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

        this.chartData = this.$store.getters.CHART_DATA
        this.words = this.$store.getters.WORD_CLOUD
        this.rowData = this.$store.getters.ROW_DATA
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
      },
    }
  }
</script>

<style lang="scss">
  #main {
    height: 1000px;
  }

  .main-h1 {
    font-size: 28px;
    font-weight: 600;
  }

  .intro-text {
    font-size: 24px;
    font-weight: 100;
  }

  .main-position {
    padding-top: 170px;
  }

  .main-img {
    position: relative;
    width: 650px;
    height: 355px;
    padding-top: 93px;
    padding-bottom: 25px;
    max-width: 100%;
  }

  .my-file-input {
    width: 430px;
  }

  .vue-ag-grid {
    padding-top: 80px;
  }

  .my-submit-btn {
    padding-top: 25px;
  }

  .barchart {
    margin-left: -35px;
    margin-top: -70px;
  }

  #about {
    background: rgba(201, 127, 127, 0.5);
    color: white;
    padding-bottom: 50px;
  }

  #about h1 {
    font-size: 30px;
    padding-top: 35px;
    padding-bottom: 10px;
    padding-left: 110px;
    font-weight: 300;
  }

  #about p {
    padding-left: 30px;
  }

  .about-img {
    position: relative;
    width: 340px;
    height: 300px;
    padding-top: 100px;
    padding-left: 25px;
    max-width: 100%;
    height: auto;
  }

  .my-bar-chart {
    height: 50vh;
    width: 50vw;
    padding-bottom: 30px;
  }

  .g-chart {
    position: relative;
    height: 50vh;
    width: 50vw;
  }

  .word-cloud {
    height: 50vh;
    width: 50vw;
    position: center;
  }

  .ag-grid-div {
    padding-top: 50px;
    height: 50vh;
    width: 50vw;
  }

  .button-group {
    position: center;
  }

</style>
