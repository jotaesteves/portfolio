<template>
  <div>
    <router-link
      v-for="client in leftClients"
      :to="{ path: '/client/' + client.title }"
      class="client__link"
      :key="client.id"
    >
      <div class="client__item">
        <div class="client__item--image">
          <img :src="api_url + client.logo.url" alt height="100" />
        </div>
        <div class="client__item__body">
          <p class="client__item--title">{{ client.title }}</p>
          <p class="client__item--date">{{ formatDate(client.start_date) }} —
            <span v-if="client.is_currently_working">current</span>
            <span v-else>{{ formatDate(client.end_date) }}</span>
          </p>
        </div>
      </div>
    </router-link>
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
      return Math.ceil(this.clients.length);
    },
    leftClients() {
      return this.clients.slice(0, this.leftClientsCount);
    }
  },
  methods: {
    formatDate(date) {
      const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      let _date = new Date(date);
      return `${months[_date.getMonth()]} ${_date.getFullYear()}`
    }
  },
};
</script>

<style lang="scss">
  .client {
    &__item{
      &--image{
        max-width: 50px;
      }
    }
  }
</style>