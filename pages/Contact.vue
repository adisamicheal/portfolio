<template>
  <section>
    <div class="contact-section">
      <h3 class="text-center font-weight-700 text-size-36">Hit me up!</h3>
      <h3 class="text-center font-weight-500 text-size-16 mt-5">Get in Touch</h3>
      <div class="contact-section-container">
        <div class="contact">
          <!-- <div class="d-flex">
            <div>
              <img src="@/assets/images/phone-call.svg" alt="phone icon">
            </div>
            <div class="icon-message ml-30">
              <p class="text-size-18 font-weight-700">Call Me</p>
              <p class="text-size-16 font-weight-500 mt-10">+234 909 127 1976</p>
            </div>
          </div> -->
          <div class="mt-50 d-flex">
            <div>
              <img src="@/assets/images/mail.svg" alt="location icon">
            </div>
            <div class="icon-message ml-30">
              <p class="text-size-18 font-weight-700">Send me an email</p>
              <p>
                <a class="text-size-16 font-weight-500 mt-10" href="mailto:adisamicheal20@gmail.com" target="_blank" rel="noopener">adisamicheal20@gmail.com</a>
              </p>
            </div>
          </div>
          <!-- <div class="mt-50 d-flex">
            <div>
              <img src="@/assets/images/location.svg" alt="mail icon">
            </div>
            <div class="icon-message ml-30">
              <p class="text-size-18 font-weight-700">Locate Me</p>
              <p class="text-size-16 font-weight-500 mt-10">Lagos, Nigeria.</p>
            </div>
          </div> -->
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
  </section>
</template>

<script>
export default {
  // layout: 'default',
  data() {
    return {
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
  }
}
</script>

<style lang="scss" scoped>
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
  margin-top: 30px;
}
.contact-section-container {
  display: flex;
  justify-content: space-between;
  max-width: 800px;
  margin: auto;
  margin-top: 105px;
}
.testimonials-section {
  max-width: 1000px;
  margin: 50px auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  grid-gap: 40px;
}
.testimonial-card {
  padding: 20px;
}
.linkedin {
  width: 15px;
  margin-left: 10px;
}

// for form later 

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

@media screen and (max-width: 768px) {
  .testimonial-container {
    margin-top: 0 !important;
  }
  .contact-section {
    padding:0 20px 0 20px;
  }
  .contact-section-container {
    flex-direction: column;
    margin-top: 0;
  }
  .contact-form {
    margin-top: 100px;
  }
}
</style>