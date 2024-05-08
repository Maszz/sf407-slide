<div class="section">
      <h2 class="text-[24px] color-[#2980b9]">{{ data.frontend.title }}</h2>
      <ul class="list p-0">
        <li v-for="(description, technology) in data.frontend.items" :key="technology" class="bg-blue-100">
          <strong class="color-[#16a085]">{{ technology }}:</strong> {{ description }}
        </li>
      </ul>
</div>

<script setup lang="ts">
const data = {
  frontend: {
    title:  $frontmatter.props.title,
    items: {
      'Nest.js(node.js)' : 'A progressive Node.js framework for building efficient, reliable and scalable server-side applications',
      'Express.js(node.js)' : 'A fast, unopinionated, minimalist web framework for Node.js',
      'Fiber(Golang)' : 'Express inspired web framework build on top of Fasthttp, the fastest HTTP engine for Go',
      'Gin(Golang)' : 'A web framework written in Go (Golang). It features a Martini-like API with much better performance',
      'FastAPI(Python)' : 'A modern, fast (high-performance), web framework for building APIs with Python 3.6+ based on standard Python type hints',
    },
  }
}
</script>

<style>

.title {
  font-size: 28px;
  color: #2c3e50; /* Dark blue for the title to ensure readability */
  margin-bottom: 20px;
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}



.list {
  list-style-type: none;
}

.list li {
  margin: 10px 0;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1); /* Lighter shadow for a softer effect */
}

</style>
