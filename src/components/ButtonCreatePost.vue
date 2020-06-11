<template>
  <div class="create">
    <button>Buat Post</button>

    <!-- <div class="overlay">
      <div class="dialog">
        <div class="dialog-header">
          <div>Buat Post</div>
        </div>

        <div class="dialog-body">
          <div class="post-option"></div>

          <div class="post-form">
            <form action="#">
              <div class="input-text-wrapper">
                <div>
                  <label for="peringkat">Peringkat :</label>
                  <input type="number" id="peringkat" placeholder="Masukkan peringkat" />
                </div>
                <div>
                  <label for="nama-kompetisi">Nama kompetisi :</label>
                  <input type="text" id="nama-kompetisi" placeholder="Masukkan nama kompetisi" />
                </div>
                <div>
                  <label for="level">Tingkat kompetisi :</label>
                  <input type="text" id="level" placeholder="Masukkan tingkat" />
                </div>
                <div>
                  <label for="daerah">Daerah :</label>
                  <input type="text" id="daerah" placeholder="Masukkan daerah" />
                </div>
                <div>
                  <label for="tanggal">Tanggal kompetisi :</label>
                  <input
                    type="text"
                    id="tanggal"
                    placeholder="Masukkan tanggal"
                    onfocus="(this.type='date')"
                    onblur="(this.type='text')"
                  />
                </div>
                <div>
                  <label for="tempat">Tempat spesifik :</label>
                  <input type="text" id="tempat" placeholder="Masukkan tempat spesifik" />
                </div>
                <div>
                  <label for="jumlah">Jumlah peserta :</label>
                  <input type="number" id="jumlah" placeholder="Masukkan jumlah peserta" />
                </div>
                <div>
                  <label for="deskripsi">Deskripsi :</label>
                  <textarea id="deskripsi" placeholder="Masukkan deskripsi"></textarea>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div class="dialog-footer">footer</div>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "ButtonCreatePost"
};
</script>

<style lang="scss" scoped>
.create {
  width: 100%;

  button {
    @extend %button;
    width: 100%;
    padding: 5px 0;
  }

  .overlay {
    position: fixed;
    background-color: rgba(51, 51, 51, 0.5);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;

    display: flex;
    justify-content: center;
    align-items: center;

    .dialog {
      width: 500px;
      background-color: $background;
      border-radius: 20px;

      .dialog-header {
        padding: 10px 20px;
        color: $primaryDark;
        font-weight: 600;
      }

      .dialog-body {
        padding: 10px 20px;

        form {
          .input-text-wrapper {
            display: grid;
            grid-template-columns: 35% auto;
            grid-gap: 15px 13px;

            label {
              font-size: 0.9em;
              color: $text;
            }

            input,
            textarea {
              @extend %input-text;

              border-radius: 5px;
              border-width: 1px;
              width: 100%;
              padding: 8px 0 8px 10px;
            }
          }
        }
      }
    }
  }
}
</style>