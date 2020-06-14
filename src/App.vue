<template>
  <div id="app">
    <Navbar />
    <router-view :key="$route.fullPath"></router-view>
    <WorkStatus />
  </div>
</template>

<script>
import "./scss/index.scss";
import "./scss/_app.scss";

import Navbar from "@/components/Navbar";
import WorkStatus from "@/components/WorkStatus";

import luxy from "luxy.js";

export default {
  name: "App",
  components: {
    Navbar,
    WorkStatus
  },
  mounted() {
    luxy.init({
      wrapper: "#app"
    });
  }
};
</script>
