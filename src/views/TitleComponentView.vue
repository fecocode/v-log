<template>
  <title-component text="Este es el componente título" size="sm" />
  <title-component text="Este es el componente título" size="md" />
  <title-component text="Este es el componente título" size="lg" />
</template>

<script>
import TitleComponent from "../components/TitleComponent";

export default {
  name: "TitleComponentView",
  components: {
    TitleComponent
  }
};
</script>
