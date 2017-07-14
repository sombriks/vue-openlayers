<template>
  <div>
    <ol-map :center="center"
            :zoom="zoom"
            @moveend="currentZoom"></ol-map>
    <label>Current zoom</label> <input type="range" min="1" max="20" v-model="zoom" /> {{zoom}}
    <pre>
      &lt;template&gt;
        &lt;div&gt;
          &lt;ol-map :center="center" 
                     :zoom="zoom" 
                     @moveend="currentZoom"&gt;&lt;/ol-map&gt;
          &lt;label&gt;Current zoom&lt;/label&gt; &lt;input type="range" min="1" max="20" v-model="zoom" /&gt; { {zoom}}
        &lt;/div&gt;
      &lt;/template&gt;
      &lt;script&gt;
      module.exports = {
        name: "MapZoomExample",
        data() {
          return {
            center: [-38.9313415, -4.2642149],
            zoom: 14
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
  name: "MapZoomChangeExample",
  data() {
    return {
      center: [-38.9313415, -4.2642149],
      zoom: 14
    }
  },
  methods: {
    currentZoom(evt, lonlat, zoom) {
      this.zoom = zoom;
    }
  }
};
</script>
