<template>
  <div
    class="homemade-toolbar"
  >
    <!-- QUENTEDA UI -->
    <v-btn disabled flat prominent style="background: #eee; width: 150px;">
      <v-avatar>
        <v-label>{{toolbarItems[0].item}}</v-label>
      </v-avatar>
    </v-btn>

    <!-- CORPUS OPERATIONS -->
    <v-menu>
      <v-btn
        flat
        prominent
        slot="activator"
        to="/corpus-operations"
        style="width: 200px"
      >
        <v-avatar>
          <v-label>{{toolbarItems[1].item}}</v-label>
        </v-avatar>
      </v-btn>

      <v-card>
        <v-list dense>
          <v-list-tile
            v-for="item in toolbarItems[1].items"
            :key="item"
            @click="onClick"
          >
            <router-link :to="item.to">
              <v-list-tile-title class="black--text" v-text="item.name"></v-list-tile-title>
            </router-link>
          </v-list-tile>
        </v-list>
      </v-card>
    </v-menu>

    <!-- SPACY OPERATIONS -->
    <v-menu>
      <v-btn
        flat
        prominent
        slot="activator"
        to="/spacy-operations"
        style="width: 180px">
        <v-avatar>
          <v-label>{{toolbarItems[2].item}}</v-label>
        </v-avatar>
      </v-btn>

      <v-card>
        <v-list dense>
          <v-list-tile
            v-for="item in toolbarItems[2].items"
            :key="item"
            @click="onClick"
          >
            <router-link :to="item.to">
              <v-list-tile-title class="options" v-text="item.name"></v-list-tile-title>
            </router-link>
          </v-list-tile>
        </v-list>
      </v-card>
    </v-menu>

    <!-- BLOG -->
    <v-btn flat prominent style="background: #eee; width: 100px;">
      <router-link
        class="toolbar-items"
        to="/blog"
      >
        <v-avatar>
          <v-label>{{toolbarItems[3].item}}</v-label>
        </v-avatar>
      </router-link>
    </v-btn>

    <!-- CONTACT -->
    <v-btn flat prominent style="background: #eee;">
      <router-link
        class="toolbar-items"
        to="/contact"
      >
        <v-avatar>
          <v-label>{{toolbarItems[4].item}}</v-label>
        </v-avatar>
      </router-link>
    </v-btn>

    <!--<v-toolbar-items>-->
    <!--<v-flex-->
    <!--align-center-->
    <!--layout-->
    <!--py-2-->
    <!--&gt;-->
    <!--<v-text-field-->
    <!--v-if="responsiveInput"-->
    <!--class="mr-4 mt-2 purple-input"-->
    <!--label="Search..."-->
    <!--hide-details-->
    <!--color="purple"-->
    <!--/>-->
    <!--<router-link-->
    <!--v-ripple-->
    <!--class="toolbar-items"-->
    <!--to="/"-->
    <!--&gt;-->
    <!--<v-icon color="tertiary">mdi-view-dashboard</v-icon>-->
    <!--</router-link>-->


    <!--<v-menu-->
    <!--bottom-->
    <!--left-->
    <!--content-class="dropdown-menu"-->
    <!--offset-y-->
    <!--transition="slide-y-transition">-->


    <!--<router-link-->
    <!--v-ripple-->
    <!--slot="activator"-->
    <!--class="toolbar-items"-->
    <!--to="/notifications"-->
    <!--&gt;-->
    <!--<v-badge-->
    <!--color="error"-->
    <!--overlap-->
    <!--&gt;-->
    <!--<template slot="badge">-->
    <!--{{ notifications.length }}-->
    <!--</template>-->
    <!--<v-icon color="tertiary">mdi-bell</v-icon>-->
    <!--</v-badge>-->
    <!--</router-link>-->


    <!--<v-card>-->
    <!--<v-list dense>-->
    <!--<v-list-tile-->
    <!--v-for="notification in notifications"-->
    <!--:key="notification"-->
    <!--@click="onClick"-->
    <!--&gt;-->
    <!--<v-list-tile-title-->
    <!--v-text="notification"-->
    <!--/>-->
    <!--</v-list-tile>-->
    <!--</v-list>-->
    <!--</v-card>-->


    <!--</v-menu>-->


    <!--<router-link-->
    <!--v-ripple-->
    <!--class="toolbar-items"-->
    <!--to="/user-profile"-->
    <!--&gt;-->
    <!--<v-icon color="tertiary">mdi-account</v-icon>-->
    <!--</router-link>-->


    <!--</v-flex>-->
    <!--</v-toolbar-items>-->
  </div>
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
  .homemade-toolbar {

  }
  .options {
    position: relative;
    list-style: none;
    display: block;
    transition-duration: 0.5s;
    font-size: 16px;
    font-family: sans-serif;
    text-decoration: none;
    color: #808285;
    padding: 3px 10px 3px 10px;
    transition: all 0.3s ease 0s;
    z-index: 1;
  }
</style>
