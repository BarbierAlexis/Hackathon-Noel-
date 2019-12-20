<template>
  <div class="camera-block">
    <video autoplay class="feed"></video>
    <button @click="$emit('takePicture')" class="snap"><img src="@/assets/photo.png" alt="twitter_logo" heigt="45" width="45"></button>
  </div>
</template>

<script>
export default {
  name: "camera",
  methods: {
    init () {
      if('mediaDevices' in navigator && 'getUserMedia'){
        navigator.mediaDevices.getUserMedia({video: true}).then(stream => {
          const videoPlayer = document.querySelector("video");
          videoPlayer.srcObject = stream;
          videoPlayer.play();
        })
      }else {
        alert("NO!")
      }
    }
  },
  beforeMount () {
    this.init();
  }
}
</script>

<style scoped>
  .camera{
    width: 100vw;
    height: 100vh;
  }

  .camera-block{
    margin-top: 30px;
  }

  .feed{
    display: block;
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
    box-shadow: 6px 6px 12px 0px;
  }

  .snap{
    width: 75px;
    height: 75px;
    border-radius: 50%;
    background-color: #ffc107;
    border: 0.1px solid black;
    outline: none;
    margin-top: 30px;
   }
</style>