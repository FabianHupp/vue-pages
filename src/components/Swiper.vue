<template>
   <div class="swiper-container">
      <div class="swiper center-children">
         <img v-for="(image, index) in images" :key="index" :src="image.pathLong" :class="index == 0 ? 'first' : ''"/>
         <img v-for="(image, index) in images" :key="index" :src="image.pathLong"/>
      </div>
   </div>
</template>

<script>
   export default {
     name: 'SectionOurClients',
     data() {
       return {
         images: [],
         collectedImageWidth: null
       };
     },

     mounted() {
       this.importAll(require.context('../assets/CollectedGallery/', true, /\.jpg$/));
     },

     methods: {
       importAll(r) {
         r.keys().forEach(key => (this.images.push({ pathLong: r(key), pathShort: key })));
         console.log(this.images);
       },
     },
   };
</script>

<style scoped>
.swiper-container {
   width: 100%;
	overflow: hidden;
   height: fit-content;
	background: white;
}

.swiper {
	height: 400px;
	width: fit-content;
}

img {
  display: inline-block;
  width: 100%;
}

.first {
	animation: bannermove 200s linear infinite;
}
 
@keyframes bannermove {
 0% {
    margin-left: 0px;
 }
 100% {
    margin-left: -10125px;
 }
 
}
</style>