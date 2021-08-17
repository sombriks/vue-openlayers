# vue-openlayers

**this project doesn't receive maintenance for a while**, 
if you need new features see [vue3-openlayers](https://github.com/MelihAltintas/vue3-openlayers) project.

- humble wrapper for the powerful openlayers map api
- demo/docs [here](https://sombriks.github.io/vue-openlayers)

## maintained version

For a better maintained and modern version, please see [vue3-openlayers](https://github.com/MelihAltintas/vue3-openlayers) project.

This project was a pleasure to create but sadly i can't maintain that. 
Hopefully [Melih Altıntaş](https://github.com/MelihAltintas) did a great job creating a modern wapper vor vue. 

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
