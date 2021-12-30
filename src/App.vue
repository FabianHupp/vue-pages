<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap");

:root {
  --primaryColor: #fb7f3f;
  --secondaryColor: #01324c;
  --greySectionColor: #f4f5f7;

  --footerTextColor: #8898aa;
  --footerTextHoverColor: #525f7f;
}

html,
body {
  height: 100%;
  overflow: auto;
  overflow: initial;
  scroll-behavior: smooth;
}

#app {
  font-family: "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/*   main color classes   */
.prime-color {
  background-color: var(--primaryColor) !important;
}

.secondary-color {
  background-color: var(--secondaryColor) !important;
}

.prime-font {
  color: var(--primaryColor) !important;
}

.secondary-font {
  color: var(--secondaryColor) !important;
}

/*   additional section colors   */
.grey-section-color {
  background-color: var(--greySectionColor);
}

/*   often needed classes   */
.center-children {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
