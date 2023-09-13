<style scoped>
  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    gap: 1.5rem;
  }

  .social-links {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .title {
    font-size: 3rem;
    letter-spacing: -0.06rem;
  }
</style>

<template>
  <div class="main">
    <h3 class="title">Miksin.art</h3>
    <div class="social-links">
      <SocialLink src="/img/x.svg" href="https://twitter.com/miksin_" />
      <SocialLink src="/img/instagram.svg" href="https://www.instagram.com/miksin_" />
      <SocialLink src="/img/pixiv.png" href="https://www.pixiv.net/users/3774481" />
      <SocialLink src="/img/yt.svg" href="https://www.youtube.com/channel/UCmYleBoaTtNtPVZkaUwFxOw" />
      <SocialLink src="/img/tiktok.svg" href="https://www.tiktok.com/@miksin_" />
    </div>
  </div>
</template>
