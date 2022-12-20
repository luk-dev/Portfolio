<template>
  <li class="project" data-aos="fade-up" data-aos-delay="300">
    <figure class="project__frame">
      <a :href="project.url" target="_blank"><img class="" :src="require(`~/assets/images/${project.frame}`)" :alt="project.name"></a>
    </figure>
    <div class="project__content">
      <span class="project__headline">{{project.type}}</span>
      <h3>{{project.name}}</h3>
      <div class="project__description">
        <p>{{project.desc}}</p>
      </div>
      <ul class="project__tech-list">
        <li v-for="tech in project.tech">{{tech}}</li>
      </ul>
      <div class="project__anchor">
        <a :href="project.url" target="_blank" v-html="project.icon" aria-label="LUKDEV Projekt link"></a>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: [
    'project'
  ]
}
</script>

<style lang="scss">
  .project {
    &:not(:last-child) {
      margin-bottom: 4rem;
      @media screen and (min-width: $md) {
        margin-bottom: 7rem;
      }
    }

    @media screen and (min-width: $md) {
      display: grid;
      gap: 10px;
      grid-template-columns: repeat(12, 1fr);
      align-items: center;
    }

    &:nth-of-type(2n+1) {
      @media screen and (min-width: $md) {
        .project__content {
          grid-column: 7 / -1;
          text-align: right;
        }

        .project__frame {
          grid-column: 1 / 8;
        }

        .project__tech-list {
          justify-content: flex-end;
        }
      }
    }

    svg path {
      fill: $dark_gray;
    }
    &__frame {
      margin: 0;
      grid-area: 1 / 6 / -1 / -1;

      img {
        width: 100%;
        height: 100%;
      }
    }
    &__content {
      position: relative;
      grid-area: 1 / 1 / -1 / 7;
      margin-top: 3rem;
      @media screen and (min-width: $md) {
        margin-top: 0;
      }

      &:hover svg path {
        fill: $primary;
      }
    }

    &__description {
      position: relative;
      z-index: 2;
      padding: 15px;
      background-color: $black;
      color: $white;
    }

    &__headline {
      display: block;
      color: $primary;
      margin-bottom: 0.5rem;
      font-size: 13px;
      line-height: 1;
    }

    &__tech-list {
      margin-top: 2rem;
      padding: 0;
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
    }
    &__anchor {
      margin-top: 2rem;
    }
  }
</style>