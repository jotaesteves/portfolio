<template>
    <div v-if="visible" class="loader">
        <b-loading
            :is-full-page="isFullPage"
            :active.sync="visible"
            :can-cancel="isCancel"
        >
            <b-icon
                pack="md"
                icon="sync-alt"
                size="is-large"
                custom-class="fa-spin">
            </b-icon>
        </b-loading>
    </div>
</template>

<script>
    export default {
        name: "Loader",
        computed: {
            visible: function () {
                return this.$store.getters.loader;
            },
            isFullPage: function () {
                return this.$store.getters.isFullPage;
            },
            isCancel: function () {
                return this.$store.getters.isCancel;
            }
        },
        methods: {}
    }

</script>

<style scoped>

</style>