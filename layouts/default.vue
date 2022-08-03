<template>
  <div :class="{ 
    'offline': $nuxt.isOffline,
    'online': $nuxt.isOnline
  }">
    <Navbar />
    <nuxt />
    <Footer v-if="routhPath !== '/'" />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";

export default {
  name: 'Home',
  components: {
    Navbar,
    Footer
  },
  computed: {
    routhPath() {
      return this.$route.path;
    }
  }
}
</script>

<style>
.offline {
  border: 5px solid red;
  min-height: 100vh;
}
.online {
  border: 2px solid #3EB37F;
  min-height: 100vh;
}
</style>
