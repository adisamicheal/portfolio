<template>
  <header>
    <div class="header">
      <router-link :to="{ name: 'home'}">
        <svg class="header__logo" width="200" height="56" viewBox="0 0 200 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.1322 41V13.224H7.4602L8.0762 16.976C8.9722 15.632 10.1482 14.568 11.6042 13.784C13.0975 12.9627 14.8149 12.552 16.7562 12.552C21.0495 12.552 24.0922 14.2133 25.8842 17.536C26.8922 16.0053 28.2362 14.792 29.9162 13.896C31.6335 13 33.5002 12.552 35.5162 12.552C39.1375 12.552 41.9189 13.6347 43.8602 15.8C45.8015 17.9653 46.7722 21.1387 46.7722 25.32V41H39.6042V25.992C39.6042 23.6027 39.1375 21.7733 38.2042 20.504C37.3082 19.2347 35.9082 18.6 34.0042 18.6C32.0629 18.6 30.4949 19.3093 29.3002 20.728C28.1429 22.1467 27.5642 24.1253 27.5642 26.664V41H20.3962V25.992C20.3962 23.6027 19.9295 21.7733 18.9962 20.504C18.0629 19.2347 16.6255 18.6 14.6842 18.6C12.7802 18.6 11.2309 19.3093 10.0362 20.728C8.87887 22.1467 8.3002 24.1253 8.3002 26.664V41H1.1322Z" fill="#72FFFF"/>
          <path d="M80.5293 41.672C77.6919 41.672 75.1906 41.056 73.0253 39.824C70.8599 38.592 69.1426 36.8747 67.8733 34.672C66.6413 32.4693 66.0253 29.9493 66.0253 27.112C66.0253 24.2747 66.6413 21.7547 67.8733 19.552C69.1426 17.3493 70.8599 15.632 73.0253 14.4C75.1906 13.168 77.6919 12.552 80.5293 12.552C84.0759 12.552 87.0626 13.4853 89.4893 15.352C91.9159 17.1813 93.4653 19.72 94.1373 22.968H86.5773C86.2039 21.624 85.4573 20.5787 84.3373 19.832C83.2546 19.048 81.9666 18.656 80.4733 18.656C78.4946 18.656 76.8146 19.4027 75.4333 20.896C74.0519 22.3893 73.3613 24.4613 73.3613 27.112C73.3613 29.7627 74.0519 31.8347 75.4333 33.328C76.8146 34.8213 78.4946 35.568 80.4733 35.568C81.9666 35.568 83.2546 35.1947 84.3373 34.448C85.4573 33.7013 86.2039 32.6373 86.5773 31.256H94.1373C93.4653 34.392 91.9159 36.912 89.4893 38.816C87.0626 40.72 84.0759 41.672 80.5293 41.672Z" fill="#72FFFF"/>
          <path d="M100.499 41V0.679993H107.667V17.48C108.601 15.9493 109.851 14.7547 111.419 13.896C113.025 13 114.854 12.552 116.907 12.552C120.342 12.552 122.993 13.6347 124.859 15.8C126.763 17.9653 127.715 21.1387 127.715 25.32V41H120.603V25.992C120.603 23.6027 120.118 21.7733 119.147 20.504C118.214 19.2347 116.721 18.6 114.667 18.6C112.651 18.6 110.971 19.3093 109.627 20.728C108.321 22.1467 107.667 24.1253 107.667 26.664V41H100.499Z" fill="#72FFFF"/>
          <path d="M148.178 41.672C145.34 41.672 142.839 41.056 140.674 39.824C138.508 38.592 136.791 36.8747 135.522 34.672C134.29 32.4693 133.674 29.9493 133.674 27.112C133.674 24.2747 134.29 21.7547 135.522 19.552C136.791 17.3493 138.508 15.632 140.674 14.4C142.839 13.168 145.34 12.552 148.178 12.552C151.724 12.552 154.711 13.4853 157.138 15.352C159.564 17.1813 161.114 19.72 161.786 22.968H154.226C153.852 21.624 153.106 20.5787 151.986 19.832C150.903 19.048 149.615 18.656 148.122 18.656C146.143 18.656 144.463 19.4027 143.082 20.896C141.7 22.3893 141.01 24.4613 141.01 27.112C141.01 29.7627 141.7 31.8347 143.082 33.328C144.463 34.8213 146.143 35.568 148.122 35.568C149.615 35.568 150.903 35.1947 151.986 34.448C153.106 33.7013 153.852 32.6373 154.226 31.256H161.786C161.114 34.392 159.564 36.912 157.138 38.816C154.711 40.72 151.724 41.672 148.178 41.672Z" fill="#72FFFF"/>
          <path d="M191.894 41V0.679993H199.062V41H191.894Z" fill="#72FFFF"/>
          <path d="M177.541 41.672C180.378 41.672 182.88 41.056 185.045 39.824C187.21 38.592 188.928 36.8747 190.197 34.672C191.429 32.4693 192.045 29.9493 192.045 27.112C192.045 24.2747 191.429 21.7547 190.197 19.552C188.928 17.3493 187.21 15.632 185.045 14.4C182.88 13.168 180.378 12.552 177.541 12.552C173.994 12.552 171.008 13.4853 168.581 15.352C166.154 17.1813 164.605 19.72 163.933 22.968H171.493C171.866 21.624 172.613 20.5787 173.733 19.832C174.816 19.048 176.104 18.656 177.597 18.656C179.576 18.656 181.256 19.4027 182.637 20.896C184.018 22.3893 184.709 24.4613 184.709 27.112C184.709 29.7627 184.018 31.8347 182.637 33.328C181.256 34.8213 179.576 35.568 177.597 35.568C176.104 35.568 174.816 35.1947 173.733 34.448C172.613 33.7013 171.866 32.6373 171.493 31.256H163.933C164.605 34.392 166.154 36.912 168.581 38.816C171.008 40.72 173.994 41.672 177.541 41.672Z" fill="#72FFFF"/>
          <path d="M58.4609 47.088C59.7675 47.088 60.8502 47.48 61.7089 48.264C62.5302 49.048 62.9409 50.0373 62.9409 51.232C62.9409 52.4267 62.5302 53.3973 61.7089 54.144C60.8502 54.928 59.7675 55.32 58.4609 55.32C57.1542 55.32 56.0902 54.928 55.2689 54.144C54.4102 53.3973 53.9809 52.4267 53.9809 51.232C53.9809 50.0373 54.4102 49.048 55.2689 48.264C56.0902 47.48 57.1542 47.088 58.4609 47.088ZM62.0449 15V42.776H54.8769V15H62.0449Z" fill="#72FFFF"/>
          <path d="M158.99 22.2007L141 23.4M1.1322 41V13.224H7.4602L8.0762 16.976C8.9722 15.632 10.1482 14.568 11.6042 13.784C13.0975 12.9627 14.8149 12.552 16.7562 12.552C21.0495 12.552 24.0922 14.2133 25.8842 17.536C26.8922 16.0053 28.2362 14.792 29.9162 13.896C31.6335 13 33.5002 12.552 35.5162 12.552C39.1375 12.552 41.9189 13.6347 43.8602 15.8C45.8015 17.9653 46.7722 21.1387 46.7722 25.32V41H39.6042V25.992C39.6042 23.6027 39.1375 21.7733 38.2042 20.504C37.3082 19.2347 35.9082 18.6 34.0042 18.6C32.0629 18.6 30.4949 19.3093 29.3002 20.728C28.1429 22.1467 27.5642 24.1253 27.5642 26.664V41H20.3962V25.992C20.3962 23.6027 19.9295 21.7733 18.9962 20.504C18.0629 19.2347 16.6255 18.6 14.6842 18.6C12.7802 18.6 11.2309 19.3093 10.0362 20.728C8.87887 22.1467 8.3002 24.1253 8.3002 26.664V41H1.1322ZM80.5293 41.672C77.6919 41.672 75.1906 41.056 73.0253 39.824C70.8599 38.592 69.1426 36.8747 67.8733 34.672C66.6413 32.4693 66.0253 29.9493 66.0253 27.112C66.0253 24.2747 66.6413 21.7547 67.8733 19.552C69.1426 17.3493 70.8599 15.632 73.0253 14.4C75.1906 13.168 77.6919 12.552 80.5293 12.552C84.0759 12.552 87.0626 13.4853 89.4893 15.352C91.9159 17.1813 93.4653 19.72 94.1373 22.968H86.5773C86.2039 21.624 85.4573 20.5787 84.3373 19.832C83.2546 19.048 81.9666 18.656 80.4733 18.656C78.4946 18.656 76.8146 19.4027 75.4333 20.896C74.0519 22.3893 73.3613 24.4613 73.3613 27.112C73.3613 29.7627 74.0519 31.8347 75.4333 33.328C76.8146 34.8213 78.4946 35.568 80.4733 35.568C81.9666 35.568 83.2546 35.1947 84.3373 34.448C85.4573 33.7013 86.2039 32.6373 86.5773 31.256H94.1373C93.4653 34.392 91.9159 36.912 89.4893 38.816C87.0626 40.72 84.0759 41.672 80.5293 41.672ZM100.499 41V0.679993H107.667V17.48C108.601 15.9493 109.851 14.7547 111.419 13.896C113.025 13 114.854 12.552 116.907 12.552C120.342 12.552 122.993 13.6347 124.859 15.8C126.763 17.9653 127.715 21.1387 127.715 25.32V41H120.603V25.992C120.603 23.6027 120.118 21.7733 119.147 20.504C118.214 19.2347 116.721 18.6 114.667 18.6C112.651 18.6 110.971 19.3093 109.627 20.728C108.321 22.1467 107.667 24.1253 107.667 26.664V41H100.499ZM148.178 41.672C145.34 41.672 142.839 41.056 140.674 39.824C138.508 38.592 136.791 36.8747 135.522 34.672C134.29 32.4693 133.674 29.9493 133.674 27.112C133.674 24.2747 134.29 21.7547 135.522 19.552C136.791 17.3493 138.508 15.632 140.674 14.4C142.839 13.168 145.34 12.552 148.178 12.552C151.724 12.552 154.711 13.4853 157.138 15.352C159.564 17.1813 161.114 19.72 161.786 22.968H154.226C153.852 21.624 153.106 20.5787 151.986 19.832C150.903 19.048 149.615 18.656 148.122 18.656C146.143 18.656 144.463 19.4027 143.082 20.896C141.7 22.3893 141.01 24.4613 141.01 27.112C141.01 29.7627 141.7 31.8347 143.082 33.328C144.463 34.8213 146.143 35.568 148.122 35.568C149.615 35.568 150.903 35.1947 151.986 34.448C153.106 33.7013 153.852 32.6373 154.226 31.256H161.786C161.114 34.392 159.564 36.912 157.138 38.816C154.711 40.72 151.724 41.672 148.178 41.672ZM191.894 41V0.679993H199.062V41H191.894ZM177.541 41.672C180.378 41.672 182.88 41.056 185.045 39.824C187.21 38.592 188.928 36.8747 190.197 34.672C191.429 32.4693 192.045 29.9493 192.045 27.112C192.045 24.2747 191.429 21.7547 190.197 19.552C188.928 17.3493 187.21 15.632 185.045 14.4C182.88 13.168 180.378 12.552 177.541 12.552C173.994 12.552 171.008 13.4853 168.581 15.352C166.154 17.1813 164.605 19.72 163.933 22.968H171.493C171.866 21.624 172.613 20.5787 173.733 19.832C174.816 19.048 176.104 18.656 177.597 18.656C179.576 18.656 181.256 19.4027 182.637 20.896C184.018 22.3893 184.709 24.4613 184.709 27.112C184.709 29.7627 184.018 31.8347 182.637 33.328C181.256 34.8213 179.576 35.568 177.597 35.568C176.104 35.568 174.816 35.1947 173.733 34.448C172.613 33.7013 171.866 32.6373 171.493 31.256H163.933C164.605 34.392 166.154 36.912 168.581 38.816C171.008 40.72 173.994 41.672 177.541 41.672ZM58.4609 47.088C59.7675 47.088 60.8502 47.48 61.7089 48.264C62.5302 49.048 62.9409 50.0373 62.9409 51.232C62.9409 52.4267 62.5302 53.3973 61.7089 54.144C60.8502 54.928 59.7675 55.32 58.4609 55.32C57.1542 55.32 56.0902 54.928 55.2689 54.144C54.4102 53.3973 53.9809 52.4267 53.9809 51.232C53.9809 50.0373 54.4102 49.048 55.2689 48.264C56.0902 47.48 57.1542 47.088 58.4609 47.088ZM62.0449 15V42.776H54.8769V15H62.0449Z" stroke="#72FFFF"/>
        </svg>
      </router-link>
      <div
        aria-label="open-menu"
        id="nav-icon"
        @click="showNavigation">
        <span id="spanNav" class="nav1"></span>
        <span id="spanNav" class="nav2"></span>
      </div>
      <nav id="contact-menu" aria-label="Contact menu" class="open shadow" :class="{show : showNav, hide : !showNav}">
        <ul
          itemscope="itemscope"
          itemtype="http://schema.org/SiteNavigationElement"
          class="cross-site-nav fadein-up-faster"
        >
          <li>
            <router-link to="/portfolio">Portfolio</router-link>
          </li>
          <li>
            <router-link to="/blog">Blog</router-link>
          </li>
          <!-- <li>
            <router-link
              to="#"
              target="_blank"
              rel="noreferrer noopener"
              >Résumé</router-link
            >
          </li> -->
        </ul>
        <div class="basic-contact fadein-up-fast">
          <span class="say-hello">Talk to me 👀</span>
          <ul>
            <li>
              <a href="mailto:adisamicheal20@gmail.dev"
                >adisamicheal20@gmail.com</a
              >
            </li>
            <li>
              <a
                href="https://t.me/michellead"
                aria-label="t dot me forward slash michellead"
                target="_blank"
                rel="noreferrer noopener"
                >t.me/michellead</a
              >
            </li>
          </ul>
        </div>
        <ul class="social-contact fadein-up">
          <li>
            <a
             
              href="https://twitter.com/michellead"
              aria-label="Micheal on Twitter"
              target="_blank"
              rel="noreferrer noopener"
            >
              TW
            </a>
          </li>
          <li>
            <a
             
              href="https://github.com/adisamicheal"
              aria-label="Micheal on GitHub"
              target="_blank"
              rel="noreferrer noopener"
            >
              GH
            </a>
          </li>
          <li>
            <a
             
              href="https://www.linkedin.com/in/micheal-adisa-5b5250170/"
              aria-label="Micheal on LinkedIn"
              target="_blank"
              rel="noreferrer noopener"
            >
              LN
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
  props: {
    scrollPosition: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      showNav: false,
      clientWidth: 0
    }
  },
  mounted() {
    if (this.$route.name !== 'home') {
      const header = document.querySelector('.header');
      header?.classList.add('blog-header');
      const style = document.querySelector('svg')?.style || {}
      const path = document.querySelectorAll('path')
      style.fill= '#3d099b'
        path.forEach(element => {
          element.setAttribute('fill','#3d099b')
          element.setAttribute('stroke','#3d099b')
        });
    }
    this.clientWidth = window.innerWidth;
    if (this.clientWidth <= 768 && this.$route.name === 'home') {
      const navSPan1 = document.querySelector('.nav1');
      const navSPan2 = document.querySelector('.nav2');
      navSPan1.style.background = "#fff"
      navSPan2.style.background = "#fff"
    }
  },
  watch: {
    showNav(val) {
      const style = document.querySelector('svg').style
      const path = document.querySelectorAll('path')
      if(this.$route.path === '/') {
        if (val && document.documentElement.clientWidth <= 768) {
          style.fill= '#3d099b'
          path.forEach(element => {
            element.setAttribute('fill','#3d099b')
            element.setAttribute('stroke','#3d099b')
          });
        } else {
          style.fill= '#72FFFF'
          path.forEach(element => {
            element.setAttribute('fill','#72FFFF')
            element.setAttribute('stroke','#72FFFF')
          });
        }
      }
    },
    scrollPosition(newVal, oldVal) {
      const style = document.querySelector('svg').style
      const path = document.querySelectorAll('path')
      if (this.$route.path === '/' ) {
        if (newVal === 834) {
          ('yup 1', newVal);
          style.fill= '#3d099b'
          path.forEach(element => {
            element.setAttribute('fill','#3d099b')
            element.setAttribute('stroke','#3d099b')
          });
        } else if (newVal <= 834 || newVal >=1667) {
          ('yup 2', newVal);
          style.fill= '#72FFFF'
          path.forEach(element => {
            element.setAttribute('fill','#72FFFF')
            element.setAttribute('stroke','#72FFFF')
          });
        }
      }
      return oldVal
    }
  },
  
  methods: {
    showNavigation() {
      this.showNav = !this.showNav
      let element = document.getElementById("nav-icon");
      // let spanElement = document.getElementById("spanNav")
      element.classList.toggle("show-nav");
      document.querySelectorAll("#spanNav")[0].classList.toggle("primary-background")
      document.querySelectorAll("#spanNav")[1].classList.toggle("primary-background")
    }
  }
};
</script>

