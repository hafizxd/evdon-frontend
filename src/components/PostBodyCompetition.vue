<template>
  <div class="post-body competition-post">
    <div>
      <small class="caption">Konten</small>
      <p>
        Saya telah mendapatkan
        <span class="highlight">Peringkat 1</span> pada kompetisi
        <span class="highlight">LKS Web Design</span> tingkat
        <span class="highlight">Kabupaten Kudus</span>
      </p>
    </div>
    <div>
      <small class="caption">Tanggal</small>
      <p>10 Mei 2020</p>
    </div>
    <div>
      <small class="caption">Tempat kompetensi</small>
      <p>SMK Raden Umar Said Kudus</p>
    </div>
    <div>
      <small class="caption">Jumlah peserta</small>
      <p>12</p>
    </div>
    <div>
      <small class="caption">Deskripsi</small>
      <p>Sebuah pengalaman yang bikin hati pengen neraktir satu sekolah</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostBodyCompetition"
};
</script>

<style lang="scss" scoped>
.competition-post {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 5px 10px;

  div:nth-child(1) {
    grid-column: 1 / span 4;
  }

  div:nth-child(2) {
    grid-column: 1 / span 4;
  }

  div:nth-child(3) {
    grid-column: 1 / span 2;
  }

  div:nth-child(4) {
    grid-column: 3 / span 2;
  }

  div:nth-child(5) {
    grid-column: 1 / span 4;
  }

  .caption {
    color: $textLight;
    font-size: 0.7em;
  }

  p {
    color: $text;
    font-size: 0.8em;

    .highlight {
      color: $competitionDark;
      font-size: 1em;
      font-weight: 600;
    }
  }
}

@media screen and (min-width: $breakpointTablet) {
  .competition-post {
    grid-gap: 10px 15px;

    div:nth-child(1) {
      grid-column: 1 / span 3;
    }

    div:nth-child(2) {
      grid-column: 4;
    }

    div:nth-child(3) {
      grid-column: 1;
    }

    div:nth-child(4) {
      grid-column: 2;
    }

    div:nth-child(5) {
      grid-column: 3 / span 2;
    }
  }
}
</style>