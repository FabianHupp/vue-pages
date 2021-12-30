<template>
  <div class="home" ref="screen">
    <navigation></navigation>
    <div class="main-content">Downloads</div>
  </div>
</template>

<script>
import Navigation from "../components/Navigation.vue";

export default {
  name: "Galerie",
  components: {
    Navigation,
  },
  mounted() {
    this.getAllImages();
  },
  data() {
    return {
      images: [{ path: "../assets/Galerie/1992_Oktober/1.jpg" }],
    };
  },
  methods: {
    getAllImages() {
      for (let i = 0; i < this.images.length; i++) {
        console.log(this.images[i].path);
      }
    },
  },
};
</script>

<style scoped>
.home {
  height: 300%;
  width: 100%;
  margin: 0;
  padding: 0;
}

.main-content {
  text-align: left;
  position: relative;
  padding: 0 0 0 250px;
  width: 100%;
  height: 100%;
}
</style>
