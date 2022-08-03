<template>
  <div class="projects-section">
      <h3 class="text-center font-weight-700 text-size-36">Projects</h3>
      <h3 class="text-center font-weight-500 text-size-16 mt-5">Recent Works</h3>
      <div class="project_cards mt-50">
        <div v-for="project in projects" :key="project.id" class="project_card">
          <img :src="project.image" :alt="project.altText">
          <p class="font-weight-500 text-size-18 mt-5">{{ project.name }}</p>
          <p class="font-weight-200 text-size-12 mt-5">{{ project.about }}</p>
          <a :href="project.link" class="text-size-14 mt-15" target="_blannk">View Project</a>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name: 'Portfolio',
    data() {
        return {
            projects: [
                {
                name: 'Kafene Dashboards',
                image: 'https://res.cloudinary.com/michellead/image/upload/v1637054422/portfolio/kafene_xgubxz.png',
                link: 'https://kafene.com/',
                about: 'Kafene is focused on helping americans with credit scores below 650 purchase retail items with its buy now, pay later (BNPL) model.',
                altText: 'A screenshot of Kafene website on a laptop screen'
                },
                {
                name: 'Patronize dashboard',
                image: 'https://res.cloudinary.com/michellead/image/upload/v1637013976/portfolio/patronize_nlxrso.png',
                link: 'https://dashboard.patronize.co/',
                about: 'Patronize enables your business accept Abeg payments, helps you reach more customers and make more successful sales.',
                altText: 'A screenshot of Patronize Dashboard on a laptop screen'
                },
                {
                name: 'Enyata BuildUp',
                image: 'https://res.cloudinary.com/michellead/image/upload/v1637226467/portfolio/buildup_niapkg.png',
                link:'https://build.enyata.com/',
                about: 'Enyata Buildup is a project by Enyata used to provide learning resources/infrastructure and support 10,000 young Africans in their tech growth and journey over the next 5 years.',
                altText: 'A screenshot of Enyata BuilUp website on a laptop screen'
                },
                {
                name: 'Onboarding App',
                image: 'https://res.cloudinary.com/michellead/image/upload/v1637013976/portfolio/onboarding_gpbnoy.png',
                link: 'https://onboarding-buyfood.netlify.app/',
                about: "A simple demo app with from steps built with VueJS.",
                altText: 'A screenshot of onboarding app on a laptop screen'
                },
                {
                name: 'Blessed Above Women',
                image: 'https://res.cloudinary.com/michellead/image/upload/v1637013975/portfolio/bawco_kvuvpg.png',
                link: 'https://ywf-sbc.org/',
                about: 'Young Women Fellowship is the official Women Group of Shepherdhill Baptist Church.',
                altText: 'A screenshot of Young Women Fellowship website on a laptop screen'
                },
                {
                name: 'Uptima Website',
                image: 'https://res.cloudinary.com/michellead/image/upload/v1637049554/portfolio/uptima_bdto8k.png',
                link: 'https://www.uptima.ng/',
                about: 'Uptima employ futuristic approaches in helping our clients have the UPTIMA solution for their personalized technological needs.',
                altText: 'A screenshot of Uptima website on a laptop screen'
                }
            ],
        }
    }
}
</script>

<style lang="scss"  scoped>
.projects-section {
    background: url('@/assets/images/background-1.svg');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: top left;
    padding: 50px 0;
}
.project_cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
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
@media screen and (max-width: 768px) {
  .project_cards  {
    padding: 0 20px;
  }
}

</style>