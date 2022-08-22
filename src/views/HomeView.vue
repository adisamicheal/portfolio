<template>
  <div class="body">
    <div>
      <HeaderComponent class="navbar" ref="home"/>
      <section class="home__section" ref="homeHero">
        <div class="home__hero">
          <div class="home__hero__content fadein-up">
            <h1 aria-label="Frontend Engineer">
              Frontend
              <br>
              Engineer<span>.</span>
            </h1>
            <p>I like to make things, especially those that work on computers and on the web.</p>
            <div>
              <ul>
                <li>Highly skilled with web performance, accessibility & UI Engineering</li>
                <li>Approach engineering with usability and user experience as core building block.</li>
              </ul>
            </div>
          </div>
          <div class="fadein-left">
            <img
              id="micheal_adisa"
              class="header__logo" 
              src="../assets/heroImage.png"
              alt="Micheal Adisa" 
              accesskey="micheal_adisa">
          </div>
        </div>
      </section>

      <section class="home__stack" id="stack" ref="stack">
        <div>
          <div class="home__stack__first container fadein-up">
            <div class="shake">
              .
            </div>
            <div>
              <h2 aria-label="Design">Design.</h2>
              <p>
                Frequent times i find myself putting texts and shapes together to born out a pleasing UI like the 
                one you are going through right now. I utilize tools like Figma, Adobe XD and Corel draw for 
                various design crafting and manipulation.
              </p>
            </div>
          </div>
          <div class="home__stack__first container">
            <div>
              <h2  aria-label="Development">Development.</h2>
              <p>
                In building applications, i utilize but not limited to tools like Javascript, Typescript, VueJs, 
                ReactJs, NodeJs, SCSS, Python among others. I can absolutely function independently and deliver 
                fast, resilient solutions optimized for scale with performance, usability and scalabilty as the 
                building blocks.
              </p>
            </div>
            <div class="shake">
              .
            </div>
          </div>
        </div>
      </section>

      <ContactSuccess />

      <section class="home__testimonial">
        <div class="home__testimonial--container">
          <figure>
            <blockquote>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="quote__quote-mark">
                <path d="M9.928,3.932A9.709,9.709,0,0,0,.5,13.88v1.243a4.942,4.942,0,1,0,4.941-4.941,4.609,4.609,0,0,0-1.115.14.25.25,0,0,1-.277-.368A6.832,6.832,0,0,1,9.928,6.432a1.25,1.25,0,0,0,0-2.5Z"></path>
                <path d="M22.25,6.432a1.25,1.25,0,0,0,0-2.5,9.71,9.71,0,0,0-9.428,9.948v1.243a4.942,4.942,0,1,0,4.942-4.941,4.611,4.611,0,0,0-1.116.14.249.249,0,0,1-.26-.092.252.252,0,0,1-.017-.276A6.832,6.832,0,0,1,22.25,6.432Z"></path>
              </svg>
              <div>
                <p>Working with Micheal was an exceptional experience. I can’t say enough great things about his thought process, workflow, deligence and the quality of his code. He is a talented developer who knows his onions.</p>
              </div>
            </blockquote>
            <figcaption>
              <div>
                <h3>Fatoki Oladele</h3>
                <p>CEO, Uptima</p>
                <router-link to="/portfolio/uptima">See Case Study</router-link>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>

      <section>
        <Footer />
      </section>
    </div>
    
  </div>
</template>

<script lang="ts">
/* eslint-disable */

import { defineComponent } from 'vue';
import { useMeta } from 'vue-meta';
import HeaderComponent from '../components/Header.vue'
import Footer from '../components/Footer.vue';
import ContactSuccess from '@/components/ContactSuccess.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    HeaderComponent,
    Footer,
    ContactSuccess
},
  setup () {
    useMeta({
        title: 'Micheal Adisa',
        htmlAttrs: { lang: 'en', amp: true },
        meta: [
            { charset: 'utf-8' },
            { name: 'description', content: 'Micheal Adisa - Highly skilled with web performance, accessibility & UI Engineering. Approach engineering with usability and user experience as core building block.' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' }
        ]
    })
  },
  data() {
    return {
      // windowTop: 0,
      isLoaded: false,
      observer: null,
      testimonials: [
        {
          name: 'Ugbodaga Israel',
          title: 'Lead Frontend Engineer, Vue Mastery',
          testimony: `Micheal is an excellent frontend engineer, I trust him to translate design to code perfectly, as a teammate, he is always available to provide help whenever possible, and has a keen eye for the tiniest details. I'd recommend Micheal anyday.`,
          profile: 'https://www.linkedin.com/in/israelugbodaga/'
        },
        {
          name: 'Oreoluwa Ojo',
          title: 'Head of Engineering, Enyata (Former)',
          testimony: `I worked with Micheal for over two years one thing I can say is that he is hardworking and passionate. He is someone you can trust that he will handle a project perfectly. He literally can fix everything in the right working environment. A life learner and a good team member. I strongly recommend Micheal. I could always trust him to translate design to code perfectly.`,
          profile: 'https://www.linkedin.com/in/ogbeniore/'
        }
      ],
    }
  },
  watch: {
    
  },
  mounted() {
    type home = {
      [key: string]: any; // 👈️ variable keys
    };
    this.$watch(
        () => {
            if(typeof this.$refs.home === 'object') {
              ((this.$refs.home as home).showNav)
              if ((this.$refs.home as home).showNav === true  && (this.$refs.home as home).clientWidth <= 968 ) {
                const homeContainer = document.querySelector('.body');
                (homeContainer as HTMLElement).style.position = "fixed";
                (homeContainer as HTMLElement).style.right = "0";
              } else {
                const homeContainer = document.querySelector('.body');
                (homeContainer as HTMLElement).style.position = "initial"
              }
            }
        },
      (val: any) => {
        return val
      }
    )
  },
});
</script>

