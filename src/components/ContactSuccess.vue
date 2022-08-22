<template>
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
</template>

<script lang="ts">
export default {
    name: 'ContactSuccess',
}
</script>

<style lang="scss" scoped>
.reach-out {
    margin: 50px 0;
    background: $primary;
    padding: 50px 0;
    color: #fff;
    @media screen and (max-width: 768px) {
        padding: 30px;
    }
    &__container {
        max-width: 1200px;
        margin: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        @media screen and (max-width: 768px) {
            display: block;
        }
        p {
            font-size: 36px;
            @media screen and (max-width: 768px) {
                font-size: 24px;
                margin: 30px 0;
            }
        }
        a {
            background: #fff;
            font-size: 18px;
            padding: 10px;
            border-radius: 20px;
            min-width: 100px;
            text-align: center;
            text-decoration: none;
            color: $primary;
            transition: all 0.3s ease-in-out;
        }
        a:hover {
            background: $primary;
            color: #fff;
        }
    }
}
</style>