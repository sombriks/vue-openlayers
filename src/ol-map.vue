<!-- ol-map.vue -->
<template>
  <div>
    <slot></slot>
  </div>
</template>

<style scoped>
  #themap {
    width:100%;
    height:100%;
    margin:0px;
    padding: 0px;
  }
</style>

<script>
  const ol = require("openlayers");
  module.exports = {
    name: "OLMap",
    props: {
      autoCenter: Boolean,
      center: {
        type: Array,
        default: () => [-38.5431, -3.71722]
      }
    },
    mounted() {
      this.olmap = new ol.Map({
        target: this.$el,
        loadTilesWhileAnimating: true,
        layers: [
          new ol.layer.Tile({
            source: new ol.source.OSM()
          })
        ],
        view: new ol.View({
          center: ol.proj.fromLonLat(this.center),
          zoom: 13
        })
      });
      // http://openlayers.org/en/latest/apidoc/ol.Map.html#on
      this.olmap.on("moveend", evt => {
        // floating openlayer event to inside the vue's ViewModel
        this.updatecenter(evt);
        this.$emit("moveend", evt);
      });
      if (this.autoCenter)
        this.autocenter();
      this.$on("newmarker", (e) => {
        // como o pai só roda o mounted após todos os filhos, 
        // temos que guardar em buffer antes de fazer isso.
        while (this.markerstoadd.length) {
          let m = this.markerstoadd.pop();
          this.olmap.addLayer(m);
        }
      });

      this.olmap.on("click", (ev) => {
        const feature = this.olmap.forEachFeatureAtPixel(ev.pixel, (feature) => feature);
        if (feature)
          this.$emit("selfeature", feature);
      });

      if(this.markerstoadd.length)
        this.$emit("newmarker");
    },
    data() {
      return {
        olmap: null,
        markerstoadd: []
      };
    },
    methods: {
      addMarker(marker) {
        this.markerstoadd.push(marker);
        this.$emit("newmarker");
      },
      autocenter() {
        if ("geolocation" in navigator) {
          /* geolocation is available */
          navigator.geolocation.getCurrentPosition((pos) => {
            if (this.autoCenter) {
              const lon = pos.coords.longitude;
              const lat = pos.coords.latitude;
              this.setcenter([pos.coords.longitude, pos.coords.latitude]);
            }
          }, (err) => {
            console.log(err);
          });
        }
      },
      setcenter(latlng) {
        this.center[0] = latlng[0];
        this.center[1] = latlng[1];
        this.olmap.getView().setCenter(ol.proj.fromLonLat(this.center));
      },
      updatecenter(evt) {
        const center = evt.map.getView().getCenter();
        const lonlat = ol.proj.toLonLat(center);
        this.center[0] = lonlat[0];
        this.center[1] = lonlat[1];
      }
    }
  };
</script>