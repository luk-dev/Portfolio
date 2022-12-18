<template>
    <div class="projects">
        <ul class="projects__list">
            <li class="project" v-for="(item, index) in projects_data">
                <figure>
                    <NuxtLink :to="item.link" target="_blank"><img class="project__logo" :src="require(`~/assets/images/${item.logo}`)" :alt="item.title"></NuxtLink>
                </figure>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  data: () => ({
    projects_data: [
      {
        title: 'forcecamp.pl',
        link: 'https://forcecamp.pl/',
        logo: 'forcecamp-logo.svg',
        build_with: ['Wordpress', 'Woocommerce', 'SCSS' ]
      },
      {
        title: 'adhurt.pl',
        link: 'https://adhurt.pl/',
        logo: 'adhurtpl-logo.png',
        build_with: ['Wordpress', 'Woocommerce', 'SCSS' ]
      }
    ]
  }),
}
</script>

<style lang="scss" scoped>
    .projects {
        margin: 10rem 0;
        &__list {
            padding: 0;
            margin: 0;
            list-style: none;
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 40px;
            @media (min-width: 768px) {
                flex-direction: row;
            }
        }
    }
    .project {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        &__logo {
            max-width: 240px;
        }
    }
</style>