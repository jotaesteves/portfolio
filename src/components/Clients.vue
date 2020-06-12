<template>
  <div>
    <section class="clients__section">
      <div class="clients__container">
        <h1>Some of my clients so far</h1>

        <ClientsList :clients="clients" />
      </div>
      <div class="clients__companies">
        <ul class="pt-navbar-nav">
          <li v-for="client in clients" v-bind:key="client.id">
            <router-link
              :to="{ path: '/client/' + client.name }"
              :key="client.id"
            >
              {{ client.name }}
            </router-link>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import ClientsList from "../components/ClientsList.vue";
import gql from "graphql-tag";

export default {
  components: {
    ClientsList
  },
  data() {
    return {
      clients: [],
      companies: []
    };
  },
  apollo: {
    clients: gql`
      query Clients {
        clients {
          id
          Name
          description
          start_date
          end_date
          skills
          is_currently_working
          link
          logo {
            url
          }
        }
      }
    `,
    companies: gql`
      query Companies {
        companies {
          id
          name
        }
      }
    `
  }
};
</script>