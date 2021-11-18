<template>
  <div class="page_layout">
    <div class="page_hero text-center">
      <img src="@/assets/images/micheal.svg" alt="frontend engineer picture">
      <p class="text-margin font-weight-500 text-size-28">Hey, I’m Micheal.</p>
      <h1 class="font-weight-700 text-size-72">A Sofware Engineer focused on the Web <span>Frontend.</span></h1>
      <p class="text-margin font-weight-500 text-size-24">I like to make things, especially those that work on computers and on the web.</p>
      <div class="stack">
        <p class="text-size-16">Core: Javascript (Vue, Nuxt, React, Next)</p>
        <p class="text-size-16">Familiar: Python, Node.JS</p>
      </div>
      <a 
        href="https://drive.google.com/file/d/1SFXM7J8amgCLkSjRdcv88BnR6gIummGy/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        class="text-size-24"
      >
        <span class="font-weight-500">Resume</span>
        <img src="@/assets/images/arrow.svg" alt="download-icon" svg-inline>
      </a>
    </div>
    <div class="projects-section">
      <h3 class="text-center font-weight-700 text-size-36">Projects</h3>
      <h3 class="text-center font-weight-500 text-size-16 mt-5">Recent Works</h3>
      <div class="project_cards mt-50">
        <div v-for="project in projects" :key="project.id" class="project_card">
          <img :src="project.image" alt="project card image">
          <p class="font-weight-500 text-size-18 mt-5">{{ project.name }}</p>
          <p class="font-weight-200 text-size-12 mt-5">{{ project.about }}</p>
          <a :href="project.link" class="text-size-14 mt-15">View Project</a>
        </div>
      </div>
    </div>
    <div class="testimonial-container mt-100">
      <h3 class="text-center font-weight-700 text-size-36">Testimonials</h3>
      <div class="testimonials-section mt-15">
        <div class="testimonial-card" v-for="testimonial in testimonials" :key="testimonial.id">
          <div class="tetimonial-heading d-flex">
            <img src="@/assets/images/icon.png" alt="person">
            <div class="ml-10">
              <h4>
                <span>{{ testimonial.name }}</span>
                <a :href="testimonial.profile" target="_blank" rel="noopener">
                  <img class="linkedin" src="@/assets/images/linkedin.png" alt="linkedin">
                </a>
              </h4>
              <p class="mt-5">{{ testimonial.title }}</p>
            </div>
            <!-- <a href="">
              <img class="linkedin" src="@/assets/images/linkedin.png" alt="linkedin">
            </a> -->
          </div>
          <div class="tetimonial-body mt-30">
            <p>{{ testimonial.testimony }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="contact-section mt-100">
      <h3 class="text-center font-weight-700 text-size-36">Hit me up!</h3>
      <h3 class="text-center font-weight-500 text-size-16 mt-5">Get in Touch</h3>
      <div class="contact-section-container">
        <div class="contact">
          <div class="d-flex">
            <div>
              <img src="@/assets/images/phone-call.svg" alt="phone icon">
            </div>
            <div class="icon-message ml-30">
              <p class="text-size-18 font-weight-700">Call Me</p>
              <p class="text-size-16 font-weight-500 mt-10">+234 909 127 1976</p>
            </div>
          </div>
          <div class="mt-50 d-flex">
            <div>
              <img src="@/assets/images/mail.svg" alt="location icon">
            </div>
            <div class="icon-message ml-30">
              <p class="text-size-18 font-weight-700">Shoot at Me</p>
              <p>
                <a class="text-size-16 font-weight-500 mt-10" href="mailto:adisamicheal20@gmail.com" target="_blank" rel="noopener">adisamicheal20@gmail.com</a>
              </p>
            </div>
          </div>
          <div class="mt-50 d-flex">
            <div>
              <img src="@/assets/images/location.svg" alt="mail icon">
            </div>
            <div class="icon-message ml-30">
              <p class="text-size-18 font-weight-700">Locate Me</p>
              <p class="text-size-16 font-weight-500 mt-10">Lagos, Nigeria.</p>
            </div>
          </div>
        </div>
        <div class="contact-form">
          <!-- Taking this off for now  -->
          <!-- <form action="" @submit.prevent>
            <div class="input-wrapper">
              <label for="Name" class="text-size-18 font-weight-500">Name</label>
              <input id="name" type="text" class="mt-5">
            </div>
            <div class="input-wrapper mt-50">
              <label for="Email" class="text-size-18 font-weight-500">Email</label>
              <input id="email" type="email" class="mt-5">
            </div>
            <div class="input-wrapper mt-50">
              <label for="Message" class="text-size-18 font-weight-500">Message</label>
              <textarea name="message" id="message" class="mt-5"></textarea>
            </div>
            <button class="submit-button text-size-18 font-weight-500 mt-20">Let's make magic!</button>
          </form> -->
        </div>
      </div>
    </div>
    <div class="footer">
      <ul class="links">
        <li v-for="link in links" :key="link.id"><a :href="link.url" target="_blank" rel="noopener">{{ link.name }}</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          name: 'Kafene Dashboards',
          image: 'https://res.cloudinary.com/michellead/image/upload/v1637054422/portfolio/kafene_xgubxz.png',
          link: 'https://kafene.com/',
          about: 'Kafene is focused on helping americans with credit scores below 650 purchase retail items with its buy now, pay later (BNPL) model.'
        },
        {
          name: 'Patronize dashboard',
          image: 'https://res.cloudinary.com/michellead/image/upload/v1637013976/portfolio/patronize_nlxrso.png',
          link: 'https://dashboard.patronize.co/',
          about: 'Patronize enables your business accept Abeg payments, helps you reach more customers and make more successful sales.'
        },
        {
          name: 'Enyata BuildUp',
          image: 'https://res.cloudinary.com/michellead/image/upload/v1637226467/portfolio/buildup_niapkg.png',
          link:'https://build.enyata.com/',
          about: 'Enyata Buildup is a project by Enyata used to provide learning resources/infrastructure and support 10,000 young Africans in their tech growth and journey over the next 5 years.'
        },
        {
          name: 'Onboarding App',
          image: 'https://res.cloudinary.com/michellead/image/upload/v1637013976/portfolio/onboarding_gpbnoy.png',
          link: 'https://onboarding-buyfood.netlify.app/',
          about: "A simple demo app with from steps built with VueJS."
        },
        {
          name: 'Blessed Above Women',
          image: 'https://res.cloudinary.com/michellead/image/upload/v1637013975/portfolio/bawco_kvuvpg.png',
          link: 'https://ywf-sbc.org/',
          about: 'Young Women Fellowship is the official Women Group of Shepherdhill Baptist Church.'
        },
        {
          name: 'Uptima Website',
          image: 'https://res.cloudinary.com/michellead/image/upload/v1637049554/portfolio/uptima_bdto8k.png',
          link: 'https://www.uptima.ng/',
          about: 'Uptima employ futuristic approaches in helping our clients have the UPTIMA solution for their personalized technological needs.'
        }
      ],
      testimonials: [
        {
          name: 'Ugbodaga Israel',
          title: 'Lead Frontend Engineer',
          testimony: `Micheal is an excellent frontend engineer, I trust him to translate design to code perfectly, as a teammate, he is always available to provide help whenever possible, and has a keen eye for the tiniest details. I'd recommend Micheal anyday.`,
          profile: 'https://www.linkedin.com/in/ogbeniore/'
        },
        {
          name: 'Oreoluwa Ojo',
          title: 'Head of Engineering',
          testimony: `I have been working with Micheal for over two years one thing I can say is that he is hardworking and passionate. He is someone you can trust that he will handle a project perfectly. He literally can fix everything in the right working environment. A life learner and a good team member. I strongly recommend Micheal. I could always trust him to translate design to code perfectly.`,
          profile: 'https://www.linkedin.com/in/israelugbodaga/'
        }
      ],
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
.page_layout {
  .page_hero {
    padding: 100px 0 65px;
    img {
      width: 150px;
    }
    .text-margin {
      margin: 20px 0;
      // line-height: 75px;
    }
    .stack {
      
    }
    h1 {
      max-width: 675px;
      margin: 10px auto;
      line-height: 75px;
      @media screen and (max-width: 768px) {
        font-size: 58px !important;
      }
      span {
        background: url('@/assets/images/vector.svg');
        background-repeat: no-repeat;
        background-position: center;
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
  .projects-section {
    background: url('@/assets/images/background-1.svg');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: top left;
  }
}
.linkedin {
  width: 15px;
  margin-left: 10px;
}
.testimonials-section {
  max-width: 1000px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  grid-gap: 40px;
}
.testimonial-card {
  padding: 20px;
}

.project_cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
  // grid-gap: 2rem;
  // grid-template-columns: repeat(2, 1fr);
  grid-gap: 40px;
  max-width: 1000px;
  margin: auto;
  .project_card {
    background: #fff;
    border-radius: 20px;
    box-shadow: 6px 5px 5px 0px rgba(62,179,127,0.34);
    -webkit-box-shadow: 6px 5px 5px 0px rgba(62,179,127,0.34);
    -moz-box-shadow: 6px 5px 5px 0px rgba(62,179,127,0.34);
    padding: 20px 40px;
    img {
      width: 100%;
      height: 150px;
    }
  }
  .project_card {
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: transform;
    transition-property: transform;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
  }
  .project_card:hover {
    transform: translateY(-8px);
  }
}
.contact {
  img {
    width: 30px;
  }
}
.contact-section {
  background: url('@/assets/images/background-2.svg');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: top right;
  padding-bottom: 200px;
}
.contact-section-container {
  display: flex;
  justify-content: space-between;
  max-width: 800px;
  margin: auto;
  margin-top: 105px;
}
.input-wrapper {
  display: flex;
  flex-direction: column;
}
input {
  border: 1px solid #000000;
  border-radius: 10px;
  height: 50px;
  min-width: 300px;
  padding: 20px;
}
input:focus {
  outline: none;
  border: 1px solid #3EB37F;
}
textarea {
  border: 1px solid #000000;
  border-radius: 10px;
  min-width: 345px;
  padding: 20px;
  height: 155px;
}
textarea:focus {
  outline: none;
  border: 1px solid #3EB37F;
}
.submit-button {
  background: #3EB37F;
  border: 2px solid #3EB37F;
  color: #fff;
  padding: 15px 20px;
  border-radius: 10px;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: transform;
  transition-property: transform;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
  cursor: pointer;
}
.submit-button:hover {
  transform: translateY(-3px);
}
.footer {
  padding-bottom: 100px;
}
.links {
  display: flex;
  justify-content: space-around;
  max-width: 650px;
  margin: auto;
}
@media screen and (max-width: 768px) {
  .page_layout .page_hero {
    padding: 100px 20px 0 20px;
  }
  .page_layout .projects-section {
    margin-top: 100px;
  }
  .project_cards  {
    padding: 0 20px;
  }
  .contact-section {
    padding:0 20px 100px 20px;
  }
  .contact-section-container {
    flex-direction: column;
  }
  .contact-form {
    margin-top: 100px;
  }
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