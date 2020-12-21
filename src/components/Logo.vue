<template>
<div class="logotipo">
    <img :src="imagenLogo" alt="v-log">
</div>
  
</template>

<script>

export default {
    name: "Logo",
    data() {
        return {
            imagenLogo:"https:firebasestorage.googleapis.com/v0/b/v-log-d4c0e.appspot.com/o/logo.svg?alt=media&token=8649fac0-fd6b-4ebb-9f0f-59e63146d64e"
        }
    }
};
</script>

<style scoped>
    .logotipo {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
    }
</style>