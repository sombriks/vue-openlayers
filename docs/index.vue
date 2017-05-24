<template>
  <div class="row">
    <div class="col-xs-3">
      <h5>Overview</h5>
      <ul>
        <li><router-link to="/introduction">Introduction</router-link></li>
        <li><router-link to="/roadmap">Roadmap</router-link></li>
      </ul>
      <h5>Examples</h5>
      <ul>
        <li><router-link to="/map">Map</router-link></li>
        <li><router-link to="/mapcenter">Map Center</router-link></li>
        <li><router-link to="/mapchange">Map Position Change</router-link></li>
        <li><router-link to="/mapauto">Map Autocenter</router-link></li>
        <li><router-link to="/marker">Marker</router-link></li>
        <li><router-link to="/markerposition">Marker Position</router-link></li>
        <li><router-link to="/icon">Marker Icon</router-link></li>
        <li><router-link to="/balloon">Balloon</router-link></li>
        <li><router-link to="/balloonanchor">Balloon Anchor</router-link></li>
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