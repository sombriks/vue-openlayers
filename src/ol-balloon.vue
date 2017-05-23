<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
const ol = require("openlayers");
module.exports = {
  name: "OLBalloon",
  props: {
    coords: {
      type: Array,
      default: () => [-38.5431, -3.71722]
    },
    ballonData: Object,
  },
  data() {
    return {
      feature: null
    };
  },
  mounted() {
    // this.$el.parentElement.removeChild(this.$el)
    // this.$el.style.display="none";
    this.$el.style.position = "absolute";
    this.$el.style.zIndex = "3000";
    this.feature = new ol.Feature({
      geometry: new ol.geom.Point(ol.proj.fromLonLat(this.coords))
    });
    this.vectorSource = new ol.source.Vector({
      features: [this.feature]
    });
    this.vectorLayer = new ol.layer.Vector({
      source: this.vectorSource
    });
    this.$parent.addBalloon(this);

    this.$on("moveend", evt => {
      this.updatepos();
    });

    this.$on("pointerdrag", evt => {
      this.$el.style.display = "none";
    });
  },
  methods: {
    updatepos() {
      const map = this.$parent.olmap;
      const geometry = this.feature.getGeometry();
      const coordinate = geometry.getCoordinates();
      const pixel = map.getPixelFromCoordinate(coordinate);
      if (!pixel) {
        this.$el.style.display = "none";
      } else {
        this.$el.style.display = "";
        this.$el.style.left = (pixel[0] + this.$parent.$el.offsetLeft) + "px";
        this.$el.style.top = (pixel[1] + this.$parent.$el.offsetTop) + "px";
      }
      console.log(pixel)
      console.log(this.$parent.$el.offsetTop)
    }
  }
};
</script>

<style>

</style>
