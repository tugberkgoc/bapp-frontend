<template>
  <nav class="navbar navbar-expand-sm fixed-top nav-back">
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#collapsibleNavbar"
    >
      <i class="fas fa-align-justify"></i>
    </button>

    <div class="collapse navbar-collapse" id="collapsibleNavbar">

      <!-- QUENTEDA UI -->
      <div class="my-nav-brand">
        <a>{{toolbarItems[0].item}}</a>
      </div>
      <ul class="navbar-nav">

        <!-- CORPUS OPERATIONS -->
        <li class="nav-item dropdown">
          <a class="nav-link" href="#" data-toggle="dropdown">{{toolbarItems[1].item}}</a>
          <div class="dropdown-menu">
            <div
              v-for="item in toolbarItems[1].items"
              :key="item"
              @click="onClick"
            >
              <a class="dropdown-item" :href="item.to" v-text="item.name"></a>
            </div>
          </div>
        </li>

        <!-- SPACY OPERATIONS -->
        <li class="nav-item dropdown">
          <a class="nav-link" href="#" data-toggle="dropdown">{{toolbarItems[2].item}}</a>
          <div class="dropdown-menu">
            <div
              v-for="item in toolbarItems[2].items"
              :key="item"
              @click="onClick"
            >
              <a class="dropdown-item" :href="item.to" v-text="item.name"></a>
            </div>
          </div>
        </li>

        <!-- BLOG -->
        <li class="nav-item">
          <a class="nav-link" href="#">{{toolbarItems[3].item}}</a>
        </li>

        <!-- CONTACT -->
        <li class="nav-item">
          <a class="nav-link" href="/contact">{{toolbarItems[4].item}}</a>
        </li>

      </ul>
    </div>
  </nav>
</template>

<script>
  export default {
    data: () => ({
      toolbarItems: [
        {item: 'Quenteda UI', to: '/'},
        {
          item: 'CORPUS OPERATIONS', to: '/corpus-operations',
          items: [
            {name: 'Corpus Creation', to: '/'},
            {name: 'Corpus Summary', to: '/'},
            {name: 'Explore Your Corpus', to: '/'},
            {name: 'Corpus Plots', to: '/'}
          ]
        },
        {
          item: 'SPACY OPERATIONS', to: '/spacy-operations',
          items: [
            {name: 'Spacy Initialize', to: '/'},
            {name: 'Discover CSV', to: '/'},
            {name: 'CSV Plots', to: '/'}
          ]
        },
        {item: 'BLOG', to: '/blog'},
        {item: 'Contact', to: '/contact'}
      ]
    }),
    watch: {
      '$route'(val) {
        this.title = val.name
      }
    },
    mounted() {
    },
    beforeDestroy() {
    },
    methods: {
      onClick() {
        //
      },
    }
  }
</script>

<style>
  .nav-back {
    background-color: rgba(201, 127, 127, 0.5);
  }

  .navbar-nav {
    padding-left: 30px;
  }

  .nav-item {
    padding-left: 15px;
  }

  .navbar-nav a {
    color: rgb(255, 248, 248);
    font-size: 20px;
    font-weight: 700;
  }

  .navbar-nav a:hover {
    color: rgb(112, 112, 112);
  }

  .dropdown-menu a {
    color: rgba(201, 127, 127, 0.85);
    font-size: 20px;
    font-weight: 700;
  }

  .dropdown-menu a:hover {
    color: rgb(255, 255, 255);
    background-color: rgb(206, 94, 94);
  }

  .my-nav-brand {
    color: rgb(255, 255, 255);
    font-size: 20px;
    font-weight: 100;
    padding-left: 20px;
  }
</style>
