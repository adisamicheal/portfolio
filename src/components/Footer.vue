<template>
  <footer>
    <div class="container">
      <div class="footer">
        <div class="footer__top">
          <div class="footer__top__left">
            <h1 aria-label="Say Hello">TALK TO ME :)</h1>
            <p>
              <a href="mailto:adisamicheal20@gmail.com" target="_blank" rel="noopener">adisamicheal20@gmail.com</a>
            </p>
          </div>
          <div class="footer__top__right">
            <ul>
              <li>
                <router-link to="/portfolio">Portfolio</router-link>
              </li>
              <li>
                <router-link to="/blog">Blog</router-link>
              </li>
              <!-- <li>
                <router-link to="#">Résumé</router-link>
              </li> -->
            </ul>
          </div>
        </div>
        <div class="footer__bottom">
          <div class="footer__bottom__left">
            <p>Micheal Adisa {{ new Date().getFullYear()}}</p>
          </div>
          <div class="footer__bottom__right">
            <ul>
              <li>
                <a
                  href="https://www.linkedin.com/in/micheal-adisa-5b5250170"
                  target="_blank"
                  ref="noopener noreferrer"
                >
                  LN
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/adisamicheal"
                  target="_blank"
                  ref="noopener noreferrer"
                >
                  GH
                </a>
              </li>
              <li>
                <a
                  href="https://michellead.hashnode.dev/"
                  target="_blank"
                  ref="noopener noreferrer"
                >
                  HN
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/michellead"
                  target="_blank"
                  ref="noopener noreferrer"
                >
                  TW
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FooterComponent',
  mounted() {
    if (this.$route.name === 'home') {
      const footer = document.querySelector('footer');
      footer?.classList.add('footer--other');
    }
  }
})
</script>

<style lang="scss" scoped>
footer {
  // width: 100%;
  // height: 100%;
  background: $primary;
  // padding: 150px 0;
  @media screen and (max-width: 969px) {
    padding: 0;
  }
}
.container {
  @media (min-width: 969px) {
    width: 80%;
  }
  margin: auto;
  padding: 100px 0;
}
.footer {
  &--other {
    padding: 150px 0;
    width: 100%;
    height: 100%;
    @media screen and (max-width: 969px) {
    padding: 0;
  }
  }
  @media screen and (max-width: 969px) {
    padding: 50px;
  }
  &__top {
    display: flex;
    margin-bottom: 200px;
    @media screen and (max-width: 969px) {
      flex-direction: column;
      margin-bottom: 50px;
    }
    &__left {
      margin-right: 10vw;
      h1 {
        font-size: 36px;
        font-weight: 400;
        color: #fff;
        @media screen and (max-width: 969px) {
          font-size: 24px;
        }
      }
      p {
        font-size: 24px;
        margin-top: 20px;
        font-size: 300;
        @media screen and (max-width: 969px) {
          font-size: 16px;
        }
        a {
          text-decoration: none;
          color: $secondary;
        }
      }
    }
    &__right {
      @media screen and (max-width: 969px) {
        margin-top: 40px;
      }
      ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 30px;
        li {
          font-size: 24px;
          @media screen and (max-width: 969px) {
            font-size: 16px;
          }
          a {
            text-decoration: none;
            color: $secondary;
          }
        }
      }
    }
  }
  &__bottom {
    display: flex;
    justify-content: space-between;
    padding-top: 50px;
    border-top: 1px solid $secondary;
    @media screen and (max-width: 969px) {
      flex-direction: column-reverse;
    }
    &__left {
      font-size: 24px;
      color: $secondary;
      @media screen and (max-width: 969px) {
        font-size: 16px;
        margin-top: 40px;
      }
      a {
        color: $secondary;
        text-decoration: underline;
      }
    }
    &__right {
      ul {
        list-style: none;
        display: flex;
        gap: 50px;
        li {
          font-size: 24px;
          @media screen and (max-width: 969px) {
            font-size: 16px;
          }
          a {
            text-decoration: none;
            color: $secondary;
          }
        }
      }
    }
  }
}
</style>