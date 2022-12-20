<template>
  <ul class="links">
    <li v-for="(link, index) in links">
      <a class="links__link" :href="link.url" target="_blank" :aria-label="link.name" :title="link.title" v-html="link.icon" rel="noreferrer"></a>
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
        title: 'LinkedIn profile',
        url: 'https://www.linkedin.com/in/lukasz-dabik',
        icon: LinkedinIcon,
      },
      {
        name: 'github',
        title: 'Github profile',
        url: 'https://github.com/luk-dev',
        icon: GithubIcon
      },
      {
        name: 'resume',
        title: 'Resume Lukasz Dabik',
        url: 'https://drive.google.com/file/d/1Z6biUa7qFAsvc7yt3LJPgpNvRsmWWxqS/view?usp=sharing',
        icon: ResumeIcon,
      },
      {
        name: 'email',
        title: 'Email to Lukasz Dabik',
        url: 'mailto:lukasz.dabik@gmail.com',
        icon: EmailIcon,
      }
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