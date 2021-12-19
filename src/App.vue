<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style langs="scss">
@import "https://unpkg.com/aos@next/dist/aos.css";
</style>

<style>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap");

:root {
  --main-color: #1c1d22;
}

html,
body {
  height: 100%;
  overflow: auto;
  overflow: initial;
  scroll-behavior: smooth;
}

* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app {
  /*font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;*/
  font-family: "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /*color: #2c3e50;*/
  height: 100%;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.orange-prime {
  /*background-color: #fb6340;*/
  background-color: #fb7f3f;
}

.purple-secondary {
  background-color: #01324c !important;
}

.purple-secondary-font {
  color: #01324c;
}

.blue-secondary {
  background-color: #525f7f;
}

.third {
  background-color: #404649;
}

.fourth {
  background-color: #213c4b;
}
</style>
