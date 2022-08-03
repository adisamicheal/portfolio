<template>
  <footer class="footer">
      <ul class="links">
        <li v-for="link in links" :key="link.id"><a :href="link.url" target="_blank" rel="noopener">{{ link.name }}</a></li>
      </ul>
  </footer>
</template>

<script>
export default {
    name: 'Footer',
    data() {
        return {
            links: [
                {
                    name: 'Github',
                    url: 'https://github.com/adisamicheal'
                },
                {
                    name: 'LinkedIn',
                    url: 'https://www.linkedin.com/in/micheal-adisa-5b5250170/'
                },
                {
                    name: 'Hashnode',
                    url: 'https://michellead.hashnode.dev/'
                },
                {
                    name: 'Twitter',
                    url: 'https://twitter.com/michellead'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.footer {
  padding-bottom: 100px;
//   margin-top: 100%;
}
.links {
  display: flex;
  justify-content: space-around;
  max-width: 650px;
  margin: auto;
}
@media screen and (max-width: 768px) {
  .footer {
    padding: 0 0 50px 20px;
  }
  .links {
    flex-direction: column;
    li {
      margin-top: 30px;
    }
  }
}
</style>