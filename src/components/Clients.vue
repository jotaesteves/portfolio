<template>
  <div>
    <section class="clients__section">
      <div class="luxy-el clients__container" data-horizontal="1" data-speed-x="35">
        <h1>Some of my clients so far</h1>

        <ClientsList :clients="clients" />
      </div>
      <div class="clients__companies">
        <ul class="pt-navbar-nav">
          <li v-for="client in clients" v-bind:key="client.id">
            <router-link :to="{ path: '/client/' + client.name }" :key="client.id">{{ client.name }}</router-link>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import ClientsList from "../components/ClientsList.vue";

export default {
  name: "Clients",
  components: {
    ClientsList
  },
  data() {
    return {
      clients: [
        {
          id: "1",
          title: "Leroy Merlin",
          description:
            "Web and Mobile Development\nVueJs, Javascript, Webpack, Git, Jira, Html, Css, Sass, Docker, jQuery, json, Rest,\nSome interactions with clients and user-experience interventions.",
          start_date: "2018-12-01",
          end_date: null,
          skills: {
            skills: [
              "VueJs",
              "Javascript",
              "HTML",
              "CSS",
              "SCSS",
              "REST",
              "JSON"
            ]
          },
          is_currently_working: true,
          link: "[Leroy Merlin](https://www.leroymerlin.pt/)",
          logo: {
            url: "../assets/img/logo_b01dd9ec5a.jpeg",
            __typename: "UploadFile"
          },
          __typename: "Clients"
        },
        {
          id: "2",
          title: "PC Diga",
          description: "Magento2, javascript,  jQuery,  html5+css3",
          start_date: "2018-09-01",
          end_date: "2018-10-31",
          skills: null,
          is_currently_working: null,
          link: "[PC Diga](https://www.pcdiga.com/)",
          logo: {
            url: "../assets/img/pcdiga_5b08cb0097.svg",
            __typename: "UploadFile"
          },
          __typename: "Clients"
        },
        {
          id: "3",
          title: "Blue-Infinity",
          description:
            "Development: Sailsjs, javascript, jQuery, html5+css3, git, json, postman, node, Linux server, Raspberry pi, Unity.\nUI/UX Design: AffinityDesigner, Publisher, Adobexd, photoshop,zeplin.",
          start_date: "2018-04-01",
          end_date: "2019-12-31",
          skills: null,
          is_currently_working: null,
          link:
            "[Blue-Infinity linked by Isobar](https://www.isobar.com/pt/en/)",
          logo: {
            url: "../assets/img/blue_infnity_logo_ed9ced3018.png",
            __typename: "UploadFile"
          },
          __typename: "Clients"
        }
      ],
      companies: [
        {
          id: "1",
          name: "Blue Infinity linked by Isobar",
          __typename: "Company"
        },
        { id: "2", name: "Mantu", __typename: "Company" }
      ]
    };
  }
};
</script>