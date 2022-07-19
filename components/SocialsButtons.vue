<template>
    <v-row wrap class="mr-5">
      <v-col
        v-for="(social, i) in socials" :key="i" xs="12" sm="12" md="4"
        lg="4"
        style="padding-bottom: 5px;"
      >
        <v-btn
          target="_blank"
          :href="social.href"
          class="mx-md-4 transition-h social-button"
          :color="social.color || 'white darken-4'"
          large
          block
          :data-hover="social.subtitle"
          :outlined="isDarkMode"
        >
          <div>
            <v-icon
              :color="isDarkMode ? social.color : 'gray darken-2'"
              size="38px"
            >
              {{ social.icon }}
            </v-icon>
            <span class="hidden-xs-and-down" style="padding-left: 8px">
              {{ social.title }}
            </span>
          </div>
        </v-btn>
      </v-col>
    </v-row>
</template>

<script>
export default {
  name: 'SocialsButtons',
  props: {
    socials: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    isDarkMode () {
      return this.$colorMode.preference === 'dark'
    }
  }
}
</script>

<style scoped>

a.social-button:hover{cursor: pointer}
a.social-button {
  background: transparent; outline: none;
  position: relative;
  overflow: hidden;
}

/*button:before (attr data-hover)*/
a.social-button:hover:before{opacity: 1; transform: translate(0,0);}
a.social-button:before{
  content: attr(data-hover);
  position: absolute;
  top: 1.1em; left: 0;
  width: 100%;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-weight: 800;
  font-size: .8em;
  opacity: 0;
  transform: translate(-100%,0);
  transition: all .3s ease-in-out;
  background-color: transparent;
  text-align: center;
}
/*button div (button text before hover)*/
a.social-button:hover div{
  opacity: 0; transform: translate(100%,0)
}
a.social-button div{
  text-transform: uppercase;
  letter-spacing: 3px;
  font-weight: 800;
  font-size: .8em;
  transition: all .3s ease-in-out;
}
</style>
