<template>
  <div>
    <ol-map>
      <ol-balloon :anchor="[60,110]">
        <div class="blackballoon">
          <small>If all you have is a hammer, everything looks like a fish. Oh wait.</small>
        </div>
      </ol-balloon>
    </ol-map>
    <pre>
      &lt;template&gt;
        &lt;ol-map&gt;
          &lt;ol-balloon :anchor="[60,110]"&gt;
            &lt;div class="blackballoon"&gt;
              &lt;p&gt;If all you have is a hammer, everything looks like a fish. Oh wait.&lt;/p&gt;
            &lt;/div&gt;
          &lt;/ol-balloon&gt;
        &lt;/ol-map&gt;
      &lt;/template&gt;
      &lt;style&gt;
      .blackballoon {
        background-color: black;
        color: white;
        padding: 1em 1em 1em 1em;
        width:100px;
        border-radius: 1.5em;
      }
      &lt;/style&gt;
    </pre>
  </div>
</template>
<style>
.blackballoon {
  background-color: black;
  color: white;
  padding: 1em 1em 1em 1em;
  width: 100px;
  border-radius: 1.5em;
}
</style>
<script>
module.exports = {
  name:"BalloonAnchorExample"
};
</script>
