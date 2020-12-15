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
        picture: Image,
        titleImage: String,
        btn: String
    }
}
</script>

<style>
    .container{
        display: flex;
        width: 100%;
        justify-content: space-between;
    }
    .container .image img{
        width: 200px;
        margin: 15px;
        height: 150px;
    }
    .container .text{
        display: flex;
        width: 100%;
        flex-direction: column;
        justify-content: space-evenly;
    }
</style>