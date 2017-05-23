// let's see it working
const Vue = require("vue");
const VueRouter = require("vue-router");
const VueOpenLayers = require("../src/main");

// to do a nicer docs example
require("../node_modules/flexboxgrid/css/flexboxgrid.css");

Vue.use(VueRouter);
Vue.use(VueOpenLayers);

const routes = [
  {path: "/introduction", component: require("./introduction.vue")},
  {path: "/map", component: require("./map.vue")},
  {path: "/mapcenter", component: require("./map-center.vue")},
  {path: "/marker", component: require("./marker.vue")},
  {path: "/markerposition", component: require("./marker-pos.vue")},
  {path: "/icon", component: require("./icon.vue")},
  
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

