<template>
  <div class="row">
    <div class="col-xs-3">
      <ul>
        <li><router-link to="/introduction">Introduction</router-link></li>
        <li><router-link to="/map">Map</router-link></li>
        <li><router-link to="/mapcenter">Map Center</router-link></li>
        <li><router-link to="/marker">Marker</router-link></li>
        <li><router-link to="/markerposition">Marker Position</router-link></li>
        <li><router-link to="/icon">Icon</router-link></li>
      </ul>
    </div>
    <div class="col-xs-9">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
  module.exports = {
    name: "DocsVueOpenLayers"
  };
</script>
<style>

</style>