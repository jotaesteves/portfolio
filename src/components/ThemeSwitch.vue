<template>
  <div class="theme-switch">
    <b-switch 
      v-model="isDarkMode"
      passive-type='is-warning'
      type='is-dark'
    >
      {{ isDarkMode ? "Dark Mode" : "Light Mode" }}
    </b-switch>
  </div>
</template>

<script>
export default {
  name: "ThemeSwitch",
  computed: {
    isDarkMode: {
		get: function() {
      return this.$store.getters['themeSwitch']
		},
		set: function(newValue) {
      this.$store.dispatch('setThemeSwitch', newValue)
		}
	}
  },
  data() {
    return {
      profile: {
        id: "1",
        is_currently_working: true,
        message: "currently busy",
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