<style lang="scss" scoped>
.blog-header {
  background: #fff !important;
}
.header {
  background: linear-gradient(90deg, $primary 80%, $secondary 20%);
  z-index: 1000;
  // position: fixed;
  height: 11.12em;
  max-height: 12rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 9em;
  @media (max-width: 768px) {
    padding: 0 1.5em;
    background: $primary;
  }
  &__logo {
    z-index: 999;
    max-width: 150px;
    @media screen and (max-width: 969px) {
      max-width: 100px;
    }
  }
  .hide {
    display: none;
  }
  .show {
    box-shadow: 0 10px 53px 0 rgb(72 49 212 / 5%)
  }

  .primary-background {
    background: $primary !important;
  }
  nav {
    @media screen and (min-width: 968px) {
      position: absolute;
      background: #fff;
      top: 2.39em;
      right: 8.41em;
      padding: 50px;
      width: 22.223em;
    }
    @media screen and (max-width: 969px) {
      position: absolute;
      background: #fff;
      top: 0;
      right: 0;
      padding: 150px 50px;
      width: 100vw;
      height: 100vh;
      display: flex;
      flex-direction: column;
      gap: 100px;
    }
    ul {
      list-style: none;
    }
    a {
      text-decoration: none;
    }
    .cross-site-nav {
      li {
        margin-bottom: 30px;
        font-size: 24px;
        color: $primary;
      }
    }
    .social-contact {
      display: flex;
      gap: 30px;
      a {
        color: $primary;
      }
    }
    .say-hello {
      font-size: 24px;
      text-transform: uppercase;
      opacity: .2;
    }
    .basic-contact {
      ul {
        margin-top: 20px;
        li {
          margin-bottom: 20px;
        }
      }
    }
  }
}


