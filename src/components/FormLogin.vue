<template>
  <div class="login">
    <form action="#">
      <div class="inline-input">
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
      </div>
      <input type="button" value="LOGIN" />
    </form>
  </div>
</template>

<script>
export default {
  name: "FormLogin"
};
</script>

<style lang="scss" scoped>
.login {
  padding: 30px 0;

  form {
    display: flex;
    flex-direction: column;

    .inline-input {
      display: flex;
      justify-content: space-between;

      input:not([type="button"]) {
        @extend %input-text;
        width: 47%;
        padding: 7px 0 7px 13px;
      }

      @extend %input-placeholder;
    }

    input[type="button"] {
      @extend %button;
      width: 100%;
      margin: 15px 0;
      padding: 7px 0;
      align-self: center;
    }
  }
}

@media screen and (min-width: $breakpointTablet) {
  .login {
    form {
      flex-direction: row;

      .inline-input {
        width: 70%;
      }

      input[type="button"] {
        width: 20%;
        margin: 0 0 0 auto;
      }
    }
  }
}
</style>