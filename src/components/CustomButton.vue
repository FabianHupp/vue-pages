<template>
  <a class="custom-button rounded" :class="[bgColor, textColor]" :href="link" target="_blank">
    <b-icon :icon="icon" class="icon"></b-icon>
    {{ text }}
  </a>
</template>

<script>
export default {
  props: {
    text: String,
    bgColor: String,
    icon: String,
    textColor: String,
    link: String,
  },
};
</script>

<style scoped>
.custom-button {
  position: relative;
  width: fit-content;
  padding: 10px 20px 10px 20px;
  font-size: 14px;
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;  

  box-shadow: 0 4px 6px rgb(50 50 93 / 11%), 0 1px 3px rgb(0 0 0 / 8%);
  transition: top 0.12s ease-in-out, box-shadow 0.12s ease-in-out;
}

.custom-button:hover {
  top: -1px;
  text-decoration: none;
  color: #fff;
  box-shadow: 0 4px 6px rgb(50 50 93 / 20%), 0 1px 3px rgb(0 0 0 / 14%);
}

.icon {
  margin-right: 10px;
  font-size: 14px;
}
</style>
