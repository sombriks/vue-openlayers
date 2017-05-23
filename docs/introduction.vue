<template>
  <div>
    <h1>
      Vue Openlayers
    </h1>
    <p>
      Simple wrapper for openlayers map toolkit
    </p>
    <h2>Install</h2>
    <pre>npm install vue-openlayers --save</pre>
    <h2>Dependencies</h2>
    <ul>
      <li>Vue 2.1+</li>
      <li>Openlayers 4.0+</li>
    </ul>
    <h2>Usage</h2>
    <pre>
// require the openlayers css
require("../node_modules/openlayers/css/ol.css");

// require vue and any other shiny library
const Vue = require('vue');
// ...
// at some point require vue-openlayers 
const VueOpenLayers = require("vue-openlayers");
// ...
// then install the plugin
Vue.use(VueOpenLayers);
    </pre>
  </div>
</template>
<style></style>
<script></script>
