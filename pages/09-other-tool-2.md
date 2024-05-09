<div class="section">
      <h2 class="text-[24px] color-[#2980b9]">{{ data.frontend.title }}</h2>
</div>

<div class="flex justify-center">
<img src="public/lazygit.png" alt="Lazygit images" class="w-[85%] h-auto block mt-5">
</div>

<script setup lang="ts">
const data = {
  frontend: {
    title:frontmatter.props.title,
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
/* img { */
/*   width: 100%; */
/*   height: auto; */
/*   display: block; */
/*   justify-content: center; */
/* } */
/**/

</style>
