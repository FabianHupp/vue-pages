<template>
  <div class="section" :class="[gradient ? 'orange-gradient color' : '', color]">
    <b-container>
      <b-row align-h="center">
        <b-col cols="11" md="10">
          <slot></slot>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  props: { color: String, gradient: Boolean }
};
</script>

<style scoped>
.section {
  position: relative;
  width: 100%;
  padding: 96px 0 96px 0;
}

.orange-gradient {
  background: 
	  linear-gradient(
	  	white,
	  	white
	  ),
	  linear-gradient(
	  	30deg,
	  	var(--primaryColor),
	  	transparent
	  ),
	  linear-gradient(
	  	-120deg,
	  	white,
	  	transparent
	  );
	
  background-blend-mode: overlay;
}
</style>
