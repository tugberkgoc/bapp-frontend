<template>
  <div id="app">
    <vue-dropzone
        ref="dropzone"
        id="drop1"
        :options="dropOptions"
        @vdropzone-complete="afterComplete">
    </vue-dropzone>

    <v-btn style="margin-top: 50px;" @click="removeAllFiles">Remove All Files</v-btn>


      Select image to upload:


    <input ref="file" id="file" type="file" v-on:change="handleFileUpload">


    <input value="Upload" name="submit" v-on:click="sendRequest">


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
        chunking: true,
        chunkSize: 500, // Bytes
        addRemoveLinks: true,
        method: 'POST'
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
      },
      sendRequest() {
        let formData = new FormData()

        formData.append('file', this.file)
        formData.append('remark', "Hello World")

        axios.post("http://localhost:8000/api/upload/", formData,{
          headers: {'content-type':'multipart/form-data'}
        }).then(x => console.log(x))
      },
      handleFileUpload(){
        this.file = this.$refs.file.files[0];
      }
    }
  };
</script>

<style scoped>

  #drop1 {
  }

  #app {
    height: 30vh;
  }

</style>
