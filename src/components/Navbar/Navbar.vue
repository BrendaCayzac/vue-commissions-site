<template>
  <nav>
    <!--Title-->
    <h1 v-if="windowWidth > 768">BRENDA CAYZAC</h1>
    <h1 v-else>BC</h1>

    <!--Menu Button-->
    <input
      v-if="windowWidth < 768"
      v-model="showMenu"
      class="menu-button"
      type="checkbox"
      id="menu-button"
    />
    <label v-if="windowWidth < 768" class="menu-icon" for="menu-button">
      <span class="nav-icon"></span>
    </label>

    <!--Links-->
    <ul v-if="showMenu || windowWidth > 768" class="menu">
      <li v-for="(page, index) in pages" :key="index">
        <router-link :to="page.link">{{ page.name }}</router-link>
      </li>
      <li class="language-selection">
        <font-awesome-icon
          icon="fa-solid fa-globe"
          :transform="fontAwesomeStyling"
        />
        <span
          v-for="(language, i) in languages"
          :key="i"
          @click="changeSelectedLanguage(language.language)"
          :class="{
            'selected-language': language.language === selectedLanguage,
          }"
        >
          {{ windowWidth > 1000 ? language.language : language.shortLang }}
        </span>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";

export default defineComponent({
  name: "SiteNavbar",

  setup() {
    const pages = [
      { link: "/", name: "Home" },
      { link: "/commissions", name: "Commissions" },
      { link: "/portfolio", name: "Portfolio" },
      { link: "/contact", name: "Contact" },
    ];

    const languages = [
      { language: "English", shortLang: "En" },
      { language: "Español", shortLang: "Es" },
      { language: "Français", shortLang: "Fr" },
    ];

	  const fontAwesomeStyling = ref(window.innerWidth<768?"down-4":"down-14");
    const selectedLanguage = ref("English");
	  const changeSelectedLanguage = (language: string) => {
		  selectedLanguage.value = language;
    };

    const showMenu = ref(false);
	  const windowWidth = ref(window.innerWidth);

    window.onresize = () => {
	    windowWidth.value = window.innerWidth;
      if (windowWidth.value < 768) {
	      showMenu.value = false;
	      fontAwesomeStyling.value="down-4";
      }else{
	      fontAwesomeStyling.value="down-14";
      }
    };

    return {
      changeSelectedLanguage,
      fontAwesomeStyling,
      languages,
      pages,
      selectedLanguage,
      showMenu,
      windowWidth,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "src/styles/custom";

nav {
  background-color: $bc-cyan;
  box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 3;
  padding: 0.3125rem 0;
  box-sizing: border-box;
  text-align: left;

  h1 {
    display: initial;
    line-height: 3.125rem;
    font-weight: 700;
    color: #ffffff;
    font-family: "Roboto Condensed", sans-serif;
    padding-left: 1.5625rem;
  }

  /* menu icon */
  .menu-icon {
    cursor: pointer;
    display: inline-block;
    float: right;
    padding: 1.5rem 1.5625rem 1.5rem 1.5rem;
    position: relative;
    user-select: none;
    .nav-icon {
      background: #ffffff;
      display: block;
      height: 2px;
      position: relative;
      transition: background 0.2s ease-out;
      width: 18px;

      &:before,
      &:after {
        background: #ffffff;
        content: "";
        display: block;
        height: 100%;
        position: absolute;
        transition: all 0.2s ease-out;
        width: 100%;
      }

      &:before {
        top: 0.3125rem;
      }

      &:after {
        top: -0.3125rem;
      }
    }
  }

  /* menu button */
  .menu-button {
    display: none;

    &:checked ~ .menu {
      max-height: 15rem;
    }
    &:checked ~ .menu-icon .nav-icon {
      background: transparent;
    }
    &:checked ~ .menu-icon .nav-icon:before {
      transform: rotate(-45deg);
    }
    &:checked ~ .menu-icon .nav-icon:after {
      transform: rotate(45deg);
    }
    &:checked ~ .menu-icon:not(.steps) .nav-icon:before,
    &:checked ~ .menu-icon:not(.steps) .nav-icon:after {
      top: 0;
    }
  }

  /* menu */
  ul {
    margin: 0;
    list-style: none;
    overflow: hidden;
    background-color: $bc-cyan;
    clear: both;
    max-height: 0;
    transition: max-height 0.2s ease-out;
    padding-bottom: 2rem;

    a {
      display: block;
      line-height: 2rem;
      padding: 0 1.5625rem;
      text-decoration: none;
      color: #ffffff;

      &.router-link-exact-active {
        font-weight: 700;

        &:hover {
          :hover {
            background-color: $bc-cyan;
            font-weight: 700;
            color: #ffffff;
          }
        }
      }

      &:hover {
        background-color: #ffffff;
        font-weight: 700;
        color: $bc-magenta;
      }
    }

    .language-selection {
      display: flex;
      align-content: center;
      color: #ffffff;
      padding: 0 1.5625rem;

      span {
        cursor: pointer;
        padding: 0 0.621rem;
	      position: relative;

        &:hover {
          font-weight: bold;
        }

	      &::after{
		      content: "";
		      position: absolute;
		      background: #ffffff;
		      top: 50%;
		      right: 0%;
		      height: 50%;
		      width: 1px;
		      transform: translateY(-50%);
	      }

	      &:last-child::after{
		      width: 0;
	      }
      }

      .selected-language {
        font-weight: bold;
        color: $bc-yellow;

        &:hover {
          cursor: default;
          pointer-events: none;
        }
      }
    }
  }
}

@media (min-width: $tablet) {
  nav {
    position: static;
    .menu {
      clear: none;
      float: right;
      max-height: none;
    }

    .menu-icon {
      display: none;
    }

    ul {
      padding: 0;
      li {
        float: left;
        a {
          padding: 0.625rem 1rem;
        }
      }

      .language-selection {
        span {
          padding: 0.625rem;
        }
      }
    }
  }
}
</style>
