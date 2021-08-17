<template>
  <div>
    <h1>
      Vue Openlayers
    </h1>
    <p>
      Simple wrapper for openlayers map toolkit
    </p>
    <p class="red">
      Please see <a href="https://github.com/MelihAltintas/vue3-openlayers">This project</a>
      for a maintained version.
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
// require the openlayers css on your project.
require("../node_modules/openlayers/css/ol.css");

// require vue and any other shiny library
const Vue = require('vue');
// ...
// at some point require vue-openlayers 
const VueOpenLayers = require("vue-openlayers");
// ...
// then install the plugin
Vue.use(VueOpenLayers);
// ...
// now you can see the <a href="#/map">examples</a> on how to use it on .vue components
    </pre>
  </div>
</template>
<style scoped>
.red {
  color:red;
  font-weight: bolder;
}
</style>
<script>
module.exports = {
  name:"Introduction"
};
</script>
