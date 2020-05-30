<template>
  <div class="navbar" ref="navbar">
    <div class="container">
      <nav>
        <div class="brand">
          <a href="#">Evdon</a>
        </div>

        <div class="search">
          <input type="text" name="search" id="search" placeholder="Cari..." />
        </div>

        <div class="links">
          <ul>
            <li>
              <i class="material-icons-round">home</i>
            </li>
            <li>
              <i class="material-icons-outlined">notifications</i>
            </li>
            <li>
              <div class="profile-picture">
                <a href="#">
                  <img
                    src="http://s1.wailian.download/2020/05/30/IMG_20190619_214904-1.th.jpg"
                    alt="IMG_20190619_214904-1.jpg"
                    border="0"
                  />
                </a>
              </div>
            </li>
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
  padding: 12px 0;
  box-shadow: 0px 4px 15px rgba(96, 96, 96, 0.25);

  nav {
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    .brand {
      flex-grow: 1;

      a {
        color: #000000;
        text-decoration: none;
        font-weight: 700;
      }
    }

    .search {
      width: 70%;
      display: flex;

      input {
        @extend %input-text;
        width: 100%;
        height: 23px;
        padding-left: 10px;
      }

      @extend %input-placeholder;
    }

    .links {
      width: 100%;
      margin-top: 20px;

      ul {
        display: flex;
        justify-content: space-around;
        height: 24px;

        li {
          list-style: none;
          height: auto;

          .profile-picture {
            width: 24px;
            height: 24px;
            border-radius: 50%;
            overflow: hidden;

            img {
              width: 100%;
              height: auto;
            }
          }
        }
      }
    }
  }
}

@media screen and (min-width: $breakpointTablet) {
  .navbar {
    height: 70px;
    padding: 0;
    display: flex;
    align-items: center;

    nav {
      flex-wrap: nowrap;
      align-items: center;
      justify-content: space-between;

      .brand {
        width: 30%;
        flex-grow: 0;
      }

      .search {
        width: 30%;
      }

      .links {
        width: 30%;
        margin: 0;

        ul {
          justify-content: flex-end;

          li {
            margin-left: 15%;
          }
        }
      }
    }
  }
}
</style>