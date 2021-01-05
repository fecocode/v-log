<template>
    <div v-for="(post, index) in posts" :key='index'>
        <h2>{{post.title}}</h2>
        <p>{{post.msg}}</p>
    </div>
</template>

<script>
export default {
    name: 'ContentPost',
    props: {
        posts: String
    }
}
</script>

<style>
    h2 {
        text-align: left;
        font-size: 1.2rem;
    }
    p {
        text-align: initial;
    }
</style>