<template>
  <div class="workstatus__section">
    <span
        class="workstatus__dot"
        :class="{'active': isCurrentlyWorking}"
    />
    <span class="workstatus__text">{{ profile.message }}</span>
  </div>
</template>

<script>
import gql from "graphql-tag";

export default {
  name: "WorkStatus",
  computed: {
      isCurrentlyWorking () {
          return this.profile.is_currently_working || false
      }
  },
  data() {
    return {
      profile: []
    };
  },
  apollo: {
    profile: gql`
      query Profile {
        profile{
            id,
            is_currently_working,
            message
        }
      }
    `
  }
};
</script>

<style lang="scss">
.workstatus__ {
  &dot {
    height: 25px;
    width: 25px;
    background-color: rgb(0, 200, 83);
    border-radius: 50%;
    display: inline-block;
    &.active {
      background-color: #f44336;
    }
  }
}
</style>