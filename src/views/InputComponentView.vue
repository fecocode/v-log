<template>
  <input-component title="usuario@ejemplo.com" type="email"></input-component>
  <input-component type="password"></input-component>
</template>

<script>
import InputComponent from "../components/InputComponent";

export default {
  name: "InputComponentView",
  components: {
    InputComponent
  }
}
</script>

<style>

</style>
