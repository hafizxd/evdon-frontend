<template>
  <div id="app">
    <Navbar />
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "./components/TheNavbar";

export default {
  name: "app",
  components: {
    Navbar
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: content-box;
}

html {
  font-size: 100%;
} /*16px*/

h1 {
  font-size: 2.074em;
}

h2 {
  font-size: 1.728em;
}

h3 {
  font-size: 1.44em;
}

h4 {
  font-size: 1.2em;
}

small {
  font-size: 0.833em;
}

.box {
  padding: 1.25em;
}

@media screen and (min-width: 1400px) {
  html {
    font-size: 125%;
  } /*20px*/
}

#app {
  font-family: "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.container {
  width: 90%;
  margin: 0 auto;
}
</style>
