<template>
  <header class="header">
    <div class="container">
        <div>
            <figure>
                <img class="header__image" src="~/assets/images/logo.jpeg" />
            </figure>
            <h1>{{ $t('header_heading') }}</h1>
        </div>
    </div>
  </header>
</template>

<script>
export default {
  data: () => ({
    contact_data: {
        name: 'Lukasz Dabik',
        link: 'https://forcecamp.pl/',
    }
  }),
}
</script>

<style lang="scss" scoped>
    .header {
        text-align: center;
        margin-top: 3rem;

        &__image {
            border-radius: 50%;
            max-width: 120px;
            overflow: hidden;
        }
    }
</style>
