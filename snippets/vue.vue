// #region snippet
<template>
  <div>
    <h1>{{ state }}</h1>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
const state = ref("Hello world!!");
</script>
// #endregion snippet
