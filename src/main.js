/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

const openlayers = require("openlayers");

const olMap = require("./ol-map.vue");
const olMarker = require("./ol-marker.vue");
const olBalloon = require("./ol-balloon.vue");

require("../node_modules/openlayers/css/ol.css");

module.exports = {
  openlayers,
  install(Vue, options) {
    // wiring project components
    Vue.component("ol-map", olMap);
    Vue.component("ol-marker", olMarker);
    Vue.component("ol-balloon", olBalloon);
  }
};
