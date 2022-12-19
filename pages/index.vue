<template>
<div class="index">
  <Sidebar/>
  <div class="index__wr">
    <Welcome/>
    <Projects/>
    <Footer/>
  </div>
</div>

</template>

<script>
export default {
  name: 'IndexPage',
}
</script>

<style lang="scss" scoped>
  .index {
    &__wr {
      @media screen and (min-width: $md) {
        margin-left: 10rem;
      }
    }
  }
</style>
