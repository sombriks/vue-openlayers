(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

// to do a nicer docs example
require("../node_modules/flexboxgrid/css/flexboxgrid.css");
require("../node_modules/openlayers/css/ol.css");

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


},{"../docs/index.vue":13,"../node_modules/flexboxgrid/css/flexboxgrid.css":17,"../node_modules/openlayers/css/ol.css":18,"../src/main":24,"./examples/balloon-anchor.vue":2,"./examples/balloon-pos-change.vue":3,"./examples/balloon.vue":4,"./examples/map-autocenter.vue":5,"./examples/map-center.vue":6,"./examples/map-change.vue":7,"./examples/map.vue":8,"./examples/marker-change.vue":9,"./examples/marker-icon.vue":10,"./examples/marker-pos.vue":11,"./examples/marker.vue":12,"./introduction.vue":14,"./roadmap.vue":15,"vue":22,"vue-router":21}],2:[function(require,module,exports){
var __vueify_style_dispose__ = require("vueify/lib/insert-css").insert(".blackballoon{background-color:#000;color:#fff;padding:1em;width:100px;border-radius:1.5em}")
;(function(){
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

module.exports = {
  name:"BalloonAnchorExample"
};

})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('ol-map',[_c('ol-balloon',{attrs:{"anchor":[60,110]}},[_c('div',{staticClass:"blackballoon"},[_c('small',[_vm._v("If all you have is a hammer, everything looks like a fish. Oh wait.")])])])],1),_vm._v(" "),_c('pre',[_vm._v("\n    <template>\n      <ol-map>\n        <ol-balloon :anchor=\"[60,110]\">\n          <div class=\"blackballoon\">\n            <p>If all you have is a hammer, everything looks like a fish. Oh wait.</p>\n          </div>\n        </ol-balloon>\n      </ol-map>\n    </template>\n    <style>\n    .blackballoon {\n      background-color: black;\n      color: white;\n      padding: 1em 1em 1em 1em;\n      width:100px;\n      border-radius: 1.5em;\n    }\n    </style>\n  ")])],1)}
__vue__options__.staticRenderFns = []

},{"vueify/lib/insert-css":23}],3:[function(require,module,exports){
var __vueify_style_dispose__ = require("vueify/lib/insert-css").insert(".greenballoon{background-color:#cafeba;padding:1em;border-radius:1.5em 2.5em 3.5em 4.5em}")
;(function(){
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

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

})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('ol-map',{attrs:{"center":_vm.balloonpos},on:{"moveend":_vm.moveballoon}},[_c('ol-balloon',{attrs:{"coords":_vm.balloonpos}},[_c('div',{staticClass:"greenballoon"},[_c('p',[_vm._v("Hello")])])])],1),_vm._v(" "),_c('pre',[_vm._v("\n        <template>\n          <ol-map :center=\"balloonpos\" @moveend=\"moveballoon\">\n            <ol-balloon :coords=\"balloonpos\">\n              <div class=\"greenballoon\">\n                <p>Hello</p>\n              </div>\n            </ol-balloon>\n          </ol-map>\n        </template>\n        <script>\n        module.exports = {\n          name: \"BalloonPositionChangeExample\",\n          data() {\n            return {\n              balloonpos: [-40.5092601, -2.8042712]\n            };\n          },\n          methods: {\n            moveballoon(evt, pos) {\n              this.balloonpos = pos;\n            }\n          }\n        };\n        </script>\n        <style>\n        .myballoon {\n          background-color: #CAFEBA;\n          padding: 1em 1em 1em 1em;\n          border-radius: 1.5em;\n        }\n        </style>\n      ")])],1)}
__vue__options__.staticRenderFns = []

},{"vueify/lib/insert-css":23}],4:[function(require,module,exports){
var __vueify_style_dispose__ = require("vueify/lib/insert-css").insert(".myballoon{background-color:#eee;padding:1em;border-radius:1.5em}")
;(function(){
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

module.exports = {
  name:"BalloonExample"
};

})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('ol-map',[_c('ol-balloon',[_c('div',{staticClass:"myballoon"},[_c('h1',[_vm._v("You Are Here")]),_vm._v(" "),_c('p',[_vm._v("Maybe not")])])]),_vm._v(" "),_c('ol-balloon',{attrs:{"coords":[-38.57921, -3.70522]}},[_c('div',{staticClass:"myballoon"},[_c('p',[_vm._v("Maybe you're there")])])])],1),_vm._v(" "),_c('pre',[_vm._v("\n      <template>\n        <ol-map>\n          <ol-balloon>\n            <div class=\"myballoon\">\n              <h1>You Are Here</h1>\n              <p>Maybe not</p>\n            </div>\n          </ol-balloon>\n          <ol-balloon :coords=\"[-38.57921, -3.70522]\">\n            <div class=\"myballoon\">\n              <h1>You Are Here</h1>\n              <p>Maybe not</p>\n            </div>\n          </ol-balloon>\n        </ol-map>\n      </template>\n      <style>\n      .myballoon {\n        background-color: #EEEEEE;\n        padding: 1em 1em 1em 1em;\n        border-radius: 1.5em;\n      }\n      </style>\n    ")])],1)}
__vue__options__.staticRenderFns = []

},{"vueify/lib/insert-css":23}],5:[function(require,module,exports){
;(function(){
//
//
//
//
//
//
//
//
//
//
//

module.exports = {
  name:"MapExample"
};

})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('ol-map',{attrs:{"auto-center":""}}),_vm._v(" "),_c('pre',[_vm._v("\n    <template>\n      <ol-map auto-center></ol-map>\n    </template>\n  ")])],1)}
__vue__options__.staticRenderFns = []

},{}],6:[function(require,module,exports){
;(function(){
//
//
//
//
//
//
//
//
//
//
//

module.exports = {
  name:"MapCenterExample"
};

})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('ol-map',{attrs:{"center":[-38.7466364,-3.6199158]}}),_vm._v(" "),_c('pre',[_vm._v("\n    <template>\n      <ol-map :center=\"[-38.7466364,-3.6199158]\"></ol-map>\n    </template>\n  ")])],1)}
__vue__options__.staticRenderFns = []

},{}],7:[function(require,module,exports){
;(function(){
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

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

})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('ol-map',{attrs:{"center":_vm.curr},on:{"moveend":_vm.showcenter}}),_vm._v(" "),_c('button',{on:{"click":_vm.move}},[_vm._v("Move it")]),_vm._v(" "+_vm._s(_vm.curr)+"\n  "),_c('pre',[_vm._v("\n    <template>\n      <div>\n        <ol-map :center=\"curr\" @moveend=\"showcenter\"></ol-map>\n        <button @click.native=\"move\">Move it</button> { {curr}}\n      </div>\n    </template>\n    <script>\n    module.exports = {\n      name: \"MapChangeExample\",\n      data() {\n        return {\n          pos1: [-38.7466364, -3.6199158],\n          pos2: [-38.5792122, -3.7052233],\n          curr: [-38.5792122, -3.7052233]\n        };\n      },\n      methods: {\n        move() {\n          if (this.curr[0] == this.pos1[0])\n            this.curr = this.pos2;\n          else\n            this.curr = this.pos1;\n        },\n        showcenter(evt, pos) {\n          this.curr = pos;\n        }\n      }\n    }\n    </script>\n  ")])],1)}
__vue__options__.staticRenderFns = []

},{}],8:[function(require,module,exports){
;(function(){
//
//
//
//
//
//
//
//
//
//
//

module.exports = {
  name:"MapExample"
};

})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('ol-map'),_vm._v(" "),_c('pre',[_vm._v("\n    <template>\n      <ol-map></ol-map>\n    </template>\n  ")])],1)}
__vue__options__.staticRenderFns = []

},{}],9:[function(require,module,exports){
;(function(){
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

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

})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('ol-map',{attrs:{"center":_vm.lonlat},on:{"moveend":_vm.move}},[_c('ol-marker',{attrs:{"coords":_vm.lonlat}})],1),_vm._v("\n  "+_vm._s(_vm.lonlat)+"\n  "),_c('pre',[_vm._v("\n    <template>\n      <div>\n        <ol-map :center=\"lonlat\" @moveend=\"move\">\n          <ol-marker :coords=\"lonlat\"></ol-marker>\n        </ol-map>\n        { {lonlat}}\n      </div>\n    </template>\n    <script>\n    module.exports = {\n      name: \"MarkerPosExample\",\n      data() {\n        return {\n          lonlat: [-40.900025, -3.823124]\n        };\n      },\n      methods: {\n        move(evt, pos) {\n          this.lonlat = pos;\n        }\n      }\n    };\n    </script>\n  ")])],1)}
__vue__options__.staticRenderFns = []

},{}],10:[function(require,module,exports){
;(function(){
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

module.exports = {
  name:"IconExample"
};

})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('ol-map',[_c('ol-marker',{attrs:{"icon-image-url":"./imgs/marker.png"}})],1),_vm._v(" "),_c('pre',[_vm._v("\n    <template>\n      <ol-map>\n        <ol-marker icon-image-url=\"./imgs/marker.png\"></ol-marker>\n      </ol-map>\n    </template>\n  ")])],1)}
__vue__options__.staticRenderFns = []

},{}],11:[function(require,module,exports){
;(function(){
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

module.exports = {
  name:"MarkerPosExample"
};

})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('ol-map',{attrs:{"center":[-38.7307940,-3.8897860]}},[_c('ol-marker',{attrs:{"coords":[-38.7676903,-3.8884858]}})],1),_vm._v(" "),_c('pre',[_vm._v("\n    <template>\n      <ol-map :center=\"[-38.7307940,-3.8897860]\">\n        <ol-marker :coords=\"[-38.7776903,-3.9584858]\"></ol-marker>\n      </ol-map>\n    </template>\n  ")])],1)}
__vue__options__.staticRenderFns = []

},{}],12:[function(require,module,exports){
;(function(){
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

module.exports = {
  name:"MarkerExample"
};

})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('ol-map',[_c('ol-marker')],1),_vm._v(" "),_c('pre',[_vm._v("\n    <template>\n      <ol-map>\n        <ol-marker></ol-marker>\n      </ol-map>\n    </template>\n  ")])],1)}
__vue__options__.staticRenderFns = []

},{}],13:[function(require,module,exports){
;(function(){
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

module.exports = {
  name: "DocsVueOpenLayers"
};

})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"row"},[_c('div',{staticClass:"col-xs-3"},[_c('h5',[_vm._v("Overview")]),_vm._v(" "),_c('ul',[_c('li',[_c('router-link',{attrs:{"to":"/introduction"}},[_vm._v("Introduction")])],1),_vm._v(" "),_c('li',[_c('router-link',{attrs:{"to":"/roadmap"}},[_vm._v("Roadmap")])],1)]),_vm._v(" "),_c('h5',[_vm._v("Examples")]),_vm._v(" "),_c('ul',[_c('li',[_c('router-link',{attrs:{"to":"/map"}},[_vm._v("Map")])],1),_vm._v(" "),_c('li',[_c('router-link',{attrs:{"to":"/mapcenter"}},[_vm._v("Map Center")])],1),_vm._v(" "),_c('li',[_c('router-link',{attrs:{"to":"/mapchange"}},[_vm._v("Map Position Change")])],1),_vm._v(" "),_c('li',[_c('router-link',{attrs:{"to":"/mapauto"}},[_vm._v("Map Autocenter")])],1),_vm._v(" "),_c('li',[_c('router-link',{attrs:{"to":"/marker"}},[_vm._v("Marker")])],1),_vm._v(" "),_c('li',[_c('router-link',{attrs:{"to":"/markerposition"}},[_vm._v("Marker Position")])],1),_vm._v(" "),_c('li',[_c('router-link',{attrs:{"to":"/markerchange"}},[_vm._v("Marker Change Position")])],1),_vm._v(" "),_c('li',[_c('router-link',{attrs:{"to":"/markericon"}},[_vm._v("Marker Icon")])],1),_vm._v(" "),_c('li',[_c('router-link',{attrs:{"to":"/balloon"}},[_vm._v("Balloon")])],1),_vm._v(" "),_c('li',[_c('router-link',{attrs:{"to":"/balloonanchor"}},[_vm._v("Balloon Anchor")])],1),_vm._v(" "),_c('li',[_c('router-link',{attrs:{"to":"/balloonchangepos"}},[_vm._v("Balloon Position Change")])],1)])]),_vm._v(" "),_c('div',{staticClass:"col-xs-9"},[_c('router-view')],1)])}
__vue__options__.staticRenderFns = []

},{}],14:[function(require,module,exports){
;(function(){
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

module.exports = {
  name:"Introduction"
};

})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
__vue__options__.staticRenderFns = [function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('h1',[_vm._v("\n      Vue Openlayers\n    ")]),_vm._v(" "),_c('p',[_vm._v("\n      Simple wrapper for openlayers map toolkit\n    ")]),_vm._v(" "),_c('h2',[_vm._v("Install")]),_vm._v(" "),_c('pre',[_vm._v("npm install vue-openlayers --save")]),_vm._v(" "),_c('h2',[_vm._v("Dependencies")]),_vm._v(" "),_c('ul',[_c('li',[_vm._v("Vue 2.1+")]),_vm._v(" "),_c('li',[_vm._v("Openlayers 4.0+")])]),_vm._v(" "),_c('h2',[_vm._v("Usage")]),_vm._v(" "),_c('pre',[_vm._v("\n// require the openlayers css\nrequire(\"../node_modules/openlayers/css/ol.css\");\n\n// require vue and any other shiny library\nconst Vue = require('vue');\n// ...\n// at some point require vue-openlayers \nconst VueOpenLayers = require(\"vue-openlayers\");\n// ...\n// then install the plugin\nVue.use(VueOpenLayers);\n// ...\n// now you can see the "),_c('a',{attrs:{"href":"#/map"}},[_vm._v("examples")]),_vm._v(" on how to use it on .vue components\n    ")])])}]

},{}],15:[function(require,module,exports){
;(function(){
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

module.exports = {
  name:"Roadmap"
};

})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
__vue__options__.staticRenderFns = [function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('h1',[_vm._v("\n    Roadmap\n  ")]),_vm._v(" "),_c('p',[_vm._v("\n    This project aims a few goals and we'll log them there. Eventually the goals will appear as "),_c('a',{attrs:{"href":"https://github.com/sombriks/vue-openlayers/issues","target":"_blank"}},[_vm._v("github issues")]),_vm._v(" as well.\n  ")]),_vm._v(" "),_c('h2',[_vm._v("V0.9.0 (not released yet)")]),_vm._v(" "),_c('ul',[_c('li',[_vm._v("Add search widget/datasource/provider")]),_vm._v(" "),_c('li',[_vm._v("Add results widget/datasource/provider")])]),_vm._v(" "),_c('h2',[_vm._v("V0.8.0 (not released yet)")]),_vm._v(" "),_c('ul',[_c('li',[_vm._v("Enable or disable map features")])]),_vm._v(" "),_c('h2',[_vm._v("V0.7.0 (not released yet)")]),_vm._v(" "),_c('ul',[_c('li',[_vm._v("Add polygons support")])]),_vm._v(" "),_c('h2',[_vm._v("V0.6.0 (not released yet)")]),_vm._v(" "),_c('ul',[_c('li',[_vm._v("Add lines support")])]),_vm._v(" "),_c('h2',[_vm._v("V0.5.0 (not released yet)")]),_vm._v(" "),_c('ul',[_c('li',[_vm._v("Add es6 variants for the components")]),_vm._v(" "),_c('li',[_vm._v("Smaller code cleanups")])]),_vm._v(" "),_c('h2',[_vm._v("V0.4.3")]),_vm._v(" "),_c('ul',[_c('li',[_vm._v("made marker bigger")])]),_vm._v(" "),_c('h2',[_vm._v("V0.4.2")]),_vm._v(" "),_c('ul',[_c('li',[_vm._v("fixed small problem on balloon anchor behavior")]),_vm._v(" "),_c('li',[_vm._v("removed one explicit openlayer css dependency, since it must be on target project")])]),_vm._v(" "),_c('h2',[_vm._v("V0.4.1")]),_vm._v(" "),_c('ul',[_c('li',[_vm._v("Changing versioning to better conform with "),_c('a',{attrs:{"href":"http://semver.org/"}},[_vm._v("semantical versioning")])]),_vm._v(" "),_c('li',[_vm._v("Added more examples")])]),_vm._v(" "),_c('h2',[_vm._v("V0.0.4")]),_vm._v(" "),_c('ul',[_c('li',[_vm._v("Basic support for balloon tooltips for markers")]),_vm._v(" "),_c('li',[_vm._v("Smaller code cleanups")])]),_vm._v(" "),_c('h2',[_vm._v("V0.0.3 (first useful version)")]),_vm._v(" "),_c('ul',[_c('li',[_vm._v("Basic support for map and marker")]),_vm._v(" "),_c('li',[_vm._v("Suited for commonsjs (node) style export/require")])])])}]

},{}],16:[function(require,module,exports){
'use strict';
// For more information about browser field, check out the browser field at https://github.com/substack/browserify-handbook#browser-field.

var styleElementsInsertedAtTop = [];

var insertStyleElement = function(styleElement, options) {
    var head = document.head || document.getElementsByTagName('head')[0];
    var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];

    options = options || {};
    options.insertAt = options.insertAt || 'bottom';

    if (options.insertAt === 'top') {
        if (!lastStyleElementInsertedAtTop) {
            head.insertBefore(styleElement, head.firstChild);
        } else if (lastStyleElementInsertedAtTop.nextSibling) {
            head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
        } else {
            head.appendChild(styleElement);
        }
        styleElementsInsertedAtTop.push(styleElement);
    } else if (options.insertAt === 'bottom') {
        head.appendChild(styleElement);
    } else {
        throw new Error('Invalid value for parameter \'insertAt\'. Must be \'top\' or \'bottom\'.');
    }
};

module.exports = {
    // Create a <link> tag with optional data attributes
    createLink: function(href, attributes) {
        var head = document.head || document.getElementsByTagName('head')[0];
        var link = document.createElement('link');

        link.href = href;
        link.rel = 'stylesheet';

        for (var key in attributes) {
            if ( ! attributes.hasOwnProperty(key)) {
                continue;
            }
            var value = attributes[key];
            link.setAttribute('data-' + key, value);
        }

        head.appendChild(link);
    },
    // Create a <style> tag with optional data attributes
    createStyle: function(cssText, attributes, extraOptions) {
        extraOptions = extraOptions || {};

        var style = document.createElement('style');
        style.type = 'text/css';

        for (var key in attributes) {
            if ( ! attributes.hasOwnProperty(key)) {
                continue;
            }
            var value = attributes[key];
            style.setAttribute('data-' + key, value);
        }

        if (style.sheet) { // for jsdom and IE9+
            style.innerHTML = cssText;
            style.sheet.cssText = cssText;
            insertStyleElement(style, { insertAt: extraOptions.insertAt });
        } else if (style.styleSheet) { // for IE8 and below
            insertStyleElement(style, { insertAt: extraOptions.insertAt });
            style.styleSheet.cssText = cssText;
        } else { // for Chrome, Firefox, and Safari
            style.appendChild(document.createTextNode(cssText));
            insertStyleElement(style, { insertAt: extraOptions.insertAt });
        }
    }
};

},{}],17:[function(require,module,exports){
var css = "/* Uncomment and set these variables to customize the grid. */\n.container-fluid {\n  margin-right: auto;\n  margin-left: auto;\n  padding-right: 2rem;\n  padding-left: 2rem;\n}\n.row {\n  box-sizing: border-box;\n  display: -ms-flexbox;\n  display: -webkit-box;\n  display: flex;\n  -ms-flex: 0 1 auto;\n  -webkit-box-flex: 0;\n  flex: 0 1 auto;\n  -ms-flex-direction: row;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  flex-direction: row;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  margin-right: -1rem;\n  margin-left: -1rem;\n}\n.row.reverse {\n  -ms-flex-direction: row-reverse;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: reverse;\n  flex-direction: row-reverse;\n}\n.col.reverse {\n  -ms-flex-direction: column-reverse;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: reverse;\n  flex-direction: column-reverse;\n}\n.col-xs,\n.col-xs-1,\n.col-xs-2,\n.col-xs-3,\n.col-xs-4,\n.col-xs-5,\n.col-xs-6,\n.col-xs-7,\n.col-xs-8,\n.col-xs-9,\n.col-xs-10,\n.col-xs-11,\n.col-xs-12 {\n  box-sizing: border-box;\n  -ms-flex: 0 0 auto;\n  -webkit-box-flex: 0;\n  flex: 0 0 auto;\n  padding-right: 1rem;\n  padding-left: 1rem;\n}\n.col-xs {\n  -webkit-flex-grow: 1;\n  -ms-flex-positive: 1;\n  -webkit-box-flex: 1;\n  flex-grow: 1;\n  -ms-flex-preferred-size: 0;\n  flex-basis: 0;\n  max-width: 100%;\n}\n.col-xs-1 {\n  -ms-flex-preferred-size: 8.333%;\n  flex-basis: 8.333%;\n  max-width: 8.333%;\n}\n.col-xs-2 {\n  -ms-flex-preferred-size: 16.667%;\n  flex-basis: 16.667%;\n  max-width: 16.667%;\n}\n.col-xs-3 {\n  -ms-flex-preferred-size: 25%;\n  flex-basis: 25%;\n  max-width: 25%;\n}\n.col-xs-4 {\n  -ms-flex-preferred-size: 33.333%;\n  flex-basis: 33.333%;\n  max-width: 33.333%;\n}\n.col-xs-5 {\n  -ms-flex-preferred-size: 41.667%;\n  flex-basis: 41.667%;\n  max-width: 41.667%;\n}\n.col-xs-6 {\n  -ms-flex-preferred-size: 50%;\n  flex-basis: 50%;\n  max-width: 50%;\n}\n.col-xs-7 {\n  -ms-flex-preferred-size: 58.333%;\n  flex-basis: 58.333%;\n  max-width: 58.333%;\n}\n.col-xs-8 {\n  -ms-flex-preferred-size: 66.667%;\n  flex-basis: 66.667%;\n  max-width: 66.667%;\n}\n.col-xs-9 {\n  -ms-flex-preferred-size: 75%;\n  flex-basis: 75%;\n  max-width: 75%;\n}\n.col-xs-10 {\n  -ms-flex-preferred-size: 83.333%;\n  flex-basis: 83.333%;\n  max-width: 83.333%;\n}\n.col-xs-11 {\n  -ms-flex-preferred-size: 91.667%;\n  flex-basis: 91.667%;\n  max-width: 91.667%;\n}\n.col-xs-12 {\n  -ms-flex-preferred-size: 100%;\n  flex-basis: 100%;\n  max-width: 100%;\n}\n.col-xs-offset-1 {\n  margin-left: 8.333%;\n}\n.col-xs-offset-2 {\n  margin-left: 16.667%;\n}\n.col-xs-offset-3 {\n  margin-left: 25%;\n}\n.col-xs-offset-4 {\n  margin-left: 33.333%;\n}\n.col-xs-offset-5 {\n  margin-left: 41.667%;\n}\n.col-xs-offset-6 {\n  margin-left: 50%;\n}\n.col-xs-offset-7 {\n  margin-left: 58.333%;\n}\n.col-xs-offset-8 {\n  margin-left: 66.667%;\n}\n.col-xs-offset-9 {\n  margin-left: 75%;\n}\n.col-xs-offset-10 {\n  margin-left: 83.333%;\n}\n.col-xs-offset-11 {\n  margin-left: 91.667%;\n}\n.start-xs {\n  -ms-flex-pack: start;\n  -webkit-box-pack: start;\n  justify-content: flex-start;\n  text-align: start;\n}\n.center-xs {\n  -ms-flex-pack: center;\n  -webkit-box-pack: center;\n  justify-content: center;\n  text-align: center;\n}\n.end-xs {\n  -ms-flex-pack: end;\n  -webkit-box-pack: end;\n  justify-content: flex-end;\n  text-align: end;\n}\n.top-xs {\n  -ms-flex-align: start;\n  -webkit-box-align: start;\n  align-items: flex-start;\n}\n.middle-xs {\n  -ms-flex-align: center;\n  -webkit-box-align: center;\n  align-items: center;\n}\n.bottom-xs {\n  -ms-flex-align: end;\n  -webkit-box-align: end;\n  align-items: flex-end;\n}\n.around-xs {\n  -ms-flex-pack: distribute;\n  justify-content: space-around;\n}\n.between-xs {\n  -ms-flex-pack: justify;\n  -webkit-box-pack: justify;\n  justify-content: space-between;\n}\n.first-xs {\n  -ms-flex-order: -1;\n  -webkit-box-ordinal-group: 0;\n  order: -1;\n}\n.last-xs {\n  -ms-flex-order: 1;\n  -webkit-box-ordinal-group: 2;\n  order: 1;\n}\n@media only screen and (min-width: 48em) {\n  .container {\n    width: 46rem;\n  }\n\n  .col-sm,\n  .col-sm-1,\n  .col-sm-2,\n  .col-sm-3,\n  .col-sm-4,\n  .col-sm-5,\n  .col-sm-6,\n  .col-sm-7,\n  .col-sm-8,\n  .col-sm-9,\n  .col-sm-10,\n  .col-sm-11,\n  .col-sm-12 {\n    box-sizing: border-box;\n    -ms-flex: 0 0 auto;\n    -webkit-box-flex: 0;\n    flex: 0 0 auto;\n    padding-right: 1rem;\n    padding-left: 1rem;\n  }\n\n  .col-sm {\n    -webkit-flex-grow: 1;\n    -ms-flex-positive: 1;\n    -webkit-box-flex: 1;\n    flex-grow: 1;\n    -ms-flex-preferred-size: 0;\n    flex-basis: 0;\n    max-width: 100%;\n  }\n\n  .col-sm-1 {\n    -ms-flex-preferred-size: 8.333%;\n    flex-basis: 8.333%;\n    max-width: 8.333%;\n  }\n\n  .col-sm-2 {\n    -ms-flex-preferred-size: 16.667%;\n    flex-basis: 16.667%;\n    max-width: 16.667%;\n  }\n\n  .col-sm-3 {\n    -ms-flex-preferred-size: 25%;\n    flex-basis: 25%;\n    max-width: 25%;\n  }\n\n  .col-sm-4 {\n    -ms-flex-preferred-size: 33.333%;\n    flex-basis: 33.333%;\n    max-width: 33.333%;\n  }\n\n  .col-sm-5 {\n    -ms-flex-preferred-size: 41.667%;\n    flex-basis: 41.667%;\n    max-width: 41.667%;\n  }\n\n  .col-sm-6 {\n    -ms-flex-preferred-size: 50%;\n    flex-basis: 50%;\n    max-width: 50%;\n  }\n\n  .col-sm-7 {\n    -ms-flex-preferred-size: 58.333%;\n    flex-basis: 58.333%;\n    max-width: 58.333%;\n  }\n\n  .col-sm-8 {\n    -ms-flex-preferred-size: 66.667%;\n    flex-basis: 66.667%;\n    max-width: 66.667%;\n  }\n\n  .col-sm-9 {\n    -ms-flex-preferred-size: 75%;\n    flex-basis: 75%;\n    max-width: 75%;\n  }\n\n  .col-sm-10 {\n    -ms-flex-preferred-size: 83.333%;\n    flex-basis: 83.333%;\n    max-width: 83.333%;\n  }\n\n  .col-sm-11 {\n    -ms-flex-preferred-size: 91.667%;\n    flex-basis: 91.667%;\n    max-width: 91.667%;\n  }\n\n  .col-sm-12 {\n    -ms-flex-preferred-size: 100%;\n    flex-basis: 100%;\n    max-width: 100%;\n  }\n\n  .col-sm-offset-1 {\n    margin-left: 8.333%;\n  }\n\n  .col-sm-offset-2 {\n    margin-left: 16.667%;\n  }\n\n  .col-sm-offset-3 {\n    margin-left: 25%;\n  }\n\n  .col-sm-offset-4 {\n    margin-left: 33.333%;\n  }\n\n  .col-sm-offset-5 {\n    margin-left: 41.667%;\n  }\n\n  .col-sm-offset-6 {\n    margin-left: 50%;\n  }\n\n  .col-sm-offset-7 {\n    margin-left: 58.333%;\n  }\n\n  .col-sm-offset-8 {\n    margin-left: 66.667%;\n  }\n\n  .col-sm-offset-9 {\n    margin-left: 75%;\n  }\n\n  .col-sm-offset-10 {\n    margin-left: 83.333%;\n  }\n\n  .col-sm-offset-11 {\n    margin-left: 91.667%;\n  }\n\n  .start-sm {\n    -ms-flex-pack: start;\n    -webkit-box-pack: start;\n    justify-content: flex-start;\n    text-align: start;\n  }\n\n  .center-sm {\n    -ms-flex-pack: center;\n    -webkit-box-pack: center;\n    justify-content: center;\n    text-align: center;\n  }\n\n  .end-sm {\n    -ms-flex-pack: end;\n    -webkit-box-pack: end;\n    justify-content: flex-end;\n    text-align: end;\n  }\n\n  .top-sm {\n    -ms-flex-align: start;\n    -webkit-box-align: start;\n    align-items: flex-start;\n  }\n\n  .middle-sm {\n    -ms-flex-align: center;\n    -webkit-box-align: center;\n    align-items: center;\n  }\n\n  .bottom-sm {\n    -ms-flex-align: end;\n    -webkit-box-align: end;\n    align-items: flex-end;\n  }\n\n  .around-sm {\n    -ms-flex-pack: distribute;\n    justify-content: space-around;\n  }\n\n  .between-sm {\n    -ms-flex-pack: justify;\n    -webkit-box-pack: justify;\n    justify-content: space-between;\n  }\n\n  .first-sm {\n    -ms-flex-order: -1;\n    -webkit-box-ordinal-group: 0;\n    order: -1;\n  }\n\n  .last-sm {\n    -ms-flex-order: 1;\n    -webkit-box-ordinal-group: 2;\n    order: 1;\n  }\n}\n@media only screen and (min-width: 62em) {\n  .container {\n    width: 61rem;\n  }\n\n  .col-md,\n  .col-md-1,\n  .col-md-2,\n  .col-md-3,\n  .col-md-4,\n  .col-md-5,\n  .col-md-6,\n  .col-md-7,\n  .col-md-8,\n  .col-md-9,\n  .col-md-10,\n  .col-md-11,\n  .col-md-12 {\n    box-sizing: border-box;\n    -ms-flex: 0 0 auto;\n    -webkit-box-flex: 0;\n    flex: 0 0 auto;\n    padding-right: 1rem;\n    padding-left: 1rem;\n  }\n\n  .col-md {\n    -webkit-flex-grow: 1;\n    -ms-flex-positive: 1;\n    -webkit-box-flex: 1;\n    flex-grow: 1;\n    -ms-flex-preferred-size: 0;\n    flex-basis: 0;\n    max-width: 100%;\n  }\n\n  .col-md-1 {\n    -ms-flex-preferred-size: 8.333%;\n    flex-basis: 8.333%;\n    max-width: 8.333%;\n  }\n\n  .col-md-2 {\n    -ms-flex-preferred-size: 16.667%;\n    flex-basis: 16.667%;\n    max-width: 16.667%;\n  }\n\n  .col-md-3 {\n    -ms-flex-preferred-size: 25%;\n    flex-basis: 25%;\n    max-width: 25%;\n  }\n\n  .col-md-4 {\n    -ms-flex-preferred-size: 33.333%;\n    flex-basis: 33.333%;\n    max-width: 33.333%;\n  }\n\n  .col-md-5 {\n    -ms-flex-preferred-size: 41.667%;\n    flex-basis: 41.667%;\n    max-width: 41.667%;\n  }\n\n  .col-md-6 {\n    -ms-flex-preferred-size: 50%;\n    flex-basis: 50%;\n    max-width: 50%;\n  }\n\n  .col-md-7 {\n    -ms-flex-preferred-size: 58.333%;\n    flex-basis: 58.333%;\n    max-width: 58.333%;\n  }\n\n  .col-md-8 {\n    -ms-flex-preferred-size: 66.667%;\n    flex-basis: 66.667%;\n    max-width: 66.667%;\n  }\n\n  .col-md-9 {\n    -ms-flex-preferred-size: 75%;\n    flex-basis: 75%;\n    max-width: 75%;\n  }\n\n  .col-md-10 {\n    -ms-flex-preferred-size: 83.333%;\n    flex-basis: 83.333%;\n    max-width: 83.333%;\n  }\n\n  .col-md-11 {\n    -ms-flex-preferred-size: 91.667%;\n    flex-basis: 91.667%;\n    max-width: 91.667%;\n  }\n\n  .col-md-12 {\n    -ms-flex-preferred-size: 100%;\n    flex-basis: 100%;\n    max-width: 100%;\n  }\n\n  .col-md-offset-1 {\n    margin-left: 8.333%;\n  }\n\n  .col-md-offset-2 {\n    margin-left: 16.667%;\n  }\n\n  .col-md-offset-3 {\n    margin-left: 25%;\n  }\n\n  .col-md-offset-4 {\n    margin-left: 33.333%;\n  }\n\n  .col-md-offset-5 {\n    margin-left: 41.667%;\n  }\n\n  .col-md-offset-6 {\n    margin-left: 50%;\n  }\n\n  .col-md-offset-7 {\n    margin-left: 58.333%;\n  }\n\n  .col-md-offset-8 {\n    margin-left: 66.667%;\n  }\n\n  .col-md-offset-9 {\n    margin-left: 75%;\n  }\n\n  .col-md-offset-10 {\n    margin-left: 83.333%;\n  }\n\n  .col-md-offset-11 {\n    margin-left: 91.667%;\n  }\n\n  .start-md {\n    -ms-flex-pack: start;\n    -webkit-box-pack: start;\n    justify-content: flex-start;\n    text-align: start;\n  }\n\n  .center-md {\n    -ms-flex-pack: center;\n    -webkit-box-pack: center;\n    justify-content: center;\n    text-align: center;\n  }\n\n  .end-md {\n    -ms-flex-pack: end;\n    -webkit-box-pack: end;\n    justify-content: flex-end;\n    text-align: end;\n  }\n\n  .top-md {\n    -ms-flex-align: start;\n    -webkit-box-align: start;\n    align-items: flex-start;\n  }\n\n  .middle-md {\n    -ms-flex-align: center;\n    -webkit-box-align: center;\n    align-items: center;\n  }\n\n  .bottom-md {\n    -ms-flex-align: end;\n    -webkit-box-align: end;\n    align-items: flex-end;\n  }\n\n  .around-md {\n    -ms-flex-pack: distribute;\n    justify-content: space-around;\n  }\n\n  .between-md {\n    -ms-flex-pack: justify;\n    -webkit-box-pack: justify;\n    justify-content: space-between;\n  }\n\n  .first-md {\n    -ms-flex-order: -1;\n    -webkit-box-ordinal-group: 0;\n    order: -1;\n  }\n\n  .last-md {\n    -ms-flex-order: 1;\n    -webkit-box-ordinal-group: 2;\n    order: 1;\n  }\n}\n@media only screen and (min-width: 75em) {\n  .container {\n    width: 71rem;\n  }\n\n  .col-lg,\n  .col-lg-1,\n  .col-lg-2,\n  .col-lg-3,\n  .col-lg-4,\n  .col-lg-5,\n  .col-lg-6,\n  .col-lg-7,\n  .col-lg-8,\n  .col-lg-9,\n  .col-lg-10,\n  .col-lg-11,\n  .col-lg-12 {\n    box-sizing: border-box;\n    -ms-flex: 0 0 auto;\n    -webkit-box-flex: 0;\n    flex: 0 0 auto;\n    padding-right: 1rem;\n    padding-left: 1rem;\n  }\n\n  .col-lg {\n    -webkit-flex-grow: 1;\n    -ms-flex-positive: 1;\n    -webkit-box-flex: 1;\n    flex-grow: 1;\n    -ms-flex-preferred-size: 0;\n    flex-basis: 0;\n    max-width: 100%;\n  }\n\n  .col-lg-1 {\n    -ms-flex-preferred-size: 8.333%;\n    flex-basis: 8.333%;\n    max-width: 8.333%;\n  }\n\n  .col-lg-2 {\n    -ms-flex-preferred-size: 16.667%;\n    flex-basis: 16.667%;\n    max-width: 16.667%;\n  }\n\n  .col-lg-3 {\n    -ms-flex-preferred-size: 25%;\n    flex-basis: 25%;\n    max-width: 25%;\n  }\n\n  .col-lg-4 {\n    -ms-flex-preferred-size: 33.333%;\n    flex-basis: 33.333%;\n    max-width: 33.333%;\n  }\n\n  .col-lg-5 {\n    -ms-flex-preferred-size: 41.667%;\n    flex-basis: 41.667%;\n    max-width: 41.667%;\n  }\n\n  .col-lg-6 {\n    -ms-flex-preferred-size: 50%;\n    flex-basis: 50%;\n    max-width: 50%;\n  }\n\n  .col-lg-7 {\n    -ms-flex-preferred-size: 58.333%;\n    flex-basis: 58.333%;\n    max-width: 58.333%;\n  }\n\n  .col-lg-8 {\n    -ms-flex-preferred-size: 66.667%;\n    flex-basis: 66.667%;\n    max-width: 66.667%;\n  }\n\n  .col-lg-9 {\n    -ms-flex-preferred-size: 75%;\n    flex-basis: 75%;\n    max-width: 75%;\n  }\n\n  .col-lg-10 {\n    -ms-flex-preferred-size: 83.333%;\n    flex-basis: 83.333%;\n    max-width: 83.333%;\n  }\n\n  .col-lg-11 {\n    -ms-flex-preferred-size: 91.667%;\n    flex-basis: 91.667%;\n    max-width: 91.667%;\n  }\n\n  .col-lg-12 {\n    -ms-flex-preferred-size: 100%;\n    flex-basis: 100%;\n    max-width: 100%;\n  }\n\n  .col-lg-offset-1 {\n    margin-left: 8.333%;\n  }\n\n  .col-lg-offset-2 {\n    margin-left: 16.667%;\n  }\n\n  .col-lg-offset-3 {\n    margin-left: 25%;\n  }\n\n  .col-lg-offset-4 {\n    margin-left: 33.333%;\n  }\n\n  .col-lg-offset-5 {\n    margin-left: 41.667%;\n  }\n\n  .col-lg-offset-6 {\n    margin-left: 50%;\n  }\n\n  .col-lg-offset-7 {\n    margin-left: 58.333%;\n  }\n\n  .col-lg-offset-8 {\n    margin-left: 66.667%;\n  }\n\n  .col-lg-offset-9 {\n    margin-left: 75%;\n  }\n\n  .col-lg-offset-10 {\n    margin-left: 83.333%;\n  }\n\n  .col-lg-offset-11 {\n    margin-left: 91.667%;\n  }\n\n  .start-lg {\n    -ms-flex-pack: start;\n    -webkit-box-pack: start;\n    justify-content: flex-start;\n    text-align: start;\n  }\n\n  .center-lg {\n    -ms-flex-pack: center;\n    -webkit-box-pack: center;\n    justify-content: center;\n    text-align: center;\n  }\n\n  .end-lg {\n    -ms-flex-pack: end;\n    -webkit-box-pack: end;\n    justify-content: flex-end;\n    text-align: end;\n  }\n\n  .top-lg {\n    -ms-flex-align: start;\n    -webkit-box-align: start;\n    align-items: flex-start;\n  }\n\n  .middle-lg {\n    -ms-flex-align: center;\n    -webkit-box-align: center;\n    align-items: center;\n  }\n\n  .bottom-lg {\n    -ms-flex-align: end;\n    -webkit-box-align: end;\n    align-items: flex-end;\n  }\n\n  .around-lg {\n    -ms-flex-pack: distribute;\n    justify-content: space-around;\n  }\n\n  .between-lg {\n    -ms-flex-pack: justify;\n    -webkit-box-pack: justify;\n    justify-content: space-between;\n  }\n\n  .first-lg {\n    -ms-flex-order: -1;\n    -webkit-box-ordinal-group: 0;\n    order: -1;\n  }\n\n  .last-lg {\n    -ms-flex-order: 1;\n    -webkit-box-ordinal-group: 2;\n    order: 1;\n  }\n}\n"; (require("browserify-css").createStyle(css, { "href": "node_modules/flexboxgrid/css/flexboxgrid.css" }, { "insertAt": "bottom" })); module.exports = css;
},{"browserify-css":16}],18:[function(require,module,exports){
var css = ".ol-box {\n  box-sizing: border-box;\n  border-radius: 2px;\n  border: 2px solid blue;\n}\n.ol-mouse-position {\n  top: 8px;\n  right: 8px;\n  position: absolute;\n}\n.ol-scale-line {\n  background: rgba(0,60,136,0.3);\n  border-radius: 4px;\n  bottom: 8px;\n  left: 8px;\n  padding: 2px;\n  position: absolute;\n}\n.ol-scale-line-inner {\n  border: 1px solid #eee;\n  border-top: none;\n  color: #eee;\n  font-size: 10px;\n  text-align: center;\n  margin: 1px;\n  will-change: contents, width;\n}\n.ol-overlay-container {\n  will-change: left,right,top,bottom;\n}\n.ol-unsupported {\n  display: none;\n}\n.ol-viewport,\n.ol-unselectable {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-tap-highlight-color: rgba(0,0,0,0);\n}\n.ol-selectable {\n  -webkit-touch-callout: default;\n  -webkit-user-select: auto;\n  -moz-user-select: auto;\n  -ms-user-select: auto;\n  user-select: auto;\n}\n.ol-control {\n  position: absolute;\n  background-color: rgba(255,255,255,0.4);\n  border-radius: 4px;\n  padding: 2px;\n}\n.ol-control:hover {\n  background-color: rgba(255,255,255,0.6);\n}\n.ol-zoom {\n  top: .5em;\n  left: .5em;\n}\n.ol-rotate {\n  top: .5em;\n  right: .5em;\n  transition: opacity .25s linear, visibility 0s linear;\n}\n.ol-rotate.ol-hidden {\n  opacity: 0;\n  visibility: hidden;\n  transition: opacity .25s linear, visibility 0s linear .25s;\n}\n.ol-zoom-extent {\n  top: 4.643em;\n  left: .5em;\n}\n.ol-full-screen {\n  right: .5em;\n  top: .5em;\n}\n@media print {\n  .ol-control {\n    display: none;\n  }\n}\n.ol-control button {\n  display: block;\n  margin: 1px;\n  padding: 0;\n  color: white;\n  font-size: 1.14em;\n  font-weight: bold;\n  text-decoration: none;\n  text-align: center;\n  height: 1.375em;\n  width: 1.375em;\n  line-height: .4em;\n  background-color: rgba(0,60,136,0.5);\n  border: none;\n  border-radius: 2px;\n}\n.ol-control button::-moz-focus-inner {\n  border: none;\n  padding: 0;\n}\n.ol-zoom-extent button {\n  line-height: 1.4em;\n}\n.ol-compass {\n  display: block;\n  font-weight: normal;\n  font-size: 1.2em;\n  will-change: transform;\n}\n.ol-touch .ol-control button {\n  font-size: 1.5em;\n}\n.ol-touch .ol-zoom-extent {\n  top: 5.5em;\n}\n.ol-control button:hover,\n.ol-control button:focus {\n  text-decoration: none;\n  background-color: rgba(0,60,136,0.7);\n}\n.ol-zoom .ol-zoom-in {\n  border-radius: 2px 2px 0 0;\n}\n.ol-zoom .ol-zoom-out {\n  border-radius: 0 0 2px 2px;\n}\n.ol-attribution {\n  text-align: right;\n  bottom: .5em;\n  right: .5em;\n  max-width: calc(100% - 1.3em);\n}\n.ol-attribution ul {\n  margin: 0;\n  padding: 0 .5em;\n  font-size: .7rem;\n  line-height: 1.375em;\n  color: #000;\n  text-shadow: 0 0 2px #fff;\n}\n.ol-attribution li {\n  display: inline;\n  list-style: none;\n  line-height: inherit;\n}\n.ol-attribution li:not(:last-child):after {\n  content: \" \";\n}\n.ol-attribution img {\n  max-height: 2em;\n  max-width: inherit;\n  vertical-align: middle;\n}\n.ol-attribution ul,\n.ol-attribution button {\n  display: inline-block;\n}\n.ol-attribution.ol-collapsed ul {\n  display: none;\n}\n.ol-attribution.ol-logo-only ul {\n  display: block;\n}\n.ol-attribution:not(.ol-collapsed) {\n  background: rgba(255,255,255,0.8);\n}\n.ol-attribution.ol-uncollapsible {\n  bottom: 0;\n  right: 0;\n  border-radius: 4px 0 0;\n  height: 1.1em;\n  line-height: 1em;\n}\n.ol-attribution.ol-logo-only {\n  background: transparent;\n  bottom: .4em;\n  height: 1.1em;\n  line-height: 1em;\n}\n.ol-attribution.ol-uncollapsible img {\n  margin-top: -.2em;\n  max-height: 1.6em;\n}\n.ol-attribution.ol-logo-only button,\n.ol-attribution.ol-uncollapsible button {\n  display: none;\n}\n.ol-zoomslider {\n  top: 4.5em;\n  left: .5em;\n  height: 200px;\n}\n.ol-zoomslider button {\n  position: relative;\n  height: 10px;\n}\n.ol-touch .ol-zoomslider {\n  top: 5.5em;\n}\n.ol-overviewmap {\n  left: 0.5em;\n  bottom: 0.5em;\n}\n.ol-overviewmap.ol-uncollapsible {\n  bottom: 0;\n  left: 0;\n  border-radius: 0 4px 0 0;\n}\n.ol-overviewmap .ol-overviewmap-map,\n.ol-overviewmap button {\n  display: inline-block;\n}\n.ol-overviewmap .ol-overviewmap-map {\n  border: 1px solid #7b98bc;\n  height: 150px;\n  margin: 2px;\n  width: 150px;\n}\n.ol-overviewmap:not(.ol-collapsed) button {\n  bottom: 1px;\n  left: 2px;\n  position: absolute;\n}\n.ol-overviewmap.ol-collapsed .ol-overviewmap-map,\n.ol-overviewmap.ol-uncollapsible button {\n  display: none;\n}\n.ol-overviewmap:not(.ol-collapsed) {\n  background: rgba(255,255,255,0.8);\n}\n.ol-overviewmap-box {\n  border: 2px dotted rgba(0,60,136,0.7);\n}\n.ol-overviewmap .ol-overviewmap-box:hover {\n  cursor: move;\n}\n"; (require("browserify-css").createStyle(css, { "href": "node_modules/openlayers/css/ol.css" }, { "insertAt": "bottom" })); module.exports = css;
},{"browserify-css":16}],19:[function(require,module,exports){
(function (global){
// OpenLayers. See https://openlayers.org/
// License: https://raw.githubusercontent.com/openlayers/openlayers/master/LICENSE.md
// Version: v4.1.1
;(function (root, factory) {
  if (typeof exports === "object") {
    module.exports = factory();
  } else if (typeof define === "function" && define.amd) {
    define([], factory);
  } else {
    root.ol = factory();
  }
}(this, function () {
  var OPENLAYERS = {};
  var k,ba=this;function t(a,b){var c=OPENLAYERS,d=a.split("."),c=c||ba;d[0]in c||!c.execScript||c.execScript("var "+d[0]);for(var e;d.length&&(e=d.shift());)d.length||void 0===b?c[e]&&Object.prototype.hasOwnProperty.call(c,e)?c=c[e]:c=c[e]={}:c[e]=b};var ca,da;function ea(a,b){return a>b?1:a<b?-1:0}function fa(a,b){return 0<=a.indexOf(b)}function ga(a,b,c){var d=a.length;if(a[0]<=b)return 0;if(!(b<=a[d-1]))if(0<c)for(c=1;c<d;++c){if(a[c]<b)return c-1}else if(0>c)for(c=1;c<d;++c){if(a[c]<=b)return c}else for(c=1;c<d;++c){if(a[c]==b)return c;if(a[c]<b)return a[c-1]-b<b-a[c]?c-1:c}return d-1}function ha(a,b){var c,d=Array.isArray(b)?b:[b],e=d.length;for(c=0;c<e;c++)a[a.length]=d[c]}
function ia(a,b){for(var c=a.length>>>0,d,e=0;e<c;e++)if(d=a[e],b(d,e,a))return d;return null}function ja(a,b){var c=a.length;if(c!==b.length)return!1;for(var d=0;d<c;d++)if(a[d]!==b[d])return!1;return!0}function ka(a){var b=la,c=a.length,d=Array(a.length),e;for(e=0;e<c;e++)d[e]={index:e,value:a[e]};d.sort(function(a,c){return b(a.value,c.value)||a.index-c.index});for(e=0;e<a.length;e++)a[e]=d[e].value}function ma(a,b){var c;return a.every(function(d,e){c=e;return!b(d,e,a)})?-1:c}
function na(a,b){var c=b||ea;return a.every(function(b,e){if(!e)return!0;var d=c(a[e-1],b);return!(0<d||0===d)})};function u(a,b){a.prototype=Object.create(b.prototype);a.prototype.constructor=a}function oa(){}function w(a){return a.Lo||(a.Lo=++pa)}var pa=0;function qa(a){this.message="Assertion failed. See https://openlayers.org/en/v4.1.1/doc/errors/#"+a+" for details.";this.code=a;this.name="AssertionError"}u(qa,Error);function sa(a,b){if(!a)throw new qa(b);};function ta(a,b,c,d){this.da=a;this.ba=b;this.ga=c;this.ja=d}function ua(a,b,c){return a.da<=b&&b<=a.ba&&a.ga<=c&&c<=a.ja}function va(a,b){return a.da==b.da&&a.ga==b.ga&&a.ba==b.ba&&a.ja==b.ja}function wa(a,b){return a.da<=b.ba&&a.ba>=b.da&&a.ga<=b.ja&&a.ja>=b.ga};function xa(a,b,c){return Math.min(Math.max(a,b),c)}var ya=function(){var a;"cosh"in Math?a=Math.cosh:a=function(a){a=Math.exp(a);return(a+1/a)/2};return a}();function za(a){sa(0<a,29);return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function Aa(a,b,c,d,e,f){var g=e-c,h=f-d;if(g||h){var l=((a-c)*g+(b-d)*h)/(g*g+h*h);1<l?(c=e,d=f):0<l&&(c+=g*l,d+=h*l)}return Ba(a,b,c,d)}function Ba(a,b,c,d){a=c-a;b=d-b;return a*a+b*b}function Ca(a){return a*Math.PI/180}
function Da(a,b){var c=a%b;return 0>c*b?c+b:c}function Ea(a,b,c){return a+c*(b-a)};function Fa(a,b,c){void 0===c&&(c=[0,0]);c[0]=a[0]+2*b;c[1]=a[1]+2*b;return c}function Ga(a,b,c){void 0===c&&(c=[0,0]);c[0]=a[0]*b+.5|0;c[1]=a[1]*b+.5|0;return c}function Ha(a,b){if(Array.isArray(a))return a;void 0===b?b=[a,a]:b[0]=b[1]=a;return b};function Ia(a){for(var b=Ja(),c=0,d=a.length;c<d;++c)La(b,a[c]);return b}function Ma(a,b,c){return c?(c[0]=a[0]-b,c[1]=a[1]-b,c[2]=a[2]+b,c[3]=a[3]+b,c):[a[0]-b,a[1]-b,a[2]+b,a[3]+b]}function Oa(a,b){return b?(b[0]=a[0],b[1]=a[1],b[2]=a[2],b[3]=a[3],b):a.slice()}function Pa(a,b,c){b=b<a[0]?a[0]-b:a[2]<b?b-a[2]:0;a=c<a[1]?a[1]-c:a[3]<c?c-a[3]:0;return b*b+a*a}function Qa(a,b){return Sa(a,b[0],b[1])}function Ua(a,b){return a[0]<=b[0]&&b[2]<=a[2]&&a[1]<=b[1]&&b[3]<=a[3]}
function Sa(a,b,c){return a[0]<=b&&b<=a[2]&&a[1]<=c&&c<=a[3]}function Va(a,b){var c=a[1],d=a[2],e=a[3],f=b[0],g=b[1],h=0;f<a[0]?h|=16:f>d&&(h|=4);g<c?h|=8:g>e&&(h|=2);h||(h=1);return h}function Ja(){return[Infinity,Infinity,-Infinity,-Infinity]}function Wa(a,b,c,d,e){return e?(e[0]=a,e[1]=b,e[2]=c,e[3]=d,e):[a,b,c,d]}function Xa(a,b){var c=a[0],d=a[1];return Wa(c,d,c,d,b)}function Ya(a,b,c,d,e){e=Wa(Infinity,Infinity,-Infinity,-Infinity,e);return Za(e,a,b,c,d)}
function $a(a,b){return a[0]==b[0]&&a[2]==b[2]&&a[1]==b[1]&&a[3]==b[3]}function ab(a,b){b[0]<a[0]&&(a[0]=b[0]);b[2]>a[2]&&(a[2]=b[2]);b[1]<a[1]&&(a[1]=b[1]);b[3]>a[3]&&(a[3]=b[3]);return a}function La(a,b){b[0]<a[0]&&(a[0]=b[0]);b[0]>a[2]&&(a[2]=b[0]);b[1]<a[1]&&(a[1]=b[1]);b[1]>a[3]&&(a[3]=b[1])}function Za(a,b,c,d,e){for(;c<d;c+=e){var f=a,g=b[c],h=b[c+1];f[0]=Math.min(f[0],g);f[1]=Math.min(f[1],h);f[2]=Math.max(f[2],g);f[3]=Math.max(f[3],h)}return a}
function bb(a,b,c){var d;return(d=b.call(c,cb(a)))||(d=b.call(c,db(a)))||(d=b.call(c,eb(a)))?d:(d=b.call(c,fb(a)))?d:!1}function gb(a){var b=0;hb(a)||(b=ib(a)*jb(a));return b}function cb(a){return[a[0],a[1]]}function db(a){return[a[2],a[1]]}function kb(a){return[(a[0]+a[2])/2,(a[1]+a[3])/2]}
function lb(a,b,c,d,e){var f=b*d[0]/2;d=b*d[1]/2;b=Math.cos(c);var g=Math.sin(c);c=f*b;f*=g;b*=d;var h=d*g,l=a[0],m=a[1];a=l-c+h;d=l-c-h;g=l+c-h;c=l+c+h;var h=m-f-b,l=m-f+b,n=m+f+b,f=m+f-b;return Wa(Math.min(a,d,g,c),Math.min(h,l,n,f),Math.max(a,d,g,c),Math.max(h,l,n,f),e)}function jb(a){return a[3]-a[1]}function mb(a,b,c){c=c?c:Ja();nb(a,b)&&(c[0]=a[0]>b[0]?a[0]:b[0],c[1]=a[1]>b[1]?a[1]:b[1],c[2]=a[2]<b[2]?a[2]:b[2],c[3]=a[3]<b[3]?a[3]:b[3]);return c}function fb(a){return[a[0],a[3]]}
function eb(a){return[a[2],a[3]]}function ib(a){return a[2]-a[0]}function nb(a,b){return a[0]<=b[2]&&a[2]>=b[0]&&a[1]<=b[3]&&a[3]>=b[1]}function hb(a){return a[2]<a[0]||a[3]<a[1]}function ob(a,b){var c=(a[2]-a[0])/2*(b-1),d=(a[3]-a[1])/2*(b-1);a[0]-=c;a[2]+=c;a[1]-=d;a[3]+=d}
function pb(a,b,c){a=[a[0],a[1],a[0],a[3],a[2],a[1],a[2],a[3]];b(a,a,2);var d=[a[0],a[2],a[4],a[6]],e=[a[1],a[3],a[5],a[7]];b=Math.min.apply(null,d);a=Math.min.apply(null,e);d=Math.max.apply(null,d);e=Math.max.apply(null,e);return Wa(b,a,d,e,c)};var qb="function"===typeof Object.assign?Object.assign:function(a,b){if(!a||null===a)throw new TypeError("Cannot convert undefined or null to object");for(var c=Object(a),d=1,e=arguments.length;d<e;++d){var f=arguments[d];if(void 0!==f&&null!==f)for(var g in f)f.hasOwnProperty(g)&&(c[g]=f[g])}return c};function rb(a){for(var b in a)delete a[b]}function sb(a){var b=[],c;for(c in a)b.push(a[c]);return b}function tb(a){for(var b in a)return!1;return!b};/*

 Latitude/longitude spherical geodesy formulae taken from
 http://www.movable-type.co.uk/scripts/latlong.html
 Licensed under CC-BY-3.0.
*/
function ub(a){this.radius=a}ub.prototype.a=function(a){for(var b=0,c=a.length,d=a[c-1][0],e=a[c-1][1],f=0;f<c;f++)var g=a[f][0],h=a[f][1],b=b+Ca(g-d)*(2+Math.sin(Ca(e))+Math.sin(Ca(h))),d=g,e=h;return b*this.radius*this.radius/2};ub.prototype.b=function(a,b){var c=Ca(a[1]),d=Ca(b[1]),e=(d-c)/2,f=Ca(b[0]-a[0])/2,c=Math.sin(e)*Math.sin(e)+Math.sin(f)*Math.sin(f)*Math.cos(c)*Math.cos(d);return 2*this.radius*Math.atan2(Math.sqrt(c),Math.sqrt(1-c))};
ub.prototype.offset=function(a,b,c){var d=Ca(a[1]);b/=this.radius;var e=Math.asin(Math.sin(d)*Math.cos(b)+Math.cos(d)*Math.sin(b)*Math.cos(c));return[180*(Ca(a[0])+Math.atan2(Math.sin(c)*Math.sin(b)*Math.cos(d),Math.cos(b)-Math.sin(d)*Math.sin(e)))/Math.PI,180*e/Math.PI]};var vb=new ub(6370997);var xb={};xb.degrees=2*Math.PI*vb.radius/360;xb.ft=.3048;xb.m=1;xb["us-ft"]=1200/3937;var yb=null;function zb(a){this.nb=a.code;this.i=a.units;this.c=void 0!==a.extent?a.extent:null;this.f=void 0!==a.worldExtent?a.worldExtent:null;this.b=void 0!==a.axisOrientation?a.axisOrientation:"enu";this.g=void 0!==a.global?a.global:!1;this.a=!(!this.g||!this.c);this.l=a.getPointResolution;this.j=null;this.o=a.metersPerUnit;var b=a.code,c=yb||window.proj4;"function"==typeof c&&(b=c.defs(b),void 0!==b&&(void 0!==b.axis&&void 0===a.axisOrientation&&(this.b=b.axis),void 0===a.metersPerUnit&&(this.o=b.to_meter),
void 0===a.units&&(this.i=b.units)))}k=zb.prototype;k.Fk=function(){return this.nb};k.D=function(){return this.c};k.Kb=function(){return this.i};k.uc=function(){return this.o||xb[this.i]};k.ol=function(){return this.f};k.Zl=function(){return this.g};k.Qp=function(a){this.g=a;this.a=!(!a||!this.c)};k.Mn=function(a){this.c=a;this.a=!(!this.g||!a)};k.$p=function(a){this.f=a};k.Pp=function(a){this.l=a};function Ab(a){zb.call(this,{code:a,units:"m",extent:Bb,global:!0,worldExtent:Cb,getPointResolution:function(a,c){return a/ya(c[1]/6378137)}})}u(Ab,zb);var Db=6378137*Math.PI,Bb=[-Db,-Db,Db,Db],Cb=[-180,-85,180,85],Eb="EPSG:3857 EPSG:102100 EPSG:102113 EPSG:900913 urn:ogc:def:crs:EPSG:6.18:3:3857 urn:ogc:def:crs:EPSG::3857 http://www.opengis.net/gml/srs/epsg.xml#3857".split(" ").map(function(a){return new Ab(a)});
function Fb(a,b,c){var d=a.length;c=1<c?c:2;void 0===b&&(2<c?b=a.slice():b=Array(d));for(var e=0;e<d;e+=c){b[e]=Db*a[e]/180;var f=6378137*Math.log(Math.tan(Math.PI*(a[e+1]+90)/360));f>Db?f=Db:f<-Db&&(f=-Db);b[e+1]=f}return b}function Gb(a,b,c){var d=a.length;c=1<c?c:2;void 0===b&&(2<c?b=a.slice():b=Array(d));for(var e=0;e<d;e+=c)b[e]=180*a[e]/Db,b[e+1]=360*Math.atan(Math.exp(a[e+1]/6378137))/Math.PI-90;return b};var Hb=new ub(6378137);function Ib(a,b){zb.call(this,{code:a,units:"degrees",extent:Jb,axisOrientation:b,global:!0,metersPerUnit:Kb,worldExtent:Jb})}u(Ib,zb);var Jb=[-180,-90,180,90],Kb=Math.PI*Hb.radius/180,Lb=[new Ib("CRS:84"),new Ib("EPSG:4326","neu"),new Ib("urn:ogc:def:crs:EPSG::4326","neu"),new Ib("urn:ogc:def:crs:EPSG:6.6:4326","neu"),new Ib("urn:ogc:def:crs:OGC:1.3:CRS84"),new Ib("urn:ogc:def:crs:OGC:2:84"),new Ib("http://www.opengis.net/gml/srs/epsg.xml#4326","neu"),new Ib("urn:x-ogc:def:crs:EPSG:4326","neu")];var Mb={};var Nb={};function Ob(a,b,c){a=a.nb;b=b.nb;a in Nb||(Nb[a]={});Nb[a][b]=c}function Qb(a,b){var c;a in Nb&&b in Nb[a]&&(c=Nb[a][b]);return c};function Rb(a,b,c){var d=a.l;d?b=d(b,c):"degrees"!=a.Kb()&&(d=Sb(a,Tb("EPSG:4326")),b=[c[0]-b/2,c[1],c[0]+b/2,c[1],c[0],c[1]-b/2,c[0],c[1]+b/2],b=d(b,b,2),b=(vb.b(b.slice(0,2),b.slice(2,4))+vb.b(b.slice(4,6),b.slice(6,8)))/2,a=a.uc(),void 0!==a&&(b/=a));return b}function Ub(a){Vb(a);a.forEach(function(b){a.forEach(function(a){b!==a&&Ob(b,a,Wb)})})}function Xb(){Lb.forEach(function(a){Eb.forEach(function(b){Ob(a,b,Fb);Ob(b,a,Gb)})})}function Yb(a){Mb[a.nb]=a;Ob(a,a,Wb)}
function Vb(a){var b=[];a.forEach(function(a){b.push(Yb(a))})}function Zb(a){return a?"string"===typeof a?Tb(a):a:Tb("EPSG:3857")}function $b(a,b,c,d){a=Tb(a);b=Tb(b);Ob(a,b,ac(c));Ob(b,a,ac(d))}function ac(a){return function(b,c,d){var e=b.length;d=void 0!==d?d:2;c=void 0!==c?c:Array(e);var f,g;for(g=0;g<e;g+=d)for(f=a([b[g],b[g+1]]),c[g]=f[0],c[g+1]=f[1],f=d-1;2<=f;--f)c[g+f]=b[g+f];return c}}
function Tb(a){var b=null;if(a instanceof zb)b=a;else if("string"===typeof a){var b=Mb[a]||null,c=yb||window.proj4;b||"function"!=typeof c||void 0===c.defs(a)||(b=new zb({code:a}),Yb(b))}return b}function bc(a,b){if(a===b)return!0;var c=a.Kb()===b.Kb();return a.nb===b.nb?c:Sb(a,b)===Wb&&c}function dc(a,b){var c=Tb(a),d=Tb(b);return Sb(c,d)}
function Sb(a,b){var c=a.nb,d=b.nb,e=Qb(c,d);if(!e){var f=yb||window.proj4;if("function"==typeof f){var g=f.defs(c),h=f.defs(d);void 0!==g&&void 0!==h&&(g===h?Ub([b,a]):(e=f(d,c),$b(b,a,e.forward,e.inverse)),e=Qb(c,d))}}e||(e=ec);return e}function ec(a,b){if(void 0!==b&&a!==b){for(var c=0,d=a.length;c<d;++c)b[c]=a[c];a=b}return a}function Wb(a,b){var c;if(void 0!==b){c=0;for(var d=a.length;c<d;++c)b[c]=a[c];c=b}else c=a.slice();return c}function fc(a,b,c){return dc(b,c)(a,void 0,a.length)}
function gc(a,b,c){b=dc(b,c);return pb(a,b)}function hc(){Ub(Eb);Ub(Lb);Xb()}hc();function ic(a,b,c,d){return void 0!==d?(d[0]=a,d[1]=b,d[2]=c,d):[a,b,c]}function jc(a){var b=a[0],c=Array(b),d=1<<b-1,e,f;for(e=0;e<b;++e)f=48,a[1]&d&&(f+=1),a[2]&d&&(f+=2),c[e]=String.fromCharCode(f),d>>=1;return c.join("")};function kc(a){this.minZoom=void 0!==a.minZoom?a.minZoom:0;this.b=a.resolutions;sa(na(this.b,function(a,b){return b-a}),17);this.maxZoom=this.b.length-1;this.g=void 0!==a.origin?a.origin:null;this.c=null;void 0!==a.origins&&(this.c=a.origins,sa(this.c.length==this.b.length,20));var b=a.extent;void 0===b||this.g||this.c||(this.g=fb(b));sa(!this.g&&this.c||this.g&&!this.c,18);this.i=null;void 0!==a.tileSizes&&(this.i=a.tileSizes,sa(this.i.length==this.b.length,19));this.f=void 0!==a.tileSize?a.tileSize:
this.i?null:256;sa(!this.f&&this.i||this.f&&!this.i,22);this.u=void 0!==b?b:null;this.a=null;this.j=[0,0];void 0!==a.sizes?this.a=a.sizes.map(function(a){return new ta(Math.min(0,a[0]),Math.max(a[0]-1,-1),Math.min(0,a[1]),Math.max(a[1]-1,-1))},this):b&&lc(this,b)}var mc=[0,0,0];k=kc.prototype;k.mh=function(a,b,c){a=nc(this,a,b);for(var d=a.da,e=a.ba;d<=e;++d)for(var f=a.ga,g=a.ja;f<=g;++f)c([b,d,f])};
function oc(a,b,c,d,e){e=a.Ua(b,e);for(b=b[0]-1;b>=a.minZoom;){if(c.call(null,b,nc(a,e,b,d)))return!0;--b}return!1}k.D=function(){return this.u};k.Ni=function(){return this.maxZoom};k.Oi=function(){return this.minZoom};k.Uc=function(a){return this.g?this.g:this.c[a]};k.La=function(a){return this.b[a]};k.Pi=function(){return this.b};function pc(a,b,c,d){return b[0]<a.maxZoom?(d=a.Ua(b,d),nc(a,d,b[0]+1,c)):null}
function qc(a,b,c,d){rc(a,b[0],b[1],c,!1,mc);var e=mc[1],f=mc[2];rc(a,b[2],b[3],c,!0,mc);a=mc[1];b=mc[2];void 0!==d?(d.da=e,d.ba=a,d.ga=f,d.ja=b):d=new ta(e,a,f,b);return d}function nc(a,b,c,d){return qc(a,b,a.La(c),d)}function sc(a,b){var c=a.Uc(b[0]),d=a.La(b[0]),e=Ha(a.eb(b[0]),a.j);return[c[0]+(b[1]+.5)*e[0]*d,c[1]+(b[2]+.5)*e[1]*d]}k.Ua=function(a,b){var c=this.Uc(a[0]),d=this.La(a[0]),e=Ha(this.eb(a[0]),this.j),f=c[0]+a[1]*e[0]*d,c=c[1]+a[2]*e[1]*d;return Wa(f,c,f+e[0]*d,c+e[1]*d,b)};
k.Ae=function(a,b,c){return rc(this,a[0],a[1],b,!1,c)};function rc(a,b,c,d,e,f){var g=a.Qc(d),h=d/a.La(g),l=a.Uc(g);a=Ha(a.eb(g),a.j);b=h*Math.floor((b-l[0])/d+(e?.5:0))/a[0];c=h*Math.floor((c-l[1])/d+(e?0:.5))/a[1];e?(b=Math.ceil(b)-1,c=Math.ceil(c)-1):(b=Math.floor(b),c=Math.floor(c));return ic(g,b,c,f)}k.Xf=function(a,b,c){return rc(this,a[0],a[1],this.La(b),!1,c)};k.eb=function(a){return this.f?this.f:this.i[a]};k.Qc=function(a,b){return xa(ga(this.b,a,b||0),this.minZoom,this.maxZoom)};
function lc(a,b){for(var c=a.b.length,d=Array(c),e=a.minZoom;e<c;++e)d[e]=nc(a,b,e);a.a=d};function tc(a){var b=a.j;if(!b){var b=uc(a),c=vc(b,void 0,void 0),b=new kc({extent:b,origin:fb(b),resolutions:c,tileSize:void 0});a.j=b}return b}function wc(a){var b={};qb(b,a?a:{});void 0===b.extent&&(b.extent=Tb("EPSG:3857").D());b.resolutions=vc(b.extent,b.maxZoom,b.tileSize);delete b.maxZoom;return new kc(b)}function vc(a,b,c){b=void 0!==b?b:42;var d=jb(a);a=ib(a);c=Ha(void 0!==c?c:256);c=Math.max(a/c[0],d/c[1]);b+=1;d=Array(b);for(a=0;a<b;++a)d[a]=c/Math.pow(2,a);return d}
function uc(a){a=Tb(a);var b=a.D();b||(a=180*xb.degrees/a.uc(),b=Wa(-a,-a,a,a));return b};function xc(a){this.b=a.html;this.a=a.tileRanges?a.tileRanges:null}xc.prototype.g=function(){return this.b};function yc(a){return function(b){if(b)return[xa(b[0],a[0],a[2]),xa(b[1],a[1],a[3])]}}function zc(a){return a};function Ac(a){function b(b){var c=a.listener,e=a.dh||a.target;a.fh&&Bc(a);return c.call(e,b)}return a.eh=b}function Cc(a,b,c,d){for(var e,f=0,g=a.length;f<g;++f)if(e=a[f],e.listener===b&&e.dh===c)return d&&(e.deleteIndex=f),e}function Dc(a,b){var c=a.mb;return c?c[b]:void 0}function Ec(a){var b=a.mb;b||(b=a.mb={});return b}
function Fc(a,b){var c=Dc(a,b);if(c){for(var d=0,e=c.length;d<e;++d)a.removeEventListener(b,c[d].eh),rb(c[d]);c.length=0;if(c=a.mb)delete c[b],Object.keys(c).length||delete a.mb}}function z(a,b,c,d,e){var f=Ec(a),g=f[b];g||(g=f[b]=[]);(f=Cc(g,c,d,!1))?e||(f.fh=!1):(f={dh:d,fh:!!e,listener:c,target:a,type:b},a.addEventListener(b,Ac(f)),g.push(f));return f}function Gc(a,b,c,d){return z(a,b,c,d,!0)}function Hc(a,b,c,d){(a=Dc(a,b))&&(c=Cc(a,c,d,!0))&&Bc(c)}
function Bc(a){if(a&&a.target){a.target.removeEventListener(a.type,a.eh);var b=Dc(a.target,a.type);if(b){var c="deleteIndex"in a?a.deleteIndex:b.indexOf(a);-1!==c&&b.splice(c,1);b.length||Fc(a.target,a.type)}rb(a)}}function Ic(a){var b=Ec(a),c;for(c in b)Fc(a,c)};function Jc(){}Jc.prototype.$b=!1;function Kc(a){a.$b||(a.$b=!0,a.ra())}Jc.prototype.ra=oa;function Lc(a){this.type=a;this.target=null}Lc.prototype.preventDefault=Lc.prototype.stopPropagation=function(){this.gp=!0};function Mc(a){a.stopPropagation()};function Nc(){this.$a={};this.ta={};this.qa={}}u(Nc,Jc);Nc.prototype.addEventListener=function(a,b){var c=this.qa[a];c||(c=this.qa[a]=[]);-1===c.indexOf(b)&&c.push(b)};
Nc.prototype.b=function(a){var b="string"===typeof a?new Lc(a):a;a=b.type;b.target=this;var c=this.qa[a],d;if(c){a in this.ta||(this.ta[a]=0,this.$a[a]=0);++this.ta[a];for(var e=0,f=c.length;e<f;++e)if(!1===c[e].call(this,b)||b.gp){d=!1;break}--this.ta[a];if(!this.ta[a]){b=this.$a[a];for(delete this.$a[a];b--;)this.removeEventListener(a,oa);delete this.ta[a]}return d}};Nc.prototype.ra=function(){Ic(this)};function Oc(a,b){return b?b in a.qa:0<Object.keys(a.qa).length}
Nc.prototype.removeEventListener=function(a,b){var c=this.qa[a];if(c){var d=c.indexOf(b);a in this.$a?(c[d]=oa,++this.$a[a]):(c.splice(d,1),c.length||delete this.qa[a])}};function Pc(){Nc.call(this);this.g=0}u(Pc,Nc);k=Pc.prototype;k.s=function(){++this.g;this.b("change")};k.L=function(){return this.g};k.J=function(a,b,c){if(Array.isArray(a)){for(var d=a.length,e=Array(d),f=0;f<d;++f)e[f]=z(this,a[f],b,c);return e}return z(this,a,b,c)};k.once=function(a,b,c){if(Array.isArray(a)){for(var d=a.length,e=Array(d),f=0;f<d;++f)e[f]=Gc(this,a[f],b,c);return e}return Gc(this,a,b,c)};
k.K=function(a,b,c){if(Array.isArray(a))for(var d=0,e=a.length;d<e;++d)Hc(this,a[d],b,c);else Hc(this,a,b,c)};function Qc(a){Pc.call(this);w(this);this.O={};void 0!==a&&this.H(a)}u(Qc,Pc);var Rc={};function Sc(a){return Rc.hasOwnProperty(a)?Rc[a]:Rc[a]="change:"+a}k=Qc.prototype;k.get=function(a){var b;this.O.hasOwnProperty(a)&&(b=this.O[a]);return b};k.P=function(){return Object.keys(this.O)};k.M=function(){return qb({},this.O)};function Tc(a,b,c){var d;d=Sc(b);a.b(new Uc(d,b,c));a.b(new Uc("propertychange",b,c))}k.set=function(a,b,c){c?this.O[a]=b:(c=this.O[a],this.O[a]=b,c!==b&&Tc(this,a,c))};
k.H=function(a,b){for(var c in a)this.set(c,a[c],b)};k.R=function(a,b){if(a in this.O){var c=this.O[a];delete this.O[a];b||Tc(this,a,c)}};function Uc(a,b,c){Lc.call(this,a);this.key=b;this.oldValue=c}u(Uc,Lc);function D(a,b){Qc.call(this);this.c=!!(b||{}).unique;this.a=a?a:[];if(this.c)for(var c=0,d=this.a.length;c<d;++c)Vc(this,this.a[c],c);Wc(this)}u(D,Qc);k=D.prototype;k.clear=function(){for(;0<this.fc();)this.pop()};k.ag=function(a){var b,c;b=0;for(c=a.length;b<c;++b)this.push(a[b]);return this};k.forEach=function(a,b){this.a.forEach(a,b)};k.pm=function(){return this.a};k.item=function(a){return this.a[a]};k.fc=function(){return this.get(Xc)};
k.Ge=function(a,b){this.c&&Vc(this,b);this.a.splice(a,0,b);Wc(this);this.b(new Yc("add",b))};k.pop=function(){return this.Bg(this.fc()-1)};k.push=function(a){this.c&&Vc(this,a);var b=this.fc();this.Ge(b,a);return this.fc()};k.remove=function(a){var b=this.a,c,d;c=0;for(d=b.length;c<d;++c)if(b[c]===a)return this.Bg(c)};k.Bg=function(a){var b=this.a[a];this.a.splice(a,1);Wc(this);this.b(new Yc("remove",b));return b};
k.Mp=function(a,b){var c=this.fc();if(a<c)this.c&&Vc(this,b,a),c=this.a[a],this.a[a]=b,this.b(new Yc("remove",c)),this.b(new Yc("add",b));else{for(;c<a;++c)this.Ge(c,void 0);this.Ge(a,b)}};function Wc(a){a.set(Xc,a.a.length)}function Vc(a,b,c){for(var d=0,e=a.a.length;d<e;++d)if(a.a[d]===b&&d!==c)throw new qa(58);}var Xc="length";function Yc(a,b){Lc.call(this,a);this.element=b}u(Yc,Lc);var Zc=/^#(?:[0-9a-f]{3}){1,2}$/i,ad=/^([a-z]*)$/i;function bd(a){return Array.isArray(a)?a:cd(a)}function dd(a){if("string"!==typeof a){var b=a[0];b!=(b|0)&&(b=b+.5|0);var c=a[1];c!=(c|0)&&(c=c+.5|0);var d=a[2];d!=(d|0)&&(d=d+.5|0);a="rgba("+b+","+c+","+d+","+(void 0===a[3]?1:a[3])+")"}return a}
var cd=function(){var a={},b=0;return function(c){var d;if(a.hasOwnProperty(c))d=a[c];else{if(1024<=b){d=0;for(var e in a)d++&3||(delete a[e],--b)}d=c;var f;ad.exec(d)&&(e=document.createElement("div"),e.style.color=d,document.body.appendChild(e),d=getComputedStyle(e).color,document.body.removeChild(e));if(Zc.exec(d)){f=d.length-1;sa(3==f||6==f,54);var g=3==f?1:2;f=parseInt(d.substr(1+0*g,g),16);e=parseInt(d.substr(1+1*g,g),16);d=parseInt(d.substr(1+2*g,g),16);1==g&&(f=(f<<4)+f,e=(e<<4)+e,d=(d<<4)+
d);f=[f,e,d,1]}else d.indexOf("rgba(")?d.indexOf("rgb(")?sa(!1,14):(d=d.slice(4,-1).split(",").map(Number),d.push(1),f=ed(d)):(d=d.slice(5,-1).split(",").map(Number),f=ed(d));d=f;a[c]=d;++b}return d}}();function ed(a){var b=[];b[0]=xa(a[0]+.5|0,0,255);b[1]=xa(a[1]+.5|0,0,255);b[2]=xa(a[2]+.5|0,0,255);b[3]=xa(a[3],0,1);return b};function fd(a){return"string"===typeof a||a instanceof CanvasPattern||a instanceof CanvasGradient?a:dd(a)};function gd(a,b,c){this.center=a;this.resolution=b;this.rotation=c};function hd(a,b){var c=document.createElement("CANVAS");a&&(c.width=a);b&&(c.height=b);return c.getContext("2d")}function id(a,b){var c=b.parentNode;c&&c.replaceChild(a,b)}function jd(a){a&&a.parentNode&&a.parentNode.removeChild(a)};function kd(a){Qc.call(this);this.element=a.element?a.element:null;this.a=this.Z=null;this.u=[];this.render=a.render?a.render:oa;a.target&&this.i(a.target)}u(kd,Qc);kd.prototype.ra=function(){jd(this.element);Qc.prototype.ra.call(this)};kd.prototype.f=function(){return this.a};
kd.prototype.setMap=function(a){this.a&&jd(this.element);for(var b=0,c=this.u.length;b<c;++b)Bc(this.u[b]);this.u.length=0;if(this.a=a)(this.Z?this.Z:a.v).appendChild(this.element),this.render!==oa&&this.u.push(z(a,"postrender",this.render,this)),a.render()};kd.prototype.i=function(a){this.Z="string"===typeof a?document.getElementById(a):a};function ld(a){a=a?a:{};this.I=document.createElement("UL");this.v=document.createElement("LI");this.I.appendChild(this.v);this.v.style.display="none";this.c=void 0!==a.collapsed?a.collapsed:!0;this.l=void 0!==a.collapsible?a.collapsible:!0;this.l||(this.c=!1);var b=void 0!==a.className?a.className:"ol-attribution",c=void 0!==a.tipLabel?a.tipLabel:"Attributions",d=void 0!==a.collapseLabel?a.collapseLabel:"\u00bb";"string"===typeof d?(this.A=document.createElement("span"),this.A.textContent=d):this.A=
d;d=void 0!==a.label?a.label:"i";"string"===typeof d?(this.C=document.createElement("span"),this.C.textContent=d):this.C=d;var e=this.l&&!this.c?this.A:this.C,d=document.createElement("button");d.setAttribute("type","button");d.title=c;d.appendChild(e);z(d,"click",this.Pm,this);c=document.createElement("div");c.className=b+" ol-unselectable ol-control"+(this.c&&this.l?" ol-collapsed":"")+(this.l?"":" ol-uncollapsible");c.appendChild(this.I);c.appendChild(d);kd.call(this,{element:c,render:a.render?
a.render:md,target:a.target});this.G=!0;this.o={};this.j={};this.T={}}u(ld,kd);
function md(a){if(a=a.frameState){var b,c,d,e,f,g,h,l,m,n,p,q=a.layerStatesArray,r=qb({},a.attributions),v={},x={},y=a.viewState.projection;c=0;for(b=q.length;c<b;c++)if(g=q[c].layer.ka())if(n=w(g).toString(),m=g.j)for(d=0,e=m.length;d<e;d++)if(h=m[d],l=w(h).toString(),!(l in r)){if(f=a.usedTiles[n]){var A=g.Jb(y);a:{p=void 0;var B,aa,Ra=h,ra=A,Ka=y;if(Ra.a){for(p in f)if(p in Ra.a){var A=f[p],C;aa=0;for(B=Ra.a[p].length;aa<B;++aa){C=Ra.a[p][aa];if(wa(C,A)){p=!0;break a}var Na=nc(ra,uc(Ka),parseInt(p,
10)),wb=Na.ba-Na.da+1;if(A.da<Na.da||A.ba>Na.ba)if(wa(C,new ta(Da(A.da,wb),Da(A.ba,wb),A.ga,A.ja))||A.ba-A.da+1>wb&&wa(C,Na)){p=!0;break a}}}p=!1}else p=!0}}else p=!1;p?(l in v&&delete v[l],p=h.b,p in x||(x[p]=!0,r[l]=h)):v[l]=h}b=[r,v];c=b[0];b=b[1];for(var Z in this.o)Z in c?(this.j[Z]||(this.o[Z].style.display="",this.j[Z]=!0),delete c[Z]):Z in b?(this.j[Z]&&(this.o[Z].style.display="none",delete this.j[Z]),delete b[Z]):(jd(this.o[Z]),delete this.o[Z],delete this.j[Z]);for(Z in c)d=document.createElement("LI"),
d.innerHTML=c[Z].b,this.I.appendChild(d),this.o[Z]=d,this.j[Z]=!0;for(Z in b)d=document.createElement("LI"),d.innerHTML=b[Z].b,d.style.display="none",this.I.appendChild(d),this.o[Z]=d;Z=!tb(this.j)||!tb(a.logos);this.G!=Z&&(this.element.style.display=Z?"":"none",this.G=Z);Z&&tb(this.j)?this.element.classList.add("ol-logo-only"):this.element.classList.remove("ol-logo-only");var Ta;a=a.logos;Z=this.T;for(Ta in Z)Ta in a||(jd(Z[Ta]),delete Z[Ta]);for(var Pb in a)b=a[Pb],b instanceof HTMLElement&&(this.v.appendChild(b),
Z[Pb]=b),Pb in Z||(Ta=new Image,Ta.src=Pb,""===b?c=Ta:(c=document.createElement("a"),c.href=b,c.appendChild(Ta)),this.v.appendChild(c),Z[Pb]=c);this.v.style.display=tb(a)?"none":""}else this.G&&(this.element.style.display="none",this.G=!1)}k=ld.prototype;k.Pm=function(a){a.preventDefault();nd(this)};function nd(a){a.element.classList.toggle("ol-collapsed");a.c?id(a.A,a.C):id(a.C,a.A);a.c=!a.c}k.Om=function(){return this.l};
k.Rm=function(a){this.l!==a&&(this.l=a,this.element.classList.toggle("ol-uncollapsible"),!a&&this.c&&nd(this))};k.Qm=function(a){this.l&&this.c!==a&&nd(this)};k.Nm=function(){return this.c};function od(a){return Math.pow(a,3)}function pd(a){return 1-od(1-a)}function qd(a){return 3*a*a-2*a*a*a}function rd(a){return a};function sd(a){a=a?a:{};var b=void 0!==a.className?a.className:"ol-rotate",c=void 0!==a.label?a.label:"\u21e7";this.c=null;"string"===typeof c?(this.c=document.createElement("span"),this.c.className="ol-compass",this.c.textContent=c):(this.c=c,this.c.classList.add("ol-compass"));var d=a.tipLabel?a.tipLabel:"Reset rotation",c=document.createElement("button");c.className=b+"-reset";c.setAttribute("type","button");c.title=d;c.appendChild(this.c);z(c,"click",sd.prototype.A,this);d=document.createElement("div");
d.className=b+" ol-unselectable ol-control";d.appendChild(c);b=a.render?a.render:td;this.l=a.resetNorth?a.resetNorth:void 0;kd.call(this,{element:d,render:b,target:a.target});this.o=void 0!==a.duration?a.duration:250;this.j=void 0!==a.autoHide?a.autoHide:!0;this.v=void 0;this.j&&this.element.classList.add("ol-hidden")}u(sd,kd);sd.prototype.A=function(a){a.preventDefault();this.l?this.l():(a=this.a.$())&&void 0!==a.Sa()&&(0<this.o?a.animate({rotation:0,duration:this.o,easing:pd}):a.Ne(0))};
function td(a){if(a=a.frameState){a=a.viewState.rotation;if(a!=this.v){var b="rotate("+a+"rad)";if(this.j){var c=this.element.classList.contains("ol-hidden");c||a?c&&a&&this.element.classList.remove("ol-hidden"):this.element.classList.add("ol-hidden")}this.c.style.msTransform=b;this.c.style.webkitTransform=b;this.c.style.transform=b}this.v=a}};function ud(a){a=a?a:{};var b=void 0!==a.className?a.className:"ol-zoom",c=void 0!==a.delta?a.delta:1,d=void 0!==a.zoomInLabel?a.zoomInLabel:"+",e=void 0!==a.zoomOutLabel?a.zoomOutLabel:"\u2212",f=void 0!==a.zoomInTipLabel?a.zoomInTipLabel:"Zoom in",g=void 0!==a.zoomOutTipLabel?a.zoomOutTipLabel:"Zoom out",h=document.createElement("button");h.className=b+"-in";h.setAttribute("type","button");h.title=f;h.appendChild("string"===typeof d?document.createTextNode(d):d);z(h,"click",ud.prototype.j.bind(this,
c));d=document.createElement("button");d.className=b+"-out";d.setAttribute("type","button");d.title=g;d.appendChild("string"===typeof e?document.createTextNode(e):e);z(d,"click",ud.prototype.j.bind(this,-c));c=document.createElement("div");c.className=b+" ol-unselectable ol-control";c.appendChild(h);c.appendChild(d);kd.call(this,{element:c,target:a.target});this.c=void 0!==a.duration?a.duration:250}u(ud,kd);
ud.prototype.j=function(a,b){b.preventDefault();var c=this.a.$();if(c){var d=c.Ra();d&&(d=c.constrainResolution(d,a),0<this.c?(c.Kc()&&c.kd(),c.animate({resolution:d,duration:this.c,easing:pd})):c.$c(d))}};function vd(a){a=a?a:{};var b=new D;(void 0!==a.zoom?a.zoom:1)&&b.push(new ud(a.zoomOptions));(void 0!==a.rotate?a.rotate:1)&&b.push(new sd(a.rotateOptions));(void 0!==a.attribution?a.attribution:1)&&b.push(new ld(a.attributionOptions));return b};function wd(a){a=a?a:{};this.c=void 0!==a.className?a.className:"ol-full-screen";var b=void 0!==a.label?a.label:"\u2922";this.l="string"===typeof b?document.createTextNode(b):b;b=void 0!==a.labelActive?a.labelActive:"\u00d7";this.o="string"===typeof b?document.createTextNode(b):b;var c=a.tipLabel?a.tipLabel:"Toggle full-screen",b=document.createElement("button");b.className=this.c+"-"+xd();b.setAttribute("type","button");b.title=c;b.appendChild(this.l);z(b,"click",this.C,this);c=document.createElement("div");
c.className=this.c+" ol-unselectable ol-control "+(yd()?"":"ol-unsupported");c.appendChild(b);kd.call(this,{element:c,target:a.target});this.A=void 0!==a.keys?a.keys:!1;this.j=a.source}u(wd,kd);
wd.prototype.C=function(a){a.preventDefault();yd()&&(a=this.a)&&(xd()?document.exitFullscreen?document.exitFullscreen():document.msExitFullscreen?document.msExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen&&document.webkitExitFullscreen():(a=this.j?"string"===typeof this.j?document.getElementById(this.j):this.j:a.vc(),this.A?a.mozRequestFullScreenWithKeys?a.mozRequestFullScreenWithKeys():a.webkitRequestFullscreen?a.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT):
zd(a):zd(a)))};wd.prototype.v=function(){var a=this.element.firstElementChild,b=this.a;xd()?(a.className=this.c+"-true",id(this.o,this.l)):(a.className=this.c+"-false",id(this.l,this.o));b&&b.Cd()};wd.prototype.setMap=function(a){kd.prototype.setMap.call(this,a);a&&this.u.push(z(document,Ad(),this.v,this))};
function yd(){var a=document.body;return!!(a.webkitRequestFullscreen||a.mozRequestFullScreen&&document.mozFullScreenEnabled||a.msRequestFullscreen&&document.msFullscreenEnabled||a.requestFullscreen&&document.fullscreenEnabled)}function xd(){return!!(document.webkitIsFullScreen||document.mozFullScreen||document.msFullscreenElement||document.fullscreenElement)}
function zd(a){a.requestFullscreen?a.requestFullscreen():a.msRequestFullscreen?a.msRequestFullscreen():a.mozRequestFullScreen?a.mozRequestFullScreen():a.webkitRequestFullscreen&&a.webkitRequestFullscreen()}var Ad=function(){var a;return function(){if(!a){var b=document.body;b.webkitRequestFullscreen?a="webkitfullscreenchange":b.mozRequestFullScreen?a="mozfullscreenchange":b.msRequestFullscreen?a="MSFullscreenChange":b.requestFullscreen&&(a="fullscreenchange")}return a}}();function Bd(a){a=a?a:{};var b=document.createElement("DIV");b.className=void 0!==a.className?a.className:"ol-mouse-position";kd.call(this,{element:b,render:a.render?a.render:Cd,target:a.target});z(this,Sc(Dd),this.Sm,this);a.coordinateFormat&&this.fj(a.coordinateFormat);a.projection&&this.Th(Tb(a.projection));this.v=void 0!==a.undefinedHTML?a.undefinedHTML:"";this.o=b.innerHTML;this.l=this.j=this.c=null}u(Bd,kd);
function Cd(a){a=a.frameState;a?this.c!=a.viewState.projection&&(this.c=a.viewState.projection,this.j=null):this.c=null;Ed(this,this.l)}k=Bd.prototype;k.Sm=function(){this.j=null};k.qh=function(){return this.get(Fd)};k.Sh=function(){return this.get(Dd)};k.Gl=function(a){this.l=this.a.xe(a);Ed(this,this.l)};k.Hl=function(){Ed(this,null);this.l=null};k.setMap=function(a){kd.prototype.setMap.call(this,a);a&&(a=a.c,this.u.push(z(a,"mousemove",this.Gl,this),z(a,"mouseout",this.Hl,this)))};
k.fj=function(a){this.set(Fd,a)};k.Th=function(a){this.set(Dd,a)};function Ed(a,b){var c=a.v;if(b&&a.c){if(!a.j){var d=a.Sh();a.j=d?Sb(a.c,d):ec}if(d=a.a.Xa(b))a.j(d,d),c=(c=a.qh())?c(d):d.toString()}a.o&&c==a.o||(a.element.innerHTML=c,a.o=c)}var Dd="projection",Fd="coordinateFormat";function Gd(a,b,c){Lc.call(this,a);this.map=b;this.frameState=void 0!==c?c:null}u(Gd,Lc);function Hd(a,b,c,d,e){Gd.call(this,a,b,e);this.originalEvent=c;this.pixel=b.xe(c);this.coordinate=b.Xa(this.pixel);this.dragging=void 0!==d?d:!1}u(Hd,Gd);Hd.prototype.preventDefault=function(){Gd.prototype.preventDefault.call(this);this.originalEvent.preventDefault()};Hd.prototype.stopPropagation=function(){Gd.prototype.stopPropagation.call(this);this.originalEvent.stopPropagation()};var Id={xq:"singleclick",mq:"click",nq:"dblclick",qq:"pointerdrag",tq:"pointermove",pq:"pointerdown",wq:"pointerup",vq:"pointerover",uq:"pointerout",rq:"pointerenter",sq:"pointerleave",oq:"pointercancel"};function Kd(a,b,c,d,e){Hd.call(this,a,b,c.b,d,e);this.b=c}u(Kd,Hd);var Ld=["experimental-webgl","webgl","webkit-3d","moz-webgl"];function Md(a,b){var c,d,e=Ld.length;for(d=0;d<e;++d)try{if(c=a.getContext(Ld[d],b))return c}catch(f){}return null};var Nd,Od="undefined"!==typeof navigator?navigator.userAgent.toLowerCase():"",Pd=-1!==Od.indexOf("firefox"),Qd=-1!==Od.indexOf("safari")&&-1==Od.indexOf("chrom"),Rd=-1!==Od.indexOf("webkit")&&-1==Od.indexOf("edge"),Sd=-1!==Od.indexOf("macintosh"),Td=window.devicePixelRatio||1,Ud=!1,Vd=function(){if(!("HTMLCanvasElement"in window))return!1;try{var a=document.createElement("CANVAS").getContext("2d");return a?(void 0!==a.setLineDash&&(Ud=!0),!0):!1}catch(b){return!1}}(),Wd="DeviceOrientationEvent"in
window,Xd="geolocation"in navigator,Yd="ontouchstart"in window,Zd="PointerEvent"in window,$d=!!navigator.msPointerEnabled,ae=!1,be,ce=[];if("WebGLRenderingContext"in window)try{var de=Md(document.createElement("CANVAS"),{failIfMajorPerformanceCaveat:!0});de&&(ae=!0,be=de.getParameter(de.MAX_TEXTURE_SIZE),ce=de.getSupportedExtensions())}catch(a){}Nd=ae;da=ce;ca=be;function ee(a,b){this.b=a;this.i=b};function fe(a){ee.call(this,a,{mousedown:this.am,mousemove:this.bm,mouseup:this.em,mouseover:this.dm,mouseout:this.cm});this.a=a.g;this.g=[]}u(fe,ee);function ge(a,b){for(var c=a.g,d=b.clientX,e=b.clientY,f=0,g=c.length,h;f<g&&(h=c[f]);f++){var l=Math.abs(e-h[1]);if(25>=Math.abs(d-h[0])&&25>=l)return!0}return!1}function he(a){var b=ie(a,a),c=b.preventDefault;b.preventDefault=function(){a.preventDefault();c()};b.pointerId=1;b.isPrimary=!0;b.pointerType="mouse";return b}k=fe.prototype;
k.am=function(a){if(!ge(this,a)){(1).toString()in this.a&&this.cancel(a);var b=he(a);this.a[(1).toString()]=a;je(this.b,"pointerdown",b,a)}};k.bm=function(a){if(!ge(this,a)){var b=he(a);je(this.b,"pointermove",b,a)}};k.em=function(a){if(!ge(this,a)){var b=this.a[(1).toString()];b&&b.button===a.button&&(b=he(a),je(this.b,"pointerup",b,a),delete this.a[(1).toString()])}};k.dm=function(a){if(!ge(this,a)){var b=he(a);ke(this.b,b,a)}};k.cm=function(a){if(!ge(this,a)){var b=he(a);le(this.b,b,a)}};
k.cancel=function(a){var b=he(a);this.b.cancel(b,a);delete this.a[(1).toString()]};function me(a){ee.call(this,a,{MSPointerDown:this.jm,MSPointerMove:this.km,MSPointerUp:this.nm,MSPointerOut:this.lm,MSPointerOver:this.mm,MSPointerCancel:this.im,MSGotPointerCapture:this.gm,MSLostPointerCapture:this.hm});this.a=a.g;this.g=["","unavailable","touch","pen","mouse"]}u(me,ee);function ne(a,b){var c=b;"number"===typeof b.pointerType&&(c=ie(b,b),c.pointerType=a.g[b.pointerType]);return c}k=me.prototype;
k.jm=function(a){this.a[a.pointerId.toString()]=a;var b=ne(this,a);je(this.b,"pointerdown",b,a)};k.km=function(a){var b=ne(this,a);je(this.b,"pointermove",b,a)};k.nm=function(a){var b=ne(this,a);je(this.b,"pointerup",b,a);delete this.a[a.pointerId.toString()]};k.lm=function(a){var b=ne(this,a);le(this.b,b,a)};k.mm=function(a){var b=ne(this,a);ke(this.b,b,a)};k.im=function(a){var b=ne(this,a);this.b.cancel(b,a);delete this.a[a.pointerId.toString()]};
k.hm=function(a){this.b.b(new oe("lostpointercapture",a,a))};k.gm=function(a){this.b.b(new oe("gotpointercapture",a,a))};function pe(a){ee.call(this,a,{pointerdown:this.Yo,pointermove:this.Zo,pointerup:this.bp,pointerout:this.$o,pointerover:this.ap,pointercancel:this.Xo,gotpointercapture:this.pl,lostpointercapture:this.$l})}u(pe,ee);k=pe.prototype;k.Yo=function(a){qe(this.b,a)};k.Zo=function(a){qe(this.b,a)};k.bp=function(a){qe(this.b,a)};k.$o=function(a){qe(this.b,a)};k.ap=function(a){qe(this.b,a)};k.Xo=function(a){qe(this.b,a)};k.$l=function(a){qe(this.b,a)};k.pl=function(a){qe(this.b,a)};function oe(a,b,c){Lc.call(this,a);this.b=b;a=c?c:{};this.buttons=se(a);this.pressure=te(a,this.buttons);this.bubbles="bubbles"in a?a.bubbles:!1;this.cancelable="cancelable"in a?a.cancelable:!1;this.view="view"in a?a.view:null;this.detail="detail"in a?a.detail:null;this.screenX="screenX"in a?a.screenX:0;this.screenY="screenY"in a?a.screenY:0;this.clientX="clientX"in a?a.clientX:0;this.clientY="clientY"in a?a.clientY:0;this.button="button"in a?a.button:0;this.relatedTarget="relatedTarget"in a?a.relatedTarget:
null;this.pointerId="pointerId"in a?a.pointerId:0;this.width="width"in a?a.width:0;this.height="height"in a?a.height:0;this.pointerType="pointerType"in a?a.pointerType:"";this.isPrimary="isPrimary"in a?a.isPrimary:!1;b.preventDefault&&(this.preventDefault=function(){b.preventDefault()})}u(oe,Lc);function se(a){if(a.buttons||ue)a=a.buttons;else switch(a.which){case 1:a=1;break;case 2:a=4;break;case 3:a=2;break;default:a=0}return a}
function te(a,b){var c=0;a.pressure?c=a.pressure:c=b?.5:0;return c}var ue=!1;try{ue=1===(new MouseEvent("click",{buttons:1})).buttons}catch(a){};function ve(a,b){ee.call(this,a,{touchstart:this.gq,touchmove:this.fq,touchend:this.eq,touchcancel:this.cq});this.a=a.g;this.j=b;this.g=void 0;this.f=0;this.c=void 0}u(ve,ee);k=ve.prototype;k.dj=function(){this.f=0;this.c=void 0};
function we(a,b,c){b=ie(b,c);b.pointerId=c.identifier+2;b.bubbles=!0;b.cancelable=!0;b.detail=a.f;b.button=0;b.buttons=1;b.width=c.webkitRadiusX||c.radiusX||0;b.height=c.webkitRadiusY||c.radiusY||0;b.pressure=c.webkitForce||c.force||.5;b.isPrimary=a.g===c.identifier;b.pointerType="touch";b.clientX=c.clientX;b.clientY=c.clientY;b.screenX=c.screenX;b.screenY=c.screenY;return b}
function xe(a,b,c){function d(){b.preventDefault()}var e=Array.prototype.slice.call(b.changedTouches),f=e.length,g,h;for(g=0;g<f;++g)h=we(a,b,e[g]),h.preventDefault=d,c.call(a,b,h)}
k.gq=function(a){var b=a.touches,c=Object.keys(this.a),d=c.length;if(d>=b.length){var e=[],f,g,h;for(f=0;f<d;++f){g=c[f];h=this.a[g];var l;if(!(l=1==g))a:{for(var m=b.length,n=0;n<m;n++)if(l=b[n],l.identifier===g-2){l=!0;break a}l=!1}l||e.push(h.out)}for(f=0;f<e.length;++f)this.Gf(a,e[f])}b=a.changedTouches[0];c=Object.keys(this.a).length;if(!c||1===c&&(1).toString()in this.a)this.g=b.identifier,void 0!==this.c&&clearTimeout(this.c);ye(this,a);this.f++;xe(this,a,this.To)};
k.To=function(a,b){this.a[b.pointerId]={target:b.target,out:b,Qi:b.target};var c=this.b;b.bubbles=!0;je(c,"pointerover",b,a);c=this.b;b.bubbles=!1;je(c,"pointerenter",b,a);je(this.b,"pointerdown",b,a)};k.fq=function(a){a.preventDefault();xe(this,a,this.fm)};
k.fm=function(a,b){var c=this.a[b.pointerId];if(c){var d=c.out,e=c.Qi;je(this.b,"pointermove",b,a);d&&e!==b.target&&(d.relatedTarget=b.target,b.relatedTarget=e,d.target=e,b.target?(le(this.b,d,a),ke(this.b,b,a)):(b.target=e,b.relatedTarget=null,this.Gf(a,b)));c.out=b;c.Qi=b.target}};k.eq=function(a){ye(this,a);xe(this,a,this.hq)};
k.hq=function(a,b){je(this.b,"pointerup",b,a);this.b.out(b,a);ze(this.b,b,a);delete this.a[b.pointerId];b.isPrimary&&(this.g=void 0,this.c=setTimeout(this.dj.bind(this),200))};k.cq=function(a){xe(this,a,this.Gf)};k.Gf=function(a,b){this.b.cancel(b,a);this.b.out(b,a);ze(this.b,b,a);delete this.a[b.pointerId];b.isPrimary&&(this.g=void 0,this.c=setTimeout(this.dj.bind(this),200))};
function ye(a,b){var c=a.j.g,d=b.changedTouches[0];if(a.g===d.identifier){var e=[d.clientX,d.clientY];c.push(e);setTimeout(function(){var a=c.indexOf(e);-1<a&&c.splice(a,1)},2500)}};function Ae(a){Nc.call(this);this.f=a;this.g={};this.i={};this.a=[];Zd?Be(this,new pe(this)):$d?Be(this,new me(this)):(a=new fe(this),Be(this,a),Yd&&Be(this,new ve(this,a)));a=this.a.length;for(var b,c=0;c<a;c++)b=this.a[c],Ce(this,Object.keys(b.i))}u(Ae,Nc);function Be(a,b){var c=Object.keys(b.i);c&&(c.forEach(function(a){var c=b.i[a];c&&(this.i[a]=c.bind(b))},a),a.a.push(b))}Ae.prototype.c=function(a){var b=this.i[a.type];b&&b(a)};
function Ce(a,b){b.forEach(function(a){z(this.f,a,this.c,this)},a)}function De(a,b){b.forEach(function(a){Hc(this.f,a,this.c,this)},a)}function ie(a,b){for(var c={},d,e=0,f=Ee.length;e<f;e++)d=Ee[e][0],c[d]=a[d]||b[d]||Ee[e][1];return c}function ze(a,b,c){b.bubbles=!1;je(a,"pointerleave",b,c)}Ae.prototype.out=function(a,b){a.bubbles=!0;je(this,"pointerout",a,b)};Ae.prototype.cancel=function(a,b){je(this,"pointercancel",a,b)};
function le(a,b,c){a.out(b,c);var d=b.target,e=b.relatedTarget;d&&e&&d.contains(e)||ze(a,b,c)}function ke(a,b,c){b.bubbles=!0;je(a,"pointerover",b,c);var d=b.target,e=b.relatedTarget;d&&e&&d.contains(e)||(b.bubbles=!1,je(a,"pointerenter",b,c))}function je(a,b,c,d){a.b(new oe(b,d,c))}function qe(a,b){a.b(new oe(b.type,b,b))}Ae.prototype.ra=function(){for(var a=this.a.length,b,c=0;c<a;c++)b=this.a[c],De(this,Object.keys(b.i));Nc.prototype.ra.call(this)};
var Ee=[["bubbles",!1],["cancelable",!1],["view",null],["detail",null],["screenX",0],["screenY",0],["clientX",0],["clientY",0],["ctrlKey",!1],["altKey",!1],["shiftKey",!1],["metaKey",!1],["button",0],["relatedTarget",null],["buttons",0],["pointerId",0],["width",0],["height",0],["pressure",0],["tiltX",0],["tiltY",0],["pointerType",""],["hwTimestamp",0],["isPrimary",!1],["type",""],["target",null],["currentTarget",null],["which",0]];function Fe(a){Nc.call(this);this.c=a;this.j=0;this.l=!1;this.i=[];this.g=null;a=this.c.c;this.O=0;this.v={};this.f=new Ae(a);this.a=null;this.o=z(this.f,"pointerdown",this.Jl,this);this.u=z(this.f,"pointermove",this.Bp,this)}u(Fe,Nc);function Ge(a,b){var c=new Kd("click",a.c,b);a.b(c);a.j?(clearTimeout(a.j),a.j=0,c=new Kd("dblclick",a.c,b),a.b(c)):a.j=setTimeout(function(){this.j=0;var a=new Kd("singleclick",this.c,b);this.b(a)}.bind(a),250)}
function He(a,b){"pointerup"==b.type||"pointercancel"==b.type?delete a.v[b.pointerId]:"pointerdown"==b.type&&(a.v[b.pointerId]=!0);a.O=Object.keys(a.v).length}k=Fe.prototype;k.Ch=function(a){He(this,a);var b=new Kd("pointerup",this.c,a);this.b(b);this.l||a.button||Ge(this,this.g);this.O||(this.i.forEach(Bc),this.i.length=0,this.l=!1,this.g=null,Kc(this.a),this.a=null)};
k.Jl=function(a){He(this,a);var b=new Kd("pointerdown",this.c,a);this.b(b);this.g=a;this.i.length||(this.a=new Ae(document),this.i.push(z(this.a,"pointermove",this.Dm,this),z(this.a,"pointerup",this.Ch,this),z(this.f,"pointercancel",this.Ch,this)))};k.Dm=function(a){if(a.clientX!=this.g.clientX||a.clientY!=this.g.clientY){this.l=!0;var b=new Kd("pointerdrag",this.c,a,this.l);this.b(b)}a.preventDefault()};
k.Bp=function(a){this.b(new Kd(a.type,this.c,a,!(!this.g||a.clientX==this.g.clientX&&a.clientY==this.g.clientY)))};k.ra=function(){this.u&&(Bc(this.u),this.u=null);this.o&&(Bc(this.o),this.o=null);this.i.forEach(Bc);this.i.length=0;this.a&&(Kc(this.a),this.a=null);this.f&&(Kc(this.f),this.f=null);Nc.prototype.ra.call(this)};function Ie(a,b){this.o=a;this.c=b;this.b=[];this.g=[];this.a={}}Ie.prototype.clear=function(){this.b.length=0;this.g.length=0;rb(this.a)};function Je(a){var b=a.b,c=a.g,d=b[0];1==b.length?(b.length=0,c.length=0):(b[0]=b.pop(),c[0]=c.pop(),Ke(a,0));b=a.c(d);delete a.a[b];return d}Ie.prototype.i=function(a){sa(!(this.c(a)in this.a),31);var b=this.o(a);return Infinity!=b?(this.b.push(a),this.g.push(b),this.a[this.c(a)]=!0,Le(this,0,this.b.length-1),!0):!1};
function Ke(a,b){for(var c=a.b,d=a.g,e=c.length,f=c[b],g=d[b],h=b;b<e>>1;){var l=2*b+1,m=2*b+2,l=m<e&&d[m]<d[l]?m:l;c[b]=c[l];d[b]=d[l];b=l}c[b]=f;d[b]=g;Le(a,h,b)}function Le(a,b,c){var d=a.b;a=a.g;for(var e=d[c],f=a[c];c>b;){var g=c-1>>1;if(a[g]>f)d[c]=d[g],a[c]=a[g],c=g;else break}d[c]=e;a[c]=f}function Me(a){var b=a.o,c=a.b,d=a.g,e=0,f=c.length,g,h,l;for(h=0;h<f;++h)g=c[h],l=b(g),Infinity==l?delete a.a[a.c(g)]:(d[e]=l,c[e++]=g);c.length=e;d.length=e;for(b=(a.b.length>>1)-1;0<=b;b--)Ke(a,b)};function Ne(a,b){Ie.call(this,function(b){return a.apply(null,b)},function(a){return a[0].hb()});this.u=b;this.j=0;this.f={}}u(Ne,Ie);Ne.prototype.i=function(a){var b=Ie.prototype.i.call(this,a);b&&z(a[0],"change",this.l,this);return b};Ne.prototype.l=function(a){a=a.target;var b=a.V();if(2===b||3===b||4===b||5===b)Hc(a,"change",this.l,this),a=a.hb(),a in this.f&&(delete this.f[a],--this.j),this.u()};
function Oe(a,b,c){for(var d=0,e,f;a.j<b&&d<c&&0<a.b.length;)e=Je(a)[0],f=e.hb(),0!==e.V()||f in a.f||(a.f[f]=!0,++a.j,++d,e.load())};function Pe(a){return function(b,c,d){if(void 0!==b)return b=ga(a,b,d),b=xa(b+c,0,a.length-1),c=Math.floor(b),b!=c&&c<a.length-1?a[c]/Math.pow(a[c]/a[c+1],b-c):a[c]}}function Qe(a,b,c){return function(d,e,f){if(void 0!==d)return d=Math.max(Math.floor(Math.log(b/d)/Math.log(a)+(-f/2+.5))+e,0),void 0!==c&&(d=Math.min(d,c)),b/Math.pow(a,d)}};function Re(a){if(void 0!==a)return 0}function Se(a,b){if(void 0!==a)return a+b}function Te(a){var b=2*Math.PI/a;return function(a,d){if(void 0!==a)return a=Math.floor((a+d)/b+.5)*b}}function Ue(){var a=Ca(5);return function(b,c){if(void 0!==b)return Math.abs(b+c)<=a?0:b+c}};function Ve(a,b){var c=void 0!==b?a.toFixed(b):""+a,d=c.indexOf("."),d=-1===d?c.length:d;return 2<d?c:Array(3-d).join("0")+c}function We(a){a=(""+a).split(".");for(var b=["1","3"],c=0;c<Math.max(a.length,b.length);c++){var d=parseInt(a[c]||"0",10),e=parseInt(b[c]||"0",10);if(d>e)return 1;if(e>d)return-1}return 0};function Xe(a,b){a[0]+=b[0];a[1]+=b[1];return a}function Ye(a,b){var c=a[0],d=a[1],e=b[0],f=b[1],g=e[0],e=e[1],h=f[0],f=f[1],l=h-g,m=f-e,c=l||m?(l*(c-g)+m*(d-e))/(l*l+m*m||0):0;0>=c||(1<=c?(g=h,e=f):(g+=c*l,e+=c*m));return[g,e]}
function Ze(a,b,c){a=Da(a+180,360)-180;var d=Math.abs(3600*a);c=c||0;var e=Math.pow(10,c),f=Math.floor(d/3600),g=Math.floor((d-3600*f)/60),d=Math.ceil((d-3600*f-60*g)*e)/e;60<=d&&(d=0,g+=1);60<=g&&(g=0,f+=1);return f+"\u00b0 "+Ve(g)+"\u2032 "+Ve(d,c)+"\u2033 "+b.charAt(0>a?1:0)}function $e(a,b,c){return a?b.replace("{x}",a[0].toFixed(c)).replace("{y}",a[1].toFixed(c)):""}function af(a,b){for(var c=!0,d=a.length-1;0<=d;--d)if(a[d]!=b[d]){c=!1;break}return c}
function cf(a,b){var c=Math.cos(b),d=Math.sin(b),e=a[1]*c+a[0]*d;a[0]=a[0]*c-a[1]*d;a[1]=e;return a}function df(a,b){a[0]*=b;a[1]*=b}function ef(a,b){var c=a[0]-b[0],d=a[1]-b[1];return c*c+d*d}function ff(a,b){return Math.sqrt(ef(a,b))}function gf(a,b){return ef(a,Ye(a,b))}function hf(a,b){return $e(a,"{x}, {y}",b)};function jf(){return!0}function kf(){return!1};function lf(){Qc.call(this);this.o=Ja();this.u=-1;this.i={};this.l=this.f=0}u(lf,Qc);k=lf.prototype;k.Ab=function(a,b){var c=b?b:[NaN,NaN];this.Hb(a[0],a[1],c,Infinity);return c};k.sb=function(a){return this.Sc(a[0],a[1])};k.Sc=kf;k.D=function(a){this.u!=this.g&&(this.o=this.se(this.o),this.u=this.g);var b=this.o;a?(a[0]=b[0],a[1]=b[1],a[2]=b[2],a[3]=b[3]):a=b;return a};k.Qb=function(a){return this.Td(a*a)};k.tb=function(a,b){this.Fc(dc(a,b));return this};function mf(a,b,c,d,e,f){for(var g=f?f:[],h=0;b<c;b+=d){var l=a[b],m=a[b+1];g[h++]=e[0]*l+e[2]*m+e[4];g[h++]=e[1]*l+e[3]*m+e[5]}f&&g.length!=h&&(g.length=h);return g}function nf(a,b,c,d,e,f){var g=f?f:[],h=0,l,m;for(l=0;l<b;l+=c)for(g[h++]=a[l]+d,g[h++]=a[l+1]+e,m=l+2;m<l+c;++m)g[h++]=a[m];f&&g.length!=h&&(g.length=h);return g};function of(){lf.call(this);this.la="XY";this.a=2;this.B=null}u(of,lf);function pf(a){var b;"XY"==a?b=2:"XYZ"==a||"XYM"==a?b=3:"XYZM"==a&&(b=4);return b}k=of.prototype;k.Sc=kf;k.se=function(a){return Ya(this.B,0,this.B.length,this.a,a)};k.cc=function(){return this.B.slice(0,this.a)};k.ia=function(){return this.B};k.dc=function(){return this.B.slice(this.B.length-this.a)};k.ec=function(){return this.la};
k.Td=function(a){this.l!=this.g&&(rb(this.i),this.f=0,this.l=this.g);if(0>a||this.f&&a<=this.f)return this;var b=a.toString();if(this.i.hasOwnProperty(b))return this.i[b];var c=this.od(a);if(c.ia().length<this.B.length)return this.i[b]=c;this.f=a;return this};k.od=function(){return this};k.sa=function(){return this.a};function qf(a,b,c){a.a=pf(b);a.la=b;a.B=c}
function rf(a,b,c,d){if(b)c=pf(b);else{for(b=0;b<d;++b)if(c.length)c=c[0];else{a.la="XY";a.a=2;return}c=c.length;var e;2==c?e="XY":3==c?e="XYZ":4==c&&(e="XYZM");b=e}a.la=b;a.a=c}k.Fc=function(a){this.B&&(a(this.B,this.B,this.a),this.s())};
k.rotate=function(a,b){var c=this.ia();if(c){for(var d=c.length,e=this.sa(),f=c?c:[],g=Math.cos(a),h=Math.sin(a),l=b[0],m=b[1],n=0,p=0;p<d;p+=e){var q=c[p]-l,r=c[p+1]-m;f[n++]=l+q*g-r*h;f[n++]=m+q*h+r*g;for(q=p+2;q<p+e;++q)f[n++]=c[q]}c&&f.length!=n&&(f.length=n);this.s()}};
k.scale=function(a,b,c){var d=b;void 0===d&&(d=a);var e=c;e||(e=kb(this.D()));if(c=this.ia()){b=c.length;for(var f=this.sa(),g=c?c:[],h=e[0],e=e[1],l=0,m=0;m<b;m+=f){var n=c[m]-h,p=c[m+1]-e;g[l++]=h+a*n;g[l++]=e+d*p;for(n=m+2;n<m+f;++n)g[l++]=c[n]}c&&g.length!=l&&(g.length=l);this.s()}};k.translate=function(a,b){var c=this.ia();c&&(nf(c,c.length,this.sa(),a,b,c),this.s())};function sf(a,b,c,d){for(var e=0,f=a[c-d],g=a[c-d+1];b<c;b+=d)var h=a[b],l=a[b+1],e=e+(g*h-f*l),f=h,g=l;return e/2}function tf(a,b,c,d){var e=0,f,g;f=0;for(g=c.length;f<g;++f){var h=c[f],e=e+sf(a,b,h,d);b=h}return e};function uf(a,b,c,d,e,f,g){var h=a[b],l=a[b+1],m=a[c]-h,n=a[c+1]-l;if(m||n)if(f=((e-h)*m+(f-l)*n)/(m*m+n*n),1<f)b=c;else if(0<f){for(e=0;e<d;++e)g[e]=Ea(a[b+e],a[c+e],f);g.length=d;return}for(e=0;e<d;++e)g[e]=a[b+e];g.length=d}function vf(a,b,c,d,e){var f=a[b],g=a[b+1];for(b+=d;b<c;b+=d){var h=a[b],l=a[b+1],f=Ba(f,g,h,l);f>e&&(e=f);f=h;g=l}return e}function wf(a,b,c,d,e){var f,g;f=0;for(g=c.length;f<g;++f){var h=c[f];e=vf(a,b,h,d,e);b=h}return e}
function xf(a,b,c,d,e,f,g,h,l,m,n){if(b==c)return m;var p;if(!e){p=Ba(g,h,a[b],a[b+1]);if(p<m){for(n=0;n<d;++n)l[n]=a[b+n];l.length=d;return p}return m}for(var q=n?n:[NaN,NaN],r=b+d;r<c;)if(uf(a,r-d,r,d,g,h,q),p=Ba(g,h,q[0],q[1]),p<m){m=p;for(n=0;n<d;++n)l[n]=q[n];l.length=d;r+=d}else r+=d*Math.max((Math.sqrt(p)-Math.sqrt(m))/e|0,1);if(f&&(uf(a,c-d,b,d,g,h,q),p=Ba(g,h,q[0],q[1]),p<m)){m=p;for(n=0;n<d;++n)l[n]=q[n];l.length=d}return m}
function yf(a,b,c,d,e,f,g,h,l,m,n){n=n?n:[NaN,NaN];var p,q;p=0;for(q=c.length;p<q;++p){var r=c[p];m=xf(a,b,r,d,e,f,g,h,l,m,n);b=r}return m};function zf(a,b){var c=0,d,e;d=0;for(e=b.length;d<e;++d)a[c++]=b[d];return c}function Af(a,b,c,d){var e,f;e=0;for(f=c.length;e<f;++e){var g=c[e],h;for(h=0;h<d;++h)a[b++]=g[h]}return b}function Bf(a,b,c,d,e){e=e?e:[];var f=0,g,h;g=0;for(h=c.length;g<h;++g)b=Af(a,b,c[g],d),e[f++]=b;e.length=f;return e};function Cf(a,b,c,d,e){e=void 0!==e?e:[];for(var f=0;b<c;b+=d)e[f++]=a.slice(b,b+d);e.length=f;return e}function Df(a,b,c,d,e){e=void 0!==e?e:[];var f=0,g,h;g=0;for(h=c.length;g<h;++g){var l=c[g];e[f++]=Cf(a,b,l,d,e[f]);b=l}e.length=f;return e};function Ef(a,b,c,d,e,f,g){var h=(c-b)/d;if(3>h){for(;b<c;b+=d)f[g++]=a[b],f[g++]=a[b+1];return g}var l=Array(h);l[0]=1;l[h-1]=1;c=[b,c-d];for(var m=0,n;0<c.length;){var p=c.pop(),q=c.pop(),r=0,v=a[q],x=a[q+1],y=a[p],A=a[p+1];for(n=q+d;n<p;n+=d){var B=Aa(a[n],a[n+1],v,x,y,A);B>r&&(m=n,r=B)}r>e&&(l[(m-b)/d]=1,q+d<m&&c.push(q,m),m+d<p&&c.push(m,p))}for(n=0;n<h;++n)l[n]&&(f[g++]=a[b+n*d],f[g++]=a[b+n*d+1]);return g}
function Ff(a,b,c,d,e,f,g,h){var l,m;l=0;for(m=c.length;l<m;++l){var n=c[l];a:{var p,q=a,r=n,v=d,x=e,y=f,A=g;if(b!=r){var B=x*Math.round(q[b]/x),aa=x*Math.round(q[b+1]/x);b+=v;y[A++]=B;y[A++]=aa;do if(p=x*Math.round(q[b]/x),g=x*Math.round(q[b+1]/x),b+=v,b==r){y[A++]=p;y[A++]=g;g=A;break a}while(p==B&&g==aa);for(;b<r;){var Ra,ra;Ra=x*Math.round(q[b]/x);ra=x*Math.round(q[b+1]/x);b+=v;if(Ra!=p||ra!=g){var Ka=p-B,C=g-aa,Na=Ra-B,wb=ra-aa;Ka*wb==C*Na&&(0>Ka&&Na<Ka||Ka==Na||0<Ka&&Na>Ka)&&(0>C&&wb<C||C==
wb||0<C&&wb>C)||(y[A++]=p,y[A++]=g,B=p,aa=g);p=Ra;g=ra}}y[A++]=p;y[A++]=g}g=A}h.push(g);b=n}return g};function Gf(a,b){of.call(this);this.c=this.j=-1;this.pa(a,b)}u(Gf,of);k=Gf.prototype;k.clone=function(){var a=new Gf(null);Hf(a,this.la,this.B.slice());return a};k.Hb=function(a,b,c,d){if(d<Pa(this.D(),a,b))return d;this.c!=this.g&&(this.j=Math.sqrt(vf(this.B,0,this.B.length,this.a,0)),this.c=this.g);return xf(this.B,0,this.B.length,this.a,this.j,!0,a,b,c,d)};k.jn=function(){return sf(this.B,0,this.B.length,this.a)};k.W=function(){return Cf(this.B,0,this.B.length,this.a)};
k.od=function(a){var b=[];b.length=Ef(this.B,0,this.B.length,this.a,a,b,0);a=new Gf(null);Hf(a,"XY",b);return a};k.S=function(){return"LinearRing"};k.Ya=function(){};k.pa=function(a,b){a?(rf(this,b,a,1),this.B||(this.B=[]),this.B.length=Af(this.B,0,a,this.a),this.s()):Hf(this,"XY",null)};function Hf(a,b,c){qf(a,b,c);a.s()};function E(a,b){of.call(this);this.pa(a,b)}u(E,of);k=E.prototype;k.clone=function(){var a=new E(null);a.ca(this.la,this.B.slice());return a};k.Hb=function(a,b,c,d){var e=this.B;a=Ba(a,b,e[0],e[1]);if(a<d){d=this.a;for(b=0;b<d;++b)c[b]=e[b];c.length=d;return a}return d};k.W=function(){return this.B?this.B.slice():[]};k.se=function(a){return Xa(this.B,a)};k.S=function(){return"Point"};k.Ya=function(a){return Sa(a,this.B[0],this.B[1])};
k.pa=function(a,b){a?(rf(this,b,a,0),this.B||(this.B=[]),this.B.length=zf(this.B,a),this.s()):this.ca("XY",null)};k.ca=function(a,b){qf(this,a,b);this.s()};function If(a,b,c,d,e){return!bb(e,function(e){return!Jf(a,b,c,d,e[0],e[1])})}function Jf(a,b,c,d,e,f){for(var g=0,h=a[c-d],l=a[c-d+1];b<c;b+=d){var m=a[b],n=a[b+1];l<=f?n>f&&0<(m-h)*(f-l)-(e-h)*(n-l)&&g++:n<=f&&0>(m-h)*(f-l)-(e-h)*(n-l)&&g--;h=m;l=n}return!!g}function Kf(a,b,c,d,e,f){if(!c.length||!Jf(a,b,c[0],d,e,f))return!1;var g;b=1;for(g=c.length;b<g;++b)if(Jf(a,c[b-1],c[b],d,e,f))return!1;return!0};function Lf(a,b,c,d,e,f,g){var h,l,m,n,p,q=e[f+1],r=[],v=c[0];m=a[v-d];p=a[v-d+1];for(h=b;h<v;h+=d){n=a[h];l=a[h+1];if(q<=p&&l<=q||p<=q&&q<=l)m=(q-p)/(l-p)*(n-m)+m,r.push(m);m=n;p=l}v=NaN;p=-Infinity;r.sort(ea);m=r[0];h=1;for(l=r.length;h<l;++h){n=r[h];var x=Math.abs(n-m);x>p&&(m=(m+n)/2,Kf(a,b,c,d,m,q)&&(v=m,p=x));m=n}isNaN(v)&&(v=e[f]);return g?(g.push(v,q),g):[v,q]};function Mf(a,b,c,d,e,f){for(var g=[a[b],a[b+1]],h=[],l;b+d<c;b+=d){h[0]=a[b+d];h[1]=a[b+d+1];if(l=e.call(f,g,h))return l;g[0]=h[0];g[1]=h[1]}return!1};function Nf(a,b,c,d,e){var f=Za(Ja(),a,b,c,d);return nb(e,f)?Ua(e,f)||f[0]>=e[0]&&f[2]<=e[2]||f[1]>=e[1]&&f[3]<=e[3]?!0:Mf(a,b,c,d,function(a,b){var c=!1,d=Va(e,a),f=Va(e,b);if(1===d||1===f)c=!0;else{var g=e[0],h=e[1],r=e[2],v=e[3],x=b[0],y=b[1],A=(y-a[1])/(x-a[0]);f&2&&!(d&2)&&(c=x-(y-v)/A,c=c>=g&&c<=r);c||!(f&4)||d&4||(c=y-(x-r)*A,c=c>=h&&c<=v);c||!(f&8)||d&8||(c=x-(y-h)/A,c=c>=g&&c<=r);c||!(f&16)||d&16||(c=y-(x-g)*A,c=c>=h&&c<=v)}return c}):!1}
function Of(a,b,c,d,e){var f=c[0];if(!(Nf(a,b,f,d,e)||Jf(a,b,f,d,e[0],e[1])||Jf(a,b,f,d,e[0],e[3])||Jf(a,b,f,d,e[2],e[1])||Jf(a,b,f,d,e[2],e[3])))return!1;if(1===c.length)return!0;b=1;for(f=c.length;b<f;++b)if(If(a,c[b-1],c[b],d,e))return!1;return!0};function Pf(a,b,c,d){for(var e=0,f=a[c-d],g=a[c-d+1];b<c;b+=d)var h=a[b],l=a[b+1],e=e+(h-f)*(l+g),f=h,g=l;return 0<e}function Qf(a,b,c,d){var e=0;d=void 0!==d?d:!1;var f,g;f=0;for(g=b.length;f<g;++f){var h=b[f],e=Pf(a,e,h,c);if(!f){if(d&&e||!d&&!e)return!1}else if(d&&!e||!d&&e)return!1;e=h}return!0}
function Rf(a,b,c,d,e){e=void 0!==e?e:!1;var f,g;f=0;for(g=c.length;f<g;++f){var h=c[f],l=Pf(a,b,h,d);if(f?e&&!l||!e&&l:e&&l||!e&&!l)for(var l=a,m=h,n=d;b<m-n;){var p;for(p=0;p<n;++p){var q=l[b+p];l[b+p]=l[m-n+p];l[m-n+p]=q}b+=n;m-=n}b=h}return b}function Sf(a,b,c,d){var e=0,f,g;f=0;for(g=b.length;f<g;++f)e=Rf(a,e,b[f],c,d);return e};function F(a,b){of.call(this);this.c=[];this.v=-1;this.A=null;this.I=this.C=this.G=-1;this.j=null;this.pa(a,b)}u(F,of);k=F.prototype;k.kk=function(a){this.B?ha(this.B,a.ia()):this.B=a.ia().slice();this.c.push(this.B.length);this.s()};k.clone=function(){var a=new F(null);a.ca(this.la,this.B.slice(),this.c.slice());return a};
k.Hb=function(a,b,c,d){if(d<Pa(this.D(),a,b))return d;this.C!=this.g&&(this.G=Math.sqrt(wf(this.B,0,this.c,this.a,0)),this.C=this.g);return yf(this.B,0,this.c,this.a,this.G,!0,a,b,c,d)};k.Sc=function(a,b){return Kf(this.gc(),0,this.c,this.a,a,b)};k.mn=function(){return tf(this.gc(),0,this.c,this.a)};k.W=function(a){var b;void 0!==a?(b=this.gc().slice(),Rf(b,0,this.c,this.a,a)):b=this.B;return Df(b,0,this.c,this.a)};k.Sb=function(){return this.c};
function Tf(a){if(a.v!=a.g){var b=kb(a.D());a.A=Lf(a.gc(),0,a.c,a.a,b,0);a.v=a.g}return a.A}k.Ok=function(){return new E(Tf(this))};k.Uk=function(){return this.c.length};k.vh=function(a){if(0>a||this.c.length<=a)return null;var b=new Gf(null);Hf(b,this.la,this.B.slice(a?this.c[a-1]:0,this.c[a]));return b};k.Oc=function(){var a=this.la,b=this.B,c=this.c,d=[],e=0,f,g;f=0;for(g=c.length;f<g;++f){var h=c[f],l=new Gf(null);Hf(l,a,b.slice(e,h));d.push(l);e=h}return d};
k.gc=function(){if(this.I!=this.g){var a=this.B;Qf(a,this.c,this.a)?this.j=a:(this.j=a.slice(),this.j.length=Rf(this.j,0,this.c,this.a));this.I=this.g}return this.j};k.od=function(a){var b=[],c=[];b.length=Ff(this.B,0,this.c,this.a,Math.sqrt(a),b,0,c);a=new F(null);a.ca("XY",b,c);return a};k.S=function(){return"Polygon"};k.Ya=function(a){return Of(this.gc(),0,this.c,this.a,a)};
k.pa=function(a,b){if(a){rf(this,b,a,2);this.B||(this.B=[]);var c=Bf(this.B,0,a,this.a,this.c);this.B.length=c.length?c[c.length-1]:0;this.s()}else this.ca("XY",null,this.c)};k.ca=function(a,b,c){qf(this,a,b);this.c=c;this.s()};function Uf(a,b,c,d){var e=d?d:32;d=[];var f;for(f=0;f<e;++f)ha(d,a.offset(b,c,2*Math.PI*f/e));d.push(d[0],d[1]);a=new F(null);a.ca("XY",d,[d.length]);return a}
function Vf(a){var b=a[0],c=a[1],d=a[2];a=a[3];b=[b,c,b,a,d,a,d,c,b,c];c=new F(null);c.ca("XY",b,[b.length]);return c}function Wf(a,b,c){var d=b?b:32,e=a.sa();b=a.la;for(var f=new F(null,b),d=e*(d+1),e=Array(d),g=0;g<d;g++)e[g]=0;f.ca(b,e,[e.length]);Xf(f,a.za(),a.Yd(),c);return f}function Xf(a,b,c,d){var e=a.ia(),f=a.la,g=a.sa(),h=a.Sb(),l=e.length/g-1;d=d?d:0;for(var m,n,p=0;p<=l;++p)n=p*g,m=d+2*Da(p,l)*Math.PI/l,e[n]=b[0]+c*Math.cos(m),e[n+1]=b[1]+c*Math.sin(m);a.ca(f,e,h)};function G(a){Qc.call(this);a=qb({},a);this.j=[0,0];this.c=[];this.vf=this.vf.bind(this);this.o=Zb(a.projection);Yf(this,a)}u(G,Qc);
function Yf(a,b){var c={};c.center=void 0!==b.center?b.center:null;var d,e,f,g=void 0!==b.minZoom?b.minZoom:0;d=void 0!==b.maxZoom?b.maxZoom:28;var h=void 0!==b.zoomFactor?b.zoomFactor:2;if(void 0!==b.resolutions)d=b.resolutions,e=d[0],f=d[d.length-1],d=Pe(d);else{e=Zb(b.projection);f=e.D();var l=(f?Math.max(ib(f),jb(f)):360*xb.degrees/e.uc())/256/Math.pow(2,0),m=l/Math.pow(2,28);e=b.maxResolution;void 0!==e?g=0:e=l/Math.pow(h,g);f=b.minResolution;void 0===f&&(f=void 0!==b.maxZoom?void 0!==b.maxResolution?
e/Math.pow(h,d):l/Math.pow(h,d):m);d=g+Math.floor(Math.log(e/f)/Math.log(h));f=e/Math.pow(h,d-g);d=Qe(h,e,d-g)}a.a=e;a.i=f;a.C=h;a.f=b.resolutions;a.l=g;(void 0!==b.enableRotation?b.enableRotation:1)?(g=b.constrainRotation,g=void 0===g||!0===g?Ue():!1===g?Se:"number"===typeof g?Te(g):Se):g=Re;a.v=new gd(void 0!==b.extent?yc(b.extent):zc,d,g);void 0!==b.resolution?c.resolution=b.resolution:void 0!==b.zoom&&(c.resolution=a.constrainResolution(a.a,b.zoom-a.l));c.rotation=void 0!==b.rotation?b.rotation:
0;a.H(c);a.A=b}function Zf(a,b){var c=qb({},a.A);void 0!==c.resolution?c.resolution=a.Ra():c.zoom=a.Ah();c.center=a.za();c.rotation=a.Sa();return qb({},c,b)}k=G.prototype;
k.animate=function(a){var b=Date.now(),c=this.za().slice(),d=this.Ra(),e=this.Sa(),f=arguments.length,g;1<f&&"function"===typeof arguments[f-1]&&(g=arguments[f-1],--f);for(var h=[],l=0;l<f;++l){var m=arguments[l],n={start:b,complete:!1,anchor:m.anchor,duration:void 0!==m.duration?m.duration:1E3,easing:m.easing||qd};m.center&&(n.Jg=c,n.Lg=m.center,c=n.Lg);void 0!==m.zoom?(n.sf=d,n.Bd=this.constrainResolution(this.a,m.zoom-this.l,0),d=n.Bd):m.resolution&&(n.sf=d,n.Bd=m.resolution,d=n.Bd);void 0!==m.rotation&&
(n.Kg=e,n.tf=m.rotation,e=n.tf);n.jd=g;b+=n.duration;h.push(n)}this.c.push(h);$f(this,0,1);this.vf()};k.Kc=function(){return 0<ag(this)[0]};k.kd=function(){$f(this,0,-ag(this)[0]);for(var a=0,b=this.c.length;a<b;++a){var c=this.c[a];c[0].jd&&c[0].jd(!1)}this.c.length=0};
k.vf=function(){void 0!==this.u&&(cancelAnimationFrame(this.u),this.u=void 0);if(this.Kc()){for(var a=Date.now(),b=!1,c=this.c.length-1;0<=c;--c){for(var d=this.c[c],e=!0,f=0,g=d.length;f<g;++f){var h=d[f];if(!h.complete){b=a-h.start;b=0<h.duration?b/h.duration:1;1<=b?(h.complete=!0,b=1):e=!1;b=h.easing(b);if(h.Jg){var l=h.Jg[0],m=h.Jg[1];this.set("center",[l+b*(h.Lg[0]-l),m+b*(h.Lg[1]-m)])}h.sf&&h.Bd&&(l=1===b?h.Bd:h.sf+b*(h.Bd-h.sf),h.anchor&&this.set("center",bg(this,l,h.anchor)),this.set("resolution",
l));void 0!==h.Kg&&void 0!==h.tf&&(b=1===b?h.tf:h.Kg+b*(h.tf-h.Kg),h.anchor&&this.set("center",cg(this,b,h.anchor)),this.set("rotation",b));b=!0;if(!h.complete)break}}e&&(this.c[c]=null,$f(this,0,-1),(d=d[0].jd)&&d(!0))}this.c=this.c.filter(Boolean);b&&void 0===this.u&&(this.u=requestAnimationFrame(this.vf))}};function cg(a,b,c){var d,e=a.za();void 0!==e&&(d=[e[0]-c[0],e[1]-c[1]],cf(d,b-a.Sa()),Xe(d,c));return d}
function bg(a,b,c){var d,e=a.za();a=a.Ra();void 0!==e&&void 0!==a&&(d=[c[0]-b*(c[0]-e[0])/a,c[1]-b*(c[1]-e[1])/a]);return d}function dg(a){var b=[100,100];a='.ol-viewport[data-view="'+w(a)+'"]';if(a=document.querySelector(a))a=getComputedStyle(a),b[0]=parseInt(a.width,10),b[1]=parseInt(a.height,10);return b}k.Gc=function(a){return this.v.center(a)};k.constrainResolution=function(a,b,c){return this.v.resolution(a,b||0,c||0)};k.constrainRotation=function(a,b){return this.v.rotation(a,b||0)};k.za=function(){return this.get("center")};
function ag(a,b){return void 0!==b?(b[0]=a.j[0],b[1]=a.j[1],b):a.j.slice()}k.hd=function(a){a=a||dg(this);var b=this.za();sa(b,1);var c=this.Ra();sa(void 0!==c,2);var d=this.Sa();sa(void 0!==d,3);return lb(b,c,d,a)};k.Hm=function(){return this.a};k.Jm=function(){return this.i};k.Im=function(){return this.Be(this.i)};k.Up=function(a){Yf(this,Zf(this,{maxZoom:a}))};k.Km=function(){return this.Be(this.a)};k.Vp=function(a){Yf(this,Zf(this,{minZoom:a}))};k.Lm=function(){return this.o};k.Ra=function(){return this.get("resolution")};
k.Mm=function(){return this.f};function eg(a,b){return Math.max(ib(a)/b[0],jb(a)/b[1])}function fg(a){var b=a.a,c=Math.log(b/a.i)/Math.log(2);return function(a){return b/Math.pow(2,a*c)}}k.Sa=function(){return this.get("rotation")};function gg(a){var b=a.a,c=Math.log(b/a.i)/Math.log(2);return function(a){return Math.log(b/a)/Math.log(2)/c}}k.V=function(){var a=this.za(),b=this.o,c=this.Ra(),d=this.Sa();return{center:a.slice(),projection:void 0!==b?b:null,resolution:c,rotation:d}};
k.Ah=function(){var a,b=this.Ra();void 0!==b&&(a=this.Be(b));return a};k.Be=function(a){var b;if(a>=this.i&&a<=this.a){b=this.l||0;var c,d;if(this.f){d=ga(this.f,a,1);b+=d;if(d==this.f.length-1)return b;c=this.f[d];d=c/this.f[d+1]}else c=this.a,d=this.C;b+=Math.log(c/a)/Math.log(d)}return b};
k.Mf=function(a,b){var c=b||{},d=c.size;d||(d=dg(this));var e;a instanceof of?"Circle"===a.S()?(a=a.D(),e=Vf(a),e.rotate(this.Sa(),kb(a))):e=a:(sa(Array.isArray(a),24),sa(!hb(a),25),e=Vf(a));var f=c.padding?c.padding:[0,0,0,0],g=void 0!==c.constrainResolution?c.constrainResolution:!0,h=void 0!==c.nearest?c.nearest:!1,l;void 0!==c.minResolution?l=c.minResolution:void 0!==c.maxZoom?l=this.constrainResolution(this.a,c.maxZoom-this.l,0):l=0;var m=e.ia(),n=this.Sa(),p=Math.cos(-n),n=Math.sin(-n),q=Infinity,
r=Infinity,v=-Infinity,x=-Infinity;e=e.sa();for(var y=0,A=m.length;y<A;y+=e)var B=m[y]*p-m[y+1]*n,aa=m[y]*n+m[y+1]*p,q=Math.min(q,B),r=Math.min(r,aa),v=Math.max(v,B),x=Math.max(x,aa);d=eg([q,r,v,x],[d[0]-f[1]-f[3],d[1]-f[0]-f[2]]);d=isNaN(d)?l:Math.max(d,l);g&&(g=this.constrainResolution(d,0,0),!h&&g<d&&(g=this.constrainResolution(g,-1,0)),d=g);n=-n;h=(q+v)/2+(f[1]-f[3])/2*d;f=(r+x)/2+(f[0]-f[2])/2*d;p=[h*p-f*n,f*p+h*n];void 0!==c.duration?this.animate({resolution:d,center:p,duration:c.duration,easing:c.easing}):
(this.$c(d),this.lb(p))};k.qk=function(a,b,c){var d=this.Sa(),e=Math.cos(-d),d=Math.sin(-d),f=a[0]*e-a[1]*d;a=a[1]*e+a[0]*d;var g=this.Ra(),f=f+(b[0]/2-c[0])*g;a+=(c[1]-b[1]/2)*g;d=-d;this.lb([f*e-a*d,a*e+f*d])};function hg(a){return!!a.za()&&void 0!==a.Ra()}k.rotate=function(a,b){if(void 0!==b){var c=cg(this,a,b);this.lb(c)}this.Ne(a)};k.lb=function(a){this.set("center",a);this.Kc()&&this.kd()};function $f(a,b,c){a.j[b]+=c;a.s()}k.$c=function(a){this.set("resolution",a);this.Kc()&&this.kd()};
k.Ne=function(a){this.set("rotation",a);this.Kc()&&this.kd()};k.aq=function(a){a=this.constrainResolution(this.a,a-this.l,0);this.$c(a)};function ig(a,b,c){this.i=a;this.c=b;this.f=c;this.b=[];this.a=this.g=0}function jg(a){a.b.length=0;a.g=0;a.a=0};function kg(a){Qc.call(this);this.v=null;this.Ia(!0);this.handleEvent=a.handleEvent}u(kg,Qc);kg.prototype.c=function(){return this.get("active")};kg.prototype.i=function(){return this.v};kg.prototype.Ia=function(a){this.set("active",a)};kg.prototype.setMap=function(a){this.v=a};function lg(a,b,c,d){if(void 0!==b){var e=a.Sa(),f=a.za();void 0!==e&&f&&0<d?a.animate({rotation:b,anchor:c,duration:d,easing:pd}):a.rotate(b,c)}}
function mg(a,b,c,d){var e=a.Ra();b=a.constrainResolution(e,b,0);if(c&&void 0!==b&&b!==e){var f=a.za();c=bg(a,b,c);c=a.Gc(c);c=[(b*f[0]-e*c[0])/(b-e),(b*f[1]-e*c[1])/(b-e)]}ng(a,b,c,d)}function ng(a,b,c,d){if(b){var e=a.Ra(),f=a.za();void 0!==e&&f&&b!==e&&d?a.animate({resolution:b,anchor:c,duration:d,easing:pd}):(c&&(c=bg(a,b,c),a.lb(c)),a.$c(b))}};function og(a){a=a?a:{};this.a=a.delta?a.delta:1;kg.call(this,{handleEvent:pg});this.f=void 0!==a.duration?a.duration:250}u(og,kg);function pg(a){var b=!1,c=a.originalEvent;if("dblclick"==a.type){var b=a.coordinate,c=c.shiftKey?-this.a:this.a,d=a.map.$();mg(d,c,b,this.f);a.preventDefault();b=!0}return!b};function qg(a){a=a.originalEvent;return a.altKey&&!(a.metaKey||a.ctrlKey)&&a.shiftKey}function rg(a){a=a.originalEvent;return!a.button&&!(Rd&&Sd&&a.ctrlKey)}function sg(a){return"pointermove"==a.type}function tg(a){return"singleclick"==a.type}function vg(a){a=a.originalEvent;return!a.altKey&&!(a.metaKey||a.ctrlKey)&&!a.shiftKey}function wg(a){a=a.originalEvent;return!a.altKey&&!(a.metaKey||a.ctrlKey)&&a.shiftKey}
function xg(a){a=a.originalEvent.target.tagName;return"INPUT"!==a&&"SELECT"!==a&&"TEXTAREA"!==a}function yg(a){sa(a.b,56);return"mouse"==a.b.pointerType}function zg(a){a=a.b;return a.isPrimary&&0===a.button};function Ag(a){a=a?a:{};kg.call(this,{handleEvent:a.handleEvent?a.handleEvent:Bg});this.wf=a.handleDownEvent?a.handleDownEvent:kf;this.Ef=a.handleDragEvent?a.handleDragEvent:oa;this.Ff=a.handleMoveEvent?a.handleMoveEvent:oa;this.nk=a.handleUpEvent?a.handleUpEvent:kf;this.A=!1;this.ea={};this.l=[]}u(Ag,kg);function Cg(a){for(var b=a.length,c=0,d=0,e=0;e<b;e++)c+=a[e].clientX,d+=a[e].clientY;return[c/b,d/b]}
function Bg(a){if(!(a instanceof Kd))return!0;var b=!1,c=a.type;if("pointerdown"===c||"pointerdrag"===c||"pointerup"===c)c=a.b,"pointerup"==a.type?delete this.ea[c.pointerId]:"pointerdown"==a.type?this.ea[c.pointerId]=c:c.pointerId in this.ea&&(this.ea[c.pointerId]=c),this.l=sb(this.ea);this.A?"pointerdrag"==a.type?this.Ef(a):"pointerup"==a.type&&(this.A=this.nk(a)&&0<this.l.length):"pointerdown"==a.type?(this.A=a=this.wf(a),b=this.bd(a)):"pointermove"==a.type&&this.Ff(a);return!b}
Ag.prototype.bd=function(a){return a};function Dg(a){Ag.call(this,{handleDownEvent:Eg,handleDragEvent:Fg,handleUpEvent:Gg});a=a?a:{};this.a=a.kinetic;this.f=null;this.u=a.condition?a.condition:vg;this.j=!1}u(Dg,Ag);function Fg(a){var b=this.l,c=Cg(b);if(b.length==this.o){if(this.a&&this.a.b.push(c[0],c[1],Date.now()),this.f){var d=this.f[0]-c[0],e=c[1]-this.f[1];a=a.map.$();var f=a.V(),d=[d,e];df(d,f.resolution);cf(d,f.rotation);Xe(d,f.center);d=a.Gc(d);a.lb(d)}}else this.a&&jg(this.a);this.f=c;this.o=b.length}
function Gg(a){var b=a.map;a=b.$();if(this.l.length)return this.a&&jg(this.a),this.f=null,!0;var c;if(c=!this.j&&this.a)if(c=this.a,6>c.b.length)c=!1;else{var d=Date.now()-c.f,e=c.b.length-3;if(c.b[e+2]<d)c=!1;else{for(var f=e-3;0<f&&c.b[f+2]>d;)f-=3;var d=c.b[e+2]-c.b[f+2],g=c.b[e]-c.b[f],e=c.b[e+1]-c.b[f+1];c.g=Math.atan2(e,g);c.a=Math.sqrt(g*g+e*e)/d;c=c.a>c.c}}c&&(c=this.a,c=(c.c-c.a)/c.i,e=this.a.g,f=a.za(),f=b.Ka(f),b=b.Xa([f[0]-c*Math.cos(e),f[1]-c*Math.sin(e)]),a.animate({center:a.Gc(b),duration:500,
easing:pd}));$f(a,1,-1);return!1}function Eg(a){if(0<this.l.length&&this.u(a)){var b=a.map.$();this.f=null;this.A||$f(b,1,1);ag(b)[0]&&b.lb(a.frameState.viewState.center);this.a&&jg(this.a);this.j=1<this.l.length;return!0}return!1}Dg.prototype.bd=kf;function Hg(a){a=a?a:{};Ag.call(this,{handleDownEvent:Ig,handleDragEvent:Jg,handleUpEvent:Kg});this.f=a.condition?a.condition:qg;this.a=void 0;this.j=void 0!==a.duration?a.duration:250}u(Hg,Ag);function Jg(a){if(yg(a)){var b=a.map,c=b.Nb();a=a.pixel;c=Math.atan2(c[1]/2-a[1],a[0]-c[0]/2);if(void 0!==this.a){a=c-this.a;var b=b.$(),d=b.Sa();lg(b,d-a)}this.a=c}}function Kg(a){if(!yg(a))return!0;a=a.map.$();$f(a,1,-1);var b=a.Sa(),c=this.j,b=a.constrainRotation(b,0);lg(a,b,void 0,c);return!1}
function Ig(a){return yg(a)&&rg(a)&&this.f(a)?($f(a.map.$(),1,1),this.a=void 0,!0):!1}Hg.prototype.bd=kf;function Lg(a){this.Ic=null;this.a=document.createElement("div");this.a.style.position="absolute";this.a.className="ol-box "+a;this.g=this.c=this.b=null}u(Lg,Jc);Lg.prototype.ra=function(){this.setMap(null)};function Mg(a){var b=a.c,c=a.g;a=a.a.style;a.left=Math.min(b[0],c[0])+"px";a.top=Math.min(b[1],c[1])+"px";a.width=Math.abs(c[0]-b[0])+"px";a.height=Math.abs(c[1]-b[1])+"px"}
Lg.prototype.setMap=function(a){if(this.b){this.b.A.removeChild(this.a);var b=this.a.style;b.left=b.top=b.width=b.height="inherit"}(this.b=a)&&this.b.A.appendChild(this.a)};function Ng(a){var b=a.c,c=a.g,b=[b,[b[0],c[1]],c,[c[0],b[1]]].map(a.b.Xa,a.b);b[4]=b[0].slice();a.Ic?a.Ic.pa([b]):a.Ic=new F([b])}Lg.prototype.U=function(){return this.Ic};function Og(a){Ag.call(this,{handleDownEvent:Pg,handleDragEvent:Qg,handleUpEvent:Rg});a=a?a:{};this.a=new Lg(a.className||"ol-dragbox");this.u=void 0!==a.minArea?a.minArea:64;this.f=null;this.C=a.condition?a.condition:jf;this.o=a.boxEndCondition?a.boxEndCondition:Sg}u(Og,Ag);function Sg(a,b,c){a=c[0]-b[0];b=c[1]-b[1];return a*a+b*b>=this.u}function Qg(a){if(yg(a)){var b=this.a,c=a.pixel;b.c=this.f;b.g=c;Ng(b);Mg(b);this.b(new Tg(Ug,a.coordinate,a))}}Og.prototype.U=function(){return this.a.U()};
Og.prototype.j=oa;function Rg(a){if(!yg(a))return!0;this.a.setMap(null);this.o(a,this.f,a.pixel)&&(this.j(a),this.b(new Tg(Vg,a.coordinate,a)));return!1}function Pg(a){if(yg(a)&&rg(a)&&this.C(a)){this.f=a.pixel;this.a.setMap(a.map);var b=this.a,c=this.f;b.c=this.f;b.g=c;Ng(b);Mg(b);this.b(new Tg(Wg,a.coordinate,a));return!0}return!1}var Wg="boxstart",Ug="boxdrag",Vg="boxend";function Tg(a,b,c){Lc.call(this,a);this.coordinate=b;this.mapBrowserEvent=c}u(Tg,Lc);function Xg(a){a=a?a:{};var b=a.condition?a.condition:wg;this.G=void 0!==a.duration?a.duration:200;this.I=void 0!==a.out?a.out:!1;Og.call(this,{condition:b,className:a.className||"ol-dragzoom"})}u(Xg,Og);
Xg.prototype.j=function(){var a=this.v,b=a.$(),c=a.Nb(),d=this.U().D();if(this.I){var e=b.hd(c),d=[a.Ka(cb(d)),a.Ka(eb(d))],a=Wa(Infinity,Infinity,-Infinity,-Infinity,void 0),f,g;f=0;for(g=d.length;f<g;++f)La(a,d[f]);ob(e,1/eg(a,c));d=e}c=b.constrainResolution(eg(d,c));e=kb(d);e=b.Gc(e);b.animate({resolution:c,center:e,duration:this.G,easing:pd})};function Yg(a){kg.call(this,{handleEvent:Zg});a=a||{};this.a=function(a){return vg(a)&&xg(a)};this.f=a.condition?a.condition:this.a;this.j=void 0!==a.duration?a.duration:100;this.l=void 0!==a.pixelDelta?a.pixelDelta:128}u(Yg,kg);
function Zg(a){var b=!1;if("keydown"==a.type){var c=a.originalEvent.keyCode;if(this.f(a)&&(40==c||37==c||39==c||38==c)){var b=a.map.$(),d=b.Ra()*this.l,e=0,f=0;40==c?f=-d:37==c?e=-d:39==c?e=d:f=d;d=[e,f];cf(d,b.Sa());c=this.j;if(e=b.za())d=b.Gc([e[0]+d[0],e[1]+d[1]]),c?b.animate({duration:c,easing:rd,center:d}):b.lb(d);a.preventDefault();b=!0}}return!b};function $g(a){kg.call(this,{handleEvent:ah});a=a?a:{};this.f=a.condition?a.condition:xg;this.a=a.delta?a.delta:1;this.j=void 0!==a.duration?a.duration:100}u($g,kg);function ah(a){var b=!1;if("keydown"==a.type||"keypress"==a.type){var c=a.originalEvent.charCode;!this.f(a)||43!=c&&45!=c||(b=43==c?this.a:-this.a,c=a.map.$(),mg(c,b,void 0,this.j),a.preventDefault(),b=!0)}return!b};function bh(a){kg.call(this,{handleEvent:ch});a=a||{};this.j=0;this.A=void 0!==a.duration?a.duration:250;this.ea=void 0!==a.timeout?a.timeout:80;this.C=void 0!==a.useAnchor?a.useAnchor:!0;this.Z=a.constrainResolution||!1;this.a=null;this.o=this.l=this.u=this.f=void 0}u(bh,kg);
function ch(a){var b=a.type;if("wheel"!==b&&"mousewheel"!==b)return!0;a.preventDefault();var b=a.map,c=a.originalEvent;this.C&&(this.a=a.coordinate);var d;"wheel"==a.type?(d=c.deltaY,Pd&&c.deltaMode===WheelEvent.DOM_DELTA_PIXEL&&(d/=Td),c.deltaMode===WheelEvent.DOM_DELTA_LINE&&(d*=40)):"mousewheel"==a.type&&(d=-c.wheelDeltaY,Qd&&(d/=3));if(0===d)return!1;a=Date.now();void 0===this.f&&(this.f=a);if(!this.l||400<a-this.f)this.l=4>Math.abs(d)?dh:eh;if(this.l===dh){b=b.$();this.o?clearTimeout(this.o):
$f(b,1,1);this.o=setTimeout(this.G.bind(this),400);var c=b.Ra()*Math.pow(2,d/300),e=b.i,f=b.a,g=0;c<e?(c=Math.max(c,e/1.5),g=1):c>f&&(c=Math.min(c,1.5*f),g=-1);if(this.a){var h=bg(b,c,this.a);b.lb(b.Gc(h))}b.$c(c);!g&&this.Z&&b.animate({resolution:b.constrainResolution(c,0<d?-1:1),easing:pd,anchor:this.a,duration:this.A});0<g?b.animate({resolution:e,easing:pd,anchor:this.a,duration:500}):0>g&&b.animate({resolution:f,easing:pd,anchor:this.a,duration:500});this.f=a;return!1}this.j+=d;d=Math.max(this.ea-
(a-this.f),0);clearTimeout(this.u);this.u=setTimeout(this.I.bind(this,b),d);return!1}bh.prototype.G=function(){this.o=void 0;$f(this.v.$(),1,-1)};bh.prototype.I=function(a){a=a.$();a.Kc()&&a.kd();mg(a,-xa(this.j,-1,1),this.a,this.A);this.l=void 0;this.j=0;this.a=null;this.u=this.f=void 0};bh.prototype.T=function(a){this.C=a;a||(this.a=null)};var dh="trackpad",eh="wheel";function fh(a){Ag.call(this,{handleDownEvent:gh,handleDragEvent:hh,handleUpEvent:ih});a=a||{};this.f=null;this.j=void 0;this.a=!1;this.o=0;this.C=void 0!==a.threshold?a.threshold:.3;this.u=void 0!==a.duration?a.duration:250}u(fh,Ag);
function hh(a){var b=0,c=this.l[0],d=this.l[1],c=Math.atan2(d.clientY-c.clientY,d.clientX-c.clientX);void 0!==this.j&&(b=c-this.j,this.o+=b,!this.a&&Math.abs(this.o)>this.C&&(this.a=!0));this.j=c;a=a.map;c=a.c.getBoundingClientRect();d=Cg(this.l);d[0]-=c.left;d[1]-=c.top;this.f=a.Xa(d);this.a&&(c=a.$(),d=c.Sa(),a.render(),lg(c,d+b,this.f))}function ih(a){if(2>this.l.length){a=a.map.$();$f(a,1,-1);if(this.a){var b=a.Sa(),c=this.f,d=this.u,b=a.constrainRotation(b,0);lg(a,b,c,d)}return!1}return!0}
function gh(a){return 2<=this.l.length?(a=a.map,this.f=null,this.j=void 0,this.a=!1,this.o=0,this.A||$f(a.$(),1,1),!0):!1}fh.prototype.bd=kf;function jh(a){Ag.call(this,{handleDownEvent:kh,handleDragEvent:lh,handleUpEvent:nh});a=a?a:{};this.o=a.constrainResolution||!1;this.f=null;this.u=void 0!==a.duration?a.duration:400;this.a=void 0;this.j=1}u(jh,Ag);
function lh(a){var b=1,c=this.l[0],d=this.l[1],e=c.clientX-d.clientX,c=c.clientY-d.clientY,e=Math.sqrt(e*e+c*c);void 0!==this.a&&(b=this.a/e);this.a=e;a=a.map;var e=a.$(),d=e.Ra(),f=e.a,g=e.i,c=d*b;c>f?(b=f/d,c=f):c<g&&(b=g/d,c=g);1!=b&&(this.j=b);b=a.c.getBoundingClientRect();d=Cg(this.l);d[0]-=b.left;d[1]-=b.top;this.f=a.Xa(d);a.render();ng(e,c,this.f)}
function nh(a){if(2>this.l.length){a=a.map.$();$f(a,1,-1);var b=a.Ra();if(this.o||b<a.i||b>a.a){var c=this.f,d=this.u,b=a.constrainResolution(b,0,this.j-1);ng(a,b,c,d)}return!1}return!0}function kh(a){return 2<=this.l.length?(a=a.map,this.f=null,this.a=void 0,this.j=1,this.A||$f(a.$(),1,1),!0):!1}jh.prototype.bd=kf;function oh(a){a=a?a:{};var b=new D,c=new ig(-.005,.05,100);(void 0!==a.altShiftDragRotate?a.altShiftDragRotate:1)&&b.push(new Hg);(void 0!==a.doubleClickZoom?a.doubleClickZoom:1)&&b.push(new og({delta:a.zoomDelta,duration:a.zoomDuration}));(void 0!==a.dragPan?a.dragPan:1)&&b.push(new Dg({kinetic:c}));(void 0!==a.pinchRotate?a.pinchRotate:1)&&b.push(new fh);(void 0!==a.pinchZoom?a.pinchZoom:1)&&b.push(new jh({constrainResolution:a.constrainResolution,duration:a.zoomDuration}));if(void 0!==a.keyboard?
a.keyboard:1)b.push(new Yg),b.push(new $g({delta:a.zoomDelta,duration:a.zoomDuration}));(void 0!==a.mouseWheelZoom?a.mouseWheelZoom:1)&&b.push(new bh({constrainResolution:a.constrainResolution,duration:a.zoomDuration}));(void 0!==a.shiftDragZoom?a.shiftDragZoom:1)&&b.push(new Xg({duration:a.zoomDuration}));return b};function ph(a){Qc.call(this);var b=qb({},a);b.opacity=void 0!==a.opacity?a.opacity:1;b.visible=void 0!==a.visible?a.visible:!0;b.zIndex=void 0!==a.zIndex?a.zIndex:0;b.maxResolution=void 0!==a.maxResolution?a.maxResolution:Infinity;b.minResolution=void 0!==a.minResolution?a.minResolution:0;this.H(b);this.a={layer:this,Ie:!0}}u(ph,Qc);
function qh(a){a.a.opacity=xa(a.jc(),0,1);a.a.uj=a.Vf();a.a.visible=a.Lb();a.a.extent=a.D();a.a.zIndex=a.Aa();a.a.maxResolution=a.hc();a.a.minResolution=Math.max(a.ic(),0);return a.a}k=ph.prototype;k.D=function(){return this.get("extent")};k.hc=function(){return this.get("maxResolution")};k.ic=function(){return this.get("minResolution")};k.jc=function(){return this.get("opacity")};k.Lb=function(){return this.get("visible")};k.Aa=function(){return this.get("zIndex")};
k.xc=function(a){this.set("extent",a)};k.Cc=function(a){this.set("maxResolution",a)};k.Dc=function(a){this.set("minResolution",a)};k.yc=function(a){this.set("opacity",a)};k.zc=function(a){this.set("visible",a)};k.Xb=function(a){this.set("zIndex",a)};function rh(a){var b=a||{};a=qb({},b);delete a.layers;b=b.layers;ph.call(this,a);this.i=[];this.c={};z(this,Sc(sh),this.Cl,this);b?Array.isArray(b)?b=new D(b.slice(),{unique:!0}):sa(b instanceof D,43):b=new D(void 0,{unique:!0});this.pi(b)}u(rh,ph);k=rh.prototype;k.Gd=function(){};k.Ee=function(){this.Lb()&&this.s()};
k.Cl=function(){this.i.forEach(Bc);this.i.length=0;var a=this.sd();this.i.push(z(a,"add",this.Bl,this),z(a,"remove",this.Dl,this));for(var b in this.c)this.c[b].forEach(Bc);rb(this.c);var a=a.a,c,d;b=0;for(c=a.length;b<c;b++)d=a[b],this.c[w(d).toString()]=[z(d,"propertychange",this.Ee,this),z(d,"change",this.Ee,this)];this.s()};k.Bl=function(a){a=a.element;var b=w(a).toString();this.c[b]=[z(a,"propertychange",this.Ee,this),z(a,"change",this.Ee,this)];this.s()};
k.Dl=function(a){a=w(a.element).toString();this.c[a].forEach(Bc);delete this.c[a];this.s()};k.sd=function(){return this.get(sh)};k.pi=function(a){this.set(sh,a)};
k.Tf=function(a){var b=void 0!==a?a:[],c=b.length;this.sd().forEach(function(a){a.Tf(b)});a=qh(this);var d,e;for(d=b.length;c<d;c++)e=b[c],e.opacity*=a.opacity,e.visible=e.visible&&a.visible,e.maxResolution=Math.min(e.maxResolution,a.maxResolution),e.minResolution=Math.max(e.minResolution,a.minResolution),void 0!==a.extent&&(e.extent=void 0!==e.extent?mb(e.extent,a.extent):a.extent);return b};k.Vf=function(){return"ready"};var sh="layers";function th(a){var b=qb({},a);delete b.source;ph.call(this,b);this.v=this.o=this.l=null;a.map&&this.setMap(a.map);z(this,Sc("source"),this.Pl,this);this.ad(a.source?a.source:null)}u(th,ph);function uh(a,b){return a.visible&&b>=a.minResolution&&b<a.maxResolution}k=th.prototype;k.Tf=function(a){a=a?a:[];a.push(qh(this));return a};k.ka=function(){return this.get("source")||null};k.Vf=function(){var a=this.ka();return a?a.V():"undefined"};k.Ln=function(){this.s()};
k.Pl=function(){this.v&&(Bc(this.v),this.v=null);var a=this.ka();a&&(this.v=z(a,"change",this.Ln,this));this.s()};k.setMap=function(a){this.l&&(Bc(this.l),this.l=null);a||this.s();this.o&&(Bc(this.o),this.o=null);a&&(this.l=z(a,"precompose",function(a){var b=qh(this);b.Ie=!1;b.zIndex=Infinity;a.frameState.layerStatesArray.push(b);a.frameState.layerStates[w(this)]=b},this),this.o=z(this,"change",a.render,a),this.s())};k.ad=function(a){this.set("source",a)};function vh(){this.b={};this.a=0}vh.prototype.clear=function(){this.b={};this.a=0};vh.prototype.get=function(a,b,c){a=b+":"+a+":"+(c?dd(c):"null");return a in this.b?this.b[a]:null};vh.prototype.set=function(a,b,c,d){this.b[b+":"+a+":"+(c?dd(c):"null")]=d;++this.a};var wh=new vh;var xh=Array(6);function yh(){return[1,0,0,1,0,0]}function zh(a){return Ah(a,1,0,0,1,0,0)}function Bh(a,b){var c=a[0],d=a[1],e=a[2],f=a[3],g=a[4],h=a[5],l=b[0],m=b[1],n=b[2],p=b[3],q=b[4],r=b[5];a[0]=c*l+e*m;a[1]=d*l+f*m;a[2]=c*n+e*p;a[3]=d*n+f*p;a[4]=c*q+e*r+g;a[5]=d*q+f*r+h;return a}function Ah(a,b,c,d,e,f,g){a[0]=b;a[1]=c;a[2]=d;a[3]=e;a[4]=f;a[5]=g;return a}function Ch(a,b){a[0]=b[0];a[1]=b[1];a[2]=b[2];a[3]=b[3];a[4]=b[4];a[5]=b[5];return a}
function Dh(a,b){var c=b[0],d=b[1];b[0]=a[0]*c+a[2]*d+a[4];b[1]=a[1]*c+a[3]*d+a[5];return b}function Eh(a,b){var c=Math.cos(b),d=Math.sin(b);Bh(a,Ah(xh,c,d,-d,c,0,0))}function Fh(a,b,c){return Bh(a,Ah(xh,b,0,0,c,0,0))}function Gh(a,b,c){Bh(a,Ah(xh,1,0,0,1,b,c))}function Hh(a,b,c,d,e,f,g,h){var l=Math.sin(f);f=Math.cos(f);a[0]=d*f;a[1]=e*l;a[2]=-d*l;a[3]=e*f;a[4]=g*d*f-h*d*l+b;a[5]=g*e*l+h*e*f+c;return a}
function Ih(a){var b=a[0]*a[3]-a[1]*a[2];sa(!!b,32);var c=a[0],d=a[1],e=a[2],f=a[3],g=a[4],h=a[5];a[0]=f/b;a[1]=-d/b;a[2]=-e/b;a[3]=c/b;a[4]=(e*h-f*g)/b;a[5]=-(c*h-d*g)/b;return a};function Jh(a,b){this.l=b;this.c={};this.u={}}u(Jh,Jc);function Kh(a){var b=a.viewState,c=a.coordinateToPixelTransform,d=a.pixelToCoordinateTransform;Hh(c,a.size[0]/2,a.size[1]/2,1/b.resolution,-1/b.resolution,-b.rotation,-b.center[0],-b.center[1]);Ih(Ch(d,c))}k=Jh.prototype;k.ra=function(){for(var a in this.c)Kc(this.c[a])};function Lh(){if(32<wh.a){var a=0,b,c;for(b in wh.b)c=wh.b[b],a++&3||Oc(c)||(delete wh.b[b],--wh.a)}}
k.Ba=function(a,b,c,d,e,f,g){function h(a,c){var f=w(a).toString(),g=b.layerStates[w(c)].Ie;if(!(f in b.skippedFeatureUids)||g)return d.call(e,a,g?c:null)}var l,m=b.viewState,n=m.resolution,p=m.projection,m=a;if(p.a){var p=p.D(),q=ib(p),r=a[0];if(r<p[0]||r>p[2])m=[r+q*Math.ceil((p[0]-r)/q),a[1]]}p=b.layerStatesArray;for(q=p.length-1;0<=q;--q){var v=p[q],r=v.layer;if(uh(v,n)&&f.call(g,r)&&(v=Mh(this,r),r.ka()&&(l=v.Ba(r.ka().G?m:a,b,c,h,e)),l))return l}};
k.xi=function(a,b,c,d,e){return void 0!==this.Ba(a,b,c,jf,this,d,e)};function Mh(a,b){var c=w(b).toString();if(c in a.c)return a.c[c];var d=b.Gd(a);a.c[c]=d;a.u[c]=z(d,"change",a.Al,a);return d}k.Al=function(){this.l.render()};k.Dg=oa;k.Hp=function(a,b){for(var c in this.c)if(!(b&&c in b.layerStates)){var d=c,e=this.c[d];delete this.c[d];Bc(this.u[d]);delete this.u[d];Kc(e)}};function Nh(a,b){for(var c in a.c)if(!(c in b.layerStates)){b.postRenderFunctions.push(a.Hp.bind(a));break}}
function la(a,b){return a.zIndex-b.zIndex};function Oh(a,b,c,d,e){Lc.call(this,a);this.vectorContext=b;this.frameState=c;this.context=d;this.glContext=e}u(Oh,Lc);var Ph=[0,0,0,1],Qh=[],Rh=[0,0,0,1];function Sh(a,b,c,d){b&&(a.translate(c,d),a.rotate(b),a.translate(-c,-d))};function Th(){}k=Th.prototype;k.oc=function(){};k.td=function(){};k.ac=function(){};k.te=function(){};k.ue=function(){};k.Rb=function(){};k.pc=function(){};k.qc=function(){};k.rc=function(){};k.sc=function(){};k.tc=function(){};k.Ac=function(){};k.Na=function(){};k.Wb=function(){};k.Ub=function(){};function Uh(a,b,c,d,e){this.g=a;this.v=b;this.c=c;this.O=d;this.Gb=e;this.N=this.b=this.a=this.$a=this.Z=this.I=null;this.ea=this.T=this.o=this.G=this.C=this.A=0;this.fa=!1;this.i=this.mb=0;this.na=!1;this.qa=0;this.Fa="";this.Ja=this.$b=0;this.Ha=!1;this.j=this.Va=0;this.ta=this.l=this.f=null;this.u=[];this.yb=yh()}u(Uh,Th);
function Vh(a,b,c){if(a.N){b=mf(b,0,c,2,a.O,a.u);c=a.g;var d=a.yb,e=c.globalAlpha;1!=a.o&&(c.globalAlpha=e*a.o);var f=a.mb;a.fa&&(f+=a.Gb);var g,h;g=0;for(h=b.length;g<h;g+=2){var l=b[g]-a.A,m=b[g+1]-a.C;a.na&&(l=Math.round(l),m=Math.round(m));if(f||1!=a.i){var n=l+a.A,p=m+a.C;Hh(d,n,p,a.i,a.i,f,-n,-p);c.setTransform.apply(c,d)}c.drawImage(a.N,a.T,a.ea,a.qa,a.G,l,m,a.qa,a.G)}(f||1!=a.i)&&c.setTransform(1,0,0,1,0,0);1!=a.o&&(c.globalAlpha=e)}}
function Wh(a,b,c,d){var e=0;if(a.ta&&""!==a.Fa){a.f&&Xh(a,a.f);a.l&&Yh(a,a.l);var f=a.ta,g=a.g,h=a.$a;h?(h.font!=f.font&&(h.font=g.font=f.font),h.textAlign!=f.textAlign&&(h.textAlign=g.textAlign=f.textAlign),h.textBaseline!=f.textBaseline&&(h.textBaseline=g.textBaseline=f.textBaseline)):(g.font=f.font,g.textAlign=f.textAlign,g.textBaseline=f.textBaseline,a.$a={font:f.font,textAlign:f.textAlign,textBaseline:f.textBaseline});b=mf(b,e,c,d,a.O,a.u);f=a.g;g=a.Va;for(a.Ha&&(g+=a.Gb);e<c;e+=d){var h=b[e]+
a.$b,l=b[e+1]+a.Ja;if(g||1!=a.j){var m=Hh(a.yb,h,l,a.j,a.j,g,-h,-l);f.setTransform.apply(f,m)}a.l&&f.strokeText(a.Fa,h,l);a.f&&f.fillText(a.Fa,h,l)}(g||1!=a.j)&&f.setTransform(1,0,0,1,0,0)}}function Zh(a,b,c,d,e,f){var g=a.g;a=mf(b,c,d,e,a.O,a.u);g.moveTo(a[0],a[1]);b=a.length;f&&(b-=2);for(c=2;c<b;c+=2)g.lineTo(a[c],a[c+1]);f&&g.closePath();return d}function $h(a,b,c,d,e){var f,g;f=0;for(g=d.length;f<g;++f)c=Zh(a,b,c,d[f],e,!0);return c}k=Uh.prototype;
k.ac=function(a){if(nb(this.c,a.D())){if(this.a||this.b){this.a&&Xh(this,this.a);this.b&&Yh(this,this.b);var b;b=this.O;var c=this.u,d=a.ia();b=d?mf(d,0,d.length,a.sa(),b,c):null;c=b[2]-b[0];d=b[3]-b[1];c=Math.sqrt(c*c+d*d);d=this.g;d.beginPath();d.arc(b[0],b[1],c,0,2*Math.PI);this.a&&d.fill();this.b&&d.stroke()}""!==this.Fa&&Wh(this,a.za(),2,2)}};k.td=function(a){this.Na(a.Ca(),a.Da());this.Wb(a.Y());this.Ub(a.Oa())};
k.oc=function(a){switch(a.S()){case "Point":this.sc(a);break;case "LineString":this.Rb(a);break;case "Polygon":this.tc(a);break;case "MultiPoint":this.qc(a);break;case "MultiLineString":this.pc(a);break;case "MultiPolygon":this.rc(a);break;case "GeometryCollection":this.ue(a);break;case "Circle":this.ac(a)}};k.te=function(a,b){var c=(0,b.Qa)(a);c&&nb(this.c,c.D())&&(this.td(b),this.oc(c))};k.ue=function(a){a=a.a;var b,c;b=0;for(c=a.length;b<c;++b)this.oc(a[b])};
k.sc=function(a){var b=a.ia();a=a.sa();this.N&&Vh(this,b,b.length);""!==this.Fa&&Wh(this,b,b.length,a)};k.qc=function(a){var b=a.ia();a=a.sa();this.N&&Vh(this,b,b.length);""!==this.Fa&&Wh(this,b,b.length,a)};k.Rb=function(a){if(nb(this.c,a.D())){if(this.b){Yh(this,this.b);var b=this.g,c=a.ia();b.beginPath();Zh(this,c,0,c.length,a.sa(),!1);b.stroke()}""!==this.Fa&&(a=ai(a),Wh(this,a,2,2))}};
k.pc=function(a){var b=a.D();if(nb(this.c,b)){if(this.b){Yh(this,this.b);var b=this.g,c=a.ia(),d=0,e=a.Sb(),f=a.sa();b.beginPath();var g,h;g=0;for(h=e.length;g<h;++g)d=Zh(this,c,d,e[g],f,!1);b.stroke()}""!==this.Fa&&(a=bi(a),Wh(this,a,a.length,2))}};k.tc=function(a){if(nb(this.c,a.D())){if(this.b||this.a){this.a&&Xh(this,this.a);this.b&&Yh(this,this.b);var b=this.g;b.beginPath();$h(this,a.gc(),0,a.Sb(),a.sa());this.a&&b.fill();this.b&&b.stroke()}""!==this.Fa&&(a=Tf(a),Wh(this,a,2,2))}};
k.rc=function(a){if(nb(this.c,a.D())){if(this.b||this.a){this.a&&Xh(this,this.a);this.b&&Yh(this,this.b);var b=this.g,c=ci(a),d=0,e=a.c,f=a.sa(),g,h;b.beginPath();g=0;for(h=e.length;g<h;++g)d=$h(this,c,d,e[g],f);this.a&&b.fill();this.b&&b.stroke()}""!==this.Fa&&(a=di(a),Wh(this,a,a.length,2))}};function Xh(a,b){var c=a.g,d=a.I;d?d.fillStyle!=b.fillStyle&&(d.fillStyle=c.fillStyle=b.fillStyle):(c.fillStyle=b.fillStyle,a.I={fillStyle:b.fillStyle})}
function Yh(a,b){var c=a.g,d=a.Z;d?(d.lineCap!=b.lineCap&&(d.lineCap=c.lineCap=b.lineCap),Ud&&!ja(d.lineDash,b.lineDash)&&c.setLineDash(d.lineDash=b.lineDash),d.lineJoin!=b.lineJoin&&(d.lineJoin=c.lineJoin=b.lineJoin),d.lineWidth!=b.lineWidth&&(d.lineWidth=c.lineWidth=b.lineWidth),d.miterLimit!=b.miterLimit&&(d.miterLimit=c.miterLimit=b.miterLimit),d.strokeStyle!=b.strokeStyle&&(d.strokeStyle=c.strokeStyle=b.strokeStyle)):(c.lineCap=b.lineCap,Ud&&c.setLineDash(b.lineDash),c.lineJoin=b.lineJoin,c.lineWidth=
b.lineWidth,c.miterLimit=b.miterLimit,c.strokeStyle=b.strokeStyle,a.Z={lineCap:b.lineCap,lineDash:b.lineDash,lineJoin:b.lineJoin,lineWidth:b.lineWidth,miterLimit:b.miterLimit,strokeStyle:b.strokeStyle})}
k.Na=function(a,b){if(a){var c=a.b;this.a={fillStyle:fd(c?c:Ph)}}else this.a=null;if(b){var c=b.a,d=b.i,e=b.g,f=b.f,g=b.j,h=b.c,l=b.l;this.b={lineCap:void 0!==d?d:"round",lineDash:e?e:Qh,lineDashOffset:f?f:0,lineJoin:void 0!==g?g:"round",lineWidth:this.v*(void 0!==h?h:1),miterLimit:void 0!==l?l:10,strokeStyle:fd(c?c:Rh)}}else this.b=null};
k.Wb=function(a){if(a){var b=a.Jc(),c=a.Y(1),d=a.Tc(),e=a.kc();this.A=b[0];this.C=b[1];this.G=e[1];this.N=c;this.o=a.f;this.T=d[0];this.ea=d[1];this.fa=a.o;this.mb=a.j;this.i=a.c;this.na=a.u;this.qa=e[0]}else this.N=null};
k.Ub=function(a){if(a){var b=a.Ca();b?(b=b.b,this.f={fillStyle:fd(b?b:Ph)}):this.f=null;var c=a.Da();if(c){var b=c.a,d=c.i,e=c.g,f=c.f,g=c.j,h=c.c,c=c.l;this.l={lineCap:void 0!==d?d:"round",lineDash:e?e:Qh,lineDashOffset:f?f:0,lineJoin:void 0!==g?g:"round",lineWidth:void 0!==h?h:1,miterLimit:void 0!==c?c:10,strokeStyle:fd(b?b:Rh)}}else this.l=null;var b=a.a,d=a.g,e=a.c,f=a.l,g=a.i,h=a.b,c=a.Oa(),l=a.f;a=a.j;this.ta={font:void 0!==b?b:"10px sans-serif",textAlign:void 0!==l?l:"center",textBaseline:void 0!==
a?a:"middle"};this.Fa=void 0!==c?c:"";this.$b=void 0!==d?this.v*d:0;this.Ja=void 0!==e?this.v*e:0;this.Ha=void 0!==f?f:!1;this.Va=void 0!==g?g:0;this.j=this.v*(void 0!==h?h:1)}else this.Fa=""};function ei(a,b){Jh.call(this,0,b);this.g=hd();this.b=this.g.canvas;this.b.style.width="100%";this.b.style.height="100%";this.b.style.display="block";this.b.className="ol-unselectable";a.insertBefore(this.b,a.childNodes[0]||null);this.a=!0;this.i=yh()}u(ei,Jh);
function fi(a,b,c){var d=a.l,e=a.g;if(Oc(d,b)){var f=c.extent,g=c.pixelRatio,h=c.viewState.rotation,l=c.viewState,m=c.pixelRatio/l.resolution;a=Hh(a.i,a.b.width/2,a.b.height/2,m,-m,-l.rotation,-l.center[0],-l.center[1]);d.b(new Oh(b,new Uh(e,g,f,a,h),c,e,null))}}ei.prototype.S=function(){return"canvas"};
ei.prototype.Dg=function(a){if(a){var b=this.g,c=a.pixelRatio,d=Math.round(a.size[0]*c),e=Math.round(a.size[1]*c);this.b.width!=d||this.b.height!=e?(this.b.width=d,this.b.height=e):b.clearRect(0,0,d,e);c=a.viewState.rotation;Kh(a);fi(this,"precompose",a);var f=a.layerStatesArray;ka(f);c&&(b.save(),Sh(b,c,d/2,e/2));var d=a.viewState.resolution,g,h,l,e=0;for(g=f.length;e<g;++e)l=f[e],h=l.layer,h=Mh(this,h),uh(l,d)&&"ready"==l.uj&&h.ud(a,l)&&h.O(a,l,b);c&&b.restore();fi(this,"postcompose",a);this.a||
(this.b.style.display="",this.a=!0);Nh(this,a);a.postRenderFunctions.push(Lh)}else this.a&&(this.b.style.display="none",this.a=!1)};ei.prototype.wi=function(a,b,c,d,e,f){var g,h=b.viewState.resolution,l=b.layerStatesArray,m=l.length;a=Dh(b.pixelToCoordinateTransform,a.slice());for(--m;0<=m;--m){g=l[m];var n=g.layer;if(uh(g,h)&&e.call(f,n)&&(g=Mh(this,n).v(a,b,c,d)))return g}};var gi=["Polygon","Circle","LineString","Image","Text"];function hi(){};function ii(a){this.b=a};function ji(a){this.b=a}u(ji,ii);ji.prototype.S=function(){return 35632};function ki(a){this.b=a}u(ki,ii);ki.prototype.S=function(){return 35633};function li(){this.b="precision mediump float;varying vec2 a;varying vec2 b;varying float c;varying float d;uniform float m;uniform vec4 n;uniform vec4 o;uniform vec2 p;void main(void){vec2 windowCenter=vec2((a.x+1.0)/2.0*p.x*d,(a.y+1.0)/2.0*p.y*d);vec2 windowOffset=vec2((b.x+1.0)/2.0*p.x*d,(b.y+1.0)/2.0*p.y*d);float radius=length(windowCenter-windowOffset);float dist=length(windowCenter-gl_FragCoord.xy);if(dist>radius+c){if(o.a==0.0){gl_FragColor=n;}else{gl_FragColor=o;}gl_FragColor.a=gl_FragColor.a-(dist-(radius+c));}else if(n.a==0.0){gl_FragColor=o;if(dist<radius-c){gl_FragColor.a=gl_FragColor.a-(radius-c-dist);}} else{gl_FragColor=n;float strokeDist=radius-c;float antialias=2.0*d;if(dist>strokeDist){gl_FragColor=o;}else if(dist>=strokeDist-antialias){float step=smoothstep(strokeDist-antialias,strokeDist,dist);gl_FragColor=mix(n,o,step);}} gl_FragColor.a=gl_FragColor.a*m;if(gl_FragColor.a<=0.0){discard;}}"}
u(li,ji);var mi=new li;
function ni(){this.b="varying vec2 a;varying vec2 b;varying float c;varying float d;attribute vec2 e;attribute float f;attribute float g;uniform mat4 h;uniform mat4 i;uniform mat4 j;uniform float k;uniform float l;void main(void){mat4 offsetMatrix=i*j;a=vec4(h*vec4(e,0.0,1.0)).xy;d=l;float lineWidth=k*l;c=lineWidth/2.0;if(lineWidth==0.0){lineWidth=2.0*l;}vec2 offset;float radius=g+3.0*l;if(f==0.0){offset=vec2(-1.0,1.0);}else if(f==1.0){offset=vec2(-1.0,-1.0);}else if(f==2.0){offset=vec2(1.0,-1.0);}else{offset=vec2(1.0,1.0);}gl_Position=h*vec4(e+offset*radius,0.0,1.0)+offsetMatrix*vec4(offset*lineWidth,0.0,0.0);b=vec4(h*vec4(e.x+g,e.y,0.0,1.0)).xy;if(distance(a,b)>20000.0){gl_Position=vec4(a,0.0,1.0);}}"}
u(ni,ki);var oi=new ni;function pi(a,b){this.G=a.getUniformLocation(b,"n");this.qa=a.getUniformLocation(b,"k");this.c=a.getUniformLocation(b,"j");this.i=a.getUniformLocation(b,"i");this.a=a.getUniformLocation(b,"m");this.ta=a.getUniformLocation(b,"l");this.g=a.getUniformLocation(b,"h");this.I=a.getUniformLocation(b,"p");this.Z=a.getUniformLocation(b,"o");this.j=a.getAttribLocation(b,"f");this.b=a.getAttribLocation(b,"e");this.O=a.getAttribLocation(b,"g")};function qi(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function ri(a,b){a[0]=b[0];a[1]=b[1];a[4]=b[2];a[5]=b[3];a[12]=b[4];a[13]=b[5];return a};function si(a,b){this.origin=kb(b);this.Gb=yh();this.Va=yh();this.yb=yh();this.Ja=qi();this.b=[];this.o=null;this.g=[];this.f=[];this.a=[];this.u=null;this.j=void 0}u(si,Th);
si.prototype.i=function(a,b,c,d,e,f,g,h,l,m,n){var p=a.b,q,r,v,x,y,A,B,aa;this.j&&(q=p.isEnabled(p.STENCIL_TEST),r=p.getParameter(p.STENCIL_FUNC),v=p.getParameter(p.STENCIL_VALUE_MASK),x=p.getParameter(p.STENCIL_REF),y=p.getParameter(p.STENCIL_WRITEMASK),A=p.getParameter(p.STENCIL_FAIL),B=p.getParameter(p.STENCIL_PASS_DEPTH_PASS),aa=p.getParameter(p.STENCIL_PASS_DEPTH_FAIL),p.enable(p.STENCIL_TEST),p.clear(p.STENCIL_BUFFER_BIT),p.stencilMask(255),p.stencilFunc(p.ALWAYS,1,255),p.stencilOp(p.KEEP,p.KEEP,
p.REPLACE),this.j.i(a,b,c,d,e,f,g,h,l,m,n),p.stencilMask(0),p.stencilFunc(p.NOTEQUAL,1,255));ti(a,34962,this.u);ti(a,34963,this.o);f=this.qf(p,a,e,f);var Ra=zh(this.Gb);Fh(Ra,2/(c*e[0]),2/(c*e[1]));Eh(Ra,-d);Gh(Ra,-(b[0]-this.origin[0]),-(b[1]-this.origin[1]));b=zh(this.yb);Fh(b,2/e[0],2/e[1]);e=zh(this.Va);d&&Eh(e,-d);p.uniformMatrix4fv(f.g,!1,ri(this.Ja,Ra));p.uniformMatrix4fv(f.i,!1,ri(this.Ja,b));p.uniformMatrix4fv(f.c,!1,ri(this.Ja,e));p.uniform1f(f.a,g);var ra;l?(m?a=this.ve(p,a,h,l,n):(p.clear(p.COLOR_BUFFER_BIT|
p.DEPTH_BUFFER_BIT),this.Pd(p,a,h,!0),a=(a=l(null))?a:void 0),ra=a):this.Pd(p,a,h,!1);this.rf(p,f);this.j&&(q||p.disable(p.STENCIL_TEST),p.clear(p.STENCIL_BUFFER_BIT),p.stencilFunc(r,x,v),p.stencilMask(y),p.stencilOp(A,aa,B));return ra};function ui(a,b,c,d){a.drawElements(4,d-c,b.f?5125:5123,c*(b.f?4:2))};var vi=[0,0,0,1],wi=[],xi=[0,0,0,1];function yi(a,b,c,d,e,f){a=(c-a)*(f-b)-(e-a)*(d-b);return a<=zi&&a>=-zi?void 0:0<a}var zi=Number.EPSILON||2.220446049250313E-16;function Ai(a){this.b=void 0!==a?a:[];this.a=Bi}var Bi=35044;function Ci(a,b){si.call(this,0,b);this.v=null;this.l=[];this.O=[];this.A=0;this.c={fillColor:null,strokeColor:null,lineDash:null,lineDashOffset:void 0,lineWidth:void 0,s:!1}}u(Ci,si);k=Ci.prototype;
k.ac=function(a,b){var c=a.Yd(),d=a.sa();if(c){this.g.push(this.b.length);this.f.push(b);this.c.s&&(this.O.push(this.b.length),this.c.s=!1);this.A=c;var c=a.ia(),c=nf(c,2,d,-this.origin[0],-this.origin[1]),e=this.a.length,f=this.b.length,g=e/4,h;for(h=0;2>h;h+=d)this.a[e++]=c[h],this.a[e++]=c[h+1],this.a[e++]=0,this.a[e++]=this.A,this.a[e++]=c[h],this.a[e++]=c[h+1],this.a[e++]=1,this.a[e++]=this.A,this.a[e++]=c[h],this.a[e++]=c[h+1],this.a[e++]=2,this.a[e++]=this.A,this.a[e++]=c[h],this.a[e++]=c[h+
1],this.a[e++]=3,this.a[e++]=this.A,this.b[f++]=g,this.b[f++]=g+1,this.b[f++]=g+2,this.b[f++]=g+2,this.b[f++]=g+3,this.b[f++]=g,g+=4}else this.c.s&&(this.l.pop(),this.l.length&&(d=this.l[this.l.length-1],this.c.fillColor=d[0],this.c.strokeColor=d[1],this.c.lineWidth=d[2],this.c.s=!1))};k.Bb=function(){this.u=new Ai(this.a);this.o=new Ai(this.b);this.g.push(this.b.length);!this.O.length&&0<this.l.length&&(this.l=[]);this.b=this.a=null};
k.Cb=function(a){var b=this.u,c=this.o;return function(){Di(a,b);Di(a,c)}};k.qf=function(a,b,c,d){var e=Ei(b,mi,oi),f;this.v?f=this.v:this.v=f=new pi(a,e);b.Vc(e);a.enableVertexAttribArray(f.b);a.vertexAttribPointer(f.b,2,5126,!1,16,0);a.enableVertexAttribArray(f.j);a.vertexAttribPointer(f.j,1,5126,!1,16,8);a.enableVertexAttribArray(f.O);a.vertexAttribPointer(f.O,1,5126,!1,16,12);a.uniform2fv(f.I,c);a.uniform1f(f.ta,d);return f};
k.rf=function(a,b){a.disableVertexAttribArray(b.b);a.disableVertexAttribArray(b.j);a.disableVertexAttribArray(b.O)};
k.Pd=function(a,b,c){if(tb(c)){var d,e,f;e=this.g[this.g.length-1];for(c=this.O.length-1;0<=c;--c)d=this.O[c],f=this.l[c],a.uniform4fv(this.v.G,f[0]),Fi(this,a,f[1],f[2]),ui(a,b,d,e),e=d}else{var g,h,l,m;l=this.g.length-2;f=e=this.g[l+1];for(d=this.O.length-1;0<=d;--d){g=this.l[d];a.uniform4fv(this.v.G,g[0]);Fi(this,a,g[1],g[2]);for(g=this.O[d];0<=l&&this.g[l]>=g;)m=this.g[l],h=this.f[l],h=w(h).toString(),c[h]&&(e!==f&&ui(a,b,e,f),f=m),l--,e=m;e!==f&&ui(a,b,e,f);e=f=g}}};
k.ve=function(a,b,c,d,e){var f,g,h,l,m,n,p;p=this.g.length-2;h=this.g[p+1];for(f=this.O.length-1;0<=f;--f)for(g=this.l[f],a.uniform4fv(this.v.G,g[0]),Fi(this,a,g[1],g[2]),l=this.O[f];0<=p&&this.g[p]>=l;){g=this.g[p];m=this.f[p];n=w(m).toString();if(void 0===c[n]&&m.U()&&(void 0===e||nb(e,m.U().D()))&&(a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT),ui(a,b,g,h),h=d(m)))return h;p--;h=g}};function Fi(a,b,c,d){b.uniform4fv(a.v.Z,c);b.uniform1f(a.v.qa,d)}
k.Na=function(a,b){var c,d;b?(c=b.g,this.c.lineDash=c?c:wi,c=b.f,this.c.lineDashOffset=c?c:0,c=b.a,c instanceof CanvasGradient||c instanceof CanvasPattern?c=xi:c=bd(c).map(function(a,b){return 3!=b?a/255:a})||xi,d=b.c,d=void 0!==d?d:1):(c=[0,0,0,0],d=0);var e=a?a.b:[0,0,0,0];e instanceof CanvasGradient||e instanceof CanvasPattern?e=vi:e=bd(e).map(function(a,b){return 3!=b?a/255:a})||vi;this.c.strokeColor&&ja(this.c.strokeColor,c)&&this.c.fillColor&&ja(this.c.fillColor,e)&&this.c.lineWidth===d||(this.c.s=
!0,this.c.fillColor=e,this.c.strokeColor=c,this.c.lineWidth=d,this.l.push([e,c,d]))};function Gi(){this.b="precision mediump float;varying vec2 a;varying float b;uniform float k;uniform sampler2D l;void main(void){vec4 texColor=texture2D(l,a);gl_FragColor.rgb=texColor.rgb;float alpha=texColor.a*b*k;if(alpha==0.0){discard;}gl_FragColor.a=alpha;}"}u(Gi,ji);var Hi=new Gi;
function Ii(){this.b="varying vec2 a;varying float b;attribute vec2 c;attribute vec2 d;attribute vec2 e;attribute float f;attribute float g;uniform mat4 h;uniform mat4 i;uniform mat4 j;void main(void){mat4 offsetMatrix=i;if(g==1.0){offsetMatrix=i*j;}vec4 offsets=offsetMatrix*vec4(e,0.0,0.0);gl_Position=h*vec4(c,0.0,1.0)+offsets;a=d;b=f;}"}u(Ii,ki);var Ji=new Ii;
function Ki(a,b){this.c=a.getUniformLocation(b,"j");this.i=a.getUniformLocation(b,"i");this.a=a.getUniformLocation(b,"k");this.g=a.getUniformLocation(b,"h");this.u=a.getAttribLocation(b,"e");this.v=a.getAttribLocation(b,"f");this.b=a.getAttribLocation(b,"c");this.A=a.getAttribLocation(b,"g");this.C=a.getAttribLocation(b,"d")};function Li(a,b){this.j=a;this.b=b;this.a={};this.c={};this.g={};this.o=this.u=this.i=this.l=null;(this.f=fa(da,"OES_element_index_uint"))&&b.getExtension("OES_element_index_uint");z(this.j,"webglcontextlost",this.No,this);z(this.j,"webglcontextrestored",this.Oo,this)}u(Li,Jc);
function ti(a,b,c){var d=a.b,e=c.b,f=String(w(c));if(f in a.a)d.bindBuffer(b,a.a[f].buffer);else{var g=d.createBuffer();d.bindBuffer(b,g);var h;34962==b?h=new Float32Array(e):34963==b&&(h=a.f?new Uint32Array(e):new Uint16Array(e));d.bufferData(b,h,c.a);a.a[f]={nc:c,buffer:g}}}function Di(a,b){var c=a.b,d=String(w(b)),e=a.a[d];c.isContextLost()||c.deleteBuffer(e.buffer);delete a.a[d]}k=Li.prototype;
k.ra=function(){Ic(this.j);var a=this.b;if(!a.isContextLost()){for(var b in this.a)a.deleteBuffer(this.a[b].buffer);for(b in this.g)a.deleteProgram(this.g[b]);for(b in this.c)a.deleteShader(this.c[b]);a.deleteFramebuffer(this.i);a.deleteRenderbuffer(this.o);a.deleteTexture(this.u)}};k.Mo=function(){return this.b};
function Mi(a){if(!a.i){var b=a.b,c=b.createFramebuffer();b.bindFramebuffer(b.FRAMEBUFFER,c);var d=Ni(b,1,1),e=b.createRenderbuffer();b.bindRenderbuffer(b.RENDERBUFFER,e);b.renderbufferStorage(b.RENDERBUFFER,b.DEPTH_COMPONENT16,1,1);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,d,0);b.framebufferRenderbuffer(b.FRAMEBUFFER,b.DEPTH_ATTACHMENT,b.RENDERBUFFER,e);b.bindTexture(b.TEXTURE_2D,null);b.bindRenderbuffer(b.RENDERBUFFER,null);b.bindFramebuffer(b.FRAMEBUFFER,null);a.i=c;
a.u=d;a.o=e}return a.i}function Oi(a,b){var c=String(w(b));if(c in a.c)return a.c[c];var d=a.b,e=d.createShader(b.S());d.shaderSource(e,b.b);d.compileShader(e);return a.c[c]=e}function Ei(a,b,c){var d=w(b)+"/"+w(c);if(d in a.g)return a.g[d];var e=a.b,f=e.createProgram();e.attachShader(f,Oi(a,b));e.attachShader(f,Oi(a,c));e.linkProgram(f);return a.g[d]=f}k.No=function(){rb(this.a);rb(this.c);rb(this.g);this.o=this.u=this.i=this.l=null};k.Oo=function(){};
k.Vc=function(a){if(a==this.l)return!1;this.b.useProgram(a);this.l=a;return!0};function Pi(a,b,c){var d=a.createTexture();a.bindTexture(a.TEXTURE_2D,d);a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MAG_FILTER,a.LINEAR);a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR);void 0!==b&&a.texParameteri(3553,10242,b);void 0!==c&&a.texParameteri(3553,10243,c);return d}function Ni(a,b,c){var d=Pi(a,void 0,void 0);a.texImage2D(a.TEXTURE_2D,0,a.RGBA,b,c,0,a.RGBA,a.UNSIGNED_BYTE,null);return d}
function Qi(a,b){var c=Pi(a,33071,33071);a.texImage2D(a.TEXTURE_2D,0,a.RGBA,a.RGBA,a.UNSIGNED_BYTE,b);return c};function Ri(a,b){si.call(this,0,b);this.G=this.C=void 0;this.A=[];this.v=[];this.ta=void 0;this.l=[];this.c=[];this.Z=this.I=void 0;this.qa=null;this.na=this.mb=this.fa=this.ea=this.T=this.$a=void 0;this.Ha=[];this.O=[];this.$b=void 0}u(Ri,si);k=Ri.prototype;k.Cb=function(a){var b=this.u,c=this.o,d=this.Ha,e=this.O,f=a.b;return function(){if(!f.isContextLost()){var g,h;g=0;for(h=d.length;g<h;++g)f.deleteTexture(d[g]);g=0;for(h=e.length;g<h;++g)f.deleteTexture(e[g])}Di(a,b);Di(a,c)}};
function Si(a,b,c,d){var e=a.C,f=a.G,g=a.ta,h=a.I,l=a.Z,m=a.$a,n=a.T,p=a.ea,q=a.fa?1:0,r=-a.mb,v=a.na,x=a.$b,y=Math.cos(r),r=Math.sin(r),A=a.b.length,B=a.a.length,aa,Ra,ra,Ka,C,Na;for(aa=0;aa<c;aa+=d)C=b[aa]-a.origin[0],Na=b[aa+1]-a.origin[1],Ra=B/8,ra=-v*e,Ka=-v*(g-f),a.a[B++]=C,a.a[B++]=Na,a.a[B++]=ra*y-Ka*r,a.a[B++]=ra*r+Ka*y,a.a[B++]=n/l,a.a[B++]=(p+g)/h,a.a[B++]=m,a.a[B++]=q,ra=v*(x-e),Ka=-v*(g-f),a.a[B++]=C,a.a[B++]=Na,a.a[B++]=ra*y-Ka*r,a.a[B++]=ra*r+Ka*y,a.a[B++]=(n+x)/l,a.a[B++]=(p+g)/h,
a.a[B++]=m,a.a[B++]=q,ra=v*(x-e),Ka=v*f,a.a[B++]=C,a.a[B++]=Na,a.a[B++]=ra*y-Ka*r,a.a[B++]=ra*r+Ka*y,a.a[B++]=(n+x)/l,a.a[B++]=p/h,a.a[B++]=m,a.a[B++]=q,ra=-v*e,Ka=v*f,a.a[B++]=C,a.a[B++]=Na,a.a[B++]=ra*y-Ka*r,a.a[B++]=ra*r+Ka*y,a.a[B++]=n/l,a.a[B++]=p/h,a.a[B++]=m,a.a[B++]=q,a.b[A++]=Ra,a.b[A++]=Ra+1,a.b[A++]=Ra+2,a.b[A++]=Ra,a.b[A++]=Ra+2,a.b[A++]=Ra+3}k.qc=function(a,b){this.g.push(this.b.length);this.f.push(b);var c=a.ia();Si(this,c,c.length,a.sa())};
k.sc=function(a,b){this.g.push(this.b.length);this.f.push(b);var c=a.ia();Si(this,c,c.length,a.sa())};k.Bb=function(a){a=a.b;this.A.push(this.b.length);this.v.push(this.b.length);this.u=new Ai(this.a);this.o=new Ai(this.b);var b={};Ti(this.Ha,this.l,b,a);Ti(this.O,this.c,b,a);this.ta=this.G=this.C=void 0;this.c=this.l=null;this.Z=this.I=void 0;this.b=null;this.na=this.mb=this.fa=this.ea=this.T=this.$a=void 0;this.a=null;this.$b=void 0};
function Ti(a,b,c,d){var e,f,g,h=b.length;for(g=0;g<h;++g)e=b[g],f=w(e).toString(),f in c?e=c[f]:(e=Qi(d,e),c[f]=e),a[g]=e}
k.qf=function(a,b){var c=Ei(b,Hi,Ji),d;this.qa?d=this.qa:this.qa=d=new Ki(a,c);b.Vc(c);a.enableVertexAttribArray(d.b);a.vertexAttribPointer(d.b,2,5126,!1,32,0);a.enableVertexAttribArray(d.u);a.vertexAttribPointer(d.u,2,5126,!1,32,8);a.enableVertexAttribArray(d.C);a.vertexAttribPointer(d.C,2,5126,!1,32,16);a.enableVertexAttribArray(d.v);a.vertexAttribPointer(d.v,1,5126,!1,32,24);a.enableVertexAttribArray(d.A);a.vertexAttribPointer(d.A,1,5126,!1,32,28);return d};
k.rf=function(a,b){a.disableVertexAttribArray(b.b);a.disableVertexAttribArray(b.u);a.disableVertexAttribArray(b.C);a.disableVertexAttribArray(b.v);a.disableVertexAttribArray(b.A)};
k.Pd=function(a,b,c,d){var e=d?this.O:this.Ha;d=d?this.v:this.A;if(tb(c)){var f,g;c=0;f=e.length;for(g=0;c<f;++c){a.bindTexture(3553,e[c]);var h=d[c];ui(a,b,g,h);g=h}}else for(g=f=0,h=e.length;g<h;++g){a.bindTexture(3553,e[g]);for(var l=0<g?d[g-1]:0,m=d[g],n=l;f<this.g.length&&this.g[f]<=m;){var p=w(this.f[f]).toString();void 0!==c[p]?(n!==l&&ui(a,b,n,l),l=n=f===this.g.length-1?m:this.g[f+1]):l=f===this.g.length-1?m:this.g[f+1];f++}n!==l&&ui(a,b,n,l)}};
k.ve=function(a,b,c,d,e){var f,g,h,l,m,n,p=this.g.length-1;for(f=this.O.length-1;0<=f;--f)for(a.bindTexture(3553,this.O[f]),g=0<f?this.v[f-1]:0,l=this.v[f];0<=p&&this.g[p]>=g;){h=this.g[p];m=this.f[p];n=w(m).toString();if(void 0===c[n]&&m.U()&&(void 0===e||nb(e,m.U().D()))&&(a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT),ui(a,b,h,l),l=d(m)))return l;l=h;p--}};
k.Wb=function(a){var b=a.Jc(),c=a.Y(1),d=a.ye(),e=a.kg(1),f=a.f,g=a.Tc(),h=a.o,l=a.j,m=a.kc();a=a.c;var n;this.l.length?(n=this.l[this.l.length-1],w(n)!=w(c)&&(this.A.push(this.b.length),this.l.push(c))):this.l.push(c);this.c.length?(n=this.c[this.c.length-1],w(n)!=w(e)&&(this.v.push(this.b.length),this.c.push(e))):this.c.push(e);this.C=b[0];this.G=b[1];this.ta=m[1];this.I=d[1];this.Z=d[0];this.$a=f;this.T=g[0];this.ea=g[1];this.mb=l;this.fa=h;this.na=a;this.$b=m[0]};function Ui(a,b,c){var d=b-c;return a[0]===a[d]&&a[1]===a[d+1]&&3<(b-0)/c?!!sf(a,0,b,c):!1};function Vi(){this.b="precision mediump float;varying float a;varying vec2 b;varying float c;uniform float m;uniform vec4 n;uniform vec2 o;uniform float p;void main(void){if(a>0.0){vec2 windowCoords=vec2((b.x+1.0)/2.0*o.x*p,(b.y+1.0)/2.0*o.y*p);if(length(windowCoords-gl_FragCoord.xy)>c*p){discard;}} gl_FragColor=n;float alpha=n.a*m;if(alpha==0.0){discard;}gl_FragColor.a=alpha;}"}u(Vi,ji);var Wi=new Vi;
function Xi(){this.b="varying float a;varying vec2 b;varying float c;attribute vec2 d;attribute vec2 e;attribute vec2 f;attribute float g;uniform mat4 h;uniform mat4 i;uniform mat4 j;uniform float k;uniform float l;bool nearlyEquals(in float value,in float ref){float epsilon=0.000000000001;return value>=ref-epsilon&&value<=ref+epsilon;}void alongNormal(out vec2 offset,in vec2 nextP,in float turnDir,in float direction){vec2 dirVect=nextP-e;vec2 normal=normalize(vec2(-turnDir*dirVect.y,turnDir*dirVect.x));offset=k/2.0*normal*direction;}void miterUp(out vec2 offset,out float round,in bool isRound,in float direction){float halfWidth=k/2.0;vec2 tangent=normalize(normalize(f-e)+normalize(e-d));vec2 normal=vec2(-tangent.y,tangent.x);vec2 dirVect=f-e;vec2 tmpNormal=normalize(vec2(-dirVect.y,dirVect.x));float miterLength=abs(halfWidth/dot(normal,tmpNormal));offset=normal*direction*miterLength;round=0.0;if(isRound){round=1.0;}else if(miterLength>l+k){offset=halfWidth*tmpNormal*direction;}} bool miterDown(out vec2 offset,in vec4 projPos,in mat4 offsetMatrix,in float direction){bool degenerate=false;vec2 tangent=normalize(normalize(f-e)+normalize(e-d));vec2 normal=vec2(-tangent.y,tangent.x);vec2 dirVect=d-e;vec2 tmpNormal=normalize(vec2(-dirVect.y,dirVect.x));vec2 longOffset,shortOffset,longVertex;vec4 shortProjVertex;float halfWidth=k/2.0;if(length(f-e)>length(d-e)){longOffset=tmpNormal*direction*halfWidth;shortOffset=normalize(vec2(dirVect.y,-dirVect.x))*direction*halfWidth;longVertex=f;shortProjVertex=h*vec4(d,0.0,1.0);}else{shortOffset=tmpNormal*direction*halfWidth;longOffset=normalize(vec2(dirVect.y,-dirVect.x))*direction*halfWidth;longVertex=d;shortProjVertex=h*vec4(f,0.0,1.0);}vec4 p1=h*vec4(longVertex,0.0,1.0)+offsetMatrix*vec4(longOffset,0.0,0.0);vec4 p2=projPos+offsetMatrix*vec4(longOffset,0.0,0.0);vec4 p3=shortProjVertex+offsetMatrix*vec4(-shortOffset,0.0,0.0);vec4 p4=shortProjVertex+offsetMatrix*vec4(shortOffset,0.0,0.0);float denom=(p4.y-p3.y)*(p2.x-p1.x)-(p4.x-p3.x)*(p2.y-p1.y);float firstU=((p4.x-p3.x)*(p1.y-p3.y)-(p4.y-p3.y)*(p1.x-p3.x))/denom;float secondU=((p2.x-p1.x)*(p1.y-p3.y)-(p2.y-p1.y)*(p1.x-p3.x))/denom;float epsilon=0.000000000001;if(firstU>epsilon&&firstU<1.0-epsilon&&secondU>epsilon&&secondU<1.0-epsilon){shortProjVertex.x=p1.x+firstU*(p2.x-p1.x);shortProjVertex.y=p1.y+firstU*(p2.y-p1.y);offset=shortProjVertex.xy;degenerate=true;}else{float miterLength=abs(halfWidth/dot(normal,tmpNormal));offset=normal*direction*miterLength;}return degenerate;}void squareCap(out vec2 offset,out float round,in bool isRound,in vec2 nextP,in float turnDir,in float direction){round=0.0;vec2 dirVect=e-nextP;vec2 firstNormal=normalize(dirVect);vec2 secondNormal=vec2(turnDir*firstNormal.y*direction,-turnDir*firstNormal.x*direction);vec2 hypotenuse=normalize(firstNormal-secondNormal);vec2 normal=vec2(turnDir*hypotenuse.y*direction,-turnDir*hypotenuse.x*direction);float length=sqrt(c*c*2.0);offset=normal*length;if(isRound){round=1.0;}} void main(void){bool degenerate=false;float direction=float(sign(g));mat4 offsetMatrix=i*j;vec2 offset;vec4 projPos=h*vec4(e,0.0,1.0);bool round=nearlyEquals(mod(g,2.0),0.0);a=0.0;c=k/2.0;b=projPos.xy;if(nearlyEquals(mod(g,3.0),0.0)||nearlyEquals(mod(g,17.0),0.0)){alongNormal(offset,f,1.0,direction);}else if(nearlyEquals(mod(g,5.0),0.0)||nearlyEquals(mod(g,13.0),0.0)){alongNormal(offset,d,-1.0,direction);}else if(nearlyEquals(mod(g,23.0),0.0)){miterUp(offset,a,round,direction);}else if(nearlyEquals(mod(g,19.0),0.0)){degenerate=miterDown(offset,projPos,offsetMatrix,direction);}else if(nearlyEquals(mod(g,7.0),0.0)){squareCap(offset,a,round,f,1.0,direction);}else if(nearlyEquals(mod(g,11.0),0.0)){squareCap(offset,a,round,d,-1.0,direction);}if(!degenerate){vec4 offsets=offsetMatrix*vec4(offset,0.0,0.0);gl_Position=projPos+offsets;}else{gl_Position=vec4(offset,0.0,1.0);}}"}
u(Xi,ki);var Yi=new Xi;function Zi(a,b){this.G=a.getUniformLocation(b,"n");this.qa=a.getUniformLocation(b,"k");this.Z=a.getUniformLocation(b,"l");this.c=a.getUniformLocation(b,"j");this.i=a.getUniformLocation(b,"i");this.a=a.getUniformLocation(b,"m");this.ta=a.getUniformLocation(b,"p");this.g=a.getUniformLocation(b,"h");this.I=a.getUniformLocation(b,"o");this.f=a.getAttribLocation(b,"g");this.l=a.getAttribLocation(b,"d");this.o=a.getAttribLocation(b,"f");this.b=a.getAttribLocation(b,"e")};function $i(a,b){si.call(this,0,b);this.v=null;this.O=[];this.l=[];this.c={strokeColor:null,lineCap:void 0,lineDash:null,lineDashOffset:void 0,lineJoin:void 0,lineWidth:void 0,miterLimit:void 0,s:!1}}u($i,si);
function aj(a,b,c,d){var e,f=a.a.length,g=a.b.length,h="bevel"===a.c.lineJoin?0:"miter"===a.c.lineJoin?1:2,l="butt"===a.c.lineCap?0:"square"===a.c.lineCap?1:2,m=Ui(b,c,d),n,p,q,r=g,v=1,x,y,A;for(e=0;e<c;e+=d){q=f/7;x=y;y=A||[b[e],b[e+1]];if(e)if(e===c-d){m?A=n:(x=x||[0,0],f=bj(a,x,y,[0,0],v*cj*(l||1),f),f=bj(a,x,y,[0,0],-v*cj*(l||1),f),a.b[g++]=q,a.b[g++]=r-1,a.b[g++]=r,a.b[g++]=r,a.b[g++]=q+1,a.b[g++]=q,l&&(f=bj(a,x,y,[0,0],v*dj*l,f),f=bj(a,x,y,[0,0],-v*dj*l,f),a.b[g++]=q+2,a.b[g++]=q,a.b[g++]=q+
1,a.b[g++]=q+1,a.b[g++]=q+3,a.b[g++]=q+2));break}else A=[b[e+d],b[e+d+1]];else{A=[b[e+d],b[e+d+1]];if(c-0===2*d&&ja(y,A))break;if(m)x=[b[c-2*d],b[c-2*d+1]],n=A;else{l&&(f=bj(a,[0,0],y,A,v*ej*l,f),f=bj(a,[0,0],y,A,-v*ej*l,f),a.b[g++]=q+2,a.b[g++]=q,a.b[g++]=q+1,a.b[g++]=q+1,a.b[g++]=q+3,a.b[g++]=q+2);f=bj(a,[0,0],y,A,v*fj*(l||1),f);f=bj(a,[0,0],y,A,-v*fj*(l||1),f);r=f/7-1;continue}}p=yi(x[0],x[1],y[0],y[1],A[0],A[1])?-1:1;f=bj(a,x,y,A,p*gj*(h||1),f);f=bj(a,x,y,A,p*hj*(h||1),f);f=bj(a,x,y,A,-p*ij*(h||
1),f);0<e&&(a.b[g++]=q,a.b[g++]=r-1,a.b[g++]=r,a.b[g++]=q+2,a.b[g++]=q,a.b[g++]=0<v*p?r:r-1);a.b[g++]=q;a.b[g++]=q+2;a.b[g++]=q+1;r=q+2;v=p;h&&(f=bj(a,x,y,A,p*jj*h,f),a.b[g++]=q+1,a.b[g++]=q+3,a.b[g++]=q)}m&&(q=q||f/7,p=Pf([x[0],x[1],y[0],y[1],A[0],A[1]],0,6,2)?1:-1,f=bj(a,x,y,A,p*gj*(h||1),f),bj(a,x,y,A,-p*ij*(h||1),f),a.b[g++]=q,a.b[g++]=r-1,a.b[g++]=r,a.b[g++]=q+1,a.b[g++]=q,a.b[g++]=0<v*p?r:r-1)}
function bj(a,b,c,d,e,f){a.a[f++]=b[0];a.a[f++]=b[1];a.a[f++]=c[0];a.a[f++]=c[1];a.a[f++]=d[0];a.a[f++]=d[1];a.a[f++]=e;return f}function kj(a,b,c){b-=0;return b<2*c?!1:b===2*c?!ja([a[0],a[1]],[a[0+c],a[c+1]]):!0}k=$i.prototype;k.Rb=function(a,b){var c=a.ia(),d=a.sa();kj(c,c.length,d)&&(c=nf(c,c.length,d,-this.origin[0],-this.origin[1]),this.c.s&&(this.l.push(this.b.length),this.c.s=!1),this.g.push(this.b.length),this.f.push(b),aj(this,c,c.length,d))};
k.pc=function(a,b){var c=this.b.length,d=a.Nc(),e,f;e=0;for(f=d.length;e<f;++e){var g=d[e].ia(),h=d[e].sa();kj(g,g.length,h)&&(g=nf(g,g.length,h,-this.origin[0],-this.origin[1]),aj(this,g,g.length,h))}this.b.length>c&&(this.g.push(c),this.f.push(b),this.c.s&&(this.l.push(c),this.c.s=!1))};
function lj(a,b,c,d){Ui(b,b.length,d)||(b.push(b[0]),b.push(b[1]));aj(a,b,b.length,d);if(c.length){var e;b=0;for(e=c.length;b<e;++b)Ui(c[b],c[b].length,d)||(c[b].push(c[b][0]),c[b].push(c[b][1])),aj(a,c[b],c[b].length,d)}}function mj(a,b,c){c=void 0===c?a.b.length:c;a.g.push(c);a.f.push(b);a.c.s&&(a.l.push(c),a.c.s=!1)}k.Bb=function(){this.u=new Ai(this.a);this.o=new Ai(this.b);this.g.push(this.b.length);!this.l.length&&0<this.O.length&&(this.O=[]);this.b=this.a=null};
k.Cb=function(a){var b=this.u,c=this.o;return function(){Di(a,b);Di(a,c)}};k.qf=function(a,b,c,d){var e=Ei(b,Wi,Yi),f;this.v?f=this.v:this.v=f=new Zi(a,e);b.Vc(e);a.enableVertexAttribArray(f.l);a.vertexAttribPointer(f.l,2,5126,!1,28,0);a.enableVertexAttribArray(f.b);a.vertexAttribPointer(f.b,2,5126,!1,28,8);a.enableVertexAttribArray(f.o);a.vertexAttribPointer(f.o,2,5126,!1,28,16);a.enableVertexAttribArray(f.f);a.vertexAttribPointer(f.f,1,5126,!1,28,24);a.uniform2fv(f.I,c);a.uniform1f(f.ta,d);return f};
k.rf=function(a,b){a.disableVertexAttribArray(b.l);a.disableVertexAttribArray(b.b);a.disableVertexAttribArray(b.o);a.disableVertexAttribArray(b.f)};
k.Pd=function(a,b,c,d){var e=a.getParameter(a.DEPTH_FUNC),f=a.getParameter(a.DEPTH_WRITEMASK);d||(a.enable(a.DEPTH_TEST),a.depthMask(!0),a.depthFunc(a.NOTEQUAL));if(tb(c)){var g,h,l;h=this.g[this.g.length-1];for(c=this.l.length-1;0<=c;--c)g=this.l[c],l=this.O[c],nj(this,a,l[0],l[1],l[2]),ui(a,b,g,h),a.clear(a.DEPTH_BUFFER_BIT),h=g}else{var m,n,p,q;p=this.g.length-2;l=h=this.g[p+1];for(g=this.l.length-1;0<=g;--g){m=this.O[g];nj(this,a,m[0],m[1],m[2]);for(m=this.l[g];0<=p&&this.g[p]>=m;)q=this.g[p],
n=this.f[p],n=w(n).toString(),c[n]&&(h!==l&&(ui(a,b,h,l),a.clear(a.DEPTH_BUFFER_BIT)),l=q),p--,h=q;h!==l&&(ui(a,b,h,l),a.clear(a.DEPTH_BUFFER_BIT));h=l=m}}d||(a.disable(a.DEPTH_TEST),a.clear(a.DEPTH_BUFFER_BIT),a.depthMask(f),a.depthFunc(e))};
k.ve=function(a,b,c,d,e){var f,g,h,l,m,n,p;p=this.g.length-2;h=this.g[p+1];for(f=this.l.length-1;0<=f;--f)for(g=this.O[f],nj(this,a,g[0],g[1],g[2]),l=this.l[f];0<=p&&this.g[p]>=l;){g=this.g[p];m=this.f[p];n=w(m).toString();if(void 0===c[n]&&m.U()&&(void 0===e||nb(e,m.U().D()))&&(a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT),ui(a,b,g,h),h=d(m)))return h;p--;h=g}};function nj(a,b,c,d,e){b.uniform4fv(a.v.G,c);b.uniform1f(a.v.qa,d);b.uniform1f(a.v.Z,e)}
k.Na=function(a,b){var c=b.i;this.c.lineCap=void 0!==c?c:"round";c=b.g;this.c.lineDash=c?c:wi;c=b.f;this.c.lineDashOffset=c?c:0;c=b.j;this.c.lineJoin=void 0!==c?c:"round";c=b.a;c instanceof CanvasGradient||c instanceof CanvasPattern?c=xi:c=bd(c).map(function(a,b){return 3!=b?a/255:a})||xi;var d=b.c,d=void 0!==d?d:1,e=b.l,e=void 0!==e?e:10;this.c.strokeColor&&ja(this.c.strokeColor,c)&&this.c.lineWidth===d&&this.c.miterLimit===e||(this.c.s=!0,this.c.strokeColor=c,this.c.lineWidth=d,this.c.miterLimit=
e,this.O.push([c,d,e]))};var fj=3,cj=5,ej=7,dj=11,gj=13,hj=17,ij=19,jj=23;function oj(){this.b="precision mediump float;uniform vec4 e;uniform float f;void main(void){gl_FragColor=e;float alpha=e.a*f;if(alpha==0.0){discard;}gl_FragColor.a=alpha;}"}u(oj,ji);var pj=new oj;function qj(){this.b="attribute vec2 a;uniform mat4 b;uniform mat4 c;uniform mat4 d;void main(void){gl_Position=b*vec4(a,0.0,1.0);}"}u(qj,ki);var rj=new qj;
function sj(a,b){this.G=a.getUniformLocation(b,"e");this.c=a.getUniformLocation(b,"d");this.i=a.getUniformLocation(b,"c");this.a=a.getUniformLocation(b,"f");this.g=a.getUniformLocation(b,"b");this.b=a.getAttribLocation(b,"a")};function tj(a){a=a||{};this.a=void 0!==a.color?a.color:null;this.i=a.lineCap;this.g=void 0!==a.lineDash?a.lineDash:null;this.f=a.lineDashOffset;this.j=a.lineJoin;this.l=a.miterLimit;this.c=a.width;this.b=void 0}k=tj.prototype;k.clone=function(){var a=this.a;return new tj({color:a&&a.slice?a.slice():a||void 0,lineCap:this.i,lineDash:this.g?this.g.slice():void 0,lineDashOffset:this.f,lineJoin:this.j,miterLimit:this.l,width:this.c})};k.Do=function(){return this.a};k.Qk=function(){return this.i};
k.Eo=function(){return this.g};k.Rk=function(){return this.f};k.Sk=function(){return this.j};k.Xk=function(){return this.l};k.Fo=function(){return this.c};k.Go=function(a){this.a=a;this.b=void 0};k.Rp=function(a){this.i=a;this.b=void 0};k.setLineDash=function(a){this.g=a;this.b=void 0};k.Sp=function(a){this.f=a;this.b=void 0};k.Tp=function(a){this.j=a;this.b=void 0};k.Wp=function(a){this.l=a;this.b=void 0};k.Zp=function(a){this.c=a;this.b=void 0};function uj(a){this.b=this.a=this.g=void 0;this.i=void 0===a?!0:a;this.c=0}function vj(a){var b=a.b;if(b){var c=b.next,d=b.ub;c&&(c.ub=d);d&&(d.next=c);a.b=c||d;a.g===a.a?(a.b=void 0,a.g=void 0,a.a=void 0):a.g===b?a.g=a.b:a.a===b&&(a.a=d?a.b.ub:a.b);a.c--}}function wj(a){a.b=a.g;if(a.b)return a.b.data}function xj(a){if(a.b&&a.b.next)return a.b=a.b.next,a.b.data}function yj(a){if(a.b&&a.b.next)return a.b.next.data}function zj(a){if(a.b&&a.b.ub)return a.b=a.b.ub,a.b.data}
function Aj(a){if(a.b&&a.b.ub)return a.b.ub.data}function Bj(a){if(a.b)return a.b.data}uj.prototype.concat=function(a){if(a.b){if(this.b){var b=this.b.next;this.b.next=a.g;a.g.ub=this.b;b.ub=a.a;a.a.next=b;this.c+=a.c}else this.b=a.b,this.g=a.g,this.a=a.a,this.c=a.c;a.b=void 0;a.g=void 0;a.a=void 0;a.c=0}};var Cj,Dj,Ej,Fj;
(function(){var a={},b={ma:a};(function(c){if("object"===typeof a&&"undefined"!==typeof b)b.ma=c();else{var d;"undefined"!==typeof window?d=window:"undefined"!==typeof global?d=global:"undefined"!==typeof self?d=self:d=this;d.Dq=c()}})(function(){return function d(a,b,g){function e(h,l){if(!b[h]){if(!a[h]){var m="function"==typeof require&&require;if(!l&&m)return m(h,!0);if(f)return f(h,!0);m=Error("Cannot find module '"+h+"'");throw m.code="MODULE_NOT_FOUND",m;}m=b[h]={ma:{}};a[h][0].call(m.ma,function(b){var d=
a[h][1][b];return e(d?d:b)},m,m.ma,d,a,b,g)}return b[h].ma}for(var f="function"==typeof require&&require,m=0;m<g.length;m++)e(g[m]);return e}({1:[function(a,b){function d(a,b,f,g,q){f=f||0;g=g||a.length-1;for(q=q||h;g>f;){if(600<g-f){var l=g-f+1,m=b-f+1,p=Math.log(l),n=.5*Math.exp(2*p/3),p=.5*Math.sqrt(p*n*(l-n)/l)*(0>m-l/2?-1:1);d(a,b,Math.max(f,Math.floor(b-m*n/l+p)),Math.min(g,Math.floor(b+(l-m)*n/l+p)),q)}l=a[b];m=f;n=g;e(a,f,b);for(0<q(a[g],l)&&e(a,f,g);m<n;){e(a,m,n);m++;for(n--;0>q(a[m],l);)m++;
for(;0<q(a[n],l);)n--}0===q(a[f],l)?e(a,f,n):(n++,e(a,n,g));n<=b&&(f=n+1);b<=n&&(g=n-1)}}function e(a,b,d){var e=a[b];a[b]=a[d];a[d]=e}function h(a,b){return a<b?-1:a>b?1:0}b.ma=d},{}],2:[function(a,b){function d(a,b){if(!(this instanceof d))return new d(a,b);this.Df=Math.max(4,a||9);this.Xg=Math.max(2,Math.ceil(.4*this.Df));b&&this.ak(b);this.clear()}function e(a,b){h(a,0,a.children.length,b,a)}function h(a,b,d,e,f){f||(f=x(null));f.da=Infinity;f.ga=Infinity;f.ba=-Infinity;f.ja=-Infinity;for(var g;b<
d;b++)g=a.children[b],l(f,a.gb?e(g):g);return f}function l(a,b){a.da=Math.min(a.da,b.da);a.ga=Math.min(a.ga,b.ga);a.ba=Math.max(a.ba,b.ba);a.ja=Math.max(a.ja,b.ja)}function m(a,b){return a.da-b.da}function n(a,b){return a.ga-b.ga}function p(a){return(a.ba-a.da)*(a.ja-a.ga)}function q(a){return a.ba-a.da+(a.ja-a.ga)}function r(a,b){return a.da<=b.da&&a.ga<=b.ga&&b.ba<=a.ba&&b.ja<=a.ja}function v(a,b){return b.da<=a.ba&&b.ga<=a.ja&&b.ba>=a.da&&b.ja>=a.ga}function x(a){return{children:a,height:1,gb:!0,
da:Infinity,ga:Infinity,ba:-Infinity,ja:-Infinity}}function y(a,b,d,e,f){for(var g=[b,d],h;g.length;)d=g.pop(),b=g.pop(),d-b<=e||(h=b+Math.ceil((d-b)/e/2)*e,A(a,h,b,d,f),g.push(b,h,h,d))}b.ma=d;var A=a("quickselect");d.prototype={all:function(){return this.Sg(this.data,[])},search:function(a){var b=this.data,d=[],e=this.xb;if(!v(a,b))return d;for(var f=[],g,h,l,m;b;){g=0;for(h=b.children.length;g<h;g++)l=b.children[g],m=b.gb?e(l):l,v(a,m)&&(b.gb?d.push(l):r(a,m)?this.Sg(l,d):f.push(l));b=f.pop()}return d},
load:function(a){if(!a||!a.length)return this;if(a.length<this.Xg){for(var b=0,d=a.length;b<d;b++)this.Ea(a[b]);return this}a=this.Ug(a.slice(),0,a.length-1,0);this.data.children.length?this.data.height===a.height?this.Zg(this.data,a):(this.data.height<a.height&&(b=this.data,this.data=a,a=b),this.Wg(a,this.data.height-a.height-1,!0)):this.data=a;return this},Ea:function(a){a&&this.Wg(a,this.data.height-1);return this},clear:function(){this.data=x([]);return this},remove:function(a,b){if(!a)return this;
for(var d=this.data,e=this.xb(a),f=[],g=[],h,l,m,p;d||f.length;){d||(d=f.pop(),l=f[f.length-1],h=g.pop(),p=!0);if(d.gb){a:{m=a;var n=d.children,q=b;if(q){for(var v=0;v<n.length;v++)if(q(m,n[v])){m=v;break a}m=-1}else m=n.indexOf(m)}if(-1!==m){d.children.splice(m,1);f.push(d);this.Zj(f);break}}p||d.gb||!r(d,e)?l?(h++,d=l.children[h],p=!1):d=null:(f.push(d),g.push(h),h=0,l=d,d=d.children[0])}return this},xb:function(a){return a},Hf:m,If:n,toJSON:function(){return this.data},Sg:function(a,b){for(var d=
[];a;)a.gb?b.push.apply(b,a.children):d.push.apply(d,a.children),a=d.pop();return b},Ug:function(a,b,d,f){var g=d-b+1,h=this.Df,l;if(g<=h)return l=x(a.slice(b,d+1)),e(l,this.xb),l;f||(f=Math.ceil(Math.log(g)/Math.log(h)),h=Math.ceil(g/Math.pow(h,f-1)));l=x([]);l.gb=!1;l.height=f;var g=Math.ceil(g/h),h=g*Math.ceil(Math.sqrt(h)),m,p,n;for(y(a,b,d,h,this.Hf);b<=d;b+=h)for(p=Math.min(b+h-1,d),y(a,b,p,g,this.If),m=b;m<=p;m+=g)n=Math.min(m+g-1,p),l.children.push(this.Ug(a,m,n,f-1));e(l,this.xb);return l},
Yj:function(a,b,d,e){for(var f,g,h,l,m,n,q,r;;){e.push(b);if(b.gb||e.length-1===d)break;q=r=Infinity;f=0;for(g=b.children.length;f<g;f++)h=b.children[f],m=p(h),n=(Math.max(h.ba,a.ba)-Math.min(h.da,a.da))*(Math.max(h.ja,a.ja)-Math.min(h.ga,a.ga))-m,n<r?(r=n,q=m<q?m:q,l=h):n===r&&m<q&&(q=m,l=h);b=l||b.children[0]}return b},Wg:function(a,b,d){var e=this.xb;d=d?a:e(a);var e=[],f=this.Yj(d,this.data,b,e);f.children.push(a);for(l(f,d);0<=b;)if(e[b].children.length>this.Df)this.fk(e,b),b--;else break;this.Vj(d,
e,b)},fk:function(a,b){var d=a[b],f=d.children.length,g=this.Xg;this.Wj(d,g,f);f=this.Xj(d,g,f);f=x(d.children.splice(f,d.children.length-f));f.height=d.height;f.gb=d.gb;e(d,this.xb);e(f,this.xb);b?a[b-1].children.push(f):this.Zg(d,f)},Zg:function(a,b){this.data=x([a,b]);this.data.height=a.height+1;this.data.gb=!1;e(this.data,this.xb)},Xj:function(a,b,d){var e,f,g,l,m,n,q;m=n=Infinity;for(e=b;e<=d-b;e++)f=h(a,0,e,this.xb),g=h(a,e,d,this.xb),l=Math.max(0,Math.min(f.ba,g.ba)-Math.max(f.da,g.da))*Math.max(0,
Math.min(f.ja,g.ja)-Math.max(f.ga,g.ga)),f=p(f)+p(g),l<m?(m=l,q=e,n=f<n?f:n):l===m&&f<n&&(n=f,q=e);return q},Wj:function(a,b,d){var e=a.gb?this.Hf:m,f=a.gb?this.If:n,g=this.Tg(a,b,d,e);b=this.Tg(a,b,d,f);g<b&&a.children.sort(e)},Tg:function(a,b,d,e){a.children.sort(e);e=this.xb;var f=h(a,0,b,e),g=h(a,d-b,d,e),m=q(f)+q(g),n,p;for(n=b;n<d-b;n++)p=a.children[n],l(f,a.gb?e(p):p),m+=q(f);for(n=d-b-1;n>=b;n--)p=a.children[n],l(g,a.gb?e(p):p),m+=q(g);return m},Vj:function(a,b,d){for(;0<=d;d--)l(b[d],a)},
Zj:function(a){for(var b=a.length-1,d;0<=b;b--)0===a[b].children.length?0<b?(d=a[b-1].children,d.splice(d.indexOf(a[b]),1)):this.clear():e(a[b],this.xb)},ak:function(a){var b=["return a"," - b",";"];this.Hf=new Function("a","b",b.join(a[0]));this.If=new Function("a","b",b.join(a[1]));this.xb=new Function("a","return {minX: a"+a[0]+", minY: a"+a[1]+", maxX: a"+a[2]+", maxY: a"+a[3]+"};")}}},{quickselect:1}]},{},[2])(2)});Cj=b.ma})();function Gj(a){this.b=Cj(a);this.a={}}k=Gj.prototype;k.Ea=function(a,b){var c={da:a[0],ga:a[1],ba:a[2],ja:a[3],value:b};this.b.Ea(c);this.a[w(b)]=c};k.load=function(a,b){for(var c=Array(b.length),d=0,e=b.length;d<e;d++){var f=a[d],g=b[d],f={da:f[0],ga:f[1],ba:f[2],ja:f[3],value:g};c[d]=f;this.a[w(g)]=f}this.b.load(c)};k.remove=function(a){a=w(a);var b=this.a[a];delete this.a[a];return null!==this.b.remove(b)};
function Hj(a,b,c){var d=a.a[w(c)];$a([d.da,d.ga,d.ba,d.ja],b)||(a.remove(c),a.Ea(b,c))}function Ij(a){return a.b.all().map(function(a){return a.value})}function Jj(a,b){return a.b.search({da:b[0],ga:b[1],ba:b[2],ja:b[3]}).map(function(a){return a.value})}k.forEach=function(a,b){return Kj(Ij(this),a,b)};function Lj(a,b,c,d){return Kj(Jj(a,b),c,d)}function Kj(a,b,c){for(var d,e=0,f=a.length;e<f&&!(d=b.call(c,a[e]));e++);return d}k.clear=function(){this.b.clear();this.a={}};
k.D=function(a){var b=this.b.data;return Wa(b.da,b.ga,b.ba,b.ja,a)};function Mj(a,b){si.call(this,0,b);this.j=new $i(0,b);this.v=null;this.O=[];this.c=[];this.l={fillColor:null,s:!1}}u(Mj,si);function Nj(a,b,c,d){var e=new uj,f=new Gj;b=Oj(a,b,d,e,f,!0);if(c.length){var g,h,l=[];g=0;for(h=c.length;g<h;++g){var m={list:new uj,ba:void 0};l.push(m);m.ba=Oj(a,c[g],d,m.list,f,!1)}l.sort(function(a,b){return b.ba-a.ba});for(g=0;g<l.length;++g)Pj(l[g].list,l[g].ba,e,b,f)}Qj(e,f,!1);Rj(a,e,f)}
function Oj(a,b,c,d,e,f){var g,h,l=a.a.length/2,m,n,p,q=[],r=[];if(f===Pf(b,0,b.length,c))for(n=m=Sj(a,b[0],b[1],l++),f=b[0],g=c,h=b.length;g<h;g+=c)p=Sj(a,b[g],b[g+1],l++),r.push(Tj(n,p,d)),q.push([Math.min(n.x,p.x),Math.min(n.y,p.y),Math.max(n.x,p.x),Math.max(n.y,p.y)]),f=b[g]>f?b[g]:f,n=p;else for(g=b.length-c,n=m=Sj(a,b[g],b[g+1],l++),f=b[g],g-=c,h=0;g>=h;g-=c)p=Sj(a,b[g],b[g+1],l++),r.push(Tj(n,p,d)),q.push([Math.min(n.x,p.x),Math.min(n.y,p.y),Math.max(n.x,p.x),Math.max(n.y,p.y)]),f=b[g]>f?b[g]:
f,n=p;r.push(Tj(p,m,d));q.push([Math.min(n.x,p.x),Math.min(n.y,p.y),Math.max(n.x,p.x),Math.max(n.y,p.y)]);e.load(q,r);return f}function Qj(a,b,c){var d=wj(a),e=d,f=xj(a),g=!1;do{var h=c?yi(f.X.x,f.X.y,e.X.x,e.X.y,e.aa.x,e.aa.y):yi(e.aa.x,e.aa.y,e.X.x,e.X.y,f.X.x,f.X.y);void 0===h?(Uj(e,f,a,b),g=!0,f===d&&(d=yj(a)),f=e,zj(a)):e.X.vb!==h&&(e.X.vb=h,g=!0);e=f;f=xj(a)}while(e!==d);return g}
function Pj(a,b,c,d,e){Qj(a,e,!0);for(var f=wj(a);f.X.x!==b;)f=xj(a);b=f.X;d={x:d,y:b.y,fb:-1};var g=Infinity,h,l,m,n;m=Vj({aa:b,X:d},e,!0);h=0;for(l=m.length;h<l;++h){var p=m[h];if(void 0===p.aa.vb){var q=Wj(b,d,p.aa,p.X,!0),r=Math.abs(b.x-q[0]);r<g&&(g=r,n={x:q[0],y:q[1],fb:-1},f=p)}}if(Infinity!==g){m=f.X;if(0<g&&(f=Xj(b,n,f.X,e),f.length))for(n=Infinity,h=0,l=f.length;h<l;++h)if(g=f[h],p=Math.atan2(b.y-g.y,d.x-g.x),p<n||p===n&&g.x<m.x)n=p,m=g;for(f=wj(c);f.X!==m;)f=xj(c);d={x:b.x,y:b.y,fb:b.fb,
vb:void 0};h={x:f.X.x,y:f.X.y,fb:f.X.fb,vb:void 0};yj(a).aa=d;Tj(b,f.X,a,e);Tj(h,d,a,e);f.X=h;a.i&&a.b&&(a.g=a.b,a.a=a.b.ub);c.concat(a)}}
function Rj(a,b,c){for(var d=!1,e=Yj(b,c);3<b.c;)if(e){if(!Zj(a,b,c,e,d)&&!Qj(b,c,d)&&!ak(a,b,c,!0))break}else if(!Zj(a,b,c,e,d)&&!Qj(b,c,d)&&!ak(a,b,c))if(e=Yj(b,c)){var d=b,f=2*d.c,g=Array(f),h=wj(d),l=h,m=0;do g[m++]=l.aa.x,g[m++]=l.aa.y,l=xj(d);while(l!==h);d=!Pf(g,0,f,2);Qj(b,c,d)}else{e=a;d=b;f=g=wj(d);do{h=Vj(f,c);if(h.length){g=h[0];h=Wj(f.aa,f.X,g.aa,g.X);h=Sj(e,h[0],h[1],e.a.length/2);l=new uj;m=new Gj;Tj(h,f.X,l,m);f.X=h;Hj(c,[Math.min(f.aa.x,h.x),Math.min(f.aa.y,h.y),Math.max(f.aa.x,h.x),
Math.max(f.aa.y,h.y)],f);for(f=xj(d);f!==g;)Tj(f.aa,f.X,l,m),c.remove(f),vj(d),f=Bj(d);Tj(g.aa,h,l,m);g.aa=h;Hj(c,[Math.min(g.X.x,h.x),Math.min(g.X.y,h.y),Math.max(g.X.x,h.x),Math.max(g.X.y,h.y)],g);Qj(d,c,!1);Rj(e,d,c);Qj(l,m,!1);Rj(e,l,m);break}f=xj(d)}while(f!==g);break}3===b.c&&(e=a.b.length,a.b[e++]=Aj(b).aa.fb,a.b[e++]=Bj(b).aa.fb,a.b[e++]=yj(b).aa.fb)}
function Zj(a,b,c,d,e){var f=a.b.length,g=wj(b),h=Aj(b),l=g,m=xj(b),n=yj(b),p,q,r,v=!1;do{p=l.aa;q=l.X;r=m.X;if(!1===q.vb){var x=e?bk(n.X,r,q,p,h.aa):bk(h.aa,p,q,r,n.X);!d&&Vj({aa:p,X:r},c).length||!x||Xj(p,q,r,c,!0).length||!d&&!1!==p.vb&&!1!==r.vb&&Pf([h.aa.x,h.aa.y,p.x,p.y,q.x,q.y,r.x,r.y,n.X.x,n.X.y],0,10,2)!==!e||(a.b[f++]=p.fb,a.b[f++]=q.fb,a.b[f++]=r.fb,Uj(l,m,b,c),m===g&&(g=n),v=!0)}h=Aj(b);l=Bj(b);m=xj(b);n=yj(b)}while(l!==g&&3<b.c);return v}
function ak(a,b,c,d){var e=wj(b);xj(b);var f=e,g=xj(b),h=!1;do{var l=Wj(f.aa,f.X,g.aa,g.X,d);if(l){var m,h=a.b.length,n=a.a.length/2,p=zj(b);vj(b);c.remove(p);m=p===e;d?(l[0]===f.aa.x&&l[1]===f.aa.y?(zj(b),l=f.aa,g.aa=l,c.remove(f),m=m||f===e):(l=g.X,f.X=l,c.remove(g),m=m||g===e),vj(b)):(l=Sj(a,l[0],l[1],n),f.X=l,g.aa=l,Hj(c,[Math.min(f.aa.x,f.X.x),Math.min(f.aa.y,f.X.y),Math.max(f.aa.x,f.X.x),Math.max(f.aa.y,f.X.y)],f),Hj(c,[Math.min(g.aa.x,g.X.x),Math.min(g.aa.y,g.X.y),Math.max(g.aa.x,g.X.x),Math.max(g.aa.y,
g.X.y)],g));a.b[h++]=p.aa.fb;a.b[h++]=p.X.fb;a.b[h++]=l.fb;h=!0;if(m)break}f=Aj(b);g=xj(b)}while(f!==e);return h}function Yj(a,b){var c=wj(a),d=c;do{if(Vj(d,b).length)return!1;d=xj(a)}while(d!==c);return!0}function Sj(a,b,c,d){var e=a.a.length;a.a[e++]=b;a.a[e++]=c;return{x:b,y:c,fb:d,vb:void 0}}
function Tj(a,b,c,d){var e={aa:a,X:b},f={ub:void 0,next:void 0,data:e},g=c.b;if(g){var h=g.next;f.ub=g;f.next=h;g.next=f;h&&(h.ub=f);g===c.a&&(c.a=f)}else c.g=f,c.a=f,c.i&&(f.next=f,f.ub=f);c.b=f;c.c++;d&&d.Ea([Math.min(a.x,b.x),Math.min(a.y,b.y),Math.max(a.x,b.x),Math.max(a.y,b.y)],e);return e}function Uj(a,b,c,d){Bj(c)===b&&(vj(c),a.X=b.X,d.remove(b),Hj(d,[Math.min(a.aa.x,a.X.x),Math.min(a.aa.y,a.X.y),Math.max(a.aa.x,a.X.x),Math.max(a.aa.y,a.X.y)],a))}
function Xj(a,b,c,d,e){var f,g,h,l=[],m=Jj(d,[Math.min(a.x,b.x,c.x),Math.min(a.y,b.y,c.y),Math.max(a.x,b.x,c.x),Math.max(a.y,b.y,c.y)]);d=0;for(f=m.length;d<f;++d)for(g in m[d])h=m[d][g],"object"!==typeof h||e&&!h.vb||h.x===a.x&&h.y===a.y||h.x===b.x&&h.y===b.y||h.x===c.x&&h.y===c.y||-1!==l.indexOf(h)||!Jf([a.x,a.y,b.x,b.y,c.x,c.y],0,6,2,h.x,h.y)||l.push(h);return l}
function Vj(a,b,c){var d=a.aa,e=a.X;b=Jj(b,[Math.min(d.x,e.x),Math.min(d.y,e.y),Math.max(d.x,e.x),Math.max(d.y,e.y)]);var f=[],g,h;g=0;for(h=b.length;g<h;++g){var l=b[g];a!==l&&(c||l.aa!==e||l.X!==d)&&Wj(d,e,l.aa,l.X,c)&&f.push(l)}return f}
function Wj(a,b,c,d,e){var f=(d.y-c.y)*(b.x-a.x)-(d.x-c.x)*(b.y-a.y);if(f&&(d=((d.x-c.x)*(a.y-c.y)-(d.y-c.y)*(a.x-c.x))/f,c=((b.x-a.x)*(a.y-c.y)-(b.y-a.y)*(a.x-c.x))/f,!e&&d>zi&&d<1-zi&&c>zi&&c<1-zi||e&&0<=d&&1>=d&&0<=c&&1>=c))return[a.x+d*(b.x-a.x),a.y+d*(b.y-a.y)]}
function bk(a,b,c,d,e){if(void 0===b.vb||void 0===d.vb)return!1;var f=(c.x-d.x)*(b.y-d.y)>(c.y-d.y)*(b.x-d.x);e=(e.x-d.x)*(b.y-d.y)<(e.y-d.y)*(b.x-d.x);a=(a.x-b.x)*(d.y-b.y)>(a.y-b.y)*(d.x-b.x);c=(c.x-b.x)*(d.y-b.y)<(c.y-b.y)*(d.x-b.x);b=b.vb?c||a:c&&a;return(d.vb?e||f:e&&f)&&b}k=Mj.prototype;
k.rc=function(a,b){var c=a.md(),d=a.sa(),e=this.b.length,f=this.j.b.length,g,h,l,m;g=0;for(h=c.length;g<h;++g){var n=c[g].Oc();if(0<n.length){var p=n[0].ia(),p=nf(p,p.length,d,-this.origin[0],-this.origin[1]),q=[],r;l=1;for(m=n.length;l<m;++l)r=n[l].ia(),r=nf(r,r.length,d,-this.origin[0],-this.origin[1]),q.push(r);lj(this.j,p,q,d);Nj(this,p,q,d)}}this.b.length>e&&(this.g.push(e),this.f.push(b),this.l.s&&(this.c.push(e),this.l.s=!1));this.j.b.length>f&&mj(this.j,b,f)};
k.tc=function(a,b){var c=a.Oc(),d=a.sa();if(0<c.length){this.g.push(this.b.length);this.f.push(b);this.l.s&&(this.c.push(this.b.length),this.l.s=!1);mj(this.j,b);var e=c[0].ia(),e=nf(e,e.length,d,-this.origin[0],-this.origin[1]),f=[],g,h,l;g=1;for(h=c.length;g<h;++g)l=c[g].ia(),l=nf(l,l.length,d,-this.origin[0],-this.origin[1]),f.push(l);lj(this.j,e,f,d);Nj(this,e,f,d)}};
k.Bb=function(a){this.u=new Ai(this.a);this.o=new Ai(this.b);this.g.push(this.b.length);this.j.Bb(a);!this.c.length&&0<this.O.length&&(this.O=[]);this.b=this.a=null};k.Cb=function(a){var b=this.u,c=this.o,d=this.j.Cb(a);return function(){Di(a,b);Di(a,c);d()}};k.qf=function(a,b){var c=Ei(b,pj,rj),d;this.v?d=this.v:this.v=d=new sj(a,c);b.Vc(c);a.enableVertexAttribArray(d.b);a.vertexAttribPointer(d.b,2,5126,!1,8,0);return d};k.rf=function(a,b){a.disableVertexAttribArray(b.b)};
k.Pd=function(a,b,c,d){var e=a.getParameter(a.DEPTH_FUNC),f=a.getParameter(a.DEPTH_WRITEMASK);d||(a.enable(a.DEPTH_TEST),a.depthMask(!0),a.depthFunc(a.NOTEQUAL));if(tb(c)){var g,h,l;h=this.g[this.g.length-1];for(c=this.c.length-1;0<=c;--c)g=this.c[c],l=this.O[c],a.uniform4fv(this.v.G,l),ui(a,b,g,h),h=g}else{var m,n,p,q;p=this.g.length-2;l=h=this.g[p+1];for(g=this.c.length-1;0<=g;--g){m=this.O[g];a.uniform4fv(this.v.G,m);for(m=this.c[g];0<=p&&this.g[p]>=m;)q=this.g[p],n=this.f[p],n=w(n).toString(),
c[n]&&(h!==l&&(ui(a,b,h,l),a.clear(a.DEPTH_BUFFER_BIT)),l=q),p--,h=q;h!==l&&(ui(a,b,h,l),a.clear(a.DEPTH_BUFFER_BIT));h=l=m}}d||(a.disable(a.DEPTH_TEST),a.clear(a.DEPTH_BUFFER_BIT),a.depthMask(f),a.depthFunc(e))};
k.ve=function(a,b,c,d,e){var f,g,h,l,m,n,p;p=this.g.length-2;h=this.g[p+1];for(f=this.c.length-1;0<=f;--f)for(g=this.O[f],a.uniform4fv(this.v.G,g),l=this.c[f];0<=p&&this.g[p]>=l;){g=this.g[p];m=this.f[p];n=w(m).toString();if(void 0===c[n]&&m.U()&&(void 0===e||nb(e,m.U().D()))&&(a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT),ui(a,b,g,h),h=d(m)))return h;p--;h=g}};
k.Na=function(a,b){var c=a?a.b:[0,0,0,0];c instanceof CanvasGradient||c instanceof CanvasPattern?c=vi:c=bd(c).map(function(a,b){return 3!=b?a/255:a})||vi;this.l.fillColor&&ja(c,this.l.fillColor)||(this.l.fillColor=c,this.l.s=!0,this.O.push(c));b?this.j.Na(null,b):this.j.Na(null,new tj({color:[0,0,0,0],lineWidth:0}))};function ck(){}ck.prototype.i=function(){};function dk(a,b,c){this.f=b;this.j=a;this.c=c;this.a={}}u(dk,hi);function ek(a,b){var c=[],d;for(d in a.a){var e=a.a[d],f;for(f in e)c.push(e[f].Cb(b))}return function(){for(var a=c.length,b,d=0;d<a;d++)b=c[d].apply(this,arguments);return b}}function fk(a,b){for(var c in a.a){var d=a.a[c],e;for(e in d)d[e].Bb(b)}}dk.prototype.b=function(a,b){var c=void 0!==a?a.toString():"0",d=this.a[c];void 0===d&&(d={},this.a[c]=d);c=d[b];void 0===c&&(c=new gk[b](this.j,this.f),d[b]=c);return c};
dk.prototype.g=function(){return tb(this.a)};dk.prototype.i=function(a,b,c,d,e,f,g,h){var l=Object.keys(this.a).map(Number);l.sort(ea);var m,n,p,q,r,v;m=0;for(n=l.length;m<n;++m)for(r=this.a[l[m].toString()],p=0,q=gi.length;p<q;++p)v=r[gi[p]],void 0!==v&&v.i(a,b,c,d,e,f,g,h,void 0,!1)};
function hk(a,b,c,d,e,f,g,h,l,m,n){var p=ik,q=Object.keys(a.a).map(Number);q.sort(function(a,b){return b-a});var r,v,x,y,A;r=0;for(v=q.length;r<v;++r)for(y=a.a[q[r].toString()],x=gi.length-1;0<=x;--x)if(A=y[gi[x]],void 0!==A&&(A=A.i(b,c,d,e,p,f,g,h,l,m,n)))return A}
dk.prototype.Ba=function(a,b,c,d,e,f,g,h,l,m){var n=b.b;n.bindFramebuffer(n.FRAMEBUFFER,Mi(b));var p;void 0!==this.c&&(p=Ma(Xa(a),d*this.c));return hk(this,b,a,d,e,g,h,l,function(a){var b=new Uint8Array(4);n.readPixels(0,0,1,1,n.RGBA,n.UNSIGNED_BYTE,b);if(0<b[3]&&(a=m(a)))return a},!0,p)};
function jk(a,b,c,d,e,f,g,h){var l=c.b;l.bindFramebuffer(l.FRAMEBUFFER,Mi(c));return void 0!==hk(a,c,b,d,e,f,g,h,function(){var a=new Uint8Array(4);l.readPixels(0,0,1,1,l.RGBA,l.UNSIGNED_BYTE,a);return 0<a[3]},!1)}var ik=[1,1],gk={Circle:Ci,Image:Ri,LineString:$i,Polygon:Mj,Text:ck};function kk(a,b,c,d,e,f,g){this.b=a;this.g=b;this.a=f;this.c=g;this.j=e;this.f=d;this.i=c;this.l=this.o=this.u=null}u(kk,Th);k=kk.prototype;k.td=function(a){this.Na(a.Ca(),a.Da());this.Wb(a.Y())};
k.oc=function(a){switch(a.S()){case "Point":this.sc(a,null);break;case "LineString":this.Rb(a,null);break;case "Polygon":this.tc(a,null);break;case "MultiPoint":this.qc(a,null);break;case "MultiLineString":this.pc(a,null);break;case "MultiPolygon":this.rc(a,null);break;case "GeometryCollection":this.ue(a,null);break;case "Circle":this.ac(a,null)}};k.te=function(a,b){var c=(0,b.Qa)(a);c&&nb(this.a,c.D())&&(this.td(b),this.oc(c))};k.ue=function(a){a=a.a;var b,c;b=0;for(c=a.length;b<c;++b)this.oc(a[b])};
k.sc=function(a,b){var c=this.b,d=(new dk(1,this.a)).b(0,"Image");d.Wb(this.u);d.sc(a,b);d.Bb(c);d.i(this.b,this.g,this.i,this.f,this.j,this.c,1,{},void 0,!1);d.Cb(c)()};k.qc=function(a,b){var c=this.b,d=(new dk(1,this.a)).b(0,"Image");d.Wb(this.u);d.qc(a,b);d.Bb(c);d.i(this.b,this.g,this.i,this.f,this.j,this.c,1,{},void 0,!1);d.Cb(c)()};
k.Rb=function(a,b){var c=this.b,d=(new dk(1,this.a)).b(0,"LineString");d.Na(null,this.l);d.Rb(a,b);d.Bb(c);d.i(this.b,this.g,this.i,this.f,this.j,this.c,1,{},void 0,!1);d.Cb(c)()};k.pc=function(a,b){var c=this.b,d=(new dk(1,this.a)).b(0,"LineString");d.Na(null,this.l);d.pc(a,b);d.Bb(c);d.i(this.b,this.g,this.i,this.f,this.j,this.c,1,{},void 0,!1);d.Cb(c)()};
k.tc=function(a,b){var c=this.b,d=(new dk(1,this.a)).b(0,"Polygon");d.Na(this.o,this.l);d.tc(a,b);d.Bb(c);d.i(this.b,this.g,this.i,this.f,this.j,this.c,1,{},void 0,!1);d.Cb(c)()};k.rc=function(a,b){var c=this.b,d=(new dk(1,this.a)).b(0,"Polygon");d.Na(this.o,this.l);d.rc(a,b);d.Bb(c);d.i(this.b,this.g,this.i,this.f,this.j,this.c,1,{},void 0,!1);d.Cb(c)()};
k.ac=function(a,b){var c=this.b,d=(new dk(1,this.a)).b(0,"Circle");d.Na(this.o,this.l);d.ac(a,b);d.Bb(c);d.i(this.b,this.g,this.i,this.f,this.j,this.c,1,{},void 0,!1);d.Cb(c)()};k.Wb=function(a){this.u=a};k.Na=function(a,b){this.o=a;this.l=b};function lk(){this.c=0;this.b={};this.g=this.a=null}k=lk.prototype;k.clear=function(){this.c=0;this.b={};this.g=this.a=null};k.forEach=function(a,b){for(var c=this.a;c;)a.call(b,c.cd,c.wc,this),c=c.Mb};k.get=function(a){a=this.b[a];sa(!!a,15);if(a===this.g)return a.cd;a===this.a?(this.a=this.a.Mb,this.a.xd=null):(a.Mb.xd=a.xd,a.xd.Mb=a.Mb);a.Mb=null;a.xd=this.g;this.g=this.g.Mb=a;return a.cd};
k.pop=function(){var a=this.a;delete this.b[a.wc];a.Mb&&(a.Mb.xd=null);this.a=a.Mb;this.a||(this.g=null);--this.c;return a.cd};k.replace=function(a,b){this.get(a);this.b[a].cd=b};k.set=function(a,b){sa(!(a in this.b),16);var c={wc:a,Mb:null,xd:this.g,cd:b};this.g?this.g.Mb=c:this.a=c;this.g=c;this.b[a]=c;++this.c};function mk(a,b){Jh.call(this,0,b);this.b=document.createElement("CANVAS");this.b.style.width="100%";this.b.style.height="100%";this.b.style.display="block";this.b.className="ol-unselectable";a.insertBefore(this.b,a.childNodes[0]||null);this.O=this.A=0;this.C=hd();this.o=!0;this.g=Md(this.b,{antialias:!0,depth:!0,failIfMajorPerformanceCaveat:!0,preserveDrawingBuffer:!1,stencil:!0});this.i=new Li(this.b,this.g);z(this.b,"webglcontextlost",this.On,this);z(this.b,"webglcontextrestored",this.Pn,this);
this.a=new lk;this.v=null;this.j=new Ie(function(a){var b=a[1];a=a[2];var c=b[0]-this.v[0],b=b[1]-this.v[1];return 65536*Math.log(a)+Math.sqrt(c*c+b*b)/a}.bind(this),function(a){return a[0].hb()});this.G=function(){if(this.j.b.length){Me(this.j);var a=Je(this.j);nk(this,a[0],a[3],a[4])}return!1}.bind(this);this.f=0;ok(this)}u(mk,Jh);
function nk(a,b,c,d){var e=a.g,f=b.hb();if(a.a.b.hasOwnProperty(f))a=a.a.get(f),e.bindTexture(3553,a.Fb),9729!=a.Ih&&(e.texParameteri(3553,10240,9729),a.Ih=9729),9729!=a.Kh&&(e.texParameteri(3553,10241,9729),a.Kh=9729);else{var g=e.createTexture();e.bindTexture(3553,g);if(0<d){var h=a.C.canvas,l=a.C;a.A!==c[0]||a.O!==c[1]?(h.width=c[0],h.height=c[1],a.A=c[0],a.O=c[1]):l.clearRect(0,0,c[0],c[1]);l.drawImage(b.Y(),d,d,c[0],c[1],0,0,c[0],c[1]);e.texImage2D(3553,0,6408,6408,5121,h)}else e.texImage2D(3553,
0,6408,6408,5121,b.Y());e.texParameteri(3553,10240,9729);e.texParameteri(3553,10241,9729);e.texParameteri(3553,10242,33071);e.texParameteri(3553,10243,33071);a.a.set(f,{Fb:g,Ih:9729,Kh:9729})}}function pk(a,b,c){var d=a.l;if(Oc(d,b)){a=a.i;var e=c.viewState;d.b(new Oh(b,new kk(a,e.center,e.resolution,e.rotation,c.size,c.extent,c.pixelRatio),c,null,a))}}k=mk.prototype;k.ra=function(){var a=this.g;a.isContextLost()||this.a.forEach(function(b){b&&a.deleteTexture(b.Fb)});Kc(this.i);Jh.prototype.ra.call(this)};
k.tk=function(a,b){for(var c=this.g,d;1024<this.a.c-this.f;){if(d=this.a.a.cd)c.deleteTexture(d.Fb);else if(+this.a.a.wc==b.index)break;else--this.f;this.a.pop()}};k.S=function(){return"webgl"};k.On=function(a){a.preventDefault();this.a.clear();this.f=0;a=this.c;for(var b in a)a[b].hg()};k.Pn=function(){ok(this);this.l.render()};function ok(a){a=a.g;a.activeTexture(33984);a.blendFuncSeparate(770,771,1,771);a.disable(2884);a.disable(2929);a.disable(3089);a.disable(2960)}
k.Dg=function(a){var b=this.i,c=this.g;if(c.isContextLost())return!1;if(!a)return this.o&&(this.b.style.display="none",this.o=!1),!1;this.v=a.focus;this.a.set((-a.index).toString(),null);++this.f;pk(this,"precompose",a);var d=[],e=a.layerStatesArray;ka(e);var f=a.viewState.resolution,g,h,l,m;g=0;for(h=e.length;g<h;++g)m=e[g],uh(m,f)&&"ready"==m.uj&&(l=Mh(this,m.layer),l.ig(a,m,b)&&d.push(m));e=a.size[0]*a.pixelRatio;f=a.size[1]*a.pixelRatio;if(this.b.width!=e||this.b.height!=f)this.b.width=e,this.b.height=
f;c.bindFramebuffer(36160,null);c.clearColor(0,0,0,0);c.clear(16384);c.enable(3042);c.viewport(0,0,this.b.width,this.b.height);g=0;for(h=d.length;g<h;++g)m=d[g],l=Mh(this,m.layer),l.zi(a,m,b);this.o||(this.b.style.display="",this.o=!0);Kh(a);1024<this.a.c-this.f&&a.postRenderFunctions.push(this.tk.bind(this));this.j.b.length&&(a.postRenderFunctions.push(this.G),a.animate=!0);pk(this,"postcompose",a);Nh(this,a);a.postRenderFunctions.push(Lh)};
k.Ba=function(a,b,c,d,e,f,g){var h;if(this.g.isContextLost())return!1;var l=b.viewState,m=b.layerStatesArray,n;for(n=m.length-1;0<=n;--n){h=m[n];var p=h.layer;if(uh(h,l.resolution)&&f.call(g,p)&&(h=Mh(this,p).Ba(a,b,c,d,e)))return h}};k.xi=function(a,b,c,d,e){c=!1;if(this.g.isContextLost())return!1;var f=b.viewState,g=b.layerStatesArray,h;for(h=g.length-1;0<=h;--h){var l=g[h],m=l.layer;if(uh(l,f.resolution)&&d.call(e,m)&&(c=Mh(this,m).Te(a,b)))return!0}return c};
k.wi=function(a,b,c,d,e){if(this.g.isContextLost())return!1;var f=b.viewState,g,h=b.layerStatesArray,l;for(l=h.length-1;0<=l;--l){g=h[l];var m=g.layer;if(uh(g,f.resolution)&&e.call(d,m)&&(g=Mh(this,m).gg(a,b,c,d)))return g}};var qk=["canvas","webgl"];
function H(a){Qc.call(this);var b=rk(a);this.yf=void 0!==a.loadTilesWhileAnimating?a.loadTilesWhileAnimating:!1;this.zf=void 0!==a.loadTilesWhileInteracting?a.loadTilesWhileInteracting:!1;this.Ef=void 0!==a.pixelRatio?a.pixelRatio:Td;this.wf=b.logos;this.fa=function(){this.f=void 0;this.Ip.call(this,Date.now())}.bind(this);this.Gb=yh();this.Ff=yh();this.le=0;this.a=null;this.yb=Ja();this.G=this.I=this.Z=null;this.c=document.createElement("DIV");this.c.className="ol-viewport"+(Yd?" ol-touch":"");this.c.style.position=
"relative";this.c.style.overflow="hidden";this.c.style.width="100%";this.c.style.height="100%";this.c.style.msTouchAction="none";this.c.style.touchAction="none";this.A=document.createElement("DIV");this.A.className="ol-overlaycontainer";this.c.appendChild(this.A);this.v=document.createElement("DIV");this.v.className="ol-overlaycontainer-stopevent";a="click dblclick mousedown touchstart MSPointerDown pointerdown mousewheel wheel".split(" ");for(var c=0,d=a.length;c<d;++c)z(this.v,a[c],Mc);this.c.appendChild(this.v);
this.Ja=new Fe(this);for(var e in Id)z(this.Ja,Id[e],this.Bh,this);this.na=b.keyboardEventTarget;this.u=null;z(this.c,"wheel",this.pd,this);z(this.c,"mousewheel",this.pd,this);this.l=b.controls;this.j=b.interactions;this.o=b.overlays;this.lg={};this.C=new b.Kp(this.c,this);this.T=null;this.Va=[];this.Ha=new Ne(this.ll.bind(this),this.Rl.bind(this));this.ea={};z(this,Sc("layergroup"),this.zl,this);z(this,Sc("view"),this.Sl,this);z(this,Sc("size"),this.Ol,this);z(this,Sc("target"),this.Ql,this);this.H(b.values);
this.l.forEach(function(a){a.setMap(this)},this);z(this.l,"add",function(a){a.element.setMap(this)},this);z(this.l,"remove",function(a){a.element.setMap(null)},this);this.j.forEach(function(a){a.setMap(this)},this);z(this.j,"add",function(a){a.element.setMap(this)},this);z(this.j,"remove",function(a){a.element.setMap(null)},this);this.o.forEach(this.bh,this);z(this.o,"add",function(a){this.bh(a.element)},this);z(this.o,"remove",function(a){var b=a.element.f;void 0!==b&&delete this.lg[b.toString()];
a.element.setMap(null)},this)}u(H,Qc);k=H.prototype;k.gk=function(a){this.l.push(a)};k.hk=function(a){this.j.push(a)};k.$g=function(a){this.Mc().sd().push(a)};k.ah=function(a){this.o.push(a)};k.bh=function(a){var b=a.f;void 0!==b&&(this.lg[b.toString()]=a);a.setMap(this)};
k.ra=function(){Kc(this.Ja);Kc(this.C);Hc(this.c,"wheel",this.pd,this);Hc(this.c,"mousewheel",this.pd,this);this.i&&(window.removeEventListener("resize",this.i,!1),this.i=void 0);this.f&&(cancelAnimationFrame(this.f),this.f=void 0);this.Ke(null);Qc.prototype.ra.call(this)};k.we=function(a,b,c){if(this.a)return a=this.Xa(a),c=c?c:{},this.C.Ba(a,this.a,void 0!==c.hitTolerance?c.hitTolerance*this.a.pixelRatio:0,b,null,c.layerFilter?c.layerFilter:jf,null)};
k.Em=function(a,b,c,d,e){if(this.a)return this.C.wi(a,this.a,b,void 0!==c?c:null,d?d:jf,void 0!==e?e:null)};k.Tl=function(a,b){if(!this.a)return!1;var c=this.Xa(a);b=b?b:{};return this.C.xi(c,this.a,void 0!==b.hitTolerance?b.hitTolerance*this.a.pixelRatio:0,b.layerFilter?b.layerFilter:jf,null)};k.Of=function(a){return this.Xa(this.xe(a))};k.xe=function(a){var b=this.c.getBoundingClientRect();a=a.changedTouches?a.changedTouches[0]:a;return[a.clientX-b.left,a.clientY-b.top]};k.Wf=function(){return this.get("target")};
k.vc=function(){var a=this.Wf();return void 0!==a?"string"===typeof a?document.getElementById(a):a:null};k.Xa=function(a){var b=this.a;return b?Dh(b.pixelToCoordinateTransform,a.slice()):null};k.Hk=function(){return this.l};k.al=function(){return this.o};k.$k=function(a){a=this.lg[a.toString()];return void 0!==a?a:null};k.Nk=function(){return this.j};k.Mc=function(){return this.get("layergroup")};k.Qh=function(){return this.Mc().sd()};
k.Ka=function(a){var b=this.a;return b?Dh(b.coordinateToPixelTransform,a.slice(0,2)):null};k.Nb=function(){return this.get("size")};k.$=function(){return this.get("view")};k.nl=function(){return this.c};k.ll=function(a,b,c,d){var e=this.a;if(!(e&&b in e.wantedTiles&&e.wantedTiles[b][a.hb()]))return Infinity;a=c[0]-e.focus[0];c=c[1]-e.focus[1];return 65536*Math.log(d)+Math.sqrt(a*a+c*c)/d};k.pd=function(a,b){var c=new Hd(b||a.type,this,a);this.Bh(c)};
k.Bh=function(a){if(this.a){this.T=a.coordinate;a.frameState=this.a;var b=this.j.a,c;if(!1!==this.b(a))for(c=b.length-1;0<=c;c--){var d=b[c];if(d.c()&&!d.handleEvent(a))break}}};k.Ml=function(){var a=this.a,b=this.Ha;if(b.b.length){var c=16,d=c;if(a){var e=a.viewHints;e[0]&&(c=this.yf?8:0,d=2);e[1]&&(c=this.zf?8:0,d=2)}b.j<c&&(Me(b),Oe(b,c,d))}b=this.Va;c=0;for(d=b.length;c<d;++c)b[c](this,a);b.length=0};k.Ol=function(){this.render()};
k.Ql=function(){var a;this.Wf()&&(a=this.vc());if(this.u){for(var b=0,c=this.u.length;b<c;++b)Bc(this.u[b]);this.u=null}a?(a.appendChild(this.c),a=this.na?this.na:a,this.u=[z(a,"keydown",this.pd,this),z(a,"keypress",this.pd,this)],this.i||(this.i=this.Cd.bind(this),window.addEventListener("resize",this.i,!1))):(jd(this.c),this.i&&(window.removeEventListener("resize",this.i,!1),this.i=void 0));this.Cd()};k.Rl=function(){this.render()};k.Eh=function(){this.render()};
k.Sl=function(){this.Z&&(Bc(this.Z),this.Z=null);this.I&&(Bc(this.I),this.I=null);var a=this.$();a&&(this.c.setAttribute("data-view",w(a)),this.Z=z(a,"propertychange",this.Eh,this),this.I=z(a,"change",this.Eh,this));this.render()};k.zl=function(){this.G&&(this.G.forEach(Bc),this.G=null);var a=this.Mc();a&&(this.G=[z(a,"propertychange",this.render,this),z(a,"change",this.render,this)]);this.render()};k.Jp=function(){this.f&&cancelAnimationFrame(this.f);this.fa()};
k.render=function(){void 0===this.f&&(this.f=requestAnimationFrame(this.fa))};k.Cp=function(a){return this.l.remove(a)};k.Dp=function(a){return this.j.remove(a)};k.Fp=function(a){return this.Mc().sd().remove(a)};k.Gp=function(a){return this.o.remove(a)};
k.Ip=function(a){var b,c,d=this.Nb(),e=this.$(),f=Ja(),g=null;if(void 0!==d&&0<d[0]&&0<d[1]&&e&&hg(e)){var g=ag(e,this.a?this.a.viewHints:void 0),h=this.Mc().Tf(),l={};b=0;for(c=h.length;b<c;++b)l[w(h[b].layer)]=h[b];b=e.V();g={animate:!1,attributions:{},coordinateToPixelTransform:this.Gb,extent:f,focus:this.T?this.T:b.center,index:this.le++,layerStates:l,layerStatesArray:h,logos:qb({},this.wf),pixelRatio:this.Ef,pixelToCoordinateTransform:this.Ff,postRenderFunctions:[],size:d,skippedFeatureUids:this.ea,
tileQueue:this.Ha,time:a,usedTiles:{},viewState:b,viewHints:g,wantedTiles:{}}}g&&(g.extent=lb(b.center,b.resolution,b.rotation,g.size,f));this.a=g;this.C.Dg(g);g&&(g.animate&&this.render(),Array.prototype.push.apply(this.Va,g.postRenderFunctions),g.viewHints[0]||g.viewHints[1]||$a(g.extent,this.yb)||(this.b(new Gd("moveend",this,g)),Oa(g.extent,this.yb)));this.b(new Gd("postrender",this,g));setTimeout(this.Ml.bind(this),0)};k.lj=function(a){this.set("layergroup",a)};
k.Ig=function(a){this.set("size",a)};k.Ke=function(a){this.set("target",a)};k.Yp=function(a){this.set("view",a)};k.tj=function(a){a=w(a).toString();this.ea[a]=!0;this.render()};k.Cd=function(){var a=this.vc();if(a){var b=getComputedStyle(a);this.Ig([a.offsetWidth-parseFloat(b.borderLeftWidth)-parseFloat(b.paddingLeft)-parseFloat(b.paddingRight)-parseFloat(b.borderRightWidth),a.offsetHeight-parseFloat(b.borderTopWidth)-parseFloat(b.paddingTop)-parseFloat(b.paddingBottom)-parseFloat(b.borderBottomWidth)])}else this.Ig(void 0)};
k.yj=function(a){a=w(a).toString();delete this.ea[a];this.render()};
function rk(a){var b=null;void 0!==a.keyboardEventTarget&&(b="string"===typeof a.keyboardEventTarget?document.getElementById(a.keyboardEventTarget):a.keyboardEventTarget);var c={},d={};if(void 0===a.logo||"boolean"===typeof a.logo&&a.logo)d["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAHGAAABxgEXwfpGAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAhNQTFRF////AP//AICAgP//AFVVQECA////K1VVSbbbYL/fJ05idsTYJFtbbcjbJllmZszWWMTOIFhoHlNiZszTa9DdUcHNHlNlV8XRIVdiasrUHlZjIVZjaMnVH1RlIFRkH1RkH1ZlasvYasvXVsPQH1VkacnVa8vWIVZjIFRjVMPQa8rXIVVkXsXRsNveIFVkIFZlIVVj3eDeh6GmbMvXH1ZkIFRka8rWbMvXIFVkIFVjIFVkbMvWH1VjbMvWIFVlbcvWIFVla8vVIFVkbMvWbMvVH1VkbMvWIFVlbcvWIFVkbcvVbMvWjNPbIFVkU8LPwMzNIFVkbczWIFVkbsvWbMvXIFVkRnB8bcvW2+TkW8XRIFVkIlZlJVloJlpoKlxrLl9tMmJwOWd0Omh1RXF8TneCT3iDUHiDU8LPVMLPVcLPVcPQVsPPVsPQV8PQWMTQWsTQW8TQXMXSXsXRX4SNX8bSYMfTYcfTYsfTY8jUZcfSZsnUaIqTacrVasrVa8jTa8rWbI2VbMvWbcvWdJObdcvUdszUd8vVeJaee87Yfc3WgJyjhqGnitDYjaarldPZnrK2oNbborW5o9bbo9fbpLa6q9ndrL3ArtndscDDutzfu8fJwN7gwt7gxc/QyuHhy+HizeHi0NfX0+Pj19zb1+Tj2uXk29/e3uLg3+Lh3+bl4uXj4ufl4+fl5Ofl5ufl5ujm5+jmySDnBAAAAFp0Uk5TAAECAgMEBAYHCA0NDg4UGRogIiMmKSssLzU7PkJJT1JTVFliY2hrdHZ3foSFhYeJjY2QkpugqbG1tre5w8zQ09XY3uXn6+zx8vT09vf4+Pj5+fr6/P39/f3+gz7SsAAAAVVJREFUOMtjYKA7EBDnwCPLrObS1BRiLoJLnte6CQy8FLHLCzs2QUG4FjZ5GbcmBDDjxJBXDWxCBrb8aM4zbkIDzpLYnAcE9VXlJSWlZRU13koIeW57mGx5XjoMZEUqwxWYQaQbSzLSkYGfKFSe0QMsX5WbjgY0YS4MBplemI4BdGBW+DQ11eZiymfqQuXZIjqwyadPNoSZ4L+0FVM6e+oGI6g8a9iKNT3o8kVzNkzRg5lgl7p4wyRUL9Yt2jAxVh6mQCogae6GmflI8p0r13VFWTHBQ0rWPW7ahgWVcPm+9cuLoyy4kCJDzCm6d8PSFoh0zvQNC5OjDJhQopPPJqph1doJBUD5tnkbZiUEqaCnB3bTqLTFG1bPn71kw4b+GFdpLElKIzRxxgYgWNYc5SCENVHKeUaltHdXx0dZ8uBI1hJ2UUDgq82CM2MwKeibqAvSO7MCABq0wXEPiqWEAAAAAElFTkSuQmCC"]="https://openlayers.org/";
else{var e=a.logo;"string"===typeof e?d[e]="":e instanceof HTMLElement?d[w(e).toString()]=e:e&&(sa("string"==typeof e.href,44),sa("string"==typeof e.src,45),d[e.src]=e.href)}e=a.layers instanceof rh?a.layers:new rh({layers:a.layers});c.layergroup=e;c.target=a.target;c.view=void 0!==a.view?a.view:new G;var e=Jh,f;void 0!==a.renderer?(Array.isArray(a.renderer)?f=a.renderer:"string"===typeof a.renderer?f=[a.renderer]:sa(!1,46),0<=f.indexOf("dom")&&(f=f.concat(qk))):f=qk;var g,h;g=0;for(h=f.length;g<
h;++g){var l=f[g];if("canvas"==l){if(Vd){e=ei;break}}else if("webgl"==l&&Nd){e=mk;break}}void 0!==a.controls?Array.isArray(a.controls)?f=new D(a.controls.slice()):(sa(a.controls instanceof D,47),f=a.controls):f=vd();void 0!==a.interactions?Array.isArray(a.interactions)?g=new D(a.interactions.slice()):(sa(a.interactions instanceof D,48),g=a.interactions):g=oh();void 0!==a.overlays?Array.isArray(a.overlays)?a=new D(a.overlays.slice()):(sa(a.overlays instanceof D,49),a=a.overlays):a=new D;return{controls:f,
interactions:g,keyboardEventTarget:b,logos:d,overlays:a,Kp:e,values:c}};function sk(a){Qc.call(this);this.f=a.id;this.o=void 0!==a.insertFirst?a.insertFirst:!0;this.u=void 0!==a.stopEvent?a.stopEvent:!0;this.c=document.createElement("DIV");this.c.className="ol-overlay-container ol-selectable";this.c.style.position="absolute";this.autoPan=void 0!==a.autoPan?a.autoPan:!1;this.j=a.autoPanAnimation||{};this.l=void 0!==a.autoPanMargin?a.autoPanMargin:20;this.a={re:"",He:"",lf:"",uf:"",visible:!0};this.i=null;z(this,Sc(tk),this.ul,this);z(this,Sc(uk),this.El,this);z(this,Sc(vk),
this.Il,this);z(this,Sc(wk),this.Kl,this);z(this,Sc(xk),this.Ll,this);void 0!==a.element&&this.gj(a.element);this.nj(void 0!==a.offset?a.offset:[0,0]);this.qj(void 0!==a.positioning?a.positioning:"top-left");void 0!==a.position&&this.Me(a.position)}u(sk,Qc);k=sk.prototype;k.Rd=function(){return this.get(tk)};k.Fm=function(){return this.f};k.Le=function(){return this.get(uk)};k.wh=function(){return this.get(vk)};k.Rh=function(){return this.get(wk)};k.xh=function(){return this.get(xk)};
k.ul=function(){for(var a=this.c;a.lastChild;)a.removeChild(a.lastChild);(a=this.Rd())&&this.c.appendChild(a)};k.El=function(){this.i&&(jd(this.c),Bc(this.i),this.i=null);var a=this.Le();a&&(this.i=z(a,"postrender",this.render,this),yk(this),a=this.u?a.v:a.A,this.o?a.insertBefore(this.c,a.childNodes[0]||null):a.appendChild(this.c))};k.render=function(){yk(this)};k.Il=function(){yk(this)};
k.Kl=function(){yk(this);if(this.get(wk)&&this.autoPan){var a=this.Le();if(a&&a.vc()){var b=zk(a.vc(),a.Nb()),c=this.Rd(),d=c.offsetWidth,e=getComputedStyle(c),d=d+(parseInt(e.marginLeft,10)+parseInt(e.marginRight,10)),e=c.offsetHeight,f=getComputedStyle(c),e=e+(parseInt(f.marginTop,10)+parseInt(f.marginBottom,10)),g=zk(c,[d,e]),c=this.l;Ua(b,g)||(d=g[0]-b[0],e=b[2]-g[2],f=g[1]-b[1],g=b[3]-g[3],b=[0,0],0>d?b[0]=d-c:0>e&&(b[0]=Math.abs(e)+c),0>f?b[1]=f-c:0>g&&(b[1]=Math.abs(g)+c),0===b[0]&&0===b[1])||
(c=a.$().za(),c=a.Ka(c),b=[c[0]+b[0],c[1]+b[1]],a.$().animate({center:a.Xa(b),duration:this.j.duration,easing:this.j.easing}))}}};k.Ll=function(){yk(this)};k.gj=function(a){this.set(tk,a)};k.setMap=function(a){this.set(uk,a)};k.nj=function(a){this.set(vk,a)};k.Me=function(a){this.set(wk,a)};function zk(a,b){var c=a.getBoundingClientRect(),d=c.left+window.pageXOffset,c=c.top+window.pageYOffset;return[d,c,d+b[0],c+b[1]]}k.qj=function(a){this.set(xk,a)};
function Ak(a,b){a.a.visible!==b&&(a.c.style.display=b?"":"none",a.a.visible=b)}
function yk(a){var b=a.Le(),c=a.Rh();if(b&&b.a&&c){var c=b.Ka(c),d=b.Nb(),b=a.c.style,e=a.wh(),f=a.xh();Ak(a,!0);var g=e[0],e=e[1];if("bottom-right"==f||"center-right"==f||"top-right"==f)""!==a.a.He&&(a.a.He=b.left=""),g=Math.round(d[0]-c[0]-g)+"px",a.a.lf!=g&&(a.a.lf=b.right=g);else{""!==a.a.lf&&(a.a.lf=b.right="");if("bottom-center"==f||"center-center"==f||"top-center"==f)g-=a.c.offsetWidth/2;g=Math.round(c[0]+g)+"px";a.a.He!=g&&(a.a.He=b.left=g)}if("bottom-left"==f||"bottom-center"==f||"bottom-right"==
f)""!==a.a.uf&&(a.a.uf=b.top=""),c=Math.round(d[1]-c[1]-e)+"px",a.a.re!=c&&(a.a.re=b.bottom=c);else{""!==a.a.re&&(a.a.re=b.bottom="");if("center-left"==f||"center-center"==f||"center-right"==f)e-=a.c.offsetHeight/2;c=Math.round(c[1]+e)+"px";a.a.uf!=c&&(a.a.uf=b.top=c)}}else Ak(a,!1)}var tk="element",uk="map",vk="offset",wk="position",xk="positioning";function Bk(a){function b(a){a=h.Of(a);l.a.$().lb(a);window.removeEventListener("mousemove",c);window.removeEventListener("mouseup",b)}function c(a){a=h.Of({clientX:a.clientX-n.offsetWidth/2,clientY:a.clientY+n.offsetHeight/2});m.Me(a)}a=a?a:{};this.j=void 0!==a.collapsed?a.collapsed:!0;this.l=void 0!==a.collapsible?a.collapsible:!0;this.l||(this.j=!1);var d=void 0!==a.className?a.className:"ol-overviewmap",e=void 0!==a.tipLabel?a.tipLabel:"Overview map",f=void 0!==a.collapseLabel?a.collapseLabel:
"\u00ab";"string"===typeof f?(this.v=document.createElement("span"),this.v.textContent=f):this.v=f;f=void 0!==a.label?a.label:"\u00bb";"string"===typeof f?(this.A=document.createElement("span"),this.A.textContent=f):this.A=f;var g=this.l&&!this.j?this.v:this.A,f=document.createElement("button");f.setAttribute("type","button");f.title=e;f.appendChild(g);z(f,"click",this.Vm,this);this.C=document.createElement("DIV");this.C.className="ol-overviewmap-map";var h=this.c=new H({controls:new D,interactions:new D,
view:a.view});a.layers&&a.layers.forEach(function(a){h.$g(a)},this);e=document.createElement("DIV");e.className="ol-overviewmap-box";e.style.boxSizing="border-box";this.o=new sk({position:[0,0],positioning:"bottom-left",element:e});this.c.ah(this.o);e=document.createElement("div");e.className=d+" ol-unselectable ol-control"+(this.j&&this.l?" ol-collapsed":"")+(this.l?"":" ol-uncollapsible");e.appendChild(this.C);e.appendChild(f);kd.call(this,{element:e,render:a.render?a.render:Ck,target:a.target});
var l=this,m=this.o,n=this.o.Rd();n.addEventListener("mousedown",function(){window.addEventListener("mousemove",c);window.addEventListener("mouseup",b)})}u(Bk,kd);k=Bk.prototype;k.setMap=function(a){var b=this.a;a!==b&&(b&&((b=b.$())&&Hc(b,Sc("rotation"),this.Fe,this),this.c.Ke(null)),kd.prototype.setMap.call(this,a),a&&(this.c.Ke(this.C),this.u.push(z(a,"propertychange",this.Fl,this)),this.c.Qh().fc()||this.c.lj(a.Mc()),a=a.$()))&&(z(a,Sc("rotation"),this.Fe,this),hg(a)&&(this.c.Cd(),Dk(this)))};
k.Fl=function(a){"view"===a.key&&((a=a.oldValue)&&Hc(a,Sc("rotation"),this.Fe,this),a=this.a.$(),z(a,Sc("rotation"),this.Fe,this))};k.Fe=function(){this.c.$().Ne(this.a.$().Sa())};function Ck(){var a=this.a,b=this.c;if(a.a&&b.a){var c=a.Nb(),a=a.$().hd(c),d=b.Nb(),c=b.$().hd(d),e=b.Ka(fb(a)),f=b.Ka(db(a)),b=Math.abs(e[0]-f[0]),e=Math.abs(e[1]-f[1]),f=d[0],d=d[1];b<.1*f||e<.1*d||b>.75*f||e>.75*d?Dk(this):Ua(c,a)||(a=this.c,c=this.a.$(),a.$().lb(c.za()))}Ek(this)}
function Dk(a){var b=a.a;a=a.c;var c=b.Nb(),b=b.$().hd(c);a=a.$();ob(b,1/(.1*Math.pow(2,Math.log(7.5)/Math.LN2/2)));a.Mf(b)}function Ek(a){var b=a.a,c=a.c;if(b.a&&c.a){var d=b.Nb(),e=b.$(),f=c.$(),c=e.Sa(),b=a.o,g=a.o.Rd(),h=e.hd(d),d=f.Ra(),e=cb(h),f=eb(h),l;if(a=a.a.$().za())l=[e[0]-a[0],e[1]-a[1]],cf(l,c),Xe(l,a);b.Me(l);g&&(g.style.width=Math.abs((e[0]-f[0])/d)+"px",g.style.height=Math.abs((f[1]-e[1])/d)+"px")}}k.Vm=function(a){a.preventDefault();Fk(this)};
function Fk(a){a.element.classList.toggle("ol-collapsed");a.j?id(a.v,a.A):id(a.A,a.v);a.j=!a.j;var b=a.c;a.j||b.a||(b.Cd(),Dk(a),Gc(b,"postrender",function(){Ek(this)},a))}k.Um=function(){return this.l};k.Xm=function(a){this.l!==a&&(this.l=a,this.element.classList.toggle("ol-uncollapsible"),!a&&this.j&&Fk(this))};k.Wm=function(a){this.l&&this.j!==a&&Fk(this)};k.Tm=function(){return this.j};k.bl=function(){return this.c};function Gk(a){a=a?a:{};var b=void 0!==a.className?a.className:"ol-scale-line";this.l=document.createElement("DIV");this.l.className=b+"-inner";this.c=document.createElement("DIV");this.c.className=b+" ol-unselectable";this.c.appendChild(this.l);this.v=null;this.o=void 0!==a.minWidth?a.minWidth:64;this.j=!1;this.C=void 0;this.A="";kd.call(this,{element:this.c,render:a.render?a.render:Hk,target:a.target});z(this,Sc(Ik),this.I,this);this.G(a.units||"metric")}u(Gk,kd);var Jk=[1,2,5];
Gk.prototype.Kb=function(){return this.get(Ik)};function Hk(a){(a=a.frameState)?this.v=a.viewState:this.v=null;Kk(this)}Gk.prototype.I=function(){Kk(this)};Gk.prototype.G=function(a){this.set(Ik,a)};
function Kk(a){var b=a.v;if(b){var c=b.projection,d=c.uc(),b=Rb(c,b.resolution,b.center)*d,d=a.o*b,c="",e=a.Kb();"degrees"==e?(c=xb.degrees,b/=c,d<c/60?(c="\u2033",b*=3600):d<c?(c="\u2032",b*=60):c="\u00b0"):"imperial"==e?.9144>d?(c="in",b/=.0254):1609.344>d?(c="ft",b/=.3048):(c="mi",b/=1609.344):"nautical"==e?(b/=1852,c="nm"):"metric"==e?.001>d?(c="\u03bcm",b*=1E6):1>d?(c="mm",b*=1E3):1E3>d?c="m":(c="km",b/=1E3):"us"==e?.9144>d?(c="in",b*=39.37):1609.344>d?(c="ft",b/=.30480061):(c="mi",b/=1609.3472):
sa(!1,33);for(var e=3*Math.floor(Math.log(a.o*b)/Math.log(10)),f;;){f=Jk[(e%3+3)%3]*Math.pow(10,Math.floor(e/3));d=Math.round(f/b);if(isNaN(d)){a.c.style.display="none";a.j=!1;return}if(d>=a.o)break;++e}b=f+" "+c;a.A!=b&&(a.l.innerHTML=b,a.A=b);a.C!=d&&(a.l.style.width=d+"px",a.C=d);a.j||(a.c.style.display="",a.j=!0)}else a.j&&(a.c.style.display="none",a.j=!1)}var Ik="units";function Lk(a){a=a?a:{};this.c=void 0;this.j=Mk;this.A=this.o=0;this.I=null;this.ea=!1;this.T=void 0!==a.duration?a.duration:200;var b=void 0!==a.className?a.className:"ol-zoomslider",c=document.createElement("button");c.setAttribute("type","button");c.className=b+"-thumb ol-unselectable";var d=document.createElement("div");d.className=b+" ol-unselectable ol-control";d.appendChild(c);this.l=new Ae(d);z(this.l,"pointerdown",this.tl,this);z(this.l,"pointermove",this.rl,this);z(this.l,"pointerup",this.sl,
this);z(d,"click",this.ql,this);z(c,"click",Mc);kd.call(this,{element:d,render:a.render?a.render:Nk})}u(Lk,kd);Lk.prototype.ra=function(){Kc(this.l);kd.prototype.ra.call(this)};var Mk=0;k=Lk.prototype;k.setMap=function(a){kd.prototype.setMap.call(this,a);a&&a.render()};
function Nk(a){if(a.frameState){if(!this.ea){var b=this.element,c=b.offsetWidth,d=b.offsetHeight,e=b.firstElementChild,f=getComputedStyle(e),b=e.offsetWidth+parseFloat(f.marginRight)+parseFloat(f.marginLeft),e=e.offsetHeight+parseFloat(f.marginTop)+parseFloat(f.marginBottom);this.I=[b,e];c>d?(this.j=1,this.A=c-b):(this.j=Mk,this.o=d-e);this.ea=!0}a=a.frameState.viewState.resolution;a!==this.c&&(this.c=a,Ok(this,a))}}
k.ql=function(a){var b=this.a.$();a=Pk(this,xa(1===this.j?(a.offsetX-this.I[0]/2)/this.A:(a.offsetY-this.I[1]/2)/this.o,0,1));b.animate({resolution:b.constrainResolution(a),duration:this.T,easing:pd})};k.tl=function(a){this.v||a.b.target!==this.element.firstElementChild||($f(this.a.$(),1,1),this.C=a.clientX,this.G=a.clientY,this.v=!0)};
k.rl=function(a){if(this.v){var b=this.element.firstElementChild;this.c=Pk(this,xa(1===this.j?(a.clientX-this.C+parseInt(b.style.left,10))/this.A:(a.clientY-this.G+parseInt(b.style.top,10))/this.o,0,1));this.a.$().$c(this.c);Ok(this,this.c);this.C=a.clientX;this.G=a.clientY}};k.sl=function(){if(this.v){var a=this.a.$();$f(a,1,-1);a.animate({resolution:a.constrainResolution(this.c),duration:this.T,easing:pd});this.v=!1;this.G=this.C=void 0}};
function Ok(a,b){var c;c=1-gg(a.a.$())(b);var d=a.element.firstElementChild;1==a.j?d.style.left=a.A*c+"px":d.style.top=a.o*c+"px"}function Pk(a,b){return fg(a.a.$())(1-b)};function Qk(a){a=a?a:{};this.c=a.extent?a.extent:null;var b=void 0!==a.className?a.className:"ol-zoom-extent",c=void 0!==a.label?a.label:"E",d=void 0!==a.tipLabel?a.tipLabel:"Fit to extent",e=document.createElement("button");e.setAttribute("type","button");e.title=d;e.appendChild("string"===typeof c?document.createTextNode(c):c);z(e,"click",this.j,this);c=document.createElement("div");c.className=b+" ol-unselectable ol-control";c.appendChild(e);kd.call(this,{element:c,target:a.target})}u(Qk,kd);
Qk.prototype.j=function(a){a.preventDefault();a=this.a.$();var b=this.c?this.c:a.o.D();a.Mf(b)};function Rk(a){Qc.call(this);a=a?a:{};this.a=null;z(this,Sc(Sk),this.rm,this);this.bg(void 0!==a.tracking?a.tracking:!1)}u(Rk,Qc);k=Rk.prototype;k.ra=function(){this.bg(!1);Qc.prototype.ra.call(this)};
k.Ro=function(a){if(null!==a.alpha){var b=Ca(a.alpha);this.set(Tk,b);"boolean"===typeof a.absolute&&a.absolute?this.set(Uk,b):"number"===typeof a.webkitCompassHeading&&-1!=a.webkitCompassAccuracy&&this.set(Uk,Ca(a.webkitCompassHeading))}null!==a.beta&&this.set(Vk,Ca(a.beta));null!==a.gamma&&this.set(Wk,Ca(a.gamma));this.s()};k.Bk=function(){return this.get(Tk)};k.Ek=function(){return this.get(Vk)};k.Kk=function(){return this.get(Wk)};k.qm=function(){return this.get(Uk)};k.Mh=function(){return this.get(Sk)};
k.rm=function(){if(Wd){var a=this.Mh();a&&!this.a?this.a=z(window,"deviceorientation",this.Ro,this):a||null===this.a||(Bc(this.a),this.a=null)}};k.bg=function(a){this.set(Sk,a)};var Tk="alpha",Vk="beta",Wk="gamma",Uk="heading",Sk="tracking";function Xk(a){this.f=a.opacity;this.o=a.rotateWithView;this.j=a.rotation;this.c=a.scale;this.u=a.snapToPixel}k=Xk.prototype;k.Ye=function(){return this.f};k.Ze=function(){return this.o};k.$e=function(){return this.j};k.af=function(){return this.c};k.ze=function(){return this.u};k.vd=function(a){this.f=a};k.bf=function(a){this.j=a};k.wd=function(a){this.c=a};function Yk(a){this.A=this.v=this.i=null;this.Wa=void 0!==a.fill?a.fill:null;this.qa=[0,0];this.b=a.points;this.a=void 0!==a.radius?a.radius:a.radius1;this.g=void 0!==a.radius2?a.radius2:this.a;this.l=void 0!==a.angle?a.angle:0;this.Za=void 0!==a.stroke?a.stroke:null;this.G=this.ta=this.C=null;this.O=a.atlasManager;Zk(this,this.O);Xk.call(this,{opacity:1,rotateWithView:void 0!==a.rotateWithView?a.rotateWithView:!1,rotation:void 0!==a.rotation?a.rotation:0,scale:1,snapToPixel:void 0!==a.snapToPixel?
a.snapToPixel:!0})}u(Yk,Xk);k=Yk.prototype;k.clone=function(){var a=new Yk({fill:this.Ca()?this.Ca().clone():void 0,points:this.g!==this.a?this.b/2:this.b,radius:this.a,radius2:this.g,angle:this.l,snapToPixel:this.u,stroke:this.Da()?this.Da().clone():void 0,rotation:this.j,rotateWithView:this.o,atlasManager:this.O});a.vd(this.f);a.wd(this.c);return a};k.Jc=function(){return this.C};k.Ji=function(){return this.l};k.Ca=function(){return this.Wa};k.kg=function(){return this.A};k.Y=function(){return this.v};
k.ye=function(){return this.G};k.Xe=function(){return 2};k.Tc=function(){return this.qa};k.Ki=function(){return this.b};k.Li=function(){return this.a};k.yh=function(){return this.g};k.kc=function(){return this.ta};k.Da=function(){return this.Za};k.Gh=function(){};k.load=function(){};k.xj=function(){};
function Zk(a,b){var c,d="",e="",f=0,g=null,h,l=0;a.Za&&(h=a.Za.a,null===h&&(h=Rh),h=fd(h),l=a.Za.c,void 0===l&&(l=1),g=a.Za.g,Ud||(g=null),e=a.Za.j,void 0===e&&(e="round"),d=a.Za.i,void 0===d&&(d="round"),f=a.Za.l,void 0===f&&(f=10));var m=2*(a.a+l)+1,d={strokeStyle:h,vj:l,size:m,lineCap:d,lineDash:g,lineJoin:e,miterLimit:f};void 0===b?(e=hd(m,m),a.v=e.canvas,c=m=a.v.width,a.jh(d,e,0,0),a.Wa?a.A=a.v:(e=hd(d.size,d.size),a.A=e.canvas,a.ih(d,e,0,0))):(m=Math.round(m),(e=!a.Wa)&&(c=a.ih.bind(a,d)),
a.Za?(f=a.Za,void 0===f.b&&(f.b="s",f.b=f.a?"string"===typeof f.a?f.b+f.a:f.b+w(f.a).toString():f.b+"-",f.b+=","+(void 0!==f.i?f.i.toString():"-")+","+(f.g?f.g.toString():"-")+","+(void 0!==f.f?f.f:"-")+","+(void 0!==f.j?f.j:"-")+","+(void 0!==f.l?f.l.toString():"-")+","+(void 0!==f.c?f.c.toString():"-")),f=f.b):f="-",a.Wa?(g=a.Wa,void 0===g.a&&(g.a=g.b instanceof CanvasPattern||g.b instanceof CanvasGradient?w(g.b).toString():"f"+(g.b?dd(g.b):"-")),g=g.a):g="-",a.i&&f==a.i[1]&&g==a.i[2]&&a.a==a.i[3]&&
a.g==a.i[4]&&a.l==a.i[5]&&a.b==a.i[6]||(a.i=["r"+f+g+(void 0!==a.a?a.a.toString():"-")+(void 0!==a.g?a.g.toString():"-")+(void 0!==a.l?a.l.toString():"-")+(void 0!==a.b?a.b.toString():"-"),f,g,a.a,a.g,a.l,a.b]),d=b.add(a.i[0],m,m,a.jh.bind(a,d),c),a.v=d.image,a.qa=[d.offsetX,d.offsetY],c=d.image.width,a.A=e?d.Ul:a.v);a.C=[m/2,m/2];a.ta=[m,m];a.G=[c,c]}
k.jh=function(a,b,c,d){var e;b.setTransform(1,0,0,1,0,0);b.translate(c,d);b.beginPath();if(Infinity===this.b)b.arc(a.size/2,a.size/2,this.a,0,2*Math.PI,!0);else for(this.g!==this.a&&(this.b*=2),c=0;c<=this.b;c++)d=2*c*Math.PI/this.b-Math.PI/2+this.l,e=c%2?this.g:this.a,b.lineTo(a.size/2+e*Math.cos(d),a.size/2+e*Math.sin(d));this.Wa&&(c=this.Wa.b,null===c&&(c=Ph),b.fillStyle=fd(c),b.fill());this.Za&&(b.strokeStyle=a.strokeStyle,b.lineWidth=a.vj,a.lineDash&&b.setLineDash(a.lineDash),b.lineCap=a.lineCap,
b.lineJoin=a.lineJoin,b.miterLimit=a.miterLimit,b.stroke());b.closePath()};
k.ih=function(a,b,c,d){b.setTransform(1,0,0,1,0,0);b.translate(c,d);b.beginPath();if(Infinity===this.b)b.arc(a.size/2,a.size/2,this.a,0,2*Math.PI,!0);else{this.g!==this.a&&(this.b*=2);var e;for(c=0;c<=this.b;c++)e=2*c*Math.PI/this.b-Math.PI/2+this.l,d=c%2?this.g:this.a,b.lineTo(a.size/2+d*Math.cos(e),a.size/2+d*Math.sin(e))}b.fillStyle=Ph;b.fill();this.Za&&(b.strokeStyle=a.strokeStyle,b.lineWidth=a.vj,a.lineDash&&b.setLineDash(a.lineDash),b.stroke());b.closePath()};function $k(a){a=a||{};Yk.call(this,{points:Infinity,fill:a.fill,radius:a.radius,snapToPixel:a.snapToPixel,stroke:a.stroke,atlasManager:a.atlasManager})}u($k,Yk);$k.prototype.clone=function(){var a=new $k({fill:this.Ca()?this.Ca().clone():void 0,stroke:this.Da()?this.Da().clone():void 0,radius:this.a,snapToPixel:this.u,atlasManager:this.O});a.vd(this.f);a.wd(this.c);return a};$k.prototype.Zc=function(a){this.a=a;Zk(this,this.O)};function al(a){a=a||{};this.b=void 0!==a.color?a.color:null;this.a=void 0}al.prototype.clone=function(){var a=this.b;return new al({color:a&&a.slice?a.slice():a||void 0})};al.prototype.g=function(){return this.b};al.prototype.c=function(a){this.b=a;this.a=void 0};function bl(a){a=a||{};this.Ic=null;this.Qa=cl;void 0!==a.geometry&&this.Ta(a.geometry);this.Wa=void 0!==a.fill?a.fill:null;this.N=void 0!==a.image?a.image:null;this.Za=void 0!==a.stroke?a.stroke:null;this.Fa=void 0!==a.text?a.text:null;this.Bj=a.zIndex}k=bl.prototype;
k.clone=function(){var a=this.U();a&&a.clone&&(a=a.clone());return new bl({geometry:a,fill:this.Ca()?this.Ca().clone():void 0,image:this.Y()?this.Y().clone():void 0,stroke:this.Da()?this.Da().clone():void 0,text:this.Oa()?this.Oa().clone():void 0,zIndex:this.Aa()})};k.U=function(){return this.Ic};k.Lk=function(){return this.Qa};k.Ca=function(){return this.Wa};k.mf=function(a){this.Wa=a};k.Y=function(){return this.N};k.Hg=function(a){this.N=a};k.Da=function(){return this.Za};
k.nf=function(a){this.Za=a};k.Oa=function(){return this.Fa};k.pf=function(a){this.Fa=a};k.Aa=function(){return this.Bj};k.Ta=function(a){"function"===typeof a?this.Qa=a:"string"===typeof a?this.Qa=function(b){return b.get(a)}:a?a&&(this.Qa=function(){return a}):this.Qa=cl;this.Ic=a};k.Xb=function(a){this.Bj=a};function dl(a){if("function"!==typeof a){var b;Array.isArray(a)?b=a:(sa(a instanceof bl,41),b=[a]);a=function(){return b}}return a}var el=null;
function fl(){if(!el){var a=new al({color:"rgba(255,255,255,0.4)"}),b=new tj({color:"#3399CC",width:1.25});el=[new bl({image:new $k({fill:a,stroke:b,radius:5}),fill:a,stroke:b})]}return el}
function gl(){var a={},b=[255,255,255,1],c=[0,153,255,1];a.Polygon=[new bl({fill:new al({color:[255,255,255,.5]})})];a.MultiPolygon=a.Polygon;a.LineString=[new bl({stroke:new tj({color:b,width:5})}),new bl({stroke:new tj({color:c,width:3})})];a.MultiLineString=a.LineString;a.Circle=a.Polygon.concat(a.LineString);a.Point=[new bl({image:new $k({radius:6,fill:new al({color:c}),stroke:new tj({color:b,width:1.5})}),zIndex:Infinity})];a.MultiPoint=a.Point;a.GeometryCollection=a.Polygon.concat(a.LineString,
a.Point);return a}function cl(a){return a.U()};function I(a){Qc.call(this);this.a=void 0;this.c="geometry";this.f=null;this.j=void 0;this.i=null;z(this,Sc(this.c),this.De,this);void 0!==a&&(a instanceof lf||!a?this.Ta(a):this.H(a))}u(I,Qc);k=I.prototype;k.clone=function(){var a=new I(this.M());a.Yc(this.c);var b=this.U();b&&a.Ta(b.clone());(b=this.f)&&a.cg(b);return a};k.U=function(){return this.get(this.c)};k.sm=function(){return this.a};k.Mk=function(){return this.c};k.tm=function(){return this.f};k.Rc=function(){return this.j};k.vl=function(){this.s()};
k.De=function(){this.i&&(Bc(this.i),this.i=null);var a=this.U();a&&(this.i=z(a,"change",this.vl,this));this.s()};k.Ta=function(a){this.set(this.c,a)};k.cg=function(a){this.j=(this.f=a)?hl(a):void 0;this.s()};k.lc=function(a){this.a=a;this.s()};k.Yc=function(a){Hc(this,Sc(this.c),this.De,this);this.c=a;z(this,Sc(this.c),this.De,this);this.De()};
function hl(a){var b;if("function"===typeof a)2==a.length?b=function(b){return a(this,b)}:b=a;else{var c;Array.isArray(a)?c=a:(sa(a instanceof bl,41),c=[a]);b=function(){return c}}return b};var il=document.implementation.createDocument("","",null);function kl(a,b){return il.createElementNS(a,b)}function ll(a,b){return ml(a,b,[]).join("")}function ml(a,b,c){if(a.nodeType==Node.CDATA_SECTION_NODE||a.nodeType==Node.TEXT_NODE)b?c.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g,"")):c.push(a.nodeValue);else for(a=a.firstChild;a;a=a.nextSibling)ml(a,b,c);return c}function nl(a){return a instanceof Document}function pl(a){return a instanceof Node}
function ql(a){return(new DOMParser).parseFromString(a,"application/xml")}function rl(a,b){return function(c,d){var e=a.call(b,c,d);void 0!==e&&ha(d[d.length-1],e)}}function sl(a,b){return function(c,d){var e=a.call(void 0!==b?b:this,c,d);void 0!==e&&d[d.length-1].push(e)}}function tl(a,b){return function(c,d){var e=a.call(void 0!==b?b:this,c,d);void 0!==e&&(d[d.length-1]=e)}}
function ul(a){return function(b,c){var d=a.call(this,b,c);if(void 0!==d){var e=c[c.length-1],f=b.localName,g;f in e?g=e[f]:g=e[f]=[];g.push(d)}}}function J(a,b){return function(c,d){var e=a.call(this,c,d);void 0!==e&&(d[d.length-1][void 0!==b?b:c.localName]=e)}}function K(a,b){return function(c,d,e){a.call(void 0!==b?b:this,c,d,e);e[e.length-1].node.appendChild(c)}}
function vl(a){var b,c;return function(d,e,f){if(!b){b={};var g={};g[d.localName]=a;b[d.namespaceURI]=g;c=wl(d.localName)}xl(b,c,e,f)}}function wl(a,b){return function(c,d,e){c=d[d.length-1].node;d=a;void 0===d&&(d=e);e=b;void 0===b&&(e=c.namespaceURI);return kl(e,d)}}var yl=wl();function zl(a,b){for(var c=b.length,d=Array(c),e=0;e<c;++e)d[e]=a[b[e]];return d}function L(a,b,c){c=void 0!==c?c:{};var d,e;d=0;for(e=a.length;d<e;++d)c[a[d]]=b;return c}
function Al(a,b,c,d){for(b=b.firstElementChild;b;b=b.nextElementSibling){var e=a[b.namespaceURI];void 0!==e&&(e=e[b.localName])&&e.call(d,b,c)}}function M(a,b,c,d,e){d.push(a);Al(b,c,d,e);return d.pop()}function xl(a,b,c,d,e,f){for(var g=(void 0!==e?e:c).length,h,l,m=0;m<g;++m)h=c[m],void 0!==h&&(l=b.call(f,h,d,void 0!==e?e[m]:void 0),void 0!==l&&a[l.namespaceURI][l.localName].call(f,l,h,d))}function Bl(a,b,c,d,e,f,g){e.push(a);xl(b,c,d,e,f,g);e.pop()};function Cl(a,b,c,d){return function(e,f,g){var h=new XMLHttpRequest;h.open("GET","function"===typeof a?a(e,f,g):a,!0);"arraybuffer"==b.S()&&(h.responseType="arraybuffer");h.onload=function(){if(!h.status||200<=h.status&&300>h.status){var a=b.S(),e;"json"==a||"text"==a?e=h.responseText:"xml"==a?(e=h.responseXML)||(e=ql(h.responseText)):"arraybuffer"==a&&(e=h.response);e?c.call(this,b.Pa(e,{featureProjection:g}),b.jb(e)):d.call(this)}else d.call(this)}.bind(this);h.onerror=function(){d.call(this)}.bind(this);
h.send()}}function Dl(a,b){return Cl(a,b,function(a){this.gd(a)},oa)};function El(){this.i=this.defaultDataProjection=null}function Fl(a,b,c){var d;c&&(d={dataProjection:c.dataProjection?c.dataProjection:a.jb(b),featureProjection:c.featureProjection});return Gl(a,d)}function Gl(a,b){return qb({dataProjection:a.defaultDataProjection,featureProjection:a.i},b)}
function Hl(a,b,c){var d=c?Tb(c.featureProjection):null,e=c?Tb(c.dataProjection):null,f;d&&e&&!bc(d,e)?a instanceof lf?f=(b?a.clone():a).tb(b?d:e,b?e:d):f=gc(b?a.slice():a,b?d:e,b?e:d):f=a;if(b&&c&&c.decimals){var g=Math.pow(10,c.decimals);a=function(a){for(var b=0,c=a.length;b<c;++b)a[b]=Math.round(a[b]*g)/g;return a};Array.isArray(f)?a(f):f.Fc(a)}return f};function Il(){El.call(this)}u(Il,El);function Jl(a){return"string"===typeof a?(a=JSON.parse(a))?a:null:null!==a?a:null}k=Il.prototype;k.S=function(){return"json"};k.Vb=function(a,b){return this.Wc(Jl(a),Fl(this,a,b))};k.Pa=function(a,b){return this.sg(Jl(a),Fl(this,a,b))};k.Xc=function(a,b){return this.wg(Jl(a),Fl(this,a,b))};k.jb=function(a){return this.zg(Jl(a))};k.Dd=function(a,b){return JSON.stringify(this.dd(a,b))};k.Yb=function(a,b){return JSON.stringify(this.ge(a,b))};
k.ed=function(a,b){return JSON.stringify(this.ie(a,b))};function Kl(a,b,c,d,e,f){var g=NaN,h=NaN,l=(c-b)/d;if(1===l)g=a[b],h=a[b+1];else if(2==l)g=(1-e)*a[b]+e*a[b+d],h=(1-e)*a[b+1]+e*a[b+d+1];else if(l){var h=a[b],l=a[b+1],m=0,g=[0],n;for(n=b+d;n<c;n+=d){var p=a[n],q=a[n+1],m=m+Math.sqrt((p-h)*(p-h)+(q-l)*(q-l));g.push(m);h=p;l=q}c=e*m;l=0;m=g.length;for(n=!1;l<m;)e=l+(m-l>>1),h=+ea(g[e],c),0>h?l=e+1:(m=e,n=!h);e=n?l:~l;0>e?(c=(c-g[-e-2])/(g[-e-1]-g[-e-2]),b+=(-e-2)*d,g=Ea(a[b],a[b+d],c),h=Ea(a[b+1],a[b+d+1],c)):(g=a[b+e*d],h=a[b+e*d+1])}return f?(f[0]=
g,f[1]=h,f):[g,h]}function Ll(a,b,c,d,e,f){if(c==b)return null;if(e<a[b+d-1])return f?(c=a.slice(b,b+d),c[d-1]=e,c):null;if(a[c-1]<e)return f?(c=a.slice(c-d,c),c[d-1]=e,c):null;if(e==a[b+d-1])return a.slice(b,b+d);b/=d;for(c/=d;b<c;)f=b+c>>1,e<a[(f+1)*d-1]?c=f:b=f+1;c=a[b*d-1];if(e==c)return a.slice((b-1)*d,(b-1)*d+d);f=(e-c)/(a[(b+1)*d-1]-c);c=[];var g;for(g=0;g<d-1;++g)c.push(Ea(a[(b-1)*d+g],a[b*d+g],f));c.push(e);return c}
function Ml(a,b,c,d,e,f){var g=0;if(f)return Ll(a,g,b[b.length-1],c,d,e);if(d<a[c-1])return e?(a=a.slice(0,c),a[c-1]=d,a):null;if(a[a.length-1]<d)return e?(a=a.slice(a.length-c),a[c-1]=d,a):null;e=0;for(f=b.length;e<f;++e){var h=b[e];if(g!=h){if(d<a[g+c-1])break;else if(d<=a[h-1])return Ll(a,g,h,c,d,!1);g=h}}return null};function N(a,b){of.call(this);this.c=null;this.v=this.A=this.j=-1;this.pa(a,b)}u(N,of);k=N.prototype;k.ik=function(a){this.B?ha(this.B,a):this.B=a.slice();this.s()};k.clone=function(){var a=new N(null);a.ca(this.la,this.B.slice());return a};k.Hb=function(a,b,c,d){if(d<Pa(this.D(),a,b))return d;this.v!=this.g&&(this.A=Math.sqrt(vf(this.B,0,this.B.length,this.a,0)),this.v=this.g);return xf(this.B,0,this.B.length,this.a,this.A,!1,a,b,c,d)};
k.yk=function(a,b){return Mf(this.B,0,this.B.length,this.a,a,b)};k.gn=function(a,b){return"XYM"!=this.la&&"XYZM"!=this.la?null:Ll(this.B,0,this.B.length,this.a,a,void 0!==b?b:!1)};k.W=function(){return Cf(this.B,0,this.B.length,this.a)};k.ph=function(a,b){return Kl(this.B,0,this.B.length,this.a,a,b)};k.hn=function(){var a=this.B,b=this.a,c=a[0],d=a[1],e=0,f;for(f=0+b;f<this.B.length;f+=b)var g=a[f],h=a[f+1],e=e+Math.sqrt((g-c)*(g-c)+(h-d)*(h-d)),c=g,d=h;return e};
function ai(a){a.j!=a.g&&(a.c=a.ph(.5,a.c),a.j=a.g);return a.c}k.od=function(a){var b=[];b.length=Ef(this.B,0,this.B.length,this.a,a,b,0);a=new N(null);a.ca("XY",b);return a};k.S=function(){return"LineString"};k.Ya=function(a){return Nf(this.B,0,this.B.length,this.a,a)};k.pa=function(a,b){a?(rf(this,b,a,1),this.B||(this.B=[]),this.B.length=Af(this.B,0,a,this.a),this.s()):this.ca("XY",null)};k.ca=function(a,b){qf(this,a,b);this.s()};function O(a,b){of.call(this);this.c=[];this.j=this.v=-1;this.pa(a,b)}u(O,of);k=O.prototype;k.jk=function(a){this.B?ha(this.B,a.ia().slice()):this.B=a.ia().slice();this.c.push(this.B.length);this.s()};k.clone=function(){var a=new O(null);a.ca(this.la,this.B.slice(),this.c.slice());return a};k.Hb=function(a,b,c,d){if(d<Pa(this.D(),a,b))return d;this.j!=this.g&&(this.v=Math.sqrt(wf(this.B,0,this.c,this.a,0)),this.j=this.g);return yf(this.B,0,this.c,this.a,this.v,!1,a,b,c,d)};
k.kn=function(a,b,c){return"XYM"!=this.la&&"XYZM"!=this.la||!this.B.length?null:Ml(this.B,this.c,this.a,a,void 0!==b?b:!1,void 0!==c?c:!1)};k.W=function(){return Df(this.B,0,this.c,this.a)};k.Sb=function(){return this.c};k.Tk=function(a){if(0>a||this.c.length<=a)return null;var b=new N(null);b.ca(this.la,this.B.slice(a?this.c[a-1]:0,this.c[a]));return b};
k.Nc=function(){var a=this.B,b=this.c,c=this.la,d=[],e=0,f,g;f=0;for(g=b.length;f<g;++f){var h=b[f],l=new N(null);l.ca(c,a.slice(e,h));d.push(l);e=h}return d};function bi(a){var b=[],c=a.B,d=0,e=a.c;a=a.a;var f,g;f=0;for(g=e.length;f<g;++f){var h=e[f],d=Kl(c,d,h,a,.5);ha(b,d);d=h}return b}k.od=function(a){var b=[],c=[],d=this.B,e=this.c,f=this.a,g=0,h=0,l,m;l=0;for(m=e.length;l<m;++l){var n=e[l],h=Ef(d,g,n,f,a,b,h);c.push(h);g=n}b.length=h;a=new O(null);a.ca("XY",b,c);return a};k.S=function(){return"MultiLineString"};
k.Ya=function(a){a:{var b=this.B,c=this.c,d=this.a,e=0,f,g;f=0;for(g=c.length;f<g;++f){if(Nf(b,e,c[f],d,a)){a=!0;break a}e=c[f]}a=!1}return a};k.pa=function(a,b){if(a){rf(this,b,a,2);this.B||(this.B=[]);var c=Bf(this.B,0,a,this.a,this.c);this.B.length=c.length?c[c.length-1]:0;this.s()}else this.ca("XY",null,this.c)};k.ca=function(a,b,c){qf(this,a,b);this.c=c;this.s()};
function Nl(a,b){var c=a.la,d=[],e=[],f,g;f=0;for(g=b.length;f<g;++f){var h=b[f];f||(c=h.la);ha(d,h.ia());e.push(d.length)}a.ca(c,d,e)};function P(a,b){of.call(this);this.pa(a,b)}u(P,of);k=P.prototype;k.lk=function(a){this.B?ha(this.B,a.ia()):this.B=a.ia().slice();this.s()};k.clone=function(){var a=new P(null);a.ca(this.la,this.B.slice());return a};k.Hb=function(a,b,c,d){if(d<Pa(this.D(),a,b))return d;var e=this.B,f=this.a,g,h,l;g=0;for(h=e.length;g<h;g+=f)if(l=Ba(a,b,e[g],e[g+1]),l<d){d=l;for(l=0;l<f;++l)c[l]=e[g+l];c.length=f}return d};k.W=function(){return Cf(this.B,0,this.B.length,this.a)};
k.dl=function(a){var b=this.B?this.B.length/this.a:0;if(0>a||b<=a)return null;b=new E(null);b.ca(this.la,this.B.slice(a*this.a,(a+1)*this.a));return b};k.Zd=function(){var a=this.B,b=this.la,c=this.a,d=[],e,f;e=0;for(f=a.length;e<f;e+=c){var g=new E(null);g.ca(b,a.slice(e,e+c));d.push(g)}return d};k.S=function(){return"MultiPoint"};k.Ya=function(a){var b=this.B,c=this.a,d,e,f,g;d=0;for(e=b.length;d<e;d+=c)if(f=b[d],g=b[d+1],Sa(a,f,g))return!0;return!1};
k.pa=function(a,b){a?(rf(this,b,a,1),this.B||(this.B=[]),this.B.length=Af(this.B,0,a,this.a),this.s()):this.ca("XY",null)};k.ca=function(a,b){qf(this,a,b);this.s()};function Q(a,b){of.call(this);this.c=[];this.v=-1;this.A=null;this.I=this.C=this.G=-1;this.j=null;this.pa(a,b)}u(Q,of);k=Q.prototype;k.mk=function(a){if(this.B){var b=this.B.length;ha(this.B,a.ia());a=a.Sb().slice();var c,d;c=0;for(d=a.length;c<d;++c)a[c]+=b}else this.B=a.ia().slice(),a=a.Sb().slice(),this.c.push();this.c.push(a);this.s()};k.clone=function(){for(var a=new Q(null),b=this.c.length,c=Array(b),d=0;d<b;++d)c[d]=this.c[d].slice();Ol(a,this.la,this.B.slice(),c);return a};
k.Hb=function(a,b,c,d){if(d<Pa(this.D(),a,b))return d;if(this.C!=this.g){var e=this.c,f=0,g=0,h,l;h=0;for(l=e.length;h<l;++h)var m=e[h],g=wf(this.B,f,m,this.a,g),f=m[m.length-1];this.G=Math.sqrt(g);this.C=this.g}e=ci(this);f=this.c;g=this.a;h=this.G;l=0;var m=[NaN,NaN],n,p;n=0;for(p=f.length;n<p;++n){var q=f[n];d=yf(e,l,q,g,h,!0,a,b,c,d,m);l=q[q.length-1]}return d};
k.Sc=function(a,b){var c;a:{c=ci(this);var d=this.c,e=0;if(d.length){var f,g;f=0;for(g=d.length;f<g;++f){var h=d[f];if(Kf(c,e,h,this.a,a,b)){c=!0;break a}e=h[h.length-1]}}c=!1}return c};k.ln=function(){var a=ci(this),b=this.c,c=0,d=0,e,f;e=0;for(f=b.length;e<f;++e)var g=b[e],d=d+tf(a,c,g,this.a),c=g[g.length-1];return d};
k.W=function(a){var b;void 0!==a?(b=ci(this).slice(),Sf(b,this.c,this.a,a)):b=this.B;a=b;b=this.c;var c=this.a,d=0,e=[],f=0,g,h;g=0;for(h=b.length;g<h;++g){var l=b[g];e[f++]=Df(a,d,l,c,e[f]);d=l[l.length-1]}e.length=f;return e};
function di(a){if(a.v!=a.g){var b=a.B,c=a.c,d=a.a,e=0,f=[],g,h;g=0;for(h=c.length;g<h;++g){var l=c[g],e=Ya(b,e,l[0],d);f.push((e[0]+e[2])/2,(e[1]+e[3])/2);e=l[l.length-1]}b=ci(a);c=a.c;d=a.a;g=0;h=[];l=0;for(e=c.length;l<e;++l){var m=c[l];h=Lf(b,g,m,d,f,2*l,h);g=m[m.length-1]}a.A=h;a.v=a.g}return a.A}k.Pk=function(){var a=new P(null);a.ca("XY",di(this).slice());return a};
function ci(a){if(a.I!=a.g){var b=a.B,c;a:{c=a.c;var d,e;d=0;for(e=c.length;d<e;++d)if(!Qf(b,c[d],a.a,void 0)){c=!1;break a}c=!0}c?a.j=b:(a.j=b.slice(),a.j.length=Sf(a.j,a.c,a.a));a.I=a.g}return a.j}k.od=function(a){var b=[],c=[],d=this.B,e=this.c,f=this.a;a=Math.sqrt(a);var g=0,h=0,l,m;l=0;for(m=e.length;l<m;++l){var n=e[l],p=[],h=Ff(d,g,n,f,a,b,h,p);c.push(p);g=n[n.length-1]}b.length=h;d=new Q(null);Ol(d,"XY",b,c);return d};
k.el=function(a){if(0>a||this.c.length<=a)return null;var b;a?(b=this.c[a-1],b=b[b.length-1]):b=0;a=this.c[a].slice();var c=a[a.length-1];if(b){var d,e;d=0;for(e=a.length;d<e;++d)a[d]-=b}d=new F(null);d.ca(this.la,this.B.slice(b,c),a);return d};k.md=function(){var a=this.la,b=this.B,c=this.c,d=[],e=0,f,g,h,l;f=0;for(g=c.length;f<g;++f){var m=c[f].slice(),n=m[m.length-1];if(e)for(h=0,l=m.length;h<l;++h)m[h]-=e;h=new F(null);h.ca(a,b.slice(e,n),m);d.push(h);e=n}return d};k.S=function(){return"MultiPolygon"};
k.Ya=function(a){a:{var b=ci(this),c=this.c,d=this.a,e=0,f,g;f=0;for(g=c.length;f<g;++f){var h=c[f];if(Of(b,e,h,d,a)){a=!0;break a}e=h[h.length-1]}a=!1}return a};k.pa=function(a,b){if(a){rf(this,b,a,3);this.B||(this.B=[]);var c=this.B,d=this.a,e=this.c,f=0,e=e?e:[],g=0,h,l;h=0;for(l=a.length;h<l;++h)f=Bf(c,f,a[h],d,e[g]),e[g++]=f,f=f[f.length-1];e.length=g;e.length?(c=e[e.length-1],this.B.length=c.length?c[c.length-1]:0):this.B.length=0;this.s()}else Ol(this,"XY",null,this.c)};
function Ol(a,b,c,d){qf(a,b,c);a.c=d;a.s()}function Pl(a,b){var c=a.la,d=[],e=[],f,g,h;f=0;for(g=b.length;f<g;++f){var l=b[f];f||(c=l.la);var m=d.length;h=l.Sb();var n,p;n=0;for(p=h.length;n<p;++n)h[n]+=m;ha(d,l.ia());e.push(h)}Ol(a,c,d,e)};function Ql(a){a=a?a:{};El.call(this);this.b=a.geometryName}u(Ql,Il);
function Rl(a,b){if(!a)return null;var c;if("number"===typeof a.x&&"number"===typeof a.y)c="Point";else if(a.points)c="MultiPoint";else if(a.paths)c=1===a.paths.length?"LineString":"MultiLineString";else if(a.rings){var d=a.rings,e=Sl(a),f=[],g=[];c=[];var h,l;h=0;for(l=d.length;h<l;++h)f.length=0,Af(f,0,d[h],e.length),Pf(f,0,f.length,e.length)?g.push([d[h]]):c.push(d[h]);for(;c.length;){d=c.shift();e=!1;for(h=g.length-1;0<=h;h--)if(Ua((new Gf(g[h][0])).D(),(new Gf(d)).D())){g[h].push(d);e=!0;break}e||
g.push([d.reverse()])}a=qb({},a);1===g.length?(c="Polygon",a.rings=g[0]):(c="MultiPolygon",a.rings=g)}return Hl((0,Tl[c])(a),!1,b)}function Sl(a){var b="XY";!0===a.hasZ&&!0===a.hasM?b="XYZM":!0===a.hasZ?b="XYZ":!0===a.hasM&&(b="XYM");return b}function Ul(a){a=a.la;return{hasZ:"XYZ"===a||"XYZM"===a,hasM:"XYM"===a||"XYZM"===a}}
var Tl={Point:function(a){return void 0!==a.m&&void 0!==a.z?new E([a.x,a.y,a.z,a.m],"XYZM"):void 0!==a.z?new E([a.x,a.y,a.z],"XYZ"):void 0!==a.m?new E([a.x,a.y,a.m],"XYM"):new E([a.x,a.y])},LineString:function(a){return new N(a.paths[0],Sl(a))},Polygon:function(a){return new F(a.rings,Sl(a))},MultiPoint:function(a){return new P(a.points,Sl(a))},MultiLineString:function(a){return new O(a.paths,Sl(a))},MultiPolygon:function(a){return new Q(a.rings,Sl(a))}},Vl={Point:function(a){var b=a.W(),c;a=a.la;
"XYZ"===a?c={x:b[0],y:b[1],z:b[2]}:"XYM"===a?c={x:b[0],y:b[1],m:b[2]}:"XYZM"===a?c={x:b[0],y:b[1],z:b[2],m:b[3]}:"XY"===a?c={x:b[0],y:b[1]}:sa(!1,34);return c},LineString:function(a){var b=Ul(a);return{hasZ:b.hasZ,hasM:b.hasM,paths:[a.W()]}},Polygon:function(a){var b=Ul(a);return{hasZ:b.hasZ,hasM:b.hasM,rings:a.W(!1)}},MultiPoint:function(a){var b=Ul(a);return{hasZ:b.hasZ,hasM:b.hasM,points:a.W()}},MultiLineString:function(a){var b=Ul(a);return{hasZ:b.hasZ,hasM:b.hasM,paths:a.W()}},MultiPolygon:function(a){var b=
Ul(a);a=a.W(!1);for(var c=[],d=0;d<a.length;d++)for(var e=a[d].length-1;0<=e;e--)c.push(a[d][e]);return{hasZ:b.hasZ,hasM:b.hasM,rings:c}}};k=Ql.prototype;k.Wc=function(a,b){var c=Rl(a.geometry,b),d=new I;this.b&&d.Yc(this.b);d.Ta(c);b&&b.Zf&&a.attributes[b.Zf]&&d.lc(a.attributes[b.Zf]);a.attributes&&d.H(a.attributes);return d};
k.sg=function(a,b){var c=b?b:{};if(a.features){var d=[],e=a.features,f,g;c.Zf=a.objectIdFieldName;f=0;for(g=e.length;f<g;++f)d.push(this.Wc(e[f],c));return d}return[this.Wc(a,c)]};k.wg=function(a,b){return Rl(a,b)};k.zg=function(a){return a.spatialReference&&a.spatialReference.wkid?Tb("EPSG:"+a.spatialReference.wkid):null};function Wl(a,b){return(0,Vl[a.S()])(Hl(a,!0,b),b)}k.ie=function(a,b){return Wl(a,Gl(this,b))};
k.dd=function(a,b){b=Gl(this,b);var c={},d=a.U();d&&(c.geometry=Wl(d,b));d=a.M();delete d[a.c];c.attributes=tb(d)?{}:d;b&&b.featureProjection&&(c.spatialReference={wkid:Tb(b.featureProjection).nb.split(":").pop()});return c};k.ge=function(a,b){b=Gl(this,b);var c=[],d,e;d=0;for(e=a.length;d<e;++d)c.push(this.dd(a[d],b));return{features:c}};function Xl(a){this.mc=a};function Yl(a,b){this.mc=a;this.b=Array.prototype.slice.call(arguments,1);sa(2<=this.b.length,57)}u(Yl,Xl);function Zl(a){var b=["And"].concat(Array.prototype.slice.call(arguments));Yl.apply(this,b)}u(Zl,Yl);function $l(a,b,c){this.mc="BBOX";this.geometryName=a;this.extent=b;this.srsName=c}u($l,Xl);function am(a,b){this.mc=a;this.b=b}u(am,Xl);function bm(a,b,c,d){am.call(this,a,b);this.g=c;this.a=d}u(bm,am);function cm(a,b,c){bm.call(this,"PropertyIsEqualTo",a,b,c)}u(cm,bm);function dm(a,b){bm.call(this,"PropertyIsGreaterThan",a,b)}u(dm,bm);function em(a,b){bm.call(this,"PropertyIsGreaterThanOrEqualTo",a,b)}u(em,bm);function fm(a,b,c,d){this.mc=a;this.geometryName=b||"the_geom";this.geometry=c;this.srsName=d}u(fm,Xl);function gm(a,b,c){fm.call(this,"Intersects",a,b,c)}u(gm,fm);function hm(a,b,c){am.call(this,"PropertyIsBetween",a);this.a=b;this.g=c}u(hm,am);function im(a,b,c,d,e,f){am.call(this,"PropertyIsLike",a);this.c=b;this.f=void 0!==c?c:"*";this.i=void 0!==d?d:".";this.g=void 0!==e?e:"!";this.a=f}u(im,am);function jm(a){am.call(this,"PropertyIsNull",a)}u(jm,am);function km(a,b){bm.call(this,"PropertyIsLessThan",a,b)}u(km,bm);function lm(a,b){bm.call(this,"PropertyIsLessThanOrEqualTo",a,b)}u(lm,bm);function mm(a){this.mc="Not";this.condition=a}u(mm,Xl);function nm(a,b,c){bm.call(this,"PropertyIsNotEqualTo",a,b,c)}u(nm,bm);function om(a){var b=["Or"].concat(Array.prototype.slice.call(arguments));Yl.apply(this,b)}u(om,Yl);function pm(a,b,c){fm.call(this,"Within",a,b,c)}u(pm,fm);function qm(a){var b=[null].concat(Array.prototype.slice.call(arguments));return new (Function.prototype.bind.apply(Zl,b))}function rm(a,b,c){return new $l(a,b,c)};function sm(a){lf.call(this);this.a=a?a:null;tm(this)}u(sm,lf);function um(a){var b=[],c,d;c=0;for(d=a.length;c<d;++c)b.push(a[c].clone());return b}function vm(a){var b,c;if(a.a)for(b=0,c=a.a.length;b<c;++b)Hc(a.a[b],"change",a.s,a)}function tm(a){var b,c;if(a.a)for(b=0,c=a.a.length;b<c;++b)z(a.a[b],"change",a.s,a)}k=sm.prototype;k.clone=function(){var a=new sm(null);a.jj(this.a);return a};
k.Hb=function(a,b,c,d){if(d<Pa(this.D(),a,b))return d;var e=this.a,f,g;f=0;for(g=e.length;f<g;++f)d=e[f].Hb(a,b,c,d);return d};k.Sc=function(a,b){var c=this.a,d,e;d=0;for(e=c.length;d<e;++d)if(c[d].Sc(a,b))return!0;return!1};k.se=function(a){Wa(Infinity,Infinity,-Infinity,-Infinity,a);for(var b=this.a,c=0,d=b.length;c<d;++c)ab(a,b[c].D());return a};k.Qf=function(){return um(this.a)};
k.Td=function(a){this.l!=this.g&&(rb(this.i),this.f=0,this.l=this.g);if(0>a||this.f&&a<this.f)return this;var b=a.toString();if(this.i.hasOwnProperty(b))return this.i[b];var c=[],d=this.a,e=!1,f,g;f=0;for(g=d.length;f<g;++f){var h=d[f],l=h.Td(a);c.push(l);l!==h&&(e=!0)}if(e)return a=new sm(null),vm(a),a.a=c,tm(a),a.s(),this.i[b]=a;this.f=a;return this};k.S=function(){return"GeometryCollection"};k.Ya=function(a){var b=this.a,c,d;c=0;for(d=b.length;c<d;++c)if(b[c].Ya(a))return!0;return!1};
k.rotate=function(a,b){for(var c=this.a,d=0,e=c.length;d<e;++d)c[d].rotate(a,b);this.s()};k.scale=function(a,b,c){c||(c=kb(this.D()));for(var d=this.a,e=0,f=d.length;e<f;++e)d[e].scale(a,b,c);this.s()};k.jj=function(a){a=um(a);vm(this);this.a=a;tm(this);this.s()};k.Fc=function(a){var b=this.a,c,d;c=0;for(d=b.length;c<d;++c)b[c].Fc(a);this.s()};k.translate=function(a,b){var c=this.a,d,e;d=0;for(e=c.length;d<e;++d)c[d].translate(a,b);this.s()};k.ra=function(){vm(this);lf.prototype.ra.call(this)};function wm(a){a=a?a:{};El.call(this);this.defaultDataProjection=Tb(a.defaultDataProjection?a.defaultDataProjection:"EPSG:4326");a.featureProjection&&(this.i=Tb(a.featureProjection));this.b=a.geometryName}u(wm,Il);function xm(a,b){return a?Hl((0,ym[a.type])(a),!1,b):null}function zm(a,b){return(0,Am[a.S()])(Hl(a,!0,b),b)}
var ym={Point:function(a){return new E(a.coordinates)},LineString:function(a){return new N(a.coordinates)},Polygon:function(a){return new F(a.coordinates)},MultiPoint:function(a){return new P(a.coordinates)},MultiLineString:function(a){return new O(a.coordinates)},MultiPolygon:function(a){return new Q(a.coordinates)},GeometryCollection:function(a,b){var c=a.geometries.map(function(a){return xm(a,b)});return new sm(c)}},Am={Point:function(a){return{type:"Point",coordinates:a.W()}},LineString:function(a){return{type:"LineString",
coordinates:a.W()}},Polygon:function(a,b){var c;b&&(c=b.rightHanded);return{type:"Polygon",coordinates:a.W(c)}},MultiPoint:function(a){return{type:"MultiPoint",coordinates:a.W()}},MultiLineString:function(a){return{type:"MultiLineString",coordinates:a.W()}},MultiPolygon:function(a,b){var c;b&&(c=b.rightHanded);return{type:"MultiPolygon",coordinates:a.W(c)}},GeometryCollection:function(a,b){return{type:"GeometryCollection",geometries:a.a.map(function(a){var c=qb({},b);delete c.featureProjection;return zm(a,
c)})}},Circle:function(){return{type:"GeometryCollection",geometries:[]}}};k=wm.prototype;k.Wc=function(a,b){var c;c="Feature"===a.type?a:{type:"Feature",geometry:a};var d=xm(c.geometry,b),e=new I;this.b&&e.Yc(this.b);e.Ta(d);void 0!==c.id&&e.lc(c.id);c.properties&&e.H(c.properties);return e};k.sg=function(a,b){var c;if("FeatureCollection"===a.type){c=[];var d=a.features,e,f;e=0;for(f=d.length;e<f;++e)c.push(this.Wc(d[e],b))}else c=[this.Wc(a,b)];return c};k.wg=function(a,b){return xm(a,b)};
k.zg=function(a){a=a.crs;var b;a?"name"==a.type?b=Tb(a.properties.name):"EPSG"==a.type?b=Tb("EPSG:"+a.properties.code):sa(!1,36):b=this.defaultDataProjection;return b};k.dd=function(a,b){b=Gl(this,b);var c={type:"Feature"},d=a.a;void 0!==d&&(c.id=d);(d=a.U())?c.geometry=zm(d,b):c.geometry=null;d=a.M();delete d[a.c];tb(d)?c.properties=null:c.properties=d;return c};k.ge=function(a,b){b=Gl(this,b);var c=[],d,e;d=0;for(e=a.length;d<e;++d)c.push(this.dd(a[d],b));return{type:"FeatureCollection",features:c}};
k.ie=function(a,b){return zm(a,Gl(this,b))};function Bm(){this.g=new XMLSerializer;El.call(this)}u(Bm,El);k=Bm.prototype;k.S=function(){return"xml"};k.Vb=function(a,b){if(nl(a))return Cm(this,a,b);if(pl(a))return this.rg(a,b);if("string"===typeof a){var c=ql(a);return Cm(this,c,b)}return null};function Cm(a,b,c){a=Dm(a,b,c);return 0<a.length?a[0]:null}k.rg=function(){return null};k.Pa=function(a,b){if(nl(a))return Dm(this,a,b);if(pl(a))return this.Bc(a,b);if("string"===typeof a){var c=ql(a);return Dm(this,c,b)}return[]};
function Dm(a,b,c){var d=[];for(b=b.firstChild;b;b=b.nextSibling)b.nodeType==Node.ELEMENT_NODE&&ha(d,a.Bc(b,c));return d}k.Xc=function(a,b){if(nl(a))return null;if(pl(a))return this.Vi(a,b);"string"===typeof a&&ql(a);return null};k.Vi=function(){return null};k.jb=function(a){return nl(a)?this.yg(a):pl(a)?this.hf(a):"string"===typeof a?(a=ql(a),this.yg(a)):null};k.yg=function(){return this.defaultDataProjection};k.hf=function(){return this.defaultDataProjection};
k.Dd=function(a,b){return this.g.serializeToString(this.Ng(a,b))};k.Ng=function(){return null};k.Yb=function(a,b){var c=this.Zb(a,b);return this.g.serializeToString(c)};k.Zb=function(){return null};k.ed=function(a,b){var c=this.he(a,b);return this.g.serializeToString(c)};k.he=function(){return null};function Em(a){a=a?a:{};this.featureType=a.featureType;this.featureNS=a.featureNS;this.srsName=a.srsName;this.schemaLocation="";this.b={};this.b["http://www.opengis.net/gml"]={featureMember:tl(Em.prototype.ae),featureMembers:tl(Em.prototype.ae)};Bm.call(this)}u(Em,Bm);var Fm=/^[\s\xa0]*$/;k=Em.prototype;
k.ae=function(a,b){var c=a.localName,d=null;if("FeatureCollection"==c)"http://www.opengis.net/wfs"===a.namespaceURI?d=M([],this.b,a,b,this):d=M(null,this.b,a,b,this);else if("featureMembers"==c||"featureMember"==c){var e=b[0],f=e.featureType,g=e.featureNS,h,l;if(!f&&a.childNodes){f=[];g={};h=0;for(l=a.childNodes.length;h<l;++h){var m=a.childNodes[h];if(1===m.nodeType){var n=m.nodeName.split(":").pop();if(-1===f.indexOf(n)){var p="",q=0,m=m.namespaceURI,r;for(r in g){if(g[r]===m){p=r;break}++q}p||
(p="p"+q,g[p]=m);f.push(p+":"+n)}}}"featureMember"!=c&&(e.featureType=f,e.featureNS=g)}"string"===typeof g&&(h=g,g={},g.p0=h);var e={},f=Array.isArray(f)?f:[f],v;for(v in g){n={};h=0;for(l=f.length;h<l;++h)(-1===f[h].indexOf(":")?"p0":f[h].split(":")[0])===v&&(n[f[h].split(":").pop()]="featureMembers"==c?sl(this.qg,this):tl(this.qg,this));e[g[v]]=n}"featureMember"==c?d=M(void 0,e,a,b):d=M([],e,a,b)}null===d&&(d=[]);return d};
k.ef=function(a,b){var c=b[0];c.srsName=a.firstElementChild.getAttribute("srsName");var d=M(null,this.Rg,a,b,this);if(d)return Hl(d,!1,c)};
k.qg=function(a,b){var c,d;(d=a.getAttribute("fid"))||(d=a.getAttributeNS("http://www.opengis.net/gml","id")||"");var e={},f;for(c=a.firstElementChild;c;c=c.nextElementSibling){var g=c.localName;if(0===c.childNodes.length||1===c.childNodes.length&&(3===c.firstChild.nodeType||4===c.firstChild.nodeType)){var h=ll(c,!1);Fm.test(h)&&(h=void 0);e[g]=h}else"boundedBy"!==g&&(f=g),e[g]=this.ef(c,b)}c=new I(e);f&&c.Yc(f);d&&c.lc(d);return c};
k.$i=function(a,b){var c=this.df(a,b);if(c){var d=new E(null);d.ca("XYZ",c);return d}};k.Yi=function(a,b){var c=M([],this.Jj,a,b,this);if(c)return new P(c)};k.Xi=function(a,b){var c=M([],this.Ij,a,b,this);if(c){var d=new O(null);Nl(d,c);return d}};k.Zi=function(a,b){var c=M([],this.Kj,a,b,this);if(c){var d=new Q(null);Pl(d,c);return d}};k.Ri=function(a,b){Al(this.Nj,a,b,this)};k.Fh=function(a,b){Al(this.Gj,a,b,this)};k.Si=function(a,b){Al(this.Oj,a,b,this)};
k.ff=function(a,b){var c=this.df(a,b);if(c){var d=new N(null);d.ca("XYZ",c);return d}};k.mp=function(a,b){var c=M(null,this.je,a,b,this);if(c)return c};k.Wi=function(a,b){var c=this.df(a,b);if(c){var d=new Gf(null);Hf(d,"XYZ",c);return d}};k.gf=function(a,b){var c=M([null],this.xf,a,b,this);if(c&&c[0]){var d=new F(null),e=c[0],f=[e.length],g,h;g=1;for(h=c.length;g<h;++g)ha(e,c[g]),f.push(e.length);d.ca("XYZ",e,f);return d}};k.df=function(a,b){return M(null,this.je,a,b,this)};
k.Jj={"http://www.opengis.net/gml":{pointMember:sl(Em.prototype.Ri),pointMembers:sl(Em.prototype.Ri)}};k.Ij={"http://www.opengis.net/gml":{lineStringMember:sl(Em.prototype.Fh),lineStringMembers:sl(Em.prototype.Fh)}};k.Kj={"http://www.opengis.net/gml":{polygonMember:sl(Em.prototype.Si),polygonMembers:sl(Em.prototype.Si)}};k.Nj={"http://www.opengis.net/gml":{Point:sl(Em.prototype.df)}};k.Gj={"http://www.opengis.net/gml":{LineString:sl(Em.prototype.ff)}};k.Oj={"http://www.opengis.net/gml":{Polygon:sl(Em.prototype.gf)}};
k.ke={"http://www.opengis.net/gml":{LinearRing:tl(Em.prototype.mp)}};k.Vi=function(a,b){var c=this.ef(a,[Fl(this,a,b?b:{})]);return c?c:null};k.Bc=function(a,b){var c={featureType:this.featureType,featureNS:this.featureNS};b&&qb(c,Fl(this,a,b));return this.ae(a,[c])||[]};k.hf=function(a){return Tb(this.srsName?this.srsName:a.firstElementChild.getAttribute("srsName"))};function Gm(a){a=ll(a,!1);return Hm(a)}function Hm(a){if(a=/^\s*(true|1)|(false|0)\s*$/.exec(a))return void 0!==a[1]||!1}function Im(a){a=ll(a,!1);a=Date.parse(a);return isNaN(a)?void 0:a/1E3}function Jm(a){a=ll(a,!1);return Km(a)}function Km(a){if(a=/^\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)\s*$/i.exec(a))return parseFloat(a[1])}function Lm(a){a=ll(a,!1);return Mm(a)}function Mm(a){if(a=/^\s*(\d+)\s*$/.exec(a))return parseInt(a[1],10)}function R(a){return ll(a,!1).trim()}
function Nm(a,b){Om(a,b?"1":"0")}function Pm(a,b){a.appendChild(il.createTextNode(b.toPrecision()))}function Qm(a,b){a.appendChild(il.createTextNode(b.toString()))}function Om(a,b){a.appendChild(il.createTextNode(b))};function Rm(a){a=a?a:{};Em.call(this,a);this.o=void 0!==a.surface?a.surface:!1;this.c=void 0!==a.curve?a.curve:!1;this.f=void 0!==a.multiCurve?a.multiCurve:!0;this.j=void 0!==a.multiSurface?a.multiSurface:!0;this.schemaLocation=a.schemaLocation?a.schemaLocation:"http://www.opengis.net/gml http://schemas.opengis.net/gml/3.1.1/profiles/gmlsfProfile/1.0.0/gmlsf.xsd"}u(Rm,Em);k=Rm.prototype;k.qp=function(a,b){var c=M([],this.Hj,a,b,this);if(c){var d=new O(null);Nl(d,c);return d}};
k.rp=function(a,b){var c=M([],this.Lj,a,b,this);if(c){var d=new Q(null);Pl(d,c);return d}};k.hh=function(a,b){Al(this.Dj,a,b,this)};k.wj=function(a,b){Al(this.Rj,a,b,this)};k.up=function(a,b){return M([null],this.Mj,a,b,this)};k.xp=function(a,b){return M([null],this.Qj,a,b,this)};k.vp=function(a,b){return M([null],this.xf,a,b,this)};k.pp=function(a,b){return M([null],this.je,a,b,this)};k.Yl=function(a,b){var c=M(void 0,this.ke,a,b,this);c&&b[b.length-1].push(c)};
k.uk=function(a,b){var c=M(void 0,this.ke,a,b,this);c&&(b[b.length-1][0]=c)};k.aj=function(a,b){var c=M([null],this.Sj,a,b,this);if(c&&c[0]){var d=new F(null),e=c[0],f=[e.length],g,h;g=1;for(h=c.length;g<h;++g)ha(e,c[g]),f.push(e.length);d.ca("XYZ",e,f);return d}};k.Ti=function(a,b){var c=M([null],this.Ej,a,b,this);if(c){var d=new N(null);d.ca("XYZ",c);return d}};k.lp=function(a,b){var c=M([null],this.Fj,a,b,this);return Wa(c[1][0],c[1][1],c[2][0],c[2][1])};
k.np=function(a,b){for(var c=ll(a,!1),d=/^\s*([+\-]?\d*\.?\d+(?:[eE][+\-]?\d+)?)\s*/,e=[],f;f=d.exec(c);)e.push(parseFloat(f[1])),c=c.substr(f[0].length);if(""===c){c=b[0].srsName;d="enu";c&&(d=Tb(c).b);if("neu"===d)for(c=0,d=e.length;c<d;c+=3)f=e[c],e[c]=e[c+1],e[c+1]=f;c=e.length;2==c&&e.push(0);if(c)return e}};
k.vg=function(a,b){var c=ll(a,!1).replace(/^\s*|\s*$/g,""),d=b[0].srsName,e=a.parentNode.getAttribute("srsDimension"),f="enu";d&&(f=Tb(d).b);c=c.split(/\s+/);d=2;a.getAttribute("srsDimension")?d=Mm(a.getAttribute("srsDimension")):a.getAttribute("dimension")?d=Mm(a.getAttribute("dimension")):e&&(d=Mm(e));for(var g,h,l=[],m=0,n=c.length;m<n;m+=d)e=parseFloat(c[m]),g=parseFloat(c[m+1]),h=3===d?parseFloat(c[m+2]):0,"en"===f.substr(0,2)?l.push(e,g,h):l.push(g,e,h);return l};
k.je={"http://www.opengis.net/gml":{pos:tl(Rm.prototype.np),posList:tl(Rm.prototype.vg)}};k.xf={"http://www.opengis.net/gml":{interior:Rm.prototype.Yl,exterior:Rm.prototype.uk}};
k.Rg={"http://www.opengis.net/gml":{Point:tl(Em.prototype.$i),MultiPoint:tl(Em.prototype.Yi),LineString:tl(Em.prototype.ff),MultiLineString:tl(Em.prototype.Xi),LinearRing:tl(Em.prototype.Wi),Polygon:tl(Em.prototype.gf),MultiPolygon:tl(Em.prototype.Zi),Surface:tl(Rm.prototype.aj),MultiSurface:tl(Rm.prototype.rp),Curve:tl(Rm.prototype.Ti),MultiCurve:tl(Rm.prototype.qp),Envelope:tl(Rm.prototype.lp)}};k.Hj={"http://www.opengis.net/gml":{curveMember:sl(Rm.prototype.hh),curveMembers:sl(Rm.prototype.hh)}};
k.Lj={"http://www.opengis.net/gml":{surfaceMember:sl(Rm.prototype.wj),surfaceMembers:sl(Rm.prototype.wj)}};k.Dj={"http://www.opengis.net/gml":{LineString:sl(Em.prototype.ff),Curve:sl(Rm.prototype.Ti)}};k.Rj={"http://www.opengis.net/gml":{Polygon:sl(Em.prototype.gf),Surface:sl(Rm.prototype.aj)}};k.Sj={"http://www.opengis.net/gml":{patches:tl(Rm.prototype.up)}};k.Ej={"http://www.opengis.net/gml":{segments:tl(Rm.prototype.xp)}};k.Fj={"http://www.opengis.net/gml":{lowerCorner:sl(Rm.prototype.vg),upperCorner:sl(Rm.prototype.vg)}};
k.Mj={"http://www.opengis.net/gml":{PolygonPatch:tl(Rm.prototype.vp)}};k.Qj={"http://www.opengis.net/gml":{LineStringSegment:tl(Rm.prototype.pp)}};function Sm(a,b,c){c=c[c.length-1].srsName;b=b.W();for(var d=b.length,e=Array(d),f,g=0;g<d;++g){f=b[g];var h=g,l="enu";c&&(l=Tb(c).b);e[h]="en"===l.substr(0,2)?f[0]+" "+f[1]:f[1]+" "+f[0]}Om(a,e.join(" "))}
k.gi=function(a,b,c){var d=c[c.length-1].srsName;d&&a.setAttribute("srsName",d);d=kl(a.namespaceURI,"pos");a.appendChild(d);c=c[c.length-1].srsName;a="enu";c&&(a=Tb(c).b);b=b.W();Om(d,"en"===a.substr(0,2)?b[0]+" "+b[1]:b[1]+" "+b[0])};var Tm={"http://www.opengis.net/gml":{lowerCorner:K(Om),upperCorner:K(Om)}};k=Rm.prototype;k.cn=function(a,b,c){var d=c[c.length-1].srsName;d&&a.setAttribute("srsName",d);Bl({node:a},Tm,yl,[b[0]+" "+b[1],b[2]+" "+b[3]],c,["lowerCorner","upperCorner"],this)};
k.di=function(a,b,c){var d=c[c.length-1].srsName;d&&a.setAttribute("srsName",d);d=kl(a.namespaceURI,"posList");a.appendChild(d);Sm(d,b,c)};k.bn=function(a,b){var c=b[b.length-1],d=c.node,e=c.exteriorWritten;void 0===e&&(c.exteriorWritten=!0);return kl(d.namespaceURI,void 0!==e?"interior":"exterior")};
k.Re=function(a,b,c){var d=c[c.length-1].srsName;"PolygonPatch"!==a.nodeName&&d&&a.setAttribute("srsName",d);"Polygon"===a.nodeName||"PolygonPatch"===a.nodeName?(b=b.Oc(),Bl({node:a,srsName:d},Um,this.bn,b,c,void 0,this)):"Surface"===a.nodeName&&(d=kl(a.namespaceURI,"patches"),a.appendChild(d),a=kl(d.namespaceURI,"PolygonPatch"),d.appendChild(a),this.Re(a,b,c))};
k.Qe=function(a,b,c){var d=c[c.length-1].srsName;"LineStringSegment"!==a.nodeName&&d&&a.setAttribute("srsName",d);"LineString"===a.nodeName||"LineStringSegment"===a.nodeName?(d=kl(a.namespaceURI,"posList"),a.appendChild(d),Sm(d,b,c)):"Curve"===a.nodeName&&(d=kl(a.namespaceURI,"segments"),a.appendChild(d),a=kl(d.namespaceURI,"LineStringSegment"),d.appendChild(a),this.Qe(a,b,c))};
k.fi=function(a,b,c){var d=c[c.length-1],e=d.srsName,d=d.surface;e&&a.setAttribute("srsName",e);b=b.md();Bl({node:a,srsName:e,surface:d},Vm,this.l,b,c,void 0,this)};k.dn=function(a,b,c){var d=c[c.length-1].srsName;d&&a.setAttribute("srsName",d);b=b.Zd();Bl({node:a,srsName:d},Wm,wl("pointMember"),b,c,void 0,this)};k.ei=function(a,b,c){var d=c[c.length-1],e=d.srsName,d=d.curve;e&&a.setAttribute("srsName",e);b=b.Nc();Bl({node:a,srsName:e,curve:d},Xm,this.l,b,c,void 0,this)};
k.hi=function(a,b,c){var d=kl(a.namespaceURI,"LinearRing");a.appendChild(d);this.di(d,b,c)};k.ii=function(a,b,c){var d=this.a(b,c);d&&(a.appendChild(d),this.Re(d,b,c))};k.en=function(a,b,c){var d=kl(a.namespaceURI,"Point");a.appendChild(d);this.gi(d,b,c)};k.ci=function(a,b,c){var d=this.a(b,c);d&&(a.appendChild(d),this.Qe(d,b,c))};
k.rd=function(a,b,c){var d=c[c.length-1],e=qb({},d);e.node=a;var f;Array.isArray(b)?d.dataProjection?f=gc(b,d.featureProjection,d.dataProjection):f=b:f=Hl(b,!0,d);Bl(e,Ym,this.a,[f],c,void 0,this)};
k.bi=function(a,b,c){var d=b.a;d&&a.setAttribute("fid",d);var d=c[c.length-1],e=d.featureNS,f=b.c;d.kb||(d.kb={},d.kb[e]={});var g=b.M();b=[];var h=[],l;for(l in g){var m=g[l];null!==m&&(b.push(l),h.push(m),l==f||m instanceof lf?l in d.kb[e]||(d.kb[e][l]=K(this.rd,this)):l in d.kb[e]||(d.kb[e][l]=K(Om)))}l=qb({},d);l.node=a;Bl(l,d.kb,wl(void 0,e),h,c,b)};
var Vm={"http://www.opengis.net/gml":{surfaceMember:K(Rm.prototype.ii),polygonMember:K(Rm.prototype.ii)}},Wm={"http://www.opengis.net/gml":{pointMember:K(Rm.prototype.en)}},Xm={"http://www.opengis.net/gml":{lineStringMember:K(Rm.prototype.ci),curveMember:K(Rm.prototype.ci)}},Um={"http://www.opengis.net/gml":{exterior:K(Rm.prototype.hi),interior:K(Rm.prototype.hi)}},Ym={"http://www.opengis.net/gml":{Curve:K(Rm.prototype.Qe),MultiCurve:K(Rm.prototype.ei),Point:K(Rm.prototype.gi),MultiPoint:K(Rm.prototype.dn),
LineString:K(Rm.prototype.Qe),MultiLineString:K(Rm.prototype.ei),LinearRing:K(Rm.prototype.di),Polygon:K(Rm.prototype.Re),MultiPolygon:K(Rm.prototype.fi),Surface:K(Rm.prototype.Re),MultiSurface:K(Rm.prototype.fi),Envelope:K(Rm.prototype.cn)}},Zm={MultiLineString:"lineStringMember",MultiCurve:"curveMember",MultiPolygon:"polygonMember",MultiSurface:"surfaceMember"};Rm.prototype.l=function(a,b){return kl("http://www.opengis.net/gml",Zm[b[b.length-1].node.nodeName])};
Rm.prototype.a=function(a,b){var c=b[b.length-1],d=c.multiSurface,e=c.surface,f=c.curve,c=c.multiCurve,g;Array.isArray(a)?g="Envelope":(g=a.S(),"MultiPolygon"===g&&!0===d?g="MultiSurface":"Polygon"===g&&!0===e?g="Surface":"LineString"===g&&!0===f?g="Curve":"MultiLineString"===g&&!0===c&&(g="MultiCurve"));return kl("http://www.opengis.net/gml",g)};
Rm.prototype.he=function(a,b){b=Gl(this,b);var c=kl("http://www.opengis.net/gml","geom"),d={node:c,srsName:this.srsName,curve:this.c,surface:this.o,multiSurface:this.j,multiCurve:this.f};b&&qb(d,b);this.rd(c,a,[d]);return c};
Rm.prototype.Zb=function(a,b){b=Gl(this,b);var c=kl("http://www.opengis.net/gml","featureMembers");c.setAttributeNS("http://www.w3.org/2001/XMLSchema-instance","xsi:schemaLocation",this.schemaLocation);var d={srsName:this.srsName,curve:this.c,surface:this.o,multiSurface:this.j,multiCurve:this.f,featureNS:this.featureNS,featureType:this.featureType};b&&qb(d,b);var d=[d],e=d[d.length-1],f=e.featureType,g=e.featureNS,h={};h[g]={};h[g][f]=K(this.bi,this);e=qb({},e);e.node=c;Bl(e,h,wl(f,g),a,d);return c};function $m(a){a=a?a:{};Em.call(this,a);this.b["http://www.opengis.net/gml"].featureMember=sl(Em.prototype.ae);this.schemaLocation=a.schemaLocation?a.schemaLocation:"http://www.opengis.net/gml http://schemas.opengis.net/gml/2.1.2/feature.xsd"}u($m,Em);k=$m.prototype;
k.Ui=function(a,b){var c=ll(a,!1).replace(/^\s*|\s*$/g,""),d=b[0].srsName,e="enu";d&&(d=Tb(d))&&(e=d.b);for(var c=c.trim().split(/\s+/),f,g,h=[],l=0,m=c.length;l<m;l++)g=c[l].split(/,+/),d=parseFloat(g[0]),f=parseFloat(g[1]),g=3===g.length?parseFloat(g[2]):0,"en"===e.substr(0,2)?h.push(d,f,g):h.push(f,d,g);return h};k.jp=function(a,b){var c=M([null],this.Cj,a,b,this);return Wa(c[1][0],c[1][1],c[1][3],c[1][4])};k.Wl=function(a,b){var c=M(void 0,this.ke,a,b,this);c&&b[b.length-1].push(c)};
k.So=function(a,b){var c=M(void 0,this.ke,a,b,this);c&&(b[b.length-1][0]=c)};k.je={"http://www.opengis.net/gml":{coordinates:tl($m.prototype.Ui)}};k.xf={"http://www.opengis.net/gml":{innerBoundaryIs:$m.prototype.Wl,outerBoundaryIs:$m.prototype.So}};k.Cj={"http://www.opengis.net/gml":{coordinates:sl($m.prototype.Ui)}};
k.Rg={"http://www.opengis.net/gml":{Point:tl(Em.prototype.$i),MultiPoint:tl(Em.prototype.Yi),LineString:tl(Em.prototype.ff),MultiLineString:tl(Em.prototype.Xi),LinearRing:tl(Em.prototype.Wi),Polygon:tl(Em.prototype.gf),MultiPolygon:tl(Em.prototype.Zi),Box:tl($m.prototype.jp)}};
k.eg=function(a,b){var c=b[b.length-1],d=c.multiSurface,e=c.surface,c=c.multiCurve,f;Array.isArray(a)?f="Envelope":(f=a.S(),"MultiPolygon"===f&&!0===d?f="MultiSurface":"Polygon"===f&&!0===e?f="Surface":"MultiLineString"===f&&!0===c&&(f="MultiCurve"));return kl("http://www.opengis.net/gml",f)};k.Uh=function(a,b,c){var d=c[c.length-1],e=qb({},d);e.node=a;var f;Array.isArray(b)?d.dataProjection?f=gc(b,d.featureProjection,d.dataProjection):f=b:f=Hl(b,!0,d);Bl(e,an,this.eg,[f],c,void 0,this)};
k.Oe=function(a,b,c){var d=c[c.length-1].srsName;"LineStringSegment"!==a.nodeName&&d&&a.setAttribute("srsName",d);"LineString"===a.nodeName||"LineStringSegment"===a.nodeName?(d=bn(a.namespaceURI),a.appendChild(d),cn(d,b,c)):"Curve"===a.nodeName&&(d=kl(a.namespaceURI,"segments"),a.appendChild(d),a=kl(d.namespaceURI,"LineStringSegment"),d.appendChild(a),this.Oe(a,b,c))};function bn(a){a=kl(a,"coordinates");a.setAttribute("decimal",".");a.setAttribute("cs",",");a.setAttribute("ts"," ");return a}
function cn(a,b,c){c=c[c.length-1].srsName;b=b.W();for(var d=b.length,e=Array(d),f,g=0;g<d;++g)f=b[g],e[g]=dn(f,c);Om(a,e.join(" "))}k.Pe=function(a,b,c){var d=c[c.length-1].srsName;"PolygonPatch"!==a.nodeName&&d&&a.setAttribute("srsName",d);"Polygon"===a.nodeName||"PolygonPatch"===a.nodeName?(b=b.Oc(),Bl({node:a,srsName:d},en,this.Ym,b,c,void 0,this)):"Surface"===a.nodeName&&(d=kl(a.namespaceURI,"patches"),a.appendChild(d),a=kl(d.namespaceURI,"PolygonPatch"),d.appendChild(a),this.Pe(a,b,c))};
k.Ym=function(a,b){var c=b[b.length-1],d=c.node,e=c.exteriorWritten;void 0===e&&(c.exteriorWritten=!0);return kl(d.namespaceURI,void 0!==e?"innerBoundaryIs":"outerBoundaryIs")};k.$h=function(a,b,c){var d=kl(a.namespaceURI,"LinearRing");a.appendChild(d);this.Wh(d,b,c)};function dn(a,b){var c="enu";b&&(c=Tb(b).b);return"en"===c.substr(0,2)?a[0]+","+a[1]:a[1]+","+a[0]}
k.Xh=function(a,b,c){var d=c[c.length-1],e=d.srsName,d=d.curve;e&&a.setAttribute("srsName",e);b=b.Nc();Bl({node:a,srsName:e,curve:d},fn,this.a,b,c,void 0,this)};k.Zh=function(a,b,c){var d=c[c.length-1].srsName;d&&a.setAttribute("srsName",d);c=bn(a.namespaceURI);a.appendChild(c);a=b.W();a=dn(a,d);Om(c,a)};k.$m=function(a,b,c){var d=c[c.length-1].srsName;d&&a.setAttribute("srsName",d);b=b.Zd();Bl({node:a,srsName:d},gn,wl("pointMember"),b,c,void 0,this)};
k.an=function(a,b,c){var d=kl(a.namespaceURI,"Point");a.appendChild(d);this.Zh(d,b,c)};k.Vh=function(a,b,c){var d=this.eg(b,c);d&&(a.appendChild(d),this.Oe(d,b,c))};k.Wh=function(a,b,c){var d=c[c.length-1].srsName;d&&a.setAttribute("srsName",d);d=bn(a.namespaceURI);a.appendChild(d);cn(d,b,c)};k.Yh=function(a,b,c){var d=c[c.length-1],e=d.srsName,d=d.surface;e&&a.setAttribute("srsName",e);b=b.md();Bl({node:a,srsName:e,surface:d},hn,this.a,b,c,void 0,this)};
k.ai=function(a,b,c){var d=this.eg(b,c);d&&(a.appendChild(d),this.Pe(d,b,c))};k.Zm=function(a,b,c){var d=c[c.length-1].srsName;d&&a.setAttribute("srsName",d);Bl({node:a},jn,yl,[b[0]+" "+b[1],b[2]+" "+b[3]],c,["lowerCorner","upperCorner"],this)};
var an={"http://www.opengis.net/gml":{Curve:K($m.prototype.Oe),MultiCurve:K($m.prototype.Xh),Point:K($m.prototype.Zh),MultiPoint:K($m.prototype.$m),LineString:K($m.prototype.Oe),MultiLineString:K($m.prototype.Xh),LinearRing:K($m.prototype.Wh),Polygon:K($m.prototype.Pe),MultiPolygon:K($m.prototype.Yh),Surface:K($m.prototype.Pe),MultiSurface:K($m.prototype.Yh),Envelope:K($m.prototype.Zm)}},en={"http://www.opengis.net/gml":{outerBoundaryIs:K($m.prototype.$h),innerBoundaryIs:K($m.prototype.$h)}},gn={"http://www.opengis.net/gml":{pointMember:K($m.prototype.an)}},
fn={"http://www.opengis.net/gml":{lineStringMember:K($m.prototype.Vh),curveMember:K($m.prototype.Vh)}};$m.prototype.a=function(a,b){return kl("http://www.opengis.net/gml",kn[b[b.length-1].node.nodeName])};var kn={MultiLineString:"lineStringMember",MultiCurve:"curveMember",MultiPolygon:"polygonMember",MultiSurface:"surfaceMember"},hn={"http://www.opengis.net/gml":{surfaceMember:K($m.prototype.ai),polygonMember:K($m.prototype.ai)}},jn={"http://www.opengis.net/gml":{lowerCorner:K(Om),upperCorner:K(Om)}};function ln(a){a=a?a:{};Bm.call(this);this.defaultDataProjection=Tb("EPSG:4326");this.b=a.readExtensions}u(ln,Bm);var mn=[null,"http://www.topografix.com/GPX/1/0","http://www.topografix.com/GPX/1/1"];function nn(a,b,c,d){a.push(parseFloat(c.getAttribute("lon")),parseFloat(c.getAttribute("lat")));"ele"in d?(a.push(d.ele),delete d.ele,b.hasZ=!0):a.push(0);"time"in d?(a.push(d.time),delete d.time,b.hasM=!0):a.push(0);return a}
function on(a,b,c){var d="XY",e=2;a.hasZ&&a.hasM?(d="XYZM",e=4):a.hasZ?(d="XYZ",e=3):a.hasM&&(d="XYM",e=3);if(4!==e){var f,g;f=0;for(g=b.length/4;f<g;f++)b[f*e]=b[4*f],b[f*e+1]=b[4*f+1],a.hasZ&&(b[f*e+2]=b[4*f+2]),a.hasM&&(b[f*e+2]=b[4*f+3]);b.length=b.length/4*e;if(c)for(f=0,g=c.length;f<g;f++)c[f]=c[f]/4*e}return d}function pn(a,b){var c=b[b.length-1],d=a.getAttribute("href");null!==d&&(c.link=d);Al(qn,a,b)}function rn(a,b){b[b.length-1].extensionsNode_=a}
function sn(a,b){var c=b[0],d=M({flatCoordinates:[],layoutOptions:{}},tn,a,b);if(d){var e=d.flatCoordinates;delete d.flatCoordinates;var f=d.layoutOptions;delete d.layoutOptions;var f=on(f,e),g=new N(null);g.ca(f,e);Hl(g,!1,c);c=new I(g);c.H(d);return c}}
function un(a,b){var c=b[0],d=M({flatCoordinates:[],ends:[],layoutOptions:{}},vn,a,b);if(d){var e=d.flatCoordinates;delete d.flatCoordinates;var f=d.ends;delete d.ends;var g=d.layoutOptions;delete d.layoutOptions;var g=on(g,e,f),h=new O(null);h.ca(g,e,f);Hl(h,!1,c);c=new I(h);c.H(d);return c}}function wn(a,b){var c=b[0],d=M({},xn,a,b);if(d){var e={},f=nn([],e,a,d),e=on(e,f),f=new E(f,e);Hl(f,!1,c);c=new I(f);c.H(d);return c}}
var yn={rte:sn,trk:un,wpt:wn},zn=L(mn,{rte:sl(sn),trk:sl(un),wpt:sl(wn)}),qn=L(mn,{text:J(R,"linkText"),type:J(R,"linkType")}),tn=L(mn,{name:J(R),cmt:J(R),desc:J(R),src:J(R),link:pn,number:J(Lm),extensions:rn,type:J(R),rtept:function(a,b){var c=M({},An,a,b);if(c){var d=b[b.length-1];nn(d.flatCoordinates,d.layoutOptions,a,c)}}}),An=L(mn,{ele:J(Jm),time:J(Im)}),vn=L(mn,{name:J(R),cmt:J(R),desc:J(R),src:J(R),link:pn,number:J(Lm),type:J(R),extensions:rn,trkseg:function(a,b){var c=b[b.length-1];Al(Bn,
a,b);c.ends.push(c.flatCoordinates.length)}}),Bn=L(mn,{trkpt:function(a,b){var c=M({},Cn,a,b);if(c){var d=b[b.length-1];nn(d.flatCoordinates,d.layoutOptions,a,c)}}}),Cn=L(mn,{ele:J(Jm),time:J(Im)}),xn=L(mn,{ele:J(Jm),time:J(Im),magvar:J(Jm),geoidheight:J(Jm),name:J(R),cmt:J(R),desc:J(R),src:J(R),link:pn,sym:J(R),type:J(R),fix:J(R),sat:J(Lm),hdop:J(Jm),vdop:J(Jm),pdop:J(Jm),ageofdgpsdata:J(Jm),dgpsid:J(Lm),extensions:rn});
function Dn(a,b){b||(b=[]);for(var c=0,d=b.length;c<d;++c){var e=b[c];if(a.b){var f=e.get("extensionsNode_")||null;a.b(e,f)}e.set("extensionsNode_",void 0)}}ln.prototype.rg=function(a,b){if(!fa(mn,a.namespaceURI))return null;var c=yn[a.localName];if(!c)return null;c=c(a,[Fl(this,a,b)]);if(!c)return null;Dn(this,[c]);return c};ln.prototype.Bc=function(a,b){if(!fa(mn,a.namespaceURI))return[];if("gpx"==a.localName){var c=M([],zn,a,[Fl(this,a,b)]);if(c)return Dn(this,c),c}return[]};
function En(a,b,c){a.setAttribute("href",b);b=c[c.length-1].properties;Bl({node:a},Fn,yl,[b.linkText,b.linkType],c,Gn)}function Hn(a,b,c){var d=c[c.length-1],e=d.node.namespaceURI,f=d.properties;a.setAttributeNS(null,"lat",b[1]);a.setAttributeNS(null,"lon",b[0]);switch(d.geometryLayout){case "XYZM":b[3]&&(f.time=b[3]);case "XYZ":b[2]&&(f.ele=b[2]);break;case "XYM":b[2]&&(f.time=b[2])}b="rtept"==a.nodeName?In[e]:Jn[e];d=zl(f,b);Bl({node:a,properties:f},Kn,yl,d,c,b)}
var Gn=["text","type"],Fn=L(mn,{text:K(Om),type:K(Om)}),Ln=L(mn,"name cmt desc src link number type rtept".split(" ")),Mn=L(mn,{name:K(Om),cmt:K(Om),desc:K(Om),src:K(Om),link:K(En),number:K(Qm),type:K(Om),rtept:vl(K(Hn))}),In=L(mn,["ele","time"]),Nn=L(mn,"name cmt desc src link number type trkseg".split(" ")),Qn=L(mn,{name:K(Om),cmt:K(Om),desc:K(Om),src:K(Om),link:K(En),number:K(Qm),type:K(Om),trkseg:vl(K(function(a,b,c){Bl({node:a,geometryLayout:b.la,properties:{}},On,Pn,b.W(),c)}))}),Pn=wl("trkpt"),
On=L(mn,{trkpt:K(Hn)}),Jn=L(mn,"ele time magvar geoidheight name cmt desc src link sym type fix sat hdop vdop pdop ageofdgpsdata dgpsid".split(" ")),Kn=L(mn,{ele:K(Pm),time:K(function(a,b){var c=new Date(1E3*b);a.appendChild(il.createTextNode(c.getUTCFullYear()+"-"+Ve(c.getUTCMonth()+1)+"-"+Ve(c.getUTCDate())+"T"+Ve(c.getUTCHours())+":"+Ve(c.getUTCMinutes())+":"+Ve(c.getUTCSeconds())+"Z"))}),magvar:K(Pm),geoidheight:K(Pm),name:K(Om),cmt:K(Om),desc:K(Om),src:K(Om),link:K(En),sym:K(Om),type:K(Om),fix:K(Om),
sat:K(Qm),hdop:K(Pm),vdop:K(Pm),pdop:K(Pm),ageofdgpsdata:K(Pm),dgpsid:K(Qm)}),Rn={Point:"wpt",LineString:"rte",MultiLineString:"trk"};function Sn(a,b){var c=a.U();if(c&&(c=Rn[c.S()]))return kl(b[b.length-1].node.namespaceURI,c)}
var Tn=L(mn,{rte:K(function(a,b,c){var d=c[0],e=b.M();a={node:a,properties:e};if(b=b.U())b=Hl(b,!0,d),a.geometryLayout=b.la,e.rtept=b.W();d=Ln[c[c.length-1].node.namespaceURI];e=zl(e,d);Bl(a,Mn,yl,e,c,d)}),trk:K(function(a,b,c){var d=c[0],e=b.M();a={node:a,properties:e};if(b=b.U())b=Hl(b,!0,d),e.trkseg=b.Nc();d=Nn[c[c.length-1].node.namespaceURI];e=zl(e,d);Bl(a,Qn,yl,e,c,d)}),wpt:K(function(a,b,c){var d=c[0],e=c[c.length-1];e.properties=b.M();if(b=b.U())b=Hl(b,!0,d),e.geometryLayout=b.la,Hn(a,b.W(),
c)})});ln.prototype.Zb=function(a,b){b=Gl(this,b);var c=kl("http://www.topografix.com/GPX/1/1","gpx");c.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns:xsi","http://www.w3.org/2001/XMLSchema-instance");c.setAttributeNS("http://www.w3.org/2001/XMLSchema-instance","xsi:schemaLocation","http://www.topografix.com/GPX/1/1 http://www.topografix.com/GPX/1/1/gpx.xsd");c.setAttribute("version","1.1");c.setAttribute("creator","OpenLayers");Bl({node:c},Tn,Sn,a,[b]);return c};function Un(){El.call(this)}u(Un,El);function Vn(a){return"string"===typeof a?a:""}k=Un.prototype;k.S=function(){return"text"};k.Vb=function(a,b){return this.$d(Vn(a),Gl(this,b))};k.Pa=function(a,b){return this.tg(Vn(a),Gl(this,b))};k.Xc=function(a,b){return this.yd(Vn(a),Gl(this,b))};k.jb=function(){return this.defaultDataProjection};k.Dd=function(a,b){return this.fe(a,Gl(this,b))};k.Yb=function(a,b){return this.Og(a,Gl(this,b))};k.ed=function(a,b){return this.Ed(a,Gl(this,b))};function Wn(a){a=a?a:{};El.call(this);this.defaultDataProjection=Tb("EPSG:4326");this.b=a.altitudeMode?a.altitudeMode:"none"}u(Wn,Un);var Xn=/^B(\d{2})(\d{2})(\d{2})(\d{2})(\d{5})([NS])(\d{3})(\d{5})([EW])([AV])(\d{5})(\d{5})/,Yn=/^H.([A-Z]{3}).*?:(.*)/,Zn=/^HFDTE(\d{2})(\d{2})(\d{2})/,$n=/\r\n|\r|\n/;k=Wn.prototype;
k.$d=function(a,b){var c=this.b,d=a.split($n),e={},f=[],g=2E3,h=0,l=1,m=-1,n,p;n=0;for(p=d.length;n<p;++n){var q=d[n],r;if("B"==q.charAt(0)){if(r=Xn.exec(q)){var q=parseInt(r[1],10),v=parseInt(r[2],10),x=parseInt(r[3],10),y=parseInt(r[4],10)+parseInt(r[5],10)/6E4;"S"==r[6]&&(y=-y);var A=parseInt(r[7],10)+parseInt(r[8],10)/6E4;"W"==r[9]&&(A=-A);f.push(A,y);"none"!=c&&f.push("gps"==c?parseInt(r[11],10):"barometric"==c?parseInt(r[12],10):0);r=Date.UTC(g,h,l,q,v,x);r<m&&(r=Date.UTC(g,h,l+1,q,v,x));f.push(r/
1E3);m=r}}else"H"==q.charAt(0)&&((r=Zn.exec(q))?(l=parseInt(r[1],10),h=parseInt(r[2],10)-1,g=2E3+parseInt(r[3],10)):(r=Yn.exec(q))&&(e[r[1]]=r[2].trim()))}if(!f.length)return null;d=new N(null);d.ca("none"==c?"XYM":"XYZM",f);c=new I(Hl(d,!1,b));c.H(e);return c};k.tg=function(a,b){var c=this.$d(a,b);return c?[c]:[]};k.fe=function(){};k.Og=function(){};k.Ed=function(){};k.yd=function(){};function ao(a,b,c,d,e,f){Nc.call(this);this.j=null;this.N=a?a:new Image;null!==d&&(this.N.crossOrigin=d);this.c=f?document.createElement("CANVAS"):null;this.f=f;this.i=null;this.g=e;this.a=c;this.l=b;this.o=!1;2==this.g&&bo(this)}u(ao,Nc);function bo(a){var b=hd(1,1);try{b.drawImage(a.N,0,0),b.getImageData(0,0,1,1)}catch(c){a.o=!0}}ao.prototype.u=function(){this.g=3;this.i.forEach(Bc);this.i=null;this.b("change")};
ao.prototype.v=function(){this.g=2;this.a&&(this.N.width=this.a[0],this.N.height=this.a[1]);this.a=[this.N.width,this.N.height];this.i.forEach(Bc);this.i=null;bo(this);if(!this.o&&null!==this.f){this.c.width=this.N.width;this.c.height=this.N.height;var a=this.c.getContext("2d");a.drawImage(this.N,0,0);for(var b=a.getImageData(0,0,this.N.width,this.N.height),c=b.data,d=this.f[0]/255,e=this.f[1]/255,f=this.f[2]/255,g=0,h=c.length;g<h;g+=4)c[g]*=d,c[g+1]*=e,c[g+2]*=f;a.putImageData(b,0,0)}this.b("change")};
ao.prototype.Y=function(){return this.c?this.c:this.N};ao.prototype.load=function(){if(0==this.g){this.g=1;this.i=[Gc(this.N,"error",this.u,this),Gc(this.N,"load",this.v,this)];try{this.N.src=this.l}catch(a){this.u()}}};function co(a){a=a||{};this.l=void 0!==a.anchor?a.anchor:[.5,.5];this.v=null;this.a=void 0!==a.anchorOrigin?a.anchorOrigin:"top-left";this.C=void 0!==a.anchorXUnits?a.anchorXUnits:"fraction";this.G=void 0!==a.anchorYUnits?a.anchorYUnits:"fraction";this.ta=void 0!==a.crossOrigin?a.crossOrigin:null;var b=void 0!==a.img?a.img:null,c=void 0!==a.imgSize?a.imgSize:null,d=a.src;sa(!(void 0!==d&&b),4);sa(!b||b&&c,5);void 0!==d&&d.length||!b||(d=b.src||w(b).toString());sa(void 0!==d&&0<d.length,6);var e=void 0!==
a.src?0:2;this.i=void 0!==a.color?bd(a.color):null;var f=this.ta,g=this.i,h=wh.get(d,f,g);h||(h=new ao(b,d,c,f,e,g),wh.set(d,f,g,h));this.b=h;this.qa=void 0!==a.offset?a.offset:[0,0];this.g=void 0!==a.offsetOrigin?a.offsetOrigin:"top-left";this.O=null;this.A=void 0!==a.size?a.size:null;Xk.call(this,{opacity:void 0!==a.opacity?a.opacity:1,rotation:void 0!==a.rotation?a.rotation:0,scale:void 0!==a.scale?a.scale:1,snapToPixel:void 0!==a.snapToPixel?a.snapToPixel:!0,rotateWithView:void 0!==a.rotateWithView?
a.rotateWithView:!1})}u(co,Xk);k=co.prototype;
k.clone=function(){var a=this.Y(1),b;if(2===this.b.g)if("IMG"===a.tagName.toUpperCase())b=a.cloneNode(!0);else{b=document.createElement("canvas");var c=b.getContext("2d");b.width=a.width;b.height=a.height;c.drawImage(a,0,0)}return new co({anchor:this.l.slice(),anchorOrigin:this.a,anchorXUnits:this.C,anchorYUnits:this.G,crossOrigin:this.ta,color:this.i&&this.i.slice?this.i.slice():this.i||void 0,img:b?b:void 0,imgSize:b?this.b.a.slice():void 0,src:b?void 0:this.b.l,offset:this.qa.slice(),offsetOrigin:this.g,
size:null!==this.A?this.A.slice():void 0,opacity:this.f,scale:this.c,snapToPixel:this.u,rotation:this.j,rotateWithView:this.o})};
k.Jc=function(){if(this.v)return this.v;var a=this.l,b=this.kc();if("fraction"==this.C||"fraction"==this.G){if(!b)return null;a=this.l.slice();"fraction"==this.C&&(a[0]*=b[0]);"fraction"==this.G&&(a[1]*=b[1])}if("top-left"!=this.a){if(!b)return null;a===this.l&&(a=this.l.slice());if("top-right"==this.a||"bottom-right"==this.a)a[0]=-a[0]+b[0];if("bottom-left"==this.a||"bottom-right"==this.a)a[1]=-a[1]+b[1]}return this.v=a};k.Bo=function(){return this.i};k.Y=function(a){return this.b.Y(a)};k.ye=function(){return this.b.a};
k.Xe=function(){return this.b.g};k.kg=function(){var a=this.b;if(!a.j)if(a.o){var b=a.a[0],c=a.a[1],d=hd(b,c);d.fillRect(0,0,b,c);a.j=d.canvas}else a.j=a.N;return a.j};k.Tc=function(){if(this.O)return this.O;var a=this.qa;if("top-left"!=this.g){var b=this.kc(),c=this.b.a;if(!b||!c)return null;a=a.slice();if("top-right"==this.g||"bottom-right"==this.g)a[0]=c[0]-b[0]-a[0];if("bottom-left"==this.g||"bottom-right"==this.g)a[1]=c[1]-b[1]-a[1]}return this.O=a};k.Co=function(){return this.b.l};
k.kc=function(){return this.A?this.A:this.b.a};k.Gh=function(a,b){return z(this.b,"change",a,b)};k.load=function(){this.b.load()};k.xj=function(a,b){Hc(this.b,"change",a,b)};function eo(a){a=a||{};this.a=a.font;this.i=a.rotation;this.l=a.rotateWithView;this.b=a.scale;this.Fa=a.text;this.f=a.textAlign;this.j=a.textBaseline;this.Wa=void 0!==a.fill?a.fill:new al({color:"#333"});this.Za=void 0!==a.stroke?a.stroke:null;this.g=void 0!==a.offsetX?a.offsetX:0;this.c=void 0!==a.offsetY?a.offsetY:0}k=eo.prototype;
k.clone=function(){return new eo({font:this.a,rotation:this.i,rotateWithView:this.l,scale:this.b,text:this.Oa(),textAlign:this.f,textBaseline:this.j,fill:this.Ca()?this.Ca().clone():void 0,stroke:this.Da()?this.Da().clone():void 0,offsetX:this.g,offsetY:this.c})};k.Jk=function(){return this.a};k.Yk=function(){return this.g};k.Zk=function(){return this.c};k.Ca=function(){return this.Wa};k.Ho=function(){return this.l};k.Io=function(){return this.i};k.Jo=function(){return this.b};k.Da=function(){return this.Za};
k.Oa=function(){return this.Fa};k.il=function(){return this.f};k.jl=function(){return this.j};k.ij=function(a){this.a=a};k.oj=function(a){this.g=a};k.pj=function(a){this.c=a};k.mf=function(a){this.Wa=a};k.Ko=function(a){this.i=a};k.Mi=function(a){this.b=a};k.nf=function(a){this.Za=a};k.pf=function(a){this.Fa=a};k.rj=function(a){this.f=a};k.Xp=function(a){this.j=a};function fo(a){a=a?a:{};Bm.call(this);go||(ho=[255,255,255,1],io=new al({color:ho}),jo=[20,2],ko=lo="pixels",mo=[64,64],no="https://maps.google.com/mapfiles/kml/pushpin/ylw-pushpin.png",oo=.5,po=new co({anchor:jo,anchorOrigin:"bottom-left",anchorXUnits:lo,anchorYUnits:ko,crossOrigin:"anonymous",rotation:0,scale:oo,size:mo,src:no}),qo="NO_IMAGE",ro=new tj({color:ho,width:1}),so=new tj({color:[51,51,51,1],width:2}),to=new eo({font:"bold 16px Helvetica",fill:io,stroke:so,scale:.8}),uo=new bl({fill:io,
image:po,text:to,stroke:ro,zIndex:0}),go=[uo]);this.defaultDataProjection=Tb("EPSG:4326");this.a=a.defaultStyle?a.defaultStyle:go;this.c=void 0!==a.extractStyles?a.extractStyles:!0;this.j=void 0!==a.writeStyles?a.writeStyles:!0;this.b={};this.f=void 0!==a.showPointNames?a.showPointNames:!0}var go,ho,io,jo,lo,ko,mo,no,oo,po,qo,ro,so,to,uo;u(fo,Bm);
var vo=["http://www.google.com/kml/ext/2.2"],wo=[null,"http://earth.google.com/kml/2.0","http://earth.google.com/kml/2.1","http://earth.google.com/kml/2.2","http://www.opengis.net/kml/2.2"],xo={fraction:"fraction",pixels:"pixels"};
function yo(a,b){var c,d=[0,0],e="start";a.Y()&&(c=a.Y().ye(),null===c&&(c=mo),2==c.length&&(e=a.Y().c,d[0]=e*c[0]/2,d[1]=-e*c[1]/2,e="left"));if(null!==a.Oa()){var f=a.Oa();c=f.clone();c.ij(f.a||to.a);c.Mi(f.b||to.b);c.mf(f.Ca()||to.Ca());c.nf(f.Da()||so)}else c=to.clone();c.pf(b);c.oj(d[0]);c.pj(d[1]);c.rj(e);return new bl({text:c})}
function zo(a,b,c,d,e){return function(){var f=e,g="";f&&this.U()&&(f="Point"===this.U().S());f&&(g=this.get("name"),f=f&&g);if(a)return f?(f=yo(a[0],g),a.concat(f)):a;if(b){var h=Ao(b,c,d);return f?(f=yo(h[0],g),h.concat(f)):h}return f?(f=yo(c[0],g),c.concat(f)):c}}function Ao(a,b,c){return Array.isArray(a)?a:"string"===typeof a?(!(a in c)&&"#"+a in c&&(a="#"+a),Ao(c[a],b,c)):b}
function Bo(a){a=ll(a,!1);if(a=/^\s*#?\s*([0-9A-Fa-f]{8})\s*$/.exec(a))return a=a[1],[parseInt(a.substr(6,2),16),parseInt(a.substr(4,2),16),parseInt(a.substr(2,2),16),parseInt(a.substr(0,2),16)/255]}function Co(a){a=ll(a,!1);for(var b=[],c=/^\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)\s*,\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)(?:\s*,\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?))?\s*/i,d;d=c.exec(a);)b.push(parseFloat(d[1]),parseFloat(d[2]),d[3]?parseFloat(d[3]):0),a=a.substr(d[0].length);if(""===a)return b}
function Do(a){var b=ll(a,!1).trim();return a.baseURI?(new URL(b,a.baseURI)).href:b}function Eo(a){return Jm(a)}function Fo(a,b){return M(null,Go,a,b)}function Ho(a,b){var c=M({B:[],Aj:[]},Io,a,b);if(c){var d=c.B,c=c.Aj,e,f;e=0;for(f=Math.min(d.length,c.length);e<f;++e)d[4*e+3]=c[e];c=new N(null);c.ca("XYZM",d);return c}}function Jo(a,b){var c=M({},Ko,a,b),d=M(null,Lo,a,b);if(d){var e=new N(null);e.ca("XYZ",d);e.H(c);return e}}
function Mo(a,b){var c=M({},Ko,a,b),d=M(null,Lo,a,b);if(d){var e=new F(null);e.ca("XYZ",d,[d.length]);e.H(c);return e}}
function No(a,b){var c=M([],Oo,a,b);if(!c)return null;if(!c.length)return new sm(c);var d,e=!0,f=c[0].S(),g,h,l;h=1;for(l=c.length;h<l;++h)if(g=c[h],g.S()!=f){e=!1;break}if(e)if("Point"==f){d=c[0];e=d.la;f=d.ia();h=1;for(l=c.length;h<l;++h)g=c[h],ha(f,g.ia());d=new P(null);d.ca(e,f);Po(d,c)}else"LineString"==f?(d=new O(null),Nl(d,c),Po(d,c)):"Polygon"==f?(d=new Q(null),Pl(d,c),Po(d,c)):"GeometryCollection"==f?d=new sm(c):sa(!1,37);else d=new sm(c);return d}
function Qo(a,b){var c=M({},Ko,a,b),d=M(null,Lo,a,b);if(d){var e=new E(null);e.ca("XYZ",d);e.H(c);return e}}function Ro(a,b){var c=M({},Ko,a,b),d=M([null],So,a,b);if(d&&d[0]){var e=new F(null),f=d[0],g=[f.length],h,l;h=1;for(l=d.length;h<l;++h)ha(f,d[h]),g.push(f.length);e.ca("XYZ",f,g);e.H(c);return e}}
function To(a,b){var c=M({},Uo,a,b);if(!c)return null;var d="fillStyle"in c?c.fillStyle:io,e=c.fill;void 0===e||e||(d=null);e="imageStyle"in c?c.imageStyle:po;e==qo&&(e=void 0);var f="textStyle"in c?c.textStyle:to,g="strokeStyle"in c?c.strokeStyle:ro,c=c.outline;void 0===c||c||(g=null);return[new bl({fill:d,image:e,stroke:g,text:f,zIndex:void 0})]}
function Po(a,b){var c=b.length,d=Array(b.length),e=Array(b.length),f,g,h,l;h=l=!1;for(g=0;g<c;++g)f=b[g],d[g]=f.get("extrude"),e[g]=f.get("altitudeMode"),h=h||void 0!==d[g],l=l||e[g];h&&a.set("extrude",d);l&&a.set("altitudeMode",e)}function Vo(a,b){Al(Wo,a,b)}function Xo(a,b){Al(Yo,a,b)}
var Zo=L(wo,{displayName:J(R),value:J(R)}),Wo=L(wo,{Data:function(a,b){var c=a.getAttribute("name");Al(Zo,a,b);var d=b[b.length-1];null!==c?d[c]=d.value:null!==d.displayName&&(d[d.displayName]=d.value)},SchemaData:function(a,b){Al($o,a,b)}}),Yo=L(wo,{LatLonAltBox:function(a,b){var c=M({},ap,a,b);if(c){var d=b[b.length-1];d.extent=[parseFloat(c.west),parseFloat(c.south),parseFloat(c.east),parseFloat(c.north)];d.altitudeMode=c.altitudeMode;d.minAltitude=parseFloat(c.minAltitude);d.maxAltitude=parseFloat(c.maxAltitude)}},
Lod:function(a,b){var c=M({},bp,a,b);if(c){var d=b[b.length-1];d.minLodPixels=parseFloat(c.minLodPixels);d.maxLodPixels=parseFloat(c.maxLodPixels);d.minFadeExtent=parseFloat(c.minFadeExtent);d.maxFadeExtent=parseFloat(c.maxFadeExtent)}}}),ap=L(wo,{altitudeMode:J(R),minAltitude:J(Jm),maxAltitude:J(Jm),north:J(Jm),south:J(Jm),east:J(Jm),west:J(Jm)}),bp=L(wo,{minLodPixels:J(Jm),maxLodPixels:J(Jm),minFadeExtent:J(Jm),maxFadeExtent:J(Jm)}),Ko=L(wo,{extrude:J(Gm),altitudeMode:J(R)}),Go=L(wo,{coordinates:tl(Co)}),
So=L(wo,{innerBoundaryIs:function(a,b){var c=M(void 0,cp,a,b);c&&b[b.length-1].push(c)},outerBoundaryIs:function(a,b){var c=M(void 0,dp,a,b);c&&(b[b.length-1][0]=c)}}),Io=L(wo,{when:function(a,b){var c=b[b.length-1].Aj,d=ll(a,!1),d=Date.parse(d);c.push(isNaN(d)?0:d)}},L(vo,{coord:function(a,b){var c=b[b.length-1].B,d=ll(a,!1);(d=/^\s*([+\-]?\d+(?:\.\d*)?(?:e[+\-]?\d*)?)\s+([+\-]?\d+(?:\.\d*)?(?:e[+\-]?\d*)?)\s+([+\-]?\d+(?:\.\d*)?(?:e[+\-]?\d*)?)\s*$/i.exec(d))?c.push(parseFloat(d[1]),parseFloat(d[2]),
parseFloat(d[3]),0):c.push(0,0,0,0)}})),Lo=L(wo,{coordinates:tl(Co)}),ep=L(wo,{href:J(Do)},L(vo,{x:J(Jm),y:J(Jm),w:J(Jm),h:J(Jm)})),fp=L(wo,{Icon:J(function(a,b){var c=M({},ep,a,b);return c?c:null}),heading:J(Jm),hotSpot:J(function(a){var b=a.getAttribute("xunits"),c=a.getAttribute("yunits");return{x:parseFloat(a.getAttribute("x")),Pg:xo[b],y:parseFloat(a.getAttribute("y")),Qg:xo[c]}}),scale:J(Eo)}),cp=L(wo,{LinearRing:tl(Fo)}),gp=L(wo,{color:J(Bo),scale:J(Eo)}),hp=L(wo,{color:J(Bo),width:J(Jm)}),
Oo=L(wo,{LineString:sl(Jo),LinearRing:sl(Mo),MultiGeometry:sl(No),Point:sl(Qo),Polygon:sl(Ro)}),ip=L(vo,{Track:sl(Ho)}),kp=L(wo,{ExtendedData:Vo,Region:Xo,Link:function(a,b){Al(jp,a,b)},address:J(R),description:J(R),name:J(R),open:J(Gm),phoneNumber:J(R),visibility:J(Gm)}),jp=L(wo,{href:J(Do)}),dp=L(wo,{LinearRing:tl(Fo)}),lp=L(wo,{Style:J(To),key:J(R),styleUrl:J(Do)}),np=L(wo,{ExtendedData:Vo,Region:Xo,MultiGeometry:J(No,"geometry"),LineString:J(Jo,"geometry"),LinearRing:J(Mo,"geometry"),Point:J(Qo,
"geometry"),Polygon:J(Ro,"geometry"),Style:J(To),StyleMap:function(a,b){var c=M(void 0,mp,a,b);if(c){var d=b[b.length-1];Array.isArray(c)?d.Style=c:"string"===typeof c?d.styleUrl=c:sa(!1,38)}},address:J(R),description:J(R),name:J(R),open:J(Gm),phoneNumber:J(R),styleUrl:J(Do),visibility:J(Gm)},L(vo,{MultiTrack:J(function(a,b){var c=M([],ip,a,b);if(c){var d=new O(null);Nl(d,c);return d}},"geometry"),Track:J(Ho,"geometry")})),op=L(wo,{color:J(Bo),fill:J(Gm),outline:J(Gm)}),$o=L(wo,{SimpleData:function(a,
b){var c=a.getAttribute("name");if(null!==c){var d=R(a);b[b.length-1][c]=d}}}),Uo=L(wo,{IconStyle:function(a,b){var c=M({},fp,a,b);if(c){var d=b[b.length-1],e="Icon"in c?c.Icon:{},f=!("Icon"in c)||0<Object.keys(e).length,g,h=e.href;h?g=h:f&&(g=no);var l,m,n;(h=c.hotSpot)?(l=[h.x,h.y],m=h.Pg,n=h.Qg):g===no?(l=jo,m=lo,n=ko):/^http:\/\/maps\.(?:google|gstatic)\.com\//.test(g)&&(l=[.5,0],n=m="fraction");var p,h=e.x,q=e.y;void 0!==h&&void 0!==q&&(p=[h,q]);var r,h=e.w,e=e.h;void 0!==h&&void 0!==e&&(r=[h,
e]);var v,e=c.heading;void 0!==e&&(v=Ca(e));c=c.scale;f?(g==no&&(r=mo,void 0===c&&(c=oo)),f=new co({anchor:l,anchorOrigin:"bottom-left",anchorXUnits:m,anchorYUnits:n,crossOrigin:"anonymous",offset:p,offsetOrigin:"bottom-left",rotation:v,scale:c,size:r,src:g}),d.imageStyle=f):d.imageStyle=qo}},LabelStyle:function(a,b){var c=M({},gp,a,b);c&&(b[b.length-1].textStyle=new eo({fill:new al({color:"color"in c?c.color:ho}),scale:c.scale}))},LineStyle:function(a,b){var c=M({},hp,a,b);c&&(b[b.length-1].strokeStyle=
new tj({color:"color"in c?c.color:ho,width:"width"in c?c.width:1}))},PolyStyle:function(a,b){var c=M({},op,a,b);if(c){var d=b[b.length-1];d.fillStyle=new al({color:"color"in c?c.color:ho});var e=c.fill;void 0!==e&&(d.fill=e);c=c.outline;void 0!==c&&(d.outline=c)}}}),mp=L(wo,{Pair:function(a,b){var c=M({},lp,a,b);if(c){var d=c.key;d&&"normal"==d&&((d=c.styleUrl)&&(b[b.length-1]=d),(c=c.Style)&&(b[b.length-1]=c))}}});k=fo.prototype;
k.pg=function(a,b){var c=L(wo,{Document:rl(this.pg,this),Folder:rl(this.pg,this),Placemark:sl(this.xg,this),Style:this.zp.bind(this),StyleMap:this.yp.bind(this)});if(c=M([],c,a,b,this))return c};k.xg=function(a,b){var c=M({geometry:null},np,a,b);if(c){var d=new I,e=a.getAttribute("id");null!==e&&d.lc(e);var e=b[0],f=c.geometry;f&&Hl(f,!1,e);d.Ta(f);delete c.geometry;this.c&&d.cg(zo(c.Style,c.styleUrl,this.a,this.b,this.f));delete c.Style;d.H(c);return d}};
k.zp=function(a,b){var c=a.getAttribute("id");if(null!==c){var d=To(a,b);d&&(c=a.baseURI?(new URL("#"+c,a.baseURI)).href:"#"+c,this.b[c]=d)}};k.yp=function(a,b){var c=a.getAttribute("id");if(null!==c){var d=M(void 0,mp,a,b);d&&(c=a.baseURI?(new URL("#"+c,a.baseURI)).href:"#"+c,this.b[c]=d)}};k.rg=function(a,b){if(!fa(wo,a.namespaceURI))return null;var c=this.xg(a,[Fl(this,a,b)]);return c?c:null};
k.Bc=function(a,b){if(!fa(wo,a.namespaceURI))return[];var c;c=a.localName;if("Document"==c||"Folder"==c)return(c=this.pg(a,[Fl(this,a,b)]))?c:[];if("Placemark"==c)return(c=this.xg(a,[Fl(this,a,b)]))?[c]:[];if("kml"==c){c=[];var d;for(d=a.firstElementChild;d;d=d.nextElementSibling){var e=this.Bc(d,b);e&&ha(c,e)}return c}return[]};k.sp=function(a){if(nl(a))return pp(this,a);if(pl(a))return qp(this,a);if("string"===typeof a)return a=ql(a),pp(this,a)};
function pp(a,b){var c;for(c=b.firstChild;c;c=c.nextSibling)if(c.nodeType==Node.ELEMENT_NODE){var d=qp(a,c);if(d)return d}}function qp(a,b){var c;for(c=b.firstElementChild;c;c=c.nextElementSibling)if(fa(wo,c.namespaceURI)&&"name"==c.localName)return R(c);for(c=b.firstElementChild;c;c=c.nextElementSibling){var d=c.localName;if(fa(wo,c.namespaceURI)&&("Document"==d||"Folder"==d||"Placemark"==d||"kml"==d)&&(d=qp(a,c)))return d}}
k.tp=function(a){var b=[];nl(a)?ha(b,rp(this,a)):pl(a)?ha(b,sp(this,a)):"string"===typeof a&&(a=ql(a),ha(b,rp(this,a)));return b};function rp(a,b){var c,d=[];for(c=b.firstChild;c;c=c.nextSibling)c.nodeType==Node.ELEMENT_NODE&&ha(d,sp(a,c));return d}
function sp(a,b){var c,d=[];for(c=b.firstElementChild;c;c=c.nextElementSibling)if(fa(wo,c.namespaceURI)&&"NetworkLink"==c.localName){var e=M({},kp,c,[]);d.push(e)}for(c=b.firstElementChild;c;c=c.nextElementSibling)e=c.localName,!fa(wo,c.namespaceURI)||"Document"!=e&&"Folder"!=e&&"kml"!=e||ha(d,sp(a,c));return d}k.wp=function(a){var b=[];nl(a)?ha(b,tp(this,a)):pl(a)?ha(b,this.jf(a)):"string"===typeof a&&(a=ql(a),ha(b,tp(this,a)));return b};
function tp(a,b){var c,d=[];for(c=b.firstChild;c;c=c.nextSibling)c.nodeType==Node.ELEMENT_NODE&&ha(d,a.jf(c));return d}k.jf=function(a){var b,c=[];for(b=a.firstElementChild;b;b=b.nextElementSibling)if(fa(wo,b.namespaceURI)&&"Region"==b.localName){var d=M({},Yo,b,[]);c.push(d)}for(b=a.firstElementChild;b;b=b.nextElementSibling)a=b.localName,!fa(wo,b.namespaceURI)||"Document"!=a&&"Folder"!=a&&"kml"!=a||ha(c,this.jf(b));return c};
function up(a,b){var c=bd(b),c=[255*(4==c.length?c[3]:1),c[2],c[1],c[0]],d;for(d=0;4>d;++d){var e=parseInt(c[d],10).toString(16);c[d]=1==e.length?"0"+e:e}Om(a,c.join(""))}function vp(a,b,c){a={node:a};var d=b.S(),e,f;"GeometryCollection"==d?(e=b.Qf(),f=wp):"MultiPoint"==d?(e=b.Zd(),f=xp):"MultiLineString"==d?(e=b.Nc(),f=yp):"MultiPolygon"==d?(e=b.md(),f=zp):sa(!1,39);Bl(a,Ap,f,e,c)}function Bp(a,b,c){Bl({node:a},Cp,Dp,[b],c)}
function Ep(a,b,c){var d={node:a};b.a&&a.setAttribute("id",b.a);a=b.M();var e={address:1,description:1,name:1,open:1,phoneNumber:1,styleUrl:1,visibility:1};e[b.c]=1;var f=Object.keys(a||{}).sort().filter(function(a){return!e[a]});if(0<f.length){var g=zl(a,f);Bl(d,Fp,Gp,[{names:f,values:g}],c)}if(f=b.Rc())if(f=f.call(b,0))f=Array.isArray(f)?f[0]:f,this.j&&(a.Style=f),(f=f.Oa())&&(a.name=f.Oa());f=Hp[c[c.length-1].node.namespaceURI];a=zl(a,f);Bl(d,Fp,yl,a,c,f);a=c[0];(b=b.U())&&(b=Hl(b,!0,a));Bl(d,
Fp,wp,[b],c)}function Ip(a,b,c){var d=b.ia();a={node:a};a.layout=b.la;a.stride=b.sa();Bl(a,Jp,Kp,[d],c)}function Lp(a,b,c){b=b.Oc();var d=b.shift();a={node:a};Bl(a,Mp,Np,b,c);Bl(a,Mp,Op,[d],c)}function Pp(a,b){Pm(a,Math.round(1E6*b)/1E6)}
var Qp=L(wo,["Document","Placemark"]),Tp=L(wo,{Document:K(function(a,b,c){Bl({node:a},Rp,Sp,b,c,void 0,this)}),Placemark:K(Ep)}),Rp=L(wo,{Placemark:K(Ep)}),Up=L(wo,{Data:K(function(a,b,c){a.setAttribute("name",b.name);a={node:a};b=b.value;"object"==typeof b?(null!==b&&b.displayName&&Bl(a,Up,yl,[b.displayName],c,["displayName"]),null!==b&&b.value&&Bl(a,Up,yl,[b.value],c,["value"])):Bl(a,Up,yl,[b],c,["value"])}),value:K(function(a,b){Om(a,b)}),displayName:K(function(a,b){a.appendChild(il.createCDATASection(b))})}),
Vp={Point:"Point",LineString:"LineString",LinearRing:"LinearRing",Polygon:"Polygon",MultiPoint:"MultiGeometry",MultiLineString:"MultiGeometry",MultiPolygon:"MultiGeometry",GeometryCollection:"MultiGeometry"},Wp=L(wo,["href"],L(vo,["x","y","w","h"])),Xp=L(wo,{href:K(Om)},L(vo,{x:K(Pm),y:K(Pm),w:K(Pm),h:K(Pm)})),Yp=L(wo,["scale","heading","Icon","hotSpot"]),$p=L(wo,{Icon:K(function(a,b,c){a={node:a};var d=Wp[c[c.length-1].node.namespaceURI],e=zl(b,d);Bl(a,Xp,yl,e,c,d);d=Wp[vo[0]];e=zl(b,d);Bl(a,Xp,
Zp,e,c,d)}),heading:K(Pm),hotSpot:K(function(a,b){a.setAttribute("x",b.x);a.setAttribute("y",b.y);a.setAttribute("xunits",b.Pg);a.setAttribute("yunits",b.Qg)}),scale:K(Pp)}),aq=L(wo,["color","scale"]),bq=L(wo,{color:K(up),scale:K(Pp)}),cq=L(wo,["color","width"]),dq=L(wo,{color:K(up),width:K(Pm)}),Cp=L(wo,{LinearRing:K(Ip)}),Ap=L(wo,{LineString:K(Ip),Point:K(Ip),Polygon:K(Lp),GeometryCollection:K(vp)}),Hp=L(wo,"name open visibility address phoneNumber description styleUrl Style".split(" ")),Fp=L(wo,
{ExtendedData:K(function(a,b,c){a={node:a};var d=b.names;b=b.values;for(var e=d.length,f=0;f<e;f++)Bl(a,Up,eq,[{name:d[f],value:b[f]}],c)}),MultiGeometry:K(vp),LineString:K(Ip),LinearRing:K(Ip),Point:K(Ip),Polygon:K(Lp),Style:K(function(a,b,c){a={node:a};var d={},e=b.Ca(),f=b.Da(),g=b.Y();b=b.Oa();g instanceof co&&(d.IconStyle=g);b&&(d.LabelStyle=b);f&&(d.LineStyle=f);e&&(d.PolyStyle=e);b=fq[c[c.length-1].node.namespaceURI];d=zl(d,b);Bl(a,gq,yl,d,c,b)}),address:K(Om),description:K(Om),name:K(Om),
open:K(Nm),phoneNumber:K(Om),styleUrl:K(Om),visibility:K(Nm)}),Jp=L(wo,{coordinates:K(function(a,b,c){c=c[c.length-1];var d=c.layout;c=c.stride;var e;"XY"==d||"XYM"==d?e=2:"XYZ"==d||"XYZM"==d?e=3:sa(!1,34);var f,g=b.length,h="";if(0<g){h+=b[0];for(d=1;d<e;++d)h+=","+b[d];for(f=c;f<g;f+=c)for(h+=" "+b[f],d=1;d<e;++d)h+=","+b[f+d]}Om(a,h)})}),Mp=L(wo,{outerBoundaryIs:K(Bp),innerBoundaryIs:K(Bp)}),hq=L(wo,{color:K(up)}),fq=L(wo,["IconStyle","LabelStyle","LineStyle","PolyStyle"]),gq=L(wo,{IconStyle:K(function(a,
b,c){a={node:a};var d={},e=b.kc(),f=b.ye(),g={href:b.b.l};if(e){g.w=e[0];g.h=e[1];var h=b.Jc(),l=b.Tc();l&&f&&l[0]&&l[1]!==e[1]&&(g.x=l[0],g.y=f[1]-(l[1]+e[1]));h&&h[0]&&h[1]!==e[1]&&(d.hotSpot={x:h[0],Pg:"pixels",y:e[1]-h[1],Qg:"pixels"})}d.Icon=g;e=b.c;1!==e&&(d.scale=e);(b=b.j)&&(d.heading=b);b=Yp[c[c.length-1].node.namespaceURI];d=zl(d,b);Bl(a,$p,yl,d,c,b)}),LabelStyle:K(function(a,b,c){a={node:a};var d={},e=b.Ca();e&&(d.color=e.b);(b=b.b)&&1!==b&&(d.scale=b);b=aq[c[c.length-1].node.namespaceURI];
d=zl(d,b);Bl(a,bq,yl,d,c,b)}),LineStyle:K(function(a,b,c){a={node:a};var d=cq[c[c.length-1].node.namespaceURI];b=zl({color:b.a,width:b.c},d);Bl(a,dq,yl,b,c,d)}),PolyStyle:K(function(a,b,c){Bl({node:a},hq,iq,[b.b],c)})});function Zp(a,b,c){return kl(vo[0],"gx:"+c)}function Sp(a,b){return kl(b[b.length-1].node.namespaceURI,"Placemark")}function wp(a,b){if(a)return kl(b[b.length-1].node.namespaceURI,Vp[a.S()])}
var iq=wl("color"),Kp=wl("coordinates"),eq=wl("Data"),Gp=wl("ExtendedData"),Np=wl("innerBoundaryIs"),xp=wl("Point"),yp=wl("LineString"),Dp=wl("LinearRing"),zp=wl("Polygon"),Op=wl("outerBoundaryIs");
fo.prototype.Zb=function(a,b){b=Gl(this,b);var c=kl(wo[4],"kml");c.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns:gx",vo[0]);c.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns:xsi","http://www.w3.org/2001/XMLSchema-instance");c.setAttributeNS("http://www.w3.org/2001/XMLSchema-instance","xsi:schemaLocation","http://www.opengis.net/kml/2.2 https://developers.google.com/kml/schema/kml22gx.xsd");var d={node:c},e={};1<a.length?e.Document=a:1==a.length&&(e.Placemark=a[0]);var f=Qp[c.namespaceURI],
e=zl(e,f);Bl(d,Tp,yl,e,[b],f,this);return c};(function(){var a={},b={ma:a};(function(c){if("object"===typeof a&&"undefined"!==typeof b)b.ma=c();else{var d;"undefined"!==typeof window?d=window:"undefined"!==typeof global?d=global:"undefined"!==typeof self?d=self:d=this;d.Bq=c()}})(function(){return function d(a,b,g){function e(h,l){if(!b[h]){if(!a[h]){var m="function"==typeof require&&require;if(!l&&m)return m(h,!0);if(f)return f(h,!0);m=Error("Cannot find module '"+h+"'");throw m.code="MODULE_NOT_FOUND",m;}m=b[h]={ma:{}};a[h][0].call(m.ma,function(b){var d=
a[h][1][b];return e(d?d:b)},m,m.ma,d,a,b,g)}return b[h].ma}for(var f="function"==typeof require&&require,m=0;m<g.length;m++)e(g[m]);return e}({1:[function(a,b,f){f.read=function(a,b,d,e,f){var g;g=8*f-e-1;var h=(1<<g)-1,l=h>>1,m=-7;f=d?f-1:0;var n=d?-1:1,y=a[b+f];f+=n;d=y&(1<<-m)-1;y>>=-m;for(m+=g;0<m;d=256*d+a[b+f],f+=n,m-=8);g=d&(1<<-m)-1;d>>=-m;for(m+=e;0<m;g=256*g+a[b+f],f+=n,m-=8);if(0===d)d=1-l;else{if(d===h)return g?NaN:Infinity*(y?-1:1);g+=Math.pow(2,e);d-=l}return(y?-1:1)*g*Math.pow(2,d-
e)};f.write=function(a,b,d,e,f,p){var g,h=8*p-f-1,l=(1<<h)-1,m=l>>1,n=23===f?Math.pow(2,-24)-Math.pow(2,-77):0;p=e?0:p-1;var A=e?1:-1,B=0>b||0===b&&0>1/b?1:0;b=Math.abs(b);isNaN(b)||Infinity===b?(b=isNaN(b)?1:0,e=l):(e=Math.floor(Math.log(b)/Math.LN2),1>b*(g=Math.pow(2,-e))&&(e--,g*=2),b=1<=e+m?b+n/g:b+n*Math.pow(2,1-m),2<=b*g&&(e++,g/=2),e+m>=l?(b=0,e=l):1<=e+m?(b=(b*g-1)*Math.pow(2,f),e+=m):(b=b*Math.pow(2,m-1)*Math.pow(2,f),e=0));for(;8<=f;a[d+p]=b&255,p+=A,b/=256,f-=8);e=e<<f|b;for(h+=f;0<h;a[d+
p]=e&255,p+=A,e/=256,h-=8);a[d+p-A]|=128*B}},{}],2:[function(a,b){function d(a){this.nc=ArrayBuffer.isView&&ArrayBuffer.isView(a)?a:new Uint8Array(a||0);this.type=this.ha=0;this.length=this.nc.length}function e(a,b,d){var e=d.nc,f,g;g=e[d.ha++];f=(g&112)>>4;if(128>g)return h(a,f,b);g=e[d.ha++];f|=(g&127)<<3;if(128>g)return h(a,f,b);g=e[d.ha++];f|=(g&127)<<10;if(128>g)return h(a,f,b);g=e[d.ha++];f|=(g&127)<<17;if(128>g)return h(a,f,b);g=e[d.ha++];f|=(g&127)<<24;if(128>g)return h(a,f,b);g=e[d.ha++];
if(128>g)return h(a,f|(g&1)<<31,b);throw Error("Expected varint not more than 10 bytes");}function h(a,b,d){return d?4294967296*b+(a>>>0):4294967296*(b>>>0)+(a>>>0)}b.ma=d;var l=a("ieee754");d.c=0;d.g=1;d.b=2;d.a=5;d.prototype={ug:function(a,b,d){for(d=d||this.length;this.ha<d;){var e=this.Ma(),f=e>>3,g=this.ha;this.type=e&7;a(f,b,this);this.ha===g&&this.bq(e)}return b},op:function(){var a=l.read(this.nc,this.ha,!0,23,4);this.ha+=4;return a},kp:function(){var a=l.read(this.nc,this.ha,!0,52,8);this.ha+=
8;return a},Ma:function(a){var b=this.nc,d,f;f=b[this.ha++];d=f&127;if(128>f)return d;f=b[this.ha++];d|=(f&127)<<7;if(128>f)return d;f=b[this.ha++];d|=(f&127)<<14;if(128>f)return d;f=b[this.ha++];d|=(f&127)<<21;if(128>f)return d;f=b[this.ha];return e(d|(f&15)<<28,a,this)},Ap:function(){return this.Ma(!0)},be:function(){var a=this.Ma();return 1===a%2?(a+1)/-2:a/2},ip:function(){return!!this.Ma()},Ag:function(){for(var a=this.Ma()+this.ha,b=this.nc,d="",e=this.ha;e<a;){var f=b[e],g=null,h=239<f?4:223<
f?3:191<f?2:1;if(e+h>a)break;var l,A,B;if(1===h)128>f&&(g=f);else if(2===h)l=b[e+1],128===(l&192)&&(g=(f&31)<<6|l&63,127>=g&&(g=null));else if(3===h){if(l=b[e+1],A=b[e+2],128===(l&192)&&128===(A&192)&&(g=(f&15)<<12|(l&63)<<6|A&63,2047>=g||55296<=g&&57343>=g))g=null}else 4===h&&(l=b[e+1],A=b[e+2],B=b[e+3],128===(l&192)&&128===(A&192)&&128===(B&192)&&(g=(f&15)<<18|(l&63)<<12|(A&63)<<6|B&63,65535>=g||1114112<=g))&&(g=null);null===g?(g=65533,h=1):65535<g&&(g-=65536,d+=String.fromCharCode(g>>>10&1023|
55296),g=56320|g&1023);d+=String.fromCharCode(g);e+=h}this.ha=a;return d},bq:function(a){a&=7;if(a===d.c)for(;127<this.nc[this.ha++];);else if(a===d.b)this.ha=this.Ma()+this.ha;else if(a===d.a)this.ha+=4;else if(a===d.g)this.ha+=8;else throw Error("Unimplemented type: "+a);}}},{ieee754:1}]},{},[2])(2)});Dj=b.ma})();(function(){var a={},b={ma:a};(function(c){if("object"===typeof a&&"undefined"!==typeof b)b.ma=c();else{var d;"undefined"!==typeof window?d=window:"undefined"!==typeof global?d=global:"undefined"!==typeof self?d=self:d=this;d.Eq=c()}})(function(){return function d(a,b,g){function e(h,l){if(!b[h]){if(!a[h]){var m="function"==typeof require&&require;if(!l&&m)return m(h,!0);if(f)return f(h,!0);m=Error("Cannot find module '"+h+"'");throw m.code="MODULE_NOT_FOUND",m;}m=b[h]={ma:{}};a[h][0].call(m.ma,function(b){var d=
a[h][1][b];return e(d?d:b)},m,m.ma,d,a,b,g)}return b[h].ma}for(var f="function"==typeof require&&require,m=0;m<g.length;m++)e(g[m]);return e}({1:[function(a,b){function d(a,b){this.x=a;this.y=b}b.ma=d;d.prototype={clone:function(){return new d(this.x,this.y)},add:function(a){return this.clone().Uj(a)},rotate:function(a){return this.clone().dk(a)},round:function(){return this.clone().ek()},angle:function(){return Math.atan2(this.y,this.x)},Uj:function(a){this.x+=a.x;this.y+=a.y;return this},dk:function(a){var b=
Math.cos(a);a=Math.sin(a);var d=a*this.x+b*this.y;this.x=b*this.x-a*this.y;this.y=d;return this},ek:function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this}};d.b=function(a){return a instanceof d?a:Array.isArray(a)?new d(a[0],a[1]):a}},{}],2:[function(a,b){b.ma.Tj=a("./lib/vectortile.js");b.ma.yq=a("./lib/vectortilefeature.js");b.ma.zq=a("./lib/vectortilelayer.js")},{"./lib/vectortile.js":3,"./lib/vectortilefeature.js":4,"./lib/vectortilelayer.js":5}],3:[function(a,b){function d(a,
b,d){3===a&&(a=new e(d,d.Ma()+d.ha),a.length&&(b[a.name]=a))}var e=a("./vectortilelayer");b.ma=function(a,b){this.layers=a.ug(d,{},b)}},{"./vectortilelayer":5}],4:[function(a,b){function d(a,b,d,f,g){this.properties={};this.extent=d;this.type=0;this.Ec=a;this.Af=-1;this.ne=f;this.pe=g;a.ug(e,this,b)}function e(a,b,d){if(1==a)b.id=d.Ma();else if(2==a)for(a=d.Ma()+d.ha;d.ha<a;){var e=b.ne[d.Ma()],f=b.pe[d.Ma()];b.properties[e]=f}else 3==a?b.type=d.Ma():4==a&&(b.Af=d.ha)}var h=a("point-geometry");b.ma=
d;d.b=["Unknown","Point","LineString","Polygon"];d.prototype.Hh=function(){var a=this.Ec;a.ha=this.Af;for(var b=a.Ma()+a.ha,d=1,e=0,f=0,g=0,v=[],x;a.ha<b;)if(e||(e=a.Ma(),d=e&7,e>>=3),e--,1===d||2===d)f+=a.be(),g+=a.be(),1===d&&(x&&v.push(x),x=[]),x.push(new h(f,g));else if(7===d)x&&x.push(x[0].clone());else throw Error("unknown command "+d);x&&v.push(x);return v};d.prototype.bbox=function(){var a=this.Ec;a.ha=this.Af;for(var b=a.Ma()+a.ha,d=1,e=0,f=0,g=0,h=Infinity,x=-Infinity,y=Infinity,A=-Infinity;a.ha<
b;)if(e||(e=a.Ma(),d=e&7,e>>=3),e--,1===d||2===d)f+=a.be(),g+=a.be(),f<h&&(h=f),f>x&&(x=f),g<y&&(y=g),g>A&&(A=g);else if(7!==d)throw Error("unknown command "+d);return[h,y,x,A]}},{"point-geometry":1}],5:[function(a,b){function d(a,b){this.version=1;this.name=null;this.extent=4096;this.length=0;this.Ec=a;this.ne=[];this.pe=[];this.me=[];a.ug(e,this,b);this.length=this.me.length}function e(a,b,d){15===a?b.version=d.Ma():1===a?b.name=d.Ag():5===a?b.extent=d.Ma():2===a?b.me.push(d.ha):3===a?b.ne.push(d.Ag()):
4===a&&b.pe.push(h(d))}function h(a){for(var b=null,d=a.Ma()+a.ha;a.ha<d;)b=a.Ma()>>3,b=1===b?a.Ag():2===b?a.op():3===b?a.kp():4===b?a.Ap():5===b?a.Ma():6===b?a.be():7===b?a.ip():null;return b}var l=a("./vectortilefeature.js");b.ma=d;d.prototype.feature=function(a){if(0>a||a>=this.me.length)throw Error("feature index out of bounds");this.Ec.ha=this.me[a];a=this.Ec.Ma()+this.Ec.ha;return new l(this.Ec,a,this.extent,this.ne,this.pe)}},{"./vectortilefeature.js":4}]},{},[2])(2)});Ej=b.ma})();function jq(a,b,c,d){this.g=a;this.b=b;this.i=c;this.c=d}k=jq.prototype;k.get=function(a){return this.c[a]};k.Sb=function(){return this.i};k.D=function(){this.a||(this.a="Point"===this.g?Xa(this.b):Ya(this.b,0,this.b.length,2));return this.a};k.gc=function(){return this.b};k.ia=jq.prototype.gc;k.U=function(){return this};k.Nn=function(){return this.c};k.Td=jq.prototype.U;k.sa=function(){return 2};k.Rc=oa;k.S=function(){return this.g};function kq(a){El.call(this);a=a?a:{};this.defaultDataProjection=new zb({code:"",units:"tile-pixels"});this.b=a.featureClass?a.featureClass:jq;this.g=a.geometryName;this.a=a.layerName?a.layerName:"layer";this.c=a.layers?a.layers:null}u(kq,El);k=kq.prototype;k.S=function(){return"arraybuffer"};
k.Pa=function(a,b){var c=this.c,d=new Dj(a),d=new Ej.Tj(d),e=[],f=this.b,g,h,l;for(l in d.layers)if(!c||-1!=c.indexOf(l)){g=d.layers[l];for(var m=0,n=g.length;m<n;++m){if(f===jq){h=void 0;var p=g.feature(m),q=l,r=p.Hh(),v=[],x=[];lq(r,x,v);var y=p.type;1===y?h=1===r.length?"Point":"MultiPoint":2===y?h=1===r.length?"LineString":"MultiLineString":3===y&&(h="Polygon");p=p.properties;p[this.a]=q;h=new this.b(h,x,v,p)}else{y=g.feature(m);p=l;x=b;h=new this.b;q=y.id;v=y.properties;v[this.a]=p;this.g&&h.Yc(this.g);
p=void 0;r=y.type;if(0===r)p=null;else{var y=y.Hh(),A=[],B=[];lq(y,B,A);1===r?p=1===y.length?new E(null):new P(null):2===r?1===y.length?p=new N(null):p=new O(null):3===r&&(p=new F(null));p.ca("XY",B,A)}x=Hl(p,!1,Gl(this,x));h.Ta(x);h.lc(q);h.H(v)}e.push(h)}}return e};k.jb=function(){return this.defaultDataProjection};k.fn=function(a){this.c=a};function lq(a,b,c){for(var d=0,e=0,f=a.length;e<f;++e){var g=a[e],h,l;h=0;for(l=g.length;h<l;++h){var m=g[h];b.push(m.x,m.y)}d+=2*h;c.push(d)}}k.Vb=function(){};
k.Xc=function(){};k.Dd=function(){};k.ed=function(){};k.Yb=function(){};function mq(){Bm.call(this);this.defaultDataProjection=Tb("EPSG:4326")}u(mq,Bm);function nq(a,b){b[b.length-1].ee[a.getAttribute("k")]=a.getAttribute("v")}
var oq=[null],pq=L(oq,{nd:function(a,b){b[b.length-1].qd.push(a.getAttribute("ref"))},tag:nq}),rq=L(oq,{node:function(a,b){var c=b[0],d=b[b.length-1],e=a.getAttribute("id"),f=[parseFloat(a.getAttribute("lon")),parseFloat(a.getAttribute("lat"))];d.Lh[e]=f;var g=M({ee:{}},qq,a,b);tb(g.ee)||(f=new E(f),Hl(f,!1,c),c=new I(f),c.lc(e),c.H(g.ee),d.features.push(c))},way:function(a,b){for(var c=b[0],d=a.getAttribute("id"),e=M({qd:[],ee:{}},pq,a,b),f=b[b.length-1],g=[],h=0,l=e.qd.length;h<l;h++)ha(g,f.Lh[e.qd[h]]);
e.qd[0]==e.qd[e.qd.length-1]?(h=new F(null),h.ca("XY",g,[g.length])):(h=new N(null),h.ca("XY",g));Hl(h,!1,c);c=new I(h);c.lc(d);c.H(e.ee);f.features.push(c)}}),qq=L(oq,{tag:nq});mq.prototype.Bc=function(a,b){var c=Fl(this,a,b);return"osm"==a.localName&&(c=M({Lh:{},features:[]},rq,a,[c]),c.features)?c.features:[]};mq.prototype.Ng=function(){};mq.prototype.Zb=function(){};mq.prototype.he=function(){};function tq(a){return a.getAttributeNS("http://www.w3.org/1999/xlink","href")};function uq(){}uq.prototype.read=function(a){return nl(a)?this.a(a):pl(a)?this.b(a):"string"===typeof a?(a=ql(a),this.a(a)):null};function vq(){}u(vq,uq);vq.prototype.a=function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType==Node.ELEMENT_NODE)return this.b(a);return null};vq.prototype.b=function(a){return(a=M({},wq,a,[]))?a:null};
var xq=[null,"http://www.opengis.net/ows/1.1"],wq=L(xq,{ServiceIdentification:J(function(a,b){return M({},yq,a,b)}),ServiceProvider:J(function(a,b){return M({},zq,a,b)}),OperationsMetadata:J(function(a,b){return M({},Aq,a,b)})}),Bq=L(xq,{DeliveryPoint:J(R),City:J(R),AdministrativeArea:J(R),PostalCode:J(R),Country:J(R),ElectronicMailAddress:J(R)}),Cq=L(xq,{Value:ul(function(a){return R(a)})}),Dq=L(xq,{AllowedValues:J(function(a,b){return M({},Cq,a,b)})}),Fq=L(xq,{Phone:J(function(a,b){return M({},
Eq,a,b)}),Address:J(function(a,b){return M({},Bq,a,b)})}),Hq=L(xq,{HTTP:J(function(a,b){return M({},Gq,a,b)})}),Gq=L(xq,{Get:ul(function(a,b){var c=tq(a);if(c)return M({href:c},Iq,a,b)}),Post:void 0}),Jq=L(xq,{DCP:J(function(a,b){return M({},Hq,a,b)})}),Aq=L(xq,{Operation:function(a,b){var c=a.getAttribute("name"),d=M({},Jq,a,b);d&&(b[b.length-1][c]=d)}}),Eq=L(xq,{Voice:J(R),Facsimile:J(R)}),Iq=L(xq,{Constraint:ul(function(a,b){var c=a.getAttribute("name");if(c)return M({name:c},Dq,a,b)})}),Kq=L(xq,
{IndividualName:J(R),PositionName:J(R),ContactInfo:J(function(a,b){return M({},Fq,a,b)})}),yq=L(xq,{Title:J(R),ServiceTypeVersion:J(R),ServiceType:J(R)}),zq=L(xq,{ProviderName:J(R),ProviderSite:J(tq),ServiceContact:J(function(a,b){return M({},Kq,a,b)})});function Lq(a,b,c,d){var e;void 0!==d?e=d:e=[];for(var f=d=0;f<b;){var g=a[f++];e[d++]=a[f++];e[d++]=g;for(g=2;g<c;++g)e[d++]=a[f++]}e.length=d};function Mq(a){a=a?a:{};El.call(this);this.defaultDataProjection=Tb("EPSG:4326");this.b=a.factor?a.factor:1E5;this.a=a.geometryLayout?a.geometryLayout:"XY"}u(Mq,Un);function Nq(a,b,c){var d,e=Array(b);for(d=0;d<b;++d)e[d]=0;var f,g;f=0;for(g=a.length;f<g;)for(d=0;d<b;++d,++f){var h=a[f],l=h-e[d];e[d]=h;a[f]=l}return Oq(a,c?c:1E5)}function Pq(a,b,c){var d,e=Array(b);for(d=0;d<b;++d)e[d]=0;a=Qq(a,c?c:1E5);var f;c=0;for(f=a.length;c<f;)for(d=0;d<b;++d,++c)e[d]+=a[c],a[c]=e[d];return a}
function Oq(a,b){var c=b?b:1E5,d,e;d=0;for(e=a.length;d<e;++d)a[d]=Math.round(a[d]*c);c=0;for(d=a.length;c<d;++c)e=a[c],a[c]=0>e?~(e<<1):e<<1;c="";d=0;for(e=a.length;d<e;++d){for(var f,g=a[d],h="";32<=g;)f=(32|g&31)+63,h+=String.fromCharCode(f),g>>=5;h+=String.fromCharCode(g+63);c+=h}return c}
function Qq(a,b){var c=b?b:1E5,d=[],e=0,f=0,g,h;g=0;for(h=a.length;g<h;++g){var l=a.charCodeAt(g)-63,e=e|(l&31)<<f;32>l?(d.push(e),f=e=0):f+=5}e=0;for(f=d.length;e<f;++e)g=d[e],d[e]=g&1?~(g>>1):g>>1;e=0;for(f=d.length;e<f;++e)d[e]/=c;return d}k=Mq.prototype;k.$d=function(a,b){var c=this.yd(a,b);return new I(c)};k.tg=function(a,b){return[this.$d(a,b)]};k.yd=function(a,b){var c=pf(this.a),d=Pq(a,c,this.b);Lq(d,d.length,c,d);c=Cf(d,0,d.length,c);return Hl(new N(c,this.a),!1,Gl(this,b))};
k.fe=function(a,b){var c=a.U();if(c)return this.Ed(c,b);sa(!1,40);return""};k.Og=function(a,b){return this.fe(a[0],b)};k.Ed=function(a,b){a=Hl(a,!0,Gl(this,b));var c=a.ia(),d=a.sa();Lq(c,c.length,d,c);return Nq(c,d,this.b)};function Rq(a){a=a?a:{};El.call(this);this.defaultDataProjection=Tb(a.defaultDataProjection?a.defaultDataProjection:"EPSG:4326")}u(Rq,Il);function Sq(a,b){var c=[],d,e,f,g;f=0;for(g=a.length;f<g;++f)d=a[f],0<f&&c.pop(),0<=d?e=b[d]:e=b[~d].slice().reverse(),c.push.apply(c,e);d=0;for(e=c.length;d<e;++d)c[d]=c[d].slice();return c}function Tq(a,b,c,d,e){a=a.geometries;var f=[],g,h;g=0;for(h=a.length;g<h;++g)f[g]=Uq(a[g],b,c,d,e);return f}
function Uq(a,b,c,d,e){var f=a.type,g=Vq[f];b="Point"===f||"MultiPoint"===f?g(a,c,d):g(a,b);c=new I;c.Ta(Hl(b,!1,e));void 0!==a.id&&c.lc(a.id);a.properties&&c.H(a.properties);return c}
Rq.prototype.sg=function(a,b){if("Topology"==a.type){var c,d=null,e=null;a.transform&&(c=a.transform,d=c.scale,e=c.translate);var f=a.arcs;if(c){c=d;var g=e,h,l;h=0;for(l=f.length;h<l;++h){var m,n,p,q=f[h],r=c,v=g,x=0,y=0;n=0;for(m=q.length;n<m;++n)p=q[n],x+=p[0],y+=p[1],p[0]=x,p[1]=y,Wq(p,r,v)}}c=[];g=sb(a.objects);h=0;for(l=g.length;h<l;++h)"GeometryCollection"===g[h].type?(m=g[h],c.push.apply(c,Tq(m,f,d,e,b))):(m=g[h],c.push(Uq(m,f,d,e,b)));return c}return[]};
function Wq(a,b,c){a[0]=a[0]*b[0]+c[0];a[1]=a[1]*b[1]+c[1]}Rq.prototype.zg=function(){return this.defaultDataProjection};
var Vq={Point:function(a,b,c){a=a.coordinates;b&&c&&Wq(a,b,c);return new E(a)},LineString:function(a,b){var c=Sq(a.arcs,b);return new N(c)},Polygon:function(a,b){var c=[],d,e;d=0;for(e=a.arcs.length;d<e;++d)c[d]=Sq(a.arcs[d],b);return new F(c)},MultiPoint:function(a,b,c){a=a.coordinates;var d,e;if(b&&c)for(d=0,e=a.length;d<e;++d)Wq(a[d],b,c);return new P(a)},MultiLineString:function(a,b){var c=[],d,e;d=0;for(e=a.arcs.length;d<e;++d)c[d]=Sq(a.arcs[d],b);return new O(c)},MultiPolygon:function(a,b){var c=
[],d,e,f,g,h,l;h=0;for(l=a.arcs.length;h<l;++h){d=a.arcs[h];e=[];f=0;for(g=d.length;f<g;++f)e[f]=Sq(d[f],b);c[h]=e}return new Q(c)}};k=Rq.prototype;k.dd=function(){};k.ge=function(){};k.ie=function(){};k.wg=function(){};k.Wc=function(){};function Xq(a){a=a?a:{};this.c=a.featureType;this.a=a.featureNS;this.b=a.gmlFormat?a.gmlFormat:new Rm;this.l=a.schemaLocation?a.schemaLocation:Yq["1.1.0"];Bm.call(this)}u(Xq,Bm);var Yq={"1.1.0":"http://www.opengis.net/wfs http://schemas.opengis.net/wfs/1.1.0/wfs.xsd","1.0.0":"http://www.opengis.net/wfs http://schemas.opengis.net/wfs/1.0.0/wfs.xsd"};
Xq.prototype.Bc=function(a,b){var c={featureType:this.c,featureNS:this.a};qb(c,Fl(this,a,b?b:{}));c=[c];this.b.b["http://www.opengis.net/gml"].featureMember=sl(Em.prototype.ae);(c=M([],this.b.b,a,c,this.b))||(c=[]);return c};Xq.prototype.j=function(a){if(nl(a))return Zq(a);if(pl(a))return M({},$q,a,[]);if("string"===typeof a)return a=ql(a),Zq(a)};Xq.prototype.f=function(a){if(nl(a))return ar(this,a);if(pl(a))return br(this,a);if("string"===typeof a)return a=ql(a),ar(this,a)};
function ar(a,b){for(var c=b.firstChild;c;c=c.nextSibling)if(c.nodeType==Node.ELEMENT_NODE)return br(a,c)}var cr={"http://www.opengis.net/gml":{boundedBy:J(Em.prototype.ef,"bounds")}};function br(a,b){var c={},d=Mm(b.getAttribute("numberOfFeatures"));c.numberOfFeatures=d;return M(c,cr,b,[],a.b)}
var dr={"http://www.opengis.net/wfs":{totalInserted:J(Lm),totalUpdated:J(Lm),totalDeleted:J(Lm)}},er={"http://www.opengis.net/ogc":{FeatureId:sl(function(a){return a.getAttribute("fid")})}},fr={"http://www.opengis.net/wfs":{Feature:function(a,b){Al(er,a,b)}}},$q={"http://www.opengis.net/wfs":{TransactionSummary:J(function(a,b){return M({},dr,a,b)},"transactionSummary"),InsertResults:J(function(a,b){return M([],fr,a,b)},"insertIds")}};
function Zq(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType==Node.ELEMENT_NODE)return M({},$q,a,[])}var gr={"http://www.opengis.net/wfs":{PropertyName:K(Om)}};function hr(a,b){var c=kl("http://www.opengis.net/ogc","Filter"),d=kl("http://www.opengis.net/ogc","FeatureId");c.appendChild(d);d.setAttribute("fid",b);a.appendChild(c)}
var ir={"http://www.opengis.net/wfs":{Insert:K(function(a,b,c){var d=c[c.length-1],e=d.gmlVersion,d=kl(d.featureNS,d.featureType);a.appendChild(d);if(2===e){a=$m.prototype;(e=b.a)&&d.setAttribute("fid",e);var e=c[c.length-1],f=e.featureNS,g=b.c;e.kb||(e.kb={},e.kb[f]={});var h=b.M();b=[];var l=[],m;for(m in h){var n=h[m];null!==n&&(b.push(m),l.push(n),m==g||n instanceof lf?m in e.kb[f]||(e.kb[f][m]=K(a.Uh,a)):m in e.kb[f]||(e.kb[f][m]=K(Om)))}m=qb({},e);m.node=d;Bl(m,e.kb,wl(void 0,f),l,c,b)}else Rm.prototype.bi(d,
b,c)}),Update:K(function(a,b,c){var d=c[c.length-1];sa(void 0!==b.a,27);var e=d.featureType,f=d.featurePrefix,f=f?f:"feature",g=d.featureNS;a.setAttribute("typeName",f+":"+e);a.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns:"+f,g);e=b.a;if(void 0!==e){for(var f=b.P(),g=[],h=0,l=f.length;h<l;h++){var m=b.get(f[h]);void 0!==m&&g.push({name:f[h],value:m})}Bl({gmlVersion:d.gmlVersion,node:a,srsName:d.srsName},ir,wl("Property"),g,c);hr(a,e)}}),Delete:K(function(a,b,c){var d=c[c.length-1];sa(void 0!==
b.a,26);c=d.featureType;var e=d.featurePrefix,e=e?e:"feature",d=d.featureNS;a.setAttribute("typeName",e+":"+c);a.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns:"+e,d);b=b.a;void 0!==b&&hr(a,b)}),Property:K(function(a,b,c){var d=kl("http://www.opengis.net/wfs","Name"),e=c[c.length-1].gmlVersion;a.appendChild(d);Om(d,b.name);void 0!==b.value&&null!==b.value&&(d=kl("http://www.opengis.net/wfs","Value"),a.appendChild(d),b.value instanceof lf?2===e?$m.prototype.Uh(d,b.value,c):Rm.prototype.rd(d,
b.value,c):Om(d,b.value))}),Native:K(function(a,b){b.kq&&a.setAttribute("vendorId",b.kq);void 0!==b.Lp&&a.setAttribute("safeToIgnore",b.Lp);void 0!==b.value&&Om(a,b.value)})}};function jr(a,b,c){var d={node:a};b.b.forEach(function(a){Bl(d,kr,wl(a.mc),[a],c)})}function lr(a,b){void 0!==b.a&&a.setAttribute("matchCase",b.a.toString());mr(a,b.b);nr(a,""+b.g)}function or(a,b,c){a=kl("http://www.opengis.net/ogc",a);Om(a,c);b.appendChild(a)}function mr(a,b){or("PropertyName",a,b)}
function nr(a,b){or("Literal",a,b)}
var kr={"http://www.opengis.net/wfs":{Query:K(function(a,b,c){var d=c[c.length-1],e=d.featurePrefix,f=d.featureNS,g=d.propertyNames,h=d.srsName;a.setAttribute("typeName",(e?e+":":"")+b);h&&a.setAttribute("srsName",h);f&&a.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns:"+e,f);b=qb({},d);b.node=a;Bl(b,gr,wl("PropertyName"),g,c);if(d=d.filter)g=kl("http://www.opengis.net/ogc","Filter"),a.appendChild(g),Bl({node:g},kr,wl(d.mc),[d],c)})},"http://www.opengis.net/ogc":{And:K(jr),Or:K(jr),Not:K(function(a,
b,c){b=b.condition;Bl({node:a},kr,wl(b.mc),[b],c)}),BBOX:K(function(a,b,c){c[c.length-1].srsName=b.srsName;mr(a,b.geometryName);Rm.prototype.rd(a,b.extent,c)}),Intersects:K(function(a,b,c){c[c.length-1].srsName=b.srsName;mr(a,b.geometryName);Rm.prototype.rd(a,b.geometry,c)}),Within:K(function(a,b,c){c[c.length-1].srsName=b.srsName;mr(a,b.geometryName);Rm.prototype.rd(a,b.geometry,c)}),PropertyIsEqualTo:K(lr),PropertyIsNotEqualTo:K(lr),PropertyIsLessThan:K(lr),PropertyIsLessThanOrEqualTo:K(lr),PropertyIsGreaterThan:K(lr),
PropertyIsGreaterThanOrEqualTo:K(lr),PropertyIsNull:K(function(a,b){mr(a,b.b)}),PropertyIsBetween:K(function(a,b){mr(a,b.b);var c=kl("http://www.opengis.net/ogc","LowerBoundary");a.appendChild(c);nr(c,""+b.a);c=kl("http://www.opengis.net/ogc","UpperBoundary");a.appendChild(c);nr(c,""+b.g)}),PropertyIsLike:K(function(a,b){a.setAttribute("wildCard",b.f);a.setAttribute("singleChar",b.i);a.setAttribute("escapeChar",b.g);void 0!==b.a&&a.setAttribute("matchCase",b.a.toString());mr(a,b.b);nr(a,""+b.c)})}};
Xq.prototype.o=function(a){var b=kl("http://www.opengis.net/wfs","GetFeature");b.setAttribute("service","WFS");b.setAttribute("version","1.1.0");var c;if(a&&(a.handle&&b.setAttribute("handle",a.handle),a.outputFormat&&b.setAttribute("outputFormat",a.outputFormat),void 0!==a.maxFeatures&&b.setAttribute("maxFeatures",a.maxFeatures),a.resultType&&b.setAttribute("resultType",a.resultType),void 0!==a.startIndex&&b.setAttribute("startIndex",a.startIndex),void 0!==a.count&&b.setAttribute("count",a.count),
c=a.filter,a.bbox)){sa(a.geometryName,12);var d=rm(a.geometryName,a.bbox,a.srsName);c?c=qm(c,d):c=d}b.setAttributeNS("http://www.w3.org/2001/XMLSchema-instance","xsi:schemaLocation",this.l);c={node:b,srsName:a.srsName,featureNS:a.featureNS?a.featureNS:this.a,featurePrefix:a.featurePrefix,geometryName:a.geometryName,filter:c,propertyNames:a.propertyNames?a.propertyNames:[]};sa(Array.isArray(a.featureTypes),11);a=a.featureTypes;c=[c];d=qb({},c[c.length-1]);d.node=b;Bl(d,kr,wl("Query"),a,c);return b};
Xq.prototype.u=function(a,b,c,d){var e=[],f=kl("http://www.opengis.net/wfs","Transaction"),g=d.version?d.version:"1.1.0",h="1.0.0"===g?2:3;f.setAttribute("service","WFS");f.setAttribute("version",g);var l;d&&(l=d.gmlOptions?d.gmlOptions:{},d.handle&&f.setAttribute("handle",d.handle));f.setAttributeNS("http://www.w3.org/2001/XMLSchema-instance","xsi:schemaLocation",Yq[g]);a&&(g={node:f,featureNS:d.featureNS,featureType:d.featureType,featurePrefix:d.featurePrefix,gmlVersion:h,srsName:d.srsName},qb(g,
l),Bl(g,ir,wl("Insert"),a,e));b&&(g={node:f,featureNS:d.featureNS,featureType:d.featureType,featurePrefix:d.featurePrefix,gmlVersion:h,srsName:d.srsName},qb(g,l),Bl(g,ir,wl("Update"),b,e));c&&Bl({node:f,featureNS:d.featureNS,featureType:d.featureType,featurePrefix:d.featurePrefix,gmlVersion:h,srsName:d.srsName},ir,wl("Delete"),c,e);d.nativeElements&&Bl({node:f,featureNS:d.featureNS,featureType:d.featureType,featurePrefix:d.featurePrefix,gmlVersion:h,srsName:d.srsName},ir,wl("Native"),d.nativeElements,
e);return f};Xq.prototype.yg=function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType==Node.ELEMENT_NODE)return this.hf(a);return null};Xq.prototype.hf=function(a){if(a.firstElementChild&&a.firstElementChild.firstElementChild)for(a=a.firstElementChild.firstElementChild,a=a.firstElementChild;a;a=a.nextElementSibling)if(0!==a.childNodes.length&&(1!==a.childNodes.length||3!==a.firstChild.nodeType)){var b=[{}];this.b.ef(a,b);return Tb(b.pop().srsName)}return null};function pr(a){a=a?a:{};El.call(this);this.b=void 0!==a.splitCollection?a.splitCollection:!1}u(pr,Un);function qr(a){a=a.W();return a.length?a.join(" "):""}function rr(a){a=a.W();for(var b=[],c=0,d=a.length;c<d;++c)b.push(a[c].join(" "));return b.join(",")}function sr(a){var b=[];a=a.Oc();for(var c=0,d=a.length;c<d;++c)b.push("("+rr(a[c])+")");return b.join(",")}
function tr(a){var b=a.S(),c=(0,ur[b])(a),b=b.toUpperCase();if(a instanceof of){a=a.la;var d="";if("XYZ"===a||"XYZM"===a)d+="Z";if("XYM"===a||"XYZM"===a)d+="M";a=d;0<a.length&&(b+=" "+a)}return c.length?b+"("+c+")":b+" EMPTY"}
var ur={Point:qr,LineString:rr,Polygon:sr,MultiPoint:function(a){var b=[];a=a.Zd();for(var c=0,d=a.length;c<d;++c)b.push("("+qr(a[c])+")");return b.join(",")},MultiLineString:function(a){var b=[];a=a.Nc();for(var c=0,d=a.length;c<d;++c)b.push("("+rr(a[c])+")");return b.join(",")},MultiPolygon:function(a){var b=[];a=a.md();for(var c=0,d=a.length;c<d;++c)b.push("("+sr(a[c])+")");return b.join(",")},GeometryCollection:function(a){var b=[];a=a.Qf();for(var c=0,d=a.length;c<d;++c)b.push(tr(a[c]));return b.join(",")}};
k=pr.prototype;k.$d=function(a,b){var c=this.yd(a,b);if(c){var d=new I;d.Ta(c);return d}return null};k.tg=function(a,b){var c=[],d=this.yd(a,b);this.b&&"GeometryCollection"==d.S()?c=d.a:c=[d];for(var e=[],f=0,g=c.length;f<g;++f)d=new I,d.Ta(c[f]),e.push(d);return e};k.yd=function(a,b){var c;c=new vr(new wr(a));xr(c);return(c=yr(c))?Hl(c,!1,b):null};k.fe=function(a,b){var c=a.U();return c?this.Ed(c,b):""};
k.Og=function(a,b){if(1==a.length)return this.fe(a[0],b);for(var c=[],d=0,e=a.length;d<e;++d)c.push(a[d].U());c=new sm(c);return this.Ed(c,b)};k.Ed=function(a,b){return tr(Hl(a,!0,b))};function wr(a){this.a=a;this.b=-1}
function zr(a){var b=a.a.charAt(++a.b),c={position:a.b,value:b};if("("==b)c.type=2;else if(","==b)c.type=5;else if(")"==b)c.type=3;else if("0"<=b&&"9">=b||"."==b||"-"==b){c.type=4;var d,b=a.b,e=!1,f=!1;do{if("."==d)e=!0;else if("e"==d||"E"==d)f=!0;d=a.a.charAt(++a.b)}while("0"<=d&&"9">=d||"."==d&&(void 0===e||!e)||!f&&("e"==d||"E"==d)||f&&("-"==d||"+"==d));a=parseFloat(a.a.substring(b,a.b--));c.value=a}else if("a"<=b&&"z">=b||"A"<=b&&"Z">=b){c.type=1;b=a.b;do d=a.a.charAt(++a.b);while("a"<=d&&"z">=
d||"A"<=d&&"Z">=d);a=a.a.substring(b,a.b--).toUpperCase();c.value=a}else{if(" "==b||"\t"==b||"\r"==b||"\n"==b)return zr(a);if(""===b)c.type=6;else throw Error("Unexpected character: "+b);}return c}function vr(a){this.g=a;this.a="XY"}function xr(a){a.b=zr(a.g)}function Ar(a,b){var c=a.b.type==b;c&&xr(a);return c}
function yr(a){var b=a.b;if(Ar(a,1)){var b=b.value,c="XY",d=a.b;1==a.b.type&&(d=d.value,"Z"===d?c="XYZ":"M"===d?c="XYM":"ZM"===d&&(c="XYZM"),"XY"!==c&&xr(a));a.a=c;if("GEOMETRYCOLLECTION"==b){a:{if(Ar(a,2)){b=[];do b.push(yr(a));while(Ar(a,5));if(Ar(a,3)){a=b;break a}}else if(Br(a)){a=[];break a}throw Error(Cr(a));}return new sm(a)}d=Dr[b];c=Er[b];if(!d||!c)throw Error("Invalid geometry type: "+b);b=d.call(a);return new c(b,a.a)}throw Error(Cr(a));}k=vr.prototype;
k.ng=function(){if(Ar(this,2)){var a=Fr(this);if(Ar(this,3))return a}else if(Br(this))return null;throw Error(Cr(this));};k.mg=function(){if(Ar(this,2)){var a=Gr(this);if(Ar(this,3))return a}else if(Br(this))return[];throw Error(Cr(this));};k.og=function(){if(Ar(this,2)){var a=Hr(this);if(Ar(this,3))return a}else if(Br(this))return[];throw Error(Cr(this));};
k.Vo=function(){if(Ar(this,2)){var a;if(2==this.b.type)for(a=[this.ng()];Ar(this,5);)a.push(this.ng());else a=Gr(this);if(Ar(this,3))return a}else if(Br(this))return[];throw Error(Cr(this));};k.Uo=function(){if(Ar(this,2)){var a=Hr(this);if(Ar(this,3))return a}else if(Br(this))return[];throw Error(Cr(this));};k.Wo=function(){if(Ar(this,2)){for(var a=[this.og()];Ar(this,5);)a.push(this.og());if(Ar(this,3))return a}else if(Br(this))return[];throw Error(Cr(this));};
function Fr(a){for(var b=[],c=a.a.length,d=0;d<c;++d){var e=a.b;if(Ar(a,4))b.push(e.value);else break}if(b.length==c)return b;throw Error(Cr(a));}function Gr(a){for(var b=[Fr(a)];Ar(a,5);)b.push(Fr(a));return b}function Hr(a){for(var b=[a.mg()];Ar(a,5);)b.push(a.mg());return b}function Br(a){var b=1==a.b.type&&"EMPTY"==a.b.value;b&&xr(a);return b}function Cr(a){return"Unexpected `"+a.b.value+"` at position "+a.b.position+" in `"+a.g.a+"`"}
var Er={POINT:E,LINESTRING:N,POLYGON:F,MULTIPOINT:P,MULTILINESTRING:O,MULTIPOLYGON:Q},Dr={POINT:vr.prototype.ng,LINESTRING:vr.prototype.mg,POLYGON:vr.prototype.og,MULTIPOINT:vr.prototype.Vo,MULTILINESTRING:vr.prototype.Uo,MULTIPOLYGON:vr.prototype.Wo};function Ir(){this.version=void 0}u(Ir,uq);Ir.prototype.a=function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType==Node.ELEMENT_NODE)return this.b(a);return null};Ir.prototype.b=function(a){this.version=a.getAttribute("version").trim();return(a=M({version:this.version},Jr,a,[]))?a:null};function Kr(a,b){return M({},Lr,a,b)}function Mr(a,b){return M({},Nr,a,b)}function Or(a,b){var c=Kr(a,b);if(c){var d=[Mm(a.getAttribute("width")),Mm(a.getAttribute("height"))];c.size=d;return c}}
function Pr(a,b){return M([],Qr,a,b)}
var Rr=[null,"http://www.opengis.net/wms"],Jr=L(Rr,{Service:J(function(a,b){return M({},Sr,a,b)}),Capability:J(function(a,b){return M({},Tr,a,b)})}),Tr=L(Rr,{Request:J(function(a,b){return M({},Ur,a,b)}),Exception:J(function(a,b){return M([],Vr,a,b)}),Layer:J(function(a,b){return M({},Wr,a,b)})}),Sr=L(Rr,{Name:J(R),Title:J(R),Abstract:J(R),KeywordList:J(Pr),OnlineResource:J(tq),ContactInformation:J(function(a,b){return M({},Xr,a,b)}),Fees:J(R),AccessConstraints:J(R),LayerLimit:J(Lm),MaxWidth:J(Lm),
MaxHeight:J(Lm)}),Xr=L(Rr,{ContactPersonPrimary:J(function(a,b){return M({},Yr,a,b)}),ContactPosition:J(R),ContactAddress:J(function(a,b){return M({},Zr,a,b)}),ContactVoiceTelephone:J(R),ContactFacsimileTelephone:J(R),ContactElectronicMailAddress:J(R)}),Yr=L(Rr,{ContactPerson:J(R),ContactOrganization:J(R)}),Zr=L(Rr,{AddressType:J(R),Address:J(R),City:J(R),StateOrProvince:J(R),PostCode:J(R),Country:J(R)}),Vr=L(Rr,{Format:sl(R)}),Wr=L(Rr,{Name:J(R),Title:J(R),Abstract:J(R),KeywordList:J(Pr),CRS:ul(R),
EX_GeographicBoundingBox:J(function(a,b){var c=M({},$r,a,b);if(c){var d=c.westBoundLongitude,e=c.southBoundLatitude,f=c.eastBoundLongitude,c=c.northBoundLatitude;if(void 0!==d&&void 0!==e&&void 0!==f&&void 0!==c)return[d,e,f,c]}}),BoundingBox:ul(function(a){var b=[Km(a.getAttribute("minx")),Km(a.getAttribute("miny")),Km(a.getAttribute("maxx")),Km(a.getAttribute("maxy"))],c=[Km(a.getAttribute("resx")),Km(a.getAttribute("resy"))];return{crs:a.getAttribute("CRS"),extent:b,res:c}}),Dimension:ul(function(a){return{name:a.getAttribute("name"),
units:a.getAttribute("units"),unitSymbol:a.getAttribute("unitSymbol"),"default":a.getAttribute("default"),multipleValues:Hm(a.getAttribute("multipleValues")),nearestValue:Hm(a.getAttribute("nearestValue")),current:Hm(a.getAttribute("current")),values:R(a)}}),Attribution:J(function(a,b){return M({},as,a,b)}),AuthorityURL:ul(function(a,b){var c=Kr(a,b);if(c)return c.name=a.getAttribute("name"),c}),Identifier:ul(R),MetadataURL:ul(function(a,b){var c=Kr(a,b);if(c)return c.type=a.getAttribute("type"),
c}),DataURL:ul(Kr),FeatureListURL:ul(Kr),Style:ul(function(a,b){return M({},bs,a,b)}),MinScaleDenominator:J(Jm),MaxScaleDenominator:J(Jm),Layer:ul(function(a,b){var c=b[b.length-1],d=M({},Wr,a,b);if(d){var e=Hm(a.getAttribute("queryable"));void 0===e&&(e=c.queryable);d.queryable=void 0!==e?e:!1;e=Mm(a.getAttribute("cascaded"));void 0===e&&(e=c.cascaded);d.cascaded=e;e=Hm(a.getAttribute("opaque"));void 0===e&&(e=c.opaque);d.opaque=void 0!==e?e:!1;e=Hm(a.getAttribute("noSubsets"));void 0===e&&(e=c.noSubsets);
d.noSubsets=void 0!==e?e:!1;(e=Km(a.getAttribute("fixedWidth")))||(e=c.fixedWidth);d.fixedWidth=e;(e=Km(a.getAttribute("fixedHeight")))||(e=c.fixedHeight);d.fixedHeight=e;["Style","CRS","AuthorityURL"].forEach(function(a){a in c&&(d[a]=(d[a]||[]).concat(c[a]))});"EX_GeographicBoundingBox BoundingBox Dimension Attribution MinScaleDenominator MaxScaleDenominator".split(" ").forEach(function(a){a in d||(d[a]=c[a])});return d}})}),as=L(Rr,{Title:J(R),OnlineResource:J(tq),LogoURL:J(Or)}),$r=L(Rr,{westBoundLongitude:J(Jm),
eastBoundLongitude:J(Jm),southBoundLatitude:J(Jm),northBoundLatitude:J(Jm)}),Ur=L(Rr,{GetCapabilities:J(Mr),GetMap:J(Mr),GetFeatureInfo:J(Mr)}),Nr=L(Rr,{Format:ul(R),DCPType:ul(function(a,b){return M({},cs,a,b)})}),cs=L(Rr,{HTTP:J(function(a,b){return M({},ds,a,b)})}),ds=L(Rr,{Get:J(Kr),Post:J(Kr)}),bs=L(Rr,{Name:J(R),Title:J(R),Abstract:J(R),LegendURL:ul(Or),StyleSheetURL:J(Kr),StyleURL:J(Kr)}),Lr=L(Rr,{Format:J(R),OnlineResource:J(tq)}),Qr=L(Rr,{Keyword:sl(R)});function es(a){a=a?a:{};this.a="http://mapserver.gis.umn.edu/mapserver";this.b=new $m;this.c=a.layers?a.layers:null;Bm.call(this)}u(es,Bm);
es.prototype.Bc=function(a,b){var c={};b&&qb(c,Fl(this,a,b));var d=[c];a.setAttribute("namespaceURI",this.a);var e=a.localName,c=[];if(a.childNodes.length){if("msGMLOutput"==e)for(var f=0,g=a.childNodes.length;f<g;f++){var h=a.childNodes[f];if(h.nodeType===Node.ELEMENT_NODE){var l=d[0],m=h.localName.replace("_layer","");if(!this.c||fa(this.c,m)){m+="_feature";l.featureType=m;l.featureNS=this.a;var n={};n[m]=sl(this.b.qg,this.b);l=L([l.featureNS,null],n);h.setAttribute("namespaceURI",this.a);(h=M([],
l,h,d,this.b))&&ha(c,h)}}}"FeatureCollection"==e&&(d=M([],this.b.b,a,[{}],this.b))&&(c=d)}return c};es.prototype.Ng=function(){};es.prototype.Zb=function(){};es.prototype.he=function(){};function fs(){this.g=new vq}u(fs,uq);fs.prototype.a=function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType==Node.ELEMENT_NODE)return this.b(a);return null};fs.prototype.b=function(a){var b=a.getAttribute("version").trim(),c=this.g.b(a);if(!c)return null;c.version=b;return(c=M(c,gs,a,[]))?c:null};function hs(a){var b=R(a).split(" ");if(b&&2==b.length&&(a=+b[0],b=+b[1],!isNaN(a)&&!isNaN(b)))return[a,b]}
var is=[null,"http://www.opengis.net/wmts/1.0"],js=[null,"http://www.opengis.net/ows/1.1"],gs=L(is,{Contents:J(function(a,b){return M({},ks,a,b)})}),ks=L(is,{Layer:ul(function(a,b){return M({},ls,a,b)}),TileMatrixSet:ul(function(a,b){return M({},ms,a,b)})}),ls=L(is,{Style:ul(function(a,b){var c=M({},ns,a,b);if(c){var d="true"===a.getAttribute("isDefault");c.isDefault=d;return c}}),Format:ul(R),TileMatrixSetLink:ul(function(a,b){return M({},os,a,b)}),Dimension:ul(function(a,b){return M({},ps,a,b)}),
ResourceURL:ul(function(a){var b=a.getAttribute("format"),c=a.getAttribute("template");a=a.getAttribute("resourceType");var d={};b&&(d.format=b);c&&(d.template=c);a&&(d.resourceType=a);return d})},L(js,{Title:J(R),Abstract:J(R),WGS84BoundingBox:J(function(a,b){var c=M([],qs,a,b);if(2==c.length)return Ia(c)}),Identifier:J(R)})),ns=L(is,{LegendURL:ul(function(a){var b={};b.format=a.getAttribute("format");b.href=tq(a);return b})},L(js,{Title:J(R),Identifier:J(R)})),os=L(is,{TileMatrixSet:J(R),TileMatrixSetLimits:J(function(a,
b){return M([],rs,a,b)})}),rs=L(is,{TileMatrixLimits:sl(function(a,b){return M({},ss,a,b)})}),ss=L(is,{TileMatrix:J(R),MinTileRow:J(Lm),MaxTileRow:J(Lm),MinTileCol:J(Lm),MaxTileCol:J(Lm)}),ps=L(is,{Default:J(R),Value:ul(R)},L(js,{Identifier:J(R)})),qs=L(js,{LowerCorner:sl(hs),UpperCorner:sl(hs)}),ms=L(is,{WellKnownScaleSet:J(R),TileMatrix:ul(function(a,b){return M({},ts,a,b)})},L(js,{SupportedCRS:J(R),Identifier:J(R)})),ts=L(is,{TopLeftCorner:J(hs),ScaleDenominator:J(Jm),TileWidth:J(Lm),TileHeight:J(Lm),
MatrixWidth:J(Lm),MatrixHeight:J(Lm)},L(js,{Identifier:J(R)}));function us(a){Qc.call(this);a=a||{};this.a=null;this.i=ec;this.c=void 0;z(this,Sc("projection"),this.wm,this);z(this,Sc("tracking"),this.xm,this);void 0!==a.projection&&this.Ph(Tb(a.projection));void 0!==a.trackingOptions&&this.sj(a.trackingOptions);this.Je(void 0!==a.tracking?a.tracking:!1)}u(us,Qc);k=us.prototype;k.ra=function(){this.Je(!1);Qc.prototype.ra.call(this)};k.wm=function(){var a=this.Nh();a&&(this.i=Sb(Tb("EPSG:4326"),a),this.a&&this.set("position",this.i(this.a)))};
k.xm=function(){if(Xd){var a=this.Oh();a&&void 0===this.c?this.c=navigator.geolocation.watchPosition(this.cp.bind(this),this.ep.bind(this),this.zh()):a||void 0===this.c||(navigator.geolocation.clearWatch(this.c),this.c=void 0)}};
k.cp=function(a){a=a.coords;this.set("accuracy",a.accuracy);this.set("altitude",null===a.altitude?void 0:a.altitude);this.set("altitudeAccuracy",null===a.altitudeAccuracy?void 0:a.altitudeAccuracy);this.set("heading",null===a.heading?void 0:Ca(a.heading));this.a?(this.a[0]=a.longitude,this.a[1]=a.latitude):this.a=[a.longitude,a.latitude];var b=this.i(this.a);this.set("position",b);this.set("speed",null===a.speed?void 0:a.speed);a=Uf(Hb,this.a,a.accuracy);a.Fc(this.i);this.set("accuracyGeometry",a);
this.s()};k.ep=function(a){a.type="error";this.Je(!1);this.b(a)};k.zk=function(){return this.get("accuracy")};k.Ak=function(){return this.get("accuracyGeometry")||null};k.Ck=function(){return this.get("altitude")};k.Dk=function(){return this.get("altitudeAccuracy")};k.um=function(){return this.get("heading")};k.vm=function(){return this.get("position")};k.Nh=function(){return this.get("projection")};k.gl=function(){return this.get("speed")};k.Oh=function(){return this.get("tracking")};k.zh=function(){return this.get("trackingOptions")};
k.Ph=function(a){this.set("projection",a)};k.Je=function(a){this.set("tracking",a)};k.sj=function(a){this.set("trackingOptions",a)};function vs(a,b,c){of.call(this);this.Gg(a,b?b:0,c)}u(vs,of);k=vs.prototype;k.clone=function(){var a=new vs(null);qf(a,this.la,this.B.slice());a.s();return a};k.Hb=function(a,b,c,d){var e=this.B;a-=e[0];var f=b-e[1];b=a*a+f*f;if(b<d){if(b)for(d=this.Yd()/Math.sqrt(b),c[0]=e[0]+d*a,c[1]=e[1]+d*f,d=2;d<this.a;++d)c[d]=e[d];else for(d=0;d<this.a;++d)c[d]=e[d];c.length=this.a;return b}return d};k.Sc=function(a,b){var c=this.B,d=a-c[0],c=b-c[1];return d*d+c*c<=ws(this)};
k.za=function(){return this.B.slice(0,this.a)};k.se=function(a){var b=this.B,c=b[this.a]-b[0];return Wa(b[0]-c,b[1]-c,b[0]+c,b[1]+c,a)};k.Yd=function(){return Math.sqrt(ws(this))};function ws(a){var b=a.B[a.a]-a.B[0];a=a.B[a.a+1]-a.B[1];return b*b+a*a}k.S=function(){return"Circle"};k.Ya=function(a){var b=this.D();return nb(a,b)?(b=this.za(),a[0]<=b[0]&&a[2]>=b[0]||a[1]<=b[1]&&a[3]>=b[1]?!0:bb(a,this.sb,this)):!1};
k.lb=function(a){var b=this.a,c=a.slice();c[b]=c[0]+(this.B[b]-this.B[0]);var d;for(d=1;d<b;++d)c[b+d]=a[d];qf(this,this.la,c);this.s()};k.Gg=function(a,b,c){if(a){rf(this,c,a,0);this.B||(this.B=[]);c=this.B;a=zf(c,a);c[a++]=c[0]+b;var d;b=1;for(d=this.a;b<d;++b)c[a++]=c[b];c.length=a}else qf(this,"XY",null);this.s()};k.W=function(){};k.pa=function(){};k.Zc=function(a){this.B[this.a]=this.B[0]+a;this.s()};function xs(a,b,c){for(var d=[],e=a(0),f=a(1),g=b(e),h=b(f),l=[f,e],m=[h,g],n=[1,0],p={},q=1E5,r,v,x,y,A;0<--q&&0<n.length;)x=n.pop(),e=l.pop(),g=m.pop(),f=x.toString(),f in p||(d.push(g[0],g[1]),p[f]=!0),y=n.pop(),f=l.pop(),h=m.pop(),A=(x+y)/2,r=a(A),v=b(r),Aa(v[0],v[1],g[0],g[1],h[0],h[1])<c?(d.push(h[0],h[1]),f=y.toString(),p[f]=!0):(n.push(y,A,A,x),m.push(h,v,v,g),l.push(f,r,r,e));return d}function ys(a,b,c,d,e){var f=Tb("EPSG:4326");return xs(function(d){return[a,b+(c-b)*d]},dc(f,d),e)}
function zs(a,b,c,d,e){var f=Tb("EPSG:4326");return xs(function(d){return[b+(c-b)*d,a]},dc(f,d),e)};function As(a){a=a||{};this.i=this.l=null;this.g=this.f=Infinity;this.c=this.j=-Infinity;this.A=this.O=Infinity;this.G=this.C=-Infinity;this.I=void 0!==a.targetSize?a.targetSize:100;this.qa=void 0!==a.maxLines?a.maxLines:100;this.b=[];this.a=[];this.ta=void 0!==a.strokeStyle?a.strokeStyle:Bs;this.v=this.o=void 0;this.u=null;this.setMap(void 0!==a.map?a.map:null)}var Bs=new tj({color:"rgba(0,0,0,0.2)"}),Cs=[90,45,30,20,10,5,2,1,.5,.2,.1,.05,.01,.005,.002,.001];
function Ds(a,b,c,d,e,f,g){var h=g;b=ys(b,c,d,a.i,e);h=void 0!==a.b[h]?a.b[h]:new N(null);h.ca("XY",b);nb(h.D(),f)&&(a.b[g++]=h);return g}function Es(a,b,c,d,e){var f=e;b=zs(b,a.c,a.g,a.i,c);f=void 0!==a.a[f]?a.a[f]:new N(null);f.ca("XY",b);nb(f.D(),d)&&(a.a[e++]=f);return e}k=As.prototype;k.ym=function(){return this.l};k.Wk=function(){return this.b};k.cl=function(){return this.a};
k.Dh=function(a){var b=a.vectorContext,c=a.frameState,d=c.extent;a=c.viewState;var e=a.center,f=a.projection,g=a.resolution;a=c.pixelRatio;a=g*g/(4*a*a);if(!this.i||!bc(this.i,f)){var h=Tb("EPSG:4326"),l=f.D(),m=f.f,n=gc(m,h,f),p=m[2],q=m[1],r=m[0],v=n[3],x=n[2],y=n[1],n=n[0];this.f=m[3];this.g=p;this.j=q;this.c=r;this.O=v;this.A=x;this.C=y;this.G=n;this.o=dc(h,f);this.v=dc(f,h);this.u=this.v(kb(l));this.i=f}f.a&&(f=f.D(),h=ib(f),c=c.focus[0],c<f[0]||c>f[2])&&(c=h*Math.ceil((f[0]-c)/h),d=[d[0]+c,
d[1],d[2]+c,d[3]]);c=this.u[0];f=this.u[1];h=-1;m=Math.pow(this.I*g,2);p=[];q=[];g=0;for(l=Cs.length;g<l;++g){r=Cs[g]/2;p[0]=c-r;p[1]=f-r;q[0]=c+r;q[1]=f+r;this.o(p,p);this.o(q,q);r=Math.pow(q[0]-p[0],2)+Math.pow(q[1]-p[1],2);if(r<=m)break;h=Cs[g]}g=h;if(-1==g)this.b.length=this.a.length=0;else{c=this.v(e);e=c[0];c=c[1];f=this.qa;h=[Math.max(d[0],this.G),Math.max(d[1],this.C),Math.min(d[2],this.A),Math.min(d[3],this.O)];h=gc(h,this.i,"EPSG:4326");m=h[3];q=h[1];e=Math.floor(e/g)*g;p=xa(e,this.c,this.g);
l=Ds(this,p,q,m,a,d,0);for(h=0;p!=this.c&&h++<f;)p=Math.max(p-g,this.c),l=Ds(this,p,q,m,a,d,l);p=xa(e,this.c,this.g);for(h=0;p!=this.g&&h++<f;)p=Math.min(p+g,this.g),l=Ds(this,p,q,m,a,d,l);this.b.length=l;c=Math.floor(c/g)*g;e=xa(c,this.j,this.f);l=Es(this,e,a,d,0);for(h=0;e!=this.j&&h++<f;)e=Math.max(e-g,this.j),l=Es(this,e,a,d,l);e=xa(c,this.j,this.f);for(h=0;e!=this.f&&h++<f;)e=Math.min(e+g,this.f),l=Es(this,e,a,d,l);this.a.length=l}b.Na(null,this.ta);a=0;for(e=this.b.length;a<e;++a)g=this.b[a],
b.Rb(g,null);a=0;for(e=this.a.length;a<e;++a)g=this.a[a],b.Rb(g,null)};k.setMap=function(a){this.l&&(this.l.K("postcompose",this.Dh,this),this.l.render());a&&(a.J("postcompose",this.Dh,this),a.render());this.l=a};function Fs(a,b,c,d,e){Nc.call(this);this.i=e;this.extent=a;this.a=c;this.resolution=b;this.state=d}u(Fs,Nc);Fs.prototype.s=function(){this.b("change")};Fs.prototype.D=function(){return this.extent};Fs.prototype.V=function(){return this.state};function Gs(a,b,c,d,e,f,g){Fs.call(this,a,b,c,0,d);this.j=e;this.N=new Image;null!==f&&(this.N.crossOrigin=f);this.c={};this.g=null;this.state=0;this.f=g}u(Gs,Fs);k=Gs.prototype;k.Y=function(a){if(void 0!==a){var b;a=w(a);if(a in this.c)return this.c[a];tb(this.c)?b=this.N:b=this.N.cloneNode(!1);return this.c[a]=b}return this.N};k.Bm=function(){this.state=3;this.g.forEach(Bc);this.g=null;this.s()};
k.Cm=function(){void 0===this.resolution&&(this.resolution=jb(this.extent)/this.N.height);this.state=2;this.g.forEach(Bc);this.g=null;this.s()};k.load=function(){if(0==this.state||3==this.state)this.state=1,this.s(),this.g=[Gc(this.N,"error",this.Bm,this),Gc(this.N,"load",this.Cm,this)],this.f(this,this.j)};k.Hg=function(a){this.N=a};function Hs(a,b,c,d,e,f){this.c=f?f:null;Fs.call(this,a,b,c,f?0:2,d);this.g=e}u(Hs,Fs);Hs.prototype.f=function(a){this.state=a?3:2;this.s()};Hs.prototype.load=function(){0==this.state&&(this.state=1,this.s(),this.c(this.f.bind(this)))};Hs.prototype.Y=function(){return this.g};function Is(a,b){Nc.call(this);this.Ga=a;this.state=b;this.a=null;this.key=""}u(Is,Nc);Is.prototype.s=function(){this.b("change")};Is.prototype.hb=function(){return this.key+"/"+this.Ga};function Js(a){if(!a.a)return a;var b=a.a;do{if(2==b.V())return b;b=b.a}while(b);return a}Is.prototype.i=function(){return this.Ga};Is.prototype.V=function(){return this.state};function Ks(a,b,c,d,e){Is.call(this,a,b);this.f=c;this.N=new Image;null!==d&&(this.N.crossOrigin=d);this.c=null;this.l=e}u(Ks,Is);k=Ks.prototype;k.ra=function(){1==this.state&&Ls(this);this.a&&Kc(this.a);this.state=5;this.s();Is.prototype.ra.call(this)};k.Y=function(){return this.N};k.hb=function(){return this.f};k.zm=function(){this.state=3;Ls(this);this.s()};k.Am=function(){this.state=this.N.naturalWidth&&this.N.naturalHeight?2:4;Ls(this);this.s()};
k.load=function(){if(0==this.state||3==this.state)this.state=1,this.s(),this.c=[Gc(this.N,"error",this.zm,this),Gc(this.N,"load",this.Am,this)],this.l(this,this.f)};function Ls(a){a.c.forEach(Bc);a.c=null};function Ms(a){a=a?a:{};kg.call(this,{handleEvent:jf});this.f=a.formatConstructors?a.formatConstructors:[];this.l=a.projection?Tb(a.projection):null;this.a=null;this.target=a.target?a.target:null}u(Ms,kg);function Ns(a){a=a.dataTransfer.files;var b,c,d;b=0;for(c=a.length;b<c;++b){d=a.item(b);var e=new FileReader;e.addEventListener("load",this.j.bind(this,d));e.readAsText(d)}}function Os(a){a.stopPropagation();a.preventDefault();a.dataTransfer.dropEffect="copy"}
Ms.prototype.j=function(a,b){var c=b.target.result,d=this.v,e=this.l;e||(e=d.$().o);var d=this.f,f=[],g,h;g=0;for(h=d.length;g<h;++g){var l=new d[g];var m={featureProjection:e};try{f=l.Pa(c,m)}catch(n){f=null}if(f&&0<f.length)break}this.b(new Ps(Qs,a,f,e))};Ms.prototype.setMap=function(a){this.a&&(this.a.forEach(Bc),this.a=null);kg.prototype.setMap.call(this,a);a&&(a=this.target?this.target:a.c,this.a=[z(a,"drop",Ns,this),z(a,"dragenter",Os,this),z(a,"dragover",Os,this),z(a,"drop",Os,this)])};
var Qs="addfeatures";function Ps(a,b,c,d){Lc.call(this,a);this.features=c;this.file=b;this.projection=d}u(Ps,Lc);function Rs(a){a=a?a:{};Ag.call(this,{handleDownEvent:Ss,handleDragEvent:Ts,handleUpEvent:Us});this.o=a.condition?a.condition:wg;this.a=this.f=void 0;this.j=0;this.u=void 0!==a.duration?a.duration:400}u(Rs,Ag);function Ts(a){if(yg(a)){var b=a.map,c=b.Nb(),d=a.pixel;a=d[0]-c[0]/2;d=c[1]/2-d[1];c=Math.atan2(d,a);a=Math.sqrt(a*a+d*d);b=b.$();void 0!==this.f&&(d=c-this.f,lg(b,b.Sa()-d));this.f=c;void 0!==this.a&&(c=this.a*(b.Ra()/a),ng(b,c));void 0!==this.a&&(this.j=this.a/a);this.a=a}}
function Us(a){if(!yg(a))return!0;a=a.map.$();$f(a,1,-1);var b=this.j-1,c=a.Sa(),c=a.constrainRotation(c,0);lg(a,c,void 0,void 0);var c=a.Ra(),d=this.u,c=a.constrainResolution(c,0,b);ng(a,c,void 0,d);this.j=0;return!1}function Ss(a){return yg(a)&&this.o(a)?($f(a.map.$(),1,1),this.a=this.f=void 0,!0):!1};function Vs(a,b,c,d){this.na=a;this.T=b;this.overlaps=d;this.c=0;this.resolution=c;this.I=this.ta=null;this.a=[];this.coordinates=[];this.ea=yh();this.b=[];this.qa=null;this.mb=yh();this.fa=yh()}u(Vs,Th);
function Ws(a,b,c,d,e,f,g){var h=a.coordinates.length,l=a.Nf();g&&(c+=e);g=[b[c],b[c+1]];var m=[NaN,NaN],n=!0,p,q,r;for(p=c+e;p<d;p+=e)m[0]=b[p],m[1]=b[p+1],r=Va(l,m),r!==q?(n&&(a.coordinates[h++]=g[0],a.coordinates[h++]=g[1]),a.coordinates[h++]=m[0],a.coordinates[h++]=m[1],n=!1):1===r?(a.coordinates[h++]=m[0],a.coordinates[h++]=m[1],n=!1):n=!0,g[0]=m[0],g[1]=m[1],q=r;if(f&&n||p===c+e)a.coordinates[h++]=g[0],a.coordinates[h++]=g[1];return h}
function Xs(a,b){a.ta=[0,b,0];a.a.push(a.ta);a.I=[0,b,0];a.b.push(a.I)}Vs.prototype.Wa=function(a,b){if(this.$a){var c=Dh(this.ea,this.$a.slice());a.translate(c[0],c[1]);a.rotate(b)}a.fill();this.$a&&a.setTransform.apply(a,this.fa)};
function Ys(a,b,c,d,e,f,g,h,l){var m;a.qa&&ja(d,a.ea)?m=a.qa:(a.qa||(a.qa=[]),m=mf(a.coordinates,0,a.coordinates.length,2,d,a.qa),Ch(a.ea,d));d=!tb(f);for(var n=0,p=g.length,q=0,r,v=a.mb,x=a.fa,y,A,B,aa,Ra=0,ra=0,Ka=a.a!=g||a.overlaps?0:200;n<p;){var C=g[n],Na,wb,Z,Ta;switch(C[0]){case 0:q=C[1];d&&f[w(q).toString()]||!q.U()?n=C[2]:void 0===l||nb(l,q.U().D())?++n:n=C[2]+1;break;case 1:Ra>Ka&&(a.Wa(b,e),Ra=0);ra>Ka&&(b.stroke(),ra=0);Ra||ra||(b.beginPath(),y=A=NaN);++n;break;case 2:q=C[1];r=m[q];C=
m[q+1];B=m[q+2]-r;q=m[q+3]-C;q=Math.sqrt(B*B+q*q);b.moveTo(r+q,C);b.arc(r,C,q,0,2*Math.PI,!0);++n;break;case 3:b.closePath();++n;break;case 4:q=C[1];r=C[2];Na=C[3];wb=C[4]*c;Z=C[5]*c;var Pb=C[6],cc=C[7],$c=C[8],re=C[9];Ta=C[10];B=C[11];aa=C[12];var Jd=C[13],ug=C[14];for(Ta&&(B+=e);q<r;q+=2){C=m[q]-wb;Ta=m[q+1]-Z;Jd&&(C=Math.round(C),Ta=Math.round(Ta));if(1!=aa||B){var bf=C+wb,mh=Ta+Z;Hh(v,bf,mh,aa,aa,B,-bf,-mh);b.setTransform.apply(b,v)}bf=b.globalAlpha;1!=cc&&(b.globalAlpha=bf*cc);var mh=ug+$c>Na.width?
Na.width-$c:ug,sq=Pb+re>Na.height?Na.height-re:Pb;b.drawImage(Na,$c,re,mh,sq,C,Ta,mh*c,sq*c);1!=cc&&(b.globalAlpha=bf);(1!=aa||B)&&b.setTransform.apply(b,x)}++n;break;case 5:q=C[1];r=C[2];Z=C[3];Pb=C[4]*c;cc=C[5]*c;B=C[6];aa=C[7]*c;Na=C[8];wb=C[9];for((Ta=C[10])&&(B+=e);q<r;q+=2){C=m[q]+Pb;Ta=m[q+1]+cc;if(1!=aa||B)Hh(v,C,Ta,aa,aa,B,-C,-Ta),b.setTransform.apply(b,v);$c=Z.split("\n");re=$c.length;1<re?(Jd=Math.round(1.5*b.measureText("M").width),Ta-=(re-1)/2*Jd):Jd=0;for(ug=0;ug<re;ug++)bf=$c[ug],wb&&
b.strokeText(bf,C,Ta),Na&&b.fillText(bf,C,Ta),Ta+=Jd;(1!=aa||B)&&b.setTransform.apply(b,x)}++n;break;case 6:if(h&&(q=C[1],q=h(q)))return q;++n;break;case 7:Ka?Ra++:a.Wa(b,e);++n;break;case 8:q=C[1];r=C[2];C=m[q];Ta=m[q+1];B=C+.5|0;aa=Ta+.5|0;if(B!==y||aa!==A)b.moveTo(C,Ta),y=B,A=aa;for(q+=2;q<r;q+=2)if(C=m[q],Ta=m[q+1],B=C+.5|0,aa=Ta+.5|0,q==r-2||B!==y||aa!==A)b.lineTo(C,Ta),y=B,A=aa;++n;break;case 9:a.$a=C[2];Ra&&(a.Wa(b,e),Ra=0,ra&&(b.stroke(),ra=0));b.fillStyle=C[1];++n;break;case 10:var q=void 0!==
C[8]?C[8]:!0,jl=C[9];r=C[2];ra&&(b.stroke(),ra=0);b.strokeStyle=C[1];b.lineWidth=q?r*c:r;b.lineCap=C[3];b.lineJoin=C[4];b.miterLimit=C[5];Ud&&(r=C[6],B=C[7],q&&c!==jl&&(r=r.map(function(a){return a*c/jl}),B*=c/jl,C[6]=r,C[7]=B,C[9]=c),b.lineDashOffset=B,b.setLineDash(r));++n;break;case 11:b.font=C[1];b.textAlign=C[2];b.textBaseline=C[3];++n;break;case 12:Ka?ra++:b.stroke();++n;break;default:++n}}Ra&&a.Wa(b,e);ra&&b.stroke()}Vs.prototype.i=function(a,b,c,d,e){Ys(this,a,b,c,d,e,this.a,void 0,void 0)};
function Zs(a){var b=a.b;b.reverse();var c,d=b.length,e,f,g=-1;for(c=0;c<d;++c)if(e=b[c],f=e[0],6==f)g=c;else if(0==f){e[2]=c;e=a.b;for(f=c;g<f;){var h=e[g];e[g]=e[f];e[f]=h;++g;--f}g=-1}}function $s(a,b){a.ta[2]=a.a.length;a.ta=null;a.I[2]=a.b.length;a.I=null;var c=[6,b];a.a.push(c);a.b.push(c)}Vs.prototype.Se=oa;Vs.prototype.Nf=function(){return this.T};function at(a,b,c,d){Vs.call(this,a,b,c,d);this.N=this.Z=null;this.G=this.C=this.A=this.O=this.v=this.u=this.o=this.l=this.j=this.f=this.g=void 0}u(at,Vs);
at.prototype.sc=function(a,b){if(this.N){Xs(this,b);var c=a.ia(),d=this.coordinates.length,c=Ws(this,c,0,c.length,a.sa(),!1,!1);this.a.push([4,d,c,this.N,this.g,this.f,this.j,this.l,this.o,this.u,this.v,this.O,this.A,this.C,this.G]);this.b.push([4,d,c,this.Z,this.g,this.f,this.j,this.l,this.o,this.u,this.v,this.O,this.A,this.C,this.G]);$s(this,b)}};
at.prototype.qc=function(a,b){if(this.N){Xs(this,b);var c=a.ia(),d=this.coordinates.length,c=Ws(this,c,0,c.length,a.sa(),!1,!1);this.a.push([4,d,c,this.N,this.g,this.f,this.j,this.l,this.o,this.u,this.v,this.O,this.A,this.C,this.G]);this.b.push([4,d,c,this.Z,this.g,this.f,this.j,this.l,this.o,this.u,this.v,this.O,this.A,this.C,this.G]);$s(this,b)}};at.prototype.Se=function(){Zs(this);this.f=this.g=void 0;this.N=this.Z=null;this.G=this.C=this.O=this.v=this.u=this.o=this.l=this.A=this.j=void 0};
at.prototype.Wb=function(a){var b=a.Jc(),c=a.kc(),d=a.kg(1),e=a.Y(1),f=a.Tc();this.g=b[0];this.f=b[1];this.Z=d;this.N=e;this.j=c[1];this.l=a.f;this.o=f[0];this.u=f[1];this.v=a.o;this.O=a.j;this.A=a.c;this.C=a.u;this.G=c[0]};function bt(a,b,c,d){Vs.call(this,a,b,c,d);this.f=null;this.g={Nd:void 0,Hd:void 0,Id:null,Jd:void 0,Kd:void 0,Ld:void 0,Md:void 0,$f:0,strokeStyle:void 0,lineCap:void 0,lineDash:null,lineDashOffset:void 0,lineJoin:void 0,lineWidth:void 0,miterLimit:void 0}}u(bt,Vs);function ct(a,b,c,d,e){var f=a.coordinates.length;b=Ws(a,b,c,d,e,!1,!1);f=[8,f,b];a.a.push(f);a.b.push(f);return d}k=bt.prototype;k.Nf=function(){this.f||(this.f=Oa(this.T),0<this.c&&Ma(this.f,this.resolution*(this.c+1)/2,this.f));return this.f};
function dt(a){var b=a.g,c=b.strokeStyle,d=b.lineCap,e=b.lineDash,f=b.lineDashOffset,g=b.lineJoin,h=b.lineWidth,l=b.miterLimit;b.Nd==c&&b.Hd==d&&ja(b.Id,e)&&b.Jd==f&&b.Kd==g&&b.Ld==h&&b.Md==l||(b.$f!=a.coordinates.length&&(a.a.push([12]),b.$f=a.coordinates.length),a.a.push([10,c,h,d,g,l,e,f,!0,1],[1]),b.Nd=c,b.Hd=d,b.Id=e,b.Jd=f,b.Kd=g,b.Ld=h,b.Md=l)}
k.Rb=function(a,b){var c=this.g,d=c.lineWidth;void 0!==c.strokeStyle&&void 0!==d&&(dt(this),Xs(this,b),this.b.push([10,c.strokeStyle,c.lineWidth,c.lineCap,c.lineJoin,c.miterLimit,c.lineDash,c.lineDashOffset,!0,1],[1]),c=a.ia(),ct(this,c,0,c.length,a.sa()),this.b.push([12]),$s(this,b))};
k.pc=function(a,b){var c=this.g,d=c.lineWidth;if(void 0!==c.strokeStyle&&void 0!==d){dt(this);Xs(this,b);this.b.push([10,c.strokeStyle,c.lineWidth,c.lineCap,c.lineJoin,c.miterLimit,c.lineDash,c.lineDashOffset,!0,1],[1]);var c=a.Sb(),d=a.ia(),e=a.sa(),f=0,g,h;g=0;for(h=c.length;g<h;++g)f=ct(this,d,f,c[g],e);this.b.push([12]);$s(this,b)}};k.Se=function(){this.g.$f!=this.coordinates.length&&this.a.push([12]);Zs(this);this.g=null};
k.Na=function(a,b){var c=b.a;this.g.strokeStyle=fd(c?c:Rh);c=b.i;this.g.lineCap=void 0!==c?c:"round";c=b.g;this.g.lineDash=c?c:Qh;c=b.f;this.g.lineDashOffset=c?c:0;c=b.j;this.g.lineJoin=void 0!==c?c:"round";c=b.c;this.g.lineWidth=void 0!==c?c:1;c=b.l;this.g.miterLimit=void 0!==c?c:10;this.g.lineWidth>this.c&&(this.c=this.g.lineWidth,this.f=null)};function et(a,b,c,d){Vs.call(this,a,b,c,d);this.f=null;this.g={gh:void 0,Nd:void 0,Hd:void 0,Id:null,Jd:void 0,Kd:void 0,Ld:void 0,Md:void 0,fillStyle:void 0,strokeStyle:void 0,lineCap:void 0,lineDash:null,lineDashOffset:void 0,lineJoin:void 0,lineWidth:void 0,miterLimit:void 0}}u(et,Vs);
function ft(a,b,c,d,e){var f=a.g,g=void 0!==f.fillStyle,f=void 0!=f.strokeStyle,h=d.length,l=[1];a.a.push(l);a.b.push(l);for(l=0;l<h;++l){var m=d[l],n=a.coordinates.length;c=Ws(a,b,c,m,e,!0,!f);c=[8,n,c];a.a.push(c);a.b.push(c);f&&(c=[3],a.a.push(c),a.b.push(c));c=m}b=[7];a.b.push(b);g&&a.a.push(b);f&&(g=[12],a.a.push(g),a.b.push(g));return c}k=et.prototype;
k.ac=function(a,b){var c=this.g,d=c.strokeStyle;if(void 0!==c.fillStyle||void 0!==d){gt(this,a);Xs(this,b);this.b.push([9,dd(Ph)]);void 0!==c.strokeStyle&&this.b.push([10,c.strokeStyle,c.lineWidth,c.lineCap,c.lineJoin,c.miterLimit,c.lineDash,c.lineDashOffset,!0,1]);var e=a.ia(),d=this.coordinates.length;Ws(this,e,0,e.length,a.sa(),!1,!1);e=[1];d=[2,d];this.a.push(e,d);this.b.push(e,d);d=[7];this.b.push(d);void 0!==c.fillStyle&&this.a.push(d);void 0!==c.strokeStyle&&(c=[12],this.a.push(c),this.b.push(c));
$s(this,b)}};k.tc=function(a,b){var c=this.g;gt(this,a);Xs(this,b);this.b.push([9,dd(Ph)]);void 0!==c.strokeStyle&&this.b.push([10,c.strokeStyle,c.lineWidth,c.lineCap,c.lineJoin,c.miterLimit,c.lineDash,c.lineDashOffset,!0,1]);var c=a.Sb(),d=a.gc();ft(this,d,0,c,a.sa());$s(this,b)};
k.rc=function(a,b){var c=this.g,d=c.strokeStyle;if(void 0!==c.fillStyle||void 0!==d){gt(this,a);Xs(this,b);this.b.push([9,dd(Ph)]);void 0!==c.strokeStyle&&this.b.push([10,c.strokeStyle,c.lineWidth,c.lineCap,c.lineJoin,c.miterLimit,c.lineDash,c.lineDashOffset,!0,1]);var c=a.c,d=ci(a),e=a.sa(),f=0,g,h;g=0;for(h=c.length;g<h;++g)f=ft(this,d,f,c[g],e);$s(this,b)}};k.Se=function(){Zs(this);this.g=null;var a=this.na;if(a){var b=this.coordinates,c,d;c=0;for(d=b.length;c<d;++c)b[c]=a*Math.round(b[c]/a)}};
k.Nf=function(){this.f||(this.f=Oa(this.T),0<this.c&&Ma(this.f,this.resolution*(this.c+1)/2,this.f));return this.f};
k.Na=function(a,b){var c=this.g;if(a){var d=a.b;c.fillStyle=fd(d?d:Ph)}else c.fillStyle=void 0;b?(d=b.a,c.strokeStyle=fd(d?d:Rh),d=b.i,c.lineCap=void 0!==d?d:"round",d=b.g,c.lineDash=d?d.slice():Qh,d=b.f,c.lineDashOffset=d?d:0,d=b.j,c.lineJoin=void 0!==d?d:"round",d=b.c,c.lineWidth=void 0!==d?d:1,d=b.l,c.miterLimit=void 0!==d?d:10,c.lineWidth>this.c&&(this.c=c.lineWidth,this.f=null)):(c.strokeStyle=void 0,c.lineCap=void 0,c.lineDash=null,c.lineDashOffset=void 0,c.lineJoin=void 0,c.lineWidth=void 0,
c.miterLimit=void 0)};function gt(a,b){var c=a.g,d=c.fillStyle,e=c.strokeStyle,f=c.lineCap,g=c.lineDash,h=c.lineDashOffset,l=c.lineJoin,m=c.lineWidth,n=c.miterLimit;if(void 0!==d&&("string"!==typeof d||c.gh!=d)){var p=[9,d];"string"!==typeof d&&(d=b.D(),p.push([d[0],d[3]]));a.a.push(p);c.gh=c.fillStyle}void 0===e||c.Nd==e&&c.Hd==f&&ja(c.Id,g)&&c.Jd==h&&c.Kd==l&&c.Ld==m&&c.Md==n||(a.a.push([10,e,m,f,l,n,g,h,!0,1]),c.Nd=e,c.Hd=f,c.Id=g,c.Jd=h,c.Kd=l,c.Ld=m,c.Md=n)};function ht(a,b,c,d){Vs.call(this,a,b,c,d);this.G=this.C=this.A=null;this.Fa="";this.o=this.l=0;this.u=void 0;this.O=this.v=0;this.j=this.f=this.g=null}u(ht,Vs);
ht.prototype.Ac=function(a,b,c,d,e,f){if(""!==this.Fa&&this.j&&(this.g||this.f)){if(this.g){e=this.g;var g=this.A;if(!g||g.fillStyle!=e.fillStyle){var h=[9,e.fillStyle];this.a.push(h);this.b.push(h);g?g.fillStyle=e.fillStyle:this.A={fillStyle:e.fillStyle}}}this.f&&(e=this.f,g=this.C,g&&g.lineCap==e.lineCap&&g.lineDash==e.lineDash&&g.lineDashOffset==e.lineDashOffset&&g.lineJoin==e.lineJoin&&g.lineWidth==e.lineWidth&&g.miterLimit==e.miterLimit&&g.strokeStyle==e.strokeStyle||(h=[10,e.strokeStyle,e.lineWidth,
e.lineCap,e.lineJoin,e.miterLimit,e.lineDash,e.lineDashOffset,!1,1],this.a.push(h),this.b.push(h),g?(g.lineCap=e.lineCap,g.lineDash=e.lineDash,g.lineDashOffset=e.lineDashOffset,g.lineJoin=e.lineJoin,g.lineWidth=e.lineWidth,g.miterLimit=e.miterLimit,g.strokeStyle=e.strokeStyle):this.C={lineCap:e.lineCap,lineDash:e.lineDash,lineDashOffset:e.lineDashOffset,lineJoin:e.lineJoin,lineWidth:e.lineWidth,miterLimit:e.miterLimit,strokeStyle:e.strokeStyle}));e=this.j;g=this.G;g&&g.font==e.font&&g.textAlign==
e.textAlign&&g.textBaseline==e.textBaseline||(h=[11,e.font,e.textAlign,e.textBaseline],this.a.push(h),this.b.push(h),g?(g.font=e.font,g.textAlign=e.textAlign,g.textBaseline=e.textBaseline):this.G={font:e.font,textAlign:e.textAlign,textBaseline:e.textBaseline});Xs(this,f);e=this.coordinates.length;a=Ws(this,a,b,c,d,!1,!1);a=[5,e,a,this.Fa,this.l,this.o,this.v,this.O,!!this.g,!!this.f,this.u];this.a.push(a);this.b.push(a);$s(this,f)}};
ht.prototype.Ub=function(a){if(a){var b=a.Ca();b?(b=b.b,b=fd(b?b:Ph),this.g?this.g.fillStyle=b:this.g={fillStyle:b}):this.g=null;var c=a.Da();if(c){var b=c.a,d=c.i,e=c.g,f=c.f,g=c.j,h=c.c,c=c.l,d=void 0!==d?d:"round",e=e?e.slice():Qh,f=void 0!==f?f:0,g=void 0!==g?g:"round",h=void 0!==h?h:1,c=void 0!==c?c:10,b=fd(b?b:Rh);if(this.f){var l=this.f;l.lineCap=d;l.lineDash=e;l.lineDashOffset=f;l.lineJoin=g;l.lineWidth=h;l.miterLimit=c;l.strokeStyle=b}else this.f={lineCap:d,lineDash:e,lineDashOffset:f,lineJoin:g,
lineWidth:h,miterLimit:c,strokeStyle:b}}else this.f=null;var m=a.a,b=a.g,d=a.c,e=a.l,h=a.i,c=a.b,f=a.Oa(),g=a.f,l=a.j;a=void 0!==m?m:"10px sans-serif";g=void 0!==g?g:"center";l=void 0!==l?l:"middle";this.j?(m=this.j,m.font=a,m.textAlign=g,m.textBaseline=l):this.j={font:a,textAlign:g,textBaseline:l};this.Fa=void 0!==f?f:"";this.l=void 0!==b?b:0;this.o=void 0!==d?d:0;this.u=void 0!==e?e:!1;this.v=void 0!==h?h:0;this.O=void 0!==c?c:1}else this.Fa=""};function it(a,b,c,d,e){this.v=a;this.c=b;this.o=d;this.u=c;this.f=e;this.a={};this.j=hd(1,1);this.l=yh()}u(it,hi);var jt={0:[[!0]]};function kt(a,b,c){var d,e=Math.floor(a.length/2);if(b>=e)for(d=e;d<b;d++)a[d][c]=!0;else if(b<e)for(d=b+1;d<e;d++)a[d][c]=!0}
function lt(a){if(void 0!==jt[a])return jt[a];for(var b=2*a+1,c=Array(b),d=0;d<b;d++)c[d]=Array(b);for(var b=a,e=d=0;b>=d;)kt(c,a+b,a+d),kt(c,a+d,a+b),kt(c,a-d,a+b),kt(c,a-b,a+d),kt(c,a-b,a-d),kt(c,a-d,a-b),kt(c,a+d,a-b),kt(c,a+b,a-d),d++,e+=1+2*d,0<2*(e-b)+1&&(--b,e+=1-2*b);return jt[a]=c}function mt(a){for(var b in a.a){var c=a.a[b],d;for(d in c)c[d].Se()}}
it.prototype.Ba=function(a,b,c,d,e,f){d=Math.round(d);var g=2*d+1,h=Hh(this.l,d+.5,d+.5,1/b,-1/b,-c,-a[0],-a[1]),l=this.j;l.canvas.width!==g||l.canvas.height!==g?(l.canvas.width=g,l.canvas.height=g):l.clearRect(0,0,g,g);var m;void 0!==this.f&&(m=Ja(),La(m,a),Ma(m,b*(this.f+d),m));var n=lt(d);return nt(this,l,h,c,e,function(a){for(var b=l.getImageData(0,0,g,g).data,c=0;c<g;c++)for(var d=0;d<g;d++)if(n[c][d]&&0<b[4*(d*g+c)+3]){if(a=f(a))return a;l.clearRect(0,0,g,g);return}},m)};
function ot(a,b){var c=a.c,d=c[0],e=c[1],f=c[2],c=c[3],d=[d,e,d,c,f,c,f,e];mf(d,0,8,2,b,d);return d}it.prototype.b=function(a,b){var c=void 0!==a?a.toString():"0",d=this.a[c];void 0===d&&(d={},this.a[c]=d);c=d[b];void 0===c&&(c=new pt[b](this.v,this.c,this.u,this.o),d[b]=c);return c};it.prototype.g=function(){return tb(this.a)};
it.prototype.i=function(a,b,c,d,e,f){var g=Object.keys(this.a).map(Number);g.sort(ea);var h=ot(this,c);a.save();a.beginPath();a.moveTo(h[0],h[1]);a.lineTo(h[2],h[3]);a.lineTo(h[4],h[5]);a.lineTo(h[6],h[7]);a.clip();f=f?f:gi;var l,m,n,p,q,h=0;for(l=g.length;h<l;++h)for(p=this.a[g[h].toString()],m=0,n=f.length;m<n;++m)q=p[f[m]],void 0!==q&&q.i(a,b,c,d,e);a.restore()};
function nt(a,b,c,d,e,f,g){var h=Object.keys(a.a).map(Number);h.sort(function(a,b){return b-a});var l,m,n,p,q;l=0;for(m=h.length;l<m;++l)for(p=a.a[h[l].toString()],n=gi.length-1;0<=n;--n)if(q=p[gi[n]],void 0!==q&&(q=Ys(q,b,1,c,d,e,q.b,f,g)))return q}var pt={Circle:et,Image:at,LineString:bt,Polygon:et,Text:ht};function qt(a){Pc.call(this);this.a=a}u(qt,Pc);qt.prototype.Ba=oa;qt.prototype.Te=kf;qt.prototype.Jf=function(a,b,c){return function(d,e){return rt(a,b,d,e,function(a){c[d]||(c[d]={});c[d][a.Ga.toString()]=a})}};qt.prototype.ea=function(a){2===a.target.V()&&st(this)};function tt(a,b){var c=b.V();2!=c&&3!=c&&z(b,"change",a.ea,a);0==c&&(b.load(),c=b.V());return 2==c}function st(a){var b=a.a;b.Lb()&&"ready"==b.Vf()&&a.s()}
function ut(a,b){b.Ei()&&a.postRenderFunctions.push(function(a,b,e){b=w(a).toString();a.ld(e.viewState.projection,e.usedTiles[b])}.bind(null,b))}function vt(a,b){if(b){var c,d,e;d=0;for(e=b.length;d<e;++d)c=b[d],a[w(c).toString()]=c}}function wt(a,b){var c=b.Z;void 0!==c&&("string"===typeof c?a.logos[c]="":c&&(sa("string"==typeof c.href,44),sa("string"==typeof c.src,45),a.logos[c.src]=c.href))}
function xt(a,b,c,d){b=w(b).toString();c=c.toString();b in a?c in a[b]?(a=a[b][c],d.da<a.da&&(a.da=d.da),d.ba>a.ba&&(a.ba=d.ba),d.ga<a.ga&&(a.ga=d.ga),d.ja>a.ja&&(a.ja=d.ja)):a[b][c]=d:(a[b]={},a[b][c]=d)}
function yt(a,b,c,d,e,f,g,h,l,m){var n=w(b).toString();n in a.wantedTiles||(a.wantedTiles[n]={});var p=a.wantedTiles[n];a=a.tileQueue;var q=c.minZoom,r,v,x,y,A,B;for(B=g;B>=q;--B)for(v=nc(c,f,B,v),x=c.La(B),y=v.da;y<=v.ba;++y)for(A=v.ga;A<=v.ja;++A)g-B<=h?(r=b.Pc(B,y,A,d,e),0==r.V()&&(p[r.hb()]=!0,r.hb()in a.a||a.i([r,n,sc(c,r.Ga),x])),l&&l.call(m,r)):b.Mg(B,y,A,e)};function zt(a){qt.call(this,a);this.fa=yh()}u(zt,qt);function At(a,b,c){var d=b.pixelRatio,e=b.size[0]*d,f=b.size[1]*d,g=b.viewState.rotation,h=fb(c),l=eb(c),m=db(c);c=cb(c);Dh(b.coordinateToPixelTransform,h);Dh(b.coordinateToPixelTransform,l);Dh(b.coordinateToPixelTransform,m);Dh(b.coordinateToPixelTransform,c);a.save();Sh(a,-g,e/2,f/2);a.beginPath();a.moveTo(h[0]*d,h[1]*d);a.lineTo(l[0]*d,l[1]*d);a.lineTo(m[0]*d,m[1]*d);a.lineTo(c[0]*d,c[1]*d);a.clip();Sh(a,g,e/2,f/2)}
function Bt(a,b,c,d,e){var f=a.a;if(Oc(f,b)){var g=d.size[0]*d.pixelRatio,h=d.size[1]*d.pixelRatio,l=d.viewState.rotation;Sh(c,-l,g/2,h/2);a=e?e:Ct(a,d,0);f.b(new Oh(b,new Uh(c,d.pixelRatio,d.extent,a,d.viewState.rotation),d,c,null));Sh(c,l,g/2,h/2)}}zt.prototype.v=function(a,b,c,d){if(this.Ba(a,b,0,jf,this))return c.call(d,this.a,null)};zt.prototype.cf=function(a,b,c,d){Bt(this,"postcompose",a,b,d)};
function Ct(a,b,c){var d=b.viewState,e=b.pixelRatio,f=e/d.resolution;return Hh(a.fa,e*b.size[0]/2,e*b.size[1]/2,f,-f,-d.rotation,-d.center[0]+c,-d.center[1])};function Dt(a,b){return w(a)-w(b)}function Et(a,b){var c=.5*a/b;return c*c}function Ft(a,b,c,d,e,f){var g=!1,h,l;if(h=c.Y())l=h.Xe(),2==l||3==l?h.xj(e,f):(0==l&&h.load(),h.Gh(e,f),g=!0);if(e=(0,c.Qa)(b))d=e.Td(d),(0,Gt[d.S()])(a,d,c,b);return g}
var Gt={Point:function(a,b,c,d){var e=c.Y();if(e){if(2!=e.Xe())return;var f=a.b(c.Aa(),"Image");f.Wb(e);f.sc(b,d)}if(e=c.Oa())a=a.b(c.Aa(),"Text"),a.Ub(e),a.Ac(b.ia(),0,2,2,b,d)},LineString:function(a,b,c,d){var e=c.Da();if(e){var f=a.b(c.Aa(),"LineString");f.Na(null,e);f.Rb(b,d)}if(e=c.Oa())a=a.b(c.Aa(),"Text"),a.Ub(e),a.Ac(ai(b),0,2,2,b,d)},Polygon:function(a,b,c,d){var e=c.Ca(),f=c.Da();if(e||f){var g=a.b(c.Aa(),"Polygon");g.Na(e,f);g.tc(b,d)}if(e=c.Oa())a=a.b(c.Aa(),"Text"),a.Ub(e),a.Ac(Tf(b),
0,2,2,b,d)},MultiPoint:function(a,b,c,d){var e=c.Y();if(e){if(2!=e.Xe())return;var f=a.b(c.Aa(),"Image");f.Wb(e);f.qc(b,d)}if(e=c.Oa())a=a.b(c.Aa(),"Text"),a.Ub(e),c=b.ia(),a.Ac(c,0,c.length,b.sa(),b,d)},MultiLineString:function(a,b,c,d){var e=c.Da();if(e){var f=a.b(c.Aa(),"LineString");f.Na(null,e);f.pc(b,d)}if(e=c.Oa())a=a.b(c.Aa(),"Text"),a.Ub(e),c=bi(b),a.Ac(c,0,c.length,2,b,d)},MultiPolygon:function(a,b,c,d){var e=c.Ca(),f=c.Da();if(f||e){var g=a.b(c.Aa(),"Polygon");g.Na(e,f);g.rc(b,d)}if(e=
c.Oa())a=a.b(c.Aa(),"Text"),a.Ub(e),c=di(b),a.Ac(c,0,c.length,2,b,d)},GeometryCollection:function(a,b,c,d){b=b.a;var e,f;e=0;for(f=b.length;e<f;++e)(0,Gt[b[e].S()])(a,b[e],c,d)},Circle:function(a,b,c,d){var e=c.Ca(),f=c.Da();if(e||f){var g=a.b(c.Aa(),"Circle");g.Na(e,f);g.ac(b,d)}if(e=c.Oa())a=a.b(c.Aa(),"Text"),a.Ub(e),a.Ac(b.za(),0,2,2,b,d)}};function Ht(a){zt.call(this,a);this.c=!1;this.u=-1;this.o=NaN;this.j=Ja();this.i=this.l=null;this.f=hd()}u(Ht,zt);
Ht.prototype.O=function(a,b,c){var d=a.extent,e=a.pixelRatio,f=b.Ie?a.skippedFeatureUids:{},g=a.viewState,h=g.projection,g=g.rotation,l=h.D(),m=this.a.ka(),n=Ct(this,a,0);Bt(this,"precompose",c,a,n);var p=b.extent,q=void 0!==p;q&&At(c,a,p);if((p=this.i)&&!p.g()){var r=0,v=0,x;if(Oc(this.a,"render")){x=c.canvas.width;var y=c.canvas.height;if(g){var A=Math.round(Math.sqrt(x*x+y*y)),r=(A-x)/2,v=(A-y)/2;x=y=A}this.f.canvas.width=x;this.f.canvas.height=y;x=this.f}else x=c;y=x.globalAlpha;x.globalAlpha=
b.opacity;x!=c&&x.translate(r,v);var A=a.size[0]*e,B=a.size[1]*e;Sh(x,-g,A/2,B/2);p.i(x,e,n,g,f);if(m.G&&h.a&&!Ua(l,d)){for(var h=d[0],m=ib(l),aa=0;h<l[0];)--aa,n=m*aa,n=Ct(this,a,n),p.i(x,e,n,g,f),h+=m;aa=0;for(h=d[2];h>l[2];)++aa,n=m*aa,n=Ct(this,a,n),p.i(x,e,n,g,f),h-=m;n=Ct(this,a,0)}Sh(x,g,A/2,B/2);x!=c&&(Bt(this,"render",x,a,n),c.drawImage(x.canvas,-r,-v),x.translate(-r,-v));x.globalAlpha=y}q&&c.restore();this.cf(c,a,b,n)};
Ht.prototype.Ba=function(a,b,c,d,e){if(this.i){var f=this.a,g={};return this.i.Ba(a,b.viewState.resolution,b.viewState.rotation,c,{},function(a){var b=w(a).toString();if(!(b in g))return g[b]=!0,d.call(e,a,f)})}};Ht.prototype.A=function(){st(this)};
Ht.prototype.ud=function(a){function b(a){var b,d=a.Rc();d?b=d.call(a,m):(d=c.i)&&(b=d(a,m));if(b){if(b){d=!1;if(Array.isArray(b))for(var e=0,f=b.length;e<f;++e)d=Ft(q,a,b[e],Et(m,n),this.A,this)||d;else d=Ft(q,a,b,Et(m,n),this.A,this)||d;a=d}else a=!1;this.c=this.c||a}}var c=this.a,d=c.ka();vt(a.attributions,d.j);wt(a,d);var e=a.viewHints[0],f=a.viewHints[1],g=c.ea,h=c.fa;if(!this.c&&!g&&e||!h&&f)return!0;var l=a.extent,h=a.viewState,e=h.projection,m=h.resolution,n=a.pixelRatio,f=c.g,p=c.c,g=c.get(It);
void 0===g&&(g=Dt);l=Ma(l,p*m);p=h.projection.D();d.G&&h.projection.a&&!Ua(p,a.extent)&&(a=Math.max(ib(l)/2,ib(p)),l[0]=p[0]-a,l[2]=p[2]+a);if(!this.c&&this.o==m&&this.u==f&&this.l==g&&Ua(this.j,l))return!0;this.i=null;this.c=!1;var q=new it(.5*m/n,l,m,d.Ha,c.c);d.Xd(l,m,e);if(g){var r=[];d.bc(l,function(a){r.push(a)},this);r.sort(g);r.forEach(b,this)}else d.bc(l,b,this);mt(q);this.o=m;this.u=f;this.l=g;this.j=l;this.i=q;return!0};function Jt(){this.b="precision mediump float;varying vec2 a;uniform float f;uniform sampler2D g;void main(void){vec4 texColor=texture2D(g,a);gl_FragColor.rgb=texColor.rgb;gl_FragColor.a=texColor.a*f;}"}u(Jt,ji);var Kt=new Jt;function Lt(){this.b="varying vec2 a;attribute vec2 b;attribute vec2 c;uniform mat4 d;uniform mat4 e;void main(void){gl_Position=e*vec4(b,0.,1.);a=(d*vec4(c,0.,1.)).st;}"}u(Lt,ki);var Mt=new Lt;
function Nt(a,b){this.g=a.getUniformLocation(b,"f");this.c=a.getUniformLocation(b,"e");this.f=a.getUniformLocation(b,"d");this.i=a.getUniformLocation(b,"g");this.b=a.getAttribLocation(b,"b");this.a=a.getAttribLocation(b,"c")};function Ot(a,b){qt.call(this,b);this.c=a;this.T=new Ai([-1,-1,0,0,1,-1,1,0,-1,1,0,1,1,1,1,1]);this.f=this.Fb=null;this.j=void 0;this.u=yh();this.O=yh();this.C=qi();this.v=null}u(Ot,qt);
function Pt(a,b,c){var d=a.c.g;if(void 0===a.j||a.j!=c){b.postRenderFunctions.push(function(a,b,c){a.isContextLost()||(a.deleteFramebuffer(b),a.deleteTexture(c))}.bind(null,d,a.f,a.Fb));b=Ni(d,c,c);var e=d.createFramebuffer();d.bindFramebuffer(36160,e);d.framebufferTexture2D(36160,36064,3553,b,0);a.Fb=b;a.f=e;a.j=c}else d.bindFramebuffer(36160,a.f)}
Ot.prototype.zi=function(a,b,c){Qt(this,"precompose",c,a);ti(c,34962,this.T);var d=c.b,e=Ei(c,Kt,Mt),f;this.v?f=this.v:this.v=f=new Nt(d,e);c.Vc(e)&&(d.enableVertexAttribArray(f.b),d.vertexAttribPointer(f.b,2,5126,!1,16,0),d.enableVertexAttribArray(f.a),d.vertexAttribPointer(f.a,2,5126,!1,16,8),d.uniform1i(f.i,0));d.uniformMatrix4fv(f.f,!1,ri(this.C,this.u));d.uniformMatrix4fv(f.c,!1,ri(this.C,this.O));d.uniform1f(f.g,b.opacity);d.bindTexture(3553,this.Fb);d.drawArrays(5,0,4);Qt(this,"postcompose",
c,a)};function Qt(a,b,c,d){a=a.a;if(Oc(a,b)){var e=d.viewState;a.b(new Oh(b,new kk(c,e.center,e.resolution,e.rotation,d.size,d.extent,d.pixelRatio),d,null,c))}}Ot.prototype.hg=function(){this.f=this.Fb=null;this.j=void 0};function Rt(a,b){Ot.call(this,a,b);this.o=!1;this.Z=-1;this.I=NaN;this.A=Ja();this.l=this.i=this.G=null}u(Rt,Ot);k=Rt.prototype;k.zi=function(a,b,c){this.l=b;var d=a.viewState,e=this.i,f=a.size,g=a.pixelRatio,h=this.c.g;e&&!e.g()&&(h.enable(h.SCISSOR_TEST),h.scissor(0,0,f[0]*g,f[1]*g),e.i(c,d.center,d.resolution,d.rotation,f,g,b.opacity,b.Ie?a.skippedFeatureUids:{}),h.disable(h.SCISSOR_TEST))};k.ra=function(){var a=this.i;a&&(ek(a,this.c.i)(),this.i=null);Ot.prototype.ra.call(this)};
k.Ba=function(a,b,c,d,e){if(this.i&&this.l){c=b.viewState;var f=this.a,g={};return this.i.Ba(a,this.c.i,c.center,c.resolution,c.rotation,b.size,b.pixelRatio,this.l.opacity,{},function(a){var b=w(a).toString();if(!(b in g))return g[b]=!0,d.call(e,a,f)})}};k.Te=function(a,b){if(this.i&&this.l){var c=b.viewState;return jk(this.i,a,this.c.i,c.resolution,c.rotation,b.pixelRatio,this.l.opacity,b.skippedFeatureUids)}return!1};
k.gg=function(a,b,c,d){a=Dh(b.pixelToCoordinateTransform,a.slice());if(this.Te(a,b))return c.call(d,this.a,null)};k.Ai=function(){st(this)};
k.ig=function(a,b,c){function d(a){var b,c=a.Rc();c?b=c.call(a,m):(c=e.i)&&(b=c(a,m));if(b){if(b){c=!1;if(Array.isArray(b))for(var d=b.length-1;0<=d;--d)c=Ft(q,a,b[d],Et(m,n),this.Ai,this)||c;else c=Ft(q,a,b,Et(m,n),this.Ai,this)||c;a=c}else a=!1;this.o=this.o||a}}var e=this.a;b=e.ka();vt(a.attributions,b.j);wt(a,b);var f=a.viewHints[0],g=a.viewHints[1],h=e.ea,l=e.fa;if(!this.o&&!h&&f||!l&&g)return!0;var g=a.extent,h=a.viewState,f=h.projection,m=h.resolution,n=a.pixelRatio,h=e.g,p=e.c,l=e.get(It);
void 0===l&&(l=Dt);g=Ma(g,p*m);if(!this.o&&this.I==m&&this.Z==h&&this.G==l&&Ua(this.A,g))return!0;this.i&&a.postRenderFunctions.push(ek(this.i,c));this.o=!1;var q=new dk(.5*m/n,g,e.c);b.Xd(g,m,f);if(l){var r=[];b.bc(g,function(a){r.push(a)},this);r.sort(l);r.forEach(d,this)}else b.bc(g,d,this);fk(q,c);this.I=m;this.Z=h;this.G=l;this.A=g;this.i=q;return!0};function S(a){a=a?a:{};var b=qb({},a);delete b.style;delete b.renderBuffer;delete b.updateWhileAnimating;delete b.updateWhileInteracting;th.call(this,b);this.c=void 0!==a.renderBuffer?a.renderBuffer:100;this.A=null;this.i=void 0;this.f(a.style);this.ea=void 0!==a.updateWhileAnimating?a.updateWhileAnimating:!1;this.fa=void 0!==a.updateWhileInteracting?a.updateWhileInteracting:!1}u(S,th);S.prototype.Gd=function(a){var b=null,c=a.S();"canvas"===c?b=new Ht(this):"webgl"===c&&(b=new Rt(a,this));return b};
S.prototype.C=function(){return this.A};S.prototype.G=function(){return this.i};S.prototype.f=function(a){this.A=void 0!==a?a:fl;this.i=null===a?void 0:dl(this.A);this.s()};var It="renderOrder";function St(){return[[-Infinity,-Infinity,Infinity,Infinity]]};function Tt(a){Qc.call(this);this.c=Tb(a.projection);this.j=Ut(a.attributions);this.Z=a.logo;this.Ja=void 0!==a.state?a.state:"ready";this.G=void 0!==a.wrapX?a.wrapX:!1}u(Tt,Qc);function Ut(a){if("string"===typeof a)return[new xc({html:a})];if(a instanceof xc)return[a];if(Array.isArray(a)){for(var b=a.length,c=Array(b),d=0;d<b;d++){var e=a[d];c[d]="string"===typeof e?new xc({html:e}):e}return c}return null}k=Tt.prototype;k.Ba=oa;k.xa=function(){return this.j};k.wa=function(){return this.Z};k.ya=function(){return this.c};
k.V=function(){return this.Ja};k.va=function(){this.s()};k.ua=function(a){this.j=Ut(a);this.s()};function Vt(a,b){a.Ja=b;a.s()};function T(a){a=a||{};Tt.call(this,{attributions:a.attributions,logo:a.logo,projection:void 0,state:"ready",wrapX:void 0!==a.wrapX?a.wrapX:!0});this.ea=oa;this.T=a.format;this.Ha=void 0==a.overlaps?!0:a.overlaps;this.fa=a.url;a.loader?this.ea=a.loader:void 0!==this.fa&&(sa(this.T,7),this.ea=Dl(this.fa,this.T));this.Va=a.strategy?a.strategy:St;var b=void 0!==a.useSpatialIndex?a.useSpatialIndex:!0;this.a=b?new Gj:null;this.na=new Gj;this.f={};this.l={};this.o={};this.u={};this.i=null;var c,d;a.features instanceof
D?(c=a.features,d=c.a):Array.isArray(a.features)&&(d=a.features);b||c||(c=new D(d));d&&Wt(this,d);c&&Xt(this,c)}u(T,Tt);k=T.prototype;k.zb=function(a){var b=w(a).toString();if(Yt(this,b,a)){Zt(this,b,a);var c=a.U();c?(b=c.D(),this.a&&this.a.Ea(b,a)):this.f[b]=a;this.b(new $t("addfeature",a))}this.s()};function Zt(a,b,c){a.u[b]=[z(c,"change",a.Ii,a),z(c,"propertychange",a.Ii,a)]}
function Yt(a,b,c){var d=!0,e=c.a;void 0!==e?e.toString()in a.l?d=!1:a.l[e.toString()]=c:(sa(!(b in a.o),30),a.o[b]=c);return d}k.gd=function(a){Wt(this,a);this.s()};function Wt(a,b){var c,d,e,f,g=[],h=[],l=[];d=0;for(e=b.length;d<e;d++)f=b[d],c=w(f).toString(),Yt(a,c,f)&&h.push(f);d=0;for(e=h.length;d<e;d++){f=h[d];c=w(f).toString();Zt(a,c,f);var m=f.U();m?(c=m.D(),g.push(c),l.push(f)):a.f[c]=f}a.a&&a.a.load(g,l);d=0;for(e=h.length;d<e;d++)a.b(new $t("addfeature",h[d]))}
function Xt(a,b){var c=!1;z(a,"addfeature",function(a){c||(c=!0,b.push(a.feature),c=!1)});z(a,"removefeature",function(a){c||(c=!0,b.remove(a.feature),c=!1)});z(b,"add",function(a){c||(c=!0,this.zb(a.element),c=!1)},a);z(b,"remove",function(a){c||(c=!0,this.Db(a.element),c=!1)},a);a.i=b}
k.clear=function(a){if(a){for(var b in this.u)this.u[b].forEach(Bc);this.i||(this.u={},this.l={},this.o={})}else if(this.a){this.a.forEach(this.Cg,this);for(var c in this.f)this.Cg(this.f[c])}this.i&&this.i.clear();this.a&&this.a.clear();this.na.clear();this.f={};this.b(new $t("clear"));this.s()};k.kh=function(a,b){if(this.a)return this.a.forEach(a,b);if(this.i)return this.i.forEach(a,b)};function au(a,b,c){a.bc([b[0],b[1],b[0],b[1]],function(a){if(a.U().sb(b))return c.call(void 0,a)})}
k.bc=function(a,b,c){if(this.a)return Lj(this.a,a,b,c);if(this.i)return this.i.forEach(b,c)};k.lh=function(a,b,c){return this.bc(a,function(d){if(d.U().Ya(a)&&(d=b.call(c,d)))return d})};k.th=function(){return this.i};k.We=function(){var a;this.i?a=this.i.a:this.a&&(a=Ij(this.a),tb(this.f)||ha(a,sb(this.f)));return a};k.sh=function(a){var b=[];au(this,a,function(a){b.push(a)});return b};k.Pf=function(a){return Jj(this.a,a)};
k.oh=function(a,b){var c=a[0],d=a[1],e=null,f=[NaN,NaN],g=Infinity,h=[-Infinity,-Infinity,Infinity,Infinity],l=b?b:jf;Lj(this.a,h,function(a){if(l(a)){var b=a.U(),m=g;g=b.Hb(c,d,f,g);g<m&&(e=a,a=Math.sqrt(g),h[0]=c-a,h[1]=d-a,h[2]=c+a,h[3]=d+a)}});return e};k.D=function(a){return this.a.D(a)};k.rh=function(a){a=this.l[a.toString()];return void 0!==a?a:null};k.Gi=function(){return this.T};k.Hi=function(){return this.fa};
k.Ii=function(a){a=a.target;var b=w(a).toString(),c=a.U();c?(c=c.D(),b in this.f?(delete this.f[b],this.a&&this.a.Ea(c,a)):this.a&&Hj(this.a,c,a)):b in this.f||(this.a&&this.a.remove(a),this.f[b]=a);c=a.a;void 0!==c?(c=c.toString(),b in this.o?(delete this.o[b],this.l[c]=a):this.l[c]!==a&&(bu(this,a),this.l[c]=a)):b in this.o||(bu(this,a),this.o[b]=a);this.s();this.b(new $t("changefeature",a))};
k.Xd=function(a,b,c){var d=this.na;a=this.Va(a,b);var e,f;e=0;for(f=a.length;e<f;++e){var g=a[e];Lj(d,g,function(a){return Ua(a.extent,g)})||(this.ea.call(this,g,b,c),d.Ea(g,{extent:g.slice()}))}};k.Db=function(a){var b=w(a).toString();b in this.f?delete this.f[b]:this.a&&this.a.remove(a);this.Cg(a);this.s()};k.Cg=function(a){var b=w(a).toString();this.u[b].forEach(Bc);delete this.u[b];var c=a.a;void 0!==c?delete this.l[c.toString()]:delete this.o[b];this.b(new $t("removefeature",a))};
function bu(a,b){for(var c in a.l)if(a.l[c]===b){delete a.l[c];break}}function $t(a,b){Lc.call(this,a);this.feature=b}u($t,Lc);function cu(a){Ag.call(this,{handleDownEvent:du,handleEvent:eu,handleUpEvent:fu});this.T=!1;this.fa=null;this.u=!1;this.Gb=a.source?a.source:null;this.Va=a.features?a.features:null;this.sk=a.snapTolerance?a.snapTolerance:12;this.Z=a.type;this.f=gu(this.Z);this.Ha=a.minPoints?a.minPoints:this.f===hu?3:2;this.Ja=a.maxPoints?a.maxPoints:Infinity;this.yf=a.finishCondition?a.finishCondition:jf;var b=a.geometryFunction;if(!b)if("Circle"===this.Z)b=function(a,b){var c=b?b:new vs([NaN,NaN]);c.Gg(a[0],Math.sqrt(ef(a[0],
a[1])));return c};else{var c,d=this.f;d===iu?c=E:d===ju?c=N:d===hu&&(c=F);b=function(a,b){var e=b;e?d===hu?e.pa([a[0].concat([a[0][0]])]):e.pa(a):e=new c(a);return e}}this.Qa=b;this.I=this.C=this.a=this.G=this.j=this.o=null;this.le=a.clickTolerance?a.clickTolerance*a.clickTolerance:36;this.na=new S({source:new T({useSpatialIndex:!1,wrapX:a.wrapX?a.wrapX:!1}),style:a.style?a.style:ku()});this.yb=a.geometryName;this.rk=a.condition?a.condition:vg;this.zf=a.freehand?jf:a.freehandCondition?a.freehandCondition:
wg;z(this,Sc("active"),this.ji,this)}u(cu,Ag);function ku(){var a=gl();return function(b){return a[b.U().S()]}}k=cu.prototype;k.setMap=function(a){Ag.prototype.setMap.call(this,a);this.ji()};function eu(a){this.u=this.f!==iu&&this.zf(a);var b=!this.u;this.u&&"pointerdrag"===a.type&&null!==this.j?(lu(this,a),b=!1):"pointermove"===a.type?b=mu(this,a):"dblclick"===a.type&&(b=!1);return Bg.call(this,a)&&b}
function du(a){this.T=!this.u;return this.u?(this.fa=a.pixel,this.o||nu(this,a),!0):this.rk(a)?(this.fa=a.pixel,!0):!1}function fu(a){var b=!0;mu(this,a);var c=this.f===ou;this.T?(this.o?this.u||c?this.Qd():pu(this,a)?this.yf(a)&&this.Qd():lu(this,a):(nu(this,a),this.f===iu&&this.Qd()),b=!1):this.u&&(this.o=null,qu(this));return b}
function mu(a,b){if(a.fa&&(!a.u&&a.T||a.u&&!a.T)){var c=a.fa,d=b.pixel,e=c[0]-d[0],c=c[1]-d[1],e=e*e+c*c;a.T=a.u?e>a.le:e<=a.le}a.o?(e=b.coordinate,c=a.j.U(),a.f===iu?d=a.a:a.f===hu?(d=a.a[0],d=d[d.length-1],pu(a,b)&&(e=a.o.slice())):(d=a.a,d=d[d.length-1]),d[0]=e[0],d[1]=e[1],a.Qa(a.a,c),a.G&&a.G.U().pa(e),c instanceof F&&a.f!==hu?(a.C||(a.C=new I(new N(null))),c=c.vh(0),e=a.C.U(),e.ca(c.la,c.ia())):a.I&&(e=a.C.U(),e.pa(a.I)),ru(a)):(e=b.coordinate.slice(),a.G?a.G.U().pa(e):(a.G=new I(new E(e)),
ru(a)));return!0}function pu(a,b){var c=!1;if(a.j){var d=!1,e=[a.o];a.f===ju?d=a.a.length>a.Ha:a.f===hu&&(d=a.a[0].length>a.Ha,e=[a.a[0][0],a.a[0][a.a[0].length-2]]);if(d)for(var d=b.map,f=0,g=e.length;f<g;f++){var h=e[f],l=d.Ka(h),m=b.pixel,c=m[0]-l[0],l=m[1]-l[1];if(c=Math.sqrt(c*c+l*l)<=(a.u?1:a.sk)){a.o=h;break}}}return c}
function nu(a,b){var c=b.coordinate;a.o=c;a.f===iu?a.a=c.slice():a.f===hu?(a.a=[[c.slice(),c.slice()]],a.I=a.a[0]):(a.a=[c.slice(),c.slice()],a.f===ou&&(a.I=a.a));a.I&&(a.C=new I(new N(a.I)));c=a.Qa(a.a);a.j=new I;a.yb&&a.j.Yc(a.yb);a.j.Ta(c);ru(a);a.b(new su("drawstart",a.j))}
function lu(a,b){var c=b.coordinate,d=a.j.U(),e,f;a.f===ju?(a.o=c.slice(),f=a.a,f.length>=a.Ja&&(a.u?f.pop():e=!0),f.push(c.slice()),a.Qa(f,d)):a.f===hu&&(f=a.a[0],f.length>=a.Ja&&(a.u?f.pop():e=!0),f.push(c.slice()),e&&(a.o=f[0]),a.Qa(a.a,d));ru(a);e&&a.Qd()}
k.Ep=function(){if(this.j){var a=this.j.U(),b,c;this.f===ju?(b=this.a,b.splice(-2,1),this.Qa(b,a),2<=b.length&&(this.o=b[b.length-2].slice())):this.f===hu&&(b=this.a[0],b.splice(-2,1),c=this.C.U(),c.pa(b),this.Qa(this.a,a));0===b.length&&(this.o=null);ru(this)}};
k.Qd=function(){var a=qu(this),b=this.a,c=a.U();this.f===ju?(b.pop(),this.Qa(b,c)):this.f===hu&&(b[0].pop(),this.Qa(b,c),b=c.W());"MultiPoint"===this.Z?a.Ta(new P([b])):"MultiLineString"===this.Z?a.Ta(new O([b])):"MultiPolygon"===this.Z&&a.Ta(new Q([b]));this.b(new su("drawend",a));this.Va&&this.Va.push(a);this.Gb&&this.Gb.zb(a)};function qu(a){a.o=null;var b=a.j;b&&(a.j=null,a.G=null,a.C=null,a.na.ka().clear(!0));return b}
k.nn=function(a){var b=a.U();this.j=a;this.a=b.W();a=this.a[this.a.length-1];this.o=a.slice();this.a.push(a.slice());ru(this);this.b(new su("drawstart",this.j))};k.bd=kf;function ru(a){var b=[];a.j&&b.push(a.j);a.C&&b.push(a.C);a.G&&b.push(a.G);a=a.na.ka();a.clear(!0);a.gd(b)}k.ji=function(){var a=this.v,b=this.c();a&&b||qu(this);this.na.setMap(b?a:null)};
function gu(a){var b;"Point"===a||"MultiPoint"===a?b=iu:"LineString"===a||"MultiLineString"===a?b=ju:"Polygon"===a||"MultiPolygon"===a?b=hu:"Circle"===a&&(b=ou);return b}var iu="Point",ju="LineString",hu="Polygon",ou="Circle";function su(a,b){Lc.call(this,a);this.feature=b}u(su,Lc);function tu(a){this.a=this.j=null;this.C=!1;this.G=this.o=null;a||(a={});a.extent&&this.f(a.extent);Ag.call(this,{handleDownEvent:uu,handleDragEvent:vu,handleEvent:wu,handleUpEvent:xu});this.u=new S({source:new T({useSpatialIndex:!1,wrapX:!!a.wrapX}),style:a.boxStyle?a.boxStyle:yu(),updateWhileAnimating:!0,updateWhileInteracting:!0});this.I=new S({source:new T({useSpatialIndex:!1,wrapX:!!a.wrapX}),style:a.pointerStyle?a.pointerStyle:zu(),updateWhileAnimating:!0,updateWhileInteracting:!0})}u(tu,Ag);
function wu(a){if(!(a instanceof Kd))return!0;if("pointermove"==a.type&&!this.A){var b=a.pixel,c=a.map,d=Au(this,b,c);d||(d=c.Xa(b));Bu(this,d)}Bg.call(this,a);return!1}
function uu(a){function b(a){var b=null,c=null;a[0]==e[0]?b=e[2]:a[0]==e[2]&&(b=e[0]);a[1]==e[1]?c=e[3]:a[1]==e[3]&&(c=e[1]);return null!==b&&null!==c?[b,c]:null}var c=a.pixel,d=a.map,e=this.D();(a=Au(this,c,d))&&e?(c=a[0]==e[0]||a[0]==e[2]?a[0]:null,d=a[1]==e[1]||a[1]==e[3]?a[1]:null,null!==c&&null!==d?this.a=Cu(b(a)):null!==c?this.a=Du(b([c,e[1]]),b([c,e[3]])):null!==d&&(this.a=Du(b([e[0],d]),b([e[2],d])))):(a=d.Xa(c),this.f([a[0],a[1],a[0],a[1]]),this.a=Cu(a));return!0}
function vu(a){this.a&&(a=a.coordinate,this.f(this.a(a)),Bu(this,a));return!0}function xu(){this.a=null;var a=this.D();a&&gb(a)||this.f(null);return!1}function yu(){var a=gl();return function(){return a.Polygon}}function zu(){var a=gl();return function(){return a.Point}}function Cu(a){return function(b){return Ia([a,b])}}function Du(a,b){return a[0]==b[0]?function(c){return Ia([a,[c[0],b[1]]])}:a[1]==b[1]?function(c){return Ia([a,[b[0],c[1]]])}:null}
function Au(a,b,c){function d(a,b){return gf(e,a)-gf(e,b)}var e=c.Xa(b),f=a.D();if(f){f=[[[f[0],f[1]],[f[0],f[3]]],[[f[0],f[3]],[f[2],f[3]]],[[f[2],f[3]],[f[2],f[1]]],[[f[2],f[1]],[f[0],f[1]]]];f.sort(d);var f=f[0],g=Ye(e,f),h=c.Ka(g);if(10>=ff(b,h))return b=c.Ka(f[0]),c=c.Ka(f[1]),b=ef(h,b),c=ef(h,c),a.C=10>=Math.sqrt(Math.min(b,c)),a.C&&(g=b>c?f[1]:f[0]),g}return null}function Bu(a,b){var c=a.G;c?c.U().pa(b):(c=new I(new E(b)),a.G=c,a.I.ka().zb(c))}
tu.prototype.setMap=function(a){this.u.setMap(a);this.I.setMap(a);Ag.prototype.setMap.call(this,a)};tu.prototype.D=function(){return this.j};tu.prototype.f=function(a){this.j=a?a:null;var b=this.o;b?a?b.Ta(Vf(a)):b.Ta(void 0):(this.o=b=a?new I(Vf(a)):new I({}),this.u.ka().zb(b));this.b(new Eu(this.j))};function Eu(a){Lc.call(this,Fu);this.b=a}u(Eu,Lc);var Fu="extentchanged";function Gu(a){Ag.call(this,{handleDownEvent:Hu,handleDragEvent:Iu,handleEvent:Ju,handleUpEvent:Ku});this.Gb=a.condition?a.condition:zg;this.Va=function(a){return vg(a)&&tg(a)};this.yb=a.deleteCondition?a.deleteCondition:this.Va;this.Ha=this.f=null;this.Ja=[0,0];this.C=this.I=!1;this.a=new Gj;this.fa=void 0!==a.pixelTolerance?a.pixelTolerance:10;this.o=this.na=!1;this.j=[];this.G=new S({source:new T({useSpatialIndex:!1,wrapX:!!a.wrapX}),style:a.style?a.style:Lu(),updateWhileAnimating:!0,updateWhileInteracting:!0});
this.T={Point:this.wn,LineString:this.li,LinearRing:this.li,Polygon:this.xn,MultiPoint:this.tn,MultiLineString:this.sn,MultiPolygon:this.vn,Circle:this.lq,GeometryCollection:this.rn};this.u=a.features;this.u.forEach(this.fg,this);z(this.u,"add",this.pn,this);z(this.u,"remove",this.qn,this);this.Z=null}u(Gu,Ag);k=Gu.prototype;k.fg=function(a){var b=a.U();b&&b.S()in this.T&&this.T[b.S()].call(this,a,b);(b=this.v)&&b.a&&this.c()&&Mu(this,this.Ja,b);z(a,"change",this.ki,this)};
function Nu(a,b){a.C||(a.C=!0,a.b(new Ou("modifystart",a.u,b)))}function Pu(a,b){Qu(a,b);a.f&&!a.u.fc()&&(a.G.ka().Db(a.f),a.f=null);Hc(b,"change",a.ki,a)}function Qu(a,b){var c=a.a,d=[];c.forEach(function(a){b===a.feature&&d.push(a)});for(var e=d.length-1;0<=e;--e)c.remove(d[e])}k.Ia=function(a){this.f&&!a&&(this.G.ka().Db(this.f),this.f=null);Ag.prototype.Ia.call(this,a)};k.setMap=function(a){this.G.setMap(a);Ag.prototype.setMap.call(this,a)};k.pn=function(a){this.fg(a.element)};
k.ki=function(a){this.o||(a=a.target,Pu(this,a),this.fg(a))};k.qn=function(a){Pu(this,a.element)};k.wn=function(a,b){var c=b.W(),c={feature:a,geometry:b,oa:[c,c]};this.a.Ea(b.D(),c)};k.tn=function(a,b){var c=b.W(),d,e,f;e=0;for(f=c.length;e<f;++e)d=c[e],d={feature:a,geometry:b,depth:[e],index:e,oa:[d,d]},this.a.Ea(b.D(),d)};k.li=function(a,b){var c=b.W(),d,e,f,g;d=0;for(e=c.length-1;d<e;++d)f=c.slice(d,d+2),g={feature:a,geometry:b,index:d,oa:f},this.a.Ea(Ia(f),g)};
k.sn=function(a,b){var c=b.W(),d,e,f,g,h,l,m;g=0;for(h=c.length;g<h;++g)for(d=c[g],e=0,f=d.length-1;e<f;++e)l=d.slice(e,e+2),m={feature:a,geometry:b,depth:[g],index:e,oa:l},this.a.Ea(Ia(l),m)};k.xn=function(a,b){var c=b.W(),d,e,f,g,h,l,m;g=0;for(h=c.length;g<h;++g)for(d=c[g],e=0,f=d.length-1;e<f;++e)l=d.slice(e,e+2),m={feature:a,geometry:b,depth:[g],index:e,oa:l},this.a.Ea(Ia(l),m)};
k.vn=function(a,b){var c=b.W(),d,e,f,g,h,l,m,n,p,q;l=0;for(m=c.length;l<m;++l)for(n=c[l],g=0,h=n.length;g<h;++g)for(d=n[g],e=0,f=d.length-1;e<f;++e)p=d.slice(e,e+2),q={feature:a,geometry:b,depth:[g,l],index:e,oa:p},this.a.Ea(Ia(p),q)};k.lq=function(a,b){var c=b.za(),d={feature:a,geometry:b,index:0,oa:[c,c]},e={feature:a,geometry:b,index:1,oa:[c,c]};d.Lf=e.Lf=[d,e];this.a.Ea(Xa(c),d);this.a.Ea(b.D(),e)};k.rn=function(a,b){var c,d=b.a;for(c=0;c<d.length;++c)this.T[d[c].S()].call(this,a,d[c])};
function Ru(a,b){var c=a.f;c?c.U().pa(b):(c=new I(new E(b)),a.f=c,a.G.ka().zb(c))}function Su(a,b){return a.index-b.index}
function Hu(a){if(!this.Gb(a))return!1;Mu(this,a.pixel,a.map);var b=a.map.Xa(a.pixel);this.j.length=0;this.C=!1;var c=this.f;if(c){var d=[],c=c.U().W(),e=Ia([c]),e=Jj(this.a,e),f={};e.sort(Su);for(var g=0,h=e.length;g<h;++g){var l=e[g],m=l.oa,n=w(l.feature),p=l.depth;p&&(n+="-"+p.join("-"));f[n]||(f[n]=Array(2));if("Circle"===l.geometry.S()&&1===l.index)m=Tu(b,l),af(m,c)&&!f[n][0]&&(this.j.push([l,0]),f[n][0]=l);else if(af(m[0],c)&&!f[n][0])this.j.push([l,0]),f[n][0]=l;else if(af(m[1],c)&&!f[n][1]){if("LineString"!==
l.geometry.S()&&"MultiLineString"!==l.geometry.S()||!f[n][0]||0!==f[n][0].index)this.j.push([l,1]),f[n][1]=l}else w(m)in this.Ha&&!f[n][0]&&!f[n][1]&&d.push([l,c])}d.length&&Nu(this,a);for(a=d.length-1;0<=a;--a)this.Xl.apply(this,d[a])}return!!this.f}
function Iu(a){this.I=!1;Nu(this,a);a=a.coordinate;for(var b=0,c=this.j.length;b<c;++b){for(var d=this.j[b],e=d[0],f=e.depth,g=e.geometry,h,l=e.oa,d=d[1];a.length<g.sa();)a.push(l[d][a.length]);switch(g.S()){case "Point":h=a;l[0]=l[1]=a;break;case "MultiPoint":h=g.W();h[e.index]=a;l[0]=l[1]=a;break;case "LineString":h=g.W();h[e.index+d]=a;l[d]=a;break;case "MultiLineString":h=g.W();h[f[0]][e.index+d]=a;l[d]=a;break;case "Polygon":h=g.W();h[f[0]][e.index+d]=a;l[d]=a;break;case "MultiPolygon":h=g.W();
h[f[1]][f[0]][e.index+d]=a;l[d]=a;break;case "Circle":l[0]=l[1]=a,0===e.index?(this.o=!0,g.lb(a)):(this.o=!0,g.Zc(ff(g.za(),a))),this.o=!1}h&&(e=g,f=h,this.o=!0,e.pa(f),this.o=!1)}Ru(this,a)}function Ku(a){for(var b,c,d=this.j.length-1;0<=d;--d)if(b=this.j[d][0],c=b.geometry,"Circle"===c.S()){var e=c.za(),f=b.Lf[0];b=b.Lf[1];f.oa[0]=f.oa[1]=e;b.oa[0]=b.oa[1]=e;Hj(this.a,Xa(e),f);Hj(this.a,c.D(),b)}else Hj(this.a,Ia(b.oa),b);this.C&&(this.b(new Ou("modifyend",this.u,a)),this.C=!1);return!1}
function Ju(a){if(!(a instanceof Kd))return!0;this.Z=a;var b;ag(a.map.$())[1]||"pointermove"!=a.type||this.A||(this.Ja=a.pixel,Mu(this,a.pixel,a.map));this.f&&this.yb(a)&&(b="singleclick"==a.type&&this.I?!0:this.cj());"singleclick"==a.type&&(this.I=!1);return Bg.call(this,a)&&!b}
function Mu(a,b,c){function d(a,b){return Uu(e,a)-Uu(e,b)}var e=c.Xa(b),f=Ma(Xa(e),c.$().Ra()*a.fa),f=Jj(a.a,f);if(0<f.length){f.sort(d);var g=f[0],h=g.oa,l=Tu(e,g),m=c.Ka(l),n=ff(b,m);if(n<=a.fa){b={};if("Circle"===g.geometry.S()&&1===g.index)a.na=!0,Ru(a,l);else for(n=c.Ka(h[0]),g=c.Ka(h[1]),c=ef(m,n),m=ef(m,g),n=Math.sqrt(Math.min(c,m)),a.na=n<=a.fa,a.na&&(l=c>m?h[1]:h[0]),Ru(a,l),m=1,c=f.length;m<c;++m)if(l=f[m].oa,af(h[0],l[0])&&af(h[1],l[1])||af(h[0],l[1])&&af(h[1],l[0]))b[w(l)]=!0;else break;
b[w(h)]=!0;a.Ha=b;return}}a.f&&(a.G.ka().Db(a.f),a.f=null)}function Uu(a,b){var c=b.geometry;if("Circle"===c.S()&&1===b.index){var d=ef(c.za(),a),c=Math.sqrt(d)-c.Yd();return c*c}return gf(a,b.oa)}function Tu(a,b){var c=b.geometry;return"Circle"===c.S()&&1===b.index?c.Ab(a):Ye(a,b.oa)}
k.Xl=function(a,b){for(var c=a.oa,d=a.feature,e=a.geometry,f=a.depth,g=a.index,h;b.length<e.sa();)b.push(0);switch(e.S()){case "MultiLineString":h=e.W();h[f[0]].splice(g+1,0,b);break;case "Polygon":h=e.W();h[f[0]].splice(g+1,0,b);break;case "MultiPolygon":h=e.W();h[f[1]][f[0]].splice(g+1,0,b);break;case "LineString":h=e.W();h.splice(g+1,0,b);break;default:return}this.o=!0;e.pa(h);this.o=!1;h=this.a;h.remove(a);Vu(this,e,g,f,1);var l={oa:[c[0],b],feature:d,geometry:e,depth:f,index:g};h.Ea(Ia(l.oa),
l);this.j.push([l,1]);c={oa:[b,c[1]],feature:d,geometry:e,depth:f,index:g+1};h.Ea(Ia(c.oa),c);this.j.push([c,0]);this.I=!0};
k.cj=function(){if(this.Z&&"pointerdrag"!=this.Z.type){var a=this.Z;Nu(this,a);var b=this.j,c={},d,e,f,g,h,l,m,n,p,q;for(h=b.length-1;0<=h;--h)g=b[h],p=g[0],q=w(p.feature),p.depth&&(q+="-"+p.depth.join("-")),q in c||(c[q]={}),0===g[1]?(c[q].right=p,c[q].index=p.index):1==g[1]&&(c[q].left=p,c[q].index=p.index+1);for(q in c){n=c[q].right;l=c[q].left;h=c[q].index;m=h-1;p=void 0!==l?l:n;0>m&&(m=0);g=p.geometry;e=f=g.W();d=!1;switch(g.S()){case "MultiLineString":2<f[p.depth[0]].length&&(f[p.depth[0]].splice(h,
1),d=!0);break;case "LineString":2<f.length&&(f.splice(h,1),d=!0);break;case "MultiPolygon":e=e[p.depth[1]];case "Polygon":e=e[p.depth[0]],4<e.length&&(h==e.length-1&&(h=0),e.splice(h,1),d=!0,0===h&&(e.pop(),e.push(e[0]),m=e.length-1))}d&&(d=g,this.o=!0,d.pa(f),this.o=!1,f=[],void 0!==l&&(this.a.remove(l),f.push(l.oa[0])),void 0!==n&&(this.a.remove(n),f.push(n.oa[1])),void 0!==l&&void 0!==n&&(l={depth:p.depth,feature:p.feature,geometry:p.geometry,index:m,oa:f},this.a.Ea(Ia(l.oa),l)),Vu(this,g,h,p.depth,
-1),this.f&&(this.G.ka().Db(this.f),this.f=null),b.length=0)}this.b(new Ou("modifyend",this.u,a));this.C=!1;return!0}return!1};function Vu(a,b,c,d,e){Lj(a.a,b.D(),function(a){a.geometry===b&&(void 0===d||void 0===a.depth||ja(a.depth,d))&&a.index>c&&(a.index+=e)})}function Lu(){var a=gl();return function(){return a.Point}}function Ou(a,b,c){Lc.call(this,a);this.features=b;this.mapBrowserEvent=c}u(Ou,Lc);function Wu(a){kg.call(this,{handleEvent:Xu});a=a?a:{};this.C=a.condition?a.condition:tg;this.A=a.addCondition?a.addCondition:kf;this.G=a.removeCondition?a.removeCondition:kf;this.I=a.toggleCondition?a.toggleCondition:wg;this.o=a.multi?a.multi:!1;this.l=a.filter?a.filter:jf;this.j=a.hitTolerance?a.hitTolerance:0;this.f=new S({source:new T({useSpatialIndex:!1,features:a.features,wrapX:a.wrapX}),style:a.style?a.style:Yu(),updateWhileAnimating:!0,updateWhileInteracting:!0});if(a.layers)if("function"===
typeof a.layers)a=a.layers;else{var b=a.layers;a=function(a){return fa(b,a)}}else a=jf;this.u=a;this.a={};a=this.f.ka().i;z(a,"add",this.yn,this);z(a,"remove",this.Cn,this)}u(Wu,kg);k=Wu.prototype;k.zn=function(){return this.f.ka().i};k.An=function(){return this.j};k.Bn=function(a){a=w(a);return this.a[a]};
function Xu(a){if(!this.C(a))return!0;var b=this.A(a),c=this.G(a),d=this.I(a),e=!b&&!c&&!d,f=a.map,g=this.f.ka().i,h=[],l=[];if(e){rb(this.a);f.we(a.pixel,function(a,b){if(this.l(a,b)){l.push(a);var c=w(a);this.a[c]=b;return!this.o}}.bind(this),{layerFilter:this.u,hitTolerance:this.j});for(e=g.fc()-1;0<=e;--e){var f=g.item(e),m=l.indexOf(f);-1<m?l.splice(m,1):(g.remove(f),h.push(f))}l.length&&g.ag(l)}else{f.we(a.pixel,function(a,e){if(this.l(a,e)){if(!b&&!d||fa(g.a,a))(c||d)&&fa(g.a,a)&&(h.push(a),
f=w(a),delete this.a[f]);else{l.push(a);var f=w(a);this.a[f]=e}return!this.o}}.bind(this),{layerFilter:this.u,hitTolerance:this.j});for(e=h.length-1;0<=e;--e)g.remove(h[e]);g.ag(l)}(0<l.length||0<h.length)&&this.b(new Zu($u,l,h,a));return sg(a)}k.Dn=function(a){this.j=a};k.setMap=function(a){var b=this.v,c=this.f.ka().i;b&&c.forEach(b.yj,b);kg.prototype.setMap.call(this,a);this.f.setMap(a);a&&c.forEach(a.tj,a)};
function Yu(){var a=gl();ha(a.Polygon,a.LineString);ha(a.GeometryCollection,a.LineString);return function(b){return b.U()?a[b.U().S()]:null}}k.yn=function(a){var b=this.v;b&&b.tj(a.element)};k.Cn=function(a){var b=this.v;b&&b.yj(a.element)};function Zu(a,b,c,d){Lc.call(this,a);this.selected=b;this.deselected=c;this.mapBrowserEvent=d}u(Zu,Lc);var $u="select";function av(a){Ag.call(this,{handleEvent:bv,handleDownEvent:jf,handleUpEvent:cv});a=a?a:{};this.o=a.source?a.source:null;this.fa=void 0!==a.vertex?a.vertex:!0;this.I=void 0!==a.edge?a.edge:!0;this.j=a.features?a.features:null;this.na=[];this.C={};this.Z={};this.u={};this.G=null;this.f=void 0!==a.pixelTolerance?a.pixelTolerance:10;this.Ja=dv.bind(this);this.a=new Gj;this.T={Point:this.Jn,LineString:this.oi,LinearRing:this.oi,Polygon:this.Kn,MultiPoint:this.Hn,MultiLineString:this.Gn,MultiPolygon:this.In,
GeometryCollection:this.Fn}}u(av,Ag);k=av.prototype;k.zb=function(a,b){var c=void 0!==b?b:!0,d=w(a),e=a.U();if(e){var f=this.T[e.S()];f&&(this.Z[d]=e.D(Ja()),f.call(this,a,e))}c&&(this.C[d]=z(a,"change",this.En,this))};k.wk=function(a){this.zb(a)};k.xk=function(a){this.Db(a)};k.mi=function(a){var b;a instanceof $t?b=a.feature:a instanceof Yc&&(b=a.element);this.zb(b)};k.ni=function(a){var b;a instanceof $t?b=a.feature:a instanceof Yc&&(b=a.element);this.Db(b)};
k.En=function(a){a=a.target;if(this.A){var b=w(a);b in this.u||(this.u[b]=a)}else this.zj(a)};k.Db=function(a,b){var c=void 0!==b?b:!0,d=w(a),e=this.Z[d];if(e){var f=this.a,g=[];Lj(f,e,function(b){a===b.feature&&g.push(b)});for(e=g.length-1;0<=e;--e)f.remove(g[e])}c&&(Bc(this.C[d]),delete this.C[d])};
k.setMap=function(a){var b=this.v,c=this.na,d;this.j?d=this.j:this.o&&(d=this.o.We());b&&(c.forEach(Bc),c.length=0,d.forEach(this.xk,this));Ag.prototype.setMap.call(this,a);a&&(this.j?c.push(z(this.j,"add",this.mi,this),z(this.j,"remove",this.ni,this)):this.o&&c.push(z(this.o,"addfeature",this.mi,this),z(this.o,"removefeature",this.ni,this)),d.forEach(this.wk,this))};k.bd=kf;k.zj=function(a){this.Db(a,!1);this.zb(a,!1)};
k.Fn=function(a,b){var c,d=b.a;for(c=0;c<d.length;++c)this.T[d[c].S()].call(this,a,d[c])};k.oi=function(a,b){var c=b.W(),d,e,f,g;d=0;for(e=c.length-1;d<e;++d)f=c.slice(d,d+2),g={feature:a,oa:f},this.a.Ea(Ia(f),g)};k.Gn=function(a,b){var c=b.W(),d,e,f,g,h,l,m;g=0;for(h=c.length;g<h;++g)for(d=c[g],e=0,f=d.length-1;e<f;++e)l=d.slice(e,e+2),m={feature:a,oa:l},this.a.Ea(Ia(l),m)};k.Hn=function(a,b){var c=b.W(),d,e,f;e=0;for(f=c.length;e<f;++e)d=c[e],d={feature:a,oa:[d,d]},this.a.Ea(b.D(),d)};
k.In=function(a,b){var c=b.W(),d,e,f,g,h,l,m,n,p,q;l=0;for(m=c.length;l<m;++l)for(n=c[l],g=0,h=n.length;g<h;++g)for(d=n[g],e=0,f=d.length-1;e<f;++e)p=d.slice(e,e+2),q={feature:a,oa:p},this.a.Ea(Ia(p),q)};k.Jn=function(a,b){var c=b.W(),c={feature:a,oa:[c,c]};this.a.Ea(b.D(),c)};k.Kn=function(a,b){var c=b.W(),d,e,f,g,h,l,m;g=0;for(h=c.length;g<h;++g)for(d=c[g],e=0,f=d.length-1;e<f;++e)l=d.slice(e,e+2),m={feature:a,oa:l},this.a.Ea(Ia(l),m)};
function bv(a){var b,c,d=a.pixel,e=a.coordinate;b=a.map;var f=b.Xa([d[0]-this.f,d[1]+this.f]);c=b.Xa([d[0]+this.f,d[1]-this.f]);var f=Ia([f,c]),g=Jj(this.a,f),h,f=!1,l=null;c=null;if(0<g.length){this.G=e;g.sort(this.Ja);g=g[0].oa;if(this.fa&&!this.I){if(e=b.Ka(g[0]),h=b.Ka(g[1]),e=ef(d,e),d=ef(d,h),h=Math.sqrt(Math.min(e,d)),h=h<=this.f)f=!0,l=e>d?g[1]:g[0],c=b.Ka(l)}else this.I&&(l=Ye(e,g),c=b.Ka(l),ff(d,c)<=this.f&&(f=!0,this.fa&&(e=b.Ka(g[0]),h=b.Ka(g[1]),e=ef(c,e),d=ef(c,h),h=Math.sqrt(Math.min(e,
d)),h=h<=this.f)))&&(l=e>d?g[1]:g[0],c=b.Ka(l));f&&(c=[Math.round(c[0]),Math.round(c[1])])}b=l;f&&(a.coordinate=b.slice(0,2),a.pixel=c);return Bg.call(this,a)}function cv(){var a=sb(this.u);a.length&&(a.forEach(this.zj,this),this.u={});return!1}function dv(a,b){return gf(this.G,a.oa)-gf(this.G,b.oa)};function ev(a){Ag.call(this,{handleDownEvent:fv,handleDragEvent:gv,handleMoveEvent:hv,handleUpEvent:iv});a=a?a:{};this.f=void 0;this.a=null;this.o=void 0!==a.features?a.features:null;var b;if(a.layers)if("function"===typeof a.layers)b=a.layers;else{var c=a.layers;b=function(a){return fa(c,a)}}else b=jf;this.G=b;this.u=a.hitTolerance?a.hitTolerance:0;this.j=null;z(this,Sc("active"),this.C,this)}u(ev,Ag);
function fv(a){this.j=jv(this,a.pixel,a.map);if(!this.a&&this.j){this.a=a.coordinate;hv.call(this,a);var b=this.o||new D([this.j]);this.b(new kv("translatestart",b,a.coordinate));return!0}return!1}function iv(a){if(this.a){this.a=null;hv.call(this,a);var b=this.o||new D([this.j]);this.b(new kv("translateend",b,a.coordinate));return!0}return!1}
function gv(a){if(this.a){a=a.coordinate;var b=a[0]-this.a[0],c=a[1]-this.a[1],d=this.o||new D([this.j]);d.forEach(function(a){var d=a.U();d.translate(b,c);a.Ta(d)});this.a=a;this.b(new kv("translating",d,a))}}function hv(a){var b=a.map.vc();jv(this,a.pixel,a.map)?(this.f=void 0!==this.f?this.f:b.style.cursor,b.style.cursor=this.a?"-webkit-grabbing":"-webkit-grab",b.style.cursor=this.a?"grabbing":"grab"):void 0!==this.f&&(b.style.cursor=this.f,this.f=void 0)}
function jv(a,b,c){return c.we(b,function(a){if(!this.o||fa(this.o.a,a))return a}.bind(a),{layerFilter:a.G,hitTolerance:a.u})}ev.prototype.I=function(){return this.u};ev.prototype.Z=function(a){this.u=a};ev.prototype.setMap=function(a){var b=this.v;Ag.prototype.setMap.call(this,a);lv(this,b)};ev.prototype.C=function(){lv(this,null)};function lv(a,b){var c=a.v,d=a.c();c&&d||void 0===a.f||(c||(c=b),c.vc().style.cursor=a.f,a.f=void 0)}
function kv(a,b,c){Lc.call(this,a);this.features=b;this.coordinate=c}u(kv,Lc);function U(a){a=a?a:{};var b=qb({},a);delete b.gradient;delete b.radius;delete b.blur;delete b.shadow;delete b.weight;S.call(this,b);this.j=null;this.T=void 0!==a.shadow?a.shadow:250;this.Z=void 0;this.I=null;z(this,Sc(mv),this.wl,this);this.kj(a.gradient?a.gradient:nv);this.ej(void 0!==a.blur?a.blur:15);this.Zc(void 0!==a.radius?a.radius:8);z(this,Sc(ov),this.Yf,this);z(this,Sc(pv),this.Yf,this);this.Yf();var c=a.weight?a.weight:"weight",d;"string"===typeof c?d=function(a){return a.get(c)}:d=c;this.f(function(a){a=
d(a);a=void 0!==a?xa(a,0,1):1;var b=255*a|0,c=this.I[b];c||(c=[new bl({image:new co({opacity:a,src:this.Z})})],this.I[b]=c);return c}.bind(this));this.set(It,null);z(this,"render",this.Nl,this)}u(U,S);var nv=["#00f","#0ff","#0f0","#ff0","#f00"];k=U.prototype;k.nh=function(){return this.get(ov)};k.uh=function(){return this.get(mv)};k.ri=function(){return this.get(pv)};
k.wl=function(){for(var a=this.uh(),b=hd(1,256),c=b.createLinearGradient(0,0,1,256),d=1/(a.length-1),e=0,f=a.length;e<f;++e)c.addColorStop(e*d,a[e]);b.fillStyle=c;b.fillRect(0,0,1,256);this.j=b.getImageData(0,0,1,256).data};k.Yf=function(){var a=this.ri(),b=this.nh(),c=a+b+1,d=2*c,d=hd(d,d);d.shadowOffsetX=d.shadowOffsetY=this.T;d.shadowBlur=b;d.shadowColor="#000";d.beginPath();b=c-this.T;d.arc(b,b,a,0,2*Math.PI,!0);d.fill();this.Z=d.canvas.toDataURL();this.I=Array(256);this.s()};
k.Nl=function(a){a=a.context;var b=a.canvas,b=a.getImageData(0,0,b.width,b.height),c=b.data,d,e,f;d=0;for(e=c.length;d<e;d+=4)if(f=4*c[d+3])c[d]=this.j[f],c[d+1]=this.j[f+1],c[d+2]=this.j[f+2];a.putImageData(b,0,0)};k.ej=function(a){this.set(ov,a)};k.kj=function(a){this.set(mv,a)};k.Zc=function(a){this.set(pv,a)};var ov="blur",mv="gradient",pv="radius";function qv(a){zt.call(this,a);this.u=yh();this.j=null}u(qv,zt);qv.prototype.O=function(a,b,c){Bt(this,"precompose",c,a,void 0);var d=this.Y();if(d){var e=b.extent,f=void 0!==e&&!Ua(e,a.extent)&&nb(e,a.extent);f&&At(c,a,e);var e=this.A(),g=c.globalAlpha;c.globalAlpha=b.opacity;c.drawImage(d,0,0,+d.width,+d.height,Math.round(e[4]),Math.round(e[5]),Math.round(d.width*e[0]),Math.round(d.height*e[3]));c.globalAlpha=g;f&&c.restore()}this.cf(c,a,b)};
qv.prototype.Ba=function(a,b,c,d,e){var f=this.a;return f.ka().Ba(a,b.viewState.resolution,b.viewState.rotation,c,b.skippedFeatureUids,function(a){return d.call(e,a,f)})};
qv.prototype.v=function(a,b,c,d){if(this.Y()){if(this.a.ka().Ba!==oa)return zt.prototype.v.apply(this,arguments);var e=Dh(this.u,a.slice());df(e,b.viewState.resolution/this.f);this.j||(this.j=hd(1,1));this.j.clearRect(0,0,1,1);this.j.drawImage(this.Y(),e[0],e[1],1,1,0,0,1,1);e=this.j.getImageData(0,0,1,1).data;if(0<e[3])return c.call(d,this.a,e)}};function rv(a){qv.call(this,a);this.N=null;this.c=yh()}u(rv,qv);rv.prototype.Y=function(){return this.N?this.N.Y():null};rv.prototype.A=function(){return this.c};
rv.prototype.ud=function(a,b){var c=a.pixelRatio,d=a.size,e=a.viewState,f=e.center,g=e.resolution,h=this.a.ka(),l=a.viewHints,m=a.extent;void 0!==b.extent&&(m=mb(m,b.extent));l[0]||l[1]||hb(m)||(e=h.Y(m,g,c,e.projection))&&tt(this,e)&&(this.N=e);if(this.N){var e=this.N,m=e.D(),n=e.resolution,l=e.a,p=c*n/(g*l),m=Hh(this.c,c*d[0]/2,c*d[1]/2,p,p,0,l*(m[0]-f[0])/n,l*(f[1]-m[3])/n);Hh(this.u,c*d[0]/2-m[4],c*d[1]/2-m[5],c/g,-c/g,0,-f[0],-f[1]);vt(a.attributions,e.i);wt(a,h);this.f=g*c/l}return!!this.N};function sv(a,b,c,d){var e=fc(c,b,a);c=Rb(b,d,c);b=b.uc();void 0!==b&&(c*=b);b=a.uc();void 0!==b&&(c/=b);a=Rb(a,c,e)/c;isFinite(a)&&0<a&&(c/=a);return c}function tv(a,b,c,d){a=c-a;b=d-b;var e=Math.sqrt(a*a+b*b);return[Math.round(c+a/e),Math.round(d+b/e)]}
function uv(a,b,c,d,e,f,g,h,l,m,n){var p=hd(Math.round(c*a),Math.round(c*b));if(!l.length)return p.canvas;p.scale(c,c);var q=Ja();l.forEach(function(a){ab(q,a.extent)});var r=hd(Math.round(c*ib(q)/d),Math.round(c*jb(q)/d)),v=c/d;l.forEach(function(a){r.drawImage(a.image,m,m,a.image.width-2*m,a.image.height-2*m,(a.extent[0]-q[0])*v,-(a.extent[3]-q[3])*v,ib(a.extent)*v,jb(a.extent)*v)});var x=fb(g);h.c.forEach(function(a){var b=a.source,e=a.target,g=b[1][0],h=b[1][1],l=b[2][0],m=b[2][1];a=(e[0][0]-
x[0])/f;var n=-(e[0][1]-x[1])/f,v=(e[1][0]-x[0])/f,y=-(e[1][1]-x[1])/f,Z=(e[2][0]-x[0])/f,Ta=-(e[2][1]-x[1])/f,e=b[0][0],b=b[0][1],g=g-e,h=h-b,l=l-e,m=m-b;a:{g=[[g,h,0,0,v-a],[l,m,0,0,Z-a],[0,0,g,h,y-n],[0,0,l,m,Ta-n]];h=g.length;for(l=0;l<h;l++){for(var m=l,Pb=Math.abs(g[l][l]),cc=l+1;cc<h;cc++){var $c=Math.abs(g[cc][l]);$c>Pb&&(Pb=$c,m=cc)}if(!Pb){g=null;break a}Pb=g[m];g[m]=g[l];g[l]=Pb;for(m=l+1;m<h;m++)for(Pb=-g[m][l]/g[l][l],cc=l;cc<h+1;cc++)g[m][cc]=l==cc?0:g[m][cc]+Pb*g[l][cc]}l=Array(h);
for(m=h-1;0<=m;m--)for(l[m]=g[m][h]/g[m][m],Pb=m-1;0<=Pb;Pb--)g[Pb][h]-=g[Pb][m]*l[m];g=l}g&&(p.save(),p.beginPath(),l=(a+v+Z)/3,m=(n+y+Ta)/3,h=tv(l,m,a,n),v=tv(l,m,v,y),Z=tv(l,m,Z,Ta),p.moveTo(v[0],v[1]),p.lineTo(h[0],h[1]),p.lineTo(Z[0],Z[1]),p.clip(),p.transform(g[0],g[2],g[1],g[3],a,n),p.translate(q[0]-e,q[3]-b),p.scale(d/c,-d/c),p.drawImage(r.canvas,0,0),p.restore())});n&&(p.save(),p.strokeStyle="black",p.lineWidth=1,h.c.forEach(function(a){var b=a.target;a=(b[0][0]-x[0])/f;var c=-(b[0][1]-x[1])/
f,d=(b[1][0]-x[0])/f,e=-(b[1][1]-x[1])/f,g=(b[2][0]-x[0])/f,b=-(b[2][1]-x[1])/f;p.beginPath();p.moveTo(d,e);p.lineTo(a,c);p.lineTo(g,b);p.closePath();p.stroke()}),p.restore());return p.canvas};function vv(a,b,c,d,e){this.g=a;this.i=b;var f={},g=dc(this.i,this.g);this.a=function(a){var b=a[0]+"/"+a[1];f[b]||(f[b]=g(a));return f[b]};this.f=d;this.u=e*e;this.c=[];this.l=!1;this.o=this.g.a&&!!d&&!!this.g.D()&&ib(d)==ib(this.g.D());this.b=this.g.D()?ib(this.g.D()):null;this.j=this.i.D()?ib(this.i.D()):null;a=fb(c);b=eb(c);d=db(c);c=cb(c);e=this.a(a);var h=this.a(b),l=this.a(d),m=this.a(c);wv(this,a,b,d,c,e,h,l,m,10);if(this.l){var n=Infinity;this.c.forEach(function(a){n=Math.min(n,a.source[0][0],
a.source[1][0],a.source[2][0])});this.c.forEach(function(a){if(Math.max(a.source[0][0],a.source[1][0],a.source[2][0])-n>this.b/2){var b=[[a.source[0][0],a.source[0][1]],[a.source[1][0],a.source[1][1]],[a.source[2][0],a.source[2][1]]];b[0][0]-n>this.b/2&&(b[0][0]-=this.b);b[1][0]-n>this.b/2&&(b[1][0]-=this.b);b[2][0]-n>this.b/2&&(b[2][0]-=this.b);Math.max(b[0][0],b[1][0],b[2][0])-Math.min(b[0][0],b[1][0],b[2][0])<this.b/2&&(a.source=b)}},this)}f={}}
function wv(a,b,c,d,e,f,g,h,l,m){var n=Ia([f,g,h,l]),p=a.b?ib(n)/a.b:null,q=a.b,r=a.g.a&&.5<p&&1>p,v=!1;if(0<m){if(a.i.g&&a.j)var x=Ia([b,c,d,e]),v=v|.25<ib(x)/a.j;!r&&a.g.g&&p&&(v|=.25<p)}if(v||!a.f||nb(n,a.f)){if(!(v||isFinite(f[0])&&isFinite(f[1])&&isFinite(g[0])&&isFinite(g[1])&&isFinite(h[0])&&isFinite(h[1])&&isFinite(l[0])&&isFinite(l[1])))if(0<m)v=!0;else return;if(0<m&&(v||(n=a.a([(b[0]+d[0])/2,(b[1]+d[1])/2]),q=r?(Da(f[0],q)+Da(h[0],q))/2-Da(n[0],q):(f[0]+h[0])/2-n[0],n=(f[1]+h[1])/2-n[1],
v=q*q+n*n>a.u),v)){Math.abs(b[0]-d[0])<=Math.abs(b[1]-d[1])?(r=[(c[0]+d[0])/2,(c[1]+d[1])/2],q=a.a(r),n=[(e[0]+b[0])/2,(e[1]+b[1])/2],p=a.a(n),wv(a,b,c,r,n,f,g,q,p,m-1),wv(a,n,r,d,e,p,q,h,l,m-1)):(r=[(b[0]+c[0])/2,(b[1]+c[1])/2],q=a.a(r),n=[(d[0]+e[0])/2,(d[1]+e[1])/2],p=a.a(n),wv(a,b,r,n,e,f,q,p,l,m-1),wv(a,r,c,d,n,q,g,h,p,m-1));return}if(r){if(!a.o)return;a.l=!0}a.c.push({source:[f,h,l],target:[b,d,e]});a.c.push({source:[f,g,h],target:[b,c,d]})}}
function xv(a){var b=Ja();a.c.forEach(function(a){a=a.source;La(b,a[0]);La(b,a[1]);La(b,a[2])});return b};function yv(a,b,c,d,e,f){this.u=b;this.o=a.D();var g=b.D(),h=g?mb(c,g):c,g=sv(a,b,kb(h),d);this.j=new vv(a,b,h,this.o,.5*g);this.c=d;this.g=c;a=xv(this.j);this.l=(this.Eb=f(a,g,e))?this.Eb.a:1;this.de=this.f=null;e=2;f=[];this.Eb&&(e=0,f=this.Eb.i);Fs.call(this,c,d,this.l,e,f)}u(yv,Fs);yv.prototype.ra=function(){1==this.state&&(Bc(this.de),this.de=null);Fs.prototype.ra.call(this)};yv.prototype.Y=function(){return this.f};
yv.prototype.ce=function(){var a=this.Eb.V();2==a&&(this.f=uv(ib(this.g)/this.c,jb(this.g)/this.c,this.l,this.Eb.resolution,0,this.c,this.g,this.j,[{extent:this.Eb.D(),image:this.Eb.Y()}],0));this.state=a;this.s()};yv.prototype.load=function(){if(0==this.state){this.state=1;this.s();var a=this.Eb.V();2==a||3==a?this.ce():(this.de=z(this.Eb,"change",function(){var a=this.Eb.V();if(2==a||3==a)Bc(this.de),this.de=null,this.ce()},this),this.Eb.load())}};function zv(a){Tt.call(this,{attributions:a.attributions,extent:a.extent,logo:a.logo,projection:a.projection,state:a.state});this.v=void 0!==a.resolutions?a.resolutions:null;this.a=null;this.ea=0}u(zv,Tt);function Av(a,b){a.v&&(b=a.v[ga(a.v,b,0)]);return b}
zv.prototype.Y=function(a,b,c,d){var e=this.c;if(e&&d&&!bc(e,d)){if(this.a){if(this.ea==this.g&&bc(this.a.u,d)&&this.a.resolution==b&&this.a.a==c&&$a(this.a.D(),a))return this.a;Kc(this.a);this.a=null}this.a=new yv(e,d,a,b,c,function(a,b,c){return this.Lc(a,b,c,e)}.bind(this));this.ea=this.g;return this.a}e&&(d=e);return this.Lc(a,b,c,d)};zv.prototype.l=function(a){a=a.target;switch(a.V()){case 1:this.b(new Bv(Cv,a));break;case 2:this.b(new Bv(Dv,a));break;case 3:this.b(new Bv(Ev,a))}};
function Fv(a,b){a.Y().src=b}function Bv(a,b){Lc.call(this,a);this.image=b}u(Bv,Lc);var Cv="imageloadstart",Dv="imageloadend",Ev="imageloaderror";function Gv(a){zv.call(this,{attributions:a.attributions,logo:a.logo,projection:a.projection,resolutions:a.resolutions,state:a.state});this.fa=a.canvasFunction;this.I=null;this.T=0;this.na=void 0!==a.ratio?a.ratio:1.5}u(Gv,zv);Gv.prototype.Lc=function(a,b,c,d){b=Av(this,b);var e=this.I;if(e&&this.T==this.g&&e.resolution==b&&e.a==c&&Ua(e.D(),a))return e;a=a.slice();ob(a,this.na);(d=this.fa(a,b,c,[ib(a)/b*c,jb(a)/b*c],d))&&(e=new Hs(a,b,c,this.j,d));this.I=e;this.T=this.g;return e};function Hv(a){this.i=a.source;this.Va=yh();this.f=hd();this.o=[0,0];this.Ha=void 0==a.renderBuffer?100:a.renderBuffer;this.A=null;Gv.call(this,{attributions:a.attributions,canvasFunction:this.pk.bind(this),logo:a.logo,projection:a.projection,ratio:a.ratio,resolutions:a.resolutions,state:this.i.V()});this.C=null;this.u=void 0;this.Bi(a.style);z(this.i,"change",this.ho,this)}u(Hv,Gv);k=Hv.prototype;
k.pk=function(a,b,c,d,e){var f=new it(.5*b/c,a,b,this.i.Ha,this.Ha);this.i.Xd(a,b,e);var g=!1;this.i.bc(a,function(a){var d;if(!(d=g)){var e;(d=a.Rc())?e=d.call(a,b):this.u&&(e=this.u(a,b));if(e){var h,p=!1;Array.isArray(e)||(e=[e]);d=0;for(h=e.length;d<h;++d)p=Ft(f,a,e[d],Et(b,c),this.fo,this)||p;d=p}else d=!1}g=d},this);mt(f);if(g)return null;this.o[0]!=d[0]||this.o[1]!=d[1]?(this.f.canvas.width=d[0],this.f.canvas.height=d[1],this.o[0]=d[0],this.o[1]=d[1]):this.f.clearRect(0,0,d[0],d[1]);a=Iv(this,
kb(a),b,c,d);f.i(this.f,c,a,0,{});this.A=f;return this.f.canvas};k.Ba=function(a,b,c,d,e,f){if(this.A){var g={};return this.A.Ba(a,b,0,d,e,function(a){var b=w(a).toString();if(!(b in g))return g[b]=!0,f(a)})}};k.bo=function(){return this.i};k.co=function(){return this.C};k.eo=function(){return this.u};function Iv(a,b,c,d,e){c=d/c;return Hh(a.Va,e[0]/2,e[1]/2,c,-c,0,-b[0],-b[1])}k.fo=function(){this.s()};k.ho=function(){Vt(this,this.i.V())};
k.Bi=function(a){this.C=void 0!==a?a:fl;this.u=a?dl(this.C):void 0;this.s()};function Jv(a,b){Ot.call(this,a,b);this.l=this.i=this.N=null}u(Jv,Ot);function Kv(a,b){var c=b.Y();return Qi(a.c.g,c)}Jv.prototype.Ba=function(a,b,c,d,e){var f=this.a;return f.ka().Ba(a,b.viewState.resolution,b.viewState.rotation,c,b.skippedFeatureUids,function(a){return d.call(e,a,f)})};
Jv.prototype.ig=function(a,b){var c=this.c.g,d=a.pixelRatio,e=a.viewState,f=e.center,g=e.resolution,h=e.rotation,l=this.N,m=this.Fb,n=this.a.ka(),p=a.viewHints,q=a.extent;void 0!==b.extent&&(q=mb(q,b.extent));p[0]||p[1]||hb(q)||(e=n.Y(q,g,d,e.projection))&&tt(this,e)&&(l=e,m=Kv(this,e),this.Fb&&a.postRenderFunctions.push(function(a,b){a.isContextLost()||a.deleteTexture(b)}.bind(null,c,this.Fb)));l&&(c=this.c.i.j,Lv(this,c.width,c.height,d,f,g,h,l.D()),this.l=null,d=this.u,zh(d),Fh(d,1,-1),Gh(d,0,
-1),this.N=l,this.Fb=m,vt(a.attributions,l.i),wt(a,n));return!!l};function Lv(a,b,c,d,e,f,g,h){b*=f;c*=f;a=a.O;zh(a);Fh(a,2*d/b,2*d/c);Eh(a,-g);Gh(a,h[0]-e[0],h[1]-e[1]);Fh(a,(h[2]-h[0])/2,(h[3]-h[1])/2);Gh(a,1,1)}Jv.prototype.Te=function(a,b){return void 0!==this.Ba(a,b,0,jf,this)};
Jv.prototype.gg=function(a,b,c,d){if(this.N&&this.N.Y())if(this.a.ka()instanceof Hv){var e=Dh(b.pixelToCoordinateTransform,a.slice());if(this.Ba(e,b,0,jf,this))return c.call(d,this.a,null)}else{e=[this.N.Y().width,this.N.Y().height];if(!this.l){var f=b.size;b=yh();Gh(b,-1,-1);Fh(b,2/f[0],2/f[1]);Gh(b,0,f[1]);Fh(b,1,-1);var f=Ih(this.O.slice()),g=yh();Gh(g,0,e[1]);Fh(g,1,-1);Fh(g,e[0]/2,e[1]/2);Gh(g,1,1);Bh(g,f);Bh(g,b);this.l=g}a=Dh(this.l,a.slice());if(!(0>a[0]||a[0]>e[0]||0>a[1]||a[1]>e[1])&&(this.i||
(this.i=hd(1,1)),this.i.clearRect(0,0,1,1),this.i.drawImage(this.N.Y(),a[0],a[1],1,1,0,0,1,1),e=this.i.getImageData(0,0,1,1).data,0<e[3]))return c.call(d,this.a,e)}};function Mv(a){th.call(this,a?a:{})}u(Mv,th);Mv.prototype.Gd=function(a){var b=null,c=a.S();"canvas"===c?b=new rv(this):"webgl"===c&&(b=new Jv(a,this));return b};function Nv(a){qv.call(this,a);this.c=null===this.c?null:hd();this.l=null;this.i=[];this.o=Ja();this.Ja=new ta(0,0,0,0);this.C=yh();this.T=0}u(Nv,qv);function Ov(a,b){var c=b.V(),d=a.a.Wd();return 2==c||4==c||3==c&&!d}
Nv.prototype.ud=function(a,b){var c=a.pixelRatio,d=a.size,e=a.viewState,f=e.projection,g=e.resolution,e=e.center,h=this.a,l=h.ka(),m=l.g,n=l.Jb(f),p=n.Qc(g,this.T),q=n.La(p),r=Math.round(g/q)||1,v=a.extent;void 0!==b.extent&&(v=mb(v,b.extent));if(hb(v))return!1;var x=qc(n,v,q),y;y=n.Uc(p);var A=n.La(p),B=Ha(n.eb(p),n.j);y=Wa(y[0]+x.da*B[0]*A,y[1]+x.ga*B[1]*A,y[0]+(x.ba+1)*B[0]*A,y[1]+(x.ja+1)*B[1]*A,void 0);A=l.pb(c);B={};B[p]={};var aa=this.Jf(l,f,B),Ra=this.o,ra=this.Ja,Ka=!1,C,Na,wb;for(Na=x.da;Na<=
x.ba;++Na)for(wb=x.ga;wb<=x.ja;++wb)C=l.Pc(p,Na,wb,c,f),Ov(this,C)||(C=Js(C)),Ov(this,C)?2==C.V()&&(B[p][C.Ga.toString()]=C,Ka||-1!=this.i.indexOf(C)||(Ka=!0)):oc(n,C.Ga,aa,ra,Ra)||(C=pc(n,C.Ga,ra,Ra))&&aa(p+1,C);Na=a.viewHints;if(!(this.f&&16<Date.now()-a.time&&(Na[0]||Na[1])||!Ka&&this.l&&Ua(this.l,v)&&this.kf==m)||r!=this.I){if(Na=this.c)wb=l.Vd(p,c,f),C=Math.round((x.ba-x.da+1)*wb[0]/r),wb=Math.round((x.ja-x.ga+1)*wb[1]/r),Ka=Na.canvas,Ka.width!=C||Ka.height!=wb?(this.I=r,Ka.width=C,Ka.height=
wb):(Na.clearRect(0,0,C,wb),r=this.I);this.i.length=0;Ka=Object.keys(B).map(Number);Ka.sort(ea);var Z,Ta,Pb,cc,$c,re,ra=0;for(Ta=Ka.length;ra<Ta;++ra){Na=Ka[ra];aa=l.Vd(Na,c,f);C=n.La(Na);Z=C/q;Pb=A*l.Rf(f);cc=B[Na];for(var Jd in cc)C=cc[Jd],wb=n.Ua(C.Ga,Ra),Na=(wb[0]-y[0])/q*A/r,wb=(y[3]-wb[3])/q*A/r,$c=aa[0]*Z/r,re=aa[1]*Z/r,this.Kf(C,a,b,Na,wb,$c,re,Pb),this.i.push(C)}this.kf=m;this.f=q*c/A*r;this.l=y}Jd=this.f/g;Jd=Hh(this.C,c*d[0]/2,c*d[1]/2,Jd,Jd,0,(this.l[0]-e[0])/this.f*c,(e[1]-this.l[3])/
this.f*c);Hh(this.u,c*d[0]/2-Jd[4],c*d[1]/2-Jd[5],c/g,-c/g,0,-e[0],-e[1]);xt(a.usedTiles,l,p,x);yt(a,l,n,c,f,v,p,h.Sd());ut(a,l);wt(a,l);return 0<this.i.length};Nv.prototype.Kf=function(a,b,c,d,e,f,g,h){this.a.ka().Uf(b.viewState.projection)||this.c.clearRect(d,e,f,g);(a=a.Y())&&this.c.drawImage(a,h,h,a.width-2*h,a.height-2*h,d,e,f,g)};Nv.prototype.Y=function(){var a=this.c;return a?a.canvas:null};Nv.prototype.A=function(){return this.C};function Pv(){this.b="precision mediump float;varying vec2 a;uniform sampler2D e;void main(void){gl_FragColor=texture2D(e,a);}"}u(Pv,ji);var Qv=new Pv;function Rv(){this.b="varying vec2 a;attribute vec2 b;attribute vec2 c;uniform vec4 d;void main(void){gl_Position=vec4(b*d.xy+d.zw,0.,1.);a=c;}"}u(Rv,ki);var Sv=new Rv;function Tv(a,b){this.g=a.getUniformLocation(b,"e");this.c=a.getUniformLocation(b,"d");this.b=a.getAttribLocation(b,"b");this.a=a.getAttribLocation(b,"c")};function Uv(a,b){Ot.call(this,a,b);this.I=Qv;this.fa=Sv;this.i=null;this.G=new Ai([0,0,0,1,1,0,1,1,0,1,0,0,1,1,1,0]);this.A=this.l=null;this.o=-1;this.Z=[0,0]}u(Uv,Ot);k=Uv.prototype;k.ra=function(){Di(this.c.i,this.G);Ot.prototype.ra.call(this)};k.Jf=function(a,b,c){var d=this.c;return function(e,f){return rt(a,b,e,f,function(a){var b=d.a.b.hasOwnProperty(a.hb());b&&(c[e]||(c[e]={}),c[e][a.Ga.toString()]=a);return b})}};k.hg=function(){Ot.prototype.hg.call(this);this.i=null};
k.ig=function(a,b,c){var d=this.c,e=c.b,f=a.viewState,g=f.projection,h=this.a,l=h.ka(),m=l.Jb(g),n=m.Qc(f.resolution),p=m.La(n),q=l.Vd(n,a.pixelRatio,g),r=q[0]/Ha(m.eb(n),this.Z)[0],v=p/r,x=l.pb(r)*l.Rf(g),y=f.center,A=a.extent,B=qc(m,A,p);if(this.l&&va(this.l,B)&&this.o==l.g)v=this.A;else{var aa=[B.ba-B.da+1,B.ja-B.ga+1],Ra=za(Math.max(aa[0]*q[0],aa[1]*q[1])),aa=v*Ra,ra=m.Uc(n),Ka=ra[0]+B.da*q[0]*v,v=ra[1]+B.ga*q[1]*v,v=[Ka,v,Ka+aa,v+aa];Pt(this,a,Ra);e.viewport(0,0,Ra,Ra);e.clearColor(0,0,0,0);
e.clear(16384);e.disable(3042);Ra=Ei(c,this.I,this.fa);c.Vc(Ra);this.i||(this.i=new Tv(e,Ra));ti(c,34962,this.G);e.enableVertexAttribArray(this.i.b);e.vertexAttribPointer(this.i.b,2,5126,!1,16,0);e.enableVertexAttribArray(this.i.a);e.vertexAttribPointer(this.i.a,2,5126,!1,16,8);e.uniform1i(this.i.g,0);c={};c[n]={};var C=this.Jf(l,g,c),Na=h.Wd(),Ra=!0,Ka=Ja(),wb=new ta(0,0,0,0),Z,Ta,Pb;for(Ta=B.da;Ta<=B.ba;++Ta)for(Pb=B.ga;Pb<=B.ja;++Pb){ra=l.Pc(n,Ta,Pb,r,g);if(void 0!==b.extent&&(Z=m.Ua(ra.Ga,Ka),
!nb(Z,b.extent)))continue;Z=ra.V();(Z=2==Z||4==Z||3==Z&&!Na)||(ra=Js(ra));Z=ra.V();if(2==Z){if(d.a.b.hasOwnProperty(ra.hb())){c[n][ra.Ga.toString()]=ra;continue}}else if(4==Z||3==Z&&!Na)continue;Ra=!1;Z=oc(m,ra.Ga,C,wb,Ka);Z||(ra=pc(m,ra.Ga,wb,Ka))&&C(n+1,ra)}b=Object.keys(c).map(Number);b.sort(ea);for(var C=new Float32Array(4),cc,Na=0,wb=b.length;Na<wb;++Na)for(cc in Ta=c[b[Na]],Ta)ra=Ta[cc],Z=m.Ua(ra.Ga,Ka),C[0]=2*(Z[2]-Z[0])/aa,C[1]=2*(Z[3]-Z[1])/aa,C[2]=2*(Z[0]-v[0])/aa-1,C[3]=2*(Z[1]-v[1])/aa-
1,e.uniform4fv(this.i.c,C),nk(d,ra,q,x*r),e.drawArrays(5,0,4);Ra?(this.l=B,this.A=v,this.o=l.g):(this.A=this.l=null,this.o=-1,a.animate=!0)}xt(a.usedTiles,l,n,B);var $c=d.j;yt(a,l,m,r,g,A,n,h.Sd(),function(a){2!=a.V()||d.a.b.hasOwnProperty(a.hb())||a.hb()in $c.a||$c.i([a,sc(m,a.Ga),m.La(a.Ga[0]),q,x*r])},this);ut(a,l);wt(a,l);e=this.u;zh(e);Gh(e,(Math.round(y[0]/p)*p-v[0])/(v[2]-v[0]),(Math.round(y[1]/p)*p-v[1])/(v[3]-v[1]));f.rotation&&Eh(e,f.rotation);Fh(e,a.size[0]*f.resolution/(v[2]-v[0]),a.size[1]*
f.resolution/(v[3]-v[1]));Gh(e,-.5,-.5);return!0};k.gg=function(a,b,c,d){if(this.f){a=Dh(this.u,[a[0]/b.size[0],(b.size[1]-a[1])/b.size[1]].slice());a=[a[0]*this.j,a[1]*this.j];b=this.c.i.b;b.bindFramebuffer(b.FRAMEBUFFER,this.f);var e=new Uint8Array(4);b.readPixels(a[0],a[1],1,1,b.RGBA,b.UNSIGNED_BYTE,e);if(0<e[3])return c.call(d,this.a,e)}};function Vv(a){a=a?a:{};var b=qb({},a);delete b.preload;delete b.useInterimTilesOnError;th.call(this,b);this.si(void 0!==a.preload?a.preload:0);this.ti(void 0!==a.useInterimTilesOnError?a.useInterimTilesOnError:!0)}u(Vv,th);k=Vv.prototype;k.Gd=function(a){var b=null,c=a.S();"canvas"===c?b=new Nv(this):"webgl"===c&&(b=new Uv(a,this));return b};k.Sd=function(){return this.get("preload")};k.si=function(a){this.set("preload",a)};k.Wd=function(){return this.get("useInterimTilesOnError")};
k.ti=function(a){this.set("useInterimTilesOnError",a)};function Wv(a){this.c=null;Nv.call(this,a);this.G=!1;this.Z=yh();this.T="vector"==a.u?1:0}u(Wv,Nv);var Xv={image:gi,hybrid:["Polygon","LineString"]},Yv={hybrid:["Image","Text"],vector:gi};k=Wv.prototype;k.ud=function(a,b){var c=this.a,d=c.g;this.na!=d&&(this.i.length=0,c=c.u,this.c||"vector"==c||(this.c=hd()),this.c&&"vector"==c&&(this.c=null));this.na=d;return Nv.prototype.ud.apply(this,arguments)};
function Zv(a,b,c){function d(a){var b,c=a.Rc();c?b=c.call(a,r):(c=e.i)&&(b=c(a,r));if(b){Array.isArray(b)||(b=[b]);var c=B,d=A;if(b){var f=!1;if(Array.isArray(b))for(var g=0,h=b.length;g<h;++g)f=Ft(d,a,b[g],c,this.yi,this)||f;else f=Ft(d,a,b,c,this.yi,this)||f;a=f}else a=!1;this.G=this.G||a;l.Od=l.Od||a}}var e=a.a,f=c.pixelRatio;c=c.viewState.projection;var g=e.g,h=e.get(It)||null,l=b.g;if(l.Od||l.kf!=g||l.Eg!=h){l.zd=null;l.Od=!1;var m=e.ka(),n=m.tileGrid,p=b.Ga,q=b.j,r=n.La(p[0]),v,x,y;"tile-pixels"==
q.Kb()?(v=y=m.pb(),n=Ha(n.eb(p[0])),v=[0,0,n[0]*v,n[1]*v]):(y=r,v=n.Ua(p),bc(c,q)||(x=!0,b.dg(c)));l.Od=!1;var A=new it(0,v,y,m.f,e.c),B=Et(y,f);b=b.f;h&&h!==l.Eg&&b.sort(h);m=0;for(y=b.length;m<y;++m)f=b[m],x&&f.U().tb(q,c),d.call(a,f);mt(A);l.kf=g;l.Eg=h;l.zd=A;l.resolution=NaN}}
k.Kf=function(a,b,c,d,e,f,g,h){var l=a;Zv(this,l,b);if(this.c){var m=l,n=b,p=this.a,l=m.g,q=p.g,r=Xv[p.u];if(r&&l.Fg!==q){l.Fg=q;var v=m.Ga,x=m.Ga[0],q=n.pixelRatio,y=p.ka(),A=y.tileGrid,B=y.pb(),p=zh(this.Z);"tile-pixels"==m.j.Kb()?(v=q/B,Fh(p,v,v)):(B=q/A.La(x),v=A.Ua(v,this.o),Fh(p,B,-B),Gh(p,-v[0],-v[3]));m.c||(m.c=hd());m=m.c;n=y.Vd(x,q,n.viewState.projection);m.canvas.width=n[0];m.canvas.height=n[1];l.zd.i(m,q,p,0,{},r)}Nv.prototype.Kf.apply(this,arguments)}};
k.Ba=function(a,b,c,d,e){var f=b.viewState.resolution;b=b.viewState.rotation;c=void 0==c?0:c;var g=this.a,h={},l=this.i,m=g.ka(),n=m.tileGrid,p,q,r,v,x,y;r=0;for(v=l.length;r<v;++r)y=l[r],q=y.Ga,x=m.tileGrid.Ua(q,this.o),Qa(Ma(x,c*f),a)&&("tile-pixels"===y.j.Kb()?(x=fb(x),f=m.pb(),q=n.La(q[0])/f,q=[(a[0]-x[0])/q,(x[1]-a[1])/q]):q=a,y=y.g.zd,p=p||y.Ba(q,f,b,c,{},function(a){var b=w(a).toString();if(!(b in h))return h[b]=!0,d.call(e,a,g)}));return p};k.yi=function(){st(this)};
k.cf=function(a,b,c){var d=Yv[this.a.u];if(d)for(var e=b.pixelRatio,f=b.viewState.rotation,g=b.size,h=Math.round(e*g[0]/2),g=Math.round(e*g[1]/2),l=this.i,m=[],n=[],p=l.length-1;0<=p;--p){var q=l[p],r;var v=q;r=b;if("tile-pixels"==v.j.Kb()){var x=this.a.ka(),y=x.tileGrid,A=v.Ga,x=y.La(A[0])/x.pb(),v=r.viewState,B=r.pixelRatio,aa=v.resolution/B,A=y.Ua(A,this.o),y=v.center,A=fb(A);r=r.size;r=Hh(this.Z,Math.round(B*r[0]/2),Math.round(B*r[1]/2),x/aa,x/aa,v.rotation,(A[0]-y[0])/x,(y[1]-A[1])/x)}else r=
Ct(this,r,0);x=ot(q.g.zd,r);v=q.Ga[0];a.save();a.globalAlpha=c.opacity;Sh(a,-f,h,g);B=0;for(aa=m.length;B<aa;++B)y=m[B],v<n[B]&&(a.beginPath(),a.moveTo(x[0],x[1]),a.lineTo(x[2],x[3]),a.lineTo(x[4],x[5]),a.lineTo(x[6],x[7]),a.moveTo(y[6],y[7]),a.lineTo(y[4],y[5]),a.lineTo(y[2],y[3]),a.lineTo(y[0],y[1]),a.clip());q.g.zd.i(a,e,r,f,{},d);a.restore();m.push(x);n.push(v)}Nv.prototype.cf.apply(this,arguments)};function V(a){a=a?a:{};var b=qb({},a);delete b.preload;delete b.useInterimTilesOnError;S.call(this,b);this.ui(a.preload?a.preload:0);this.vi(a.useInterimTilesOnError?a.useInterimTilesOnError:!0);sa(void 0==a.renderMode||"image"==a.renderMode||"hybrid"==a.renderMode||"vector"==a.renderMode,28);this.u=a.renderMode||"hybrid"}u(V,S);k=V.prototype;k.Gd=function(a){var b=null;"canvas"===a.S()&&(b=new Wv(this));return b};k.Sd=function(){return this.get("preload")};k.Wd=function(){return this.get("useInterimTilesOnError")};
k.ui=function(a){this.set("preload",a)};k.vi=function(a){this.set("useInterimTilesOnError",a)};function $v(a,b,c,d){function e(){delete window[g];f.parentNode.removeChild(f)}var f=document.createElement("script"),g="olc_"+w(b);f.async=!0;f.src=a+(-1==a.indexOf("?")?"?":"&")+(d||"callback")+"="+g;var h=setTimeout(function(){e();c&&c()},1E4);window[g]=function(a){clearTimeout(h);e();b(a)};document.getElementsByTagName("head")[0].appendChild(f)};function aw(a,b,c,d,e,f,g,h,l,m,n){Is.call(this,e,0);this.C=void 0!==n?n:!1;this.A=g;this.O=h;this.v=null;this.c=b;this.l=d;this.o=f?f:e;this.g=[];this.Ad=null;this.f=0;f=d.Ua(this.o);h=this.l.D();e=this.c.D();f=h?mb(f,h):f;if(gb(f))if((h=a.D())&&(e?e=mb(e,h):e=h),d=sv(a,c,kb(f),d.La(this.o[0])),!isFinite(d)||0>=d)this.state=4;else if(this.u=new vv(a,c,f,e,d*(void 0!==m?m:.5)),this.u.c.length)if(this.f=b.Qc(d),c=xv(this.u),e&&(a.a?(c[1]=xa(c[1],e[1],e[3]),c[3]=xa(c[3],e[1],e[3])):c=mb(c,e)),gb(c)){a=
nc(b,c,this.f);for(b=a.da;b<=a.ba;b++)for(c=a.ga;c<=a.ja;c++)(m=l(this.f,b,c,g))&&this.g.push(m);this.g.length||(this.state=4)}else this.state=4;else this.state=4;else this.state=4}u(aw,Is);aw.prototype.ra=function(){1==this.state&&(this.Ad.forEach(Bc),this.Ad=null);Is.prototype.ra.call(this)};aw.prototype.Y=function(){return this.v};
aw.prototype.ce=function(){var a=[];this.g.forEach(function(b){b&&2==b.V()&&a.push({extent:this.c.Ua(b.Ga),image:b.Y()})},this);this.g.length=0;if(a.length){var b=this.o[0],c=this.l.eb(b),d="number"===typeof c?c:c[0],c="number"===typeof c?c:c[1],b=this.l.La(b),e=this.c.La(this.f),f=this.l.Ua(this.o);this.v=uv(d,c,this.A,e,this.c.D(),b,f,this.u,a,this.O,this.C);this.state=2}else this.state=3;this.s()};
aw.prototype.load=function(){if(0==this.state){this.state=1;this.s();var a=0;this.Ad=[];this.g.forEach(function(b){var c=b.V();if(0==c||1==c){a++;var d;d=z(b,"change",function(){var c=b.V();if(2==c||3==c||4==c)Bc(d),a--,a||(this.Ad.forEach(Bc),this.Ad=null,this.ce())},this);this.Ad.push(d)}},this);this.g.forEach(function(a){0==a.V()&&a.load()});a||setTimeout(this.ce.bind(this),0)}};function bw(a,b){var c=/\{z\}/g,d=/\{x\}/g,e=/\{y\}/g,f=/\{-y\}/g;return function(g){if(g)return a.replace(c,g[0].toString()).replace(d,g[1].toString()).replace(e,function(){return(-g[2]-1).toString()}).replace(f,function(){var a=b.a?b.a[g[0]]:null;sa(a,55);return(a.ja-a.ga+1+g[2]).toString()})}}function cw(a,b){for(var c=a.length,d=Array(c),e=0;e<c;++e)d[e]=bw(a[e],b);return dw(d)}function dw(a){return 1===a.length?a[0]:function(b,c,d){if(b)return a[Da((b[1]<<b[0])+b[2],a.length)](b,c,d)}}
function ew(){}function fw(a){var b=[],c=/\{([a-z])-([a-z])\}/.exec(a);if(c){var d=c[2].charCodeAt(0),e;for(e=c[1].charCodeAt(0);e<=d;++e)b.push(a.replace(c[0],String.fromCharCode(e)));return b}if(c=c=/\{(\d+)-(\d+)\}/.exec(a)){d=parseInt(c[2],10);for(e=parseInt(c[1],10);e<=d;e++)b.push(a.replace(c[0],e.toString()));return b}b.push(a);return b};function gw(a){lk.call(this);this.highWaterMark=void 0!==a?a:2048}u(gw,lk);function hw(a){return a.c>a.highWaterMark}gw.prototype.ld=function(a){for(var b,c;hw(this);){b=this.a.cd;c=b.Ga[0].toString();var d;if(d=c in a)b=b.Ga,d=ua(a[c],b[1],b[2]);if(d)break;else Kc(this.pop())}};function iw(a){Tt.call(this,{attributions:a.attributions,extent:a.extent,logo:a.logo,projection:a.projection,state:a.state,wrapX:a.wrapX});this.na=void 0!==a.opaque?a.opaque:!1;this.Va=void 0!==a.tilePixelRatio?a.tilePixelRatio:1;this.tileGrid=void 0!==a.tileGrid?a.tileGrid:null;this.a=new gw(a.cacheSize);this.l=[0,0];this.wc=""}u(iw,Tt);k=iw.prototype;k.Ei=function(){return hw(this.a)};k.ld=function(a,b){var c=this.Ud(a);c&&c.ld(b)};
function rt(a,b,c,d,e){b=a.Ud(b);if(!b)return!1;for(var f=!0,g,h,l=d.da;l<=d.ba;++l)for(var m=d.ga;m<=d.ja;++m)g=a.Tb(c,l,m),h=!1,b.b.hasOwnProperty(g)&&(g=b.get(g),(h=2===g.V())&&(h=!1!==e(g))),h||(f=!1);return f}k.Rf=function(){return 0};function jw(a,b){a.wc!==b&&(a.wc=b,a.s())}k.Tb=function(a,b,c){return a+"/"+b+"/"+c};k.Uf=function(){return this.na};k.ab=function(){return this.tileGrid};k.Jb=function(a){return this.tileGrid?this.tileGrid:tc(a)};
k.Ud=function(a){var b=this.c;return b&&!bc(b,a)?null:this.a};k.pb=function(){return this.Va};k.Vd=function(a,b,c){c=this.Jb(c);b=this.pb(b);a=Ha(c.eb(a),this.l);return 1==b?a:Ga(a,b,this.l)};function kw(a,b,c){var d=void 0!==c?c:a.c;c=a.Jb(d);if(a.G&&d.g){var e=b;b=e[0];a=sc(c,e);d=uc(d);Qa(d,a)?b=e:(e=ib(d),a[0]+=e*Math.ceil((d[0]-a[0])/e),b=c.Xf(a,b))}e=b[0];d=b[1];a=b[2];if(c.minZoom>e||e>c.maxZoom)c=!1;else{var f=c.D();c=(c=f?nc(c,f,e):c.a?c.a[e]:null)?ua(c,d,a):!0}return c?b:null}
k.va=function(){this.a.clear();this.s()};k.Mg=oa;function lw(a,b){Lc.call(this,a);this.tile=b}u(lw,Lc);function mw(a){iw.call(this,{attributions:a.attributions,cacheSize:a.cacheSize,extent:a.extent,logo:a.logo,opaque:a.opaque,projection:a.projection,state:a.state,tileGrid:a.tileGrid,tilePixelRatio:a.tilePixelRatio,wrapX:a.wrapX});this.tileLoadFunction=a.tileLoadFunction;this.tileUrlFunction=this.Hc?this.Hc.bind(this):ew;this.urls=null;a.urls?this.cb(a.urls):a.url&&this.ib(a.url);a.tileUrlFunction&&this.bb(a.tileUrlFunction)}u(mw,iw);k=mw.prototype;k.ob=function(){return this.tileLoadFunction};
k.qb=function(){return this.tileUrlFunction};k.rb=function(){return this.urls};k.Fi=function(a){a=a.target;switch(a.V()){case 1:this.b(new lw("tileloadstart",a));break;case 2:this.b(new lw("tileloadend",a));break;case 3:this.b(new lw("tileloaderror",a))}};k.wb=function(a){this.a.clear();this.tileLoadFunction=a;this.s()};k.bb=function(a,b){this.tileUrlFunction=a;"undefined"!==typeof b?jw(this,b):this.s()};
k.ib=function(a){var b=this.urls=fw(a);this.bb(this.Hc?this.Hc.bind(this):cw(b,this.tileGrid),a)};k.cb=function(a){this.urls=a;var b=a.join("\n");this.bb(this.Hc?this.Hc.bind(this):cw(a,this.tileGrid),b)};k.Mg=function(a,b,c){a=this.Tb(a,b,c);this.a.b.hasOwnProperty(a)&&this.a.get(a)};function W(a){mw.call(this,{attributions:a.attributions,cacheSize:a.cacheSize,extent:a.extent,logo:a.logo,opaque:a.opaque,projection:a.projection,state:a.state,tileGrid:a.tileGrid,tileLoadFunction:a.tileLoadFunction?a.tileLoadFunction:nw,tilePixelRatio:a.tilePixelRatio,tileUrlFunction:a.tileUrlFunction,url:a.url,urls:a.urls,wrapX:a.wrapX});this.crossOrigin=void 0!==a.crossOrigin?a.crossOrigin:null;this.tileClass=a.tileClass?a.tileClass:Ks;this.f={};this.u={};this.Ha=a.reprojectionErrorThreshold;this.C=
!1}u(W,mw);k=W.prototype;k.Ei=function(){if(hw(this.a))return!0;for(var a in this.f)if(hw(this.f[a]))return!0;return!1};k.ld=function(a,b){var c=this.Ud(a);this.a.ld(this.a==c?b:{});for(var d in this.f){var e=this.f[d];e.ld(e==c?b:{})}};k.Rf=function(a){return this.c&&a&&!bc(this.c,a)?0:this.Sf()};k.Sf=function(){return 0};k.Uf=function(a){return this.c&&a&&!bc(this.c,a)?!1:mw.prototype.Uf.call(this,a)};
k.Jb=function(a){var b=this.c;return!this.tileGrid||b&&!bc(b,a)?(b=w(a).toString(),b in this.u||(this.u[b]=tc(a)),this.u[b]):this.tileGrid};k.Ud=function(a){var b=this.c;if(!b||bc(b,a))return this.a;a=w(a).toString();a in this.f||(this.f[a]=new gw(this.a.highWaterMark));return this.f[a]};function ow(a,b,c,d,e,f,g){b=[b,c,d];e=(c=kw(a,b,f))?a.tileUrlFunction(c,e,f):void 0;e=new a.tileClass(b,void 0!==e?0:4,void 0!==e?e:"",a.crossOrigin,a.tileLoadFunction);e.key=g;z(e,"change",a.Fi,a);return e}
k.Pc=function(a,b,c,d,e){if(this.c&&e&&!bc(this.c,e)){var f=this.Ud(e);c=[a,b,c];var g;a=this.Tb.apply(this,c);f.b.hasOwnProperty(a)&&(g=f.get(a));b=this.wc;if(g&&g.key==b)return g;var h=this.c,l=this.Jb(h),m=this.Jb(e),n=kw(this,c,e);d=new aw(h,l,e,m,c,n,this.pb(d),this.Sf(),function(a,b,c,d){return pw(this,a,b,c,d,h)}.bind(this),this.Ha,this.C);d.key=b;g?(d.a=g,f.replace(a,d)):f.set(a,d);return d}return pw(this,a,b,c,d,e)};
function pw(a,b,c,d,e,f){var g,h=a.Tb(b,c,d),l=a.wc;if(a.a.b.hasOwnProperty(h)){if(g=a.a.get(h),g.key!=l){var m=g;g=ow(a,b,c,d,e,f,l);0==m.V()?g.a=m.a:g.a=m;if(g.a){b=g.a;c=g;do{if(2==b.V()){b.a=null;break}else 1==b.V()?c=b:0==b.V()?c.a=b.a:c=b;b=c.a}while(b)}a.a.replace(h,g)}}else g=ow(a,b,c,d,e,f,l),a.a.set(h,g);return g}k.Ob=function(a){if(this.C!=a){this.C=a;for(var b in this.f)this.f[b].clear();this.s()}};k.Pb=function(a,b){var c=Tb(a);c&&(c=w(c).toString(),c in this.u||(this.u[c]=b))};
function nw(a,b){a.Y().src=b};function qw(a){this.A=void 0!==a.hidpi?a.hidpi:!1;W.call(this,{cacheSize:a.cacheSize,crossOrigin:"anonymous",opaque:!0,projection:Tb("EPSG:3857"),reprojectionErrorThreshold:a.reprojectionErrorThreshold,state:"loading",tileLoadFunction:a.tileLoadFunction,tilePixelRatio:this.A?2:1,wrapX:void 0!==a.wrapX?a.wrapX:!0});this.I=void 0!==a.culture?a.culture:"en-us";this.v=void 0!==a.maxZoom?a.maxZoom:-1;this.i=a.key;this.o=a.imagerySet;$v("https://dev.virtualearth.net/REST/v1/Imagery/Metadata/"+this.o+"?uriScheme=https&include=ImageryProviders&key="+
this.i,this.fa.bind(this),void 0,"jsonp")}u(qw,W);var rw=new xc({html:'<a class="ol-attribution-bing-tos" href="http://www.microsoft.com/maps/product/terms.html">Terms of Use</a>'});qw.prototype.T=function(){return this.i};qw.prototype.ea=function(){return this.o};
qw.prototype.fa=function(a){if(200!=a.statusCode||"OK"!=a.statusDescription||"ValidCredentials"!=a.authenticationResultCode||1!=a.resourceSets.length||1!=a.resourceSets[0].resources.length)Vt(this,"error");else{var b=a.brandLogoUri;-1==b.indexOf("https")&&(b=b.replace("http","https"));var c=a.resourceSets[0].resources[0],d=-1==this.v?c.zoomMax:this.v;a=uc(this.c);var e=wc({extent:a,minZoom:c.zoomMin,maxZoom:d,tileSize:(c.imageWidth==c.imageHeight?c.imageWidth:[c.imageWidth,c.imageHeight])/this.pb()});
this.tileGrid=e;var f=this.I,g=this.A;this.tileUrlFunction=dw(c.imageUrlSubdomains.map(function(a){var b=[0,0,0],d=c.imageUrl.replace("{subdomain}",a).replace("{culture}",f);return function(a){if(a)return ic(a[0],a[1],-a[2]-1,b),a=d,g&&(a+="&dpi=d1&device=mobile"),a.replace("{quadkey}",jc(b))}}));if(c.imageryProviders){var h=Sb(Tb("EPSG:4326"),this.c);a=c.imageryProviders.map(function(a){var b=a.attribution,c={};a.coverageAreas.forEach(function(a){var b=a.zoomMin,f=Math.min(a.zoomMax,d);a=a.bbox;
a=pb([a[1],a[0],a[3],a[2]],h);var g,l;for(g=b;g<=f;++g)l=g.toString(),b=nc(e,a,g),l in c?c[l].push(b):c[l]=[b]});return new xc({html:b,tileRanges:c})});a.push(rw);this.ua(a)}this.Z=b;Vt(this,"ready")}};function sw(a){a=a||{};var b=void 0!==a.projection?a.projection:"EPSG:3857",c=void 0!==a.tileGrid?a.tileGrid:wc({extent:uc(b),maxZoom:a.maxZoom,minZoom:a.minZoom,tileSize:a.tileSize});W.call(this,{attributions:a.attributions,cacheSize:a.cacheSize,crossOrigin:a.crossOrigin,logo:a.logo,opaque:a.opaque,projection:b,reprojectionErrorThreshold:a.reprojectionErrorThreshold,tileGrid:c,tileLoadFunction:a.tileLoadFunction,tilePixelRatio:a.tilePixelRatio,tileUrlFunction:a.tileUrlFunction,url:a.url,urls:a.urls,
wrapX:void 0!==a.wrapX?a.wrapX:!0})}u(sw,W);function tw(a){this.v=a.account;this.A=a.map||"";this.i=a.config||{};this.o={};sw.call(this,{attributions:a.attributions,cacheSize:a.cacheSize,crossOrigin:a.crossOrigin,logo:a.logo,maxZoom:void 0!==a.maxZoom?a.maxZoom:18,minZoom:a.minZoom,projection:a.projection,state:"loading",wrapX:a.wrapX});uw(this)}u(tw,sw);k=tw.prototype;k.Gk=function(){return this.i};k.iq=function(a){qb(this.i,a);uw(this)};k.Np=function(a){this.i=a||{};uw(this)};
function uw(a){var b=JSON.stringify(a.i);if(a.o[b])vw(a,a.o[b]);else{var c="https://"+a.v+".cartodb.com/api/v1/map";a.A&&(c+="/named/"+a.A);var d=new XMLHttpRequest;d.addEventListener("load",a.yl.bind(a,b));d.addEventListener("error",a.xl.bind(a));d.open("POST",c);d.setRequestHeader("Content-type","application/json");d.send(JSON.stringify(a.i))}}
k.yl=function(a,b){var c=b.target;if(!c.status||200<=c.status&&300>c.status){var d;try{d=JSON.parse(c.responseText)}catch(e){Vt(this,"error");return}vw(this,d);this.o[a]=d;Vt(this,"ready")}else Vt(this,"error")};k.xl=function(){Vt(this,"error")};function vw(a,b){a.ib("https://"+b.cdn_url.https+"/"+a.v+"/api/v1/map/"+b.layergroupid+"/{z}/{x}/{y}.png")};function X(a){T.call(this,{attributions:a.attributions,extent:a.extent,logo:a.logo,projection:a.projection,wrapX:a.wrapX});this.C=void 0;this.I=void 0!==a.distance?a.distance:20;this.A=[];this.Qa=a.geometryFunction||function(a){a=a.U();sa(a instanceof E,10);return a};this.v=a.source;this.v.J("change",X.prototype.bj,this)}u(X,T);k=X.prototype;k.Qn=function(){return this.I};k.Rn=function(){return this.v};k.Xd=function(a,b,c){this.v.Xd(a,b,c);b!==this.C&&(this.clear(),this.C=b,ww(this),this.gd(this.A))};
k.Op=function(a){this.I=a;this.bj()};k.bj=function(){this.clear();ww(this);this.gd(this.A);this.s()};function ww(a){if(void 0!==a.C){a.A.length=0;for(var b=Ja(),c=a.I*a.C,d=a.v.We(),e={},f=0,g=d.length;f<g;f++){var h=d[f];w(h).toString()in e||!(h=a.Qa(h))||(h=h.W(),Xa(h,b),Ma(b,c,b),h=a.v.Pf(b),h=h.filter(function(a){a=w(a).toString();return a in e?!1:e[a]=!0}),a.A.push(xw(a,h)))}}}
function xw(a,b){for(var c=[0,0],d=b.length-1;0<=d;--d){var e=a.Qa(b[d]);e?Xe(c,e.W()):b.splice(d,1)}df(c,1/b.length);c=new I(new E(c));c.set("features",b);return c};function yw(a,b){var c=[];Object.keys(b).forEach(function(a){null!==b[a]&&void 0!==b[a]&&c.push(a+"="+encodeURIComponent(b[a]))});var d=c.join("&");a=a.replace(/[?&]$/,"");a=-1===a.indexOf("?")?a+"?":a+"&";return a+d};function zw(a){a=a||{};zv.call(this,{attributions:a.attributions,logo:a.logo,projection:a.projection,resolutions:a.resolutions});this.I=void 0!==a.crossOrigin?a.crossOrigin:null;this.T=void 0!==a.hidpi?a.hidpi:!0;this.i=a.url;this.f=a.imageLoadFunction?a.imageLoadFunction:Fv;this.u=a.params||{};this.N=null;this.o=[0,0];this.C=0;this.A=void 0!==a.ratio?a.ratio:1.5}u(zw,zv);k=zw.prototype;k.Tn=function(){return this.u};
k.Lc=function(a,b,c,d){if(void 0===this.i)return null;b=Av(this,b);c=this.T?c:1;var e=this.N;if(e&&this.C==this.g&&e.resolution==b&&e.a==c&&Ua(e.D(),a))return e;e={F:"image",FORMAT:"PNG32",TRANSPARENT:!0};qb(e,this.u);a=a.slice();var f=(a[0]+a[2])/2,g=(a[1]+a[3])/2;if(1!=this.A){var h=this.A*ib(a)/2,l=this.A*jb(a)/2;a[0]=f-h;a[1]=g-l;a[2]=f+h;a[3]=g+l}var h=b/c,l=Math.ceil(ib(a)/h),m=Math.ceil(jb(a)/h);a[0]=f-h*l/2;a[2]=f+h*l/2;a[1]=g-h*m/2;a[3]=g+h*m/2;this.o[0]=l;this.o[1]=m;f=a;g=this.o;h=c;d=
d.nb.split(":").pop();e.SIZE=g[0]+","+g[1];e.BBOX=f.join(",");e.BBOXSR=d;e.IMAGESR=d;e.DPI=Math.round(90*h);d=this.i;f=d.replace(/MapServer\/?$/,"MapServer/export").replace(/ImageServer\/?$/,"ImageServer/exportImage");f==d&&sa(!1,50);e=yw(f,e);this.N=new Gs(a,b,c,this.j,e,this.I,this.f);this.C=this.g;z(this.N,"change",this.l,this);return this.N};k.Sn=function(){return this.f};k.Un=function(){return this.i};k.Vn=function(a){this.N=null;this.f=a;this.s()};
k.Wn=function(a){a!=this.i&&(this.i=a,this.N=null,this.s())};k.Xn=function(a){qb(this.u,a);this.N=null;this.s()};function Aw(a){zv.call(this,{projection:a.projection,resolutions:a.resolutions});this.I=void 0!==a.crossOrigin?a.crossOrigin:null;this.o=void 0!==a.displayDpi?a.displayDpi:96;this.f=a.params||{};this.C=a.url;this.i=a.imageLoadFunction?a.imageLoadFunction:Fv;this.T=void 0!==a.hidpi?a.hidpi:!0;this.fa=void 0!==a.metersPerUnit?a.metersPerUnit:1;this.u=void 0!==a.ratio?a.ratio:1;this.na=void 0!==a.useOverlay?a.useOverlay:!1;this.N=null;this.A=0}u(Aw,zv);k=Aw.prototype;k.Zn=function(){return this.f};
k.Lc=function(a,b,c){b=Av(this,b);c=this.T?c:1;var d=this.N;if(d&&this.A==this.g&&d.resolution==b&&d.a==c&&Ua(d.D(),a))return d;1!=this.u&&(a=a.slice(),ob(a,this.u));var e=[ib(a)/b*c,jb(a)/b*c];if(void 0!==this.C){var d=this.C,f=kb(a),g=this.fa,h=ib(a),l=jb(a),m=e[0],n=e[1],p=.0254/this.o,e={OPERATION:this.na?"GETDYNAMICMAPOVERLAYIMAGE":"GETMAPIMAGE",VERSION:"2.0.0",LOCALE:"en",CLIENTAGENT:"ol.source.ImageMapGuide source",CLIP:"1",SETDISPLAYDPI:this.o,SETDISPLAYWIDTH:Math.round(e[0]),SETDISPLAYHEIGHT:Math.round(e[1]),
SETVIEWSCALE:n*h>m*l?h*g/(m*p):l*g/(n*p),SETVIEWCENTERX:f[0],SETVIEWCENTERY:f[1]};qb(e,this.f);d=yw(d,e);d=new Gs(a,b,c,this.j,d,this.I,this.i);z(d,"change",this.l,this)}else d=null;this.N=d;this.A=this.g;return d};k.Yn=function(){return this.i};k.ao=function(a){qb(this.f,a);this.s()};k.$n=function(a){this.N=null;this.i=a;this.s()};function Bw(a){var b=a.imageExtent,c=void 0!==a.crossOrigin?a.crossOrigin:null,d=a.imageLoadFunction?a.imageLoadFunction:Fv;zv.call(this,{attributions:a.attributions,logo:a.logo,projection:Tb(a.projection)});this.N=new Gs(b,void 0,1,this.j,a.url,c,d);this.i=a.imageSize?a.imageSize:null;z(this.N,"change",this.l,this)}u(Bw,zv);Bw.prototype.Lc=function(a){return nb(a,this.N.D())?this.N:null};
Bw.prototype.l=function(a){if(2==this.N.V()){var b=this.N.D(),c=this.N.Y(),d,e;this.i?(d=this.i[0],e=this.i[1]):(d=c.width,e=c.height);b=Math.ceil(ib(b)/(jb(b)/e));if(b!=d){var b=hd(b,e),f=b.canvas;b.drawImage(c,0,0,d,e,0,0,f.width,f.height);this.N.Hg(f)}}zv.prototype.l.call(this,a)};function Cw(a){a=a||{};zv.call(this,{attributions:a.attributions,logo:a.logo,projection:a.projection,resolutions:a.resolutions});this.fa=void 0!==a.crossOrigin?a.crossOrigin:null;this.f=a.url;this.u=a.imageLoadFunction?a.imageLoadFunction:Fv;this.i=a.params||{};this.o=!0;Dw(this);this.T=a.serverType;this.na=void 0!==a.hidpi?a.hidpi:!0;this.N=null;this.A=[0,0];this.I=0;this.C=void 0!==a.ratio?a.ratio:1.5}u(Cw,zv);var Ew=[101,101];k=Cw.prototype;
k.io=function(a,b,c,d){if(void 0!==this.f){var e=lb(a,b,0,Ew),f={SERVICE:"WMS",VERSION:"1.3.0",REQUEST:"GetFeatureInfo",FORMAT:"image/png",TRANSPARENT:!0,QUERY_LAYERS:this.i.LAYERS};qb(f,this.i,d);d=Math.floor((e[3]-a[1])/b);f[this.o?"I":"X"]=Math.floor((a[0]-e[0])/b);f[this.o?"J":"Y"]=d;return Fw(this,e,Ew,1,Tb(c),f)}};k.ko=function(){return this.i};
k.Lc=function(a,b,c,d){if(void 0===this.f)return null;b=Av(this,b);1==c||this.na&&void 0!==this.T||(c=1);var e=b/c,f=kb(a),g=lb(f,e,0,[Math.ceil(ib(a)/e),Math.ceil(jb(a)/e)]);a=lb(f,e,0,[Math.ceil(this.C*ib(a)/e),Math.ceil(this.C*jb(a)/e)]);if((f=this.N)&&this.I==this.g&&f.resolution==b&&f.a==c&&Ua(f.D(),g))return f;g={SERVICE:"WMS",VERSION:"1.3.0",REQUEST:"GetMap",FORMAT:"image/png",TRANSPARENT:!0};qb(g,this.i);this.A[0]=Math.round(ib(a)/e);this.A[1]=Math.round(jb(a)/e);d=Fw(this,a,this.A,c,d,g);
this.N=new Gs(a,b,c,this.j,d,this.fa,this.u);this.I=this.g;z(this.N,"change",this.l,this);return this.N};k.jo=function(){return this.u};
function Fw(a,b,c,d,e,f){sa(void 0!==a.f,9);f[a.o?"CRS":"SRS"]=e.nb;"STYLES"in a.i||(f.STYLES="");if(1!=d)switch(a.T){case "geoserver":d=90*d+.5|0;f.FORMAT_OPTIONS="FORMAT_OPTIONS"in f?f.FORMAT_OPTIONS+(";dpi:"+d):"dpi:"+d;break;case "mapserver":f.MAP_RESOLUTION=90*d;break;case "carmentaserver":case "qgis":f.DPI=90*d;break;default:sa(!1,8)}f.WIDTH=c[0];f.HEIGHT=c[1];c=e.b;var g;a.o&&"ne"==c.substr(0,2)?g=[b[1],b[0],b[3],b[2]]:g=b;f.BBOX=g.join(",");return yw(a.f,f)}k.lo=function(){return this.f};
k.mo=function(a){this.N=null;this.u=a;this.s()};k.no=function(a){a!=this.f&&(this.f=a,this.N=null,this.s())};k.oo=function(a){qb(this.i,a);Dw(this);this.N=null;this.s()};function Dw(a){a.o=0<=We(a.i.VERSION||"1.3.0")};function Gw(a){a=a||{};var b;void 0!==a.attributions?b=a.attributions:b=[Hw];sw.call(this,{attributions:b,cacheSize:a.cacheSize,crossOrigin:void 0!==a.crossOrigin?a.crossOrigin:"anonymous",opaque:void 0!==a.opaque?a.opaque:!0,maxZoom:void 0!==a.maxZoom?a.maxZoom:19,reprojectionErrorThreshold:a.reprojectionErrorThreshold,tileLoadFunction:a.tileLoadFunction,url:void 0!==a.url?a.url:"https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png",wrapX:a.wrapX})}u(Gw,sw);var Hw=new xc({html:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors.'});(function(){var a={},b={ma:a};(function(c){if("object"===typeof a&&"undefined"!==typeof b)b.ma=c();else{var d;"undefined"!==typeof window?d=window:"undefined"!==typeof global?d=global:"undefined"!==typeof self?d=self:d=this;d.Cq=c()}})(function(){return function d(a,b,g){function e(h,l){if(!b[h]){if(!a[h]){var m="function"==typeof require&&require;if(!l&&m)return m(h,!0);if(f)return f(h,!0);m=Error("Cannot find module '"+h+"'");throw m.code="MODULE_NOT_FOUND",m;}m=b[h]={ma:{}};a[h][0].call(m.ma,function(b){var d=
a[h][1][b];return e(d?d:b)},m,m.ma,d,a,b,g)}return b[h].ma}for(var f="function"==typeof require&&require,m=0;m<g.length;m++)e(g[m]);return e}({1:[function(a,b,f){a=a("./processor");f.Pj=a},{"./processor":2}],2:[function(a,b){function d(a){var b=!0;try{new ImageData(10,10)}catch(q){b=!1}return function(d){var e=d.buffers,f=d.meta,g=d.width,h=d.height,l=e.length,m=e[0].byteLength;if(d.imageOps){m=Array(l);for(d=0;d<l;++d){var n=m,p=d,q;q=new Uint8ClampedArray(e[d]);var Ka=g,C=h;q=b?new ImageData(q,
Ka,C):{data:q,width:Ka,height:C};n[p]=q}g=a(m,f).data}else{g=new Uint8ClampedArray(m);h=Array(l);n=Array(l);for(d=0;d<l;++d)h[d]=new Uint8ClampedArray(e[d]),n[d]=[0,0,0,0];for(e=0;e<m;e+=4){for(d=0;d<l;++d)p=h[d],n[d][0]=p[e],n[d][1]=p[e+1],n[d][2]=p[e+2],n[d][3]=p[e+3];d=a(n,f);g[e]=d[0];g[e+1]=d[1];g[e+2]=d[2];g[e+3]=d[3]}}return g.buffer}}function e(a,b){var e=Object.keys(a.lib||{}).map(function(b){return"var "+b+" = "+a.lib[b].toString()+";"}).concat(["var __minion__ = ("+d.toString()+")(",a.operation.toString(),
");",'self.addEventListener("message", function(event) {',"  var buffer = __minion__(event.data);","  self.postMessage({buffer: buffer, meta: event.data.meta}, [buffer]);","});"]),e=URL.createObjectURL(new Blob(e,{type:"text/javascript"})),e=new Worker(e);e.addEventListener("message",b);return e}function h(a,b){var e=d(a.operation);return{postMessage:function(a){setTimeout(function(){b({data:{buffer:e(a),meta:a.meta}})},0)}}}function l(a){this.Bf=!!a.Vl;var b;0===a.threads?b=0:this.Bf?b=1:b=a.threads||
1;var d=[];if(b)for(var f=0;f<b;++f)d[f]=e(a,this.Yg.bind(this,f));else d[0]=h(a,this.Yg.bind(this,0));this.qe=d;this.Fd=[];this.bk=a.hp||Infinity;this.oe=0;this.fd={};this.Cf=null}var m=a("./util").om;l.prototype.fp=function(a,b,d){this.$j({inputs:a,Jh:b,jd:d});this.Vg()};l.prototype.$j=function(a){for(this.Fd.push(a);this.Fd.length>this.bk;)this.Fd.shift().jd(null,null)};l.prototype.Vg=function(){if(0===this.oe&&0<this.Fd.length){var a=this.Cf=this.Fd.shift(),b=a.inputs[0].width,d=a.inputs[0].height,
e=a.inputs.map(function(a){return a.data.buffer}),f=this.qe.length;this.oe=f;if(1===f)this.qe[0].postMessage({buffers:e,meta:a.Jh,imageOps:this.Bf,width:b,height:d},e);else for(var g=4*Math.ceil(a.inputs[0].data.length/4/f),h=0;h<f;++h){for(var l=h*g,m=[],aa=0,Ra=e.length;aa<Ra;++aa)m.push(e[h].slice(l,l+g));this.qe[h].postMessage({buffers:m,meta:a.Jh,imageOps:this.Bf,width:b,height:d},m)}}};l.prototype.Yg=function(a,b){this.Aq||(this.fd[a]=b.data,--this.oe,0===this.oe&&this.ck())};l.prototype.ck=
function(){var a=this.Cf,b=this.qe.length,d,e;if(1===b)d=new Uint8ClampedArray(this.fd[0].buffer),e=this.fd[0].meta;else{var f=a.inputs[0].data.length;d=new Uint8ClampedArray(f);e=Array(f);for(var f=4*Math.ceil(f/4/b),g=0;g<b;++g){var h=g*f;d.set(new Uint8ClampedArray(this.fd[g].buffer),h);e[g]=this.fd[g].meta}}this.Cf=null;this.fd={};a.jd(null,m(d,a.inputs[0].width,a.inputs[0].height),e);this.Vg()};b.ma=l},{"./util":3}],3:[function(a,b,f){var d=!0;try{new ImageData(10,10)}catch(l){d=!1}var e=document.createElement("canvas").getContext("2d");
f.om=function(a,b,f){if(d)return new ImageData(a,b,f);b=e.createImageData(b,f);b.data.set(a);return b}},{}]},{},[1])(1)});Fj=b.ma})();function Iw(a){this.A=null;this.na=void 0!==a.operationType?a.operationType:"pixel";this.Ha=void 0!==a.threads?a.threads:1;this.f=Jw(a.sources);for(var b=0,c=this.f.length;b<c;++b)z(this.f[b],"change",this.s,this);this.T=new Ne(function(){return 1},this.s.bind(this));for(var b=Kw(this.f),c={},d=0,e=b.length;d<e;++d)c[w(b[d].layer)]=b[d];this.i=null;this.C={animate:!1,attributions:{},coordinateToPixelTransform:yh(),extent:null,focus:null,index:0,layerStates:c,layerStatesArray:b,logos:{},pixelRatio:1,
pixelToCoordinateTransform:yh(),postRenderFunctions:[],size:[0,0],skippedFeatureUids:{},tileQueue:this.T,time:Date.now(),usedTiles:{},viewState:{rotation:0},viewHints:[],wantedTiles:{}};zv.call(this,{});a.operation&&this.u(a.operation,a.lib)}u(Iw,zv);Iw.prototype.u=function(a,b){this.A=new Fj.Pj({operation:a,Vl:"image"===this.na,hp:1,lib:b,threads:this.Ha});this.s()};
Iw.prototype.Y=function(a,b,c,d){c=!0;for(var e,f=0,g=this.f.length;f<g;++f)if(e=this.f[f].a.ka(),"ready"!==e.V()){c=!1;break}if(!c)return null;c=qb({},this.C);c.viewState=qb({},c.viewState);e=kb(a);c.extent=a.slice();c.focus=e;c.size[0]=Math.round(ib(a)/b);c.size[1]=Math.round(jb(a)/b);f=c.viewState;f.center=e;f.projection=d;f.resolution=b;this.o=c;Oe(c.tileQueue,16,16);this.i&&(d=this.i.resolution,c=this.i.D(),b===d&&$a(a,c)||(this.i=null));if(!this.i||this.g!==this.I)a:{a=this.o;d=this.f.length;
b=Array(d);for(c=0;c<d;++c){e=this.f[c];f=a;g=a.layerStatesArray[c];if(e.ud(f,g)){var h=f.size[0],l=f.size[1];if(Lw){var m=Lw.canvas;m.width!==h||m.height!==l?Lw=hd(h,l):Lw.clearRect(0,0,h,l)}else Lw=hd(h,l);e.O(f,g,Lw);e=Lw.getImageData(0,0,h,l)}else e=null;if(e)b[c]=e;else break a}d={};this.b(new Mw(Nw,a,d));this.A.fp(b,d,this.fa.bind(this,a))}return this.i};
Iw.prototype.fa=function(a,b,c,d){if(!b&&c){b=a.extent;var e=a.viewState.resolution;if(e===this.o.viewState.resolution&&$a(b,this.o.extent)){var f;this.i?f=this.i.Y().getContext("2d"):(f=hd(Math.round(ib(b)/e),Math.round(jb(b)/e)),this.i=new Hs(b,e,1,this.j,f.canvas));f.putImageData(c,0,0);this.s();this.I=this.g;this.b(new Mw(Ow,a,d))}}};var Lw=null;function Kw(a){return a.map(function(a){return qh(a.a)})}
function Jw(a){for(var b=a.length,c=Array(b),d=0;d<b;++d){var e=d,f=a[d],g=null;f instanceof iw?(f=new Vv({source:f}),g=new Nv(f)):f instanceof zv&&(f=new Mv({source:f}),g=new rv(f));c[e]=g}return c}function Mw(a,b,c){Lc.call(this,a);this.extent=b.extent;this.resolution=b.viewState.resolution/b.pixelRatio;this.data=c}u(Mw,Lc);Iw.prototype.Lc=function(){return null};var Nw="beforeoperations",Ow="afteroperations";function Pw(a){var b=a.layer.indexOf("-"),b=Qw[-1==b?a.layer:a.layer.slice(0,b)],c=Rw[a.layer];sw.call(this,{attributions:Sw,cacheSize:a.cacheSize,crossOrigin:"anonymous",maxZoom:void 0!=a.maxZoom?a.maxZoom:b.maxZoom,minZoom:void 0!=a.minZoom?a.minZoom:b.minZoom,opaque:c.opaque,reprojectionErrorThreshold:a.reprojectionErrorThreshold,tileLoadFunction:a.tileLoadFunction,url:void 0!==a.url?a.url:"https://stamen-tiles-{a-d}.a.ssl.fastly.net/"+a.layer+"/{z}/{x}/{y}."+c.Ib})}u(Pw,sw);
var Sw=[new xc({html:'Map tiles by <a href="http://stamen.com/">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0/">CC BY 3.0</a>.'}),Hw],Rw={terrain:{Ib:"jpg",opaque:!0},"terrain-background":{Ib:"jpg",opaque:!0},"terrain-labels":{Ib:"png",opaque:!1},"terrain-lines":{Ib:"png",opaque:!1},"toner-background":{Ib:"png",opaque:!0},toner:{Ib:"png",opaque:!0},"toner-hybrid":{Ib:"png",opaque:!1},"toner-labels":{Ib:"png",opaque:!1},"toner-lines":{Ib:"png",opaque:!1},"toner-lite":{Ib:"png",
opaque:!0},watercolor:{Ib:"jpg",opaque:!0}},Qw={terrain:{minZoom:4,maxZoom:18},toner:{minZoom:0,maxZoom:20},watercolor:{minZoom:1,maxZoom:16}};function Tw(a){a=a||{};W.call(this,{attributions:a.attributions,cacheSize:a.cacheSize,crossOrigin:a.crossOrigin,logo:a.logo,projection:a.projection,reprojectionErrorThreshold:a.reprojectionErrorThreshold,tileGrid:a.tileGrid,tileLoadFunction:a.tileLoadFunction,url:a.url,urls:a.urls,wrapX:void 0!==a.wrapX?a.wrapX:!0});this.i=a.params||{};this.o=Ja();jw(this,Uw(this))}u(Tw,W);function Uw(a){var b=0,c=[],d;for(d in a.i)c[b++]=d+"-"+a.i[d];return c.join("/")}Tw.prototype.v=function(){return this.i};
Tw.prototype.pb=function(a){return a};
Tw.prototype.Hc=function(a,b,c){var d=this.tileGrid;d||(d=this.Jb(c));if(!(d.b.length<=a[0])){var e=d.Ua(a,this.o),f=Ha(d.eb(a[0]),this.l);1!=b&&(f=Ga(f,b,this.l));d={F:"image",FORMAT:"PNG32",TRANSPARENT:!0};qb(d,this.i);var g=this.urls;g?(c=c.nb.split(":").pop(),d.SIZE=f[0]+","+f[1],d.BBOX=e.join(","),d.BBOXSR=c,d.IMAGESR=c,d.DPI=Math.round(d.DPI?d.DPI*b:90*b),a=(1==g.length?g[0]:g[Da((a[1]<<a[0])+a[2],g.length)]).replace(/MapServer\/?$/,"MapServer/export").replace(/ImageServer\/?$/,"ImageServer/exportImage"),
a=yw(a,d)):a=void 0;return a}};Tw.prototype.A=function(a){qb(this.i,a);jw(this,Uw(this))};function Vw(a){iw.call(this,{opaque:!1,projection:a.projection,tileGrid:a.tileGrid,wrapX:void 0!==a.wrapX?a.wrapX:!0})}u(Vw,iw);Vw.prototype.Pc=function(a,b,c){var d=this.Tb(a,b,c);if(this.a.b.hasOwnProperty(d))return this.a.get(d);var e=Ha(this.tileGrid.eb(a));a=[a,b,c];b=(b=kw(this,a))?kw(this,b).toString():"";e=new Ww(a,e,b);this.a.set(d,e);return e};function Ww(a,b,c){Is.call(this,a,2);this.c=b;this.Fa=c;this.g=null}u(Ww,Is);
Ww.prototype.Y=function(){if(this.g)return this.g;var a=this.c,b=hd(a[0],a[1]);b.strokeStyle="black";b.strokeRect(.5,.5,a[0]+.5,a[1]+.5);b.fillStyle="black";b.textAlign="center";b.textBaseline="middle";b.font="24px sans-serif";b.fillText(this.Fa,a[0]/2,a[1]/2);return this.g=b.canvas};Ww.prototype.load=function(){};function Xw(a){this.i=null;W.call(this,{attributions:a.attributions,cacheSize:a.cacheSize,crossOrigin:a.crossOrigin,projection:Tb("EPSG:3857"),reprojectionErrorThreshold:a.reprojectionErrorThreshold,state:"loading",tileLoadFunction:a.tileLoadFunction,wrapX:void 0!==a.wrapX?a.wrapX:!0});if(a.jsonp)$v(a.url,this.Ci.bind(this),this.Ue.bind(this));else{var b=new XMLHttpRequest;b.addEventListener("load",this.qo.bind(this));b.addEventListener("error",this.po.bind(this));b.open("GET",a.url);b.send()}}
u(Xw,W);k=Xw.prototype;k.qo=function(a){a=a.target;if(!a.status||200<=a.status&&300>a.status){var b;try{b=JSON.parse(a.responseText)}catch(c){this.Ue();return}this.Ci(b)}else this.Ue()};k.po=function(){this.Ue()};k.kl=function(){return this.i};
k.Ci=function(a){var b=Tb("EPSG:4326"),c=this.c,d;if(a.bounds){var e=Sb(b,c);d=pb(a.bounds,e)}var f=a.minzoom||0,e=a.maxzoom||22;this.tileGrid=c=wc({extent:uc(c),maxZoom:e,minZoom:f});this.tileUrlFunction=cw(a.tiles,c);if(void 0!==a.attribution&&!this.j){b=void 0!==d?d:b.D();d={};for(var g;f<=e;++f)g=f.toString(),d[g]=[nc(c,b,f)];this.ua([new xc({html:a.attribution,tileRanges:d})])}this.i=a;Vt(this,"ready")};k.Ue=function(){Vt(this,"error")};function Yw(a){iw.call(this,{projection:Tb("EPSG:3857"),state:"loading"});this.u=void 0!==a.preemptive?a.preemptive:!0;this.o=ew;this.f=void 0;this.i=a.jsonp||!1;if(a.url)if(this.i)$v(a.url,this.jg.bind(this),this.Ve.bind(this));else{var b=new XMLHttpRequest;b.addEventListener("load",this.uo.bind(this));b.addEventListener("error",this.to.bind(this));b.open("GET",a.url);b.send()}else a.tileJSON?this.jg(a.tileJSON):sa(!1,51)}u(Yw,iw);k=Yw.prototype;
k.uo=function(a){a=a.target;if(!a.status||200<=a.status&&300>a.status){var b;try{b=JSON.parse(a.responseText)}catch(c){this.Ve();return}this.jg(b)}else this.Ve()};k.to=function(){this.Ve()};k.hl=function(){return this.f};k.vk=function(a,b,c,d,e){this.tileGrid?(b=this.tileGrid.Ae(a,b),Zw(this.Pc(b[0],b[1],b[2],1,this.c),a,c,d,e)):!0===e?setTimeout(function(){c.call(d,null)},0):c.call(d,null)};k.Ve=function(){Vt(this,"error")};
k.jg=function(a){var b=Tb("EPSG:4326"),c=this.c,d;if(a.bounds){var e=Sb(b,c);d=pb(a.bounds,e)}var f=a.minzoom||0,e=a.maxzoom||22;this.tileGrid=c=wc({extent:uc(c),maxZoom:e,minZoom:f});this.f=a.template;var g=a.grids;if(g){this.o=cw(g,c);if(void 0!==a.attribution){b=void 0!==d?d:b.D();for(d={};f<=e;++f)g=f.toString(),d[g]=[nc(c,b,f)];this.ua([new xc({html:a.attribution,tileRanges:d})])}Vt(this,"ready")}else Vt(this,"error")};
k.Pc=function(a,b,c,d,e){var f=this.Tb(a,b,c);if(this.a.b.hasOwnProperty(f))return this.a.get(f);a=[a,b,c];b=kw(this,a,e);d=this.o(b,d,e);d=new $w(a,void 0!==d?0:4,void 0!==d?d:"",this.tileGrid.Ua(a),this.u,this.i);this.a.set(f,d);return d};k.Mg=function(a,b,c){a=this.Tb(a,b,c);this.a.b.hasOwnProperty(a)&&this.a.get(a)};function $w(a,b,c,d,e,f){Is.call(this,a,b);this.o=c;this.g=d;this.v=e;this.c=this.l=this.f=null;this.u=f}u($w,Is);k=$w.prototype;k.Y=function(){return null};
k.getData=function(a){if(!this.f||!this.l)return null;var b=this.f[Math.floor((1-(a[1]-this.g[1])/(this.g[3]-this.g[1]))*this.f.length)];if("string"!==typeof b)return null;b=b.charCodeAt(Math.floor((a[0]-this.g[0])/(this.g[2]-this.g[0])*b.length));93<=b&&b--;35<=b&&b--;b-=32;a=null;b in this.l&&(b=this.l[b],this.c&&b in this.c?a=this.c[b]:a=b);return a};
function Zw(a,b,c,d,e){0==a.state&&!0===e?(Gc(a,"change",function(){c.call(d,this.getData(b))},a),ax(a)):!0===e?setTimeout(function(){c.call(d,this.getData(b))}.bind(a),0):c.call(d,a.getData(b))}k.hb=function(){return this.o};k.Ce=function(){this.state=3;this.s()};k.Di=function(a){this.f=a.grid;this.l=a.keys;this.c=a.data;this.state=4;this.s()};
function ax(a){if(0==a.state)if(a.state=1,a.u)$v(a.o,a.Di.bind(a),a.Ce.bind(a));else{var b=new XMLHttpRequest;b.addEventListener("load",a.so.bind(a));b.addEventListener("error",a.ro.bind(a));b.open("GET",a.o);b.send()}}k.so=function(a){a=a.target;if(!a.status||200<=a.status&&300>a.status){var b;try{b=JSON.parse(a.responseText)}catch(c){this.Ce();return}this.Di(b)}else this.Ce()};k.ro=function(){this.Ce()};k.load=function(){this.v&&ax(this)};function bx(a){a=a||{};var b=a.params||{};W.call(this,{attributions:a.attributions,cacheSize:a.cacheSize,crossOrigin:a.crossOrigin,logo:a.logo,opaque:!("TRANSPARENT"in b?b.TRANSPARENT:1),projection:a.projection,reprojectionErrorThreshold:a.reprojectionErrorThreshold,tileGrid:a.tileGrid,tileLoadFunction:a.tileLoadFunction,url:a.url,urls:a.urls,wrapX:void 0!==a.wrapX?a.wrapX:!0});this.v=void 0!==a.gutter?a.gutter:0;this.i=b;this.o=!0;this.A=a.serverType;this.T=void 0!==a.hidpi?a.hidpi:!0;this.I="";
cx(this);this.ea=Ja();dx(this);jw(this,ex(this))}u(bx,W);k=bx.prototype;
k.vo=function(a,b,c,d){c=Tb(c);var e=this.tileGrid;e||(e=this.Jb(c));b=e.Ae(a,b);if(!(e.b.length<=b[0])){var f=e.La(b[0]),g=e.Ua(b,this.ea),e=Ha(e.eb(b[0]),this.l),h=this.v;h&&(e=Fa(e,h,this.l),g=Ma(g,f*h,g));h={SERVICE:"WMS",VERSION:"1.3.0",REQUEST:"GetFeatureInfo",FORMAT:"image/png",TRANSPARENT:!0,QUERY_LAYERS:this.i.LAYERS};qb(h,this.i,d);d=Math.floor((g[3]-a[1])/f);h[this.o?"I":"X"]=Math.floor((a[0]-g[0])/f);h[this.o?"J":"Y"]=d;return fx(this,b,e,g,1,c,h)}};k.Sf=function(){return this.v};
k.Tb=function(a,b,c){return this.I+W.prototype.Tb.call(this,a,b,c)};k.wo=function(){return this.i};
function fx(a,b,c,d,e,f,g){var h=a.urls;if(h){g.WIDTH=c[0];g.HEIGHT=c[1];g[a.o?"CRS":"SRS"]=f.nb;"STYLES"in a.i||(g.STYLES="");if(1!=e)switch(a.A){case "geoserver":c=90*e+.5|0;g.FORMAT_OPTIONS="FORMAT_OPTIONS"in g?g.FORMAT_OPTIONS+(";dpi:"+c):"dpi:"+c;break;case "mapserver":g.MAP_RESOLUTION=90*e;break;case "carmentaserver":case "qgis":g.DPI=90*e;break;default:sa(!1,52)}f=f.b;a.o&&"ne"==f.substr(0,2)&&(a=d[0],d[0]=d[1],d[1]=a,a=d[2],d[2]=d[3],d[3]=a);g.BBOX=d.join(",");return yw(1==h.length?h[0]:h[Da((b[1]<<
b[0])+b[2],h.length)],g)}}k.pb=function(a){return this.T&&void 0!==this.A?a:1};function cx(a){var b=0,c=[];if(a.urls){var d,e;d=0;for(e=a.urls.length;d<e;++d)c[b++]=a.urls[d]}a.I=c.join("#")}function ex(a){var b=0,c=[],d;for(d in a.i)c[b++]=d+"-"+a.i[d];return c.join("/")}
k.Hc=function(a,b,c){var d=this.tileGrid;d||(d=this.Jb(c));if(!(d.b.length<=a[0])){1==b||this.T&&void 0!==this.A||(b=1);var e=d.La(a[0]),f=d.Ua(a,this.ea),d=Ha(d.eb(a[0]),this.l),g=this.v;g&&(d=Fa(d,g,this.l),f=Ma(f,e*g,f));1!=b&&(d=Ga(d,b,this.l));e={SERVICE:"WMS",VERSION:"1.3.0",REQUEST:"GetMap",FORMAT:"image/png",TRANSPARENT:!0};qb(e,this.i);return fx(this,a,d,f,b,c,e)}};k.cb=function(a){W.prototype.cb.call(this,a);cx(this)};k.xo=function(a){qb(this.i,a);cx(this);dx(this);jw(this,ex(this))};
function dx(a){a.o=0<=We(a.i.VERSION||"1.3.0")};function gx(a,b,c,d,e){Is.call(this,a,b);this.c=null;this.l=d;this.f=null;this.g={Od:!1,Eg:null,kf:-1,Fg:-1,zd:null};this.v=e;this.o=c}u(gx,Is);k=gx.prototype;k.Y=function(){return-1==this.g.Fg?null:this.c.canvas};k.Gm=function(){return this.l};k.hb=function(){return this.o};k.load=function(){0==this.state&&(this.state=1,this.s(),this.v(this,this.o),this.u(null,NaN,null))};k.Qo=function(a,b){this.dg(b);this.hj(a)};k.Po=function(){this.state=3;this.s()};k.hj=function(a){this.f=a;this.state=2;this.s()};
k.dg=function(a){this.j=a};k.mj=function(a){this.u=a};function hx(a,b){a.mj(Cl(b,a.l,a.Qo.bind(a),a.Po.bind(a)))};function ix(a){mw.call(this,{attributions:a.attributions,cacheSize:void 0!==a.cacheSize?a.cacheSize:128,extent:a.extent,logo:a.logo,opaque:!1,projection:a.projection,state:a.state,tileGrid:a.tileGrid,tileLoadFunction:a.tileLoadFunction?a.tileLoadFunction:hx,tileUrlFunction:a.tileUrlFunction,tilePixelRatio:a.tilePixelRatio,url:a.url,urls:a.urls,wrapX:void 0===a.wrapX?!0:a.wrapX});this.i=a.format?a.format:null;this.f=void 0==a.overlaps?!0:a.overlaps;this.tileClass=a.tileClass?a.tileClass:gx}u(ix,mw);
ix.prototype.Pc=function(a,b,c,d,e){var f=this.Tb(a,b,c);if(this.a.b.hasOwnProperty(f))return this.a.get(f);a=[a,b,c];d=(b=kw(this,a,e))?this.tileUrlFunction(b,d,e):void 0;d=new this.tileClass(a,void 0!==d?0:4,void 0!==d?d:"",this.i,this.tileLoadFunction);z(d,"change",this.Fi,this);this.a.set(f,d);return d};ix.prototype.pb=function(a){return void 0==a?mw.prototype.pb.call(this,a):a};ix.prototype.Vd=function(a,b){var c=Ha(this.tileGrid.eb(a));return[Math.round(c[0]*b),Math.round(c[1]*b)]};function jx(a){this.l=a.matrixIds;kc.call(this,{extent:a.extent,origin:a.origin,origins:a.origins,resolutions:a.resolutions,tileSize:a.tileSize,tileSizes:a.tileSizes,sizes:a.sizes})}u(jx,kc);jx.prototype.o=function(){return this.l};
function kx(a,b,c){var d=[],e=[],f=[],g=[],h=[],l=void 0!==c?c:[];c=Tb(a.SupportedCRS.replace(/urn:ogc:def:crs:(\w+):(.*:)?(\w+)$/,"$1:$3"));var m=c.uc(),n="ne"==c.b.substr(0,2);a.TileMatrix.sort(function(a,b){return b.ScaleDenominator-a.ScaleDenominator});a.TileMatrix.forEach(function(a){var b;0<l.length?b=ia(l,function(b){return a.Identifier==b.TileMatrix}):b=!0;if(b){e.push(a.Identifier);b=2.8E-4*a.ScaleDenominator/m;var c=a.TileWidth,p=a.TileHeight;n?f.push([a.TopLeftCorner[1],a.TopLeftCorner[0]]):
f.push(a.TopLeftCorner);d.push(b);g.push(c==p?c:[c,p]);h.push([a.MatrixWidth,-a.MatrixHeight])}});return new jx({extent:b,origins:f,resolutions:d,matrixIds:e,tileSizes:g,sizes:h})};function Y(a){function b(a){a="KVP"==d?yw(a,f):a.replace(/\{(\w+?)\}/g,function(a,b){return b.toLowerCase()in f?f[b.toLowerCase()]:a});return function(b){if(b){var c={TileMatrix:e.l[b[0]],TileCol:b[1],TileRow:-b[2]-1};qb(c,g);b=a;return b="KVP"==d?yw(b,c):b.replace(/\{(\w+?)\}/g,function(a,b){return c[b]})}}}this.ea=void 0!==a.version?a.version:"1.0.0";this.v=void 0!==a.format?a.format:"image/jpeg";this.i=a.dimensions?a.dimensions:{};this.A=a.layer;this.o=a.matrixSet;this.I=a.style;var c=a.urls;void 0===
c&&void 0!==a.url&&(c=fw(a.url));var d=this.T=void 0!==a.requestEncoding?a.requestEncoding:"KVP",e=a.tileGrid,f={layer:this.A,style:this.I,tilematrixset:this.o};"KVP"==d&&qb(f,{Service:"WMTS",Request:"GetTile",Version:this.ea,Format:this.v});var g=this.i,h=c&&0<c.length?dw(c.map(b)):ew;W.call(this,{attributions:a.attributions,cacheSize:a.cacheSize,crossOrigin:a.crossOrigin,logo:a.logo,projection:a.projection,reprojectionErrorThreshold:a.reprojectionErrorThreshold,tileClass:a.tileClass,tileGrid:e,
tileLoadFunction:a.tileLoadFunction,tilePixelRatio:a.tilePixelRatio,tileUrlFunction:h,urls:c,wrapX:void 0!==a.wrapX?a.wrapX:!1});jw(this,lx(this))}u(Y,W);k=Y.prototype;k.Ik=function(){return this.i};k.yo=function(){return this.v};k.zo=function(){return this.A};k.Vk=function(){return this.o};k.fl=function(){return this.T};k.Ao=function(){return this.I};k.ml=function(){return this.ea};function lx(a){var b=0,c=[],d;for(d in a.i)c[b++]=d+"-"+a.i[d];return c.join("/")}
k.jq=function(a){qb(this.i,a);jw(this,lx(this))};function mx(a){a=a||{};var b=a.size,c=b[0],d=b[1],e=[],f=256;switch(void 0!==a.tierSizeCalculation?a.tierSizeCalculation:nx){case nx:for(;c>f||d>f;)e.push([Math.ceil(c/f),Math.ceil(d/f)]),f+=f;break;case ox:for(;c>f||d>f;)e.push([Math.ceil(c/f),Math.ceil(d/f)]),c>>=1,d>>=1;break;default:sa(!1,53)}e.push([1,1]);e.reverse();for(var f=[1],g=[0],d=1,c=e.length;d<c;d++)f.push(1<<d),g.push(e[d-1][0]*e[d-1][1]+g[d-1]);f.reverse();b=[0,-b[1],b[0],0];b=new kc({extent:b,origin:fb(b),resolutions:f});(f=a.url)&&
-1==f.indexOf("{TileGroup}")&&(f+="{TileGroup}/{z}-{x}-{y}.jpg");f=fw(f);f=dw(f.map(function(a){return function(b){if(b){var c=b[0],d=b[1];b=-b[2]-1;var f={z:c,x:d,y:b,TileGroup:"TileGroup"+((d+b*e[c][0]+g[c])/256|0)};return a.replace(/\{(\w+?)\}/g,function(a,b){return f[b]})}}}));W.call(this,{attributions:a.attributions,cacheSize:a.cacheSize,crossOrigin:a.crossOrigin,logo:a.logo,projection:a.projection,reprojectionErrorThreshold:a.reprojectionErrorThreshold,tileClass:px,tileGrid:b,tileUrlFunction:f})}
u(mx,W);function px(a,b,c,d,e){Ks.call(this,a,b,c,d,e);this.g=null}u(px,Ks);px.prototype.Y=function(){if(this.g)return this.g;var a=Ks.prototype.Y.call(this);if(2==this.state){if(256==a.width&&256==a.height)return this.g=a;var b=hd(256,256);b.drawImage(a,0,0);return this.g=b.canvas}return a};var nx="default",ox="truncated";function qx(a,b){this.b=b;this.a=[{x:0,y:0,width:a,height:a}];this.c={};this.g=hd(a,a);this.i=this.g.canvas}qx.prototype.get=function(a){return this.c[a]||null};
qx.prototype.add=function(a,b,c,d,e){var f,g,h;g=0;for(h=this.a.length;g<h;++g)if(f=this.a[g],f.width>=b+this.b&&f.height>=c+this.b)return h={offsetX:f.x+this.b,offsetY:f.y+this.b,image:this.i},this.c[a]=h,d.call(e,this.g,f.x+this.b,f.y+this.b),a=g,b+=this.b,d=c+this.b,f.width-b>f.height-d?(c={x:f.x+b,y:f.y,width:f.width-b,height:f.height},b={x:f.x,y:f.y+d,width:b,height:f.height-d},rx(this,a,c,b)):(c={x:f.x+b,y:f.y,width:f.width-b,height:d},b={x:f.x,y:f.y+d,width:f.width,height:f.height-d},rx(this,
a,c,b)),h;return null};function rx(a,b,c,d){b=[b,1];0<c.width&&0<c.height&&b.push(c);0<d.width&&0<d.height&&b.push(d);a.a.splice.apply(a.a,b)};function sx(a){a=a||{};this.a=void 0!==a.initialSize?a.initialSize:256;this.g=void 0!==a.maxSize?a.maxSize:void 0!==ca?ca:2048;this.b=void 0!==a.space?a.space:1;this.i=[new qx(this.a,this.b)];this.c=this.a;this.f=[new qx(this.c,this.b)]}sx.prototype.add=function(a,b,c,d,e,f){if(b+this.b>this.g||c+this.b>this.g)return null;d=tx(this,!1,a,b,c,d,f);if(!d)return null;a=tx(this,!0,a,b,c,e?e:oa,f);return{offsetX:d.offsetX,offsetY:d.offsetY,image:d.image,Ul:a.image}};
function tx(a,b,c,d,e,f,g){var h=b?a.f:a.i,l,m,n;m=0;for(n=h.length;m<n;++m){l=h[m];if(l=l.add(c,d,e,f,g))return l;l||m!==n-1||(b?(l=Math.min(2*a.c,a.g),a.c=l):(l=Math.min(2*a.a,a.g),a.a=l),l=new qx(l,a.b),h.push(l),++n)}return null};qa.prototype.code=qa.prototype.code;t("ol.Attribution",xc);xc.prototype.getHTML=xc.prototype.g;t("ol.Collection",D);D.prototype.clear=D.prototype.clear;D.prototype.extend=D.prototype.ag;D.prototype.forEach=D.prototype.forEach;D.prototype.getArray=D.prototype.pm;D.prototype.item=D.prototype.item;D.prototype.getLength=D.prototype.fc;D.prototype.insertAt=D.prototype.Ge;D.prototype.pop=D.prototype.pop;D.prototype.push=D.prototype.push;D.prototype.remove=D.prototype.remove;D.prototype.removeAt=D.prototype.Bg;
D.prototype.setAt=D.prototype.Mp;Yc.prototype.element=Yc.prototype.element;t("ol.color.asArray",bd);t("ol.color.asString",dd);t("ol.colorlike.asColorLike",fd);t("ol.control.defaults",vd);t("ol.coordinate.add",Xe);t("ol.coordinate.createStringXY",function(a){return function(b){return hf(b,a)}});t("ol.coordinate.format",$e);t("ol.coordinate.rotate",cf);t("ol.coordinate.toStringHDMS",function(a,b){return a?Ze(a[1],"NS",b)+" "+Ze(a[0],"EW",b):""});t("ol.coordinate.toStringXY",hf);
t("ol.DeviceOrientation",Rk);Rk.prototype.getAlpha=Rk.prototype.Bk;Rk.prototype.getBeta=Rk.prototype.Ek;Rk.prototype.getGamma=Rk.prototype.Kk;Rk.prototype.getHeading=Rk.prototype.qm;Rk.prototype.getTracking=Rk.prototype.Mh;Rk.prototype.setTracking=Rk.prototype.bg;t("ol.easing.easeIn",od);t("ol.easing.easeOut",pd);t("ol.easing.inAndOut",qd);t("ol.easing.linear",rd);t("ol.easing.upAndDown",function(a){return.5>a?qd(2*a):1-qd(2*(a-.5))});t("ol.extent.boundingExtent",Ia);t("ol.extent.buffer",Ma);
t("ol.extent.containsCoordinate",Qa);t("ol.extent.containsExtent",Ua);t("ol.extent.containsXY",Sa);t("ol.extent.createEmpty",Ja);t("ol.extent.equals",$a);t("ol.extent.extend",ab);t("ol.extent.getBottomLeft",cb);t("ol.extent.getBottomRight",db);t("ol.extent.getCenter",kb);t("ol.extent.getHeight",jb);t("ol.extent.getIntersection",mb);t("ol.extent.getSize",function(a){return[a[2]-a[0],a[3]-a[1]]});t("ol.extent.getTopLeft",fb);t("ol.extent.getTopRight",eb);t("ol.extent.getWidth",ib);
t("ol.extent.intersects",nb);t("ol.extent.isEmpty",hb);t("ol.extent.applyTransform",pb);t("ol.Feature",I);I.prototype.clone=I.prototype.clone;I.prototype.getGeometry=I.prototype.U;I.prototype.getId=I.prototype.sm;I.prototype.getGeometryName=I.prototype.Mk;I.prototype.getStyle=I.prototype.tm;I.prototype.getStyleFunction=I.prototype.Rc;I.prototype.setGeometry=I.prototype.Ta;I.prototype.setStyle=I.prototype.cg;I.prototype.setId=I.prototype.lc;I.prototype.setGeometryName=I.prototype.Yc;
t("ol.featureloader.xhr",Dl);t("ol.Geolocation",us);us.prototype.getAccuracy=us.prototype.zk;us.prototype.getAccuracyGeometry=us.prototype.Ak;us.prototype.getAltitude=us.prototype.Ck;us.prototype.getAltitudeAccuracy=us.prototype.Dk;us.prototype.getHeading=us.prototype.um;us.prototype.getPosition=us.prototype.vm;us.prototype.getProjection=us.prototype.Nh;us.prototype.getSpeed=us.prototype.gl;us.prototype.getTracking=us.prototype.Oh;us.prototype.getTrackingOptions=us.prototype.zh;
us.prototype.setProjection=us.prototype.Ph;us.prototype.setTracking=us.prototype.Je;us.prototype.setTrackingOptions=us.prototype.sj;t("ol.Graticule",As);As.prototype.getMap=As.prototype.ym;As.prototype.getMeridians=As.prototype.Wk;As.prototype.getParallels=As.prototype.cl;As.prototype.setMap=As.prototype.setMap;t("ol.has.DEVICE_PIXEL_RATIO",Td);t("ol.has.CANVAS",Vd);t("ol.has.DEVICE_ORIENTATION",Wd);t("ol.has.GEOLOCATION",Xd);t("ol.has.TOUCH",Yd);t("ol.has.WEBGL",Nd);Gs.prototype.getImage=Gs.prototype.Y;
Gs.prototype.load=Gs.prototype.load;Ks.prototype.getImage=Ks.prototype.Y;t("ol.inherits",u);t("ol.interaction.defaults",oh);t("ol.Kinetic",ig);t("ol.loadingstrategy.all",St);t("ol.loadingstrategy.bbox",function(a){return[a]});t("ol.loadingstrategy.tile",function(a){return function(b,c){var d=a.Qc(c),e=nc(a,b,d),f=[],d=[d,0,0];for(d[1]=e.da;d[1]<=e.ba;++d[1])for(d[2]=e.ga;d[2]<=e.ja;++d[2])f.push(a.Ua(d));return f}});t("ol.Map",H);H.prototype.addControl=H.prototype.gk;H.prototype.addInteraction=H.prototype.hk;
H.prototype.addLayer=H.prototype.$g;H.prototype.addOverlay=H.prototype.ah;H.prototype.forEachFeatureAtPixel=H.prototype.we;H.prototype.forEachLayerAtPixel=H.prototype.Em;H.prototype.hasFeatureAtPixel=H.prototype.Tl;H.prototype.getEventCoordinate=H.prototype.Of;H.prototype.getEventPixel=H.prototype.xe;H.prototype.getTarget=H.prototype.Wf;H.prototype.getTargetElement=H.prototype.vc;H.prototype.getCoordinateFromPixel=H.prototype.Xa;H.prototype.getControls=H.prototype.Hk;H.prototype.getOverlays=H.prototype.al;
H.prototype.getOverlayById=H.prototype.$k;H.prototype.getInteractions=H.prototype.Nk;H.prototype.getLayerGroup=H.prototype.Mc;H.prototype.getLayers=H.prototype.Qh;H.prototype.getPixelFromCoordinate=H.prototype.Ka;H.prototype.getSize=H.prototype.Nb;H.prototype.getView=H.prototype.$;H.prototype.getViewport=H.prototype.nl;H.prototype.renderSync=H.prototype.Jp;H.prototype.render=H.prototype.render;H.prototype.removeControl=H.prototype.Cp;H.prototype.removeInteraction=H.prototype.Dp;
H.prototype.removeLayer=H.prototype.Fp;H.prototype.removeOverlay=H.prototype.Gp;H.prototype.setLayerGroup=H.prototype.lj;H.prototype.setSize=H.prototype.Ig;H.prototype.setTarget=H.prototype.Ke;H.prototype.setView=H.prototype.Yp;H.prototype.updateSize=H.prototype.Cd;Hd.prototype.originalEvent=Hd.prototype.originalEvent;Hd.prototype.pixel=Hd.prototype.pixel;Hd.prototype.coordinate=Hd.prototype.coordinate;Hd.prototype.dragging=Hd.prototype.dragging;Gd.prototype.map=Gd.prototype.map;
Gd.prototype.frameState=Gd.prototype.frameState;t("ol.Object",Qc);Qc.prototype.get=Qc.prototype.get;Qc.prototype.getKeys=Qc.prototype.P;Qc.prototype.getProperties=Qc.prototype.M;Qc.prototype.set=Qc.prototype.set;Qc.prototype.setProperties=Qc.prototype.H;Qc.prototype.unset=Qc.prototype.R;Uc.prototype.key=Uc.prototype.key;Uc.prototype.oldValue=Uc.prototype.oldValue;t("ol.Observable",Pc);t("ol.Observable.unByKey",function(a){if(Array.isArray(a))for(var b=0,c=a.length;b<c;++b)Bc(a[b]);else Bc(a)});
Pc.prototype.changed=Pc.prototype.s;Pc.prototype.dispatchEvent=Pc.prototype.b;Pc.prototype.getRevision=Pc.prototype.L;Pc.prototype.on=Pc.prototype.J;Pc.prototype.once=Pc.prototype.once;Pc.prototype.un=Pc.prototype.K;t("ol.Overlay",sk);sk.prototype.getElement=sk.prototype.Rd;sk.prototype.getId=sk.prototype.Fm;sk.prototype.getMap=sk.prototype.Le;sk.prototype.getOffset=sk.prototype.wh;sk.prototype.getPosition=sk.prototype.Rh;sk.prototype.getPositioning=sk.prototype.xh;sk.prototype.setElement=sk.prototype.gj;
sk.prototype.setMap=sk.prototype.setMap;sk.prototype.setOffset=sk.prototype.nj;sk.prototype.setPosition=sk.prototype.Me;sk.prototype.setPositioning=sk.prototype.qj;t("ol.proj.METERS_PER_UNIT",xb);t("ol.proj.setProj4",function(a){yb=a});t("ol.proj.getPointResolution",Rb);t("ol.proj.addEquivalentProjections",Ub);t("ol.proj.addProjection",Yb);t("ol.proj.addCoordinateTransforms",$b);t("ol.proj.fromLonLat",function(a,b){return fc(a,"EPSG:4326",void 0!==b?b:"EPSG:3857")});
t("ol.proj.toLonLat",function(a,b){return fc(a,void 0!==b?b:"EPSG:3857","EPSG:4326")});t("ol.proj.get",Tb);t("ol.proj.equivalent",bc);t("ol.proj.getTransform",dc);t("ol.proj.transform",fc);t("ol.proj.transformExtent",gc);t("ol.render.toContext",function(a,b){var c=a.canvas,d=b?b:{},e=d.pixelRatio||Td;if(d=d.size)c.width=d[0]*e,c.height=d[1]*e,c.style.width=d[0]+"px",c.style.height=d[1]+"px";c=[0,0,c.width,c.height];d=Fh(yh(),e,e);return new Uh(a,e,c,d,0)});t("ol.size.toSize",Ha);t("ol.Sphere",ub);
ub.prototype.geodesicArea=ub.prototype.a;ub.prototype.haversineDistance=ub.prototype.b;Is.prototype.getTileCoord=Is.prototype.i;Is.prototype.load=Is.prototype.load;t("ol.tilegrid.createXYZ",wc);gx.prototype.getFormat=gx.prototype.Gm;gx.prototype.setFeatures=gx.prototype.hj;gx.prototype.setProjection=gx.prototype.dg;gx.prototype.setLoader=gx.prototype.mj;t("ol.View",G);G.prototype.animate=G.prototype.animate;G.prototype.getAnimating=G.prototype.Kc;G.prototype.cancelAnimations=G.prototype.kd;
G.prototype.constrainCenter=G.prototype.Gc;G.prototype.constrainResolution=G.prototype.constrainResolution;G.prototype.constrainRotation=G.prototype.constrainRotation;G.prototype.getCenter=G.prototype.za;G.prototype.calculateExtent=G.prototype.hd;G.prototype.getMaxResolution=G.prototype.Hm;G.prototype.getMinResolution=G.prototype.Jm;G.prototype.getMaxZoom=G.prototype.Im;G.prototype.setMaxZoom=G.prototype.Up;G.prototype.getMinZoom=G.prototype.Km;G.prototype.setMinZoom=G.prototype.Vp;
G.prototype.getProjection=G.prototype.Lm;G.prototype.getResolution=G.prototype.Ra;G.prototype.getResolutions=G.prototype.Mm;G.prototype.getRotation=G.prototype.Sa;G.prototype.getZoom=G.prototype.Ah;G.prototype.getZoomForResolution=G.prototype.Be;G.prototype.fit=G.prototype.Mf;G.prototype.centerOn=G.prototype.qk;G.prototype.rotate=G.prototype.rotate;G.prototype.setCenter=G.prototype.lb;G.prototype.setResolution=G.prototype.$c;G.prototype.setRotation=G.prototype.Ne;G.prototype.setZoom=G.prototype.aq;
t("ol.xml.getAllTextContent",ll);t("ol.xml.parse",ql);Li.prototype.getGL=Li.prototype.Mo;Li.prototype.useProgram=Li.prototype.Vc;t("ol.tilegrid.TileGrid",kc);kc.prototype.forEachTileCoord=kc.prototype.mh;kc.prototype.getMaxZoom=kc.prototype.Ni;kc.prototype.getMinZoom=kc.prototype.Oi;kc.prototype.getOrigin=kc.prototype.Uc;kc.prototype.getResolution=kc.prototype.La;kc.prototype.getResolutions=kc.prototype.Pi;kc.prototype.getTileCoordExtent=kc.prototype.Ua;
kc.prototype.getTileCoordForCoordAndResolution=kc.prototype.Ae;kc.prototype.getTileCoordForCoordAndZ=kc.prototype.Xf;kc.prototype.getTileSize=kc.prototype.eb;kc.prototype.getZForResolution=kc.prototype.Qc;t("ol.tilegrid.WMTS",jx);jx.prototype.getMatrixIds=jx.prototype.o;t("ol.tilegrid.WMTS.createFromCapabilitiesMatrixSet",kx);t("ol.style.AtlasManager",sx);t("ol.style.Circle",$k);$k.prototype.setRadius=$k.prototype.Zc;t("ol.style.Fill",al);al.prototype.clone=al.prototype.clone;
al.prototype.getColor=al.prototype.g;al.prototype.setColor=al.prototype.c;t("ol.style.Icon",co);co.prototype.clone=co.prototype.clone;co.prototype.getAnchor=co.prototype.Jc;co.prototype.getColor=co.prototype.Bo;co.prototype.getImage=co.prototype.Y;co.prototype.getOrigin=co.prototype.Tc;co.prototype.getSrc=co.prototype.Co;co.prototype.getSize=co.prototype.kc;co.prototype.load=co.prototype.load;t("ol.style.Image",Xk);Xk.prototype.getOpacity=Xk.prototype.Ye;Xk.prototype.getRotateWithView=Xk.prototype.Ze;
Xk.prototype.getRotation=Xk.prototype.$e;Xk.prototype.getScale=Xk.prototype.af;Xk.prototype.getSnapToPixel=Xk.prototype.ze;Xk.prototype.setOpacity=Xk.prototype.vd;Xk.prototype.setRotation=Xk.prototype.bf;Xk.prototype.setScale=Xk.prototype.wd;t("ol.style.RegularShape",Yk);Yk.prototype.clone=Yk.prototype.clone;Yk.prototype.getAnchor=Yk.prototype.Jc;Yk.prototype.getAngle=Yk.prototype.Ji;Yk.prototype.getFill=Yk.prototype.Ca;Yk.prototype.getImage=Yk.prototype.Y;Yk.prototype.getOrigin=Yk.prototype.Tc;
Yk.prototype.getPoints=Yk.prototype.Ki;Yk.prototype.getRadius=Yk.prototype.Li;Yk.prototype.getRadius2=Yk.prototype.yh;Yk.prototype.getSize=Yk.prototype.kc;Yk.prototype.getStroke=Yk.prototype.Da;t("ol.style.Stroke",tj);tj.prototype.clone=tj.prototype.clone;tj.prototype.getColor=tj.prototype.Do;tj.prototype.getLineCap=tj.prototype.Qk;tj.prototype.getLineDash=tj.prototype.Eo;tj.prototype.getLineDashOffset=tj.prototype.Rk;tj.prototype.getLineJoin=tj.prototype.Sk;tj.prototype.getMiterLimit=tj.prototype.Xk;
tj.prototype.getWidth=tj.prototype.Fo;tj.prototype.setColor=tj.prototype.Go;tj.prototype.setLineCap=tj.prototype.Rp;tj.prototype.setLineDash=tj.prototype.setLineDash;tj.prototype.setLineDashOffset=tj.prototype.Sp;tj.prototype.setLineJoin=tj.prototype.Tp;tj.prototype.setMiterLimit=tj.prototype.Wp;tj.prototype.setWidth=tj.prototype.Zp;t("ol.style.Style",bl);bl.prototype.clone=bl.prototype.clone;bl.prototype.getGeometry=bl.prototype.U;bl.prototype.getGeometryFunction=bl.prototype.Lk;
bl.prototype.getFill=bl.prototype.Ca;bl.prototype.setFill=bl.prototype.mf;bl.prototype.getImage=bl.prototype.Y;bl.prototype.setImage=bl.prototype.Hg;bl.prototype.getStroke=bl.prototype.Da;bl.prototype.setStroke=bl.prototype.nf;bl.prototype.getText=bl.prototype.Oa;bl.prototype.setText=bl.prototype.pf;bl.prototype.getZIndex=bl.prototype.Aa;bl.prototype.setGeometry=bl.prototype.Ta;bl.prototype.setZIndex=bl.prototype.Xb;t("ol.style.Text",eo);eo.prototype.clone=eo.prototype.clone;
eo.prototype.getFont=eo.prototype.Jk;eo.prototype.getOffsetX=eo.prototype.Yk;eo.prototype.getOffsetY=eo.prototype.Zk;eo.prototype.getFill=eo.prototype.Ca;eo.prototype.getRotateWithView=eo.prototype.Ho;eo.prototype.getRotation=eo.prototype.Io;eo.prototype.getScale=eo.prototype.Jo;eo.prototype.getStroke=eo.prototype.Da;eo.prototype.getText=eo.prototype.Oa;eo.prototype.getTextAlign=eo.prototype.il;eo.prototype.getTextBaseline=eo.prototype.jl;eo.prototype.setFont=eo.prototype.ij;
eo.prototype.setOffsetX=eo.prototype.oj;eo.prototype.setOffsetY=eo.prototype.pj;eo.prototype.setFill=eo.prototype.mf;eo.prototype.setRotation=eo.prototype.Ko;eo.prototype.setScale=eo.prototype.Mi;eo.prototype.setStroke=eo.prototype.nf;eo.prototype.setText=eo.prototype.pf;eo.prototype.setTextAlign=eo.prototype.rj;eo.prototype.setTextBaseline=eo.prototype.Xp;t("ol.source.BingMaps",qw);t("ol.source.BingMaps.TOS_ATTRIBUTION",rw);qw.prototype.getApiKey=qw.prototype.T;qw.prototype.getImagerySet=qw.prototype.ea;
t("ol.source.CartoDB",tw);tw.prototype.getConfig=tw.prototype.Gk;tw.prototype.updateConfig=tw.prototype.iq;tw.prototype.setConfig=tw.prototype.Np;t("ol.source.Cluster",X);X.prototype.getDistance=X.prototype.Qn;X.prototype.getSource=X.prototype.Rn;X.prototype.setDistance=X.prototype.Op;t("ol.source.Image",zv);Bv.prototype.image=Bv.prototype.image;t("ol.source.ImageArcGISRest",zw);zw.prototype.getParams=zw.prototype.Tn;zw.prototype.getImageLoadFunction=zw.prototype.Sn;zw.prototype.getUrl=zw.prototype.Un;
zw.prototype.setImageLoadFunction=zw.prototype.Vn;zw.prototype.setUrl=zw.prototype.Wn;zw.prototype.updateParams=zw.prototype.Xn;t("ol.source.ImageCanvas",Gv);t("ol.source.ImageMapGuide",Aw);Aw.prototype.getParams=Aw.prototype.Zn;Aw.prototype.getImageLoadFunction=Aw.prototype.Yn;Aw.prototype.updateParams=Aw.prototype.ao;Aw.prototype.setImageLoadFunction=Aw.prototype.$n;t("ol.source.ImageStatic",Bw);t("ol.source.ImageVector",Hv);Hv.prototype.getSource=Hv.prototype.bo;Hv.prototype.getStyle=Hv.prototype.co;
Hv.prototype.getStyleFunction=Hv.prototype.eo;Hv.prototype.setStyle=Hv.prototype.Bi;t("ol.source.ImageWMS",Cw);Cw.prototype.getGetFeatureInfoUrl=Cw.prototype.io;Cw.prototype.getParams=Cw.prototype.ko;Cw.prototype.getImageLoadFunction=Cw.prototype.jo;Cw.prototype.getUrl=Cw.prototype.lo;Cw.prototype.setImageLoadFunction=Cw.prototype.mo;Cw.prototype.setUrl=Cw.prototype.no;Cw.prototype.updateParams=Cw.prototype.oo;t("ol.source.OSM",Gw);t("ol.source.OSM.ATTRIBUTION",Hw);t("ol.source.Raster",Iw);
Iw.prototype.setOperation=Iw.prototype.u;Mw.prototype.extent=Mw.prototype.extent;Mw.prototype.resolution=Mw.prototype.resolution;Mw.prototype.data=Mw.prototype.data;t("ol.source.Source",Tt);Tt.prototype.getAttributions=Tt.prototype.xa;Tt.prototype.getLogo=Tt.prototype.wa;Tt.prototype.getProjection=Tt.prototype.ya;Tt.prototype.getState=Tt.prototype.V;Tt.prototype.refresh=Tt.prototype.va;Tt.prototype.setAttributions=Tt.prototype.ua;t("ol.source.Stamen",Pw);t("ol.source.Tile",iw);
iw.prototype.getTileGrid=iw.prototype.ab;lw.prototype.tile=lw.prototype.tile;t("ol.source.TileArcGISRest",Tw);Tw.prototype.getParams=Tw.prototype.v;Tw.prototype.updateParams=Tw.prototype.A;t("ol.source.TileDebug",Vw);t("ol.source.TileImage",W);W.prototype.setRenderReprojectionEdges=W.prototype.Ob;W.prototype.setTileGridForProjection=W.prototype.Pb;t("ol.source.TileJSON",Xw);Xw.prototype.getTileJSON=Xw.prototype.kl;t("ol.source.TileUTFGrid",Yw);Yw.prototype.getTemplate=Yw.prototype.hl;
Yw.prototype.forDataAtCoordinateAndResolution=Yw.prototype.vk;t("ol.source.TileWMS",bx);bx.prototype.getGetFeatureInfoUrl=bx.prototype.vo;bx.prototype.getParams=bx.prototype.wo;bx.prototype.updateParams=bx.prototype.xo;mw.prototype.getTileLoadFunction=mw.prototype.ob;mw.prototype.getTileUrlFunction=mw.prototype.qb;mw.prototype.getUrls=mw.prototype.rb;mw.prototype.setTileLoadFunction=mw.prototype.wb;mw.prototype.setTileUrlFunction=mw.prototype.bb;mw.prototype.setUrl=mw.prototype.ib;
mw.prototype.setUrls=mw.prototype.cb;t("ol.source.Vector",T);T.prototype.addFeature=T.prototype.zb;T.prototype.addFeatures=T.prototype.gd;T.prototype.clear=T.prototype.clear;T.prototype.forEachFeature=T.prototype.kh;T.prototype.forEachFeatureInExtent=T.prototype.bc;T.prototype.forEachFeatureIntersectingExtent=T.prototype.lh;T.prototype.getFeaturesCollection=T.prototype.th;T.prototype.getFeatures=T.prototype.We;T.prototype.getFeaturesAtCoordinate=T.prototype.sh;T.prototype.getFeaturesInExtent=T.prototype.Pf;
T.prototype.getClosestFeatureToCoordinate=T.prototype.oh;T.prototype.getExtent=T.prototype.D;T.prototype.getFeatureById=T.prototype.rh;T.prototype.getFormat=T.prototype.Gi;T.prototype.getUrl=T.prototype.Hi;T.prototype.removeFeature=T.prototype.Db;$t.prototype.feature=$t.prototype.feature;t("ol.source.VectorTile",ix);t("ol.source.WMTS",Y);Y.prototype.getDimensions=Y.prototype.Ik;Y.prototype.getFormat=Y.prototype.yo;Y.prototype.getLayer=Y.prototype.zo;Y.prototype.getMatrixSet=Y.prototype.Vk;
Y.prototype.getRequestEncoding=Y.prototype.fl;Y.prototype.getStyle=Y.prototype.Ao;Y.prototype.getVersion=Y.prototype.ml;Y.prototype.updateDimensions=Y.prototype.jq;
t("ol.source.WMTS.optionsFromCapabilities",function(a,b){var c=ia(a.Contents.Layer,function(a){return a.Identifier==b.layer});if(null===c)return null;var d=a.Contents.TileMatrixSet,e,f,g;e=1<c.TileMatrixSetLink.length?"projection"in b?ma(c.TileMatrixSetLink,function(a){var c=ia(d,function(b){return b.Identifier==a.TileMatrixSet}).SupportedCRS.replace(/urn:ogc:def:crs:(\w+):(.*:)?(\w+)$/,"$1:$3"),e=Tb(c),f=Tb(b.projection);return e&&f?bc(e,f):c==b.projection}):ma(c.TileMatrixSetLink,function(a){return a.TileMatrixSet==
b.matrixSet}):0;0>e&&(e=0);f=c.TileMatrixSetLink[e].TileMatrixSet;g=c.TileMatrixSetLink[e].TileMatrixSetLimits;var h=c.Format[0];"format"in b&&(h=b.format);e=ma(c.Style,function(a){return"style"in b?a.Title==b.style:a.isDefault});0>e&&(e=0);e=c.Style[e].Identifier;var l={};"Dimension"in c&&c.Dimension.forEach(function(a){var b=a.Identifier,c=a.Default;void 0===c&&(c=a.Value[0]);l[b]=c});var m=ia(a.Contents.TileMatrixSet,function(a){return a.Identifier==f}),n;n="projection"in b?Tb(b.projection):Tb(m.SupportedCRS.replace(/urn:ogc:def:crs:(\w+):(.*:)?(\w+)$/,
"$1:$3"));var p=c.WGS84BoundingBox,q,r;void 0!==p&&(r=Tb("EPSG:4326").D(),r=p[0]==r[0]&&p[2]==r[2],q=gc(p,"EPSG:4326",n),(p=n.D())&&(Ua(p,q)||(q=void 0)));g=kx(m,q,g);var v=[],m=b.requestEncoding,m=void 0!==m?m:"";if("OperationsMetadata"in a&&"GetTile"in a.OperationsMetadata){q=a.OperationsMetadata.GetTile.DCP.HTTP.Get;for(var p=0,x=q.length;p<x;++p){var y=ia(q[p].Constraint,function(a){return"GetEncoding"==a.name}).AllowedValues.Value;""===m&&(m=y[0]);if("KVP"===m)fa(y,"KVP")&&v.push(q[p].href);
else break}}v.length||(m="REST",c.ResourceURL.forEach(function(a){"tile"===a.resourceType&&(h=a.format,v.push(a.template))}));return{urls:v,layer:b.layer,matrixSet:f,format:h,projection:n,requestEncoding:m,tileGrid:g,style:e,dimensions:l,wrapX:r,crossOrigin:b.crossOrigin}});t("ol.source.XYZ",sw);t("ol.source.Zoomify",mx);Oh.prototype.vectorContext=Oh.prototype.vectorContext;Oh.prototype.frameState=Oh.prototype.frameState;Oh.prototype.context=Oh.prototype.context;Oh.prototype.glContext=Oh.prototype.glContext;
jq.prototype.get=jq.prototype.get;jq.prototype.getExtent=jq.prototype.D;jq.prototype.getGeometry=jq.prototype.U;jq.prototype.getProperties=jq.prototype.Nn;jq.prototype.getType=jq.prototype.S;t("ol.render.VectorContext",Th);kk.prototype.setStyle=kk.prototype.td;kk.prototype.drawGeometry=kk.prototype.oc;kk.prototype.drawFeature=kk.prototype.te;Uh.prototype.drawCircle=Uh.prototype.ac;Uh.prototype.setStyle=Uh.prototype.td;Uh.prototype.drawGeometry=Uh.prototype.oc;Uh.prototype.drawFeature=Uh.prototype.te;
t("ol.proj.common.add",hc);t("ol.proj.Projection",zb);zb.prototype.getCode=zb.prototype.Fk;zb.prototype.getExtent=zb.prototype.D;zb.prototype.getUnits=zb.prototype.Kb;zb.prototype.getMetersPerUnit=zb.prototype.uc;zb.prototype.getWorldExtent=zb.prototype.ol;zb.prototype.isGlobal=zb.prototype.Zl;zb.prototype.setGlobal=zb.prototype.Qp;zb.prototype.setExtent=zb.prototype.Mn;zb.prototype.setWorldExtent=zb.prototype.$p;zb.prototype.setGetPointResolution=zb.prototype.Pp;
t("ol.proj.Units.METERS_PER_UNIT",xb);t("ol.layer.Base",ph);ph.prototype.getExtent=ph.prototype.D;ph.prototype.getMaxResolution=ph.prototype.hc;ph.prototype.getMinResolution=ph.prototype.ic;ph.prototype.getOpacity=ph.prototype.jc;ph.prototype.getVisible=ph.prototype.Lb;ph.prototype.getZIndex=ph.prototype.Aa;ph.prototype.setExtent=ph.prototype.xc;ph.prototype.setMaxResolution=ph.prototype.Cc;ph.prototype.setMinResolution=ph.prototype.Dc;ph.prototype.setOpacity=ph.prototype.yc;
ph.prototype.setVisible=ph.prototype.zc;ph.prototype.setZIndex=ph.prototype.Xb;t("ol.layer.Group",rh);rh.prototype.getLayers=rh.prototype.sd;rh.prototype.setLayers=rh.prototype.pi;t("ol.layer.Heatmap",U);U.prototype.getBlur=U.prototype.nh;U.prototype.getGradient=U.prototype.uh;U.prototype.getRadius=U.prototype.ri;U.prototype.setBlur=U.prototype.ej;U.prototype.setGradient=U.prototype.kj;U.prototype.setRadius=U.prototype.Zc;t("ol.layer.Image",Mv);Mv.prototype.getSource=Mv.prototype.ka;
t("ol.layer.Layer",th);th.prototype.getSource=th.prototype.ka;th.prototype.setMap=th.prototype.setMap;th.prototype.setSource=th.prototype.ad;t("ol.layer.Tile",Vv);Vv.prototype.getPreload=Vv.prototype.Sd;Vv.prototype.getSource=Vv.prototype.ka;Vv.prototype.setPreload=Vv.prototype.si;Vv.prototype.getUseInterimTilesOnError=Vv.prototype.Wd;Vv.prototype.setUseInterimTilesOnError=Vv.prototype.ti;t("ol.layer.Vector",S);S.prototype.getSource=S.prototype.ka;S.prototype.getStyle=S.prototype.C;
S.prototype.getStyleFunction=S.prototype.G;S.prototype.setStyle=S.prototype.f;t("ol.layer.VectorTile",V);V.prototype.getPreload=V.prototype.Sd;V.prototype.getUseInterimTilesOnError=V.prototype.Wd;V.prototype.setPreload=V.prototype.ui;V.prototype.setUseInterimTilesOnError=V.prototype.vi;t("ol.interaction.DoubleClickZoom",og);t("ol.interaction.DoubleClickZoom.handleEvent",pg);t("ol.interaction.DragAndDrop",Ms);t("ol.interaction.DragAndDrop.handleEvent",jf);Ps.prototype.features=Ps.prototype.features;
Ps.prototype.file=Ps.prototype.file;Ps.prototype.projection=Ps.prototype.projection;t("ol.interaction.DragBox",Og);Og.prototype.getGeometry=Og.prototype.U;Tg.prototype.coordinate=Tg.prototype.coordinate;Tg.prototype.mapBrowserEvent=Tg.prototype.mapBrowserEvent;t("ol.interaction.DragPan",Dg);t("ol.interaction.DragRotate",Hg);t("ol.interaction.DragRotateAndZoom",Rs);t("ol.interaction.DragZoom",Xg);t("ol.interaction.Draw",cu);t("ol.interaction.Draw.handleEvent",eu);cu.prototype.removeLastPoint=cu.prototype.Ep;
cu.prototype.finishDrawing=cu.prototype.Qd;cu.prototype.extend=cu.prototype.nn;t("ol.interaction.Draw.createRegularPolygon",function(a,b){return function(c,d){var e=c[0],f=c[1],g=Math.sqrt(ef(e,f)),h=d?d:Wf(new vs(e),a);Xf(h,e,g,b?b:Math.atan((f[1]-e[1])/(f[0]-e[0])));return h}});t("ol.interaction.Draw.createBox",function(){return function(a,b){var c=Ia(a),d=b||new F(null);d.pa([[cb(c),db(c),eb(c),fb(c),cb(c)]]);return d}});su.prototype.feature=su.prototype.feature;t("ol.interaction.Extent",tu);
tu.prototype.getExtent=tu.prototype.D;tu.prototype.setExtent=tu.prototype.f;Eu.prototype.extent_=Eu.prototype.b;t("ol.interaction.Interaction",kg);kg.prototype.getActive=kg.prototype.c;kg.prototype.getMap=kg.prototype.i;kg.prototype.setActive=kg.prototype.Ia;t("ol.interaction.KeyboardPan",Yg);t("ol.interaction.KeyboardPan.handleEvent",Zg);t("ol.interaction.KeyboardZoom",$g);t("ol.interaction.KeyboardZoom.handleEvent",ah);t("ol.interaction.Modify",Gu);t("ol.interaction.Modify.handleEvent",Ju);
Gu.prototype.removePoint=Gu.prototype.cj;Ou.prototype.features=Ou.prototype.features;Ou.prototype.mapBrowserEvent=Ou.prototype.mapBrowserEvent;t("ol.interaction.MouseWheelZoom",bh);t("ol.interaction.MouseWheelZoom.handleEvent",ch);bh.prototype.setMouseAnchor=bh.prototype.T;t("ol.interaction.PinchRotate",fh);t("ol.interaction.PinchZoom",jh);t("ol.interaction.Pointer",Ag);t("ol.interaction.Pointer.handleEvent",Bg);t("ol.interaction.Select",Wu);Wu.prototype.getFeatures=Wu.prototype.zn;
Wu.prototype.getHitTolerance=Wu.prototype.An;Wu.prototype.getLayer=Wu.prototype.Bn;t("ol.interaction.Select.handleEvent",Xu);Wu.prototype.setHitTolerance=Wu.prototype.Dn;Wu.prototype.setMap=Wu.prototype.setMap;Zu.prototype.selected=Zu.prototype.selected;Zu.prototype.deselected=Zu.prototype.deselected;Zu.prototype.mapBrowserEvent=Zu.prototype.mapBrowserEvent;t("ol.interaction.Snap",av);av.prototype.addFeature=av.prototype.zb;av.prototype.removeFeature=av.prototype.Db;t("ol.interaction.Translate",ev);
ev.prototype.getHitTolerance=ev.prototype.I;ev.prototype.setHitTolerance=ev.prototype.Z;kv.prototype.features=kv.prototype.features;kv.prototype.coordinate=kv.prototype.coordinate;t("ol.geom.Circle",vs);vs.prototype.clone=vs.prototype.clone;vs.prototype.getCenter=vs.prototype.za;vs.prototype.getRadius=vs.prototype.Yd;vs.prototype.getType=vs.prototype.S;vs.prototype.intersectsExtent=vs.prototype.Ya;vs.prototype.setCenter=vs.prototype.lb;vs.prototype.setCenterAndRadius=vs.prototype.Gg;
vs.prototype.setRadius=vs.prototype.Zc;vs.prototype.transform=vs.prototype.tb;t("ol.geom.Geometry",lf);lf.prototype.getClosestPoint=lf.prototype.Ab;lf.prototype.intersectsCoordinate=lf.prototype.sb;lf.prototype.getExtent=lf.prototype.D;lf.prototype.rotate=lf.prototype.rotate;lf.prototype.scale=lf.prototype.scale;lf.prototype.simplify=lf.prototype.Qb;lf.prototype.transform=lf.prototype.tb;t("ol.geom.GeometryCollection",sm);sm.prototype.clone=sm.prototype.clone;sm.prototype.getGeometries=sm.prototype.Qf;
sm.prototype.getType=sm.prototype.S;sm.prototype.intersectsExtent=sm.prototype.Ya;sm.prototype.setGeometries=sm.prototype.jj;sm.prototype.applyTransform=sm.prototype.Fc;sm.prototype.translate=sm.prototype.translate;t("ol.geom.LinearRing",Gf);Gf.prototype.clone=Gf.prototype.clone;Gf.prototype.getArea=Gf.prototype.jn;Gf.prototype.getCoordinates=Gf.prototype.W;Gf.prototype.getType=Gf.prototype.S;Gf.prototype.setCoordinates=Gf.prototype.pa;t("ol.geom.LineString",N);N.prototype.appendCoordinate=N.prototype.ik;
N.prototype.clone=N.prototype.clone;N.prototype.forEachSegment=N.prototype.yk;N.prototype.getCoordinateAtM=N.prototype.gn;N.prototype.getCoordinates=N.prototype.W;N.prototype.getCoordinateAt=N.prototype.ph;N.prototype.getLength=N.prototype.hn;N.prototype.getType=N.prototype.S;N.prototype.intersectsExtent=N.prototype.Ya;N.prototype.setCoordinates=N.prototype.pa;t("ol.geom.MultiLineString",O);O.prototype.appendLineString=O.prototype.jk;O.prototype.clone=O.prototype.clone;
O.prototype.getCoordinateAtM=O.prototype.kn;O.prototype.getCoordinates=O.prototype.W;O.prototype.getLineString=O.prototype.Tk;O.prototype.getLineStrings=O.prototype.Nc;O.prototype.getType=O.prototype.S;O.prototype.intersectsExtent=O.prototype.Ya;O.prototype.setCoordinates=O.prototype.pa;t("ol.geom.MultiPoint",P);P.prototype.appendPoint=P.prototype.lk;P.prototype.clone=P.prototype.clone;P.prototype.getCoordinates=P.prototype.W;P.prototype.getPoint=P.prototype.dl;P.prototype.getPoints=P.prototype.Zd;
P.prototype.getType=P.prototype.S;P.prototype.intersectsExtent=P.prototype.Ya;P.prototype.setCoordinates=P.prototype.pa;t("ol.geom.MultiPolygon",Q);Q.prototype.appendPolygon=Q.prototype.mk;Q.prototype.clone=Q.prototype.clone;Q.prototype.getArea=Q.prototype.ln;Q.prototype.getCoordinates=Q.prototype.W;Q.prototype.getInteriorPoints=Q.prototype.Pk;Q.prototype.getPolygon=Q.prototype.el;Q.prototype.getPolygons=Q.prototype.md;Q.prototype.getType=Q.prototype.S;Q.prototype.intersectsExtent=Q.prototype.Ya;
Q.prototype.setCoordinates=Q.prototype.pa;t("ol.geom.Point",E);E.prototype.clone=E.prototype.clone;E.prototype.getCoordinates=E.prototype.W;E.prototype.getType=E.prototype.S;E.prototype.intersectsExtent=E.prototype.Ya;E.prototype.setCoordinates=E.prototype.pa;t("ol.geom.Polygon",F);F.prototype.appendLinearRing=F.prototype.kk;F.prototype.clone=F.prototype.clone;F.prototype.getArea=F.prototype.mn;F.prototype.getCoordinates=F.prototype.W;F.prototype.getInteriorPoint=F.prototype.Ok;
F.prototype.getLinearRingCount=F.prototype.Uk;F.prototype.getLinearRing=F.prototype.vh;F.prototype.getLinearRings=F.prototype.Oc;F.prototype.getType=F.prototype.S;F.prototype.intersectsExtent=F.prototype.Ya;F.prototype.setCoordinates=F.prototype.pa;t("ol.geom.Polygon.circular",Uf);t("ol.geom.Polygon.fromExtent",Vf);t("ol.geom.Polygon.fromCircle",Wf);t("ol.geom.SimpleGeometry",of);of.prototype.getFirstCoordinate=of.prototype.cc;of.prototype.getLastCoordinate=of.prototype.dc;
of.prototype.getLayout=of.prototype.ec;of.prototype.applyTransform=of.prototype.Fc;of.prototype.translate=of.prototype.translate;t("ol.format.EsriJSON",Ql);Ql.prototype.readFeature=Ql.prototype.Vb;Ql.prototype.readFeatures=Ql.prototype.Pa;Ql.prototype.readGeometry=Ql.prototype.Xc;Ql.prototype.readProjection=Ql.prototype.jb;Ql.prototype.writeGeometry=Ql.prototype.ed;Ql.prototype.writeGeometryObject=Ql.prototype.ie;Ql.prototype.writeFeature=Ql.prototype.Dd;Ql.prototype.writeFeatureObject=Ql.prototype.dd;
Ql.prototype.writeFeatures=Ql.prototype.Yb;Ql.prototype.writeFeaturesObject=Ql.prototype.ge;t("ol.format.Feature",El);t("ol.format.filter.and",qm);t("ol.format.filter.or",function(a){var b=[null].concat(Array.prototype.slice.call(arguments));return new (Function.prototype.bind.apply(om,b))});t("ol.format.filter.not",function(a){return new mm(a)});t("ol.format.filter.bbox",rm);t("ol.format.filter.intersects",function(a,b,c){return new gm(a,b,c)});
t("ol.format.filter.within",function(a,b,c){return new pm(a,b,c)});t("ol.format.filter.equalTo",function(a,b,c){return new cm(a,b,c)});t("ol.format.filter.notEqualTo",function(a,b,c){return new nm(a,b,c)});t("ol.format.filter.lessThan",function(a,b){return new km(a,b)});t("ol.format.filter.lessThanOrEqualTo",function(a,b){return new lm(a,b)});t("ol.format.filter.greaterThan",function(a,b){return new dm(a,b)});t("ol.format.filter.greaterThanOrEqualTo",function(a,b){return new em(a,b)});
t("ol.format.filter.isNull",function(a){return new jm(a)});t("ol.format.filter.between",function(a,b,c){return new hm(a,b,c)});t("ol.format.filter.like",function(a,b,c,d,e,f){return new im(a,b,c,d,e,f)});t("ol.format.GeoJSON",wm);wm.prototype.readFeature=wm.prototype.Vb;wm.prototype.readFeatures=wm.prototype.Pa;wm.prototype.readGeometry=wm.prototype.Xc;wm.prototype.readProjection=wm.prototype.jb;wm.prototype.writeFeature=wm.prototype.Dd;wm.prototype.writeFeatureObject=wm.prototype.dd;
wm.prototype.writeFeatures=wm.prototype.Yb;wm.prototype.writeFeaturesObject=wm.prototype.ge;wm.prototype.writeGeometry=wm.prototype.ed;wm.prototype.writeGeometryObject=wm.prototype.ie;t("ol.format.GML",Rm);Rm.prototype.writeFeatures=Rm.prototype.Yb;Rm.prototype.writeFeaturesNode=Rm.prototype.Zb;t("ol.format.GML2",$m);t("ol.format.GML3",Rm);Rm.prototype.writeGeometryNode=Rm.prototype.he;Rm.prototype.writeFeatures=Rm.prototype.Yb;Rm.prototype.writeFeaturesNode=Rm.prototype.Zb;
Em.prototype.readFeatures=Em.prototype.Pa;t("ol.format.GPX",ln);ln.prototype.readFeature=ln.prototype.Vb;ln.prototype.readFeatures=ln.prototype.Pa;ln.prototype.readProjection=ln.prototype.jb;ln.prototype.writeFeatures=ln.prototype.Yb;ln.prototype.writeFeaturesNode=ln.prototype.Zb;t("ol.format.IGC",Wn);Wn.prototype.readFeature=Wn.prototype.Vb;Wn.prototype.readFeatures=Wn.prototype.Pa;Wn.prototype.readProjection=Wn.prototype.jb;t("ol.format.KML",fo);fo.prototype.readFeature=fo.prototype.Vb;
fo.prototype.readFeatures=fo.prototype.Pa;fo.prototype.readName=fo.prototype.sp;fo.prototype.readNetworkLinks=fo.prototype.tp;fo.prototype.readRegion=fo.prototype.wp;fo.prototype.readRegionFromNode=fo.prototype.jf;fo.prototype.readProjection=fo.prototype.jb;fo.prototype.writeFeatures=fo.prototype.Yb;fo.prototype.writeFeaturesNode=fo.prototype.Zb;t("ol.format.MVT",kq);kq.prototype.readFeatures=kq.prototype.Pa;kq.prototype.readProjection=kq.prototype.jb;kq.prototype.setLayers=kq.prototype.fn;
t("ol.format.OSMXML",mq);mq.prototype.readFeatures=mq.prototype.Pa;mq.prototype.readProjection=mq.prototype.jb;t("ol.format.Polyline",Mq);t("ol.format.Polyline.encodeDeltas",Nq);t("ol.format.Polyline.decodeDeltas",Pq);t("ol.format.Polyline.encodeFloats",Oq);t("ol.format.Polyline.decodeFloats",Qq);Mq.prototype.readFeature=Mq.prototype.Vb;Mq.prototype.readFeatures=Mq.prototype.Pa;Mq.prototype.readGeometry=Mq.prototype.Xc;Mq.prototype.readProjection=Mq.prototype.jb;Mq.prototype.writeGeometry=Mq.prototype.ed;
t("ol.format.TopoJSON",Rq);Rq.prototype.readFeatures=Rq.prototype.Pa;Rq.prototype.readProjection=Rq.prototype.jb;t("ol.format.WFS",Xq);Xq.prototype.readFeatures=Xq.prototype.Pa;Xq.prototype.readTransactionResponse=Xq.prototype.j;Xq.prototype.readFeatureCollectionMetadata=Xq.prototype.f;t("ol.format.WFS.writeFilter",function(a){var b=kl("http://www.opengis.net/ogc","Filter");Bl({node:b},kr,wl(a.mc),[a],[]);return b});Xq.prototype.writeGetFeature=Xq.prototype.o;Xq.prototype.writeTransaction=Xq.prototype.u;
Xq.prototype.readProjection=Xq.prototype.jb;t("ol.format.WKT",pr);pr.prototype.readFeature=pr.prototype.Vb;pr.prototype.readFeatures=pr.prototype.Pa;pr.prototype.readGeometry=pr.prototype.Xc;pr.prototype.writeFeature=pr.prototype.Dd;pr.prototype.writeFeatures=pr.prototype.Yb;pr.prototype.writeGeometry=pr.prototype.ed;t("ol.format.WMSCapabilities",Ir);Ir.prototype.read=Ir.prototype.read;t("ol.format.WMSGetFeatureInfo",es);es.prototype.readFeatures=es.prototype.Pa;t("ol.format.WMTSCapabilities",fs);
fs.prototype.read=fs.prototype.read;t("ol.format.filter.And",Zl);t("ol.format.filter.Bbox",$l);t("ol.format.filter.Comparison",am);t("ol.format.filter.ComparisonBinary",bm);t("ol.format.filter.EqualTo",cm);t("ol.format.filter.Filter",Xl);t("ol.format.filter.GreaterThan",dm);t("ol.format.filter.GreaterThanOrEqualTo",em);t("ol.format.filter.Intersects",gm);t("ol.format.filter.IsBetween",hm);t("ol.format.filter.IsLike",im);t("ol.format.filter.IsNull",jm);t("ol.format.filter.LessThan",km);
t("ol.format.filter.LessThanOrEqualTo",lm);t("ol.format.filter.Not",mm);t("ol.format.filter.NotEqualTo",nm);t("ol.format.filter.Or",om);t("ol.format.filter.Spatial",fm);t("ol.format.filter.Within",pm);t("ol.events.condition.altKeyOnly",function(a){a=a.originalEvent;return a.altKey&&!(a.metaKey||a.ctrlKey)&&!a.shiftKey});t("ol.events.condition.altShiftKeysOnly",qg);t("ol.events.condition.always",jf);t("ol.events.condition.click",function(a){return"click"==a.type});t("ol.events.condition.never",kf);
t("ol.events.condition.pointerMove",sg);t("ol.events.condition.singleClick",tg);t("ol.events.condition.doubleClick",function(a){return"dblclick"==a.type});t("ol.events.condition.noModifierKeys",vg);t("ol.events.condition.platformModifierKeyOnly",function(a){a=a.originalEvent;return!a.altKey&&(Sd?a.metaKey:a.ctrlKey)&&!a.shiftKey});t("ol.events.condition.shiftKeyOnly",wg);t("ol.events.condition.targetNotEditable",xg);t("ol.events.condition.mouseOnly",yg);t("ol.events.condition.primaryAction",zg);
Lc.prototype.type=Lc.prototype.type;Lc.prototype.target=Lc.prototype.target;Lc.prototype.preventDefault=Lc.prototype.preventDefault;Lc.prototype.stopPropagation=Lc.prototype.stopPropagation;t("ol.control.Attribution",ld);t("ol.control.Attribution.render",md);ld.prototype.getCollapsible=ld.prototype.Om;ld.prototype.setCollapsible=ld.prototype.Rm;ld.prototype.setCollapsed=ld.prototype.Qm;ld.prototype.getCollapsed=ld.prototype.Nm;t("ol.control.Control",kd);kd.prototype.getMap=kd.prototype.f;
kd.prototype.setMap=kd.prototype.setMap;kd.prototype.setTarget=kd.prototype.i;t("ol.control.FullScreen",wd);t("ol.control.MousePosition",Bd);t("ol.control.MousePosition.render",Cd);Bd.prototype.getCoordinateFormat=Bd.prototype.qh;Bd.prototype.getProjection=Bd.prototype.Sh;Bd.prototype.setCoordinateFormat=Bd.prototype.fj;Bd.prototype.setProjection=Bd.prototype.Th;t("ol.control.OverviewMap",Bk);t("ol.control.OverviewMap.render",Ck);Bk.prototype.getCollapsible=Bk.prototype.Um;
Bk.prototype.setCollapsible=Bk.prototype.Xm;Bk.prototype.setCollapsed=Bk.prototype.Wm;Bk.prototype.getCollapsed=Bk.prototype.Tm;Bk.prototype.getOverviewMap=Bk.prototype.bl;t("ol.control.Rotate",sd);t("ol.control.Rotate.render",td);t("ol.control.ScaleLine",Gk);Gk.prototype.getUnits=Gk.prototype.Kb;t("ol.control.ScaleLine.render",Hk);Gk.prototype.setUnits=Gk.prototype.G;t("ol.control.Zoom",ud);t("ol.control.ZoomSlider",Lk);t("ol.control.ZoomSlider.render",Nk);t("ol.control.ZoomToExtent",Qk);
Qc.prototype.changed=Qc.prototype.s;Qc.prototype.dispatchEvent=Qc.prototype.b;Qc.prototype.getRevision=Qc.prototype.L;Qc.prototype.on=Qc.prototype.J;Qc.prototype.once=Qc.prototype.once;Qc.prototype.un=Qc.prototype.K;D.prototype.get=D.prototype.get;D.prototype.getKeys=D.prototype.P;D.prototype.getProperties=D.prototype.M;D.prototype.set=D.prototype.set;D.prototype.setProperties=D.prototype.H;D.prototype.unset=D.prototype.R;D.prototype.changed=D.prototype.s;D.prototype.dispatchEvent=D.prototype.b;
D.prototype.getRevision=D.prototype.L;D.prototype.on=D.prototype.J;D.prototype.once=D.prototype.once;D.prototype.un=D.prototype.K;Yc.prototype.type=Yc.prototype.type;Yc.prototype.target=Yc.prototype.target;Yc.prototype.preventDefault=Yc.prototype.preventDefault;Yc.prototype.stopPropagation=Yc.prototype.stopPropagation;Rk.prototype.get=Rk.prototype.get;Rk.prototype.getKeys=Rk.prototype.P;Rk.prototype.getProperties=Rk.prototype.M;Rk.prototype.set=Rk.prototype.set;Rk.prototype.setProperties=Rk.prototype.H;
Rk.prototype.unset=Rk.prototype.R;Rk.prototype.changed=Rk.prototype.s;Rk.prototype.dispatchEvent=Rk.prototype.b;Rk.prototype.getRevision=Rk.prototype.L;Rk.prototype.on=Rk.prototype.J;Rk.prototype.once=Rk.prototype.once;Rk.prototype.un=Rk.prototype.K;I.prototype.get=I.prototype.get;I.prototype.getKeys=I.prototype.P;I.prototype.getProperties=I.prototype.M;I.prototype.set=I.prototype.set;I.prototype.setProperties=I.prototype.H;I.prototype.unset=I.prototype.R;I.prototype.changed=I.prototype.s;
I.prototype.dispatchEvent=I.prototype.b;I.prototype.getRevision=I.prototype.L;I.prototype.on=I.prototype.J;I.prototype.once=I.prototype.once;I.prototype.un=I.prototype.K;us.prototype.get=us.prototype.get;us.prototype.getKeys=us.prototype.P;us.prototype.getProperties=us.prototype.M;us.prototype.set=us.prototype.set;us.prototype.setProperties=us.prototype.H;us.prototype.unset=us.prototype.R;us.prototype.changed=us.prototype.s;us.prototype.dispatchEvent=us.prototype.b;us.prototype.getRevision=us.prototype.L;
us.prototype.on=us.prototype.J;us.prototype.once=us.prototype.once;us.prototype.un=us.prototype.K;Ks.prototype.getTileCoord=Ks.prototype.i;Ks.prototype.load=Ks.prototype.load;H.prototype.get=H.prototype.get;H.prototype.getKeys=H.prototype.P;H.prototype.getProperties=H.prototype.M;H.prototype.set=H.prototype.set;H.prototype.setProperties=H.prototype.H;H.prototype.unset=H.prototype.R;H.prototype.changed=H.prototype.s;H.prototype.dispatchEvent=H.prototype.b;H.prototype.getRevision=H.prototype.L;
H.prototype.on=H.prototype.J;H.prototype.once=H.prototype.once;H.prototype.un=H.prototype.K;Gd.prototype.type=Gd.prototype.type;Gd.prototype.target=Gd.prototype.target;Gd.prototype.preventDefault=Gd.prototype.preventDefault;Gd.prototype.stopPropagation=Gd.prototype.stopPropagation;Hd.prototype.map=Hd.prototype.map;Hd.prototype.frameState=Hd.prototype.frameState;Hd.prototype.type=Hd.prototype.type;Hd.prototype.target=Hd.prototype.target;Hd.prototype.preventDefault=Hd.prototype.preventDefault;
Hd.prototype.stopPropagation=Hd.prototype.stopPropagation;Kd.prototype.originalEvent=Kd.prototype.originalEvent;Kd.prototype.pixel=Kd.prototype.pixel;Kd.prototype.coordinate=Kd.prototype.coordinate;Kd.prototype.dragging=Kd.prototype.dragging;Kd.prototype.preventDefault=Kd.prototype.preventDefault;Kd.prototype.stopPropagation=Kd.prototype.stopPropagation;Kd.prototype.map=Kd.prototype.map;Kd.prototype.frameState=Kd.prototype.frameState;Kd.prototype.type=Kd.prototype.type;Kd.prototype.target=Kd.prototype.target;
Uc.prototype.type=Uc.prototype.type;Uc.prototype.target=Uc.prototype.target;Uc.prototype.preventDefault=Uc.prototype.preventDefault;Uc.prototype.stopPropagation=Uc.prototype.stopPropagation;sk.prototype.get=sk.prototype.get;sk.prototype.getKeys=sk.prototype.P;sk.prototype.getProperties=sk.prototype.M;sk.prototype.set=sk.prototype.set;sk.prototype.setProperties=sk.prototype.H;sk.prototype.unset=sk.prototype.R;sk.prototype.changed=sk.prototype.s;sk.prototype.dispatchEvent=sk.prototype.b;
sk.prototype.getRevision=sk.prototype.L;sk.prototype.on=sk.prototype.J;sk.prototype.once=sk.prototype.once;sk.prototype.un=sk.prototype.K;gx.prototype.getTileCoord=gx.prototype.i;gx.prototype.load=gx.prototype.load;G.prototype.get=G.prototype.get;G.prototype.getKeys=G.prototype.P;G.prototype.getProperties=G.prototype.M;G.prototype.set=G.prototype.set;G.prototype.setProperties=G.prototype.H;G.prototype.unset=G.prototype.R;G.prototype.changed=G.prototype.s;G.prototype.dispatchEvent=G.prototype.b;
G.prototype.getRevision=G.prototype.L;G.prototype.on=G.prototype.J;G.prototype.once=G.prototype.once;G.prototype.un=G.prototype.K;jx.prototype.forEachTileCoord=jx.prototype.mh;jx.prototype.getMaxZoom=jx.prototype.Ni;jx.prototype.getMinZoom=jx.prototype.Oi;jx.prototype.getOrigin=jx.prototype.Uc;jx.prototype.getResolution=jx.prototype.La;jx.prototype.getResolutions=jx.prototype.Pi;jx.prototype.getTileCoordExtent=jx.prototype.Ua;jx.prototype.getTileCoordForCoordAndResolution=jx.prototype.Ae;
jx.prototype.getTileCoordForCoordAndZ=jx.prototype.Xf;jx.prototype.getTileSize=jx.prototype.eb;jx.prototype.getZForResolution=jx.prototype.Qc;Yk.prototype.getOpacity=Yk.prototype.Ye;Yk.prototype.getRotateWithView=Yk.prototype.Ze;Yk.prototype.getRotation=Yk.prototype.$e;Yk.prototype.getScale=Yk.prototype.af;Yk.prototype.getSnapToPixel=Yk.prototype.ze;Yk.prototype.setOpacity=Yk.prototype.vd;Yk.prototype.setRotation=Yk.prototype.bf;Yk.prototype.setScale=Yk.prototype.wd;$k.prototype.clone=$k.prototype.clone;
$k.prototype.getAngle=$k.prototype.Ji;$k.prototype.getFill=$k.prototype.Ca;$k.prototype.getPoints=$k.prototype.Ki;$k.prototype.getRadius=$k.prototype.Li;$k.prototype.getRadius2=$k.prototype.yh;$k.prototype.getStroke=$k.prototype.Da;$k.prototype.getOpacity=$k.prototype.Ye;$k.prototype.getRotateWithView=$k.prototype.Ze;$k.prototype.getRotation=$k.prototype.$e;$k.prototype.getScale=$k.prototype.af;$k.prototype.getSnapToPixel=$k.prototype.ze;$k.prototype.setOpacity=$k.prototype.vd;
$k.prototype.setRotation=$k.prototype.bf;$k.prototype.setScale=$k.prototype.wd;co.prototype.getOpacity=co.prototype.Ye;co.prototype.getRotateWithView=co.prototype.Ze;co.prototype.getRotation=co.prototype.$e;co.prototype.getScale=co.prototype.af;co.prototype.getSnapToPixel=co.prototype.ze;co.prototype.setOpacity=co.prototype.vd;co.prototype.setRotation=co.prototype.bf;co.prototype.setScale=co.prototype.wd;Tt.prototype.get=Tt.prototype.get;Tt.prototype.getKeys=Tt.prototype.P;
Tt.prototype.getProperties=Tt.prototype.M;Tt.prototype.set=Tt.prototype.set;Tt.prototype.setProperties=Tt.prototype.H;Tt.prototype.unset=Tt.prototype.R;Tt.prototype.changed=Tt.prototype.s;Tt.prototype.dispatchEvent=Tt.prototype.b;Tt.prototype.getRevision=Tt.prototype.L;Tt.prototype.on=Tt.prototype.J;Tt.prototype.once=Tt.prototype.once;Tt.prototype.un=Tt.prototype.K;iw.prototype.getAttributions=iw.prototype.xa;iw.prototype.getLogo=iw.prototype.wa;iw.prototype.getProjection=iw.prototype.ya;
iw.prototype.getState=iw.prototype.V;iw.prototype.refresh=iw.prototype.va;iw.prototype.setAttributions=iw.prototype.ua;iw.prototype.get=iw.prototype.get;iw.prototype.getKeys=iw.prototype.P;iw.prototype.getProperties=iw.prototype.M;iw.prototype.set=iw.prototype.set;iw.prototype.setProperties=iw.prototype.H;iw.prototype.unset=iw.prototype.R;iw.prototype.changed=iw.prototype.s;iw.prototype.dispatchEvent=iw.prototype.b;iw.prototype.getRevision=iw.prototype.L;iw.prototype.on=iw.prototype.J;
iw.prototype.once=iw.prototype.once;iw.prototype.un=iw.prototype.K;mw.prototype.getTileGrid=mw.prototype.ab;mw.prototype.refresh=mw.prototype.va;mw.prototype.getAttributions=mw.prototype.xa;mw.prototype.getLogo=mw.prototype.wa;mw.prototype.getProjection=mw.prototype.ya;mw.prototype.getState=mw.prototype.V;mw.prototype.setAttributions=mw.prototype.ua;mw.prototype.get=mw.prototype.get;mw.prototype.getKeys=mw.prototype.P;mw.prototype.getProperties=mw.prototype.M;mw.prototype.set=mw.prototype.set;
mw.prototype.setProperties=mw.prototype.H;mw.prototype.unset=mw.prototype.R;mw.prototype.changed=mw.prototype.s;mw.prototype.dispatchEvent=mw.prototype.b;mw.prototype.getRevision=mw.prototype.L;mw.prototype.on=mw.prototype.J;mw.prototype.once=mw.prototype.once;mw.prototype.un=mw.prototype.K;W.prototype.getTileLoadFunction=W.prototype.ob;W.prototype.getTileUrlFunction=W.prototype.qb;W.prototype.getUrls=W.prototype.rb;W.prototype.setTileLoadFunction=W.prototype.wb;W.prototype.setTileUrlFunction=W.prototype.bb;
W.prototype.setUrl=W.prototype.ib;W.prototype.setUrls=W.prototype.cb;W.prototype.getTileGrid=W.prototype.ab;W.prototype.refresh=W.prototype.va;W.prototype.getAttributions=W.prototype.xa;W.prototype.getLogo=W.prototype.wa;W.prototype.getProjection=W.prototype.ya;W.prototype.getState=W.prototype.V;W.prototype.setAttributions=W.prototype.ua;W.prototype.get=W.prototype.get;W.prototype.getKeys=W.prototype.P;W.prototype.getProperties=W.prototype.M;W.prototype.set=W.prototype.set;
W.prototype.setProperties=W.prototype.H;W.prototype.unset=W.prototype.R;W.prototype.changed=W.prototype.s;W.prototype.dispatchEvent=W.prototype.b;W.prototype.getRevision=W.prototype.L;W.prototype.on=W.prototype.J;W.prototype.once=W.prototype.once;W.prototype.un=W.prototype.K;qw.prototype.setRenderReprojectionEdges=qw.prototype.Ob;qw.prototype.setTileGridForProjection=qw.prototype.Pb;qw.prototype.getTileLoadFunction=qw.prototype.ob;qw.prototype.getTileUrlFunction=qw.prototype.qb;
qw.prototype.getUrls=qw.prototype.rb;qw.prototype.setTileLoadFunction=qw.prototype.wb;qw.prototype.setTileUrlFunction=qw.prototype.bb;qw.prototype.setUrl=qw.prototype.ib;qw.prototype.setUrls=qw.prototype.cb;qw.prototype.getTileGrid=qw.prototype.ab;qw.prototype.refresh=qw.prototype.va;qw.prototype.getAttributions=qw.prototype.xa;qw.prototype.getLogo=qw.prototype.wa;qw.prototype.getProjection=qw.prototype.ya;qw.prototype.getState=qw.prototype.V;qw.prototype.setAttributions=qw.prototype.ua;
qw.prototype.get=qw.prototype.get;qw.prototype.getKeys=qw.prototype.P;qw.prototype.getProperties=qw.prototype.M;qw.prototype.set=qw.prototype.set;qw.prototype.setProperties=qw.prototype.H;qw.prototype.unset=qw.prototype.R;qw.prototype.changed=qw.prototype.s;qw.prototype.dispatchEvent=qw.prototype.b;qw.prototype.getRevision=qw.prototype.L;qw.prototype.on=qw.prototype.J;qw.prototype.once=qw.prototype.once;qw.prototype.un=qw.prototype.K;sw.prototype.setRenderReprojectionEdges=sw.prototype.Ob;
sw.prototype.setTileGridForProjection=sw.prototype.Pb;sw.prototype.getTileLoadFunction=sw.prototype.ob;sw.prototype.getTileUrlFunction=sw.prototype.qb;sw.prototype.getUrls=sw.prototype.rb;sw.prototype.setTileLoadFunction=sw.prototype.wb;sw.prototype.setTileUrlFunction=sw.prototype.bb;sw.prototype.setUrl=sw.prototype.ib;sw.prototype.setUrls=sw.prototype.cb;sw.prototype.getTileGrid=sw.prototype.ab;sw.prototype.refresh=sw.prototype.va;sw.prototype.getAttributions=sw.prototype.xa;
sw.prototype.getLogo=sw.prototype.wa;sw.prototype.getProjection=sw.prototype.ya;sw.prototype.getState=sw.prototype.V;sw.prototype.setAttributions=sw.prototype.ua;sw.prototype.get=sw.prototype.get;sw.prototype.getKeys=sw.prototype.P;sw.prototype.getProperties=sw.prototype.M;sw.prototype.set=sw.prototype.set;sw.prototype.setProperties=sw.prototype.H;sw.prototype.unset=sw.prototype.R;sw.prototype.changed=sw.prototype.s;sw.prototype.dispatchEvent=sw.prototype.b;sw.prototype.getRevision=sw.prototype.L;
sw.prototype.on=sw.prototype.J;sw.prototype.once=sw.prototype.once;sw.prototype.un=sw.prototype.K;tw.prototype.setRenderReprojectionEdges=tw.prototype.Ob;tw.prototype.setTileGridForProjection=tw.prototype.Pb;tw.prototype.getTileLoadFunction=tw.prototype.ob;tw.prototype.getTileUrlFunction=tw.prototype.qb;tw.prototype.getUrls=tw.prototype.rb;tw.prototype.setTileLoadFunction=tw.prototype.wb;tw.prototype.setTileUrlFunction=tw.prototype.bb;tw.prototype.setUrl=tw.prototype.ib;tw.prototype.setUrls=tw.prototype.cb;
tw.prototype.getTileGrid=tw.prototype.ab;tw.prototype.refresh=tw.prototype.va;tw.prototype.getAttributions=tw.prototype.xa;tw.prototype.getLogo=tw.prototype.wa;tw.prototype.getProjection=tw.prototype.ya;tw.prototype.getState=tw.prototype.V;tw.prototype.setAttributions=tw.prototype.ua;tw.prototype.get=tw.prototype.get;tw.prototype.getKeys=tw.prototype.P;tw.prototype.getProperties=tw.prototype.M;tw.prototype.set=tw.prototype.set;tw.prototype.setProperties=tw.prototype.H;tw.prototype.unset=tw.prototype.R;
tw.prototype.changed=tw.prototype.s;tw.prototype.dispatchEvent=tw.prototype.b;tw.prototype.getRevision=tw.prototype.L;tw.prototype.on=tw.prototype.J;tw.prototype.once=tw.prototype.once;tw.prototype.un=tw.prototype.K;T.prototype.getAttributions=T.prototype.xa;T.prototype.getLogo=T.prototype.wa;T.prototype.getProjection=T.prototype.ya;T.prototype.getState=T.prototype.V;T.prototype.refresh=T.prototype.va;T.prototype.setAttributions=T.prototype.ua;T.prototype.get=T.prototype.get;T.prototype.getKeys=T.prototype.P;
T.prototype.getProperties=T.prototype.M;T.prototype.set=T.prototype.set;T.prototype.setProperties=T.prototype.H;T.prototype.unset=T.prototype.R;T.prototype.changed=T.prototype.s;T.prototype.dispatchEvent=T.prototype.b;T.prototype.getRevision=T.prototype.L;T.prototype.on=T.prototype.J;T.prototype.once=T.prototype.once;T.prototype.un=T.prototype.K;X.prototype.addFeature=X.prototype.zb;X.prototype.addFeatures=X.prototype.gd;X.prototype.clear=X.prototype.clear;X.prototype.forEachFeature=X.prototype.kh;
X.prototype.forEachFeatureInExtent=X.prototype.bc;X.prototype.forEachFeatureIntersectingExtent=X.prototype.lh;X.prototype.getFeaturesCollection=X.prototype.th;X.prototype.getFeatures=X.prototype.We;X.prototype.getFeaturesAtCoordinate=X.prototype.sh;X.prototype.getFeaturesInExtent=X.prototype.Pf;X.prototype.getClosestFeatureToCoordinate=X.prototype.oh;X.prototype.getExtent=X.prototype.D;X.prototype.getFeatureById=X.prototype.rh;X.prototype.getFormat=X.prototype.Gi;X.prototype.getUrl=X.prototype.Hi;
X.prototype.removeFeature=X.prototype.Db;X.prototype.getAttributions=X.prototype.xa;X.prototype.getLogo=X.prototype.wa;X.prototype.getProjection=X.prototype.ya;X.prototype.getState=X.prototype.V;X.prototype.refresh=X.prototype.va;X.prototype.setAttributions=X.prototype.ua;X.prototype.get=X.prototype.get;X.prototype.getKeys=X.prototype.P;X.prototype.getProperties=X.prototype.M;X.prototype.set=X.prototype.set;X.prototype.setProperties=X.prototype.H;X.prototype.unset=X.prototype.R;
X.prototype.changed=X.prototype.s;X.prototype.dispatchEvent=X.prototype.b;X.prototype.getRevision=X.prototype.L;X.prototype.on=X.prototype.J;X.prototype.once=X.prototype.once;X.prototype.un=X.prototype.K;zv.prototype.getAttributions=zv.prototype.xa;zv.prototype.getLogo=zv.prototype.wa;zv.prototype.getProjection=zv.prototype.ya;zv.prototype.getState=zv.prototype.V;zv.prototype.refresh=zv.prototype.va;zv.prototype.setAttributions=zv.prototype.ua;zv.prototype.get=zv.prototype.get;
zv.prototype.getKeys=zv.prototype.P;zv.prototype.getProperties=zv.prototype.M;zv.prototype.set=zv.prototype.set;zv.prototype.setProperties=zv.prototype.H;zv.prototype.unset=zv.prototype.R;zv.prototype.changed=zv.prototype.s;zv.prototype.dispatchEvent=zv.prototype.b;zv.prototype.getRevision=zv.prototype.L;zv.prototype.on=zv.prototype.J;zv.prototype.once=zv.prototype.once;zv.prototype.un=zv.prototype.K;Bv.prototype.type=Bv.prototype.type;Bv.prototype.target=Bv.prototype.target;
Bv.prototype.preventDefault=Bv.prototype.preventDefault;Bv.prototype.stopPropagation=Bv.prototype.stopPropagation;zw.prototype.getAttributions=zw.prototype.xa;zw.prototype.getLogo=zw.prototype.wa;zw.prototype.getProjection=zw.prototype.ya;zw.prototype.getState=zw.prototype.V;zw.prototype.refresh=zw.prototype.va;zw.prototype.setAttributions=zw.prototype.ua;zw.prototype.get=zw.prototype.get;zw.prototype.getKeys=zw.prototype.P;zw.prototype.getProperties=zw.prototype.M;zw.prototype.set=zw.prototype.set;
zw.prototype.setProperties=zw.prototype.H;zw.prototype.unset=zw.prototype.R;zw.prototype.changed=zw.prototype.s;zw.prototype.dispatchEvent=zw.prototype.b;zw.prototype.getRevision=zw.prototype.L;zw.prototype.on=zw.prototype.J;zw.prototype.once=zw.prototype.once;zw.prototype.un=zw.prototype.K;Gv.prototype.getAttributions=Gv.prototype.xa;Gv.prototype.getLogo=Gv.prototype.wa;Gv.prototype.getProjection=Gv.prototype.ya;Gv.prototype.getState=Gv.prototype.V;Gv.prototype.refresh=Gv.prototype.va;
Gv.prototype.setAttributions=Gv.prototype.ua;Gv.prototype.get=Gv.prototype.get;Gv.prototype.getKeys=Gv.prototype.P;Gv.prototype.getProperties=Gv.prototype.M;Gv.prototype.set=Gv.prototype.set;Gv.prototype.setProperties=Gv.prototype.H;Gv.prototype.unset=Gv.prototype.R;Gv.prototype.changed=Gv.prototype.s;Gv.prototype.dispatchEvent=Gv.prototype.b;Gv.prototype.getRevision=Gv.prototype.L;Gv.prototype.on=Gv.prototype.J;Gv.prototype.once=Gv.prototype.once;Gv.prototype.un=Gv.prototype.K;
Aw.prototype.getAttributions=Aw.prototype.xa;Aw.prototype.getLogo=Aw.prototype.wa;Aw.prototype.getProjection=Aw.prototype.ya;Aw.prototype.getState=Aw.prototype.V;Aw.prototype.refresh=Aw.prototype.va;Aw.prototype.setAttributions=Aw.prototype.ua;Aw.prototype.get=Aw.prototype.get;Aw.prototype.getKeys=Aw.prototype.P;Aw.prototype.getProperties=Aw.prototype.M;Aw.prototype.set=Aw.prototype.set;Aw.prototype.setProperties=Aw.prototype.H;Aw.prototype.unset=Aw.prototype.R;Aw.prototype.changed=Aw.prototype.s;
Aw.prototype.dispatchEvent=Aw.prototype.b;Aw.prototype.getRevision=Aw.prototype.L;Aw.prototype.on=Aw.prototype.J;Aw.prototype.once=Aw.prototype.once;Aw.prototype.un=Aw.prototype.K;Bw.prototype.getAttributions=Bw.prototype.xa;Bw.prototype.getLogo=Bw.prototype.wa;Bw.prototype.getProjection=Bw.prototype.ya;Bw.prototype.getState=Bw.prototype.V;Bw.prototype.refresh=Bw.prototype.va;Bw.prototype.setAttributions=Bw.prototype.ua;Bw.prototype.get=Bw.prototype.get;Bw.prototype.getKeys=Bw.prototype.P;
Bw.prototype.getProperties=Bw.prototype.M;Bw.prototype.set=Bw.prototype.set;Bw.prototype.setProperties=Bw.prototype.H;Bw.prototype.unset=Bw.prototype.R;Bw.prototype.changed=Bw.prototype.s;Bw.prototype.dispatchEvent=Bw.prototype.b;Bw.prototype.getRevision=Bw.prototype.L;Bw.prototype.on=Bw.prototype.J;Bw.prototype.once=Bw.prototype.once;Bw.prototype.un=Bw.prototype.K;Hv.prototype.getAttributions=Hv.prototype.xa;Hv.prototype.getLogo=Hv.prototype.wa;Hv.prototype.getProjection=Hv.prototype.ya;
Hv.prototype.getState=Hv.prototype.V;Hv.prototype.refresh=Hv.prototype.va;Hv.prototype.setAttributions=Hv.prototype.ua;Hv.prototype.get=Hv.prototype.get;Hv.prototype.getKeys=Hv.prototype.P;Hv.prototype.getProperties=Hv.prototype.M;Hv.prototype.set=Hv.prototype.set;Hv.prototype.setProperties=Hv.prototype.H;Hv.prototype.unset=Hv.prototype.R;Hv.prototype.changed=Hv.prototype.s;Hv.prototype.dispatchEvent=Hv.prototype.b;Hv.prototype.getRevision=Hv.prototype.L;Hv.prototype.on=Hv.prototype.J;
Hv.prototype.once=Hv.prototype.once;Hv.prototype.un=Hv.prototype.K;Cw.prototype.getAttributions=Cw.prototype.xa;Cw.prototype.getLogo=Cw.prototype.wa;Cw.prototype.getProjection=Cw.prototype.ya;Cw.prototype.getState=Cw.prototype.V;Cw.prototype.refresh=Cw.prototype.va;Cw.prototype.setAttributions=Cw.prototype.ua;Cw.prototype.get=Cw.prototype.get;Cw.prototype.getKeys=Cw.prototype.P;Cw.prototype.getProperties=Cw.prototype.M;Cw.prototype.set=Cw.prototype.set;Cw.prototype.setProperties=Cw.prototype.H;
Cw.prototype.unset=Cw.prototype.R;Cw.prototype.changed=Cw.prototype.s;Cw.prototype.dispatchEvent=Cw.prototype.b;Cw.prototype.getRevision=Cw.prototype.L;Cw.prototype.on=Cw.prototype.J;Cw.prototype.once=Cw.prototype.once;Cw.prototype.un=Cw.prototype.K;Gw.prototype.setRenderReprojectionEdges=Gw.prototype.Ob;Gw.prototype.setTileGridForProjection=Gw.prototype.Pb;Gw.prototype.getTileLoadFunction=Gw.prototype.ob;Gw.prototype.getTileUrlFunction=Gw.prototype.qb;Gw.prototype.getUrls=Gw.prototype.rb;
Gw.prototype.setTileLoadFunction=Gw.prototype.wb;Gw.prototype.setTileUrlFunction=Gw.prototype.bb;Gw.prototype.setUrl=Gw.prototype.ib;Gw.prototype.setUrls=Gw.prototype.cb;Gw.prototype.getTileGrid=Gw.prototype.ab;Gw.prototype.refresh=Gw.prototype.va;Gw.prototype.getAttributions=Gw.prototype.xa;Gw.prototype.getLogo=Gw.prototype.wa;Gw.prototype.getProjection=Gw.prototype.ya;Gw.prototype.getState=Gw.prototype.V;Gw.prototype.setAttributions=Gw.prototype.ua;Gw.prototype.get=Gw.prototype.get;
Gw.prototype.getKeys=Gw.prototype.P;Gw.prototype.getProperties=Gw.prototype.M;Gw.prototype.set=Gw.prototype.set;Gw.prototype.setProperties=Gw.prototype.H;Gw.prototype.unset=Gw.prototype.R;Gw.prototype.changed=Gw.prototype.s;Gw.prototype.dispatchEvent=Gw.prototype.b;Gw.prototype.getRevision=Gw.prototype.L;Gw.prototype.on=Gw.prototype.J;Gw.prototype.once=Gw.prototype.once;Gw.prototype.un=Gw.prototype.K;Iw.prototype.getAttributions=Iw.prototype.xa;Iw.prototype.getLogo=Iw.prototype.wa;
Iw.prototype.getProjection=Iw.prototype.ya;Iw.prototype.getState=Iw.prototype.V;Iw.prototype.refresh=Iw.prototype.va;Iw.prototype.setAttributions=Iw.prototype.ua;Iw.prototype.get=Iw.prototype.get;Iw.prototype.getKeys=Iw.prototype.P;Iw.prototype.getProperties=Iw.prototype.M;Iw.prototype.set=Iw.prototype.set;Iw.prototype.setProperties=Iw.prototype.H;Iw.prototype.unset=Iw.prototype.R;Iw.prototype.changed=Iw.prototype.s;Iw.prototype.dispatchEvent=Iw.prototype.b;Iw.prototype.getRevision=Iw.prototype.L;
Iw.prototype.on=Iw.prototype.J;Iw.prototype.once=Iw.prototype.once;Iw.prototype.un=Iw.prototype.K;Mw.prototype.type=Mw.prototype.type;Mw.prototype.target=Mw.prototype.target;Mw.prototype.preventDefault=Mw.prototype.preventDefault;Mw.prototype.stopPropagation=Mw.prototype.stopPropagation;Pw.prototype.setRenderReprojectionEdges=Pw.prototype.Ob;Pw.prototype.setTileGridForProjection=Pw.prototype.Pb;Pw.prototype.getTileLoadFunction=Pw.prototype.ob;Pw.prototype.getTileUrlFunction=Pw.prototype.qb;
Pw.prototype.getUrls=Pw.prototype.rb;Pw.prototype.setTileLoadFunction=Pw.prototype.wb;Pw.prototype.setTileUrlFunction=Pw.prototype.bb;Pw.prototype.setUrl=Pw.prototype.ib;Pw.prototype.setUrls=Pw.prototype.cb;Pw.prototype.getTileGrid=Pw.prototype.ab;Pw.prototype.refresh=Pw.prototype.va;Pw.prototype.getAttributions=Pw.prototype.xa;Pw.prototype.getLogo=Pw.prototype.wa;Pw.prototype.getProjection=Pw.prototype.ya;Pw.prototype.getState=Pw.prototype.V;Pw.prototype.setAttributions=Pw.prototype.ua;
Pw.prototype.get=Pw.prototype.get;Pw.prototype.getKeys=Pw.prototype.P;Pw.prototype.getProperties=Pw.prototype.M;Pw.prototype.set=Pw.prototype.set;Pw.prototype.setProperties=Pw.prototype.H;Pw.prototype.unset=Pw.prototype.R;Pw.prototype.changed=Pw.prototype.s;Pw.prototype.dispatchEvent=Pw.prototype.b;Pw.prototype.getRevision=Pw.prototype.L;Pw.prototype.on=Pw.prototype.J;Pw.prototype.once=Pw.prototype.once;Pw.prototype.un=Pw.prototype.K;lw.prototype.type=lw.prototype.type;lw.prototype.target=lw.prototype.target;
lw.prototype.preventDefault=lw.prototype.preventDefault;lw.prototype.stopPropagation=lw.prototype.stopPropagation;Tw.prototype.setRenderReprojectionEdges=Tw.prototype.Ob;Tw.prototype.setTileGridForProjection=Tw.prototype.Pb;Tw.prototype.getTileLoadFunction=Tw.prototype.ob;Tw.prototype.getTileUrlFunction=Tw.prototype.qb;Tw.prototype.getUrls=Tw.prototype.rb;Tw.prototype.setTileLoadFunction=Tw.prototype.wb;Tw.prototype.setTileUrlFunction=Tw.prototype.bb;Tw.prototype.setUrl=Tw.prototype.ib;
Tw.prototype.setUrls=Tw.prototype.cb;Tw.prototype.getTileGrid=Tw.prototype.ab;Tw.prototype.refresh=Tw.prototype.va;Tw.prototype.getAttributions=Tw.prototype.xa;Tw.prototype.getLogo=Tw.prototype.wa;Tw.prototype.getProjection=Tw.prototype.ya;Tw.prototype.getState=Tw.prototype.V;Tw.prototype.setAttributions=Tw.prototype.ua;Tw.prototype.get=Tw.prototype.get;Tw.prototype.getKeys=Tw.prototype.P;Tw.prototype.getProperties=Tw.prototype.M;Tw.prototype.set=Tw.prototype.set;Tw.prototype.setProperties=Tw.prototype.H;
Tw.prototype.unset=Tw.prototype.R;Tw.prototype.changed=Tw.prototype.s;Tw.prototype.dispatchEvent=Tw.prototype.b;Tw.prototype.getRevision=Tw.prototype.L;Tw.prototype.on=Tw.prototype.J;Tw.prototype.once=Tw.prototype.once;Tw.prototype.un=Tw.prototype.K;Vw.prototype.getTileGrid=Vw.prototype.ab;Vw.prototype.refresh=Vw.prototype.va;Vw.prototype.getAttributions=Vw.prototype.xa;Vw.prototype.getLogo=Vw.prototype.wa;Vw.prototype.getProjection=Vw.prototype.ya;Vw.prototype.getState=Vw.prototype.V;
Vw.prototype.setAttributions=Vw.prototype.ua;Vw.prototype.get=Vw.prototype.get;Vw.prototype.getKeys=Vw.prototype.P;Vw.prototype.getProperties=Vw.prototype.M;Vw.prototype.set=Vw.prototype.set;Vw.prototype.setProperties=Vw.prototype.H;Vw.prototype.unset=Vw.prototype.R;Vw.prototype.changed=Vw.prototype.s;Vw.prototype.dispatchEvent=Vw.prototype.b;Vw.prototype.getRevision=Vw.prototype.L;Vw.prototype.on=Vw.prototype.J;Vw.prototype.once=Vw.prototype.once;Vw.prototype.un=Vw.prototype.K;
Xw.prototype.setRenderReprojectionEdges=Xw.prototype.Ob;Xw.prototype.setTileGridForProjection=Xw.prototype.Pb;Xw.prototype.getTileLoadFunction=Xw.prototype.ob;Xw.prototype.getTileUrlFunction=Xw.prototype.qb;Xw.prototype.getUrls=Xw.prototype.rb;Xw.prototype.setTileLoadFunction=Xw.prototype.wb;Xw.prototype.setTileUrlFunction=Xw.prototype.bb;Xw.prototype.setUrl=Xw.prototype.ib;Xw.prototype.setUrls=Xw.prototype.cb;Xw.prototype.getTileGrid=Xw.prototype.ab;Xw.prototype.refresh=Xw.prototype.va;
Xw.prototype.getAttributions=Xw.prototype.xa;Xw.prototype.getLogo=Xw.prototype.wa;Xw.prototype.getProjection=Xw.prototype.ya;Xw.prototype.getState=Xw.prototype.V;Xw.prototype.setAttributions=Xw.prototype.ua;Xw.prototype.get=Xw.prototype.get;Xw.prototype.getKeys=Xw.prototype.P;Xw.prototype.getProperties=Xw.prototype.M;Xw.prototype.set=Xw.prototype.set;Xw.prototype.setProperties=Xw.prototype.H;Xw.prototype.unset=Xw.prototype.R;Xw.prototype.changed=Xw.prototype.s;Xw.prototype.dispatchEvent=Xw.prototype.b;
Xw.prototype.getRevision=Xw.prototype.L;Xw.prototype.on=Xw.prototype.J;Xw.prototype.once=Xw.prototype.once;Xw.prototype.un=Xw.prototype.K;Yw.prototype.getTileGrid=Yw.prototype.ab;Yw.prototype.refresh=Yw.prototype.va;Yw.prototype.getAttributions=Yw.prototype.xa;Yw.prototype.getLogo=Yw.prototype.wa;Yw.prototype.getProjection=Yw.prototype.ya;Yw.prototype.getState=Yw.prototype.V;Yw.prototype.setAttributions=Yw.prototype.ua;Yw.prototype.get=Yw.prototype.get;Yw.prototype.getKeys=Yw.prototype.P;
Yw.prototype.getProperties=Yw.prototype.M;Yw.prototype.set=Yw.prototype.set;Yw.prototype.setProperties=Yw.prototype.H;Yw.prototype.unset=Yw.prototype.R;Yw.prototype.changed=Yw.prototype.s;Yw.prototype.dispatchEvent=Yw.prototype.b;Yw.prototype.getRevision=Yw.prototype.L;Yw.prototype.on=Yw.prototype.J;Yw.prototype.once=Yw.prototype.once;Yw.prototype.un=Yw.prototype.K;bx.prototype.setRenderReprojectionEdges=bx.prototype.Ob;bx.prototype.setTileGridForProjection=bx.prototype.Pb;
bx.prototype.getTileLoadFunction=bx.prototype.ob;bx.prototype.getTileUrlFunction=bx.prototype.qb;bx.prototype.getUrls=bx.prototype.rb;bx.prototype.setTileLoadFunction=bx.prototype.wb;bx.prototype.setTileUrlFunction=bx.prototype.bb;bx.prototype.setUrl=bx.prototype.ib;bx.prototype.setUrls=bx.prototype.cb;bx.prototype.getTileGrid=bx.prototype.ab;bx.prototype.refresh=bx.prototype.va;bx.prototype.getAttributions=bx.prototype.xa;bx.prototype.getLogo=bx.prototype.wa;bx.prototype.getProjection=bx.prototype.ya;
bx.prototype.getState=bx.prototype.V;bx.prototype.setAttributions=bx.prototype.ua;bx.prototype.get=bx.prototype.get;bx.prototype.getKeys=bx.prototype.P;bx.prototype.getProperties=bx.prototype.M;bx.prototype.set=bx.prototype.set;bx.prototype.setProperties=bx.prototype.H;bx.prototype.unset=bx.prototype.R;bx.prototype.changed=bx.prototype.s;bx.prototype.dispatchEvent=bx.prototype.b;bx.prototype.getRevision=bx.prototype.L;bx.prototype.on=bx.prototype.J;bx.prototype.once=bx.prototype.once;
bx.prototype.un=bx.prototype.K;$t.prototype.type=$t.prototype.type;$t.prototype.target=$t.prototype.target;$t.prototype.preventDefault=$t.prototype.preventDefault;$t.prototype.stopPropagation=$t.prototype.stopPropagation;ix.prototype.getTileLoadFunction=ix.prototype.ob;ix.prototype.getTileUrlFunction=ix.prototype.qb;ix.prototype.getUrls=ix.prototype.rb;ix.prototype.setTileLoadFunction=ix.prototype.wb;ix.prototype.setTileUrlFunction=ix.prototype.bb;ix.prototype.setUrl=ix.prototype.ib;
ix.prototype.setUrls=ix.prototype.cb;ix.prototype.getTileGrid=ix.prototype.ab;ix.prototype.refresh=ix.prototype.va;ix.prototype.getAttributions=ix.prototype.xa;ix.prototype.getLogo=ix.prototype.wa;ix.prototype.getProjection=ix.prototype.ya;ix.prototype.getState=ix.prototype.V;ix.prototype.setAttributions=ix.prototype.ua;ix.prototype.get=ix.prototype.get;ix.prototype.getKeys=ix.prototype.P;ix.prototype.getProperties=ix.prototype.M;ix.prototype.set=ix.prototype.set;ix.prototype.setProperties=ix.prototype.H;
ix.prototype.unset=ix.prototype.R;ix.prototype.changed=ix.prototype.s;ix.prototype.dispatchEvent=ix.prototype.b;ix.prototype.getRevision=ix.prototype.L;ix.prototype.on=ix.prototype.J;ix.prototype.once=ix.prototype.once;ix.prototype.un=ix.prototype.K;Y.prototype.setRenderReprojectionEdges=Y.prototype.Ob;Y.prototype.setTileGridForProjection=Y.prototype.Pb;Y.prototype.getTileLoadFunction=Y.prototype.ob;Y.prototype.getTileUrlFunction=Y.prototype.qb;Y.prototype.getUrls=Y.prototype.rb;
Y.prototype.setTileLoadFunction=Y.prototype.wb;Y.prototype.setTileUrlFunction=Y.prototype.bb;Y.prototype.setUrl=Y.prototype.ib;Y.prototype.setUrls=Y.prototype.cb;Y.prototype.getTileGrid=Y.prototype.ab;Y.prototype.refresh=Y.prototype.va;Y.prototype.getAttributions=Y.prototype.xa;Y.prototype.getLogo=Y.prototype.wa;Y.prototype.getProjection=Y.prototype.ya;Y.prototype.getState=Y.prototype.V;Y.prototype.setAttributions=Y.prototype.ua;Y.prototype.get=Y.prototype.get;Y.prototype.getKeys=Y.prototype.P;
Y.prototype.getProperties=Y.prototype.M;Y.prototype.set=Y.prototype.set;Y.prototype.setProperties=Y.prototype.H;Y.prototype.unset=Y.prototype.R;Y.prototype.changed=Y.prototype.s;Y.prototype.dispatchEvent=Y.prototype.b;Y.prototype.getRevision=Y.prototype.L;Y.prototype.on=Y.prototype.J;Y.prototype.once=Y.prototype.once;Y.prototype.un=Y.prototype.K;mx.prototype.setRenderReprojectionEdges=mx.prototype.Ob;mx.prototype.setTileGridForProjection=mx.prototype.Pb;mx.prototype.getTileLoadFunction=mx.prototype.ob;
mx.prototype.getTileUrlFunction=mx.prototype.qb;mx.prototype.getUrls=mx.prototype.rb;mx.prototype.setTileLoadFunction=mx.prototype.wb;mx.prototype.setTileUrlFunction=mx.prototype.bb;mx.prototype.setUrl=mx.prototype.ib;mx.prototype.setUrls=mx.prototype.cb;mx.prototype.getTileGrid=mx.prototype.ab;mx.prototype.refresh=mx.prototype.va;mx.prototype.getAttributions=mx.prototype.xa;mx.prototype.getLogo=mx.prototype.wa;mx.prototype.getProjection=mx.prototype.ya;mx.prototype.getState=mx.prototype.V;
mx.prototype.setAttributions=mx.prototype.ua;mx.prototype.get=mx.prototype.get;mx.prototype.getKeys=mx.prototype.P;mx.prototype.getProperties=mx.prototype.M;mx.prototype.set=mx.prototype.set;mx.prototype.setProperties=mx.prototype.H;mx.prototype.unset=mx.prototype.R;mx.prototype.changed=mx.prototype.s;mx.prototype.dispatchEvent=mx.prototype.b;mx.prototype.getRevision=mx.prototype.L;mx.prototype.on=mx.prototype.J;mx.prototype.once=mx.prototype.once;mx.prototype.un=mx.prototype.K;
aw.prototype.getTileCoord=aw.prototype.i;aw.prototype.load=aw.prototype.load;qt.prototype.changed=qt.prototype.s;qt.prototype.dispatchEvent=qt.prototype.b;qt.prototype.getRevision=qt.prototype.L;qt.prototype.on=qt.prototype.J;qt.prototype.once=qt.prototype.once;qt.prototype.un=qt.prototype.K;Ot.prototype.changed=Ot.prototype.s;Ot.prototype.dispatchEvent=Ot.prototype.b;Ot.prototype.getRevision=Ot.prototype.L;Ot.prototype.on=Ot.prototype.J;Ot.prototype.once=Ot.prototype.once;Ot.prototype.un=Ot.prototype.K;
Jv.prototype.changed=Jv.prototype.s;Jv.prototype.dispatchEvent=Jv.prototype.b;Jv.prototype.getRevision=Jv.prototype.L;Jv.prototype.on=Jv.prototype.J;Jv.prototype.once=Jv.prototype.once;Jv.prototype.un=Jv.prototype.K;Uv.prototype.changed=Uv.prototype.s;Uv.prototype.dispatchEvent=Uv.prototype.b;Uv.prototype.getRevision=Uv.prototype.L;Uv.prototype.on=Uv.prototype.J;Uv.prototype.once=Uv.prototype.once;Uv.prototype.un=Uv.prototype.K;Rt.prototype.changed=Rt.prototype.s;Rt.prototype.dispatchEvent=Rt.prototype.b;
Rt.prototype.getRevision=Rt.prototype.L;Rt.prototype.on=Rt.prototype.J;Rt.prototype.once=Rt.prototype.once;Rt.prototype.un=Rt.prototype.K;zt.prototype.changed=zt.prototype.s;zt.prototype.dispatchEvent=zt.prototype.b;zt.prototype.getRevision=zt.prototype.L;zt.prototype.on=zt.prototype.J;zt.prototype.once=zt.prototype.once;zt.prototype.un=zt.prototype.K;qv.prototype.changed=qv.prototype.s;qv.prototype.dispatchEvent=qv.prototype.b;qv.prototype.getRevision=qv.prototype.L;qv.prototype.on=qv.prototype.J;
qv.prototype.once=qv.prototype.once;qv.prototype.un=qv.prototype.K;rv.prototype.changed=rv.prototype.s;rv.prototype.dispatchEvent=rv.prototype.b;rv.prototype.getRevision=rv.prototype.L;rv.prototype.on=rv.prototype.J;rv.prototype.once=rv.prototype.once;rv.prototype.un=rv.prototype.K;Nv.prototype.changed=Nv.prototype.s;Nv.prototype.dispatchEvent=Nv.prototype.b;Nv.prototype.getRevision=Nv.prototype.L;Nv.prototype.on=Nv.prototype.J;Nv.prototype.once=Nv.prototype.once;Nv.prototype.un=Nv.prototype.K;
Ht.prototype.changed=Ht.prototype.s;Ht.prototype.dispatchEvent=Ht.prototype.b;Ht.prototype.getRevision=Ht.prototype.L;Ht.prototype.on=Ht.prototype.J;Ht.prototype.once=Ht.prototype.once;Ht.prototype.un=Ht.prototype.K;Wv.prototype.changed=Wv.prototype.s;Wv.prototype.dispatchEvent=Wv.prototype.b;Wv.prototype.getRevision=Wv.prototype.L;Wv.prototype.on=Wv.prototype.J;Wv.prototype.once=Wv.prototype.once;Wv.prototype.un=Wv.prototype.K;Oh.prototype.type=Oh.prototype.type;Oh.prototype.target=Oh.prototype.target;
Oh.prototype.preventDefault=Oh.prototype.preventDefault;Oh.prototype.stopPropagation=Oh.prototype.stopPropagation;oe.prototype.type=oe.prototype.type;oe.prototype.target=oe.prototype.target;oe.prototype.preventDefault=oe.prototype.preventDefault;oe.prototype.stopPropagation=oe.prototype.stopPropagation;ph.prototype.get=ph.prototype.get;ph.prototype.getKeys=ph.prototype.P;ph.prototype.getProperties=ph.prototype.M;ph.prototype.set=ph.prototype.set;ph.prototype.setProperties=ph.prototype.H;
ph.prototype.unset=ph.prototype.R;ph.prototype.changed=ph.prototype.s;ph.prototype.dispatchEvent=ph.prototype.b;ph.prototype.getRevision=ph.prototype.L;ph.prototype.on=ph.prototype.J;ph.prototype.once=ph.prototype.once;ph.prototype.un=ph.prototype.K;rh.prototype.getExtent=rh.prototype.D;rh.prototype.getMaxResolution=rh.prototype.hc;rh.prototype.getMinResolution=rh.prototype.ic;rh.prototype.getOpacity=rh.prototype.jc;rh.prototype.getVisible=rh.prototype.Lb;rh.prototype.getZIndex=rh.prototype.Aa;
rh.prototype.setExtent=rh.prototype.xc;rh.prototype.setMaxResolution=rh.prototype.Cc;rh.prototype.setMinResolution=rh.prototype.Dc;rh.prototype.setOpacity=rh.prototype.yc;rh.prototype.setVisible=rh.prototype.zc;rh.prototype.setZIndex=rh.prototype.Xb;rh.prototype.get=rh.prototype.get;rh.prototype.getKeys=rh.prototype.P;rh.prototype.getProperties=rh.prototype.M;rh.prototype.set=rh.prototype.set;rh.prototype.setProperties=rh.prototype.H;rh.prototype.unset=rh.prototype.R;rh.prototype.changed=rh.prototype.s;
rh.prototype.dispatchEvent=rh.prototype.b;rh.prototype.getRevision=rh.prototype.L;rh.prototype.on=rh.prototype.J;rh.prototype.once=rh.prototype.once;rh.prototype.un=rh.prototype.K;th.prototype.getExtent=th.prototype.D;th.prototype.getMaxResolution=th.prototype.hc;th.prototype.getMinResolution=th.prototype.ic;th.prototype.getOpacity=th.prototype.jc;th.prototype.getVisible=th.prototype.Lb;th.prototype.getZIndex=th.prototype.Aa;th.prototype.setExtent=th.prototype.xc;th.prototype.setMaxResolution=th.prototype.Cc;
th.prototype.setMinResolution=th.prototype.Dc;th.prototype.setOpacity=th.prototype.yc;th.prototype.setVisible=th.prototype.zc;th.prototype.setZIndex=th.prototype.Xb;th.prototype.get=th.prototype.get;th.prototype.getKeys=th.prototype.P;th.prototype.getProperties=th.prototype.M;th.prototype.set=th.prototype.set;th.prototype.setProperties=th.prototype.H;th.prototype.unset=th.prototype.R;th.prototype.changed=th.prototype.s;th.prototype.dispatchEvent=th.prototype.b;th.prototype.getRevision=th.prototype.L;
th.prototype.on=th.prototype.J;th.prototype.once=th.prototype.once;th.prototype.un=th.prototype.K;S.prototype.setMap=S.prototype.setMap;S.prototype.setSource=S.prototype.ad;S.prototype.getExtent=S.prototype.D;S.prototype.getMaxResolution=S.prototype.hc;S.prototype.getMinResolution=S.prototype.ic;S.prototype.getOpacity=S.prototype.jc;S.prototype.getVisible=S.prototype.Lb;S.prototype.getZIndex=S.prototype.Aa;S.prototype.setExtent=S.prototype.xc;S.prototype.setMaxResolution=S.prototype.Cc;
S.prototype.setMinResolution=S.prototype.Dc;S.prototype.setOpacity=S.prototype.yc;S.prototype.setVisible=S.prototype.zc;S.prototype.setZIndex=S.prototype.Xb;S.prototype.get=S.prototype.get;S.prototype.getKeys=S.prototype.P;S.prototype.getProperties=S.prototype.M;S.prototype.set=S.prototype.set;S.prototype.setProperties=S.prototype.H;S.prototype.unset=S.prototype.R;S.prototype.changed=S.prototype.s;S.prototype.dispatchEvent=S.prototype.b;S.prototype.getRevision=S.prototype.L;S.prototype.on=S.prototype.J;
S.prototype.once=S.prototype.once;S.prototype.un=S.prototype.K;U.prototype.getSource=U.prototype.ka;U.prototype.getStyle=U.prototype.C;U.prototype.getStyleFunction=U.prototype.G;U.prototype.setStyle=U.prototype.f;U.prototype.setMap=U.prototype.setMap;U.prototype.setSource=U.prototype.ad;U.prototype.getExtent=U.prototype.D;U.prototype.getMaxResolution=U.prototype.hc;U.prototype.getMinResolution=U.prototype.ic;U.prototype.getOpacity=U.prototype.jc;U.prototype.getVisible=U.prototype.Lb;
U.prototype.getZIndex=U.prototype.Aa;U.prototype.setExtent=U.prototype.xc;U.prototype.setMaxResolution=U.prototype.Cc;U.prototype.setMinResolution=U.prototype.Dc;U.prototype.setOpacity=U.prototype.yc;U.prototype.setVisible=U.prototype.zc;U.prototype.setZIndex=U.prototype.Xb;U.prototype.get=U.prototype.get;U.prototype.getKeys=U.prototype.P;U.prototype.getProperties=U.prototype.M;U.prototype.set=U.prototype.set;U.prototype.setProperties=U.prototype.H;U.prototype.unset=U.prototype.R;
U.prototype.changed=U.prototype.s;U.prototype.dispatchEvent=U.prototype.b;U.prototype.getRevision=U.prototype.L;U.prototype.on=U.prototype.J;U.prototype.once=U.prototype.once;U.prototype.un=U.prototype.K;Mv.prototype.setMap=Mv.prototype.setMap;Mv.prototype.setSource=Mv.prototype.ad;Mv.prototype.getExtent=Mv.prototype.D;Mv.prototype.getMaxResolution=Mv.prototype.hc;Mv.prototype.getMinResolution=Mv.prototype.ic;Mv.prototype.getOpacity=Mv.prototype.jc;Mv.prototype.getVisible=Mv.prototype.Lb;
Mv.prototype.getZIndex=Mv.prototype.Aa;Mv.prototype.setExtent=Mv.prototype.xc;Mv.prototype.setMaxResolution=Mv.prototype.Cc;Mv.prototype.setMinResolution=Mv.prototype.Dc;Mv.prototype.setOpacity=Mv.prototype.yc;Mv.prototype.setVisible=Mv.prototype.zc;Mv.prototype.setZIndex=Mv.prototype.Xb;Mv.prototype.get=Mv.prototype.get;Mv.prototype.getKeys=Mv.prototype.P;Mv.prototype.getProperties=Mv.prototype.M;Mv.prototype.set=Mv.prototype.set;Mv.prototype.setProperties=Mv.prototype.H;Mv.prototype.unset=Mv.prototype.R;
Mv.prototype.changed=Mv.prototype.s;Mv.prototype.dispatchEvent=Mv.prototype.b;Mv.prototype.getRevision=Mv.prototype.L;Mv.prototype.on=Mv.prototype.J;Mv.prototype.once=Mv.prototype.once;Mv.prototype.un=Mv.prototype.K;Vv.prototype.setMap=Vv.prototype.setMap;Vv.prototype.setSource=Vv.prototype.ad;Vv.prototype.getExtent=Vv.prototype.D;Vv.prototype.getMaxResolution=Vv.prototype.hc;Vv.prototype.getMinResolution=Vv.prototype.ic;Vv.prototype.getOpacity=Vv.prototype.jc;Vv.prototype.getVisible=Vv.prototype.Lb;
Vv.prototype.getZIndex=Vv.prototype.Aa;Vv.prototype.setExtent=Vv.prototype.xc;Vv.prototype.setMaxResolution=Vv.prototype.Cc;Vv.prototype.setMinResolution=Vv.prototype.Dc;Vv.prototype.setOpacity=Vv.prototype.yc;Vv.prototype.setVisible=Vv.prototype.zc;Vv.prototype.setZIndex=Vv.prototype.Xb;Vv.prototype.get=Vv.prototype.get;Vv.prototype.getKeys=Vv.prototype.P;Vv.prototype.getProperties=Vv.prototype.M;Vv.prototype.set=Vv.prototype.set;Vv.prototype.setProperties=Vv.prototype.H;Vv.prototype.unset=Vv.prototype.R;
Vv.prototype.changed=Vv.prototype.s;Vv.prototype.dispatchEvent=Vv.prototype.b;Vv.prototype.getRevision=Vv.prototype.L;Vv.prototype.on=Vv.prototype.J;Vv.prototype.once=Vv.prototype.once;Vv.prototype.un=Vv.prototype.K;V.prototype.getSource=V.prototype.ka;V.prototype.getStyle=V.prototype.C;V.prototype.getStyleFunction=V.prototype.G;V.prototype.setStyle=V.prototype.f;V.prototype.setMap=V.prototype.setMap;V.prototype.setSource=V.prototype.ad;V.prototype.getExtent=V.prototype.D;
V.prototype.getMaxResolution=V.prototype.hc;V.prototype.getMinResolution=V.prototype.ic;V.prototype.getOpacity=V.prototype.jc;V.prototype.getVisible=V.prototype.Lb;V.prototype.getZIndex=V.prototype.Aa;V.prototype.setExtent=V.prototype.xc;V.prototype.setMaxResolution=V.prototype.Cc;V.prototype.setMinResolution=V.prototype.Dc;V.prototype.setOpacity=V.prototype.yc;V.prototype.setVisible=V.prototype.zc;V.prototype.setZIndex=V.prototype.Xb;V.prototype.get=V.prototype.get;V.prototype.getKeys=V.prototype.P;
V.prototype.getProperties=V.prototype.M;V.prototype.set=V.prototype.set;V.prototype.setProperties=V.prototype.H;V.prototype.unset=V.prototype.R;V.prototype.changed=V.prototype.s;V.prototype.dispatchEvent=V.prototype.b;V.prototype.getRevision=V.prototype.L;V.prototype.on=V.prototype.J;V.prototype.once=V.prototype.once;V.prototype.un=V.prototype.K;kg.prototype.get=kg.prototype.get;kg.prototype.getKeys=kg.prototype.P;kg.prototype.getProperties=kg.prototype.M;kg.prototype.set=kg.prototype.set;
kg.prototype.setProperties=kg.prototype.H;kg.prototype.unset=kg.prototype.R;kg.prototype.changed=kg.prototype.s;kg.prototype.dispatchEvent=kg.prototype.b;kg.prototype.getRevision=kg.prototype.L;kg.prototype.on=kg.prototype.J;kg.prototype.once=kg.prototype.once;kg.prototype.un=kg.prototype.K;og.prototype.getActive=og.prototype.c;og.prototype.getMap=og.prototype.i;og.prototype.setActive=og.prototype.Ia;og.prototype.get=og.prototype.get;og.prototype.getKeys=og.prototype.P;
og.prototype.getProperties=og.prototype.M;og.prototype.set=og.prototype.set;og.prototype.setProperties=og.prototype.H;og.prototype.unset=og.prototype.R;og.prototype.changed=og.prototype.s;og.prototype.dispatchEvent=og.prototype.b;og.prototype.getRevision=og.prototype.L;og.prototype.on=og.prototype.J;og.prototype.once=og.prototype.once;og.prototype.un=og.prototype.K;Ms.prototype.getActive=Ms.prototype.c;Ms.prototype.getMap=Ms.prototype.i;Ms.prototype.setActive=Ms.prototype.Ia;Ms.prototype.get=Ms.prototype.get;
Ms.prototype.getKeys=Ms.prototype.P;Ms.prototype.getProperties=Ms.prototype.M;Ms.prototype.set=Ms.prototype.set;Ms.prototype.setProperties=Ms.prototype.H;Ms.prototype.unset=Ms.prototype.R;Ms.prototype.changed=Ms.prototype.s;Ms.prototype.dispatchEvent=Ms.prototype.b;Ms.prototype.getRevision=Ms.prototype.L;Ms.prototype.on=Ms.prototype.J;Ms.prototype.once=Ms.prototype.once;Ms.prototype.un=Ms.prototype.K;Ps.prototype.type=Ps.prototype.type;Ps.prototype.target=Ps.prototype.target;
Ps.prototype.preventDefault=Ps.prototype.preventDefault;Ps.prototype.stopPropagation=Ps.prototype.stopPropagation;Ag.prototype.getActive=Ag.prototype.c;Ag.prototype.getMap=Ag.prototype.i;Ag.prototype.setActive=Ag.prototype.Ia;Ag.prototype.get=Ag.prototype.get;Ag.prototype.getKeys=Ag.prototype.P;Ag.prototype.getProperties=Ag.prototype.M;Ag.prototype.set=Ag.prototype.set;Ag.prototype.setProperties=Ag.prototype.H;Ag.prototype.unset=Ag.prototype.R;Ag.prototype.changed=Ag.prototype.s;
Ag.prototype.dispatchEvent=Ag.prototype.b;Ag.prototype.getRevision=Ag.prototype.L;Ag.prototype.on=Ag.prototype.J;Ag.prototype.once=Ag.prototype.once;Ag.prototype.un=Ag.prototype.K;Og.prototype.getActive=Og.prototype.c;Og.prototype.getMap=Og.prototype.i;Og.prototype.setActive=Og.prototype.Ia;Og.prototype.get=Og.prototype.get;Og.prototype.getKeys=Og.prototype.P;Og.prototype.getProperties=Og.prototype.M;Og.prototype.set=Og.prototype.set;Og.prototype.setProperties=Og.prototype.H;Og.prototype.unset=Og.prototype.R;
Og.prototype.changed=Og.prototype.s;Og.prototype.dispatchEvent=Og.prototype.b;Og.prototype.getRevision=Og.prototype.L;Og.prototype.on=Og.prototype.J;Og.prototype.once=Og.prototype.once;Og.prototype.un=Og.prototype.K;Tg.prototype.type=Tg.prototype.type;Tg.prototype.target=Tg.prototype.target;Tg.prototype.preventDefault=Tg.prototype.preventDefault;Tg.prototype.stopPropagation=Tg.prototype.stopPropagation;Dg.prototype.getActive=Dg.prototype.c;Dg.prototype.getMap=Dg.prototype.i;
Dg.prototype.setActive=Dg.prototype.Ia;Dg.prototype.get=Dg.prototype.get;Dg.prototype.getKeys=Dg.prototype.P;Dg.prototype.getProperties=Dg.prototype.M;Dg.prototype.set=Dg.prototype.set;Dg.prototype.setProperties=Dg.prototype.H;Dg.prototype.unset=Dg.prototype.R;Dg.prototype.changed=Dg.prototype.s;Dg.prototype.dispatchEvent=Dg.prototype.b;Dg.prototype.getRevision=Dg.prototype.L;Dg.prototype.on=Dg.prototype.J;Dg.prototype.once=Dg.prototype.once;Dg.prototype.un=Dg.prototype.K;Hg.prototype.getActive=Hg.prototype.c;
Hg.prototype.getMap=Hg.prototype.i;Hg.prototype.setActive=Hg.prototype.Ia;Hg.prototype.get=Hg.prototype.get;Hg.prototype.getKeys=Hg.prototype.P;Hg.prototype.getProperties=Hg.prototype.M;Hg.prototype.set=Hg.prototype.set;Hg.prototype.setProperties=Hg.prototype.H;Hg.prototype.unset=Hg.prototype.R;Hg.prototype.changed=Hg.prototype.s;Hg.prototype.dispatchEvent=Hg.prototype.b;Hg.prototype.getRevision=Hg.prototype.L;Hg.prototype.on=Hg.prototype.J;Hg.prototype.once=Hg.prototype.once;Hg.prototype.un=Hg.prototype.K;
Rs.prototype.getActive=Rs.prototype.c;Rs.prototype.getMap=Rs.prototype.i;Rs.prototype.setActive=Rs.prototype.Ia;Rs.prototype.get=Rs.prototype.get;Rs.prototype.getKeys=Rs.prototype.P;Rs.prototype.getProperties=Rs.prototype.M;Rs.prototype.set=Rs.prototype.set;Rs.prototype.setProperties=Rs.prototype.H;Rs.prototype.unset=Rs.prototype.R;Rs.prototype.changed=Rs.prototype.s;Rs.prototype.dispatchEvent=Rs.prototype.b;Rs.prototype.getRevision=Rs.prototype.L;Rs.prototype.on=Rs.prototype.J;
Rs.prototype.once=Rs.prototype.once;Rs.prototype.un=Rs.prototype.K;Xg.prototype.getGeometry=Xg.prototype.U;Xg.prototype.getActive=Xg.prototype.c;Xg.prototype.getMap=Xg.prototype.i;Xg.prototype.setActive=Xg.prototype.Ia;Xg.prototype.get=Xg.prototype.get;Xg.prototype.getKeys=Xg.prototype.P;Xg.prototype.getProperties=Xg.prototype.M;Xg.prototype.set=Xg.prototype.set;Xg.prototype.setProperties=Xg.prototype.H;Xg.prototype.unset=Xg.prototype.R;Xg.prototype.changed=Xg.prototype.s;
Xg.prototype.dispatchEvent=Xg.prototype.b;Xg.prototype.getRevision=Xg.prototype.L;Xg.prototype.on=Xg.prototype.J;Xg.prototype.once=Xg.prototype.once;Xg.prototype.un=Xg.prototype.K;cu.prototype.getActive=cu.prototype.c;cu.prototype.getMap=cu.prototype.i;cu.prototype.setActive=cu.prototype.Ia;cu.prototype.get=cu.prototype.get;cu.prototype.getKeys=cu.prototype.P;cu.prototype.getProperties=cu.prototype.M;cu.prototype.set=cu.prototype.set;cu.prototype.setProperties=cu.prototype.H;cu.prototype.unset=cu.prototype.R;
cu.prototype.changed=cu.prototype.s;cu.prototype.dispatchEvent=cu.prototype.b;cu.prototype.getRevision=cu.prototype.L;cu.prototype.on=cu.prototype.J;cu.prototype.once=cu.prototype.once;cu.prototype.un=cu.prototype.K;su.prototype.type=su.prototype.type;su.prototype.target=su.prototype.target;su.prototype.preventDefault=su.prototype.preventDefault;su.prototype.stopPropagation=su.prototype.stopPropagation;tu.prototype.getActive=tu.prototype.c;tu.prototype.getMap=tu.prototype.i;
tu.prototype.setActive=tu.prototype.Ia;tu.prototype.get=tu.prototype.get;tu.prototype.getKeys=tu.prototype.P;tu.prototype.getProperties=tu.prototype.M;tu.prototype.set=tu.prototype.set;tu.prototype.setProperties=tu.prototype.H;tu.prototype.unset=tu.prototype.R;tu.prototype.changed=tu.prototype.s;tu.prototype.dispatchEvent=tu.prototype.b;tu.prototype.getRevision=tu.prototype.L;tu.prototype.on=tu.prototype.J;tu.prototype.once=tu.prototype.once;tu.prototype.un=tu.prototype.K;Eu.prototype.type=Eu.prototype.type;
Eu.prototype.target=Eu.prototype.target;Eu.prototype.preventDefault=Eu.prototype.preventDefault;Eu.prototype.stopPropagation=Eu.prototype.stopPropagation;Yg.prototype.getActive=Yg.prototype.c;Yg.prototype.getMap=Yg.prototype.i;Yg.prototype.setActive=Yg.prototype.Ia;Yg.prototype.get=Yg.prototype.get;Yg.prototype.getKeys=Yg.prototype.P;Yg.prototype.getProperties=Yg.prototype.M;Yg.prototype.set=Yg.prototype.set;Yg.prototype.setProperties=Yg.prototype.H;Yg.prototype.unset=Yg.prototype.R;
Yg.prototype.changed=Yg.prototype.s;Yg.prototype.dispatchEvent=Yg.prototype.b;Yg.prototype.getRevision=Yg.prototype.L;Yg.prototype.on=Yg.prototype.J;Yg.prototype.once=Yg.prototype.once;Yg.prototype.un=Yg.prototype.K;$g.prototype.getActive=$g.prototype.c;$g.prototype.getMap=$g.prototype.i;$g.prototype.setActive=$g.prototype.Ia;$g.prototype.get=$g.prototype.get;$g.prototype.getKeys=$g.prototype.P;$g.prototype.getProperties=$g.prototype.M;$g.prototype.set=$g.prototype.set;
$g.prototype.setProperties=$g.prototype.H;$g.prototype.unset=$g.prototype.R;$g.prototype.changed=$g.prototype.s;$g.prototype.dispatchEvent=$g.prototype.b;$g.prototype.getRevision=$g.prototype.L;$g.prototype.on=$g.prototype.J;$g.prototype.once=$g.prototype.once;$g.prototype.un=$g.prototype.K;Gu.prototype.getActive=Gu.prototype.c;Gu.prototype.getMap=Gu.prototype.i;Gu.prototype.setActive=Gu.prototype.Ia;Gu.prototype.get=Gu.prototype.get;Gu.prototype.getKeys=Gu.prototype.P;
Gu.prototype.getProperties=Gu.prototype.M;Gu.prototype.set=Gu.prototype.set;Gu.prototype.setProperties=Gu.prototype.H;Gu.prototype.unset=Gu.prototype.R;Gu.prototype.changed=Gu.prototype.s;Gu.prototype.dispatchEvent=Gu.prototype.b;Gu.prototype.getRevision=Gu.prototype.L;Gu.prototype.on=Gu.prototype.J;Gu.prototype.once=Gu.prototype.once;Gu.prototype.un=Gu.prototype.K;Ou.prototype.type=Ou.prototype.type;Ou.prototype.target=Ou.prototype.target;Ou.prototype.preventDefault=Ou.prototype.preventDefault;
Ou.prototype.stopPropagation=Ou.prototype.stopPropagation;bh.prototype.getActive=bh.prototype.c;bh.prototype.getMap=bh.prototype.i;bh.prototype.setActive=bh.prototype.Ia;bh.prototype.get=bh.prototype.get;bh.prototype.getKeys=bh.prototype.P;bh.prototype.getProperties=bh.prototype.M;bh.prototype.set=bh.prototype.set;bh.prototype.setProperties=bh.prototype.H;bh.prototype.unset=bh.prototype.R;bh.prototype.changed=bh.prototype.s;bh.prototype.dispatchEvent=bh.prototype.b;bh.prototype.getRevision=bh.prototype.L;
bh.prototype.on=bh.prototype.J;bh.prototype.once=bh.prototype.once;bh.prototype.un=bh.prototype.K;fh.prototype.getActive=fh.prototype.c;fh.prototype.getMap=fh.prototype.i;fh.prototype.setActive=fh.prototype.Ia;fh.prototype.get=fh.prototype.get;fh.prototype.getKeys=fh.prototype.P;fh.prototype.getProperties=fh.prototype.M;fh.prototype.set=fh.prototype.set;fh.prototype.setProperties=fh.prototype.H;fh.prototype.unset=fh.prototype.R;fh.prototype.changed=fh.prototype.s;fh.prototype.dispatchEvent=fh.prototype.b;
fh.prototype.getRevision=fh.prototype.L;fh.prototype.on=fh.prototype.J;fh.prototype.once=fh.prototype.once;fh.prototype.un=fh.prototype.K;jh.prototype.getActive=jh.prototype.c;jh.prototype.getMap=jh.prototype.i;jh.prototype.setActive=jh.prototype.Ia;jh.prototype.get=jh.prototype.get;jh.prototype.getKeys=jh.prototype.P;jh.prototype.getProperties=jh.prototype.M;jh.prototype.set=jh.prototype.set;jh.prototype.setProperties=jh.prototype.H;jh.prototype.unset=jh.prototype.R;jh.prototype.changed=jh.prototype.s;
jh.prototype.dispatchEvent=jh.prototype.b;jh.prototype.getRevision=jh.prototype.L;jh.prototype.on=jh.prototype.J;jh.prototype.once=jh.prototype.once;jh.prototype.un=jh.prototype.K;Wu.prototype.getActive=Wu.prototype.c;Wu.prototype.getMap=Wu.prototype.i;Wu.prototype.setActive=Wu.prototype.Ia;Wu.prototype.get=Wu.prototype.get;Wu.prototype.getKeys=Wu.prototype.P;Wu.prototype.getProperties=Wu.prototype.M;Wu.prototype.set=Wu.prototype.set;Wu.prototype.setProperties=Wu.prototype.H;Wu.prototype.unset=Wu.prototype.R;
Wu.prototype.changed=Wu.prototype.s;Wu.prototype.dispatchEvent=Wu.prototype.b;Wu.prototype.getRevision=Wu.prototype.L;Wu.prototype.on=Wu.prototype.J;Wu.prototype.once=Wu.prototype.once;Wu.prototype.un=Wu.prototype.K;Zu.prototype.type=Zu.prototype.type;Zu.prototype.target=Zu.prototype.target;Zu.prototype.preventDefault=Zu.prototype.preventDefault;Zu.prototype.stopPropagation=Zu.prototype.stopPropagation;av.prototype.getActive=av.prototype.c;av.prototype.getMap=av.prototype.i;
av.prototype.setActive=av.prototype.Ia;av.prototype.get=av.prototype.get;av.prototype.getKeys=av.prototype.P;av.prototype.getProperties=av.prototype.M;av.prototype.set=av.prototype.set;av.prototype.setProperties=av.prototype.H;av.prototype.unset=av.prototype.R;av.prototype.changed=av.prototype.s;av.prototype.dispatchEvent=av.prototype.b;av.prototype.getRevision=av.prototype.L;av.prototype.on=av.prototype.J;av.prototype.once=av.prototype.once;av.prototype.un=av.prototype.K;ev.prototype.getActive=ev.prototype.c;
ev.prototype.getMap=ev.prototype.i;ev.prototype.setActive=ev.prototype.Ia;ev.prototype.get=ev.prototype.get;ev.prototype.getKeys=ev.prototype.P;ev.prototype.getProperties=ev.prototype.M;ev.prototype.set=ev.prototype.set;ev.prototype.setProperties=ev.prototype.H;ev.prototype.unset=ev.prototype.R;ev.prototype.changed=ev.prototype.s;ev.prototype.dispatchEvent=ev.prototype.b;ev.prototype.getRevision=ev.prototype.L;ev.prototype.on=ev.prototype.J;ev.prototype.once=ev.prototype.once;ev.prototype.un=ev.prototype.K;
kv.prototype.type=kv.prototype.type;kv.prototype.target=kv.prototype.target;kv.prototype.preventDefault=kv.prototype.preventDefault;kv.prototype.stopPropagation=kv.prototype.stopPropagation;lf.prototype.get=lf.prototype.get;lf.prototype.getKeys=lf.prototype.P;lf.prototype.getProperties=lf.prototype.M;lf.prototype.set=lf.prototype.set;lf.prototype.setProperties=lf.prototype.H;lf.prototype.unset=lf.prototype.R;lf.prototype.changed=lf.prototype.s;lf.prototype.dispatchEvent=lf.prototype.b;
lf.prototype.getRevision=lf.prototype.L;lf.prototype.on=lf.prototype.J;lf.prototype.once=lf.prototype.once;lf.prototype.un=lf.prototype.K;of.prototype.getClosestPoint=of.prototype.Ab;of.prototype.intersectsCoordinate=of.prototype.sb;of.prototype.getExtent=of.prototype.D;of.prototype.rotate=of.prototype.rotate;of.prototype.scale=of.prototype.scale;of.prototype.simplify=of.prototype.Qb;of.prototype.transform=of.prototype.tb;of.prototype.get=of.prototype.get;of.prototype.getKeys=of.prototype.P;
of.prototype.getProperties=of.prototype.M;of.prototype.set=of.prototype.set;of.prototype.setProperties=of.prototype.H;of.prototype.unset=of.prototype.R;of.prototype.changed=of.prototype.s;of.prototype.dispatchEvent=of.prototype.b;of.prototype.getRevision=of.prototype.L;of.prototype.on=of.prototype.J;of.prototype.once=of.prototype.once;of.prototype.un=of.prototype.K;vs.prototype.getFirstCoordinate=vs.prototype.cc;vs.prototype.getLastCoordinate=vs.prototype.dc;vs.prototype.getLayout=vs.prototype.ec;
vs.prototype.rotate=vs.prototype.rotate;vs.prototype.scale=vs.prototype.scale;vs.prototype.getClosestPoint=vs.prototype.Ab;vs.prototype.intersectsCoordinate=vs.prototype.sb;vs.prototype.getExtent=vs.prototype.D;vs.prototype.simplify=vs.prototype.Qb;vs.prototype.get=vs.prototype.get;vs.prototype.getKeys=vs.prototype.P;vs.prototype.getProperties=vs.prototype.M;vs.prototype.set=vs.prototype.set;vs.prototype.setProperties=vs.prototype.H;vs.prototype.unset=vs.prototype.R;vs.prototype.changed=vs.prototype.s;
vs.prototype.dispatchEvent=vs.prototype.b;vs.prototype.getRevision=vs.prototype.L;vs.prototype.on=vs.prototype.J;vs.prototype.once=vs.prototype.once;vs.prototype.un=vs.prototype.K;sm.prototype.getClosestPoint=sm.prototype.Ab;sm.prototype.intersectsCoordinate=sm.prototype.sb;sm.prototype.getExtent=sm.prototype.D;sm.prototype.rotate=sm.prototype.rotate;sm.prototype.scale=sm.prototype.scale;sm.prototype.simplify=sm.prototype.Qb;sm.prototype.transform=sm.prototype.tb;sm.prototype.get=sm.prototype.get;
sm.prototype.getKeys=sm.prototype.P;sm.prototype.getProperties=sm.prototype.M;sm.prototype.set=sm.prototype.set;sm.prototype.setProperties=sm.prototype.H;sm.prototype.unset=sm.prototype.R;sm.prototype.changed=sm.prototype.s;sm.prototype.dispatchEvent=sm.prototype.b;sm.prototype.getRevision=sm.prototype.L;sm.prototype.on=sm.prototype.J;sm.prototype.once=sm.prototype.once;sm.prototype.un=sm.prototype.K;Gf.prototype.getFirstCoordinate=Gf.prototype.cc;Gf.prototype.getLastCoordinate=Gf.prototype.dc;
Gf.prototype.getLayout=Gf.prototype.ec;Gf.prototype.rotate=Gf.prototype.rotate;Gf.prototype.scale=Gf.prototype.scale;Gf.prototype.getClosestPoint=Gf.prototype.Ab;Gf.prototype.intersectsCoordinate=Gf.prototype.sb;Gf.prototype.getExtent=Gf.prototype.D;Gf.prototype.simplify=Gf.prototype.Qb;Gf.prototype.transform=Gf.prototype.tb;Gf.prototype.get=Gf.prototype.get;Gf.prototype.getKeys=Gf.prototype.P;Gf.prototype.getProperties=Gf.prototype.M;Gf.prototype.set=Gf.prototype.set;Gf.prototype.setProperties=Gf.prototype.H;
Gf.prototype.unset=Gf.prototype.R;Gf.prototype.changed=Gf.prototype.s;Gf.prototype.dispatchEvent=Gf.prototype.b;Gf.prototype.getRevision=Gf.prototype.L;Gf.prototype.on=Gf.prototype.J;Gf.prototype.once=Gf.prototype.once;Gf.prototype.un=Gf.prototype.K;N.prototype.getFirstCoordinate=N.prototype.cc;N.prototype.getLastCoordinate=N.prototype.dc;N.prototype.getLayout=N.prototype.ec;N.prototype.rotate=N.prototype.rotate;N.prototype.scale=N.prototype.scale;N.prototype.getClosestPoint=N.prototype.Ab;
N.prototype.intersectsCoordinate=N.prototype.sb;N.prototype.getExtent=N.prototype.D;N.prototype.simplify=N.prototype.Qb;N.prototype.transform=N.prototype.tb;N.prototype.get=N.prototype.get;N.prototype.getKeys=N.prototype.P;N.prototype.getProperties=N.prototype.M;N.prototype.set=N.prototype.set;N.prototype.setProperties=N.prototype.H;N.prototype.unset=N.prototype.R;N.prototype.changed=N.prototype.s;N.prototype.dispatchEvent=N.prototype.b;N.prototype.getRevision=N.prototype.L;N.prototype.on=N.prototype.J;
N.prototype.once=N.prototype.once;N.prototype.un=N.prototype.K;O.prototype.getFirstCoordinate=O.prototype.cc;O.prototype.getLastCoordinate=O.prototype.dc;O.prototype.getLayout=O.prototype.ec;O.prototype.rotate=O.prototype.rotate;O.prototype.scale=O.prototype.scale;O.prototype.getClosestPoint=O.prototype.Ab;O.prototype.intersectsCoordinate=O.prototype.sb;O.prototype.getExtent=O.prototype.D;O.prototype.simplify=O.prototype.Qb;O.prototype.transform=O.prototype.tb;O.prototype.get=O.prototype.get;
O.prototype.getKeys=O.prototype.P;O.prototype.getProperties=O.prototype.M;O.prototype.set=O.prototype.set;O.prototype.setProperties=O.prototype.H;O.prototype.unset=O.prototype.R;O.prototype.changed=O.prototype.s;O.prototype.dispatchEvent=O.prototype.b;O.prototype.getRevision=O.prototype.L;O.prototype.on=O.prototype.J;O.prototype.once=O.prototype.once;O.prototype.un=O.prototype.K;P.prototype.getFirstCoordinate=P.prototype.cc;P.prototype.getLastCoordinate=P.prototype.dc;P.prototype.getLayout=P.prototype.ec;
P.prototype.rotate=P.prototype.rotate;P.prototype.scale=P.prototype.scale;P.prototype.getClosestPoint=P.prototype.Ab;P.prototype.intersectsCoordinate=P.prototype.sb;P.prototype.getExtent=P.prototype.D;P.prototype.simplify=P.prototype.Qb;P.prototype.transform=P.prototype.tb;P.prototype.get=P.prototype.get;P.prototype.getKeys=P.prototype.P;P.prototype.getProperties=P.prototype.M;P.prototype.set=P.prototype.set;P.prototype.setProperties=P.prototype.H;P.prototype.unset=P.prototype.R;
P.prototype.changed=P.prototype.s;P.prototype.dispatchEvent=P.prototype.b;P.prototype.getRevision=P.prototype.L;P.prototype.on=P.prototype.J;P.prototype.once=P.prototype.once;P.prototype.un=P.prototype.K;Q.prototype.getFirstCoordinate=Q.prototype.cc;Q.prototype.getLastCoordinate=Q.prototype.dc;Q.prototype.getLayout=Q.prototype.ec;Q.prototype.rotate=Q.prototype.rotate;Q.prototype.scale=Q.prototype.scale;Q.prototype.getClosestPoint=Q.prototype.Ab;Q.prototype.intersectsCoordinate=Q.prototype.sb;
Q.prototype.getExtent=Q.prototype.D;Q.prototype.simplify=Q.prototype.Qb;Q.prototype.transform=Q.prototype.tb;Q.prototype.get=Q.prototype.get;Q.prototype.getKeys=Q.prototype.P;Q.prototype.getProperties=Q.prototype.M;Q.prototype.set=Q.prototype.set;Q.prototype.setProperties=Q.prototype.H;Q.prototype.unset=Q.prototype.R;Q.prototype.changed=Q.prototype.s;Q.prototype.dispatchEvent=Q.prototype.b;Q.prototype.getRevision=Q.prototype.L;Q.prototype.on=Q.prototype.J;Q.prototype.once=Q.prototype.once;
Q.prototype.un=Q.prototype.K;E.prototype.getFirstCoordinate=E.prototype.cc;E.prototype.getLastCoordinate=E.prototype.dc;E.prototype.getLayout=E.prototype.ec;E.prototype.rotate=E.prototype.rotate;E.prototype.scale=E.prototype.scale;E.prototype.getClosestPoint=E.prototype.Ab;E.prototype.intersectsCoordinate=E.prototype.sb;E.prototype.getExtent=E.prototype.D;E.prototype.simplify=E.prototype.Qb;E.prototype.transform=E.prototype.tb;E.prototype.get=E.prototype.get;E.prototype.getKeys=E.prototype.P;
E.prototype.getProperties=E.prototype.M;E.prototype.set=E.prototype.set;E.prototype.setProperties=E.prototype.H;E.prototype.unset=E.prototype.R;E.prototype.changed=E.prototype.s;E.prototype.dispatchEvent=E.prototype.b;E.prototype.getRevision=E.prototype.L;E.prototype.on=E.prototype.J;E.prototype.once=E.prototype.once;E.prototype.un=E.prototype.K;F.prototype.getFirstCoordinate=F.prototype.cc;F.prototype.getLastCoordinate=F.prototype.dc;F.prototype.getLayout=F.prototype.ec;F.prototype.rotate=F.prototype.rotate;
F.prototype.scale=F.prototype.scale;F.prototype.getClosestPoint=F.prototype.Ab;F.prototype.intersectsCoordinate=F.prototype.sb;F.prototype.getExtent=F.prototype.D;F.prototype.simplify=F.prototype.Qb;F.prototype.transform=F.prototype.tb;F.prototype.get=F.prototype.get;F.prototype.getKeys=F.prototype.P;F.prototype.getProperties=F.prototype.M;F.prototype.set=F.prototype.set;F.prototype.setProperties=F.prototype.H;F.prototype.unset=F.prototype.R;F.prototype.changed=F.prototype.s;
F.prototype.dispatchEvent=F.prototype.b;F.prototype.getRevision=F.prototype.L;F.prototype.on=F.prototype.J;F.prototype.once=F.prototype.once;F.prototype.un=F.prototype.K;Rm.prototype.readFeatures=Rm.prototype.Pa;$m.prototype.readFeatures=$m.prototype.Pa;Rm.prototype.readFeatures=Rm.prototype.Pa;kd.prototype.get=kd.prototype.get;kd.prototype.getKeys=kd.prototype.P;kd.prototype.getProperties=kd.prototype.M;kd.prototype.set=kd.prototype.set;kd.prototype.setProperties=kd.prototype.H;
kd.prototype.unset=kd.prototype.R;kd.prototype.changed=kd.prototype.s;kd.prototype.dispatchEvent=kd.prototype.b;kd.prototype.getRevision=kd.prototype.L;kd.prototype.on=kd.prototype.J;kd.prototype.once=kd.prototype.once;kd.prototype.un=kd.prototype.K;ld.prototype.getMap=ld.prototype.f;ld.prototype.setMap=ld.prototype.setMap;ld.prototype.setTarget=ld.prototype.i;ld.prototype.get=ld.prototype.get;ld.prototype.getKeys=ld.prototype.P;ld.prototype.getProperties=ld.prototype.M;ld.prototype.set=ld.prototype.set;
ld.prototype.setProperties=ld.prototype.H;ld.prototype.unset=ld.prototype.R;ld.prototype.changed=ld.prototype.s;ld.prototype.dispatchEvent=ld.prototype.b;ld.prototype.getRevision=ld.prototype.L;ld.prototype.on=ld.prototype.J;ld.prototype.once=ld.prototype.once;ld.prototype.un=ld.prototype.K;wd.prototype.getMap=wd.prototype.f;wd.prototype.setMap=wd.prototype.setMap;wd.prototype.setTarget=wd.prototype.i;wd.prototype.get=wd.prototype.get;wd.prototype.getKeys=wd.prototype.P;
wd.prototype.getProperties=wd.prototype.M;wd.prototype.set=wd.prototype.set;wd.prototype.setProperties=wd.prototype.H;wd.prototype.unset=wd.prototype.R;wd.prototype.changed=wd.prototype.s;wd.prototype.dispatchEvent=wd.prototype.b;wd.prototype.getRevision=wd.prototype.L;wd.prototype.on=wd.prototype.J;wd.prototype.once=wd.prototype.once;wd.prototype.un=wd.prototype.K;Bd.prototype.getMap=Bd.prototype.f;Bd.prototype.setMap=Bd.prototype.setMap;Bd.prototype.setTarget=Bd.prototype.i;Bd.prototype.get=Bd.prototype.get;
Bd.prototype.getKeys=Bd.prototype.P;Bd.prototype.getProperties=Bd.prototype.M;Bd.prototype.set=Bd.prototype.set;Bd.prototype.setProperties=Bd.prototype.H;Bd.prototype.unset=Bd.prototype.R;Bd.prototype.changed=Bd.prototype.s;Bd.prototype.dispatchEvent=Bd.prototype.b;Bd.prototype.getRevision=Bd.prototype.L;Bd.prototype.on=Bd.prototype.J;Bd.prototype.once=Bd.prototype.once;Bd.prototype.un=Bd.prototype.K;Bk.prototype.getMap=Bk.prototype.f;Bk.prototype.setMap=Bk.prototype.setMap;
Bk.prototype.setTarget=Bk.prototype.i;Bk.prototype.get=Bk.prototype.get;Bk.prototype.getKeys=Bk.prototype.P;Bk.prototype.getProperties=Bk.prototype.M;Bk.prototype.set=Bk.prototype.set;Bk.prototype.setProperties=Bk.prototype.H;Bk.prototype.unset=Bk.prototype.R;Bk.prototype.changed=Bk.prototype.s;Bk.prototype.dispatchEvent=Bk.prototype.b;Bk.prototype.getRevision=Bk.prototype.L;Bk.prototype.on=Bk.prototype.J;Bk.prototype.once=Bk.prototype.once;Bk.prototype.un=Bk.prototype.K;sd.prototype.getMap=sd.prototype.f;
sd.prototype.setMap=sd.prototype.setMap;sd.prototype.setTarget=sd.prototype.i;sd.prototype.get=sd.prototype.get;sd.prototype.getKeys=sd.prototype.P;sd.prototype.getProperties=sd.prototype.M;sd.prototype.set=sd.prototype.set;sd.prototype.setProperties=sd.prototype.H;sd.prototype.unset=sd.prototype.R;sd.prototype.changed=sd.prototype.s;sd.prototype.dispatchEvent=sd.prototype.b;sd.prototype.getRevision=sd.prototype.L;sd.prototype.on=sd.prototype.J;sd.prototype.once=sd.prototype.once;
sd.prototype.un=sd.prototype.K;Gk.prototype.getMap=Gk.prototype.f;Gk.prototype.setMap=Gk.prototype.setMap;Gk.prototype.setTarget=Gk.prototype.i;Gk.prototype.get=Gk.prototype.get;Gk.prototype.getKeys=Gk.prototype.P;Gk.prototype.getProperties=Gk.prototype.M;Gk.prototype.set=Gk.prototype.set;Gk.prototype.setProperties=Gk.prototype.H;Gk.prototype.unset=Gk.prototype.R;Gk.prototype.changed=Gk.prototype.s;Gk.prototype.dispatchEvent=Gk.prototype.b;Gk.prototype.getRevision=Gk.prototype.L;Gk.prototype.on=Gk.prototype.J;
Gk.prototype.once=Gk.prototype.once;Gk.prototype.un=Gk.prototype.K;ud.prototype.getMap=ud.prototype.f;ud.prototype.setMap=ud.prototype.setMap;ud.prototype.setTarget=ud.prototype.i;ud.prototype.get=ud.prototype.get;ud.prototype.getKeys=ud.prototype.P;ud.prototype.getProperties=ud.prototype.M;ud.prototype.set=ud.prototype.set;ud.prototype.setProperties=ud.prototype.H;ud.prototype.unset=ud.prototype.R;ud.prototype.changed=ud.prototype.s;ud.prototype.dispatchEvent=ud.prototype.b;
ud.prototype.getRevision=ud.prototype.L;ud.prototype.on=ud.prototype.J;ud.prototype.once=ud.prototype.once;ud.prototype.un=ud.prototype.K;Lk.prototype.getMap=Lk.prototype.f;Lk.prototype.setMap=Lk.prototype.setMap;Lk.prototype.setTarget=Lk.prototype.i;Lk.prototype.get=Lk.prototype.get;Lk.prototype.getKeys=Lk.prototype.P;Lk.prototype.getProperties=Lk.prototype.M;Lk.prototype.set=Lk.prototype.set;Lk.prototype.setProperties=Lk.prototype.H;Lk.prototype.unset=Lk.prototype.R;Lk.prototype.changed=Lk.prototype.s;
Lk.prototype.dispatchEvent=Lk.prototype.b;Lk.prototype.getRevision=Lk.prototype.L;Lk.prototype.on=Lk.prototype.J;Lk.prototype.once=Lk.prototype.once;Lk.prototype.un=Lk.prototype.K;Qk.prototype.getMap=Qk.prototype.f;Qk.prototype.setMap=Qk.prototype.setMap;Qk.prototype.setTarget=Qk.prototype.i;Qk.prototype.get=Qk.prototype.get;Qk.prototype.getKeys=Qk.prototype.P;Qk.prototype.getProperties=Qk.prototype.M;Qk.prototype.set=Qk.prototype.set;Qk.prototype.setProperties=Qk.prototype.H;Qk.prototype.unset=Qk.prototype.R;
Qk.prototype.changed=Qk.prototype.s;Qk.prototype.dispatchEvent=Qk.prototype.b;Qk.prototype.getRevision=Qk.prototype.L;Qk.prototype.on=Qk.prototype.J;Qk.prototype.once=Qk.prototype.once;Qk.prototype.un=Qk.prototype.K;
  return OPENLAYERS.ol;
}));


}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],20:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],21:[function(require,module,exports){
(function (process){
/**
  * vue-router v2.5.3
  * (c) 2017 Evan You
  * @license MIT
  */
'use strict';

/*  */

function assert (condition, message) {
  if (!condition) {
    throw new Error(("[vue-router] " + message))
  }
}

function warn (condition, message) {
  if (process.env.NODE_ENV !== 'production' && !condition) {
    typeof console !== 'undefined' && console.warn(("[vue-router] " + message));
  }
}

var View = {
  name: 'router-view',
  functional: true,
  props: {
    name: {
      type: String,
      default: 'default'
    }
  },
  render: function render (_, ref) {
    var props = ref.props;
    var children = ref.children;
    var parent = ref.parent;
    var data = ref.data;

    data.routerView = true;

    // directly use parent context's createElement() function
    // so that components rendered by router-view can resolve named slots
    var h = parent.$createElement;
    var name = props.name;
    var route = parent.$route;
    var cache = parent._routerViewCache || (parent._routerViewCache = {});

    // determine current view depth, also check to see if the tree
    // has been toggled inactive but kept-alive.
    var depth = 0;
    var inactive = false;
    while (parent) {
      if (parent.$vnode && parent.$vnode.data.routerView) {
        depth++;
      }
      if (parent._inactive) {
        inactive = true;
      }
      parent = parent.$parent;
    }
    data.routerViewDepth = depth;

    // render previous view if the tree is inactive and kept-alive
    if (inactive) {
      return h(cache[name], data, children)
    }

    var matched = route.matched[depth];
    // render empty node if no matched route
    if (!matched) {
      cache[name] = null;
      return h()
    }

    var component = cache[name] = matched.components[name];

    // attach instance registration hook
    // this will be called in the instance's injected lifecycle hooks
    data.registerRouteInstance = function (vm, val) {
      // val could be undefined for unregistration
      var current = matched.instances[name];
      if (
        (val && current !== vm) ||
        (!val && current === vm)
      ) {
        matched.instances[name] = val;
      }
    }

    // also regiseter instance in prepatch hook
    // in case the same component instance is reused across different routes
    ;(data.hook || (data.hook = {})).prepatch = function (_, vnode) {
      matched.instances[name] = vnode.componentInstance;
    };

    // resolve props
    data.props = resolveProps(route, matched.props && matched.props[name]);

    return h(component, data, children)
  }
};

function resolveProps (route, config) {
  switch (typeof config) {
    case 'undefined':
      return
    case 'object':
      return config
    case 'function':
      return config(route)
    case 'boolean':
      return config ? route.params : undefined
    default:
      if (process.env.NODE_ENV !== 'production') {
        warn(
          false,
          "props in \"" + (route.path) + "\" is a " + (typeof config) + ", " +
          "expecting an object, function or boolean."
        );
      }
  }
}

/*  */

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function (c) { return '%' + c.charCodeAt(0).toString(16); };
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function (str) { return encodeURIComponent(str)
  .replace(encodeReserveRE, encodeReserveReplacer)
  .replace(commaRE, ','); };

var decode = decodeURIComponent;

function resolveQuery (
  query,
  extraQuery,
  _parseQuery
) {
  if ( extraQuery === void 0 ) extraQuery = {};

  var parse = _parseQuery || parseQuery;
  var parsedQuery;
  try {
    parsedQuery = parse(query || '');
  } catch (e) {
    process.env.NODE_ENV !== 'production' && warn(false, e.message);
    parsedQuery = {};
  }
  for (var key in extraQuery) {
    var val = extraQuery[key];
    parsedQuery[key] = Array.isArray(val) ? val.slice() : val;
  }
  return parsedQuery
}

function parseQuery (query) {
  var res = {};

  query = query.trim().replace(/^(\?|#|&)/, '');

  if (!query) {
    return res
  }

  query.split('&').forEach(function (param) {
    var parts = param.replace(/\+/g, ' ').split('=');
    var key = decode(parts.shift());
    var val = parts.length > 0
      ? decode(parts.join('='))
      : null;

    if (res[key] === undefined) {
      res[key] = val;
    } else if (Array.isArray(res[key])) {
      res[key].push(val);
    } else {
      res[key] = [res[key], val];
    }
  });

  return res
}

function stringifyQuery (obj) {
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return ''
    }

    if (val === null) {
      return encode(key)
    }

    if (Array.isArray(val)) {
      var result = [];
      val.slice().forEach(function (val2) {
        if (val2 === undefined) {
          return
        }
        if (val2 === null) {
          result.push(encode(key));
        } else {
          result.push(encode(key) + '=' + encode(val2));
        }
      });
      return result.join('&')
    }

    return encode(key) + '=' + encode(val)
  }).filter(function (x) { return x.length > 0; }).join('&') : null;
  return res ? ("?" + res) : ''
}

/*  */


var trailingSlashRE = /\/?$/;

function createRoute (
  record,
  location,
  redirectedFrom,
  router
) {
  var stringifyQuery$$1 = router && router.options.stringifyQuery;
  var route = {
    name: location.name || (record && record.name),
    meta: (record && record.meta) || {},
    path: location.path || '/',
    hash: location.hash || '',
    query: location.query || {},
    params: location.params || {},
    fullPath: getFullPath(location, stringifyQuery$$1),
    matched: record ? formatMatch(record) : []
  };
  if (redirectedFrom) {
    route.redirectedFrom = getFullPath(redirectedFrom, stringifyQuery$$1);
  }
  return Object.freeze(route)
}

// the starting route that represents the initial state
var START = createRoute(null, {
  path: '/'
});

function formatMatch (record) {
  var res = [];
  while (record) {
    res.unshift(record);
    record = record.parent;
  }
  return res
}

function getFullPath (
  ref,
  _stringifyQuery
) {
  var path = ref.path;
  var query = ref.query; if ( query === void 0 ) query = {};
  var hash = ref.hash; if ( hash === void 0 ) hash = '';

  var stringify = _stringifyQuery || stringifyQuery;
  return (path || '/') + stringify(query) + hash
}

function isSameRoute (a, b) {
  if (b === START) {
    return a === b
  } else if (!b) {
    return false
  } else if (a.path && b.path) {
    return (
      a.path.replace(trailingSlashRE, '') === b.path.replace(trailingSlashRE, '') &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query)
    )
  } else if (a.name && b.name) {
    return (
      a.name === b.name &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query) &&
      isObjectEqual(a.params, b.params)
    )
  } else {
    return false
  }
}

function isObjectEqual (a, b) {
  if ( a === void 0 ) a = {};
  if ( b === void 0 ) b = {};

  var aKeys = Object.keys(a);
  var bKeys = Object.keys(b);
  if (aKeys.length !== bKeys.length) {
    return false
  }
  return aKeys.every(function (key) { return String(a[key]) === String(b[key]); })
}

function isIncludedRoute (current, target) {
  return (
    current.path.replace(trailingSlashRE, '/').indexOf(
      target.path.replace(trailingSlashRE, '/')
    ) === 0 &&
    (!target.hash || current.hash === target.hash) &&
    queryIncludes(current.query, target.query)
  )
}

function queryIncludes (current, target) {
  for (var key in target) {
    if (!(key in current)) {
      return false
    }
  }
  return true
}

/*  */

// work around weird flow bug
var toTypes = [String, Object];
var eventTypes = [String, Array];

var Link = {
  name: 'router-link',
  props: {
    to: {
      type: toTypes,
      required: true
    },
    tag: {
      type: String,
      default: 'a'
    },
    exact: Boolean,
    append: Boolean,
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String,
    event: {
      type: eventTypes,
      default: 'click'
    }
  },
  render: function render (h) {
    var this$1 = this;

    var router = this.$router;
    var current = this.$route;
    var ref = router.resolve(this.to, current, this.append);
    var location = ref.location;
    var route = ref.route;
    var href = ref.href;

    var classes = {};
    var globalActiveClass = router.options.linkActiveClass;
    var globalExactActiveClass = router.options.linkExactActiveClass;
    // Support global empty active class
    var activeClassFallback = globalActiveClass == null
            ? 'router-link-active'
            : globalActiveClass;
    var exactActiveClassFallback = globalExactActiveClass == null
            ? 'router-link-exact-active'
            : globalExactActiveClass;
    var activeClass = this.activeClass == null
            ? activeClassFallback
            : this.activeClass;
    var exactActiveClass = this.exactActiveClass == null
            ? exactActiveClassFallback
            : this.exactActiveClass;
    var compareTarget = location.path
      ? createRoute(null, location, null, router)
      : route;

    classes[exactActiveClass] = isSameRoute(current, compareTarget);
    classes[activeClass] = this.exact
      ? classes[exactActiveClass]
      : isIncludedRoute(current, compareTarget);

    var handler = function (e) {
      if (guardEvent(e)) {
        if (this$1.replace) {
          router.replace(location);
        } else {
          router.push(location);
        }
      }
    };

    var on = { click: guardEvent };
    if (Array.isArray(this.event)) {
      this.event.forEach(function (e) { on[e] = handler; });
    } else {
      on[this.event] = handler;
    }

    var data = {
      class: classes
    };

    if (this.tag === 'a') {
      data.on = on;
      data.attrs = { href: href };
    } else {
      // find the first <a> child and apply listener and href
      var a = findAnchor(this.$slots.default);
      if (a) {
        // in case the <a> is a static node
        a.isStatic = false;
        var extend = _Vue.util.extend;
        var aData = a.data = extend({}, a.data);
        aData.on = on;
        var aAttrs = a.data.attrs = extend({}, a.data.attrs);
        aAttrs.href = href;
      } else {
        // doesn't have <a> child, apply listener to self
        data.on = on;
      }
    }

    return h(this.tag, data, this.$slots.default)
  }
};

function guardEvent (e) {
  // don't redirect with control keys
  if (e.metaKey || e.ctrlKey || e.shiftKey) { return }
  // don't redirect when preventDefault called
  if (e.defaultPrevented) { return }
  // don't redirect on right click
  if (e.button !== undefined && e.button !== 0) { return }
  // don't redirect if `target="_blank"`
  if (e.currentTarget && e.currentTarget.getAttribute) {
    var target = e.currentTarget.getAttribute('target');
    if (/\b_blank\b/i.test(target)) { return }
  }
  // this may be a Weex event which doesn't have this method
  if (e.preventDefault) {
    e.preventDefault();
  }
  return true
}

function findAnchor (children) {
  if (children) {
    var child;
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      if (child.tag === 'a') {
        return child
      }
      if (child.children && (child = findAnchor(child.children))) {
        return child
      }
    }
  }
}

var _Vue;

function install (Vue) {
  if (install.installed) { return }
  install.installed = true;

  _Vue = Vue;

  Object.defineProperty(Vue.prototype, '$router', {
    get: function get () { return this.$root._router }
  });

  Object.defineProperty(Vue.prototype, '$route', {
    get: function get () { return this.$root._route }
  });

  var isDef = function (v) { return v !== undefined; };

  var registerInstance = function (vm, callVal) {
    var i = vm.$options._parentVnode;
    if (isDef(i) && isDef(i = i.data) && isDef(i = i.registerRouteInstance)) {
      i(vm, callVal);
    }
  };

  Vue.mixin({
    beforeCreate: function beforeCreate () {
      if (isDef(this.$options.router)) {
        this._router = this.$options.router;
        this._router.init(this);
        Vue.util.defineReactive(this, '_route', this._router.history.current);
      }
      registerInstance(this, this);
    },
    destroyed: function destroyed () {
      registerInstance(this);
    }
  });

  Vue.component('router-view', View);
  Vue.component('router-link', Link);

  var strats = Vue.config.optionMergeStrategies;
  // use the same hook merging strategy for route hooks
  strats.beforeRouteEnter = strats.beforeRouteLeave = strats.created;
}

/*  */

var inBrowser = typeof window !== 'undefined';

/*  */

function resolvePath (
  relative,
  base,
  append
) {
  var firstChar = relative.charAt(0);
  if (firstChar === '/') {
    return relative
  }

  if (firstChar === '?' || firstChar === '#') {
    return base + relative
  }

  var stack = base.split('/');

  // remove trailing segment if:
  // - not appending
  // - appending to trailing slash (last segment is empty)
  if (!append || !stack[stack.length - 1]) {
    stack.pop();
  }

  // resolve relative path
  var segments = relative.replace(/^\//, '').split('/');
  for (var i = 0; i < segments.length; i++) {
    var segment = segments[i];
    if (segment === '..') {
      stack.pop();
    } else if (segment !== '.') {
      stack.push(segment);
    }
  }

  // ensure leading slash
  if (stack[0] !== '') {
    stack.unshift('');
  }

  return stack.join('/')
}

function parsePath (path) {
  var hash = '';
  var query = '';

  var hashIndex = path.indexOf('#');
  if (hashIndex >= 0) {
    hash = path.slice(hashIndex);
    path = path.slice(0, hashIndex);
  }

  var queryIndex = path.indexOf('?');
  if (queryIndex >= 0) {
    query = path.slice(queryIndex + 1);
    path = path.slice(0, queryIndex);
  }

  return {
    path: path,
    query: query,
    hash: hash
  }
}

function cleanPath (path) {
  return path.replace(/\/\//g, '/')
}

var index$1 = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

/**
 * Expose `pathToRegexp`.
 */
var index = pathToRegexp;
var parse_1 = parse;
var compile_1 = compile;
var tokensToFunction_1 = tokensToFunction;
var tokensToRegExp_1 = tokensToRegExp;

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = [];
  var key = 0;
  var index = 0;
  var path = '';
  var defaultDelimiter = options && options.delimiter || '/';
  var res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0];
    var escaped = res[1];
    var offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      continue
    }

    var next = str[index];
    var prefix = res[2];
    var name = res[3];
    var capture = res[4];
    var group = res[5];
    var modifier = res[6];
    var asterisk = res[7];

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
    }

    var partial = prefix != null && next != null && next !== prefix;
    var repeat = modifier === '+' || modifier === '*';
    var optional = modifier === '?' || modifier === '*';
    var delimiter = res[2] || defaultDelimiter;
    var pattern = capture || group;

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
    });
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index);
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path);
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options))
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
    }
  }

  return function (obj, opts) {
    var path = '';
    var data = obj || {};
    var options = opts || {};
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (typeof token === 'string') {
        path += token;

        continue
      }

      var value = data[token.name];
      var segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (index$1(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment;
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys;
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g);

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      });
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = [];

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source);
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  if (!index$1(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  var strict = options.strict;
  var end = options.end !== false;
  var route = '';

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i];

    if (typeof token === 'string') {
      route += escapeString(token);
    } else {
      var prefix = escapeString(token.prefix);
      var capture = '(?:' + token.pattern + ')';

      keys.push(token);

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*';
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?';
        } else {
          capture = prefix + '(' + capture + ')?';
        }
      } else {
        capture = prefix + '(' + capture + ')';
      }

      route += capture;
    }
  }

  var delimiter = escapeString(options.delimiter || '/');
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?';
  }

  if (end) {
    route += '$';
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys)
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (!index$1(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (index$1(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}

index.parse = parse_1;
index.compile = compile_1;
index.tokensToFunction = tokensToFunction_1;
index.tokensToRegExp = tokensToRegExp_1;

/*  */

var regexpCompileCache = Object.create(null);

function fillParams (
  path,
  params,
  routeMsg
) {
  try {
    var filler =
      regexpCompileCache[path] ||
      (regexpCompileCache[path] = index.compile(path));
    return filler(params || {}, { pretty: true })
  } catch (e) {
    if (process.env.NODE_ENV !== 'production') {
      warn(false, ("missing param for " + routeMsg + ": " + (e.message)));
    }
    return ''
  }
}

/*  */

function createRouteMap (
  routes,
  oldPathList,
  oldPathMap,
  oldNameMap
) {
  // the path list is used to control path matching priority
  var pathList = oldPathList || [];
  var pathMap = oldPathMap || Object.create(null);
  var nameMap = oldNameMap || Object.create(null);

  routes.forEach(function (route) {
    addRouteRecord(pathList, pathMap, nameMap, route);
  });

  // ensure wildcard routes are always at the end
  for (var i = 0, l = pathList.length; i < l; i++) {
    if (pathList[i] === '*') {
      pathList.push(pathList.splice(i, 1)[0]);
      l--;
      i--;
    }
  }

  return {
    pathList: pathList,
    pathMap: pathMap,
    nameMap: nameMap
  }
}

function addRouteRecord (
  pathList,
  pathMap,
  nameMap,
  route,
  parent,
  matchAs
) {
  var path = route.path;
  var name = route.name;
  if (process.env.NODE_ENV !== 'production') {
    assert(path != null, "\"path\" is required in a route configuration.");
    assert(
      typeof route.component !== 'string',
      "route config \"component\" for path: " + (String(path || name)) + " cannot be a " +
      "string id. Use an actual component instead."
    );
  }

  var normalizedPath = normalizePath(path, parent);
  var record = {
    path: normalizedPath,
    regex: compileRouteRegex(normalizedPath),
    components: route.components || { default: route.component },
    instances: {},
    name: name,
    parent: parent,
    matchAs: matchAs,
    redirect: route.redirect,
    beforeEnter: route.beforeEnter,
    meta: route.meta || {},
    props: route.props == null
      ? {}
      : route.components
        ? route.props
        : { default: route.props }
  };

  if (route.children) {
    // Warn if route is named and has a default child route.
    // If users navigate to this route by name, the default child will
    // not be rendered (GH Issue #629)
    if (process.env.NODE_ENV !== 'production') {
      if (route.name && route.children.some(function (child) { return /^\/?$/.test(child.path); })) {
        warn(
          false,
          "Named Route '" + (route.name) + "' has a default child route. " +
          "When navigating to this named route (:to=\"{name: '" + (route.name) + "'\"), " +
          "the default child route will not be rendered. Remove the name from " +
          "this route and use the name of the default child route for named " +
          "links instead."
        );
      }
    }
    route.children.forEach(function (child) {
      var childMatchAs = matchAs
        ? cleanPath((matchAs + "/" + (child.path)))
        : undefined;
      addRouteRecord(pathList, pathMap, nameMap, child, record, childMatchAs);
    });
  }

  if (route.alias !== undefined) {
    if (Array.isArray(route.alias)) {
      route.alias.forEach(function (alias) {
        var aliasRoute = {
          path: alias,
          children: route.children
        };
        addRouteRecord(pathList, pathMap, nameMap, aliasRoute, parent, record.path);
      });
    } else {
      var aliasRoute = {
        path: route.alias,
        children: route.children
      };
      addRouteRecord(pathList, pathMap, nameMap, aliasRoute, parent, record.path);
    }
  }

  if (!pathMap[record.path]) {
    pathList.push(record.path);
    pathMap[record.path] = record;
  }

  if (name) {
    if (!nameMap[name]) {
      nameMap[name] = record;
    } else if (process.env.NODE_ENV !== 'production' && !matchAs) {
      warn(
        false,
        "Duplicate named routes definition: " +
        "{ name: \"" + name + "\", path: \"" + (record.path) + "\" }"
      );
    }
  }
}

function compileRouteRegex (path) {
  var regex = index(path);
  if (process.env.NODE_ENV !== 'production') {
    var keys = {};
    regex.keys.forEach(function (key) {
      warn(!keys[key.name], ("Duplicate param keys in route with path: \"" + path + "\""));
      keys[key.name] = true;
    });
  }
  return regex
}

function normalizePath (path, parent) {
  path = path.replace(/\/$/, '');
  if (path[0] === '/') { return path }
  if (parent == null) { return path }
  return cleanPath(((parent.path) + "/" + path))
}

/*  */


function normalizeLocation (
  raw,
  current,
  append,
  router
) {
  var next = typeof raw === 'string' ? { path: raw } : raw;
  // named target
  if (next.name || next._normalized) {
    return next
  }

  // relative params
  if (!next.path && next.params && current) {
    next = assign({}, next);
    next._normalized = true;
    var params = assign(assign({}, current.params), next.params);
    if (current.name) {
      next.name = current.name;
      next.params = params;
    } else if (current.matched) {
      var rawPath = current.matched[current.matched.length - 1].path;
      next.path = fillParams(rawPath, params, ("path " + (current.path)));
    } else if (process.env.NODE_ENV !== 'production') {
      warn(false, "relative params navigation requires a current route.");
    }
    return next
  }

  var parsedPath = parsePath(next.path || '');
  var basePath = (current && current.path) || '/';
  var path = parsedPath.path
    ? resolvePath(parsedPath.path, basePath, append || next.append)
    : basePath;

  var query = resolveQuery(
    parsedPath.query,
    next.query,
    router && router.options.parseQuery
  );

  var hash = next.hash || parsedPath.hash;
  if (hash && hash.charAt(0) !== '#') {
    hash = "#" + hash;
  }

  return {
    _normalized: true,
    path: path,
    query: query,
    hash: hash
  }
}

function assign (a, b) {
  for (var key in b) {
    a[key] = b[key];
  }
  return a
}

/*  */


function createMatcher (
  routes,
  router
) {
  var ref = createRouteMap(routes);
  var pathList = ref.pathList;
  var pathMap = ref.pathMap;
  var nameMap = ref.nameMap;

  function addRoutes (routes) {
    createRouteMap(routes, pathList, pathMap, nameMap);
  }

  function match (
    raw,
    currentRoute,
    redirectedFrom
  ) {
    var location = normalizeLocation(raw, currentRoute, false, router);
    var name = location.name;

    if (name) {
      var record = nameMap[name];
      if (process.env.NODE_ENV !== 'production') {
        warn(record, ("Route with name '" + name + "' does not exist"));
      }
      var paramNames = record.regex.keys
        .filter(function (key) { return !key.optional; })
        .map(function (key) { return key.name; });

      if (typeof location.params !== 'object') {
        location.params = {};
      }

      if (currentRoute && typeof currentRoute.params === 'object') {
        for (var key in currentRoute.params) {
          if (!(key in location.params) && paramNames.indexOf(key) > -1) {
            location.params[key] = currentRoute.params[key];
          }
        }
      }

      if (record) {
        location.path = fillParams(record.path, location.params, ("named route \"" + name + "\""));
        return _createRoute(record, location, redirectedFrom)
      }
    } else if (location.path) {
      location.params = {};
      for (var i = 0; i < pathList.length; i++) {
        var path = pathList[i];
        var record$1 = pathMap[path];
        if (matchRoute(record$1.regex, location.path, location.params)) {
          return _createRoute(record$1, location, redirectedFrom)
        }
      }
    }
    // no match
    return _createRoute(null, location)
  }

  function redirect (
    record,
    location
  ) {
    var originalRedirect = record.redirect;
    var redirect = typeof originalRedirect === 'function'
        ? originalRedirect(createRoute(record, location, null, router))
        : originalRedirect;

    if (typeof redirect === 'string') {
      redirect = { path: redirect };
    }

    if (!redirect || typeof redirect !== 'object') {
      if (process.env.NODE_ENV !== 'production') {
        warn(
          false, ("invalid redirect option: " + (JSON.stringify(redirect)))
        );
      }
      return _createRoute(null, location)
    }

    var re = redirect;
    var name = re.name;
    var path = re.path;
    var query = location.query;
    var hash = location.hash;
    var params = location.params;
    query = re.hasOwnProperty('query') ? re.query : query;
    hash = re.hasOwnProperty('hash') ? re.hash : hash;
    params = re.hasOwnProperty('params') ? re.params : params;

    if (name) {
      // resolved named direct
      var targetRecord = nameMap[name];
      if (process.env.NODE_ENV !== 'production') {
        assert(targetRecord, ("redirect failed: named route \"" + name + "\" not found."));
      }
      return match({
        _normalized: true,
        name: name,
        query: query,
        hash: hash,
        params: params
      }, undefined, location)
    } else if (path) {
      // 1. resolve relative redirect
      var rawPath = resolveRecordPath(path, record);
      // 2. resolve params
      var resolvedPath = fillParams(rawPath, params, ("redirect route with path \"" + rawPath + "\""));
      // 3. rematch with existing query and hash
      return match({
        _normalized: true,
        path: resolvedPath,
        query: query,
        hash: hash
      }, undefined, location)
    } else {
      if (process.env.NODE_ENV !== 'production') {
        warn(false, ("invalid redirect option: " + (JSON.stringify(redirect))));
      }
      return _createRoute(null, location)
    }
  }

  function alias (
    record,
    location,
    matchAs
  ) {
    var aliasedPath = fillParams(matchAs, location.params, ("aliased route with path \"" + matchAs + "\""));
    var aliasedMatch = match({
      _normalized: true,
      path: aliasedPath
    });
    if (aliasedMatch) {
      var matched = aliasedMatch.matched;
      var aliasedRecord = matched[matched.length - 1];
      location.params = aliasedMatch.params;
      return _createRoute(aliasedRecord, location)
    }
    return _createRoute(null, location)
  }

  function _createRoute (
    record,
    location,
    redirectedFrom
  ) {
    if (record && record.redirect) {
      return redirect(record, redirectedFrom || location)
    }
    if (record && record.matchAs) {
      return alias(record, location, record.matchAs)
    }
    return createRoute(record, location, redirectedFrom, router)
  }

  return {
    match: match,
    addRoutes: addRoutes
  }
}

function matchRoute (
  regex,
  path,
  params
) {
  var m = path.match(regex);

  if (!m) {
    return false
  } else if (!params) {
    return true
  }

  for (var i = 1, len = m.length; i < len; ++i) {
    var key = regex.keys[i - 1];
    var val = typeof m[i] === 'string' ? decodeURIComponent(m[i]) : m[i];
    if (key) {
      params[key.name] = val;
    }
  }

  return true
}

function resolveRecordPath (path, record) {
  return resolvePath(path, record.parent ? record.parent.path : '/', true)
}

/*  */


var positionStore = Object.create(null);

function setupScroll () {
  window.addEventListener('popstate', function (e) {
    saveScrollPosition();
    if (e.state && e.state.key) {
      setStateKey(e.state.key);
    }
  });
}

function handleScroll (
  router,
  to,
  from,
  isPop
) {
  if (!router.app) {
    return
  }

  var behavior = router.options.scrollBehavior;
  if (!behavior) {
    return
  }

  if (process.env.NODE_ENV !== 'production') {
    assert(typeof behavior === 'function', "scrollBehavior must be a function");
  }

  // wait until re-render finishes before scrolling
  router.app.$nextTick(function () {
    var position = getScrollPosition();
    var shouldScroll = behavior(to, from, isPop ? position : null);
    if (!shouldScroll) {
      return
    }
    var isObject = typeof shouldScroll === 'object';
    if (isObject && typeof shouldScroll.selector === 'string') {
      var el = document.querySelector(shouldScroll.selector);
      if (el) {
        position = getElementPosition(el);
      } else if (isValidPosition(shouldScroll)) {
        position = normalizePosition(shouldScroll);
      }
    } else if (isObject && isValidPosition(shouldScroll)) {
      position = normalizePosition(shouldScroll);
    }

    if (position) {
      window.scrollTo(position.x, position.y);
    }
  });
}

function saveScrollPosition () {
  var key = getStateKey();
  if (key) {
    positionStore[key] = {
      x: window.pageXOffset,
      y: window.pageYOffset
    };
  }
}

function getScrollPosition () {
  var key = getStateKey();
  if (key) {
    return positionStore[key]
  }
}

function getElementPosition (el) {
  var docEl = document.documentElement;
  var docRect = docEl.getBoundingClientRect();
  var elRect = el.getBoundingClientRect();
  return {
    x: elRect.left - docRect.left,
    y: elRect.top - docRect.top
  }
}

function isValidPosition (obj) {
  return isNumber(obj.x) || isNumber(obj.y)
}

function normalizePosition (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : window.pageXOffset,
    y: isNumber(obj.y) ? obj.y : window.pageYOffset
  }
}

function isNumber (v) {
  return typeof v === 'number'
}

/*  */

var supportsPushState = inBrowser && (function () {
  var ua = window.navigator.userAgent;

  if (
    (ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) &&
    ua.indexOf('Mobile Safari') !== -1 &&
    ua.indexOf('Chrome') === -1 &&
    ua.indexOf('Windows Phone') === -1
  ) {
    return false
  }

  return window.history && 'pushState' in window.history
})();

// use User Timing api (if present) for more accurate key precision
var Time = inBrowser && window.performance && window.performance.now
  ? window.performance
  : Date;

var _key = genKey();

function genKey () {
  return Time.now().toFixed(3)
}

function getStateKey () {
  return _key
}

function setStateKey (key) {
  _key = key;
}

function pushState (url, replace) {
  saveScrollPosition();
  // try...catch the pushState call to get around Safari
  // DOM Exception 18 where it limits to 100 pushState calls
  var history = window.history;
  try {
    if (replace) {
      history.replaceState({ key: _key }, '', url);
    } else {
      _key = genKey();
      history.pushState({ key: _key }, '', url);
    }
  } catch (e) {
    window.location[replace ? 'replace' : 'assign'](url);
  }
}

function replaceState (url) {
  pushState(url, true);
}

/*  */

function runQueue (queue, fn, cb) {
  var step = function (index) {
    if (index >= queue.length) {
      cb();
    } else {
      if (queue[index]) {
        fn(queue[index], function () {
          step(index + 1);
        });
      } else {
        step(index + 1);
      }
    }
  };
  step(0);
}

/*  */

var History = function History (router, base) {
  this.router = router;
  this.base = normalizeBase(base);
  // start with a route object that stands for "nowhere"
  this.current = START;
  this.pending = null;
  this.ready = false;
  this.readyCbs = [];
  this.readyErrorCbs = [];
  this.errorCbs = [];
};

History.prototype.listen = function listen (cb) {
  this.cb = cb;
};

History.prototype.onReady = function onReady (cb, errorCb) {
  if (this.ready) {
    cb();
  } else {
    this.readyCbs.push(cb);
    if (errorCb) {
      this.readyErrorCbs.push(errorCb);
    }
  }
};

History.prototype.onError = function onError (errorCb) {
  this.errorCbs.push(errorCb);
};

History.prototype.transitionTo = function transitionTo (location, onComplete, onAbort) {
    var this$1 = this;

  var route = this.router.match(location, this.current);
  this.confirmTransition(route, function () {
    this$1.updateRoute(route);
    onComplete && onComplete(route);
    this$1.ensureURL();

    // fire ready cbs once
    if (!this$1.ready) {
      this$1.ready = true;
      this$1.readyCbs.forEach(function (cb) { cb(route); });
    }
  }, function (err) {
    if (onAbort) {
      onAbort(err);
    }
    if (err && !this$1.ready) {
      this$1.ready = true;
      this$1.readyErrorCbs.forEach(function (cb) { cb(err); });
    }
  });
};

History.prototype.confirmTransition = function confirmTransition (route, onComplete, onAbort) {
    var this$1 = this;

  var current = this.current;
  var abort = function (err) {
    if (isError(err)) {
      if (this$1.errorCbs.length) {
        this$1.errorCbs.forEach(function (cb) { cb(err); });
      } else {
        warn(false, 'uncaught error during route navigation:');
        console.error(err);
      }
    }
    onAbort && onAbort(err);
  };
  if (
    isSameRoute(route, current) &&
    // in the case the route map has been dynamically appended to
    route.matched.length === current.matched.length
  ) {
    this.ensureURL();
    return abort()
  }

  var ref = resolveQueue(this.current.matched, route.matched);
    var updated = ref.updated;
    var deactivated = ref.deactivated;
    var activated = ref.activated;

  var queue = [].concat(
    // in-component leave guards
    extractLeaveGuards(deactivated),
    // global before hooks
    this.router.beforeHooks,
    // in-component update hooks
    extractUpdateHooks(updated),
    // in-config enter guards
    activated.map(function (m) { return m.beforeEnter; }),
    // async components
    resolveAsyncComponents(activated)
  );

  this.pending = route;
  var iterator = function (hook, next) {
    if (this$1.pending !== route) {
      return abort()
    }
    try {
      hook(route, current, function (to) {
        if (to === false || isError(to)) {
          // next(false) -> abort navigation, ensure current URL
          this$1.ensureURL(true);
          abort(to);
        } else if (
          typeof to === 'string' ||
          (typeof to === 'object' && (
            typeof to.path === 'string' ||
            typeof to.name === 'string'
          ))
        ) {
          // next('/') or next({ path: '/' }) -> redirect
          abort();
          if (typeof to === 'object' && to.replace) {
            this$1.replace(to);
          } else {
            this$1.push(to);
          }
        } else {
          // confirm transition and pass on the value
          next(to);
        }
      });
    } catch (e) {
      abort(e);
    }
  };

  runQueue(queue, iterator, function () {
    var postEnterCbs = [];
    var isValid = function () { return this$1.current === route; };
    // wait until async components are resolved before
    // extracting in-component enter guards
    var enterGuards = extractEnterGuards(activated, postEnterCbs, isValid);
    var queue = enterGuards.concat(this$1.router.resolveHooks);
    runQueue(queue, iterator, function () {
      if (this$1.pending !== route) {
        return abort()
      }
      this$1.pending = null;
      onComplete(route);
      if (this$1.router.app) {
        this$1.router.app.$nextTick(function () {
          postEnterCbs.forEach(function (cb) { cb(); });
        });
      }
    });
  });
};

History.prototype.updateRoute = function updateRoute (route) {
  var prev = this.current;
  this.current = route;
  this.cb && this.cb(route);
  this.router.afterHooks.forEach(function (hook) {
    hook && hook(route, prev);
  });
};

function normalizeBase (base) {
  if (!base) {
    if (inBrowser) {
      // respect <base> tag
      var baseEl = document.querySelector('base');
      base = (baseEl && baseEl.getAttribute('href')) || '/';
    } else {
      base = '/';
    }
  }
  // make sure there's the starting slash
  if (base.charAt(0) !== '/') {
    base = '/' + base;
  }
  // remove trailing slash
  return base.replace(/\/$/, '')
}

function resolveQueue (
  current,
  next
) {
  var i;
  var max = Math.max(current.length, next.length);
  for (i = 0; i < max; i++) {
    if (current[i] !== next[i]) {
      break
    }
  }
  return {
    updated: next.slice(0, i),
    activated: next.slice(i),
    deactivated: current.slice(i)
  }
}

function extractGuards (
  records,
  name,
  bind,
  reverse
) {
  var guards = flatMapComponents(records, function (def, instance, match, key) {
    var guard = extractGuard(def, name);
    if (guard) {
      return Array.isArray(guard)
        ? guard.map(function (guard) { return bind(guard, instance, match, key); })
        : bind(guard, instance, match, key)
    }
  });
  return flatten(reverse ? guards.reverse() : guards)
}

function extractGuard (
  def,
  key
) {
  if (typeof def !== 'function') {
    // extend now so that global mixins are applied.
    def = _Vue.extend(def);
  }
  return def.options[key]
}

function extractLeaveGuards (deactivated) {
  return extractGuards(deactivated, 'beforeRouteLeave', bindGuard, true)
}

function extractUpdateHooks (updated) {
  return extractGuards(updated, 'beforeRouteUpdate', bindGuard)
}

function bindGuard (guard, instance) {
  if (instance) {
    return function boundRouteGuard () {
      return guard.apply(instance, arguments)
    }
  }
}

function extractEnterGuards (
  activated,
  cbs,
  isValid
) {
  return extractGuards(activated, 'beforeRouteEnter', function (guard, _, match, key) {
    return bindEnterGuard(guard, match, key, cbs, isValid)
  })
}

function bindEnterGuard (
  guard,
  match,
  key,
  cbs,
  isValid
) {
  return function routeEnterGuard (to, from, next) {
    return guard(to, from, function (cb) {
      next(cb);
      if (typeof cb === 'function') {
        cbs.push(function () {
          // #750
          // if a router-view is wrapped with an out-in transition,
          // the instance may not have been registered at this time.
          // we will need to poll for registration until current route
          // is no longer valid.
          poll(cb, match.instances, key, isValid);
        });
      }
    })
  }
}

function poll (
  cb, // somehow flow cannot infer this is a function
  instances,
  key,
  isValid
) {
  if (instances[key]) {
    cb(instances[key]);
  } else if (isValid()) {
    setTimeout(function () {
      poll(cb, instances, key, isValid);
    }, 16);
  }
}

function resolveAsyncComponents (matched) {
  return function (to, from, next) {
    var hasAsync = false;
    var pending = 0;
    var error = null;

    flatMapComponents(matched, function (def, _, match, key) {
      // if it's a function and doesn't have cid attached,
      // assume it's an async component resolve function.
      // we are not using Vue's default async resolving mechanism because
      // we want to halt the navigation until the incoming component has been
      // resolved.
      if (typeof def === 'function' && def.cid === undefined) {
        hasAsync = true;
        pending++;

        var resolve = once(function (resolvedDef) {
          // save resolved on async factory in case it's used elsewhere
          def.resolved = typeof resolvedDef === 'function'
            ? resolvedDef
            : _Vue.extend(resolvedDef);
          match.components[key] = resolvedDef;
          pending--;
          if (pending <= 0) {
            next();
          }
        });

        var reject = once(function (reason) {
          var msg = "Failed to resolve async component " + key + ": " + reason;
          process.env.NODE_ENV !== 'production' && warn(false, msg);
          if (!error) {
            error = isError(reason)
              ? reason
              : new Error(msg);
            next(error);
          }
        });

        var res;
        try {
          res = def(resolve, reject);
        } catch (e) {
          reject(e);
        }
        if (res) {
          if (typeof res.then === 'function') {
            res.then(resolve, reject);
          } else {
            // new syntax in Vue 2.3
            var comp = res.component;
            if (comp && typeof comp.then === 'function') {
              comp.then(resolve, reject);
            }
          }
        }
      }
    });

    if (!hasAsync) { next(); }
  }
}

function flatMapComponents (
  matched,
  fn
) {
  return flatten(matched.map(function (m) {
    return Object.keys(m.components).map(function (key) { return fn(
      m.components[key],
      m.instances[key],
      m, key
    ); })
  }))
}

function flatten (arr) {
  return Array.prototype.concat.apply([], arr)
}

// in Webpack 2, require.ensure now also returns a Promise
// so the resolve/reject functions may get called an extra time
// if the user uses an arrow function shorthand that happens to
// return that Promise.
function once (fn) {
  var called = false;
  return function () {
    if (called) { return }
    called = true;
    return fn.apply(this, arguments)
  }
}

function isError (err) {
  return Object.prototype.toString.call(err).indexOf('Error') > -1
}

/*  */


var HTML5History = (function (History$$1) {
  function HTML5History (router, base) {
    var this$1 = this;

    History$$1.call(this, router, base);

    var expectScroll = router.options.scrollBehavior;

    if (expectScroll) {
      setupScroll();
    }

    window.addEventListener('popstate', function (e) {
      this$1.transitionTo(getLocation(this$1.base), function (route) {
        if (expectScroll) {
          handleScroll(router, route, this$1.current, true);
        }
      });
    });
  }

  if ( History$$1 ) HTML5History.__proto__ = History$$1;
  HTML5History.prototype = Object.create( History$$1 && History$$1.prototype );
  HTML5History.prototype.constructor = HTML5History;

  HTML5History.prototype.go = function go (n) {
    window.history.go(n);
  };

  HTML5History.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      pushState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      replaceState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.ensureURL = function ensureURL (push) {
    if (getLocation(this.base) !== this.current.fullPath) {
      var current = cleanPath(this.base + this.current.fullPath);
      push ? pushState(current) : replaceState(current);
    }
  };

  HTML5History.prototype.getCurrentLocation = function getCurrentLocation () {
    return getLocation(this.base)
  };

  return HTML5History;
}(History));

function getLocation (base) {
  var path = window.location.pathname;
  if (base && path.indexOf(base) === 0) {
    path = path.slice(base.length);
  }
  return (path || '/') + window.location.search + window.location.hash
}

/*  */


var HashHistory = (function (History$$1) {
  function HashHistory (router, base, fallback) {
    History$$1.call(this, router, base);
    // check history fallback deeplinking
    if (fallback && checkFallback(this.base)) {
      return
    }
    ensureSlash();
  }

  if ( History$$1 ) HashHistory.__proto__ = History$$1;
  HashHistory.prototype = Object.create( History$$1 && History$$1.prototype );
  HashHistory.prototype.constructor = HashHistory;

  // this is delayed until the app mounts
  // to avoid the hashchange listener being fired too early
  HashHistory.prototype.setupListeners = function setupListeners () {
    var this$1 = this;

    window.addEventListener('hashchange', function () {
      if (!ensureSlash()) {
        return
      }
      this$1.transitionTo(getHash(), function (route) {
        replaceHash(route.fullPath);
      });
    });
  };

  HashHistory.prototype.push = function push (location, onComplete, onAbort) {
    this.transitionTo(location, function (route) {
      pushHash(route.fullPath);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    this.transitionTo(location, function (route) {
      replaceHash(route.fullPath);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.go = function go (n) {
    window.history.go(n);
  };

  HashHistory.prototype.ensureURL = function ensureURL (push) {
    var current = this.current.fullPath;
    if (getHash() !== current) {
      push ? pushHash(current) : replaceHash(current);
    }
  };

  HashHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    return getHash()
  };

  return HashHistory;
}(History));

function checkFallback (base) {
  var location = getLocation(base);
  if (!/^\/#/.test(location)) {
    window.location.replace(
      cleanPath(base + '/#' + location)
    );
    return true
  }
}

function ensureSlash () {
  var path = getHash();
  if (path.charAt(0) === '/') {
    return true
  }
  replaceHash('/' + path);
  return false
}

function getHash () {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var index = href.indexOf('#');
  return index === -1 ? '' : href.slice(index + 1)
}

function pushHash (path) {
  window.location.hash = path;
}

function replaceHash (path) {
  var i = window.location.href.indexOf('#');
  window.location.replace(
    window.location.href.slice(0, i >= 0 ? i : 0) + '#' + path
  );
}

/*  */


var AbstractHistory = (function (History$$1) {
  function AbstractHistory (router, base) {
    History$$1.call(this, router, base);
    this.stack = [];
    this.index = -1;
  }

  if ( History$$1 ) AbstractHistory.__proto__ = History$$1;
  AbstractHistory.prototype = Object.create( History$$1 && History$$1.prototype );
  AbstractHistory.prototype.constructor = AbstractHistory;

  AbstractHistory.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index + 1).concat(route);
      this$1.index++;
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index).concat(route);
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.go = function go (n) {
    var this$1 = this;

    var targetIndex = this.index + n;
    if (targetIndex < 0 || targetIndex >= this.stack.length) {
      return
    }
    var route = this.stack[targetIndex];
    this.confirmTransition(route, function () {
      this$1.index = targetIndex;
      this$1.updateRoute(route);
    });
  };

  AbstractHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    var current = this.stack[this.stack.length - 1];
    return current ? current.fullPath : '/'
  };

  AbstractHistory.prototype.ensureURL = function ensureURL () {
    // noop
  };

  return AbstractHistory;
}(History));

/*  */

var VueRouter = function VueRouter (options) {
  if ( options === void 0 ) options = {};

  this.app = null;
  this.apps = [];
  this.options = options;
  this.beforeHooks = [];
  this.resolveHooks = [];
  this.afterHooks = [];
  this.matcher = createMatcher(options.routes || [], this);

  var mode = options.mode || 'hash';
  this.fallback = mode === 'history' && !supportsPushState;
  if (this.fallback) {
    mode = 'hash';
  }
  if (!inBrowser) {
    mode = 'abstract';
  }
  this.mode = mode;

  switch (mode) {
    case 'history':
      this.history = new HTML5History(this, options.base);
      break
    case 'hash':
      this.history = new HashHistory(this, options.base, this.fallback);
      break
    case 'abstract':
      this.history = new AbstractHistory(this, options.base);
      break
    default:
      if (process.env.NODE_ENV !== 'production') {
        assert(false, ("invalid mode: " + mode));
      }
  }
};

var prototypeAccessors = { currentRoute: {} };

VueRouter.prototype.match = function match (
  raw,
  current,
  redirectedFrom
) {
  return this.matcher.match(raw, current, redirectedFrom)
};

prototypeAccessors.currentRoute.get = function () {
  return this.history && this.history.current
};

VueRouter.prototype.init = function init (app /* Vue component instance */) {
    var this$1 = this;

  process.env.NODE_ENV !== 'production' && assert(
    install.installed,
    "not installed. Make sure to call `Vue.use(VueRouter)` " +
    "before creating root instance."
  );

  this.apps.push(app);

  // main app already initialized.
  if (this.app) {
    return
  }

  this.app = app;

  var history = this.history;

  if (history instanceof HTML5History) {
    history.transitionTo(history.getCurrentLocation());
  } else if (history instanceof HashHistory) {
    var setupHashListener = function () {
      history.setupListeners();
    };
    history.transitionTo(
      history.getCurrentLocation(),
      setupHashListener,
      setupHashListener
    );
  }

  history.listen(function (route) {
    this$1.apps.forEach(function (app) {
      app._route = route;
    });
  });
};

VueRouter.prototype.beforeEach = function beforeEach (fn) {
  return registerHook(this.beforeHooks, fn)
};

VueRouter.prototype.beforeResolve = function beforeResolve (fn) {
  return registerHook(this.resolveHooks, fn)
};

VueRouter.prototype.afterEach = function afterEach (fn) {
  return registerHook(this.afterHooks, fn)
};

VueRouter.prototype.onReady = function onReady (cb, errorCb) {
  this.history.onReady(cb, errorCb);
};

VueRouter.prototype.onError = function onError (errorCb) {
  this.history.onError(errorCb);
};

VueRouter.prototype.push = function push (location, onComplete, onAbort) {
  this.history.push(location, onComplete, onAbort);
};

VueRouter.prototype.replace = function replace (location, onComplete, onAbort) {
  this.history.replace(location, onComplete, onAbort);
};

VueRouter.prototype.go = function go (n) {
  this.history.go(n);
};

VueRouter.prototype.back = function back () {
  this.go(-1);
};

VueRouter.prototype.forward = function forward () {
  this.go(1);
};

VueRouter.prototype.getMatchedComponents = function getMatchedComponents (to) {
  var route = to
    ? to.matched
      ? to
      : this.resolve(to).route
    : this.currentRoute;
  if (!route) {
    return []
  }
  return [].concat.apply([], route.matched.map(function (m) {
    return Object.keys(m.components).map(function (key) {
      return m.components[key]
    })
  }))
};

VueRouter.prototype.resolve = function resolve (
  to,
  current,
  append
) {
  var location = normalizeLocation(
    to,
    current || this.history.current,
    append,
    this
  );
  var route = this.match(location, current);
  var fullPath = route.redirectedFrom || route.fullPath;
  var base = this.history.base;
  var href = createHref(base, fullPath, this.mode);
  return {
    location: location,
    route: route,
    href: href,
    // for backwards compat
    normalizedTo: location,
    resolved: route
  }
};

VueRouter.prototype.addRoutes = function addRoutes (routes) {
  this.matcher.addRoutes(routes);
  if (this.history.current !== START) {
    this.history.transitionTo(this.history.getCurrentLocation());
  }
};

Object.defineProperties( VueRouter.prototype, prototypeAccessors );

function registerHook (list, fn) {
  list.push(fn);
  return function () {
    var i = list.indexOf(fn);
    if (i > -1) { list.splice(i, 1); }
  }
}

function createHref (base, fullPath, mode) {
  var path = mode === 'hash' ? '#' + fullPath : fullPath;
  return base ? cleanPath(base + '/' + path) : path
}

VueRouter.install = install;
VueRouter.version = '2.5.3';

if (inBrowser && window.Vue) {
  window.Vue.use(VueRouter);
}

module.exports = VueRouter;

}).call(this,require('_process'))
},{"_process":20}],22:[function(require,module,exports){
(function (process,global){
/*!
 * Vue.js v2.3.3
 * (c) 2014-2017 Evan You
 * Released under the MIT License.
 */
'use strict';

/*  */

// these helpers produces better vm code in JS engines due to their
// explicitness and function inlining
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}
/**
 * Check if value is primitive
 */
function isPrimitive (value) {
  return typeof value === 'string' || typeof value === 'number'
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

var _toString = Object.prototype.toString;

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : typeof val === 'object'
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert a input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Remove an item from an array
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether the object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /([^-])([A-Z])/g;
var hyphenate = cached(function (str) {
  return str
    .replace(hyphenateRE, '$1-$2')
    .replace(hyphenateRE, '$1-$2')
    .toLowerCase()
});

/**
 * Simple bind, faster than native
 */
function bind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }
  // record original fn length
  boundFn._length = fn.length;
  return boundFn
}

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/**
 * Perform no operation.
 */
function noop () {}

/**
 * Always return false.
 */
var no = function () { return false; };

/**
 * Return same value
 */
var identity = function (_) { return _; };

/**
 * Generate a static keys string from compiler modules.
 */


/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      return JSON.stringify(a) === JSON.stringify(b)
    } catch (e) {
      // possible circular reference
      return a === b
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var SSR_ATTR = 'data-server-rendered';

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated'
];

/*  */

var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: process.env.NODE_ENV !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: process.env.NODE_ENV !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

var emptyObject = Object.freeze({});

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = /[^\w.$]/;
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

var warn = noop;
var tip = noop;
var formatComponentName = (null); // work around flow check

if (process.env.NODE_ENV !== 'production') {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.error("[Vue warn]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      return '<Root>'
    }
    var name = typeof vm === 'string'
      ? vm
      : typeof vm === 'function' && vm.options
        ? vm.options.name
        : vm._isVue
          ? vm.$options.name || vm.$options._componentTag
          : vm.name;

    var file = vm._isVue && vm.$options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  var generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

function handleError (err, vm, info) {
  if (config.errorHandler) {
    config.errorHandler.call(null, err, vm, info);
  } else {
    if (process.env.NODE_ENV !== 'production') {
      warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
    }
    /* istanbul ignore else */
    if (inBrowser && typeof console !== 'undefined') {
      console.error(err);
    } else {
      throw err
    }
  }
}

/*  */
/* globals MutationObserver */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = UA && UA.indexOf('android') > 0;
var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA);
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;

var supportsPassive = false;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    } )); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

/**
 * Defer a task to execute it asynchronously.
 */
var nextTick = (function () {
  var callbacks = [];
  var pending = false;
  var timerFunc;

  function nextTickHandler () {
    pending = false;
    var copies = callbacks.slice(0);
    callbacks.length = 0;
    for (var i = 0; i < copies.length; i++) {
      copies[i]();
    }
  }

  // the nextTick behavior leverages the microtask queue, which can be accessed
  // via either native Promise.then or MutationObserver.
  // MutationObserver has wider support, however it is seriously bugged in
  // UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
  // completely stops working after triggering a few times... so, if native
  // Promise is available, we will use it:
  /* istanbul ignore if */
  if (typeof Promise !== 'undefined' && isNative(Promise)) {
    var p = Promise.resolve();
    var logError = function (err) { console.error(err); };
    timerFunc = function () {
      p.then(nextTickHandler).catch(logError);
      // in problematic UIWebViews, Promise.then doesn't completely break, but
      // it can get stuck in a weird state where callbacks are pushed into the
      // microtask queue but the queue isn't being flushed, until the browser
      // needs to do some other work, e.g. handle a timer. Therefore we can
      // "force" the microtask queue to be flushed by adding an empty timer.
      if (isIOS) { setTimeout(noop); }
    };
  } else if (typeof MutationObserver !== 'undefined' && (
    isNative(MutationObserver) ||
    // PhantomJS and iOS 7.x
    MutationObserver.toString() === '[object MutationObserverConstructor]'
  )) {
    // use MutationObserver where native Promise is not available,
    // e.g. PhantomJS IE11, iOS7, Android 4.4
    var counter = 1;
    var observer = new MutationObserver(nextTickHandler);
    var textNode = document.createTextNode(String(counter));
    observer.observe(textNode, {
      characterData: true
    });
    timerFunc = function () {
      counter = (counter + 1) % 2;
      textNode.data = String(counter);
    };
  } else {
    // fallback to setTimeout
    /* istanbul ignore next */
    timerFunc = function () {
      setTimeout(nextTickHandler, 0);
    };
  }

  return function queueNextTick (cb, ctx) {
    var _resolve;
    callbacks.push(function () {
      if (cb) {
        try {
          cb.call(ctx);
        } catch (e) {
          handleError(e, ctx, 'nextTick');
        }
      } else if (_resolve) {
        _resolve(ctx);
      }
    });
    if (!pending) {
      pending = true;
      timerFunc();
    }
    if (!cb && typeof Promise !== 'undefined') {
      return new Promise(function (resolve, reject) {
        _resolve = resolve;
      })
    }
  }
})();

var _Set;
/* istanbul ignore if */
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = (function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */


var uid$1 = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid$1++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// the current target watcher being evaluated.
// this is globally unique because there could be only one
// watcher being evaluated at any time.
Dep.target = null;
var targetStack = [];

function pushTarget (_target) {
  if (Dep.target) { targetStack.push(Dep.target); }
  Dep.target = _target;
}

function popTarget () {
  Dep.target = targetStack.pop();
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);[
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
]
.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var arguments$1 = arguments;

    // avoid leaking arguments:
    // http://jsperf.com/closure-with-arguments
    var i = arguments.length;
    var args = new Array(i);
    while (i--) {
      args[i] = arguments$1[i];
    }
    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
        inserted = args;
        break
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * By default, when a reactive property is set, the new value is
 * also converted to become reactive. However when passing down props,
 * we don't want to force conversion because the value may be a nested value
 * under a frozen data structure. Converting it would defeat the optimization.
 */
var observerState = {
  shouldConvert: true,
  isSettingProps: false
};

/**
 * Observer class that are attached to each observed
 * object. Once attached, the observer converts target
 * object's property keys into getter/setters that
 * collect dependencies and dispatches updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    var augment = hasProto
      ? protoAugment
      : copyAugment;
    augment(value, arrayMethods, arrayKeys);
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through each property and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i], obj[keys[i]]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment an target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment an target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value)) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    observerState.shouldConvert &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;

  var childOb = observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
        }
        if (Array.isArray(value)) {
          dependArray(value);
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if (process.env.NODE_ENV !== 'production' && customSetter) {
        customSetter();
      }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if (Array.isArray(target) && typeof key === 'number') {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (hasOwn(target, key)) {
    target[key] = val;
    return val
  }
  var ob = (target ).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    process.env.NODE_ENV !== 'production' && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if (Array.isArray(target) && typeof key === 'number') {
    target.splice(key, 1);
    return
  }
  var ob = (target ).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    process.env.NODE_ENV !== 'production' && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (process.env.NODE_ENV !== 'production') {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;
  var keys = Object.keys(from);
  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (isPlainObject(toVal) && isPlainObject(fromVal)) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (typeof childVal !== 'function') {
      process.env.NODE_ENV !== 'production' && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        childVal.call(this),
        parentVal.call(this)
      )
    }
  } else if (parentVal || childVal) {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm)
        : undefined;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  return childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (parentVal, childVal) {
  var res = Object.create(parentVal || null);
  return childVal
    ? extend(res, childVal)
    : res
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (parentVal, childVal) {
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key in childVal) {
    var parent = ret[key];
    var child = childVal[key];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key] = parent
      ? parent.concat(child)
      : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.computed = function (parentVal, childVal) {
  if (!childVal) { return Object.create(parentVal || null) }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  extend(ret, childVal);
  return ret
};

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    var lower = key.toLowerCase();
    if (isBuiltInTag(lower) || config.isReservedTag(lower)) {
      warn(
        'Do not use built-in or reserved HTML elements as component ' +
        'id: ' + key
      );
    }
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (process.env.NODE_ENV !== 'production') {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  }
  options.props = res;
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def = dirs[key];
      if (typeof def === 'function') {
        dirs[key] = { bind: def, update: def };
      }
    }
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (process.env.NODE_ENV !== 'production') {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child);
  normalizeDirectives(child);
  var extendsFrom = child.extends;
  if (extendsFrom) {
    parent = mergeOptions(parent, extendsFrom, vm);
  }
  if (child.mixins) {
    for (var i = 0, l = child.mixins.length; i < l; i++) {
      parent = mergeOptions(parent, child.mixins[i], vm);
    }
  }
  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if (process.env.NODE_ENV !== 'production' && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */

function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // handle boolean props
  if (isType(Boolean, prop.type)) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (!isType(String, prop.type) && (value === '' || value === hyphenate(key))) {
      value = true;
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldConvert = observerState.shouldConvert;
    observerState.shouldConvert = true;
    observe(value);
    observerState.shouldConvert = prevShouldConvert;
  }
  if (process.env.NODE_ENV !== 'production') {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if (process.env.NODE_ENV !== 'production' && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }
  if (!valid) {
    warn(
      'Invalid prop: type check failed for prop "' + name + '".' +
      ' Expected ' + expectedTypes.map(capitalize).join(', ') +
      ', got ' + Object.prototype.toString.call(value).slice(8, -1) + '.',
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    valid = typeof value === expectedType.toLowerCase();
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isType (type, fn) {
  if (!Array.isArray(fn)) {
    return getType(fn) === getType(type)
  }
  for (var i = 0, len = fn.length; i < len; i++) {
    if (getType(fn[i]) === getType(type)) {
      return true
    }
  }
  /* istanbul ignore next */
  return false
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (process.env.NODE_ENV !== 'production') {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      "referenced during render. Make sure to declare reactive data " +
      "properties in the data option.",
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' &&
    Proxy.toString().match(/native code/);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) || key.charAt(0) === '_';
      if (!has && !isAllowed) {
        warnNonPresent(target, key);
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        warnNonPresent(target, key);
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

var mark;
var measure;

if (process.env.NODE_ENV !== 'production') {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      perf.clearMeasures(name);
    };
  }
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.functionalContext = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
};

var prototypeAccessors = { child: {} };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function () {
  var node = new VNode();
  node.text = '';
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    vnode.children,
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.isCloned = true;
  return cloned
}

function cloneVNodes (vnodes) {
  var len = vnodes.length;
  var res = new Array(len);
  for (var i = 0; i < len; i++) {
    res[i] = cloneVNode(vnodes[i]);
  }
  return res
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      for (var i = 0; i < fns.length; i++) {
        fns[i].apply(null, arguments$1);
      }
    } else {
      // return handler return value for single handlers
      return fns.apply(null, arguments)
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  vm
) {
  var name, cur, old, event;
  for (name in on) {
    cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
      process.env.NODE_ENV !== 'production' && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur);
      }
      add(event.name, cur, event.once, event.capture, event.passive);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

function mergeVNodeHook (def, hookKey, hook) {
  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook () {
    hook.apply(this, arguments);
    // important: remove merged hook to ensure it's called only once
    // and prevent memory leak
    remove(invoker.fns, wrappedHook);
  }

  if (isUndef(oldHook)) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}

/*  */

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (process.env.NODE_ENV !== 'production') {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    last = res[res.length - 1];
    //  nested
    if (Array.isArray(c)) {
      res.push.apply(res, normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i)));
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        (last).text += String(c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[res.length - 1] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function ensureCtor (comp, base) {
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function resolveAsyncComponent (
  factory,
  baseCtor,
  context
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (isDef(factory.contexts)) {
    // already pending
    factory.contexts.push(context);
  } else {
    var contexts = factory.contexts = [context];
    var sync = true;

    var forceRender = function () {
      for (var i = 0, l = contexts.length; i < l; i++) {
        contexts[i].$forceUpdate();
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender();
      }
    });

    var reject = once(function (reason) {
      process.env.NODE_ENV !== 'production' && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender();
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (typeof res.then === 'function') {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isDef(res.component) && typeof res.component.then === 'function') {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            setTimeout(function () {
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender();
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          setTimeout(function () {
            if (isUndef(factory.resolved)) {
              reject(
                process.env.NODE_ENV !== 'production'
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : null
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && isDef(c.componentOptions)) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn, once$$1) {
  if (once$$1) {
    target.$once(event, fn);
  } else {
    target.$on(event, fn);
  }
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, vm);
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var this$1 = this;

    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        this$1.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var this$1 = this;

    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        this$1.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (arguments.length === 1) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (process.env.NODE_ENV !== 'production') {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      for (var i = 0, l = cbs.length; i < l; i++) {
        cbs[i].apply(vm, args);
      }
    }
    return vm
  };
}

/*  */

/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  var slots = {};
  if (!children) {
    return slots
  }
  var defaultSlot = [];
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.functionalContext === context) &&
      child.data && child.data.slot != null
    ) {
      var name = child.data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children);
      } else {
        slot.push(child);
      }
    } else {
      defaultSlot.push(child);
    }
  }
  // ignore whitespace
  if (!defaultSlot.every(isWhitespace)) {
    slots.default = defaultSlot;
  }
  return slots
}

function isWhitespace (node) {
  return node.isComment || node.text === ' '
}

function resolveScopedSlots (
  fns, // see flow/vnode
  res
) {
  res = res || {};
  for (var i = 0; i < fns.length; i++) {
    if (Array.isArray(fns[i])) {
      resolveScopedSlots(fns[i], res);
    } else {
      res[fns[i].key] = fns[i].fn;
    }
  }
  return res
}

/*  */

var activeInstance = null;

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    if (vm._isMounted) {
      callHook(vm, 'beforeUpdate');
    }
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var prevActiveInstance = activeInstance;
    activeInstance = vm;
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(
        vm.$el, vnode, hydrating, false /* removeOnly */,
        vm.$options._parentElm,
        vm.$options._refElm
      );
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    activeInstance = prevActiveInstance;
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // remove reference to DOM nodes (prevents leak)
    vm.$options._parentElm = vm.$options._refElm = null;
  };
}

function mountComponent (
  vm,
  el,
  hydrating
) {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
    if (process.env.NODE_ENV !== 'production') {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  callHook(vm, 'beforeMount');

  var updateComponent;
  /* istanbul ignore if */
  if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
    updateComponent = function () {
      var name = vm._name;
      var id = vm._uid;
      var startTag = "vue-perf-start:" + id;
      var endTag = "vue-perf-end:" + id;

      mark(startTag);
      var vnode = vm._render();
      mark(endTag);
      measure((name + " render"), startTag, endTag);

      mark(startTag);
      vm._update(vnode, hydrating);
      mark(endTag);
      measure((name + " patch"), startTag, endTag);
    };
  } else {
    updateComponent = function () {
      vm._update(vm._render(), hydrating);
    };
  }

  vm._watcher = new Watcher(vm, updateComponent, noop);
  hydrating = false;

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }
  return vm
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren
  var hasChildren = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    parentVnode.data.scopedSlots || // has new scoped slots
    vm.$scopedSlots !== emptyObject // has old scoped slots
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render
  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update props
  if (propsData && vm.$options.props) {
    observerState.shouldConvert = false;
    if (process.env.NODE_ENV !== 'production') {
      observerState.isSettingProps = true;
    }
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      props[key] = validateProp(key, vm.$options.props, propsData, vm);
    }
    observerState.shouldConvert = true;
    if (process.env.NODE_ENV !== 'production') {
      observerState.isSettingProps = false;
    }
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }
  // update listeners
  if (listeners) {
    var oldListeners = vm.$options._parentListeners;
    vm.$options._parentListeners = listeners;
    updateComponentListeners(vm, listeners, oldListeners);
  }
  // resolve slots + force update if has children
  if (hasChildren) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  var handlers = vm.$options[hook];
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      try {
        handlers[i].call(vm);
      } catch (e) {
        handleError(e, vm, (hook + " hook"));
      }
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
}

/*  */


var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (process.env.NODE_ENV !== 'production') {
    circular = {};
  }
  waiting = flushing = false;
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if (process.env.NODE_ENV !== 'production' && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdateHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdateHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */

var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options
) {
  this.vm = vm;
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression = process.env.NODE_ENV !== 'production'
    ? expOrFn.toString()
    : '';
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = function () {};
      process.env.NODE_ENV !== 'production' && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  if (this.user) {
    try {
      value = this.getter.call(vm, vm);
    } catch (e) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    }
  } else {
    value = this.getter.call(vm, vm);
  }
  // "touch" every property so they are all tracked as
  // dependencies for deep watching
  if (this.deep) {
    traverse(value);
  }
  popTarget();
  this.cleanupDeps();
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    var dep = this$1.deps[i];
    if (!this$1.newDepIds.has(dep.id)) {
      dep.removeSub(this$1);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    this$1.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
    var this$1 = this;

  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this$1.deps[i].removeSub(this$1);
    }
    this.active = false;
  }
};

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
var seenObjects = new _Set();
function traverse (val) {
  seenObjects.clear();
  _traverse(val, seenObjects);
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || !Object.isExtensible(val)) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch) { initWatch(vm, opts.watch); }
}

var isReservedProp = {
  key: 1,
  ref: 1,
  slot: 1
};

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  observerState.shouldConvert = isRoot;
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (process.env.NODE_ENV !== 'production') {
      if (isReservedProp[key] || config.isReservedAttr(key)) {
        warn(
          ("\"" + key + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (vm.$parent && !observerState.isSettingProps) {
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {
      defineReactive$$1(props, key, value);
    }
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  observerState.shouldConvert = true;
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
    process.env.NODE_ENV !== 'production' && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var i = keys.length;
  while (i--) {
    if (props && hasOwn(props, keys[i])) {
      process.env.NODE_ENV !== 'production' && warn(
        "The data property \"" + (keys[i]) + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(keys[i])) {
      proxy(vm, "_data", keys[i]);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  try {
    return data.call(vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  var watchers = vm._computedWatchers = Object.create(null);

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if (process.env.NODE_ENV !== 'production') {
      if (getter === undefined) {
        warn(
          ("No getter function has been defined for computed property \"" + key + "\"."),
          vm
        );
        getter = noop;
      }
    }
    // create internal watcher for the computed property.
    watchers[key] = new Watcher(vm, getter, noop, computedWatcherOptions);

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (process.env.NODE_ENV !== 'production') {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (target, key, userDef) {
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = createComputedGetter(key);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? userDef.cache !== false
        ? createComputedGetter(key)
        : userDef.get
      : noop;
    sharedPropertyDefinition.set = userDef.set
      ? userDef.set
      : noop;
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    vm[key] = methods[key] == null ? noop : bind(methods[key], vm);
    if (process.env.NODE_ENV !== 'production') {
      if (methods[key] == null) {
        warn(
          "method \"" + key + "\" has an undefined value in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
    }
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (vm, key, handler) {
  var options;
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  vm.$watch(key, handler, options);
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (process.env.NODE_ENV !== 'production') {
    dataDef.set = function (newData) {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      cb.call(vm, watcher.value);
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (process.env.NODE_ENV !== 'production') {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {
        defineReactive$$1(vm, key, result[key]);
      }
    });
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    // isArray here
    var isArray = Array.isArray(inject);
    var result = Object.create(null);
    var keys = isArray
      ? inject
      : hasSymbol
        ? Reflect.ownKeys(inject)
        : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var provideKey = isArray ? key : inject[key];
      var source = vm;
      while (source) {
        if (source._provided && provideKey in source._provided) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
    }
    return result
  }
}

/*  */

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  context,
  children
) {
  var props = {};
  var propOptions = Ctor.options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || {});
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var _context = Object.create(context);
  var h = function (a, b, c, d) { return createElement(_context, a, b, c, d, true); };
  var vnode = Ctor.options.render.call(null, h, {
    data: data,
    props: props,
    children: children,
    parent: context,
    listeners: data.on || {},
    injections: resolveInject(Ctor.options.inject, context),
    slots: function () { return resolveSlots(children, context); }
  });
  if (vnode instanceof VNode) {
    vnode.functionalContext = context;
    vnode.functionalOptions = Ctor.options;
    if (data.slot) {
      (vnode.data || (vnode.data = {})).slot = data.slot;
    }
  }
  return vnode
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

// hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (
    vnode,
    hydrating,
    parentElm,
    refElm
  ) {
    if (!vnode.componentInstance || vnode.componentInstance._isDestroyed) {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance,
        parentElm,
        refElm
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    } else if (vnode.data.keepAlive) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (process.env.NODE_ENV !== 'production') {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  if (isUndef(Ctor.cid)) {
    Ctor = resolveAsyncComponent(Ctor, baseCtor, context);
    if (Ctor === undefined) {
      // return nothing if this is indeed an async component
      // wait for the callback to trigger parent update.
      return
    }
  }

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  data = data || {};

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners
    data = {};
  }

  // merge component management hooks onto the placeholder node
  mergeHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children }
  );
  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent, // activeInstance in lifecycle state
  parentElm,
  refElm
) {
  var vnodeComponentOptions = vnode.componentOptions;
  var options = {
    _isComponent: true,
    parent: parent,
    propsData: vnodeComponentOptions.propsData,
    _componentTag: vnodeComponentOptions.tag,
    _parentVnode: vnode,
    _parentListeners: vnodeComponentOptions.listeners,
    _renderChildren: vnodeComponentOptions.children,
    _parentElm: parentElm || null,
    _refElm: refElm || null
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnodeComponentOptions.Ctor(options)
}

function mergeHooks (data) {
  if (!data.hook) {
    data.hook = {};
  }
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var fromParent = data.hook[key];
    var ours = componentVNodeHooks[key];
    data.hook[key] = fromParent ? mergeHook$1(ours, fromParent) : ours;
  }
}

function mergeHook$1 (one, two) {
  return function (a, b, c, d) {
    one(a, b, c, d);
    two(a, b, c, d);
  }
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input';(data.props || (data.props = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  if (isDef(on[event])) {
    on[event] = [data.model.callback].concat(on[event]);
  } else {
    on[event] = data.model.callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
    process.env.NODE_ENV !== 'production' && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if (isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (isDef(vnode)) {
    if (ns) { applyNS(vnode, ns); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    return
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && isUndef(child.ns)) {
        applyNS(child, ns);
      }
    }
  }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    keys = Object.keys(val);
    ret = new Array(keys.length);
    for (i = 0, l = keys.length; i < l; i++) {
      key = keys[i];
      ret[i] = render(val[key], key, i);
    }
  }
  if (isDef(ret)) {
    (ret)._isVList = true;
  }
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      extend(props, bindObject);
    }
    return scopedSlotFn(props) || fallback
  } else {
    var slotNodes = this.$slots[name];
    // warn duplicate slot usage
    if (slotNodes && process.env.NODE_ENV !== 'production') {
      slotNodes._rendered && warn(
        "Duplicate presence of slot \"" + name + "\" found in the same render tree " +
        "- this will likely cause render errors.",
        this
      );
      slotNodes._rendered = true;
    }
    return slotNodes || fallback
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

/**
 * Runtime helper for checking keyCodes from config.
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInAlias
) {
  var keyCodes = config.keyCodes[key] || builtInAlias;
  if (Array.isArray(keyCodes)) {
    return keyCodes.indexOf(eventKeyCode) === -1
  } else {
    return keyCodes !== eventKeyCode
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp
) {
  if (value) {
    if (!isObject(value)) {
      process.env.NODE_ENV !== 'production' && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      for (var key in value) {
        if (key === 'class' || key === 'style') {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        if (!(key in hash)) {
          hash[key] = value[key];
        }
      }
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var tree = this._staticTrees[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree by doing a shallow clone.
  if (tree && !isInFor) {
    return Array.isArray(tree)
      ? cloneVNodes(tree)
      : cloneVNode(tree)
  }
  // otherwise, render a fresh tree.
  tree = this._staticTrees[index] =
    this.$options.staticRenderFns[index].call(this._renderProxy);
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null;
  var parentVnode = vm.$vnode = vm.$options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(vm.$options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };
}

function renderMixin (Vue) {
  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var staticRenderFns = ref.staticRenderFns;
    var _parentVnode = ref._parentVnode;

    if (vm._isMounted) {
      // clone slot nodes on re-renders
      for (var key in vm.$slots) {
        vm.$slots[key] = cloneVNodes(vm.$slots[key]);
      }
    }

    vm.$scopedSlots = (_parentVnode && _parentVnode.data.scopedSlots) || emptyObject;

    if (staticRenderFns && !vm._staticTrees) {
      vm._staticTrees = [];
    }
    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render function");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if (process.env.NODE_ENV !== 'production') {
        vnode = vm.$options.renderError
          ? vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e)
          : vm._vnode;
      } else {
        vnode = vm._vnode;
      }
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if (process.env.NODE_ENV !== 'production' && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };

  // internal render helpers.
  // these are exposed on the instance prototype to reduce generated render
  // code size.
  Vue.prototype._o = markOnce;
  Vue.prototype._n = toNumber;
  Vue.prototype._s = toString;
  Vue.prototype._l = renderList;
  Vue.prototype._t = renderSlot;
  Vue.prototype._q = looseEqual;
  Vue.prototype._i = looseIndexOf;
  Vue.prototype._m = renderStatic;
  Vue.prototype._f = resolveFilter;
  Vue.prototype._k = checkKeyCodes;
  Vue.prototype._b = bindObjectProps;
  Vue.prototype._v = createTextVNode;
  Vue.prototype._e = createEmptyVNode;
  Vue.prototype._u = resolveScopedSlots;
}

/*  */

var uid = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid++;

    var startTag, endTag;
    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
      startTag = "vue-perf-init:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (process.env.NODE_ENV !== 'production') {
      initProxy(vm);
    } else {
      vm._renderProxy = vm;
    }
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props
    initState(vm);
    initProvide(vm); // resolve provide after data/props
    callHook(vm, 'created');

    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(((vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  opts.parent = options.parent;
  opts.propsData = options.propsData;
  opts._parentVnode = options._parentVnode;
  opts._parentListeners = options._parentListeners;
  opts._renderChildren = options._renderChildren;
  opts._componentTag = options._componentTag;
  opts._parentElm = options._parentElm;
  opts._refElm = options._refElm;
  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var extended = Ctor.extendOptions;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = dedupe(latest[key], extended[key], sealed[key]);
    }
  }
  return modified
}

function dedupe (latest, extended, sealed) {
  // compare latest and sealed to ensure lifecycle hooks won't be duplicated
  // between merges
  if (Array.isArray(latest)) {
    var res = [];
    sealed = Array.isArray(sealed) ? sealed : [sealed];
    extended = Array.isArray(extended) ? extended : [extended];
    for (var i = 0; i < latest.length; i++) {
      // push original options and not sealed options to exclude duplicated options
      if (extended.indexOf(latest[i]) >= 0 || sealed.indexOf(latest[i]) < 0) {
        res.push(latest[i]);
      }
    }
    return res
  } else {
    return latest
  }
}

function Vue$3 (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue$3)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue$3);
stateMixin(Vue$3);
eventsMixin(Vue$3);
lifecycleMixin(Vue$3);
renderMixin(Vue$3);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    /* istanbul ignore if */
    if (plugin.installed) {
      return this
    }
    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    plugin.installed = true;
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if (process.env.NODE_ENV !== 'production') {
      if (!/^[a-zA-Z][\w-]*$/.test(name)) {
        warn(
          'Invalid component name: "' + name + '". Component names ' +
          'can only contain alphanumeric characters and the hyphen, ' +
          'and must start with a letter.'
        );
      }
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if (process.env.NODE_ENV !== 'production') {
          if (type === 'component' && config.isReservedTag(id)) {
            warn(
              'Do not use built-in or reserved HTML elements as component ' +
              'id: ' + id
            );
          }
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */

var patternTypes = [String, RegExp];

function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (cache, current, filter) {
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        if (cachedNode !== current) {
          pruneCacheEntry(cachedNode);
        }
        cache[key] = null;
      }
    }
  }
}

function pruneCacheEntry (vnode) {
  if (vnode) {
    vnode.componentInstance.$destroy();
  }
}

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes
  },

  created: function created () {
    this.cache = Object.create(null);
  },

  destroyed: function destroyed () {
    var this$1 = this;

    for (var key in this$1.cache) {
      pruneCacheEntry(this$1.cache[key]);
    }
  },

  watch: {
    include: function include (val) {
      pruneCache(this.cache, this._vnode, function (name) { return matches(val, name); });
    },
    exclude: function exclude (val) {
      pruneCache(this.cache, this._vnode, function (name) { return !matches(val, name); });
    }
  },

  render: function render () {
    var vnode = getFirstComponentChild(this.$slots.default);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      if (name && (
        (this.include && !matches(this.include, name)) ||
        (this.exclude && matches(this.exclude, name))
      )) {
        return vnode
      }
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (this.cache[key]) {
        vnode.componentInstance = this.cache[key].componentInstance;
      } else {
        this.cache[key] = vnode;
      }
      vnode.data.keepAlive = true;
    }
    return vnode
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (process.env.NODE_ENV !== 'production') {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue$3);

Object.defineProperty(Vue$3.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue$3.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode.ssrContext
  }
});

Vue$3.version = '2.3.3';

/*  */

// these are reserved for web because they are directly compiled away
// during template compilation
var isReservedAttr = makeMap('style,class');

// attributes that should be using props for binding
var acceptValue = makeMap('input,textarea,option,select');
var mustUseProp = function (tag, type, attr) {
  return (
    (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
    (attr === 'selected' && tag === 'option') ||
    (attr === 'checked' && tag === 'input') ||
    (attr === 'muted' && tag === 'video')
  )
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

var isBooleanAttr = makeMap(
  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
  'required,reversed,scoped,seamless,selected,sortable,translate,' +
  'truespeed,typemustmatch,visible'
);

var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function (name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
};

var getXlinkProp = function (name) {
  return isXlink(name) ? name.slice(6, name.length) : ''
};

var isFalsyAttrValue = function (val) {
  return val == null || val === false
};

/*  */

function genClassForVnode (vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;
  while (isDef(childNode.componentInstance)) {
    childNode = childNode.componentInstance._vnode;
    if (childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }
  while (isDef(parentNode = parentNode.parent)) {
    if (parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }
  return genClassFromData(data)
}

function mergeClassData (child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: isDef(child.class)
      ? [child.class, parent.class]
      : parent.class
  }
}

function genClassFromData (data) {
  var dynamicClass = data.class;
  var staticClass = data.staticClass;
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (isUndef(value)) {
    return ''
  }
  if (typeof value === 'string') {
    return value
  }
  var res = '';
  if (Array.isArray(value)) {
    var stringified;
    for (var i = 0, l = value.length; i < l; i++) {
      if (isDef(value[i])) {
        if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
          res += stringified + ' ';
        }
      }
    }
    return res.slice(0, -1)
  }
  if (isObject(value)) {
    for (var key in value) {
      if (value[key]) { res += key + ' '; }
    }
    return res.slice(0, -1)
  }
  /* istanbul ignore next */
  return res
}

/*  */

var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};

var isHTMLTag = makeMap(
  'html,body,base,head,link,meta,style,title,' +
  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
  'div,dd,dl,dt,figcaption,figure,hr,img,li,main,ol,p,pre,ul,' +
  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
  'embed,object,param,source,canvas,script,noscript,del,ins,' +
  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
  'output,progress,select,textarea,' +
  'details,dialog,menu,menuitem,summary,' +
  'content,element,shadow,template'
);

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap(
  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
  'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
  true
);



var isReservedTag = function (tag) {
  return isHTMLTag(tag) || isSVG(tag)
};

function getTagNamespace (tag) {
  if (isSVG(tag)) {
    return 'svg'
  }
  // basic support for MathML
  // note it doesn't support other MathML elements being component roots
  if (tag === 'math') {
    return 'math'
  }
}

var unknownElementCache = Object.create(null);
function isUnknownElement (tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true
  }
  if (isReservedTag(tag)) {
    return false
  }
  tag = tag.toLowerCase();
  /* istanbul ignore if */
  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag]
  }
  var el = document.createElement(tag);
  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return (unknownElementCache[tag] = (
      el.constructor === window.HTMLUnknownElement ||
      el.constructor === window.HTMLElement
    ))
  } else {
    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
  }
}

/*  */

/**
 * Query an element selector if it's not an element already.
 */
function query (el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);
    if (!selected) {
      process.env.NODE_ENV !== 'production' && warn(
        'Cannot find element: ' + el
      );
      return document.createElement('div')
    }
    return selected
  } else {
    return el
  }
}

/*  */

function createElement$1 (tagName, vnode) {
  var elm = document.createElement(tagName);
  if (tagName !== 'select') {
    return elm
  }
  // false or null will remove the attribute but undefined will not
  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }
  return elm
}

function createElementNS (namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName)
}

function createTextNode (text) {
  return document.createTextNode(text)
}

function createComment (text) {
  return document.createComment(text)
}

function insertBefore (parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild (node, child) {
  node.removeChild(child);
}

function appendChild (node, child) {
  node.appendChild(child);
}

function parentNode (node) {
  return node.parentNode
}

function nextSibling (node) {
  return node.nextSibling
}

function tagName (node) {
  return node.tagName
}

function setTextContent (node, text) {
  node.textContent = text;
}

function setAttribute (node, key, val) {
  node.setAttribute(key, val);
}


var nodeOps = Object.freeze({
	createElement: createElement$1,
	createElementNS: createElementNS,
	createTextNode: createTextNode,
	createComment: createComment,
	insertBefore: insertBefore,
	removeChild: removeChild,
	appendChild: appendChild,
	parentNode: parentNode,
	nextSibling: nextSibling,
	tagName: tagName,
	setTextContent: setTextContent,
	setAttribute: setAttribute
});

/*  */

var ref = {
  create: function create (_, vnode) {
    registerRef(vnode);
  },
  update: function update (oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy (vnode) {
    registerRef(vnode, true);
  }
};

function registerRef (vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!key) { return }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (Array.isArray(refs[key]) && refs[key].indexOf(ref) < 0) {
        refs[key].push(ref);
      } else {
        refs[key] = [ref];
      }
    } else {
      refs[key] = ref;
    }
  }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *

/*
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyNode = new VNode('', {}, []);

var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode (a, b) {
  return (
    a.key === b.key &&
    a.tag === b.tag &&
    a.isComment === b.isComment &&
    isDef(a.data) === isDef(b.data) &&
    sameInputType(a, b)
  )
}

// Some browsers do not support dynamically changing type for <input>
// so they need to be treated as different nodes
function sameInputType (a, b) {
  if (a.tag !== 'input') { return true }
  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB
}

function createKeyToOldIdx (children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) { map[key] = i; }
  }
  return map
}

function createPatchFunction (backend) {
  var i, j;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt (elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
  }

  function createRmCb (childElm, listeners) {
    function remove$$1 () {
      if (--remove$$1.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove$$1.listeners = listeners;
    return remove$$1
  }

  function removeNode (el) {
    var parent = nodeOps.parentNode(el);
    // element may have already been removed due to v-html / v-text
    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  var inPre = 0;
  function createElm (vnode, insertedVnodeQueue, parentElm, refElm, nested) {
    vnode.isRootInsert = !nested; // for transition enter check
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      if (process.env.NODE_ENV !== 'production') {
        if (data && data.pre) {
          inPre++;
        }
        if (
          !inPre &&
          !vnode.ns &&
          !(config.ignoredElements.length && config.ignoredElements.indexOf(tag) > -1) &&
          config.isUnknownElement(tag)
        ) {
          warn(
            'Unknown custom element: <' + tag + '> - did you ' +
            'register the component correctly? For recursive components, ' +
            'make sure to provide the "name" option.',
            vnode.context
          );
        }
      }
      vnode.elm = vnode.ns
        ? nodeOps.createElementNS(vnode.ns, tag)
        : nodeOps.createElement(tag, vnode);
      setScope(vnode);

      /* istanbul ignore if */
      {
        createChildren(vnode, children, insertedVnodeQueue);
        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }

      if (process.env.NODE_ENV !== 'production' && data && data.pre) {
        inPre--;
      }
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;
    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false /* hydrating */, parentElm, refElm);
      }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true
      }
    }
  }

  function initComponent (vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
    }
    vnode.elm = vnode.componentInstance.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode);
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i;
    // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.
    var innerNode = vnode;
    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;
      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break
      }
    }
    // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself
    insert(parentElm, vnode.elm, refElm);
  }

  function insert (parent, elm, ref) {
    if (isDef(parent)) {
      if (isDef(ref)) {
        if (ref.parentNode === parent) {
          nodeOps.insertBefore(parent, elm, ref);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren (vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(vnode.text));
    }
  }

  function isPatchable (vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.tag)
  }

  function invokeCreateHooks (vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (isDef(i.create)) { i.create(emptyNode, vnode); }
      if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope (vnode) {
    var i;
    var ancestor = vnode;
    while (ancestor) {
      if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
        nodeOps.setAttribute(vnode.elm, i, '');
      }
      ancestor = ancestor.parent;
    }
    // for slot content they should also get the scopeId from the host instance.
    if (isDef(i = activeInstance) &&
      i !== vnode.context &&
      isDef(i = i.$options._scopeId)
    ) {
      nodeOps.setAttribute(vnode.elm, i, '');
    }
  }

  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm);
    }
  }

  function invokeDestroyHook (vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else { // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook (vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i;
      var listeners = cbs.remove.length + 1;
      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      }
      // recursively invoke hooks on child component root node
      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, elmToMove, refElm;

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    var canMove = !removeOnly;

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
        idxInOld = isDef(newStartVnode.key) ? oldKeyToIdx[newStartVnode.key] : null;
        if (isUndef(idxInOld)) { // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
          newStartVnode = newCh[++newStartIdx];
        } else {
          elmToMove = oldCh[idxInOld];
          /* istanbul ignore if */
          if (process.env.NODE_ENV !== 'production' && !elmToMove) {
            warn(
              'It seems there are duplicate keys that is causing an update error. ' +
              'Make sure each v-for item has a unique key.'
            );
          }
          if (sameVnode(elmToMove, newStartVnode)) {
            patchVnode(elmToMove, newStartVnode, insertedVnodeQueue);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, newStartVnode.elm, oldStartVnode.elm);
            newStartVnode = newCh[++newStartIdx];
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
            newStartVnode = newCh[++newStartIdx];
          }
        }
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function patchVnode (oldVnode, vnode, insertedVnodeQueue, removeOnly) {
    if (oldVnode === vnode) {
      return
    }
    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (isTrue(vnode.isStatic) &&
      isTrue(oldVnode.isStatic) &&
      vnode.key === oldVnode.key &&
      (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
    ) {
      vnode.elm = oldVnode.elm;
      vnode.componentInstance = oldVnode.componentInstance;
      return
    }
    var i;
    var data = vnode.data;
    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }
    var elm = vnode.elm = oldVnode.elm;
    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
      } else if (isDef(ch)) {
        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
    }
  }

  function invokeInsertHook (vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var bailed = false;
  // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  var isRenderedModule = makeMap('attrs,style,class,staticClass,staticStyle,key');

  // Note: this is a browser-only function so we can assume elms are DOM nodes.
  function hydrate (elm, vnode, insertedVnodeQueue) {
    if (process.env.NODE_ENV !== 'production') {
      if (!assertNodeMatch(elm, vnode)) {
        return false
      }
    }
    vnode.elm = elm;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          var childrenMatch = true;
          var childNode = elm.firstChild;
          for (var i$1 = 0; i$1 < children.length; i$1++) {
            if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue)) {
              childrenMatch = false;
              break
            }
            childNode = childNode.nextSibling;
          }
          // if childNode is not null, it means the actual childNodes list is
          // longer than the virtual children list.
          if (!childrenMatch || childNode) {
            if (process.env.NODE_ENV !== 'production' &&
              typeof console !== 'undefined' &&
              !bailed
            ) {
              bailed = true;
              console.warn('Parent: ', elm);
              console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
            }
            return false
          }
        }
      }
      if (isDef(data)) {
        for (var key in data) {
          if (!isRenderedModule(key)) {
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break
          }
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }
    return true
  }

  function assertNodeMatch (node, vnode) {
    if (isDef(vnode.tag)) {
      return (
        vnode.tag.indexOf('vue-component') === 0 ||
        vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
      )
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3)
    }
  }

  return function patch (oldVnode, vnode, hydrating, removeOnly, parentElm, refElm) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
      return
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue, parentElm, refElm);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }
          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode
            } else if (process.env.NODE_ENV !== 'production') {
              warn(
                'The client-side rendered virtual DOM tree is not matching ' +
                'server-rendered content. This is likely caused by incorrect ' +
                'HTML markup, for example nesting block-level elements inside ' +
                '<p>, or missing <tbody>. Bailing hydration and performing ' +
                'full client-side render.'
              );
            }
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode);
        }
        // replacing existing element
        var oldElm = oldVnode.elm;
        var parentElm$1 = nodeOps.parentNode(oldElm);
        createElm(
          vnode,
          insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm$1,
          nodeOps.nextSibling(oldElm)
        );

        if (isDef(vnode.parent)) {
          // component root element replaced.
          // update parent placeholder node element, recursively
          var ancestor = vnode.parent;
          while (ancestor) {
            ancestor.elm = vnode.elm;
            ancestor = ancestor.parent;
          }
          if (isPatchable(vnode)) {
            for (var i = 0; i < cbs.create.length; ++i) {
              cbs.create[i](emptyNode, vnode.parent);
            }
          }
        }

        if (isDef(parentElm$1)) {
          removeVnodes(parentElm$1, [oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm
  }
}

/*  */

var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives (vnode) {
    updateDirectives(vnode, emptyNode);
  }
};

function updateDirectives (oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update (oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

  var dirsWithInsert = [];
  var dirsWithPostpatch = [];

  var key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      callHook$1(dir, 'update', vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };
    if (isCreate) {
      mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1 (
  dirs,
  vm
) {
  var res = Object.create(null);
  if (!dirs) {
    return res
  }
  var i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  }
  return res
}

function getRawDirName (dir) {
  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
}

function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
    }
  }
}

var baseModules = [
  ref,
  directives
];

/*  */

function updateAttrs (oldVnode, vnode) {
  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
    return
  }
  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(attrs.__ob__)) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      setAttr(elm, key, cur);
    }
  }
  // #4391: in IE9, setting type can reset value for input[type=radio]
  /* istanbul ignore if */
  if (isIE9 && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }
  for (key in oldAttrs) {
    if (isUndef(attrs[key])) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr (el, key, value) {
  if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, key);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, isFalsyAttrValue(value) || value === 'false' ? 'false' : 'true');
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, value);
    }
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
};

/*  */

function updateClass (oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;
  if (
    isUndef(data.staticClass) &&
    isUndef(data.class) && (
      isUndef(oldData) || (
        isUndef(oldData.staticClass) &&
        isUndef(oldData.class)
      )
    )
  ) {
    return
  }

  var cls = genClassForVnode(vnode);

  // handle transition classes
  var transitionClass = el._transitionClasses;
  if (isDef(transitionClass)) {
    cls = concat(cls, stringifyClass(transitionClass));
  }

  // set the class
  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
};

/*  */

var validDivisionCharRE = /[\w).+\-_$\]]/;



function wrapFilter (exp, filter) {
  var i = filter.indexOf('(');
  if (i < 0) {
    // _f: resolveFilter
    return ("_f(\"" + filter + "\")(" + exp + ")")
  } else {
    var name = filter.slice(0, i);
    var args = filter.slice(i + 1);
    return ("_f(\"" + name + "\")(" + exp + "," + args)
  }
}

/*  */

/*  */

/**
 * Cross-platform code generation for component v-model
 */


/**
 * Cross-platform codegen helper for generating v-model value assignment code.
 */


/**
 * parse directive model to do the array update transform. a[idx] = val => $$a.splice($$idx, 1, val)
 *
 * for loop possible cases:
 *
 * - test
 * - test[idx]
 * - test[test1[idx]]
 * - test["a"][idx]
 * - xxx.test[a[a].test1[idx]]
 * - test.xxx.a["asa"][test1[idx]]
 *
 */

var str;
var index$1;

/*  */

// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.
var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';

/*  */

// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.
function normalizeEvents (on) {
  var event;
  /* istanbul ignore if */
  if (isDef(on[RANGE_TOKEN])) {
    // IE input[type=range] only supports `change` event
    event = isIE ? 'change' : 'input';
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  }
  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
    // Chrome fires microtasks in between click/change, leads to #4521
    event = isChrome ? 'click' : 'change';
    on[event] = [].concat(on[CHECKBOX_RADIO_TOKEN], on[event] || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}

var target$1;

function add$1 (
  event,
  handler,
  once$$1,
  capture,
  passive
) {
  if (once$$1) {
    var oldHandler = handler;
    var _target = target$1; // save current target element in closure
    handler = function (ev) {
      var res = arguments.length === 1
        ? oldHandler(ev)
        : oldHandler.apply(null, arguments);
      if (res !== null) {
        remove$2(event, handler, capture, _target);
      }
    };
  }
  target$1.addEventListener(
    event,
    handler,
    supportsPassive
      ? { capture: capture, passive: passive }
      : capture
  );
}

function remove$2 (
  event,
  handler,
  capture,
  _target
) {
  (_target || target$1).removeEventListener(event, handler, capture);
}

function updateDOMListeners (oldVnode, vnode) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return
  }
  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add$1, remove$2, vnode.context);
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
};

/*  */

function updateDOMProps (oldVnode, vnode) {
  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
    return
  }
  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(props.__ob__)) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (isUndef(props[key])) {
      elm[key] = '';
    }
  }
  for (key in props) {
    cur = props[key];
    // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)
    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) { vnode.children.length = 0; }
      if (cur === oldProps[key]) { continue }
    }

    if (key === 'value') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur;
      // avoid resetting cursor position when value is the same
      var strCur = isUndef(cur) ? '' : String(cur);
      if (shouldUpdateValue(elm, vnode, strCur)) {
        elm.value = strCur;
      }
    } else {
      elm[key] = cur;
    }
  }
}

// check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue (
  elm,
  vnode,
  checkVal
) {
  return (!elm.composing && (
    vnode.tag === 'option' ||
    isDirty(elm, checkVal) ||
    isInputChanged(elm, checkVal)
  ))
}

function isDirty (elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is not equal to the updated value
  return document.activeElement !== elm && elm.value !== checkVal
}

function isInputChanged (elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime
  if ((isDef(modifiers) && modifiers.number) || elm.type === 'number') {
    return toNumber(value) !== toNumber(newVal)
  }
  if (isDef(modifiers) && modifiers.trim) {
    return value.trim() !== newVal.trim()
  }
  return value !== newVal
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
};

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// merge static and dynamic style data on the same vnode
function normalizeStyleData (data) {
  var style = normalizeStyleBinding(data.style);
  // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it
  return data.staticStyle
    ? extend(data.staticStyle, style)
    : style
}

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
function getStyle (vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;
    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;
      if (childNode.data && (styleData = normalizeStyleData(childNode.data))) {
        extend(res, styleData);
      }
    }
  }

  if ((styleData = normalizeStyleData(vnode.data))) {
    extend(res, styleData);
  }

  var parentNode = vnode;
  while ((parentNode = parentNode.parent)) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }
  return res
}

/*  */

var cssVarRE = /^--/;
var importantRE = /\s*!important$/;
var setProp = function (el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(name, val.replace(importantRE, ''), 'important');
  } else {
    var normalizedName = normalize(name);
    if (Array.isArray(val)) {
      // Support values array created by autoprefixer, e.g.
      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
      // Set them one by one, and the browser will only set those it can recognize
      for (var i = 0, len = val.length; i < len; i++) {
        el.style[normalizedName] = val[i];
      }
    } else {
      el.style[normalizedName] = val;
    }
  }
};

var prefixes = ['Webkit', 'Moz', 'ms'];

var testEl;
var normalize = cached(function (prop) {
  testEl = testEl || document.createElement('div');
  prop = camelize(prop);
  if (prop !== 'filter' && (prop in testEl.style)) {
    return prop
  }
  var upper = prop.charAt(0).toUpperCase() + prop.slice(1);
  for (var i = 0; i < prefixes.length; i++) {
    var prefixed = prefixes[i] + upper;
    if (prefixed in testEl.style) {
      return prefixed
    }
  }
});

function updateStyle (oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticStyle) && isUndef(data.style) &&
    isUndef(oldData.staticStyle) && isUndef(oldData.style)
  ) {
    return
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldData.staticStyle;
  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
  var oldStyle = oldStaticStyle || oldStyleBinding;

  var style = normalizeStyleBinding(vnode.data.style) || {};

  // store normalized style under a different key for next diff
  // make sure to clone it if it's reactive, since the user likley wants
  // to mutate it.
  vnode.data.normalizedStyle = isDef(style.__ob__)
    ? extend({}, style)
    : style;

  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (isUndef(newStyle[name])) {
      setProp(el, name, '');
    }
  }
  for (name in newStyle) {
    cur = newStyle[name];
    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
};

/*  */

/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function addClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.add(c); });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function removeClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.remove(c); });
    } else {
      el.classList.remove(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    el.setAttribute('class', cur.trim());
  }
}

/*  */

function resolveTransition (def$$1) {
  if (!def$$1) {
    return
  }
  /* istanbul ignore else */
  if (typeof def$$1 === 'object') {
    var res = {};
    if (def$$1.css !== false) {
      extend(res, autoCssTransition(def$$1.name || 'v'));
    }
    extend(res, def$$1);
    return res
  } else if (typeof def$$1 === 'string') {
    return autoCssTransition(def$$1)
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: (name + "-enter"),
    enterToClass: (name + "-enter-to"),
    enterActiveClass: (name + "-enter-active"),
    leaveClass: (name + "-leave"),
    leaveToClass: (name + "-leave-to"),
    leaveActiveClass: (name + "-leave-active")
  }
});

var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation';

// Transition property/event sniffing
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined &&
    window.onwebkittransitionend !== undefined
  ) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }
  if (window.onanimationend === undefined &&
    window.onwebkitanimationend !== undefined
  ) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
}

// binding to window is necessary to make hot reload work in IE in strict mode
var raf = inBrowser && window.requestAnimationFrame
  ? window.requestAnimationFrame.bind(window)
  : setTimeout;

function nextFrame (fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass (el, cls) {
  (el._transitionClasses || (el._transitionClasses = [])).push(cls);
  addClass(el, cls);
}

function removeTransitionClass (el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }
  removeClass(el, cls);
}

function whenTransitionEnds (
  el,
  expectedType,
  cb
) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;
  if (!type) { return cb() }
  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;
  var end = function () {
    el.removeEventListener(event, onEnd);
    cb();
  };
  var onEnd = function (e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };
  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo (el, expectedType) {
  var styles = window.getComputedStyle(el);
  var transitionDelays = styles[transitionProp + 'Delay'].split(', ');
  var transitionDurations = styles[transitionProp + 'Duration'].split(', ');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = styles[animationProp + 'Delay'].split(', ');
  var animationDurations = styles[animationProp + 'Duration'].split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);

  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0
      ? transitionTimeout > animationTimeout
        ? TRANSITION
        : ANIMATION
      : null;
    propCount = type
      ? type === TRANSITION
        ? transitionDurations.length
        : animationDurations.length
      : 0;
  }
  var hasTransform =
    type === TRANSITION &&
    transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  }
}

function getTimeout (delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i])
  }))
}

function toMs (s) {
  return Number(s.slice(0, -1)) * 1000
}

/*  */

function enter (vnode, toggleDisplay) {
  var el = vnode.elm;

  // call leave callback now
  if (isDef(el._leaveCb)) {
    el._leaveCb.cancelled = true;
    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return
  }

  /* istanbul ignore if */
  if (isDef(el._enterCb) || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration;

  // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.
  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;
  while (transitionNode && transitionNode.parent) {
    transitionNode = transitionNode.parent;
    context = transitionNode.context;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return
  }

  var startClass = isAppear && appearClass
    ? appearClass
    : enterClass;
  var activeClass = isAppear && appearActiveClass
    ? appearActiveClass
    : enterActiveClass;
  var toClass = isAppear && appearToClass
    ? appearToClass
    : enterToClass;

  var beforeEnterHook = isAppear
    ? (beforeAppear || beforeEnter)
    : beforeEnter;
  var enterHook = isAppear
    ? (typeof appear === 'function' ? appear : enter)
    : enter;
  var afterEnterHook = isAppear
    ? (afterAppear || afterEnter)
    : afterEnter;
  var enterCancelledHook = isAppear
    ? (appearCancelled || enterCancelled)
    : enterCancelled;

  var explicitEnterDuration = toNumber(
    isObject(duration)
      ? duration.enter
      : duration
  );

  if (process.env.NODE_ENV !== 'production' && explicitEnterDuration != null) {
    checkDuration(explicitEnterDuration, 'enter', vnode);
  }

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(enterHook);

  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }
      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }
    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
      if (pendingNode &&
        pendingNode.tag === vnode.tag &&
        pendingNode.elm._leaveCb
      ) {
        pendingNode.elm._leaveCb();
      }
      enterHook && enterHook(el, cb);
    });
  }

  // start enter transition
  beforeEnterHook && beforeEnterHook(el);
  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      addTransitionClass(el, toClass);
      removeTransitionClass(el, startClass);
      if (!cb.cancelled && !userWantsControl) {
        if (isValidDuration(explicitEnterDuration)) {
          setTimeout(cb, explicitEnterDuration);
        } else {
          whenTransitionEnds(el, type, cb);
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave (vnode, rm) {
  var el = vnode.elm;

  // call enter callback now
  if (isDef(el._enterCb)) {
    el._enterCb.cancelled = true;
    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return rm()
  }

  /* istanbul ignore if */
  if (isDef(el._leaveCb) || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(leave);

  var explicitLeaveDuration = toNumber(
    isObject(duration)
      ? duration.leave
      : duration
  );

  if (process.env.NODE_ENV !== 'production' && isDef(explicitLeaveDuration)) {
    checkDuration(explicitLeaveDuration, 'leave', vnode);
  }

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }
    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }
      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }
    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave () {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return
    }
    // record leaving element
    if (!vnode.data.show) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
    }
    beforeLeave && beforeLeave(el);
    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        addTransitionClass(el, leaveToClass);
        removeTransitionClass(el, leaveClass);
        if (!cb.cancelled && !userWantsControl) {
          if (isValidDuration(explicitLeaveDuration)) {
            setTimeout(cb, explicitLeaveDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      });
    }
    leave && leave(el, cb);
    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
}

// only used in dev mode
function checkDuration (val, name, vnode) {
  if (typeof val !== 'number') {
    warn(
      "<transition> explicit " + name + " duration is not a valid number - " +
      "got " + (JSON.stringify(val)) + ".",
      vnode.context
    );
  } else if (isNaN(val)) {
    warn(
      "<transition> explicit " + name + " duration is NaN - " +
      'the duration expression might be incorrect.',
      vnode.context
    );
  }
}

function isValidDuration (val) {
  return typeof val === 'number' && !isNaN(val)
}

/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */
function getHookArgumentsLength (fn) {
  if (isUndef(fn)) {
    return false
  }
  var invokerFns = fn.fns;
  if (isDef(invokerFns)) {
    // invoker
    return getHookArgumentsLength(
      Array.isArray(invokerFns)
        ? invokerFns[0]
        : invokerFns
    )
  } else {
    return (fn._length || fn.length) > 1
  }
}

function _enter (_, vnode) {
  if (vnode.data.show !== true) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1 (vnode, rm) {
    /* istanbul ignore else */
    if (vnode.data.show !== true) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {};

var platformModules = [
  attrs,
  klass,
  events,
  domProps,
  style,
  transition
];

/*  */

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules = platformModules.concat(baseModules);

var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

/* istanbul ignore if */
if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;
    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var model$1 = {
  inserted: function inserted (el, binding, vnode) {
    if (vnode.tag === 'select') {
      var cb = function () {
        setSelected(el, binding, vnode.context);
      };
      cb();
      /* istanbul ignore if */
      if (isIE || isEdge) {
        setTimeout(cb, 0);
      }
    } else if (vnode.tag === 'textarea' || el.type === 'text' || el.type === 'password') {
      el._vModifiers = binding.modifiers;
      if (!binding.modifiers.lazy) {
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        el.addEventListener('change', onCompositionEnd);
        if (!isAndroid) {
          el.addEventListener('compositionstart', onCompositionStart);
          el.addEventListener('compositionend', onCompositionEnd);
        }
        /* istanbul ignore if */
        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },
  componentUpdated: function componentUpdated (el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.
      var needReset = el.multiple
        ? binding.value.some(function (v) { return hasNoMatchingOption(v, el.options); })
        : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, el.options);
      if (needReset) {
        trigger(el, 'change');
      }
    }
  }
};

function setSelected (el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;
  if (isMultiple && !Array.isArray(value)) {
    process.env.NODE_ENV !== 'production' && warn(
      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
      vm
    );
    return
  }
  var selected, option;
  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];
    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;
      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }
        return
      }
    }
  }
  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function hasNoMatchingOption (value, options) {
  for (var i = 0, l = options.length; i < l; i++) {
    if (looseEqual(getValue(options[i]), value)) {
      return false
    }
  }
  return true
}

function getValue (option) {
  return '_value' in option
    ? option._value
    : option.value
}

function onCompositionStart (e) {
  e.target.composing = true;
}

function onCompositionEnd (e) {
  // prevent triggering an input event for no reason
  if (!e.target.composing) { return }
  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger (el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}

/*  */

// recursively search for possible transition defined inside the component root
function locateNode (vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
    ? locateNode(vnode.componentInstance._vnode)
    : vnode
}

var show = {
  bind: function bind (el, ref, vnode) {
    var value = ref.value;

    vnode = locateNode(vnode);
    var transition = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay =
      el.style.display === 'none' ? '' : el.style.display;
    if (value && transition && !isIE9) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },

  update: function update (el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    /* istanbul ignore if */
    if (value === oldValue) { return }
    vnode = locateNode(vnode);
    var transition = vnode.data && vnode.data.transition;
    if (transition && !isIE9) {
      vnode.data.show = true;
      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },

  unbind: function unbind (
    el,
    binding,
    vnode,
    oldVnode,
    isDestroy
  ) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
};

var platformDirectives = {
  model: model$1,
  show: show
};

/*  */

// Provides transition support for a single element/component.
// supports transition mode (out-in / in-out)

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
};

// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild (vnode) {
  var compOptions = vnode && vnode.componentOptions;
  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children))
  } else {
    return vnode
  }
}

function extractTransitionData (comp) {
  var data = {};
  var options = comp.$options;
  // props
  for (var key in options.propsData) {
    data[key] = comp[key];
  }
  // events.
  // extract listeners and pass them directly to the transition methods
  var listeners = options._parentListeners;
  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }
  return data
}

function placeholder (h, rawChild) {
  if (/\d-keep-alive$/.test(rawChild.tag)) {
    return h('keep-alive', {
      props: rawChild.componentOptions.propsData
    })
  }
}

function hasParentTransition (vnode) {
  while ((vnode = vnode.parent)) {
    if (vnode.data.transition) {
      return true
    }
  }
}

function isSameChild (child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag
}

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,

  render: function render (h) {
    var this$1 = this;

    var children = this.$slots.default;
    if (!children) {
      return
    }

    // filter out text nodes (possible whitespaces)
    children = children.filter(function (c) { return c.tag; });
    /* istanbul ignore if */
    if (!children.length) {
      return
    }

    // warn multiple elements
    if (process.env.NODE_ENV !== 'production' && children.length > 1) {
      warn(
        '<transition> can only be used on a single element. Use ' +
        '<transition-group> for lists.',
        this.$parent
      );
    }

    var mode = this.mode;

    // warn invalid mode
    if (process.env.NODE_ENV !== 'production' &&
      mode && mode !== 'in-out' && mode !== 'out-in'
    ) {
      warn(
        'invalid <transition> mode: ' + mode,
        this.$parent
      );
    }

    var rawChild = children[0];

    // if this is a component root node and the component's
    // parent container node also has transition, skip.
    if (hasParentTransition(this.$vnode)) {
      return rawChild
    }

    // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive
    var child = getRealChild(rawChild);
    /* istanbul ignore if */
    if (!child) {
      return rawChild
    }

    if (this._leaving) {
      return placeholder(h, rawChild)
    }

    // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.
    var id = "__transition-" + (this._uid) + "-";
    child.key = child.key == null
      ? id + child.tag
      : isPrimitive(child.key)
        ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
        : child.key;

    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild);

    // mark v-show
    // so that the transition module can hand over the control to the directive
    if (child.data.directives && child.data.directives.some(function (d) { return d.name === 'show'; })) {
      child.data.show = true;
    }

    if (oldChild && oldChild.data && !isSameChild(child, oldChild)) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild && (oldChild.data.transition = extend({}, data));
      // handle transition mode
      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return placeholder(h, rawChild)
      } else if (mode === 'in-out') {
        var delayedLeave;
        var performLeave = function () { delayedLeave(); };
        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
      }
    }

    return rawChild
  }
};

/*  */

// Provides transition support for list items.
// supports move transitions using the FLIP technique.

// Because the vdom's children update algorithm is "unstable" - i.e.
// it doesn't guarantee the relative positioning of removed elements,
// we force transition-group to update its children into two passes:
// in the first pass, we remove all nodes that need to be removed,
// triggering their leaving transition; in the second pass, we insert/move
// into the final desired state. This way in the second pass removed
// nodes will remain where they should be.

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);

delete props.mode;

var TransitionGroup = {
  props: props,

  render: function render (h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];
      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c
          ;(c.data || (c.data = {})).transition = transitionData;
        } else if (process.env.NODE_ENV !== 'production') {
          var opts = c.componentOptions;
          var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
          warn(("<transition-group> children must be keyed: <" + name + ">"));
        }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];
      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();
        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }
      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children)
  },

  beforeUpdate: function beforeUpdate () {
    // force removing pass
    this.__patch__(
      this._vnode,
      this.kept,
      false, // hydrating
      true // removeOnly (!important, avoids unnecessary moves)
    );
    this._vnode = this.kept;
  },

  updated: function updated () {
    var children = this.prevChildren;
    var moveClass = this.moveClass || ((this.name || 'v') + '-move');
    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return
    }

    // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.
    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation);

    // force reflow to put everything in position
    var body = document.body;
    var f = body.offsetHeight; // eslint-disable-line

    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },

  methods: {
    hasMove: function hasMove (el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false
      }
      if (this._hasMove != null) {
        return this._hasMove
      }
      // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.
      var clone = el.cloneNode();
      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
      }
      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return (this._hasMove = info.hasTransform)
    }
  }
};

function callPendingCbs (c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */
  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition (c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation (c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;
  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
};

/*  */

// install platform specific utils
Vue$3.config.mustUseProp = mustUseProp;
Vue$3.config.isReservedTag = isReservedTag;
Vue$3.config.isReservedAttr = isReservedAttr;
Vue$3.config.getTagNamespace = getTagNamespace;
Vue$3.config.isUnknownElement = isUnknownElement;

// install platform runtime directives & components
extend(Vue$3.options.directives, platformDirectives);
extend(Vue$3.options.components, platformComponents);

// install platform patch function
Vue$3.prototype.__patch__ = inBrowser ? patch : noop;

// public mount method
Vue$3.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating)
};

// devtools global hook
/* istanbul ignore next */
setTimeout(function () {
  if (config.devtools) {
    if (devtools) {
      devtools.emit('init', Vue$3);
    } else if (process.env.NODE_ENV !== 'production' && isChrome) {
      console[console.info ? 'info' : 'log'](
        'Download the Vue Devtools extension for a better development experience:\n' +
        'https://github.com/vuejs/vue-devtools'
      );
    }
  }
  if (process.env.NODE_ENV !== 'production' &&
    config.productionTip !== false &&
    inBrowser && typeof console !== 'undefined'
  ) {
    console[console.info ? 'info' : 'log'](
      "You are running Vue in development mode.\n" +
      "Make sure to turn on production mode when deploying for production.\n" +
      "See more tips at https://vuejs.org/guide/deployment.html"
    );
  }
}, 0);

/*  */

module.exports = Vue$3;

}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"_process":20}],23:[function(require,module,exports){
var inserted = exports.cache = {}

function noop () {}

exports.insert = function (css) {
  if (inserted[css]) return noop
  inserted[css] = true

  var elem = document.createElement('style')
  elem.setAttribute('type', 'text/css')

  if ('textContent' in elem) {
    elem.textContent = css
  } else {
    elem.styleSheet.cssText = css
  }

  document.getElementsByTagName('head')[0].appendChild(elem)
  return function () {
    document.getElementsByTagName('head')[0].removeChild(elem)
    inserted[css] = false
  }
}

},{}],24:[function(require,module,exports){
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

const olMap = require("./ol-map.vue");
const olMarker = require("./ol-marker.vue");
const olBalloon = require("./ol-balloon.vue");

module.exports = {
  install(Vue, options) {
    // wiring project components
    Vue.component("ol-map", olMap);
    Vue.component("ol-marker", olMarker);
    Vue.component("ol-balloon", olBalloon);
  }
};

},{"./ol-balloon.vue":25,"./ol-map.vue":26,"./ol-marker.vue":27}],25:[function(require,module,exports){
;(function(){
//
//
//
//
//

const ol = require("openlayers");
module.exports = {
  name: "OLBalloon",
  props: {
    coords: {
      type: Array,
      default: _ => [-38.5431, -3.71722]
    },
    balloonData: Object,
    anchor: {
      type: Array,
      default: _ => [0, 0]
    }
  },
  data() {
    return {
      feature: null
    };
  },
  watch: {
    coords(val) {
      this.feature.setGeometry(new ol.geom.Point(ol.proj.fromLonLat(val)));
      this.updatepos();
    }
  },
  mounted() {
    // this.$el.parentElement.removeChild(this.$el)
    // this.$el.style.display="none";
    this.$el.style.position = "absolute";
    this.$el.style.zIndex = "3000";
    this.feature = new ol.Feature({
      geometry: new ol.geom.Point(ol.proj.fromLonLat(this.coords))
    });
    this.vectorSource = new ol.source.Vector({
      features: [this.feature]
    });
    this.vectorLayer = new ol.layer.Vector({
      source: this.vectorSource
    });
    this.$parent.addBalloon(this);

    this.$on("moveend", _ => {
      // we need moveend to rearrange balloons
      this.updatepos();
    });

    this.$on("pointerdrag", evt => {
      this.$el.style.display = "none";
    });
  },
  methods: {
    updatepos() {
      const map = this.$parent.olmap;
      const geometry = this.feature.getGeometry();
      const coordinate = geometry.getCoordinates();
      const pixel = map.getPixelFromCoordinate(coordinate);
      if (!pixel) {
        this.$el.style.display = "none";
      } else {
        let a = this.$parent.$el.offsetLeft;
        let b = this.$parent.$el.offsetTop;
        let x = (pixel[0] + a);
        let y = (pixel[1] + b);
        let w = this.$parent.$el.offsetWidth + a;
        let h = this.$parent.$el.offsetHeight + b;
        if (x - a < 0 || y - b < 0 || x > w || y > h) {
          this.$el.style.display = "none";
        } else {
          x -= this.anchor[0];
          y -= this.anchor[1];
          this.$el.style.display = "";
          this.$el.style.left = x + "px";
          this.$el.style.top = y + "px";
        }
      }
    }
  }
};

})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._t("default")],2)}
__vue__options__.staticRenderFns = []

},{"openlayers":19}],26:[function(require,module,exports){
;(function(){
//
//
//
//
//
//
//

const ol = require("openlayers");
module.exports = {
  name: "OLMap",
  props: {
    autoCenter: Boolean,
    center: {
      type: Array,
      default: _ => [-38.5431, -3.71722]
    }
  },
  data() {
    return {
      olmap: null,
      markerstoadd: [],
      balloonstoadd: []
    };
  },
  mounted() {
    this.$el.style.overflow = "hidden";
    this.olmap = new ol.Map({
      target: this.$el,
      loadTilesWhileAnimating: true,
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        })
      ],
      view: new ol.View({
        center: ol.proj.fromLonLat(this.center),
        zoom: 13
      })
    });
    // http://openlayers.org/en/latest/apidoc/ol.Map.html#on
    this.olmap.on("moveend", evt => {
      // floating openlayer event to inside the vue's ViewModel
      const center = evt.map.getView().getCenter();
      const lonlat = ol.proj.toLonLat(center);
      this.$emit("moveend", evt, lonlat);
      // notify children, some of them will need it
      this.$children.map(e => e.$emit("moveend", evt, lonlat));
      // this.updatecenter(evt); // does not work
      // https://vuejs.org/v2/guide/components.html#Composing-Components
      // console.log(this.$children)
    });

    this.olmap.on("pointerdrag", evt => {
      this.$emit("pointerdrag", evt);
      this.$children.map(e => e.$emit("pointerdrag"));
    });

    if (this.autoCenter)
      this.autocenter();

    this.$on("newmarker", (e) => {
      // como o pai só roda o mounted após todos os filhos, 
      // temos que guardar em buffer antes de fazer isso.
      while (this.markerstoadd.length) {
        let m = this.markerstoadd.pop();
        this.olmap.addLayer(m);
      }
    });

    this.$on("newballoon", (e) => {
      // como o pai só roda o mounted após todos os filhos, 
      // temos que guardar em buffer antes de fazer isso.
      while (this.balloonstoadd.length) {
        let m = this.balloonstoadd.pop();
        this.olmap.addLayer(m.vectorLayer);
        m.updatepos();
      }
    });

    this.olmap.on("click", ev => {
      const feature = this.olmap.forEachFeatureAtPixel(ev.pixel, feature => feature);
      if (feature)
        this.$emit("selfeature", feature);
    });

    if (this.markerstoadd.length)
      this.$emit("newmarker");

    if (this.balloonstoadd.length)
      this.$emit("newballoon");
  },
  watch: {
    center(val) {
      this.olmap.getView().setCenter(ol.proj.fromLonLat(val));
      // this.$emit("moveend", evt, val);
    }
  },
  methods: {
    addMarker(marker) {
      this.markerstoadd.push(marker);
      this.$emit("newmarker");
    },
    addBalloon(balloon) {
      this.balloonstoadd.push(balloon);
      this.$emit("newballoon");
    },
    autocenter() {
      if ("geolocation" in navigator) {
        /* geolocation is available */
        navigator.geolocation.getCurrentPosition(pos => {
          if (this.autoCenter) {
            this.setcenter([pos.coords.longitude, pos.coords.latitude]);
          }
        }, (err) => {
          console.log(err);
        });
      }
    },
    setcenter(latlng) {
      this.center[0] = latlng[0];
      this.center[1] = latlng[1];
      this.olmap.getView().setCenter(ol.proj.fromLonLat(this.center));
    },
    // updatecenter(evt) {
    //   const center = evt.map.getView().getCenter();
    //   const lonlat = ol.proj.toLonLat(center);
    //   this.center[0] = lonlat[0];
    //   this.center[1] = lonlat[1];
    // }
  }
};

})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._t("default")],2)}
__vue__options__.staticRenderFns = []

},{"openlayers":19}],27:[function(require,module,exports){
;(function(){
//
//
//
//
//
//

const ol = require("openlayers");
module.exports = {
  name: "OLMarker",
  props: {
    coords: {
      type: Array,
      default: _ => [-38.5431, -3.71722]
    },
    markerradius:{
      type:[Number,String],
      default:12
    },
    markerData: Object,
    iconImageUrl: String
  },
  data() {
    return {
      feature: null,
      style: null,
      vectorSource: null,
      vectorLayer: null
    };
  },
  watch: {
    coords(val) {
      this.feature.setGeometry(new ol.geom.Point(ol.proj.fromLonLat(val)));
      this.$emit("newcoords", val);
    }
  },
  mounted() {
    // http://openlayers.org/en/latest/examples/icon-color.html?q=feature
    this.feature = new ol.Feature({
      geometry: new ol.geom.Point(ol.proj.fromLonLat(this.coords))
    });
    this.feature.vueComponent = this;
    if (this.iconImageUrl) {
      this.style = new ol.style.Style({
        image: new ol.style.Icon({
          src: this.iconImageUrl,
          anchor: [0.5, 1]
        })
      });
    } else {
      this.style = new ol.style.Style({
        image: new ol.style.Circle({
          radius: this.markerradius,
          snapToPixel: false,
          fill: new ol.style.Fill({ color: 'blue' }),
          stroke: new ol.style.Stroke({
            color: 'white', width: 2
          })
        })
      });
    }
    this.feature.setStyle(this.style);
    this.vectorSource = new ol.source.Vector({
      features: [this.feature]
    });
    this.vectorLayer = new ol.layer.Vector({
      source: this.vectorSource
    });
    this.$parent.addMarker(this.vectorLayer);//.olmap.addLayer(vectorLayer);
  }
};

})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._t("default")],2)}
__vue__options__.staticRenderFns = []

},{"openlayers":19}]},{},[1]);
