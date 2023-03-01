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
        <figcaption>{{ $t("That's me") }}</figcaption>
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
          <img
            :src="
              getImgUrl(
                info.src,
                info.src === 'motion_graphics' ? 'gif' : 'jpg'
              )
            "
            :alt="$t(info.srcAlt) + ' ' + $t(info.title)"
          />
        </figure>

        <article>
          <h1>{{ $t(info.title) }}</h1>
          <p>{{ $t(info.text) }}</p>
          <a :href="info.link" role="button">
            <font-awesome-icon icon="fas fa-chevron-right" />
            {{ $t("View more") }}
            <svg class="rectangle">
              <rect x="0" y="0" fill="none" width="100%" height="100%" />
            </svg>
          </a>
        </article>
      </div>
    </section>

    <Quote quote="quote-paul-rand" author="Paul Rand" />
  </div>
</template>

<script lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { defineComponent, ref, onBeforeUnmount, onMounted } from "vue";

import Quote from "@/components/Quote/Quote.vue";
import SocialMedia from "@/components/SocialMedia/SocialMedia.vue";
import { getImgUrl } from "@/helpers/getImage";

export default defineComponent({
  name: "HomeView",
  components: { FontAwesomeIcon, Quote, SocialMedia },
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
        src: "web_design",
        srcAlt: "Example of",
        title: "development",
        text: "development-information",
        link: "https://github.com/BrendaCayzac?tab=repositories",
      },
      {
        src: "Jacques_reveal",
        srcAlt: "Example of",
        title: "illustration",
        text: "illustration-information",
        link: "/commissions",
      },
      {
        src: "graphic_design",
        srcAlt: "Example of",
        title: "graphic-design",
        text: "graphic-design-information",
        link: "https://www.behance.net/brendacayzeb7a",
      },
      {
        src: "motion_graphics",
        srcAlt: "Example of",
        title: "Motion graphics",
        text: "motion-graphics-information",
        link: "/portfolio",
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
      socialMedias,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "src/styles/custom";
.home {
	padding-top: 3.75rem;
	header {
		position: relative;
		height: 18rem;
		overflow: hidden;
		width: 100%;
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

	//Information
	.information {
		margin: 2rem 1.5rem;
		display: flex;
		flex-direction: column;
		gap: 3rem;

		div {
			width: 100%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			gap: 0.625rem;
			figure {
				position: relative;
				width: 20rem;
				margin: auto;
				background-color: $bc-gray;

				img {
					width: 100%;
					z-index: 2;

					&:hover {
						filter: grayscale(1);
					}
				}
			}

			article {
				h1 {
					font-family: "Roboto Condensed", sans-serif;
					font-weight: 300;
					font-size: 1.8rem;
					color: $bc-cyan;
				}

				p {
					text-align: justify;
					margin: 0.5rem 0 2rem;
				}

				a {
					position: relative;
					padding: 0.725rem 2rem 0.3125rem;
					max-width: 15rem;
					width: 100%;
					cursor: pointer;
					background: transparent;
					color: $bc-cyan;
					text-decoration: none;
					text-transform: uppercase;

					.rectangle {
						width: 100%;
						height: 2.813rem;
						position: absolute;
						left: 0;
						top: 0;

						rect {
							fill: none;
							stroke: $bc-cyan;
							stroke-width: 2;
							stroke-dasharray: 422, 0;
							transition: all 0.35s ease;
						}
					}

					&:hover {
						font-weight: 900;
						letter-spacing: 1px;
						color: $bc-magenta;

						rect {
							stroke: $bc-magenta;
							stroke-width: 5;
							stroke-dasharray: 0, 310;
							stroke-dashoffset: 48;
							transition: all 0.3s ease;
						}
					}
				}
			}
		}
	}
}

/* Tablet*/
@media (min-width: $tablet) {
	.home {
		padding-top: 0;
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

		.information {
			gap: 5rem;

			div {
				flex-direction: row;
				gap: 1.25rem;
				figure {
					width: 25rem;
				}

				article {
					width: 100%;
					text-align: justify;
				}

				&:nth-of-type(even) {
					flex-direction: row-reverse;
				}
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

		.information {
			justify-content: center;
			div {
				figure {
					margin: 0;
					width: 20rem;
				}

				article {
					width: 60%;
				}
			}
		}
	}
}

</style>
