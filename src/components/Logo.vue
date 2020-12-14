<template>
<div class="logo">
      <img src="https:firebasestorage.googleapis.com/v0/b/v-log-d4c0e.appspot.com/o/logo.svg?alt=media&token=8649fac0-fd6b-4ebb-9f0f-59e63146d64e" alt="logo">
      <!-- <h1>{{ mensaje }}</h1> -->
</div>
  
</template>

<script>

export default {
    name: "Logo",
    data() {
        return {
            mensaje: "v-log",
        }
    }

};
</script>

<style scoped>
    .logo {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
    }
    /* img{
        background: red;
    } */
</style>