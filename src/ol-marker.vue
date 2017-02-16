<!-- ol-marker.vue -->
<template>
  <div></div>
</template>
<style>
  /* TODO vale expor a complexidade das 'features' do openlayer aqui? */
</style>
<script>
  const ol = require("openlayers");
  module.exports = {
    name: "OLMarker",
    props: {
      coords: {
        type: Array,
        default: () => [-38.5431, -3.71722]
      },
      markerData: Object,
      iconImageUrl: String
    },
    data() {
      return {
        feature: null,
        style: null,
        vectorSource: null,
        vectorLayer: null,
        newcoords: []
      };
    },
    watch: {
      coords(e) {
        this.setpos(e);
      }
    },
    mounted() {
      // http://openlayers.org/en/latest/examples/icon-color.html?q=feature
      this.feature = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.fromLonLat([-38.5431, -3.71722]))
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
            radius: 7,
            snapToPixel: false,
            fill: new ol.style.Fill({color: 'blue'}),
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
    },

    methods: {
      tocentermap(e) {
        const center = e.map.getView().getCenter();
        const lonlat = ol.proj.toLonLat(center);
        this.setpos(lonlat);
      },
      setpos(lonlat) {
        this.newcoords = lonlat;
        this.feature.setGeometry(new ol.geom.Point(ol.proj.fromLonLat(lonlat)));
        this.$emit("newcoords", this.newcoords);
      }
    }
  };
</script>
