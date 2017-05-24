<template>
  <div>
    <ol-map>
      <ol-balloon>
        <div class="myballoon">
          <h1>You Are Here</h1>
          <p>Maybe not</p>
        </div>
      </ol-balloon>
      <ol-balloon :coords="[-38.57921, -3.70522]">
        <div class="myballoon">
          <p>Maybe you're there</p>
        </div>
      </ol-balloon>
    </ol-map>
    <pre>
        &lt;template&gt;
          &lt;ol-map&gt;
            &lt;ol-balloon&gt;
              &lt;div class="myballoon"&gt;
                &lt;h1>You Are Here&lt;/h1&gt;
                &lt;p>Maybe not&lt;/p&gt;
              &lt;/div&gt;
            &lt;/ol-balloon&gt;
            &lt;ol-balloon :coords="[-38.57921, -3.70522]"&gt;
              &lt;div class="myballoon"&gt;
                &lt;h1>You Are Here&lt;/h1&gt;
                &lt;p>Maybe not&lt;/p&gt;
              &lt;/div&gt;
            &lt;/ol-balloon&gt;
          &lt;/ol-map&gt;
        &lt;/template&gt;
        &lt;style&gt;
        .myballoon {
          background-color: #EEEEEE;
          padding: 1em 1em 1em 1em;
          border-radius: 1.5em;
        }
        &lt;/style&gt;
      </pre>
  </div>
</template>
<style>
.myballoon {
  background-color: #EEEEEE;
  padding: 1em 1em 1em 1em;
  border-radius: 1.5em;
}
</style>
