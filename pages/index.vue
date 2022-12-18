<template>
  <div>
    <Header/>
    <section class="index__wr">
      <div class="container">
        <Projects/>
      </div>
    </section>
    <Footer/>
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
      max-width: 1170px;
      margin: 0 auto;
      padding: 0 15px;
    }
  }
</style>
