<template>
  <div class="timeline">
    <div class="container timeline-wrapper">
      <main>
        <Posts />
      </main>

      <aside>
        <ProfileLink class="profile" />

        <ButtonCreatePost />

        <RecommendationUser class="recommendation" />

        <TheFooter />
      </aside>
    </div>
  </div>
</template>

<script>
import Posts from "../components/Posts";
import ProfileLink from "../components/ProfileLink";
import ButtonCreatePost from "../components/ButtonCreatePost";
import RecommendationUser from "../components/RecommendationUser";
import TheFooter from "../components/TheFooter";

export default {
  name: "Timeline",
  components: {
    Posts,
    ProfileLink,
    ButtonCreatePost,
    RecommendationUser,
    TheFooter
  }
};
</script>

<style lang="scss" scoped>
.timeline {
  background-color: $backgroundDark;
  padding-top: 120px;

  aside {
    display: none;
    position: fixed;
    margin-left: 645px;
    padding-top: 15px;
    width: 250px;

    .profile {
      margin-bottom: 20px;
    }

    .recommendation {
      margin: 40px 0;
    }
  }
}

@media screen and (min-width: $breakpointDesktop) {
  .timeline {
    .timeline-wrapper {
      display: flex;
    }

    main {
      width: 65%;
    }

    aside {
      display: initial;
    }
  }
}
</style>