<template>
  <ul class="links">
    <li v-for="(link, index) in links">
      <a class="links__link" :href="link.url" target="_blank" :aria-label="link.name" v-html="link.icon"></a>
    </li>
  </ul>
</template>

<script>
  import GithubIcon from "~/assets/svg/github-svgrepo-com.svg?raw";
  import EmailIcon from "~/assets/svg/email-svgrepo-com.svg?raw";
  import LinkedinIcon from "~/assets/svg/linkedin-svgrepo-com.svg?raw";
  import ResumeIcon from "~/assets/svg/article-svgrepo-com.svg?raw";

  export default {
    data: () => ({
    links: [
      {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/lukasz-dabik-3b8299bb/',
        icon: LinkedinIcon,
      },
      {
        name: 'github',
        url: 'https://github.com/luk-dev',
        icon: GithubIcon
      },
      {
        name: 'email',
        url: 'mailto:lukasz.dabik@gmail.com',
        icon: EmailIcon,
      },
      // {
      //   name: 'resume',
      //   url: '#!',
      //   icon: ResumeIcon,
      // }
    ]
  }),
  };
</script>



<style lang="scss">
  .links {
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    list-style: none;
    text-align: center;

    @media screen and (min-width: $md) {
      flex-direction: column;
      gap: 0;
    }

    svg {
      width: 40px;
      height: 45px;

      @media screen and (min-width: $md) {
        width: 30px;
        height: 35px;
      }
    }
    svg path {
      transition: fill 0.3s ease;
    }

    &__link:hover svg path {
      fill: $primary;
    }
  }
</style>