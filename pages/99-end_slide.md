---
class: text-center
highlighter: shiki
mdc: true
fonts:
  # basically the text
  sans: Robot
  # use with `font-serif` css class from UnoCSS
  serif: Robot Slab
  # for code blocks, inline code, etc.
  mono: Fira Code
---

<h1 class="corlor-[#c0c0c0]"> {{ data.title }} </h1>
<script setup lang="ts">
  const data = {
    title: $frontmatter.props.title,
  }
</script>

<style>
h1 {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 48px;
  color: #c0c0c0;

}
</style>

<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->
