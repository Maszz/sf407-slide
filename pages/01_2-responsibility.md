<v-click depth="2">
<h1>{{ data.title }}</h1>
</v-click>

<v-click>
<ul>
  <li v-for="(value, key) in data.items" :key="key">
    <span class="color-[#4EC5D4]">{{ key }}</span> - <span class="color-[#c0c0c0]">{{ value }}</span>
  </li>
</ul>
</v-click>

<script setup lang="ts">
const data = {
  title: 'Responsibility --',
  items: {
    'Fullstack Developer': 'Develop and maintain web applications using Nest.js, Next.js, Fiber, and Python.',
    'PoC a Solution': 'Design and develop Proof of Concept for new products.',
    'System Design': 'Design and implement system architecture, including database structures.',
    'CI/CD': 'Set up and manage CI/CD pipelines for streamlined deployment.',
    'Tool Development': 'Develop debugging and internal tools for enhancing development and production processes.'
  }
}
</script>
<style>

h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}

</style>

<!--
Here is another comment.
-->
