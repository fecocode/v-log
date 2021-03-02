<template>
    <div class="contenedor"></div>
    <avatar-usuario :picture="picture" :name="name" :posts="posts"></avatar-usuario>
</template>

<script>
import AvatarUsuario from '../components/AvatarUsuario'
export default {
    name: 'AvatarUsuarioView',
    components: {
        AvatarUsuario,
    },
    data() {
        return {
            picture: "https://www.dogandpony.io/wp-content/uploads/2018/07/photo-1542103749-8ef59b94f47e.jpeg",
            name: 'Ada',
            posts: '2 Posts'
        }
    },
}
</script>

<style>

</style>