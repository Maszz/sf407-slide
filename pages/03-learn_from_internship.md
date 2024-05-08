<v-click depth="2">
<h1>{{ data.title }}</h1>
</v-click>

<v-click depth="2">
<ul>
 <li v-for="(value, key) in data.items" :key="key">
    <span class="color-[#4EC5D4]">{{ key }}</span> - <span class="color-[#c0c0c0]">{{ value }}</span>
  </li>
</ul>

</v-click>

<script setup lang="ts">
const data = {
  title: 'What have i studied from internship ? --',
  items: {
    'communication': 'Learn how to communicate with team members and customers',
    'problem-solving': 'Learn how to solve problems and find solutions',
    'teamwork': 'Learn how to work with team members and collaborate with others',
    'time-management': 'Learn how to manage time and prioritize tasks',
    'technical-skills': 'Learn new technical skills and improve existing skills',
    'professionalism': 'Learn how to be professional and work in a professional environment',
  }
}
</script>
<style>

li {
    color: #c0c0c0; /* Light gray color suitable for dark themes */
  }
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
