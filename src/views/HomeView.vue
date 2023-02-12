<template>
  <div class="home">
    <header>
      <div class="header-bg" :class="{ rotated: headerRotation }"></div>
      <div class="categories">
        <p>Development</p>
        <p>Illustration</p>
        <p>Design</p>
      </div>
    </header>

    <section class="social-media-section">
      <div v-for="socialMedia in socialMedias" :key="socialMedia.id">
        <SocialMedia
          :fa-icon="socialMedia.faIcon"
          :url="socialMedia.url"
          :text="socialMedia.text"
          :id="socialMedia.id"
        />
      </div>
    </section>

    <reload-window />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onBeforeUnmount, onMounted } from "vue";

import SocialMedia from "@/components/SocialMedia/SocialMedia.vue";
import ReloadWindow from "@/components/ReloadWindow.vue";

export default defineComponent({
  name: "HomeView",
  components: { ReloadWindow, SocialMedia },
  setup() {
    const headerRotation = ref(false);

    const socialMedias = [
      {
        id: "LinkedIn",
        faIcon: "fab fa-linkedin-in",
        url: "https://www.linkedin.com/in/brenda-cayzac-138297103/",
        text: "/brenda-cayzac",
      },
      {
        id: "Behance",
        faIcon: "fa-brands fa-behance",
        url: "https://www.behance.net/brendacayzeb7a?isa0=1",
        text: "/brendacay",
      },
      {
        id: "GitHub",
        faIcon: "fa-brands fa-github",
        url: "https://github.com/BrendaCayzac",
        text: "/BrendaCayzac",
      },
      {
        id: "Twitter",
        faIcon: "fa-brands fa-twitter",
        url: "https://twitter.com/BrendaCayzac",
        text: "@BrendaCayzac",
      },
    ];

    const handleScroll = () => {
      headerRotation.value = window.scrollY > 30;
      const categories = document.querySelector(".categories");

      if (categories && window.scrollY > 30) {
        categories.classList.add("align-right");
      } else if (categories && window.scrollY < 30) {
        categories.classList.remove("align-right");
      }
    };

    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
    });

    onBeforeUnmount(() => {
      window.removeEventListener("scroll", handleScroll);
    });

    return {
      headerRotation,
      socialMedias,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "src/styles/custom";

.home {
  header {
    position: relative;
    height: 18rem;
    overflow: hidden;
    .header-bg {
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: $bc-cyan;
      transform-origin: top right;
      z-index: -1;
      transition: all 0.2s ease;
    }
    .categories {
      padding-top: 3rem;
      p {
        margin: 0 1.5rem 0 0;
        line-height: 3rem;
        font-size: 3rem;
        font-weight: 200;
        color: white;
        width: 100%;
        text-align: center;
        transition: 1s transform;
      }
    }

    // Transition
    .header-bg.rotated {
      transform: skewY(15deg);
    }

    .categories.align-right {
      p {
        text-align: right;
        padding-right: 3rem;
        transform: translateX(1%);
      }
    }
  }

  .social-media-section {
    background-color: $bc-cyan;
    width: 100%;
    padding: 1.5rem 2rem;
    display: flex;
    justify-content: space-between;
  }
}

/* 48em = 768px*/
@media (max-width: $mobile) {
  .home {
    padding-top: 3.75rem;
  }
}

/* Desktop */
@media (min-width: $desktop) {
  .home {
    .social-media-section {
      justify-content: space-around;
    }
  }
}
</style>
