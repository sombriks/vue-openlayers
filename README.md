# vue-openlayers

- humble wrapper for the powerful openlayers map api
- demo/docs [here](https://sombriks.github.io/vue-openlayers)

## Usage

```javascript

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

// done! now on your .vue documents you have the right to use <ol-map></ol-map> and <ol-marker></olmarker>
```
