<template>
  <div>
    <Header ref="home"/>
    <section class="project-view">
        <h1 aria-label="My Portfolio">
            My Portfolio 
            <span>
                <router-link to="/">
                    visit website
                </router-link>
            </span>
        </h1>
        <h2>Brand and public view</h2>
        <div class="project-view__iteration">
            <div class="project-view__iteration--challenge p-2">
                <h3>Challenge</h3>
                <p>
                    My previous portfolio was a simple static website. I wanted to create a more dynamic and interactive website.
                </p>
            </div>
            <div class="project-view__iteration--services p-2">
                <h3>Services</h3>
                <p>Engineering - Portfolio Website</p>
            </div>
            <div class="project-view__iteration--stacks p-2">
                <h3>Tech Stacks</h3>
                <ul aria-roledescription="list">
                    <li class="typescript">Typescript</li>
                    <li class="vue">Vue</li>
                    <li class="scss">Scss</li>
                    <li class="figma">Figma</li>
                </ul>
            </div>
        </div>
    </section>
    <section class="about-project">
        <h1 aria-label="About Uptima">About</h1>
        <h2>I am a highly motivated and experienced frontend engineer with over 5 years of professional working experience working with teams on diverse products and projects.</h2>
        <blockquote>
            <p>
                "I believe the web should be accesibe to all, hence accessibility is a must in the web development world which i treat with utmost concern."
            </p>
        </blockquote>
    </section>
    <section class="project-image">
        <div class="project-image__container">
            <img src="@/assets/portfolio/micheal-detail.png" alt="micehal portfolio website page">
        </div>
    </section>
    <ContactSuccess />
    <section class="project-acheivement">
        <div class="project-acheivement__container">
            <h1>My role</h1>
            <ul>
                <li>Solely build portfolio website from design ideation to implementation.</li>
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
            title: 'My Portfolio - Case Study',
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