<style lang="scss" scoped>
.home {
  &__section {
    background: linear-gradient(90deg, $primary 80%, $secondary 20%);
    // position: relative;
    padding-bottom: 100px;
    @media (max-width: 768px) {
      padding: 0 3em;
      background: $primary;
    }
  }
  &__hero {
    @media (min-width: 969px) {
      width: 80%;
    }
    padding: 0 20px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 969px) {
      flex-direction: column;
    }
    &__content {
      h1 {
        font-size: 96px;
        color: $secondary;
        font-weight: bolder;
        line-height: 1;
        @media (max-width: 969px) {
          font-size: 70px;
        }
      }
      p {
        font-size: 16px;
        color: #fff;
        font-weight: 300;
        margin: 20px 0;
      }
      ul {
        max-width: 500px;
        list-style: none;
        display: flex;
        gap: 50px;
        line-height: 1.5;
        justify-content: space-between;
        margin-top: 50px;
        font-size: 16px;
        color: #00D7FF;
        li {
          flex: 1;
        }
      }
    }
    img {
      margin-top: 80px;
      @media (max-width: 768px) {
        width: 100%;
        height: 100%;
      }
    }
  }
  &__stack {
    padding: 100px 0;
    @media (max-width: 1200px) {
      padding: 50px;
    }
    &__first {
      display: flex;
      justify-content: space-between;
      gap: 50%;
      align-items: center;
      @media (max-width: 768px) {
        flex-direction: column;
        img {
          display: none;
        }
      }
    }
    h2 {
      margin: 20px 0;
      font-size: 48px;
      font-weight: 700;
      color: $primary;
      position: relative;
      @media (max-width: 969px) {
        font-size: 24px;
      }
    }
    h2::before {
      content: '';
      position: absolute;
      width: 15%;
      height: 3px;
      bottom: 0;
      left: 0;
      background-color: $primary;
    }
    p {
      font-size: 16px;
      line-height: 1.5;
      max-width: 550px;
    }
  }
  &__trackBack {
    background: $primary;
    padding: 100px 0;
    @media (max-width: 1200px) {
      padding: 50px;
    }
    h1 {
      color: $secondary;
      font-size: 48px;
      @media (max-width: 969px) {
        font-size: 24px;
      }
    }
    p {
      color: #fff;
      font-size: 16px;
      line-height: 1.5;
    }
  }
  &__testimonial {
    padding: 100px 0;
    @media (max-width: 1200px) {
      padding: 50px;
    }
    &--container {
      max-width: 1200px;
      margin: auto;
      figure {
        blockquote {
          p {
            font-size: 48px;
            line-height: 48px;
            max-width: 1100px;
            margin: 0 auto;
            font-weight: 700;
            @media screen and (max-width: 768px) {
              font-size: 24px;
              line-height: 24px;
            }
          }
        }
      }
      figcaption {
        max-width: 1100px;
        margin: auto;
        margin-top: 50px;
        p {
          margin-bottom: 20px;
        }
        a {
          color: $primary;
          text-decoration: none;
          &:hover {
            color: grey;
          }
        }
      }
    }
  }
}

.testimonial-container {
  margin-top: 30px;
  h2 {
    text-align: center;
    font-size: 36px;
    color: $primary;
  }
}
.testimonials-section {
  max-width: 1000px;
  margin: 50px auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  grid-gap: 40px;
  @media screen and (max-width: 969px) {
    padding: 50px;
  }
}
.testimonial-card {
  padding: 20px;
  h4 {
    font-size: 24px;
  }
  p {
    font-size: 16px;
    line-height: 1.5;
    margin-top: 10px;
  }
}
.linkedin {
  width: 15px;
  margin-left: 10px;
}
</style>
