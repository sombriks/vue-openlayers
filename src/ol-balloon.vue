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
      default: _ => [-38.5431, -3.71722]
    },
    balloonData: Object,
    anchor: {
      type: Array,
      default: _ => [0, 0]
    }
  },
  data() {
    return {
      feature: null
    };
  },
  watch: {
    coords(val) {
      this.feature.setGeometry(new ol.geom.Point(ol.proj.fromLonLat(val)));
      this.updatepos();
    }
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

    this.$on("moveend", _ => {
      // we need moveend to rearrange balloons
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
        let a = this.$parent.$el.offsetLeft;
        let b = this.$parent.$el.offsetTop;
        let x = (pixel[0] + a);
        x -= this.anchor[0];
        let y = (pixel[1] + b);
        y -= this.anchor[1];
        let w = this.$parent.$el.offsetWidth + a;
        let h = this.$parent.$el.offsetHeight + b;
        if (x - a < 0 || y - b < 0 || x > w || y > h) {
          this.$el.style.display = "none";
        } else {
          this.$el.style.display = "";
          this.$el.style.left = x + "px";
          this.$el.style.top = y + "px";
        }
      }
    }
  }
};
</script>
