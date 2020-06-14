<template>
  <div class="app__container">
    <HeroBanner />
    <Clients />
    <Clients />
    <Clients />
    <Clients />

  </div>
</template>

<script>
const HeroBanner = () => import("./HeroBanner.vue");
const Clients = () => import("./Clients.vue");

export default {
  name: "Container",
  components: {
    Clients,
    HeroBanner
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

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>