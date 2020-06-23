<template>
  <div class="hero is-primary section">
      <div class="hero-body">
        <div class="container columns">
            <div class="hero__image column is-one-third">
                <img src="@/assets/img/jorge_esteves_profile.jpeg">
            </div>
            <div class="column is-three-thirds">
                <vue-typed-js
                    :strings="[
                        'Front-end Developer',
                        'Front-end Engineer',
                        'UI/UX Enthusiast',
                        'Designer',
                        'Freelancer'
                    ]"
                    :loop="true"
                    :typeSpeed="100"
                    :backSpeed="40"
                    :startDelay="1000"
                    @onComplete="doSmth()">
                    <h1
                        class="luxy-el"
                        data-horizontal="1"
                        data-speed-x="-35"
                    >
                        Hello there! I'm
                        <br>
                        <span class="outline">JORGE ESTEVES </span>
                        <br>
                        <span class="typing"></span>
                    </h1>
                </vue-typed-js>
            </div>
        </div>
      </div>
  </div>
</template>

<script>


export default {
    name:'HeroBanner',
    methods: {
        doSmth() {
            const pixels = window.innerHeight;
            if (window.scrollY < pixels) window.scroll(0, pixels)
        }
    },
}
</script>

<style lang="scss">


</style>