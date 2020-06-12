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
            <b-navbar-item tag="router-link" :to="{ path: '/About' }">
                About
            </b-navbar-item>
            <b-navbar-item tag="router-link" :to="{ path: '/Clients' }">
                Work
            </b-navbar-item>
            <b-navbar-item tag="router-link" :to="{ path: '/Services' }">
                Services
            </b-navbar-item>
            <b-navbar-item tag="router-link" :to="{ path: '/Contact' }">
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