<template>
  <div id="app">

    <Navbar />
    <router-view :key="$route.fullPath"></router-view>

  </div>
</template>

<script>
import './sass/_app.scss'
import Navbar from '@/components/Navbar'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>
