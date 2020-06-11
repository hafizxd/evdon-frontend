<template>
  <div class="posts">
    <div class="card">
      <div class="card-header">
        <div class="profile-picture">
          <img
            src="http://s1.wailian.download/2020/05/30/IMG_20190619_214904-1.th.jpg"
            alt="IMG_20190619_214904-1.jpg"
            border="0"
          />
        </div>

        <div class="user-text">
          <a href="#" class="user-name">Hafiz Aminsalim</a>
          <small class="post-date">10 Mei 2020</small>
        </div>
      </div>

      <div class="card-body">
        <PostBodyCompetition />
      </div>

      <div class="card-footer">
        <div class="like">
          <button>
            <i class="material-icons-outlined">thumb_up</i>
          </button>
        </div>
        <div class="expand">
          <button>
            <i class="material-icons-outlined">expand_less</i>
          </button>
        </div>
        <div class="report">
          <button>
            <i class="material-icons-outlined">report</i>
          </button>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card-header">
        <div class="profile-picture">
          <img
            src="http://s1.wailian.download/2020/05/30/IMG_20190619_214904-1.th.jpg"
            alt="IMG_20190619_214904-1.jpg"
            border="0"
          />
        </div>

        <div class="user-text">
          <a href="#" class="user-name">Hafiz Aminsalim</a>
          <small class="post-date">10 Mei 2020</small>
        </div>
      </div>

      <div class="card-body">
        <PostBodyCompetition />
      </div>

      <div class="card-footer">
        <div class="like">
          <button>
            <i class="material-icons-outlined">thumb_up</i>
          </button>
        </div>
        <div class="expand">
          <button>
            <i class="material-icons-outlined">expand_less</i>
          </button>
        </div>
        <div class="report">
          <button>
            <i class="material-icons-outlined">report</i>
          </button>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card-header">
        <div class="profile-picture">
          <img
            src="http://s1.wailian.download/2020/05/30/IMG_20190619_214904-1.th.jpg"
            alt="IMG_20190619_214904-1.jpg"
            border="0"
          />
        </div>

        <div class="user-text">
          <a href="#" class="user-name">Hafiz Aminsalim</a>
          <small class="post-date">10 Mei 2020</small>
        </div>
      </div>

      <div class="card-body">
        <PostBodyCompetition />
      </div>

      <div class="card-footer">
        <div class="like">
          <button>
            <i class="material-icons-outlined">thumb_up</i>
          </button>
        </div>
        <div class="expand">
          <button>
            <i class="material-icons-outlined">expand_less</i>
          </button>
        </div>
        <div class="report">
          <button>
            <i class="material-icons-outlined">report</i>
          </button>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card-header">
        <div class="profile-picture">
          <img
            src="http://s1.wailian.download/2020/05/30/IMG_20190619_214904-1.th.jpg"
            alt="IMG_20190619_214904-1.jpg"
            border="0"
          />
        </div>

        <div class="user-text">
          <a href="#" class="user-name">Hafiz Aminsalim</a>
          <small class="post-date">10 Mei 2020</small>
        </div>
      </div>

      <div class="card-body">
        <PostBodyCompetition />
      </div>

      <div class="card-footer">
        <div class="like">
          <button>
            <i class="material-icons-outlined">thumb_up</i>
          </button>
        </div>
        <div class="expand">
          <button>
            <i class="material-icons-outlined">expand_less</i>
          </button>
        </div>
        <div class="report">
          <button>
            <i class="material-icons-outlined">report</i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PostBodyCompetition from "./PostBodyCompetition";

export default {
  name: "Posts",
  components: {
    PostBodyCompetition
  }
};
</script>

<style lang="scss" scoped>
.posts {
  width: 100%;

  .card {
    border: 2px solid $competition;
    border-radius: 20px;
    background-color: $background;
    margin-bottom: 20px;
    box-shadow: 0px 3px 12px rgba(104, 104, 104, 0.25);

    .card-header {
      padding: 15px 15px 10px 15px;
      display: flex;

      .profile-picture {
        @include round-img(35px);
      }

      .user-text {
        @extend %vertical-center;

        margin-left: 10px;

        .user-name {
          color: $textDark;
          text-decoration: none;
          font-size: 0.8em;
        }

        .post-date {
          color: $textLight;
          font-size: 0.7em;
        }
      }
    }

    .card-body {
      padding: 0 15px;
    }

    .card-footer {
      padding: 15px 0 5px 0;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      justify-items: center;
      align-items: start;

      .expand {
        border-left: 1px solid $textLighter;
        border-right: 1px solid $textLighter;
        width: 100%;
        display: flex;
        justify-content: center;
      }

      button {
        background: none;
        border: none;
        box-shadow: none;

        i {
          color: $text;
          font-weight: lighter;
          font-size: 1.4em;
        }
      }
    }
  }
}
</style>