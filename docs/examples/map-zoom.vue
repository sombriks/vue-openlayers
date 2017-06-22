<template>
  <div>
    <ol-map :center="[-38.7466364,-3.6199158]"
            zoom="7"
            @moveend="currentZoom"></ol-map>
    <label>Current zoom</label> {{zoom}}
    <pre>
      &lt;template&gt;
        &lt;div&gt;
          &lt;ol-map :center="center" 
                     zoom="7" 
                     @moveend="currentZoom"&gt;&lt;/ol-map&gt;
          &lt;label&gt;Current zoom&lt;/label&gt; { {zoom}}
        &lt;/div&gt;
      &lt;/template&gt;
      &lt;script&gt;
      module.exports = {
        name: "MapZoomExample",
        data() {
          return {
            center: [-38.7466364, -3.6199158],
            zoom: ""
          }
        },
        methods: {
          currentZoom(evt, lonlat, zoom) {
            this.zoom = zoom;
          }
        }
      };
      &lt;/script&gt;
    </pre>
  </div>
</template>
<style></style>
<script>
module.exports = {
  name: "MapZoomExample",
  data() {
    return {
      center: [-38.7466364, -3.6199158],
      zoom: ""
    }
  },
  methods: {
    currentZoom(evt, lonlat, zoom) {
      this.zoom = zoom;
    }
  }
};
</script>
