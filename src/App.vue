<template>
  <v-app>
    <core-filter />

    <core-toolbar />

    <!--<core-drawer />-->

    <core-view />
  </v-app>
</template>

<style lang="scss">
@import "../node_modules/ag-grid-community/dist/styles/ag-grid.css";
@import "../node_modules/ag-grid-community/dist/styles/ag-theme-balham.css";
@import '../node_modules/vue-material/dist/vue-material.min.css';
@import '../node_modules/vue-material/dist/theme/default.css';
@import './styles/index';

/* Remove in 1.2 */
.v-datatable thead th.column.sortable i {
  vertical-align: unset;
}
</style>
