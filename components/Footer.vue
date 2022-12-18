<template>
  <footer class="footer">
    <div class="container">
        <span class="footer__copy">{{ $t('footer_copyright') }}</span>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
  .footer {
    text-align: center;
    margin-top: 2rem;

    &__copy {
        font-size: 12px;
        color: lighten($dark, 50)
    }
  }
</style>