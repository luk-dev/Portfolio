<template>
  <div class="sidebar">
    <NuxtLink to="/" aria-label="LUKDEV Portfolio">
      <img class="sidebar__logo" src="~/assets/images/logo.jpeg" alt="LUKDEV Logo"/>
    </NuxtLink>
    <Links/>
  </div>
</template>

<style lang="scss" scoped>
  .sidebar {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: 6rem;
    gap: 5rem;

    @media screen and (min-width: $md) {
      background-color: $black;
      width: 10rem;
      position: fixed;
      left: 0;
      bottom: 0;
      top: 0;
      justify-content: space-between;
      padding-top: 4rem;
      padding-bottom: 4rem;
    }

    &__logo {
      border-radius: 50%;
      max-width: 100px;
      overflow: hidden;
      @media screen and (min-width: $md) {
        max-width: 50px;
      }
    }
  }
</style>