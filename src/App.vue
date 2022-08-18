<template>
  <div>
    <metainfo>
      <template v-slot:title="{ content }">{{ content ? `${content}` : `SITE_NAME` }}</template>
    </metainfo>
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useMeta } from 'vue-meta'

export default defineComponent({
  setup () {
    useMeta({
      title: 'Micheal Adisa - Home',
      htmlAttrs: { lang: 'en', amp: true }
    })
  }
})
</script>

<style lang="scss">
/* Font */

@import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@100;200;300;400;500;600;700;800;900&display=swap');

/* End of font */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  padding: 0;
  margin: 0;
  font-family: 'League Spartan', sans-serif;
}
.navbar {
  z-index: 1000;
  width: 100%;
}
.container {
  @media (min-width: 969px) {
    width: 80%;
  }
  margin: auto;
}

.shake {
  animation: bounce 2s infinite;
	-webkit-animation: bounce 2s infinite;
	-moz-animation: bounce 2s infinite;
	-o-animation: bounce 2s infinite;
}

.fadein-left {
  animation: 1s fadeInLeft ease-in-out;
}

.fadein-right {
  animation: 1s fadeInRight ease-in-out;
}

.fadein-up {
  animation: 1s fadeInUp ease-in-out;
}

.fadein-up-fast {
  animation: .5s fadeInUp ease-in-out;
}

.fadein-up-faster {
  animation: .25s fadeInUp ease-in-out;
}

@keyframes fadeInLeft {
  0% {
    opacity: 0;
    transform: translateX(1.5rem);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes fadeInRight {
  0% {
    opacity: 0;
    transform: translateX(0);
  }

  100% {
    opacity: 1;
    transform: translateX(1.5rem);
  }
}
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(1.5rem);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes bounce {
	0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
	40% {transform: translateY(-30px);}
	60% {transform: translateY(-15px);}
}
@-webkit-keyframes bounce {
	0%, 20%, 50%, 80%, 100% {-webkit-transform: translateY(0);}	
	40% {-webkit-transform: translateY(-30px);}
	60% {-webkit-transform: translateY(-15px);}
}
 
@-moz-keyframes bounce {
	0%, 20%, 50%, 80%, 100% {-moz-transform: translateY(0);}
	40% {-moz-transform: translateY(-30px);}
	60% {-moz-transform: translateY(-15px);}
}
 
@-o-keyframes bounce {
	0%, 20%, 50%, 80%, 100% {-o-transform: translateY(0);}
	40% {-o-transform: translateY(-30px);}
	60% {-o-transform: translateY(-15px);}
}
</style>
