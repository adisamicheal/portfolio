<template>
  <div>
    <Header ref="home"/>
    <section class="project-view">
        <h1 aria-label="Kafene">
            Kafene 
            <span>
                <a
                    href="https://kafene.com/"
                    target="_blank"
                    rel="noopener noreferrer">
                    visit product
                </a>
            </span>
        </h1>
        <h2>Provide business Solutions</h2>
        <div class="project-view__iteration">
            <div class="project-view__iteration--challenge p-2">
                <h3>Challenge</h3>
                <p>
                    Kafene’s messaging was contingent on the promise that anyone could create an account and go as far as enabling payment in “in less than 5 minutes”. This meant that whatever software solution we built needed to be optimised for speed, and more importantly, the vendor’s onboarding process should be at most four minutes fifty-nine seconds long.
                </p>
            </div>
            <div class="project-view__iteration--services p-2">
                <h3>Services</h3>
                <p>Engineering, Product - Merchant, Customer & Adminstrators Dashboard, Team Lead</p>
            </div>
            <div class="project-view__iteration--stacks p-2">
                <h3>Tech Stacks</h3>
                <ul aria-roledescription="list">
                    <li class="javascript">Javascript</li>
                    <li class="nuxt">Nuxt</li>
                    <li class="vue">Vue</li>
                    <li class="scss">Scss</li>
                    <li class="vuex">Vuex</li>
                    <li class="node">NodeJs</li>
                    <li class="sql">SQL</li>
                    <li class="jira">JIRA</li>
                    <li class="figma">Figma</li>
                    <li class="figma">Websocket</li>
                </ul>
            </div>
        </div>
    </section>
    <section class="about-project">
        <h1 aria-label="About Uptima">About Uptima</h1>
        <h2>Kafene wants to help americans with credit scores below 650 purchase retail items with its buy now, pay later (BNPL) model.</h2>
        <blockquote>
            <p>
                "Kafene wants you to enjoy the financial flexibility you deserve with affordable lease-to-own options for furniture, appliances, electronics, tires and wheels, and more - for nearly all credit ranges and price points"
            </p>
        </blockquote>
    </section>
    <section class="project-image">
        <div class="project-image__container">
            <img src="@/assets/portfolio/kafene-detail.png" alt="kafene dashboard page">
        </div>
    </section>
    <ContactSuccess />
    <section class="project-acheivement">
        <div class="project-acheivement__container">
            <h1>My role</h1>
            <ul>
                <li>Responsible for engineering 40% of new features on the admin, merchant and customer dashboards.</li>
                <li>Improved usability performance, and Fixed 90% of Kafene customer application bug issues.</li>
                <li>Created and maintained a new Kafene customer dashboard to design specifications.</li>
                <li>Improved Kafene admin dashboard performance and create new features using agile sprints.</li>
                <li>Maintained features across all applications that serves over 30,000 customers, merchants and admins.</li>
                <li> 
                    Collaborate and communicate with backend engineers to ensure seamless integration of frontend and 
                    backend functionalities.
                </li>
                <li>Review code from other engineers to help ensure security, maintainability and performance.</li>
                <li>Responsible for handling frontend codebases versioning with Git and Github.</li>
                <li>Scope task on task management board (JIRA, Pivotal Tracker) with Product managers and QA engineers.</li>
            </ul>
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
import ContactSuccess from '@/components/ContactSuccess.vue';

export default defineComponent({
    components: { Header, Footer, ContactSuccess },
    setup () {
        useMeta({
            title: 'Kafene - Case Study',
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