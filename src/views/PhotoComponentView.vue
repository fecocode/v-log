<template>
    <div>
        <photo-component :pictureBackground="pictureBackground"></photo-component>
    </div>
</template>

<script>
import PhotoComponent from '../components/PhotoComponent.vue'
export default {
    name: 'PhotoComponentView',
    components: { PhotoComponent },
    data() {
        return {
            pictureBackground: "https://i.pinimg.com/564x/1c/d8/77/1cd8779f1b9dd4f4e0b1ade34c57f93c.jpg"
        }
    },
}
</script>
