<template>
  <div id="app" :class="{
    'dark-mode': this.$store.getters['isDarkTheme'],
    'light-mode': this.$store.getters['isLightTheme']
    }"
    :data-theme="themeMode"
  >
    <Navbar />
    <router-view :key="$route.fullPath"></router-view>
    <Footer />
  </div>
</template>

<script>
import luxy from '../src/luxy.js'
import isDarkMode from '../src/dark-theme-detector.js'

import "./scss/index.scss"

import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default {
  name: "App",
  components: {
    Navbar,
    Footer
  },
  computed: {
    themeMode () {
      return this.$store.getters['themeSwitch'] ? 'dark' : 'light'
    }
  },
  data() {
    return {
      isDarkMode
    }
  },
  mounted() {
    luxy
  },
};
</script>
