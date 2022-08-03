<template>
  <header>
    <nav>
        <ul>
            <li><nuxt-link to="/">home</nuxt-link></li>
            <li><nuxt-link to="/portfolio">Portfolio</nuxt-link></li>
            <li><nuxt-link to="/blog">Blog</nuxt-link></li>
            <li><nuxt-link to="/contact">Contact</nuxt-link></li>
        </ul>
    </nav>
  </header>
</template>

<script>
export default {

}
</script>

<style scoped>
header {
    padding: 50px 10px;
    margin: auto;
    max-width: 800px;
}
ul {
    display: flex;
    align-items: center;
    gap: 20px;
    list-style: none;
    justify-content: space-around;
}
ul> li > a {
    text-decoration: none;
    color: #3EB37F;
    font-size: 18px;
    font-weight: 500;
    text-transform: uppercase;
}

@media screen and (max-width: 768px) {
    ul {
        flex-direction: column;
    }
    .heading {
        padding: 10px 20px;
    }
}
</style>