<template>
  <div style="background-color: white;">
    <div>
      <div>
        <router-view />
      </div>
    </div>
    <!--<core-footer v-if="$route.name !== 'Maps'" />-->
  </div>
</template>

<script>
export default {
  metaInfo () {
    return {
      title: ''
    }
  }
}
</script>

<style>
</style>
