
// to do a nicer docs example
require("../node_modules/flexboxgrid/css/flexboxgrid.css");

// let's see it working
const Vue = require("vue");
const VueRouter = require("vue-router");
const VueOpenLayers = require("../src/main");

Vue.use(VueRouter);
Vue.use(VueOpenLayers);

const routes = [
  {path: "/introduction", component: require("./introduction.vue")},
  {path: "/roadmap", component: require("./roadmap.vue")},
  {path: "/map", component: require("./examples/map.vue")},
  {path: "/mapcenter", component: require("./examples/map-center.vue")},
  {path: "/mapchange", component: require("./examples/map-change.vue")},
  {path: "/mapauto", component: require("./examples/map-autocenter.vue")},
  {path: "/marker", component: require("./examples/marker.vue")},
  {path: "/markerposition", component: require("./examples/marker-pos.vue")},
  {path: "/markerchange", component: require("./examples/marker-change.vue")},
  {path: "/markericon", component: require("./examples/marker-icon.vue")},
  {path: "/balloon", component: require("./examples/balloon.vue")},
  {path: "/balloonanchor", component: require("./examples/balloon-anchor.vue")},
  {path: "/balloonchangepos", component: require("./examples/balloon-pos-change.vue")},
  
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

