<template>
  <div class="page_layout">
    <div class="page_hero text-center">
      <img src="@/assets/images/micheal.svg" alt="frontend engineer picture">
      <p class="text-margin font-weight-500 text-size-28">Hey, I’m Micheal.</p>
      <h1 class="font-weight-700 text-size-72">A Sofware Engineer focused on the Web <span>Frontend.</span></h1>
      <p class="text-margin font-weight-500 text-size-24 like">I like to make things, especially those that work on computers and on the web.</p>
      <!-- <div class="stack">
        <p class="text-size-16">Core: Javascript (Vue, Nuxt, React, Next)</p>
        <p class="text-size-16">Familiar: Python, Node.JS</p>
      </div> -->
      <!-- <p class="text-size-14">Code is not magic. ;)</p> -->
      <a 
        href="https://drive.google.com/file/d/10innKFkBQ57_LA4ONi5_pk-kZJB9xk2b/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        class="text-size-24"
      >
        <span class="font-weight-500">Resume</span>
        <img src="@/assets/images/arrow.svg" alt="download-icon" svg-inline>
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page_layout {
  margin-bottom: 50px;
  .page_hero {
    // padding: 100px 0 65px;
    img {
      width: 150px;
    }
    .text-margin {
      margin: 20px 0;
    }
    h1 {
      max-width: 675px;
      margin: 10px auto;
      line-height: 75px;
      @media screen and (max-width: 768px) {
        font-size: 40px !important;
        line-height: 47px !important;
      }
      span {
        background: url('@/assets/images/vector.svg');
        background-repeat: no-repeat;
        background-position: center;
      }
    }
    .like {
      @media screen and (max-width: 768px) {
        font-size: 2opx !important;
      }
    }
    a {
      background: #3EB37F;
      border: 2px solid #3EB37F;
      border-radius: 10px;
      color: #fff;
      padding: 15px 60px;
      margin-top: 20px;
      -webkit-transition-duration: 0.3s;
      transition-duration: 0.3s;
      -webkit-transition-property: transform;
      transition-property: transform;
      -webkit-transition-timing-function: ease-out;
      transition-timing-function: ease-out;
      cursor: pointer;
      img {
        width: 15px;
      }
    }
    button:hover {
      transform: translateY(-3px);
    }
  }
  
}

@media screen and (max-width: 768px) {
  .page_layout .page_hero {
    padding: 100px 20px 0 20px;
  }
}
</style>
