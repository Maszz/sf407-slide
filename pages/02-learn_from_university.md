<v-click depth="2">
<h1>{{ data.title }}</h1>
</v-click>

<v-click>
<ul>
  <li v-for="(value, key) in data.items" :key="key">{{ key }} - {{ value }}</li>
</ul>
</v-click>

<script setup lang="ts">
const data = {
  title: 'What have i studied from university ? --',
  items: {
    'Software-Engineering-Process': 'Study about software engineering with UML, Agile, and software development process',
    'Computer-Network': 'Study about computer network with TCP/IP, OSI model, and network programming',
    'Operating-System': 'Study about operating system with Linux, Windows, and system programming',
    'Database': 'Study about database with MySQL, Oracle, and database programming',
    'Software-Testing': 'Study about software testing with unit testing, integration testing, and system testing',
    'Data-Structure': 'Study about data structure with array, linked list, stack, queue, tree, and graph',
    'Computer-Security': 'Study about computer security with cryptography, network security, and security programming',
    'Web-Programming': 'Study about web programming with HTML, CSS, JavaScript, and web development process',
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
