<template>
  <div>
    <ol-map :center="curr" @moveend="showcenter"> </ol-map>
    <button @click="move">Move it</button> {{curr}}
    <pre>
      &lt;template&gt;
        &lt;div&gt;
          &lt;ol-map :center="curr" @moveend="showcenter"&gt;&lt;/ol-map&gt;
          &lt;button @click="move"&gt;Move it&lt;/button&gt; { {curr}}
        &lt;/div&gt;
      &lt;/template&gt;
      &lt;script&gt;
      module.exports = {
        name: "MapChangeExample",
        data() {
          return {
            pos1: [-38.7466364, -3.6199158],
            pos2: [-38.5792122, -3.7052233],
            curr: [-38.5792122, -3.7052233]
          };
        },
        methods: {
          move() {
            if (this.curr[0] == this.pos1[0])
              this.curr = this.pos2;
            else
              this.curr = this.pos1;
          },
          showcenter(evt, pos) {
            this.curr = pos;
          }
        }
      }
      &lt;/script&gt;
    </pre>
  </div>
</template>
<script>
module.exports = {
  name: "MapChangeExample",
  data() {
    return {
      pos1: [-38.7466364, -3.6199158],
      pos2: [-38.5792122, -3.7052233],
      curr: [-38.5792122, -3.7052233]
    };
  },
  methods: {
    move() {
      if (this.curr[0] == this.pos1[0])
        this.curr = this.pos2;
      else
        this.curr = this.pos1;
    },
    showcenter(evt, pos) {
      this.curr = pos;
    }
  }
}
</script>
