<template>
  <div id="app">

    <Navbar />
    <router-view :key="$route.fullPath"></router-view>
    <WorkStatus />

  </div>
</template>

<script>
import './scss/index.scss'
import './scss/_app.scss'

import Navbar from '@/components/Navbar'
import WorkStatus from '@/components/WorkStatus'

export default {
  name: 'App',
  components: {
    Navbar,
    WorkStatus
  }
}
</script>
