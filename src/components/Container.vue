<template>
<div>
      <div class="hero is-primary">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">Jorge Esteves</h1>
                    <h2 class="subtitle">Portfolio made with vue.js</h2>
                </div>
            </div>
      </div>
      <section>
        <Card/>
      </section>
      <section>
        <ModalWindow>
      </section>
</div>
</template>

<script>
const Card = () => import("./Card.vue")
const LoadingComponent = () => import("./Loader")

const ModalWindow = () => ({
  component: import('./Modal/ModalWindow.vue'),
  loading: LoadingComponent,
  // The error component will be displayed if a timeout is
  // provided and exceeded. Default: Infinity.
  timeout: 3000
})


export default {
  name: 'Container',
  components: [ModalWindow, Card],
  props: {
    msg: String
  },
  data() {
    return {
      LoadingComponent: false
    }
  },
}
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