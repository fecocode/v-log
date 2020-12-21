<template>
  <div class="text-area">
    <textarea :placeholder="placeholder" v-model="newText" ></textarea>
  </div>
</template>

<script>
export default {
    name: "TextArea",
    props: {
        placeholder: String,
    },
    data(){
        return {
            newText: '',
        };
    },
    watch: {
        newText: function(newValue){
            this.$emit('changed', newValue);
        }
    },
}
</script>

<style scoped>
    .text-area{
        display: flex;
        justify-content: center;
        position: relative;
        top: 200px;
    }
    textarea{
        height: 60vh;
        width: 343px;
        border: 2px solid #31475E;
        font-family: Roboto;
        font-size: 15px;
        font-style: normal;
        font-weight: 400;
        line-height: 18px;
        text-align: left;
        color:#31475E;
    }
    textarea:focus {
        outline: none;
        border-color: rgb(160, 10, 219);
        box-shadow: 0 0 8px black;
    }
    
</style>
