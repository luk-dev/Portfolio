<template>
  <section id="Welcome" class="welcome">
    <div class="container">
      <span class="welcome__hi">{{ $t('welcome_hi') }}</span>
      <h1>{{ $t('welcome_h1') }}</h1>
      <h2>{{ $t('welcome_h2') }}</h2>
      <div class="welcome__btn-wr">
        <a class="btn" href="#Projects">{{ $t('welcome_btn') }}</a>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .welcome {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10rem 0;

    @media screen and (min-width: $md) {
      min-height: 90vh;
      margin: 0;
    }

    &__hi {
      color: $primary;
      display: block;
      margin-bottom: 0.5rem;
    }

    &__btn-wr {
      margin-top: 2rem;
    }
  }
</style>