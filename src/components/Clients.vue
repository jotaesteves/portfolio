<template>
  <div>
    <div class="uk-section">
      <div class="uk-container uk-container-large">
        <h1>Strapi blog</h1>

        <ClientsList :clients="clients"></clientsList>
      </div>
    </div>
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
      clients: []
    };
  },
  apollo: {
    clients: gql`
      query Clients {
  clients {
    id,
    Name,
    description,
    start_date,
    end_date,
    skills,
    is_currently_working,
    link,
    logo {
        url
    }
  }
}
    `
  }
};
</script>