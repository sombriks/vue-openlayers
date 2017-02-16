# vue-openlayers
- humble wrapper for the powerful openlayers map api
- demo/docs [here](https://sombriks.github.io/vue-openlayers)

## Usage:

```javascript

// require vue and any other shiny library
const Vue = require('vue');
// ...
// at some point require vue-openlayers TODO: simplify to require("vue-openlayers") 
const VueOpenLayers = require("vue-openlayers/src/main");
// ...
// then install the plugin
Vue.use(VueOpenLayers);

// done! now on your .vue documents you have the right to use <ol-map></ol-map> and <ol-marker></olmarker>
```
