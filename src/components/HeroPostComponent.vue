<template>
    <div class="container">
        <div id="exit">
        </div>
        <div id="autor">
            <img id="avatar" src="https://firebasestorage.googleapis.com/v0/b/v-log-d4c0e.appspot.com/o/avatar_1.jpeg?alt=media&token=886d56d9-123c-46ff-be91-fe77251ba613" alt="">
            <div class="arroba">
              <span>Ridhwan Nordin</span>
              <span>@ridzjcob</span>
            </div>
        </div>
        <div class="heroSquare">
            <h1>MI <br />PRIMER <br />POST <br />SOBRE <br />VUE </h1>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HeroPostComponent",
    }
</script>

<style scoped>

#avatar{
    border-radius: 20px;
    height: 150%;
}

#exit{
  border: rgb(255, 0, 0) 2px solid;
  position: absolute;
  top: 5%;
  right: 5%;
  height: 24px;
  width: 24px;
}

#autor{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border: rgb(0, 0, 0) 2px solid;
  position: absolute;
  
  top: 5%;
  left: 5%;
  height: 20px;
  width: 150px;
  color: white;
  font-size: 13px;
}

.arroba{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  font-size: 11px;
  margin-left: 10px;
  padding: 0px;
}

.container{
  box-sizing: border-box;
  display: flex;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background: url(photo-1561435133-c44befe370ab.jpg);
  background-position: center;
  background-size: 160%;
}
.heroSquare{
  box-sizing: border-box;
  padding: 0;
  background-color: rgb(0, 0, 0, 0.5);
  width: 100%;

}
h1 {
  font-size: 250%;
  line-height: 56px;
  color: white;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.35);
backdrop-filter: blur(1px);
}
</style>