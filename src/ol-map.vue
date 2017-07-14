<!-- ol-map.vue -->
<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
const ol = require("openlayers");
module.exports = {
  name: "OLMap",
  props: {
    autoCenter: Boolean,
    center: {
      type: Array,
      default: _ => [-38.5431, -3.71722]
    },
    zoom: {
      type: [Number, String],
      default: 13
    }
  },
  data() {
    return {
      olmap: null
    };
  },
  mounted() {
    this.$el.style.overflow = "hidden";
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
        zoom: this.zoom
      })
    });

    // // bind raw events
    // const evts = ["dblclick", "movestart", "pointermove", "singleclick", "postrender"];

    // evts.map(evt => {
    //   this.olmap.on(evt, ev => {
    //   // console.log(ev.xy)
    //     this.$emit(evt, ev);
    //   });
    // });

    // http://openlayers.org/en/latest/apidoc/ol.Map.html#on
    this.olmap.on("moveend", ev => {
      // floating openlayer event to inside the vue's ViewModel
      const center = ev.map.getView().getCenter();
      const zoom = ev.map.getView().getZoom();
      const lonlat = ol.proj.toLonLat(center);
      this.$emit("moveend", ev, lonlat, zoom);
    });

    this.olmap.on("pointerdrag", ev => {
      const feature = this.olmap.forEachFeatureAtPixel(ev.pixel, feature => feature);
      const center = ev.map.getView().getCenter();
      const zoom = ev.map.getView().getZoom();
      const lonlat = ol.proj.toLonLat(center);
      this.$emit("pointerdrag", ev, lonlat, zoom, feature);
    });

    this.olmap.on("click", ev => {
      // console.log(ev.pixel)
      const feature = this.olmap.forEachFeatureAtPixel(ev.pixel, feature => feature);
      if (feature)
        this.$emit("selfeature", feature);
      this.$emit("click", ev, feature);

    });

    if (this.autoCenter)
      this.autocenter();

    this.$on("addmarker", m => this.olmap.addLayer(m.vectorLayer));

    this.$on("removemarker", m => this.olmap.removeLayer(m.vectorLayer));

    this.$on("addballoon", b => this.olmap.addLayer(b.vectorLayer));

    this.$on("removeballoon", b => this.olmap.removeLayer(b.vectorLayer));
  },
  watch: {
    center(val) {
      this.olmap.getView().setCenter(ol.proj.fromLonLat(val));
    },
    autoCenter(val) {
      if (val)
        this.autocenter();
    },
    zoom(val) {
      console.log(val)
      this.olmap.getView().setZoom(val);
    }
  },
  methods: {
    autocenter() {
      if ("geolocation" in navigator) {
        /* geolocation is available */
        navigator.geolocation.getCurrentPosition(pos => {
          if (this.autoCenter) {
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
    }
  }
};
</script>

<style>

</style>