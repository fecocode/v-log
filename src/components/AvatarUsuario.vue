<template>
    <div class="contenedor">
        <img :src='picture' alt="foto perfil">
        <h2>{{name}}</h2>
        <p>{{posts}}</p>
    </div>
</template>

<script>
export default {
    name: 'AvatarUsuario',
    props: {
        picture: Image,
        name: String,
        posts: String
    }
}
</script>

<style>
    .contenedor{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 20px 0;
    }
    img{
        width: 200px;
        height: 200px;
        border-radius: 50%;
    }
</style>