
// to do a nicer docs example
require("../node_modules/flexboxgrid/css/flexboxgrid.css");

// let's see it working
const Vue = require("vue");
const VueRouter = require("vue-router");
const VueOpenLayers = require("../src/main");

Vue.use(VueRouter);
Vue.use(VueOpenLayers);

const routes = [
  {path: "/introduction", component: require("./examples/introduction.vue")},
  {path: "/roadmap", component: require("./examples/roadmap.vue")},
  {path: "/map", component: require("./examples/map.vue")},
  {path: "/mapcenter", component: require("./examples/map-center.vue")},
  {path: "/marker", component: require("./examples/marker.vue")},
  {path: "/markerposition", component: require("./examples/marker-pos.vue")},
  {path: "/icon", component: require("./examples/icon.vue")},
  {path: "/balloon", component: require("./examples/balloon.vue")},
  
  {path: "/", redirect: "/introduction"}
];

const router = new VueRouter({
  routes
});

const vm = new Vue({
  router,
  el:"#mountpoint",
  render: function (createElement) {
    return createElement(require("../docs/index.vue"));
  }
});

