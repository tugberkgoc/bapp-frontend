<template>
  <div id="app">
    <vue-dropzone
        ref="dropzone"
        id="drop1"
        :options="dropOptions"
        @vdropzone-complete="afterComplete">
    </vue-dropzone>

    <v-btn style="margin-top: 50px;" @click="removeAllFiles">Remove All Files</v-btn>
  </div>
</template>

<script>
  import vueDropzone from "vue2-dropzone";
  import 'vue2-dropzone/dist/vue2Dropzone.min.css'

  export default {
    data: () => ({
      dropOptions: {
        url: "https://httpbin.org/post",
        maxFilesize: 2, // MB
        maxFiles: 4,
        chunking: true,
        chunkSize: 500, // Bytes
        addRemoveLinks: true
      }
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
      }
    }
  };
</script>

<style>

  #drop1 {
  }

  #app {
    height: 30vh;
  }

</style>
