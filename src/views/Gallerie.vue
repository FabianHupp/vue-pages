<template>
  <div ref="gallerie">

    <!-- Navigation -->
    <navigation></navigation>

    <!-- Main Body Content -->
    <div class="gallerie-content overflow-h">
      Gallerie
    </div>

  </div>
</template>

<script>
import Navigation from "../components/Navigation.vue";

export default {
  name: "Gallerie",
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
.gallerie-content {
  width: 100%;
  height: 100%;
  position: relative;
  top: 56px;
  margin: 0 0 0 0;
  padding: 0;
}
</style>
