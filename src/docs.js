// let's see it working
const Vue = require("vue");
const Vol = require("./main");

Vue.use(new Vol());

const vm = new Vue({
  el:"#mountpoint",
  render: function (createElement) {
    return createElement(require("../docs/index.vue"));
  }
});

