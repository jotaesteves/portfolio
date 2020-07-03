<template>
  <div id="home" class="hero is-primary section">
    <div class="hero__image">
        <img src="@/assets/img/jorge_esteves_profile.jpeg">
    </div>
      <div class="hero-body">
        <div class="container columns">
            <div class="hero__title column is-three-quarters">
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
                >
                    <h1
                        class="luxy-el"
                        data-horizontal="1"
                        data-speed-x="-35"
                    >
                        Hello! <br>
                        I'm <br>
                        <span class="outline">JORGE ESTEVES </span><br>
                        <span class="typing"></span>
                    </h1>
                </vue-typed-js>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
import '../../scss/_hero-banner.scss'

export default {
    name:'HeroBanner',
    methods: {
    },
}
</script>
