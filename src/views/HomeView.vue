<template>
  <div class="home">
    <header>
      <div class="header-bg" :class="{ rotated: headerRotation }"></div>
      <div class="categories">
        <p>{{ $t("development") }}</p>
        <p>{{ $t("illustration") }}</p>
        <p>{{ $t("design") }}</p>
      </div>
    </header>

    <section class="about-me">
      <!--Picture-->
      <figure id="image-of-me">
        <img src="../assets/photo.jpg" :alt="$t('my-photo-alt')" />
        <figcaption>{{ $t("my-photo") }}</figcaption>
      </figure>
      <article>
        <p>
          {{ $t("intro1") }}
          <strong> {{ $t("intro2") }}</strong
          >{{ $t("intro3") }}
        </p>
        <br />
        <p>
          {{ $t("intro4") }}
        </p>
        <br />
        <p>
          {{ $t("intro5") }}
        </p>
      </article>
    </section>

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

    <section class="information">
      <div v-for="(info, i) in information" :key="i">
        <figure>
          <img :src="getImgUrl(info.src,'jpg')" :alt="$t(info.srcAlt)" />
          <figcaption>
            {{ $t(info.figcaption) + " " + $t(info.title) }}
          </figcaption>
        </figure>
        <article>
          <h1>{{ $t(info.title) }}</h1>
          <p>{{ $t(info.text) }}</p>
          <button>{{$t(info.buttonText)}}</button>
        </article>
      </div>
    </section>

    <section class="quotes">
      <div v-for="(quote, i) in quotes" :key="i">
        <blockquote>
          <font-awesome-icon icon="fas fa-quote-left" />
          {{ $t(quote.quote) }} <br /><br />
          <span>— {{ quote.author }}</span>
        </blockquote>
        <font-awesome-icon icon="fas fa-quote-right" />
      </div>
    </section>

    <reload-window />
  </div>
</template>

<script lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { defineComponent, ref, onBeforeUnmount, onMounted } from "vue";

import SocialMedia from "@/components/SocialMedia/SocialMedia.vue";
import ReloadWindow from "@/components/ReloadWindow.vue";
import { getImgUrl } from "@/helpers/getImage";

export default defineComponent({
  name: "HomeView",
  components: { FontAwesomeIcon, ReloadWindow, SocialMedia },
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

    const information = [
      {
        src: "photo",
        srcAlt: "development",
        figcaption: "example-of",
        title: "development",
        text: "development-information",
        buttonText: "view-my-portfolio",
      },
      {
        src: "photo",
        srcAlt: "illustration",
        figcaption: "example-of",
        title: "illustration",
        text: "illustration-information",
        buttonText: "view-my-portfolio",
      },
      {
        src: "photo",
        srcAlt: "illustration",
        figcaption: "example-of",
        title: "graphic-design",
        text: "graphic-design-information",
        buttonText: "view-my-portfolio",
      },
      {
        src: "photo",
        srcAlt: "motion-graphics",
        figcaption: "example-of",
        title: "motion-graphics",
        text: "motion-graphics-information",
        buttonText: "view-my-portfolio",
      },
    ];

    const quotes = [
      { quote: "quote-paul-rand", author: "Paul Rand" },
      {
        quote: "quote-emil-cioran",
        author: "Emile Cioran",
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
	    getImgUrl,
      headerRotation,
      information,
      quotes,
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
        line-height: 3.5rem;
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

  .about-me {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    font-size: 1rem;
    margin: 2rem 1.5rem 4rem;
    gap: 2rem;

    //Image
    #image-of-me {
      position: relative;
      width: 15rem;
      height: 15rem;
      border-radius: 50%;
      background-color: $bc-magenta;
      figcaption {
        z-index: 1;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        opacity: 0;
        pointer-events: none;
      }

      img {
        border-radius: 50%;
        width: 100%;
        z-index: 2;

        &:hover {
          opacity: 30%;
        }
      }

      /* Hover */
      &:hover {
        figcaption {
          opacity: 100;
          font-weight: 600;
          color: #ffffff;
        }
      }
    }

    //introduction
    article {
      p {
        text-align: justify;
        font-weight: 400;
        color: $bc-gray strong;
        strong {
          color: $bc-magenta;
        }
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

  // Quotes
  .quotes {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5rem;
    margin: 4rem 1.5rem;

    div {
      background-color: transparent;
      border-radius: 3px;
      text-align: center;
      transition: 0.4s;
      position: relative;
      font-style: italic;
      width: 100%;
      max-width: 45rem;

      blockquote {
        position: relative;
        padding: 2rem 5rem 3rem;
        margin: 3rem 0 3rem;
        width: calc(100% - 1rem);
        background-color: $bc-gray;
        transition: 0.4s;
        color: #ffffff;
        font-size: 1.3rem;

        span {
          color: $bc-yellow;
          font-style: normal;
          font-size: 1rem;
        }
      }

      svg {
        font-size: 1.563rem;
        height: 3.125rem;
        width: 3.125rem;
        line-height: 3.125rem;
        background-color: $bc-magenta;
        color: #ffffff;
      }

      .fa-quote-left {
        position: absolute;
        top: 0;
        left: 0;
      }

      .fa-quote-right {
        position: absolute;
        bottom: 0;
        right: 2.65rem;
        z-index: 1;
      }

      &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 1.9rem;
        width: calc(100% - 4.5rem);
        height: 100%;
        background: transparent;
        border-top: 20px solid $bc-magenta;
        border-left: 20px solid $bc-magenta;
        box-sizing: border-box;
      }

      &:after {
        content: "";
        position: absolute;
        top: 0;
        left: 1.9rem;
        width: calc(100% - 4.5rem);
        height: 100%;
        border-bottom: 20px solid $bc-magenta;
        border-right: 20px solid $bc-magenta;
      }

      &:hover {
        blockquote {
          transform: rotateY(24deg) skewY(-3deg);
        }

        transform: skewY(3deg);

        svg {
          background-color: $bc-cyan;
        }

        &:before {
          border-top: 20px solid $bc-cyan;
          border-left: 20px solid $bc-cyan;
        }

        &:after {
          border-bottom: 20px solid $bc-cyan;
          border-right: 20px solid $bc-cyan;
        }
      }
    }
  }
}

/* 48em = 768px*/
@media (max-width: $mobile) {
  .home {
    padding-top: 3.75rem;
  }
}

/* Tablet*/
@media (min-width: $tablet) {
  .home {
    .about-me {
      flex-direction: row;
      justify-content: center;

      #image-of-me {
        position: relative;
        width: 15rem;
        height: 15rem;
        border-radius: 0;

        img {
          border-radius: 0;
          width: 15rem;
        }
      }

      article {
        width: 60%;
      }
    }
  }
}

/* Desktop */
@media (min-width: $desktop) {
  .home {
    .about-me {
      #image-of-me {
        width: 20rem;
        height: 20rem;
        img {
          width: 20rem;
        }
      }
    }

    .social-media-section {
      justify-content: space-around;
    }

    // Quotes
    .quotes {
      display: flex;
      flex-direction: row;
      justify-content: center;
      gap: 1.5rem;
      margin: 4rem 1.5rem;
    }
  }
}
</style>
