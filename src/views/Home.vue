<template>
  <div class="app__container">
      <HeroBanner />
      <About />
      <Clients />
      <Services />
      <Contact />
  </div>
</template>

<script>
const HeroBanner = () => import("@/components/sections/HeroBanner.vue");
const About = () => import("@/components/sections/About.vue");
const Clients = () => import("@/components/sections/Clients.vue");
const Services = () => import("@/components/sections/Services.vue");
const Contact = () => import("@/components/sections/Contact.vue");

export default {
  name: "Home",
  components: {
    HeroBanner,
    About,
    Clients,
    Services,
    Contact,
  },
  props: {
    msg: String
  },
  data() {
    return {
      LoadingComponent: false,
    };
  },
};
</script>
