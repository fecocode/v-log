<template>
    <div>
        <img :src="pictureBackground" alt="imagen de fondo">
        <div class="photograf">Avatar fotografo</div>
        <div class="btn"></div>
    </div>
</template>

<script>
export default {
    name: 'PhotoComponent',
    props: {
        pictureBackground: String
    }
}
</script>

<style scoped>
    img{
        width: 100%;
        height: 707px;
    }
    .photograf{
        position: relative;
        top: -80px;
        color: #fff;
        font-size: 1.5rem;
    }
    .btn{
        height: 105px;
        background-color: #fff;
    }
</style>