<template>
    <b-navbar>
        <template slot="brand">
            <b-navbar-item
                class="navbar__brand"
                tag="router-link" :to="{ path: '/' }"
            >
                Jorge
                Esteves
            </b-navbar-item>
        </template>
        <template slot="start">

        </template>

        <template slot="end">
            <b-navbar-item tag="a" v-scroll-to="'#about'">
                About
            </b-navbar-item>
            <b-navbar-item tag="a" v-scroll-to="'#clients'">
                Work
            </b-navbar-item>
            <b-navbar-item tag="a" v-scroll-to="'#services'">
                Services
            </b-navbar-item>
            <b-navbar-item tag="a" v-scroll-to="'#contact'">
                Contact
            </b-navbar-item>
        </template>
    </b-navbar>
</template>

<script>
import '../scss/_navbar.scss';

export default {
  name: "Nav",
};
</script>