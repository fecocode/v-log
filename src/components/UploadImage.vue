<template>
    <div class="container">
        <div class="image">
            <img :src="picture" alt="">
        </div>
        <div class="text">
            <p>{{titleImage}}</p>
            <button>{{btn}}</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'UploadImage',
    props: {
        picture: String,
        titleImage: String,
        btn: String
    }
}
</script>

<style scoped>
    .container{
        display: flex;
        width: 85%;
        justify-content: space-between;
        margin: 0 auto;
    }
    .container .image{
        width: 50%;
    }
    .container .image img{
        width: 100%;
        margin: 15px auto;
    }
    .container .text{
        display: flex;
        width: 100%;
        align-items: baseline;
        flex-flow: row wrap;
        justify-content: center;
    }
</style>