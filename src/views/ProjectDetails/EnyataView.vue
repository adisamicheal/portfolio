<template>
  <div>
    <Header ref="home"/>
    <section class="project-view">
        <h1 aria-label="Enyata">
            Enyata 
            <span>
                <a
                    href="https://enyata.com/"
                    target="_blank"
                    rel="noopener noreferrer">
                    visit website
                </a>
            </span>
        </h1>
        <h2>Provide business Solutions</h2>
        <div class="project-view__iteration">
            <div class="project-view__iteration--challenge p-2">
                <h3>Challenge</h3>
                <p>
                    Enyata is a business startup that is looking to provide solutions to businesses. They are looking for a nice brand outlook to the public and needed a marketing website redesign and rebuild.
                </p>
            </div>
            <div class="project-view__iteration--services p-2">
                <h3>Services</h3>
                <p>Engineering - Marketing Website</p>
            </div>
            <div class="project-view__iteration--stacks p-2">
                <h3>Tech Stacks</h3>
                <ul aria-roledescription="list">
                    <li class="javascript">Javascript</li>
                    <li class="react">React</li>
                    <li class="redux">Redux</li>
                    <li class="trello">Trello</li>
                    <li class="figma">Figma</li>
                </ul>
            </div>
        </div>
    </section>
    <section class="about-project">
        <h1 aria-label="About Uptima">About Uptima</h1>
        <h2>Enyata is a technology company providing engineering-as-a-service solutions at scale to organizations across multiple industries.</h2>
        <blockquote>
            <p>
                "Enyata helps you set the stage for user-centric products by implementing the right strategies through a combination of market research, agile sprints, and wide-ranging expertise."
            </p>
        </blockquote>
    </section>
    <section class="project-image">
        <div class="project-image__container">
            <img src="@/assets/portfolio/enyata-detail.png" alt="enyata marketing website home page on a purple background">
        </div>
    </section>
    <ContactSuccess />
    <section class="project-acheivement">
        <div class="project-acheivement__container">
            <h1>My role</h1>
            <ul>
                <li>Meet with product team consisting of deisgners, project manger and QA Engineer.</li>
                <li>Plan development process with product team</li>
                <li>Implement components as relating design specifications.</li>
                <li>Rebuild marketing website</li>
                <li>Maintained features across all applications that serves over 30,000 customers, merchants and admins.</li>
                <li>Collaborate and communicate with frontend engineers to ensure seamless merge of pages and components. </li>
                <li>Review code from other engineers to help ensure accesibility, maintainability and performance.</li>
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
            title: 'Enyata - Case Study',
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