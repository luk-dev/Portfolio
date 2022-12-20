<template>
  <section id="Projects" class="projects">
    <div class="container">
      <h2>{{ $t('projects_heading') }}</h2>
      <ul class="projects__list">
        <Project v-for="project in projects_data" v-bind:project="project" v-bind:key="project.name"/>
      </ul>
    </div>
  </section>
</template>

<script>
import LinkIcon from "~/assets/svg/link-svgrepo-com.svg?raw";
export default {
  data: () => ({
    projects_data: [
      {
        name: 'Forcecamp',
        date: '02/2022',
        url: 'https://forcecamp.pl/',
        type: 'Ecommerce',
        icon: LinkIcon,
        frame: 'frame_forcecamp.jpg',
        tech: ['Wordpress', 'Woocommerce', 'Gutenberg', 'ACF', 'SCSS'],
        desc: 'Ecommerce store based on understrap theme/ Included css style inline/ Integration with delivery and payment modules/ RWD '
      },
      {
        name: 'Adhurt B2B',
        date: '10/2022',
        url: 'https://adhurt.pl/',
        type: 'Ecommerce',
        icon: LinkIcon,
        frame: 'frame_adhurt.jpg',
        tech: ['Wordpress', 'Woocommerce', 'Gutenberg', 'ACF', 'SCSS'],
        desc: 'Ecommerce store based on understrap theme/ Included css style inline/ Created custom registration form/ Prices visible only for registered/ RWD'
      }
    ]
  }),
}
</script>

<style lang="scss">
  .projects {
      margin: 10rem 0;
      &__list {
        padding: 0;
        margin: 0;
        margin-top: 2rem;
        list-style: none;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 40px;
    }
  }
</style>