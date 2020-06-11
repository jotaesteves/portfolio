<template>
  <div>
    <nav class="pt-navbar-container" uk-navbar>
      <div class="pt-navbar-left">
        <ul class="pt-navbar-nav">
          <li>
            <a href="/">Strapi Blog </a>
          </li>
        </ul>
      </div>

      <div class="pt-navbar-right">
        <ul class="pt-navbar-nav">
          <li v-for="company in companies" v-bind:key="company.id">
            <router-link
              :to="{ path: '/company/' + company.id }"
              :key="company.id"
            >
              {{ company.name }}
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import '../sass/_navbar.scss';
import gql from "graphql-tag";

export default {
  name: "Nav",
  data() {
    return {
      companies: []
    };
  },
  apollo: {
    companies: gql`
        query Companies {
            companies {
                id,
                name,
            }
        }
    `
  }
};
</script>