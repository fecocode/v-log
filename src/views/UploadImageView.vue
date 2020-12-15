<template>
    <div>
        <upload-image :picture='picture' :titleImage='titleImage' :btn='btn'></upload-image>
    </div>
</template>

<script>
import UploadImage from '../components/UploadImage'
export default {
    name: 'UploadImageView',
    components: {
        UploadImage
    },
    data() {
        return {
            picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdscUrIlsBVUM-bUonK9v4GynPDkvfHNJNsQ&usqp=CAU',
            titleImage: 'perro_mirando_camara',
            btn: 'subir una nueva imagen'
        }
    },
}
</script>

<style>

</style>