<template>
<div>
</div>
</template>

<script>

export default {
  name: 'ModalWindow',
  props: {
    msg: String
  },
  data() {
    return {
      LoadingComponent: false,
      ErrorComponent: false,
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