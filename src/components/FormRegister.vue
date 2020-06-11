<template>
  <div class="register">
    <div class="register-text">
      <p>Belum punya akun?</p>
      <h2>Daftar</h2>
    </div>
    <form action="#">
      <input type="text" placeholder="Nama Lengkap" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <input type="password" placeholder="Konfirmasi Password" />
      <input type="button" value="DAFTAR" />
    </form>
  </div>
</template>

<script>
export default {
  name: "FormRegister"
};
</script>

<style lang="scss" scoped>
.register {
  width: 80%;
  margin: 40px auto;

  .register-text {
    color: $text;
  }

  form {
    margin: 15px 0;
    display: flex;
    flex-direction: column;

    input:not([type="button"]) {
      @extend %input-text;
      margin: 7px 0;
      padding: 10px 0 10px 13px;
    }

    @extend %input-placeholder;

    input[type="button"] {
      @extend %button;
      margin: 15px 0;
      padding: 10px 0;
    }
  }
}

@media screen and (min-width: $breakpointTablet) {
  .register {
    margin: 50px auto;

    form {
      margin: 20px 0;

      input:not([type="button"]) {
        margin: 12px 0;
        padding-left: 18px;
        font-size: 1em;
      }

      input[type="button"] {
        margin: 20px 0;
      }
    }
  }
}
</style>