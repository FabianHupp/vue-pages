<template>
  <div class="section" :class="color">
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
  props: { color: String }
};
</script>

<style scoped>
.section {
  position: relative;
  width: 100%;
  padding: 96px 0 96px 0;
}
</style>
