<template>
  <div id="about" class="container-fluid">
    <div class="row">
      <div class="col-sm-12 col-md-4 col-lg-4 text-center">
        <img class="about-img">
      </div>
      <div class="col-sm-12 col-md-8 col-lg-8">
        <h1>{{ aboutTitle }}</h1>
        <p>
          {{ about }}
        </p>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    aboutTitle: 'GENERAL INFORMATION',
    about: 'Welcome to QuantedaUI. Created by Ahmet Süerdem, Fuat Can Beylunioğlu and Oğulcan Gök. This application will\n' +
      '          help you to analyze your text data by creating various plots. IN order to use you should arrange your data\n' +
      '          in a CSV file. Your text column name should be “Text” and date format must be DD/MM/YYYY.\n' +
      '          You can initilaze the app by uploading your CSV to the slot located in Corpus Creation tab. After the\n' +
      '          calculations the app will create a .rda file to your working directory which you can upload to continue to\n' +
      '          your work anytime you want. It will hold all the changes you make to your csv file.\n' +
      '          If you want to save your progress any moment, you can just simply click the save button.\n' +
      '          Let\'s see the basics..',
  })
}
</script>

<style lang="scss">
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
    padding-top: 100px;
    padding-left: 25px;
    max-width: 100%;
    height: auto;
  }
</style>
