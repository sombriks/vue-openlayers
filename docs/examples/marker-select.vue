<template>
  <div>
    <ol-map :center="center" @selfeature="getmarker" zoom="7">
      <ol-marker :coords="pos1"
                 :icon-image-url="img1"></ol-marker>
      <ol-marker :coords="pos2"
                 :icon-image-url="img2"></ol-marker>
      <ol-marker :coords="pos3"
                 :icon-image-url="img3"></ol-marker>
    </ol-map>
    <label>Current Position: </label> {{selpos}}
    <pre>
      &lt;template&gt;
        &lt;div&gt;
        &lt;ol-map :center="center" @selfeature="getmarker" zoom="7">
          &lt;ol-marker :coords="pos1"
                    :icon-image-url="img1">&lt;/ol-marker>
          &lt;ol-marker :coords="pos2"
                    :icon-image-url="img2">&lt;/ol-marker>
          &lt;ol-marker :coords="pos3"
                    :icon-image-url="img3">&lt;/ol-marker>
        &lt;/ol-map>
        &lt;label>Current Position: &lt;/label> { {selpos}}
        &lt;/div&gt;
      &lt;/template&gt;
      &lt;script&gt;
      module.exports = {
        name: "MarkerSelectionExample",
        data() {
          return {
            center: [-38.49036105926541, -4.20337354770561],
            img1: "./imgs/marker-red.png",
            img2: "./imgs/marker-green.png",
            img3: "./imgs/marker-blue.png",
            pos1: [-39.0249678539601, -4.971293155228395],
            pos2: [-38.526720707353626, -3.7341277429261197],
            pos3: [-37.766775791582134, -4.565608102361821],
            selpos: ""
          };
        },
        methods: {
          getmarker(marker) {
            this.selpos = marker.vueComponent.coords;
          },
          updatecenter(evt, pos) {
            this.center = pos;
          }
        }
      }
      &lt;/script&gt;
    </pre>
  </div>
</template>
<script>
module.exports = {
  name: "MarkerSelectionExample",
  data() {
    return {
      center: [-38.49036105926541, -4.20337354770561],
      img1: "./imgs/marker-red.png",
      img2: "./imgs/marker-green.png",
      img3: "./imgs/marker-blue.png",
      pos1: [-39.0249678539601, -4.971293155228395],
      pos2: [-38.526720707353626, -3.7341277429261197],
      pos3: [-37.766775791582134, -4.565608102361821],
      selpos: ""
    };
  },
  methods: {
    getmarker(marker) {
      this.selpos = marker.vueComponent.coords;
    },
    updatecenter(evt, pos) {
      this.center = pos;
    }
  }
}
</script>
