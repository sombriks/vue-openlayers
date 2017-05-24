<template>
  <div>
    <ol-map :center="lonlat" @moveend="move">
      <ol-marker :coords="lonlat"></ol-marker>
    </ol-map>
    {{lonlat}}
    <pre>
      &lt;template&gt;
        &lt;div&gt;
          &lt;ol-map :center="lonlat" @moveend="move"&gt;
            &lt;ol-marker :coords="lonlat"&gt;&lt;/ol-marker&gt;
          &lt;/ol-map&gt;
          { {lonlat}}
        &lt;/div&gt;
      &lt;/template&gt;
      &lt;script&gt;
      module.exports = {
        name: "MarkerPosExample",
        data() {
          return {
            lonlat: [-40.900025, -3.823124]
          };
        },
        methods: {
          move(evt, pos) {
            this.lonlat = pos;
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
  name: "MarkerPosExample",
  data() {
    return {
      lonlat: [-40.900025, -3.823124]
    };
  },
  methods: {
    move(evt, pos) {
      this.lonlat = pos;
    }
  }
};
</script>
