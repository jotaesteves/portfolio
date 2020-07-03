<template>
  <section id="about" class="section">

    <div class="wrapper">
      <div class="circle">
        <img id="reload" src="@/assets/img/rotating_text.svg" alt="scroll">
      </div>
    </div>
    <div class="about__wrapper">
      <h1 v-scroll-toggle-class:animate__fadeInUp class="animate__animated">ABOUT ME</h1>
      <p v-scroll-toggle-class:animate__fadeInUp class="animate__animated">
        Jorge Esteves, 28 years old,<br>
        based in Portugal. <br>
        <br>
        I love to develop the front-end <br>
        side of applications and to do <br>
        some UI/UX design on the side.
      </p>
    </div>
  </section>
</template>

<script>
import { TimelineLite, Elastic, Back, Expo, /* TweenMax, Linear */ } from "gsap";

export default {
methods: {
  theFormat(number) {
    return number.toFixed(0);
  },
  scrollRotate() {
    let image = document.getElementById("reload");
    image.style.transform = "rotate(" + window.pageYOffset/4 + "deg)";
  }
},
created () {
  const that = this;
  window.onscroll = function () {
    that.scrollRotate();
  }
},
beforeDestroy () {
  const that = this;
  window.onscroll = function () {
    that.scrollRotate();
  };
},
mounted () {
    const { bubble, bubblePulse } = this.$refs;
    this.timeline = new TimelineLite({
      onComplete: () => this.timeline.restart()
    });

    this.timeline.to(bubble, 0.4, {
      scale: 0.8,
      rotation: 16,
      ease: Back.easeOut.config(1.7)
    });
    this.timeline.to(bubblePulse, 0.8,
      {
        scale: 0.9,
        opacity: 1
      },
      "-=0.6"
    );
    this.timeline.to(bubble, 1.2, {
      scale: 1,
      rotation: "-=16",
      ease: Elastic.easeOut.config(2.5, 0.5)
    });
    this.timeline.to(
      bubblePulse,
      1.1,
      {
        scale: 3,
        opacity: 0,
        ease: Expo.easeOut
      },
      "-=1.2"
    );

/*     this.TweenMax.to(bubble, 15, {
        css:
        {
            rotation:360
        },
        // remove default easing for seamless loop
        ease:Linear.easeNone,
        repeat: -1,
        paused: false
    }); */
  },
}
</script>

<style lang="scss">
.circle{
  background-color:red;
  height: 5em;
  width: 5em;
  border-radius: 100%
}

.bubble-wrapper {
  position: relative;
}

.bubble {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid white;
  background: #272727;
  border-radius: 50%;
  height: 100px;
  width: 100px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
}

.bubble-pulse {
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  margin-top: -60px;
  margin-left: -60px;
  background: rgba(255, 255, 255, 0.1);
  height: 120px;
  width: 120px;
  border-radius: 50%;
  opacity: 0;
  transform: scale(0);
}

.bubble-image {
  width: 50%;
}

.wrapper {
  top: 40px;
  right: 12%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  position: absolute;
}

.circle {
    width: 280px;
    height: 280px;
    border-radius: 50%;
    background-color: unset;
    text-align: center;
    vertical-align: middle;
    display: table-cell;
}

#reload {
  width: 250px;
  height: 250px;
}

#about {
  display: block;
  position: relative;
  height: 100vh;
  width: 100%;
  background-image: url('../../assets/img/background_laptop.jpg');
  background-size: cover;
}

.about__wrapper {
  background-color: var(--bg-color);
  width: 800px;
  margin: 10rem 10rem 10rem 0;
  padding: 10rem;

  h1 {
    padding-bottom: 20px;
  }
}

</style>
