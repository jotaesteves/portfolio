<template>
<section>
    <img
        src="../assets/logo.png"
        :alt="altDesc"
    >
    <span
     class="col"
    >
        <h2 v-text="title"/>
    </span>
</section>
</template>

<script>
export default {
    name: 'Card',
    data: function() {
        return {
            src1: '../assets/logo.png',
            src2: '../assets/logo.png'
        }
    },
    computed: {
        altDesc: function() {
            console.log(this.$attrs)
            return this.$attrs 
        },
        title: function() {
            return this.$attrs 
        },
    }
}
</script>

<style>
</style>
