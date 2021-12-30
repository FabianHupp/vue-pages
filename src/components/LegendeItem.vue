<template>
  <b-row class="my-2 px-0">
    <b-col cols="auto" class="m-0 p-0">
      <div class="legend-circle shadow-sm" :class="color"></div>
    </b-col>
    <b-col cols="auto" class="legend-text">
      <h6>{{ label }}</h6>
    </b-col>
  </b-row>
</template>

<script>
export default {
  props: {
    color: String,
    label: String,
  }
};
</script>

<style scoped>
.legend-circle {
  position: relative;
  border-radius: 50%;
  width: 16px;
  height: 16px;
}

.legend-text {
  margin: 0;
  padding: 0 25px 0 3px;
  color: var(--legendItemTextColor);
}

.legend-text h6{
  text-align: left;
  padding: 0px 0 0 4px;
  font-size: 15px !important;
  color: var(--pTextColor);
}

.bordered-point {
  border: 2px solid var(--secondaryColor);
}
</style>
