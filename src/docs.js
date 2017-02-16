// let's see it working
const Vue = require("vue");
const VueOpenLayers = require("./main");

Vue.use(VueOpenLayers);

const vm = new Vue({
  el:"#mountpoint",
  render: function (createElement) {
    return createElement(require("../docs/index.vue"));
  }
});

