<template>
<div class="logo">
      <img src="https:firebasestorage.googleapis.com/v0/b/v-log-d4c0e.appspot.com/o/logo.svg?alt=media&token=8649fac0-fd6b-4ebb-9f0f-59e63146d64e" alt="logo">
      <h1>{{ mensaje }}</h1>
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
    img{
        background: red;
    }
    /* img{
        position: absolute;
        width: 43px;
        height: 50px;
        left: 97px;
        top: 307px;
    }
    h1{
        position: absolute;
        width: 120px;
        height: 54px;
        left: 156px;
        top: 307px;
        font-family: Comfortaa;
        font-style: normal;
        font-weight: normal;
        font-size: 48px;
        line-height: 54px; */
        /* identical to box height */

        /* display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: -0.015em;

        color: grey;
    } */
</style>