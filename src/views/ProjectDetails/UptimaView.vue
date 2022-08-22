<template>
  <div>
    <Header ref="home"/>
    <section class="project-view">
        <h1 aria-label="Uptima">Uptima</h1>
        <h2>Provide business Solutions</h2>
        <div class="project-view__iteration">
            <div class="project-view__iteration--challenge p-2">
                <h3>Challenge</h3>
                <p>
                    Uptima looked into the oil and gas insustry of Nigeria and  discovered there is a need for on demand cloud computing solution for remote monitoring of tanks and tankers within the oil and gas industry.
                </p>
            </div>
            <div class="project-view__iteration--services p-2">
                <h3>Services</h3>
                <p>Engineering - Website, Dashboard</p>
            </div>
            <div class="project-view__iteration--stacks p-2">
                <h3>Tech Stacks</h3>
                <ul aria-roledescription="list">
                    <li class="javascript">Javascript</li>
                    <li class="nuxt">Nuxt</li>
                    <li class="vue">Vue</li>
                    <li class="scss">Scss</li>
                    <li class="vuex">Vuex</li>
                    <li class="iot">iot</li>
                    <li class="clickup">Clickup</li>
                    <li class="gsap">GSAP</li>
                </ul>
            </div>
        </div>
    </section>
    <section class="about-project">
        <h1 aria-label="About Uptima">About Uptima</h1>
        <h2>Uptima is looking to provide solutions to businesses</h2>
        <blockquote>
            "Every minute saved in your business, whether it’s in producing, monitoring, maintenance or management is money saved.
            With connected hardware, software, and data analytics we provide you better insight and control of your business."
        </blockquote>
    </section>
    <section class="project-image">
        <div class="project-image__container">
            <img src="@/assets/portfolio/uptima-detail.png" alt="uptima dashboard page">
        </div>
    </section>
    <section class="project-acheivement">
        <div class="project-acheivement__container">
            <h1>My role</h1>
            <ul>
                <li>Solely build marketing website from design ideation to implementation.</li>
                <li>Fleshout components for Dashboard.</li>
                <li>Implement Dashboard UI.</li>
                <li>Co-ordainate with backend engineering to provide engineering solutions to business idea.</li>
                <li>Beakdown development into sprint to meet business demand and schedule</li>
            </ul>
        </div>
    </section>
    <section class="reach-out">
        <div class="reach-out__container">
            <p>What does success look like for your project?</p>
            <a
                href="mailto:adisamicheal20@gmail.com"
                target="_blank"
                rel="noopener"
                role="button">
                Let's Talk
            </a>
        </div>
    </section>
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useMeta } from 'vue-meta'
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';

export default defineComponent({
    components: { Header, Footer },
    setup () {
        useMeta({
            title: 'Provide business Solutions',
            htmlAttrs: { lang: 'en', amp: true },
            meta: [
                { charset: 'utf-8' },
                { name: 'description', content: 'Micheal Adisa - Highly skilled with web performance, accessibility & UI Engineering. Approach engineering with usability and user experience as core building block.' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' }
            ]
        })
    },
})
</script>

<style src="./ProjectDetails.scss" lang="scss"></style>