---
class: text-center
---

<div class="bg-gray-light text-center">
  <h1>{{ data.title }}</h1>
  <p>{{ data.subtitle }}</p>
</div>

<script setup lang="ts">
  const data = {
    title: 'Tech Stack & Recommendation',
    subtitle: 'Tech Stack & Recommendation for Software Engineering',
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
  .text-center {
    text-align: center;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%; /* Adjust as needed */
    max-width: 800px; /* Set a max-width if necessary */
    padding: 20px; /* Adjust padding as needed */
  }
</style>
