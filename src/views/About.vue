<template>
  <section id="about" class="about">
    <full-page ref="fullpage" :options="options" id="fullpage">
      <div class="section">
        First section ...
      </div>
      <div class="section">
        Second section ...
      </div>
    </full-page>
  </section>
</template>

<script>
export default {
  data() {
    return {
      options: {
        afterLoad: this.afterLoad,
        navigation: true,
        menu: '#menu',
        anchors: ['page1', 'page2', 'page3'],
        sectionsColor: ['#41b883', '#ff5f45', '#0798ec']
      }
    };
  }
};
</script>

<style lang="scss">

</style>