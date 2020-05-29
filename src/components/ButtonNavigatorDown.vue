<template>
  <div class="navigate-down">
    <a href="#auth">
      <v-icon name="angle-down" scale="2"></v-icon>
    </a>
  </div>
</template>

<script>
import SmoothScroll from "smooth-scroll";

export default {
  name: "BtnNavigatorDown",
  mounted() {
    const scroll = new SmoothScroll('a[href*="#"]', {
      speed: 1000,
      easing: "easeInOutQuad"
    });
  }
};
</script>

<style lang="scss" scoped>
.navigate-down {
  width: 3em;
  height: 3em;
  color: $primary;
  margin-left: 50%;
  background-color: #ffffff;
  box-shadow: 0px 5px 10px 0px rgba(97, 97, 97, 0.3);
  border-radius: 50%;
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translate(-50%, 50%);
  overflow: hidden;

  a {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: inherit;
  }
}
</style>