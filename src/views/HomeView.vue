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

    <section class="about-me">
      <!--Picture-->
      <figure id="image-of-me">
        <img src="../assets/photo.jpg" alt="Photo of Brenda Cayzac" />
        <figcaption>That's me!</figcaption>
      </figure>
      <article>
        <p>
          I'm a curious person seeking to integrate a wide variety of techniques
          and knowledge to offer
          <strong
            >high-quality solutions for communication strategies and projects </strong
          >. My skills include graphic design, brand identity, advertising,
          motion graphics, and web development (front-end, back-end, UX/UI
          design). I'm always excited to learn new skills and refine existing
          ones while working on my own or in a team.
        </p>
        <br />
        <p>
          On this website, you will be able to find my previous works as well as
          get in contact with me. This website serves as a showcase for my
          front-end skills by using Vue.js 3 to build it. I've also incorporated
          the use of a basic service worker.
        </p>
        <br />
        <p>
          You can find the relevant code on my GitHub account as well as the
          previous version of this site, which was created by using vanilla
          HTML, SASS, and JavaScript.
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

	    article{
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
  }
}
</style>
