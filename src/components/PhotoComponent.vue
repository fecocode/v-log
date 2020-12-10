<template>
    <div>
        <img src="https://i.pinimg.com/564x/1c/d8/77/1cd8779f1b9dd4f4e0b1ade34c57f93c.jpg" alt="">
        <div class="photograf">Avatar fotografo</div>
        <div class="btn"></div>
    </div>
</template>

<script>
export default {
    name: 'PhotoComponent'
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
        left: -100px;
        color: #fff;
        font-size: 1.5rem;
    }
    .btn{
        height: 105px;
        background-color: #fff;
    }
</style>