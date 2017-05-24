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
    }
  },
  data() {
    return {
      olmap: null,
      markerstoadd: [],
      balloonstoadd: []
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
        zoom: 13
      })
    });
    // http://openlayers.org/en/latest/apidoc/ol.Map.html#on
    this.olmap.on("moveend", evt => {
      // floating openlayer event to inside the vue's ViewModel
      const center = evt.map.getView().getCenter();
      const lonlat = ol.proj.toLonLat(center);
      this.$emit("moveend", evt, lonlat);
      // notify children, some of them will need it
      this.$children.map(e => e.$emit("moveend", evt, lonlat));
      // this.updatecenter(evt); // does not work
      // https://vuejs.org/v2/guide/components.html#Composing-Components
      // console.log(this.$children)
    });

    this.olmap.on("pointerdrag", evt => {
      this.$emit("pointerdrag", evt);
      this.$children.map(e => e.$emit("pointerdrag"));
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

    this.$on("newballoon", (e) => {
      // como o pai só roda o mounted após todos os filhos, 
      // temos que guardar em buffer antes de fazer isso.
      while (this.balloonstoadd.length) {
        let m = this.balloonstoadd.pop();
        this.olmap.addLayer(m.vectorLayer);
        m.updatepos();
      }
    });

    this.olmap.on("click", ev => {
      const feature = this.olmap.forEachFeatureAtPixel(ev.pixel, feature => feature);
      if (feature)
        this.$emit("selfeature", feature);
    });

    if (this.markerstoadd.length)
      this.$emit("newmarker");

    if (this.balloonstoadd.length)
      this.$emit("newballoon");
  },
  watch: {
    center(val) {
      this.olmap.getView().setCenter(ol.proj.fromLonLat(val));
      // this.$emit("moveend", evt, val);
    }
  },
  methods: {
    addMarker(marker) {
      this.markerstoadd.push(marker);
      this.$emit("newmarker");
    },
    addBalloon(balloon) {
      this.balloonstoadd.push(balloon);
      this.$emit("newballoon");
    },
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
    },
    // updatecenter(evt) {
    //   const center = evt.map.getView().getCenter();
    //   const lonlat = ol.proj.toLonLat(center);
    //   this.center[0] = lonlat[0];
    //   this.center[1] = lonlat[1];
    // }
  }
};
</script>

<style>

</style>