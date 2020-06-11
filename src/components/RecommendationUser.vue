<template>
  <div class="recommendation-user">
    <p>Rekomendasi</p>

    <div class="user">
      <div class="profile-picture">
        <img
          src="http://s1.wailian.download/2020/05/30/IMG_20190619_214904-1.th.jpg"
          alt="IMG_20190619_214904-1.jpg"
          border="0"
        />
      </div>
      <div class="profile-text">
        <a href="#" class="name">Hafiz Aminsalim</a>
        <a href="#" class="follow">Follow</a>
      </div>
    </div>

    <div class="user">
      <div class="profile-picture">
        <img
          src="http://s1.wailian.download/2020/05/30/IMG_20190619_214904-1.th.jpg"
          alt="IMG_20190619_214904-1.jpg"
          border="0"
        />
      </div>
      <div class="profile-text">
        <a href="#" class="name">Hafiz Aminsalim</a>
        <a href="#" class="follow">Follow</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendationUser"
};
</script>

<style lang="scss" scoped>
.recommendation-user {
  p {
    color: $textLight;
    font-size: 0.85em;
  }

  .user {
    display: flex;
    margin: 15px 0;

    .profile-picture {
      @include round-img(40px);
    }

    .profile-text {
      @extend %vertical-center;

      margin-left: 10px;

      .name {
        color: $textDark;
        text-decoration: none;
        font-size: 0.9em;
        display: block;
      }

      .follow {
        font-size: 0.7em;
        text-decoration: none;
      }
    }
  }
}
</style>