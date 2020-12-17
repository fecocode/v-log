<template>
  <div class="div">
    <input :type="type" :placeholder="placeholder" @keyup="emitChangeValue">
  </div>
</template>

<script>
export default {
  name: "InputComponent",
  props: {
    placeholder: String,
    type: String,
  },
  methods: {
    emitChangeValue(event) {
      this.$emit('changed', event.target.value);
    }
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