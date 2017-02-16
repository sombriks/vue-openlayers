<template>
  <div class="row">
    <div class="col-xs-2">
      <ul>
        <li><router-link to="/introduction">Introduction</router-link></li>
        <li><router-link to="/map">Map</router-link></li>
        <li><router-link to="/marker">Marker</router-link></li>
        <li><router-link to="/icon">Icon</router-link></li>
      </ul>
    </div>
    <div class="col-xs-10">
      <router-view></router-view>
    </div>
  </div>
</template>
<style>

</style>
<script>
  module.exports = {
    name: "DocsVueOpenLayers"
  };
</script>