<template>
  <div>
    <h1 :class="size">{{ text }}</h1>
  </div>
</template>

<script>
export default {
  name: "TitleComponent",
  props: ["text", "size"]
};
</script>

<style scoped>
.sm {
  font-size: 14px;
}
.md {
  font-size: 21px;
}
.lg {
  font-size: 32px;
}
</style>
