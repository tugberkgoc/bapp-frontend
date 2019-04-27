<template>
  <div class="toolbar">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand class="brand" v-on:click="goToHomePage">Quenteda UI</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item>
            <router-link tag="li" to="/corpus-operations">Corpus Operations</router-link>
          </b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template slot="button-content">
              <em>Login / Sign Up</em>
              <!--<em v-if="NAME !== ''"> Log Out</em>-->
            </template>
            <b-dropdown-item v-if="NAME !== ''" v-on:click="logOut">Log Out</b-dropdown-item>
            <b-dropdown-item v-if="NAME === ''" to="/login">Login</b-dropdown-item>
            <b-dropdown-item v-if="NAME === ''" to="/register">Sign Up</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
  import {mapState, mapMutations} from 'vuex';

  export default {
    data() {
      return {}
    },
    computed:
      mapState(['NAME']),
    methods: {
      logOut() {
        this.$store.dispatch("SET_EMPTY_STORE", '');
        this.$router.push({path: '/'})
      },
      goToHomePage() {
        this.$router.push({path: '/'})
      }
    }
  };
</script>

<style>
  .toolbar {

  }

  .brand:hover {
    color: black;
  }
</style>
