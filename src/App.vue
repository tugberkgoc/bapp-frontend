<template>
  <div>
    <core-toolbar></core-toolbar>

    <core-view></core-view>
  </div>
</template>

<style lang="scss">
@import "../node_modules/ag-grid-community/dist/styles/ag-grid.css";
@import './styles/index';

/* Remove in 1.2 */
.v-datatable thead th.column.sortable i {
  vertical-align: unset;
}
</style>
