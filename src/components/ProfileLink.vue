<template>
  <div class="profile-link">
    <div class="profile-picture">
      <img
        src="http://s1.wailian.download/2020/05/30/IMG_20190619_214904-1.th.jpg"
        alt="IMG_20190619_214904-1.jpg"
        border="0"
      />
    </div>
    <div class="profile-text">
      <p>Hafiz Aminsalim</p>
      <a href="#">Lihat profil</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileLink"
};
</script>

<style lang="scss" scoped>
.profile-link {
  display: flex;

  .profile-picture {
    @include round-img(50px);
  }

  .profile-text {
    @extend %vertical-center;

    margin-left: 10px;

    p {
      color: $textDark;
      font-size: 1em;
    }

    a {
      font-size: 0.75em;
      text-decoration: none;
    }
  }
}
</style>