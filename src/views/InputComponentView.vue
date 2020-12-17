<template>
  <!-- type="email" example -->
  <input-component placeholder="usuario@ejemplo.com" type="email" @changed="inputChange"></input-component>
  <!-- type="password" example -->
  <input-component type="password"></input-component>
</template>

<script>
import InputComponent from "../components/InputComponent";

export default {
  name: "InputComponentView",
  components: {
    InputComponent
  },
  methods: {
    inputChange(event) {
      console.log(event);
    }
  }
}
</script>

<style>

</style>
