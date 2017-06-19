<!-- ol-marker.vue -->
<template>
  <div>
    <slot></slot>
  </div>
</template>
<script>
const ol = require("openlayers");
module.exports = {
  name: "OLMarker",
  props: {
    coords: {
      type: Array,
      default: _ => [-38.5431, -3.71722]
    },
    markerradius:{
      type:[Number,String],
      default:12
    },
    markerData: Object,
    iconImageUrl: String
  },
  data() {
    return {
      feature: null,
      style: null,
      vectorSource: null,
      vectorLayer: null
    };
  },
  watch: {
    coords(val) {
      this.feature.setGeometry(new ol.geom.Point(ol.proj.fromLonLat(val)));
      this.$emit("newcoords", val);
    }
  },
  mounted() {
    // http://openlayers.org/en/latest/examples/icon-color.html?q=feature
    this.feature = new ol.Feature({
      geometry: new ol.geom.Point(ol.proj.fromLonLat(this.coords))
    });
    this.feature.vueComponent = this;
    if (this.iconImageUrl) {
      this.style = new ol.style.Style({
        image: new ol.style.Icon({
          src: this.iconImageUrl,
          anchor: [0.5, 1]
        })
      });
    } else {
      this.style = new ol.style.Style({
        image: new ol.style.Circle({
          radius: this.markerradius,
          snapToPixel: false,
          fill: new ol.style.Fill({ color: 'blue' }),
          stroke: new ol.style.Stroke({
            color: 'white', width: 2
          })
        })
      });
    }
    this.feature.setStyle(this.style);
    this.vectorSource = new ol.source.Vector({
      features: [this.feature]
    });
    this.vectorLayer = new ol.layer.Vector({
      source: this.vectorSource
    });
    this.$parent.addMarker(this.vectorLayer);//.olmap.addLayer(vectorLayer);
  }
};
</script>
<style>
/* TODO vale expor a complexidade das 'features' do openlayer aqui? */
</style>
