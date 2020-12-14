<template>
  <div class="div">
    <input :type="type" :placeholder="title">
  </div>
</template>

<script>
export default {
  name: "InputComponent",
  props: {
    title: String,
    type: String,
  }

}
</script>

<style scoped>
  input {
    width: 343px;
    height: 52px;
    border: 2px solid #31475E;
    color:  #31475E;
    padding: 0 17px;
  }

  ::placeholder {
    color:  #31475E;
  }
</style>