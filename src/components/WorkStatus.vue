<template>
  <div class="workstatus">
    <span
      class="workstatus__dot"
      :class="{
        'active': isCurrentlyWorking
      }"
    />
    <span class="workstatus__text">
      {{ profile.message }}
    </span>
  </div>
</template>

<script>
export default {
  name: "WorkStatus",
  computed: {
    isCurrentlyWorking() {
      return this.profile.is_currently_working;
    }
  },
  data() {
    return {
      profile: {
        id: "1",
        is_currently_working: true,
        message: "currently busy - available July",
        __typename: "Profile"
      }
    };
  }
};
</script>

<style lang="scss">
.workstatus{
  &__dot {
    height: 25px;
    width: 25px;
    margin-right: 10px;
    background-color: rgb(0, 200, 83);
    border-radius: 50%;
    display: inline-block;
    &.active {
      background-color: #f44336;
    }
  }
  &__text {
    text-transform: uppercase;
    vertical-align: super;
  }

}
</style>