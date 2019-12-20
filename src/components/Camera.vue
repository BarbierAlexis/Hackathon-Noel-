<template>
  <div>
    <video autoplay class="feed"></video>
    <button @click="$emit('takePicture')" class="snap">SNAP</button>
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
    border: 3px solid black;
    outline: none;
   }
</style>