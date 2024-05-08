<template>
  <div class="bg-gray-light p-[20px] max-w-[90%] m-auto color-[#333]">
    <h1 class="title">{{ $frontmatter.layout_props.title }}</h1>
    <div class="section">
      <slot />
    </div>
  </div>
</template>

<style>
.title {
  font-size: 28px;
  color: #2c3e50; /* Dark blue for the title to ensure readability */
  margin-bottom: 20px;
  background-color: #2b90b6;
  background-image: linear-gradient(45deg, #4ec5d4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>
