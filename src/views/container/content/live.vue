<template>
  <div id="live" v-title data-title="爱生活">
    爱生活
    <pre>
      <div class="hljs">
        <code class="lang-css">
          <span class="hljs-selector-class">.nav</span> { 
            <span class="hljs-attribute">margin</span>: <span class="hljs-number">0</span> auto; <span class="hljs-attribute">max-width</span>: <span class="hljs-number">1200px</span>; <span class="hljs-attribute">min-width</span>: <span class="hljs-number">500px</span>; <span class="hljs-attribute">height</span>: <span class="hljs-number">100%</span>; <span class="hljs-attribute">display</span>: flex; <span class="hljs-attribute">justify-content</span>: space-between; @media (<span class="hljs-attribute">max-width</span>: <span class="hljs-number">650px</span>) { display: none; } <span class="hljs-selector-class">.logo</span> { <span class="hljs-attribute">font-size</span>: <span class="hljs-number">22px</span>; <span class="hljs-attribute">font-family</span>: cursive; <span class="hljs-attribute">font-weight</span>: bolder; <span class="hljs-attribute">margin-left</span>: <span class="hljs-number">10px</span>; <span class="hljs-attribute">line-height</span>: <span class="hljs-number">60px</span>; <span class="hljs-attribute">cursor</span>: pointer; } <span class="hljs-selector-class">.navlist</span> { <span class="hljs-attribute">color</span>: <span class="hljs-number">#777</span>; .header_ul { <span class="hljs-attribute">padding</span>: <span class="hljs-number">0</span>; <span class="hljs-attribute">margin</span>: <span class="hljs-number">0</span>; <span class="hljs-attribute">list-style-type</span>: none; <span class="hljs-attribute">display</span>: flex; <span class="hljs-attribute">flex-direction</span>: row; @media (<span class="hljs-attribute">max-width</span>: <span class="hljs-number">650px</span>) { display: none; } <span class="hljs-selector-tag">li</span> { <span class="hljs-attribute">list-style-type</span>: none; <span class="hljs-attribute">width</span>: <span class="hljs-number">80px</span>; <span class="hljs-attribute">text-align</span>: center; <span class="hljs-attribute">line-height</span>: <span class="hljs-number">60px</span>; <span class="hljs-attribute">color</span>: <span class="hljs-number">#333</span>; <span class="hljs-attribute">font-family</span>: Arial, Helvetica, sans-serif; @media (<span class="hljs-attribute">max-width</span>: <span class="hljs-number">800px</span>) { width: <span class="hljs-number">70px</span>; } <span class="hljs-selector-tag">a</span> { <span class="hljs-attribute">display</span>: block; } } <span class="hljs-selector-class">.active</span> { <span class="hljs-attribute">background-color</span>: <span class="hljs-number">#4ba4ff</span>; a { <span class="hljs-attribute">color</span>: <span class="hljs-number">#fff</span>; } } <span class="hljs-selector-tag">li</span><span class="hljs-selector-pseudo">:hover</span> { <span class="hljs-attribute">background-color</span>: <span class="hljs-number">#4ba4ff</span>; a { <span class="hljs-attribute">color</span>: <span class="hljs-number">#fff</span>; } <span class="hljs-selector-tag">cursor</span>: <span class="hljs-selector-tag">pointer</span>; } } } } 
        </code>
      </div>
    </pre>
  </div>
</template>

<script>
export default {
  name: "live"
};
</script>

<style lang="scss" scoped>
#live {
  margin: 0 auto;
  max-width: 1200px;
  display: flex;
  flex-direction: row;
}
</style>
