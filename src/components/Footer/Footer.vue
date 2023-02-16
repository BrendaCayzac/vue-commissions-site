<template>
  <footer>
    <nav>
      <ul v-if="route.name !== 'home'">
        <li v-for="(link, i) in links" :key="i">
          <font-awesome-icon :icon="link.icon" />
          <a href="https://www.linkedin.com/in/brenda-cayzac-138297103/"
            >LinkedIn</a
          >
        </li>
      </ul>
    </nav>
    <small>
      Icons by Font Awesome. Roboto provided by Google Fonts. Web designed by
      Brenda Cayzac.
    </small>
  </footer>
</template>

<script lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { useRoute } from "vue-router";
export default {
  name: "SiteFooter",
  components: { FontAwesomeIcon },
  setup() {
    const route = useRoute();

    const links = [
      {
        url: "https://www.linkedin.com/in/brenda-cayzac-138297103/",
        icon: "fab fa-linkedin",
      },
      {
        url: "https://www.behance.net/brendacayzeb7a?isa0=1",
        icon: "fab fa-behance-square",
      },
      {
        url: "https://www.behance.net/brendacayzeb7a",
        icon: "fa-brands fa-github-square",
      },
    ];

    return {
      links,
      route,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "src/styles/custom";

footer {
  width: 100%;
  left: 0%;
  bottom: 0%;
  background-color: #202020;
  color: #ffffff;
  padding: 1rem 0 1.5rem;
  z-index: 1;

  nav {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    margin: 0.2rem auto 0.4rem;
    gap: 2rem;

    ul {
      list-style: none;
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-self: center;
      gap: 2rem;
      margin: 0;

      li {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.3125rem;

        a {
          color: #ffffff;
          text-decoration: none;
          &:focus {
            outline-color: $bc-yellow;
          }
        }
        svg {
          font-size: 1.5rem;
        }

        &:hover,
        &:focus {
          color: $bc-yellow;
          a {
            color: $bc-yellow;
            text-decoration: underline;
          }
        }
      }
    }
  }

  small {
    font-weight: 400;
    padding: 0;
    margin: 0;
    text-align: center;
  }
}
</style>
