<template>
  <div>
    <ol-map :center="balloonpos" @moveend="moveballoon">
      <ol-balloon :coords="balloonpos">
        <div class="greenballoon">
          <p>Hello</p>
        </div>
      </ol-balloon>
    </ol-map>
    <pre>
          &lt;template&gt;
            &lt;ol-map :center="balloonpos" @moveend="moveballoon"&gt;
              &lt;ol-balloon :coords="balloonpos"&gt;
                &lt;div class="greenballoon"&gt;
                  &lt;p&gt;Hello&lt;/p&gt;
                &lt;/div&gt;
              &lt;/ol-balloon&gt;
            &lt;/ol-map&gt;
          &lt;/template&gt;
          &lt;script&gt;
          module.exports = {
            name: "BalloonPositionChangeExample",
            data() {
              return {
                balloonpos: [-40.5092601, -2.8042712]
              };
            },
            methods: {
              moveballoon(evt, pos) {
                this.balloonpos = pos;
              }
            }
          };
          &lt;/script&gt;
          &lt;style&gt;
          .myballoon {
            background-color: #CAFEBA;
            padding: 1em 1em 1em 1em;
            border-radius: 1.5em;
          }
          &lt;/style&gt;
        </pre>
  </div>
</template>
<style>
.greenballoon {
  background-color: #CAFEBA;
  padding: 1em 1em 1em 1em;
  border-radius: 1.5em 2.5em 3.5em 4.5em;
}
</style>
<script>
module.exports = {
  name: "BalloonPositionChangeExample",
  data() {
    return {
      balloonpos: [-40.5092601, -2.8042712]
    };
  },
  methods: {
    moveballoon(evt, pos) {
      this.balloonpos = pos;
    }
  }
};
</script>