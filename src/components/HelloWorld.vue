<template>
  <div class="container">
    <div id="exit">
    </div>
    <div id="autor">
      <p>Ridhwan Nordin</p>
      <p id="arroba">@ridzjcob</p>
    </div>
    <div class="heroSquare">
      <h1>MI <br />PRIMER <br />POST <br />SOBRE <br />VUE </h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#exit{
  border: rgb(255, 0, 0) 2px solid;
  position: absolute;
  top: 5%;
  right: 5%;
  height: 24px;
  width: 24px;
}

#autor{
  border: rgb(0, 0, 0) 2px solid;
  position: absolute;
  
  top: 5%;
  left: 5%;
  height: 20px;
  width: 150px;
  color: white;
  font-size: 13px;
  line-height: 15px;
}

#arroba{
  font-size: 11px;
  line-height: 13px;
  margin: 0px;
  padding: 0px;
}

.container{
  display: flex;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background: url(photo-1561435133-c44befe370ab.jpg);
  background-position: center;
  background-size: 160%;
}
.heroSquare{
  padding: 30px;
  background-color: rgb(0, 0, 0, 0.5);
  width: 100vw;

}
h1 {
  font-size: 250%;
  line-height: 56px;
  color: white;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.35);
backdrop-filter: blur(1px);
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
