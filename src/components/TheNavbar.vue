<template>
  <div class="navbar" ref="navbar">
    <div class="container">
      <nav>
        <div class="brand">
          <a href="#">Evdon</a>
        </div>

        <div class="search">
          <input type="text" name="search" id="search" placeholder="Cari orang..." />
        </div>

        <div class="links">
          <ul>
            <li>H</li>
            <li>N</li>
            <li>P</li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  mounted() {
    let pathName = window.location.pathname;

    if (pathName === "/") this.$refs.navbar.style.display = "none";
  }
};
</script>

<style lang="scss" scoped>
.navbar {
  width: 100%;
  height: auto;
  background: red;

  nav {
    display: flex;
    flex-wrap: wrap;

    .brand {
      a {
        color: #000000;
        text-decoration: none;
        font-weight: 700;
      }
    }

    .links {
      width: 100%;
    }
  }
}
</style>