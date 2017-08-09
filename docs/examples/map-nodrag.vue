<template>
  <div>
    <ol-map :nodrag="candrag"></ol-map>
    <button @click="candrag = !candrag">push so you can <span v-show="!candrag">NOT</span> drag</button>
    <pre>
        &lt;template>
          &lt;div>
            &lt;ol-map :nodrag="candrag">&lt;/ol-map>
            &lt;button @click="candrag = !candrag">push so you can &lt;span v-show="!candrag">NOT&lt;/span> drag&lt;/button>
          &lt;/div>
        &lt;/template>
        &lt;script>
        module.exports = {
          name:"MapNoDragExample",
          data(){
            return {
              candrag:true
            };
          }
        };
        &lt;/script>
      </pre>
  </div>
</template>
<style></style>
<script>
module.exports = {
  name: "MapNoDragExample",
  data() {
    return {
      candrag: true
    };
  }
};
</script>
