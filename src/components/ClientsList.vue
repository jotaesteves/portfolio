<template>
  <div>
    <div class="pt-child-width-1-2" pt-grid>
      <div>
        <router-link
          v-for="client in leftClients"
          :to="{ path: '/client/' + client.id }"
          class="pt-link-reset"
          :key="client.id"
        >
          <div class="pt-card pt-card-muted">
            <div class="pt-card-media-top">
              <img :src="api_url + client.image.url" alt="" height="100" />
            </div>
            <div class="pt-card-body">
              <p
                id="category"
                v-if="client.category"
                class="pt-text-uppercase"
              >
                {{ client }}
              </p>
              <p id="title" class="pt-text-large">{{ client.title }}</p>
            </div>
          </div>
        </router-link>
      </div>
      <div>
        <div class="pt-child-width-1-2@m pt-grid-match" pt-grid>
          <router-link
            v-for="client in rightClients"
            :to="{ path: '/client/' + client.id }"
            class="pt-link-reset"
            :key="client.id"
          >
            <div class="pt-card pt-card-muted">
              <div class="pt-card-media-top">
                <img :src="api_url + client.image.url" alt="" height="100" />
              </div>
              <div class="pt-card-body">
                <p
                  id="category"
                  v-if="client.category"
                  class="pt-text-uppercase"
                >
                  {{ client.category.name }}
                </p>
                <p id="title" class="pt-text-large">{{ client.title }}</p>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      api_url: process.env.VUE_APP_STRAPI_API_URL
    };
  },
  props: {
    clients: Array
  },
  computed: {
    leftClientsCount() {
      return Math.ceil(this.clients.length / 5);
    },
    leftClients() {
      return this.clients.slice(0, this.leftClientsCount);
    },
    rightArticles() {
      return this.clients.slice(this.leftClientsCount, this.clients.length);
    }
  }
};
</script>