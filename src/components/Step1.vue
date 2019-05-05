<template>
  <div id="app">
    <vue-dropzone
        ref="dropzone"
        id="drop1"
        :options="dropOptions"
        @vdropzone-complete="afterComplete"
        v-on:vdropzone-sending="sendingEvent">
    </vue-dropzone>

    <v-btn style="margin-top: 50px;" @click="removeAllFiles">Remove All Files</v-btn>

  </div>
</template>

<script>
  import vueDropzone from "vue2-dropzone";
  import 'vue2-dropzone/dist/vue2Dropzone.min.css'

  import axios from 'axios'

  export default {
    data: () => ({
      dropOptions: {
        url: "http://localhost:8000/api/upload/",
        maxFilesize: 5, // MB
        maxFiles: 4,
        chunking: false,
        addRemoveLinks: true,
        // init: function() {
        //   this.on("addedfile", function(file) { this.sendFileTubi(file); });
        // }
      },
      file: ''
    }),
    components: {
      vueDropzone
    },
    methods: {
      removeAllFiles() {
        this.$refs.dropzone.removeAllFiles();
      },
      afterComplete(file) {
        console.log(file);
        console.log(file.status);

        let payload = []
        let array = JSON.parse("[" + file.xhr.response + "]");
        array[0].forEach(x => {
          payload.push({key: x[0], value: parseInt(x[1])})
        })

        this.$store.dispatch("SET_JSON_FILE", payload).then();
      },
      sendRequest() {
        let formData = new FormData()

        formData.append('file', this.file)
        formData.append('remark', "Hello World")

        this.$store.dispatch("SET_JSON_FILE", formData).then(x => console.log(`Status Code : ${x}`));

        // axios.post("http://localhost:8000/api/upload/", formData,{
        //   headers: {'content-type':'multipart/form-data'}
        // }).then(x => console.log(x))
      },
      handleFileUpload(){
        this.file = this.$refs.file.files[0];
      },
      sendingEvent(file, xhr, formData) {
        formData.append('remark', "Hello World")
      }
    }
  };
</script>

<style scoped>

  #drop1 {
  }

  #app {
    height: 100vh;
  }

</style>
