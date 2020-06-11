<template>
  <div class="landing-auth">
    <div class="banner">
      <div class="container">
        <div class="title">
          <a href="#">Evdon</a>
        </div>

        <div class="banner-text">
          <h2>Catat kegiatanmu</h2>
          <p>Catat hal-hal yang telah kamu lakukan dan berbagi dengan orang lain.</p>
        </div>

        <BtnNavigatorDown />
      </div>
    </div>

    <div class="auth" id="auth">
      <div class="container">
        <FormLogin />

        <FormRegister />
      </div>
    </div>
  </div>
</template>

<script>
import FormLogin from "../components/FormLogin";
import FormRegister from "../components/FormRegister";
import BtnNavigatorDown from "../components/ButtonNavigatorDown";

export default {
  name: "LandingAuth",
  components: {
    FormLogin,
    FormRegister,
    BtnNavigatorDown
  }
};
</script>

<style lang="scss" scoped>
.container {
  width: 80%;
  margin: auto;
}

.banner {
  color: #ffffff;
  height: 90vh;
  position: relative;
  margin-bottom: 3rem;
  background-color: $primary;
  background-blend-mode: overlay;
  background-image: url("http://s1.wailian.download/2020/05/16/cartographer.png");

  .title {
    padding: 30px 0;
    font-weight: 700;

    a {
      color: inherit;
      text-decoration: none;
    }
  }

  .banner-text {
    height: 55vh;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h2 {
      margin: 1.25rem 0;
    }
  }
}

.auth {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

@media screen and (min-width: $breakpointTablet) {
  .landing-auth {
    .container {
      width: 60%;
    }

    .banner {
      .banner-text {
        h2 {
          font-size: 2.1em;
        }
      }
    }
  }
}

@media screen and (min-width: $breakpointDesktop) {
  .landing-auth {
    display: flex;
    align-content: stretch;

    .container {
      width: 70%;
    }

    .banner,
    .auth {
      width: 50%;
    }

    .banner {
      height: 100vh;
      margin: 0;

      .banner-text {
        text-align: left;
        height: 60vh;

        h2 {
          font-size: 2.5em;
          margin: 20px 0;
        }
      }

      .navigate-down {
        display: none;
      }
    }

    .auth {
      display: initial;
    }
  }
}
</style>