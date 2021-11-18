<template>
  <div :class="{ 
    'offline': $nuxt.isOffline,
    'online': $nuxt.isOnline
  }">
    <nuxt />
  </div>
</template>

<style>
.offline {
  border: 5px solid red;
}
.online {
  border: 2px solid #3EB37F;
}
</style>
