<template>
  <div class="home" ref="screen">
    <div class="main-content">
      Training
    </div>

  </div>
</template>

<script>

export default {
  name: "Galerie",
  components: {
  },
  mounted() {
      this.getAllImages();
  },
  data() {
    return {
      images: [{path: '../assets/Galerie/1992_Oktober/1.jpg'}]
    }
  },
  methods: {
    getAllImages() {
          for(let i = 0; i < this.images.length; i++) {
            console.log(this.images[i].path);
          }
    }
  }
};
</script>

<style scoped>
  .home{
      height: 300%;
      width: 100%;
      margin: 0;
      padding: 0;
      background-image: url(../assets/Images/back.jpg);
  }

  .main-content {
    text-align: left;
    position: relative;
    padding: 0 0 0 250px;
    width: 100%;
    height: 100%;
  }
</style>