#nav-icon {
  width: 60px;
  height: 25px;
  position: relative;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: .5s ease-in-out;
  -moz-transition: .5s ease-in-out;
  -o-transition: .5s ease-in-out;
  transition: .5s ease-in-out;
  cursor: pointer;
  z-index: 999;
}

#nav-icon span {
  display: block;
  position: absolute;
  height: 4px;
  width: 100%;
  background: $primary;
  @media screen and (max-width: 768px) {
    // background: #fff;
  }
  border-radius: 9px;
  opacity: 1;
  left: 0;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: .25s ease-in-out;
  -moz-transition: .25s ease-in-out;
  -o-transition: .25s ease-in-out;
  transition: .25s ease-in-out;
}

#nav-icon span:nth-child(1) {
  top: 0px;
  -webkit-transform-origin: left center;
  -moz-transform-origin: left center;
  -o-transform-origin: left center;
  transform-origin: left center;
  @media screen and (max-width: 1048px) {
    width: 70%;
    left: 10%;
  }
}

#nav-icon span:nth-child(2) {
  top: 18px;
  width: 70% !important;
  @media screen and (max-width: 969px) {
    width: 50% !important;
  }
  left: 30%;
  -webkit-transform-origin: left center;
  -moz-transform-origin: left center;
  -o-transform-origin: left center;
  transform-origin: left center;
}

#nav-icon.show-nav span:nth-child(1) {
  top: 5px;
  left: 8px;
  width: 50% !important;
  // background: #212121;
  transform: rotateZ(45deg);
}

#nav-icon.show-nav span:nth-child(2) {
  top: 40px;
  left: 8px;
  width: 50% !important;
  transform:  translate(0,-0.8rem) rotateZ(-45deg);
}
</style>
