<template>
  <div class="commissions">
	  <Header :plural="true" title="commission"
	          subtitle="information and prices"/>

    <!-- Previous work-->
    <section class="previous-work">
      <figure v-for="(example, i) in examples" :key="i">
        <img
          :src="getImgUrl(example, 'png')"
          :alt="$t('Example of') + ' ' + $t('commission')"
        />
      </figure>
    </section>

    <!-- Prices -->
    <section>
      <MoreInformation title="illustration" :categories="illustrationPrices" />
      <MoreInformation
        title="Graphic Design"
        :categories="graphicDesignPrices"
      />
      <MoreInformation title="Web Design" :categories="webDesignPrices" />
    </section>

    <!-- Text -->
    <section class="general-information">
      <h2>{{ $t("General Information") }}</h2>
      <p>
        {{ $t("general-information-text") }}
        <span> brendacayzac@gmail.com</span>.
      </p>
      <div class="specifics">
        <div class="container">
          <div>
            <h3>{{ $t("Payment") }}</h3>
            <p>{{ $t("payment-information") }}.</p>
          </div>
          <div>
            <h3>{{ $t("Deadlines") }}</h3>
            <p>{{ $t("deadlines-information") }}.</p>
          </div>
        </div>
        <div>
          <h3>{{ $t("Disclaimer") }}</h3>
          <p>
            <b>{{ $t("I will not draw") }}</b
            >: {{ $t("disclaimer1") }}. <br />
            <br />
            {{ $t("disclaimer2") }}. <br />
            <br />{{ $t("disclaimer3") }}.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Header from "@/components/Header/Header.vue";
import MoreInformation from "@/components/MoreInformation/MoreInformation.vue";
import { getImgUrl } from "@/helpers/getImage";

export default defineComponent({
  name: "CommissionsView",
  components: { Header, MoreInformation },

  setup() {
    const examples = [
      "example1",
      "example2",
      "example3",
      "example4",
      "example5",
      "example6",
    ];

    const illustrationPrices = [
      {
        title: "Line art",
        file: "lineart",
        alt: "line illustration",
        prices: [
          { text: "Headshot/Bust", price: "US$10" },
          { text: "Waist up", price: "US$15" },
          { text: "Full-Body", price: "US$20" },
          { text: "Extra Character", price: "+US$15" },
        ],
      },
      {
        title: "Flat colors",
        file: "flat",
        alt: "flat colors illustration",
        prices: [
          { text: "Headshot/Bust", price: "US$10" },
          { text: "Waist up", price: "US$20" },
          { text: "Full-Body", price: "US$35" },
          { text: "Extra Character", price: "+US$25" },
        ],
      },
      {
        title: "Shaded",
        file: "shaded",
        alt: "shaded illustration",
        prices: [
          { text: "Headshot/Bust", price: "US$25" },
          { text: "Waist up", price: "US$40" },
          { text: "Full-Body", price: "US$65" },
          { text: "Extra Character", price: "+US$45" },
        ],
      },
      {
        title: "Backgrounds",
        file: "backs",
        alt: "backgrounds",
        prices: [
          { text: "Simple", price: "US$10" },
          { text: "Complex", price: "US$35" },
        ],
      },
      {
        title: "Others",
        prices: [
          {
            text: "Comics, icons, merchandise, special illustrations",
            price: "US$15 per hour / consult the artist",
          },
        ],
      },
    ];

    const graphicDesignPrices = [
      {
        title: "Vectors",
        file: "vector",
        alt: "Vectors",
        prices: [
          { text: "Simple", price: "US$15" },
          { text: "Complex", price: "US$30" },
        ],
      },
      {
        title: "Brands",
        file: "brand",
        alt: "brand design",
        prices: [
          { text: "Brand redesign", price: "US$25/h" },
          { text: "Brand design", price: "US$35/h" },
          { text: "Brand identity", price: "US$25/h" },
        ],
      },
      {
        title: "Motion graphics",
        file: "motion_graphics",
        alt: "motion graphics",
        prices: [{ text: "Hourly rate", price: "US$25/h" }],
      },
    ];

    const webDesignPrices = [
      {
        title: "Web design",
        file: "web_design",
        alt: "web design",
        prices: [
          { text: "Front-end", price: "US$35" },
          { text: "Back-end", price: "US$45" },
          { text: "Full-stack", price: "US$55" },
        ],
      },
    ];

    return {
      examples,
      getImgUrl,
      graphicDesignPrices,
      illustrationPrices,
      webDesignPrices,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "src/styles/custom";

.commissions {
  padding: 3.75rem 1.5rem 3rem;

  .previous-work {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 1rem;

    figure {
      width: 48%;
      background-color: rgba($bc-cyan, 0.25);
      img {
        width: auto;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  .general-information {
    padding: 2rem 0;
    h2 {
      font-weight: 400;
      font-size: 1.8rem;
      color: $bc-cyan;
      margin-bottom: 0.625rem;
      font-family: "Roboto Condensed", sans-serif;
    }

    p {
      margin-bottom: 0.5rem;
      text-align: justify;

      span {
        color: $bc-cyan;
      }
    }

    .specifics {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1.5rem;

      h3 {
        font-size: 1.2rem;
        color: $bc-magenta;
        margin-bottom: 0.5rem;
        margin-top: 1.5rem;
      }
    }
  }
}

/* Tablet */
@media (min-width: $tablet) {
  .commissions {
    padding-top: 0;
    .previous-work {
      figure {
        width: 32%;
      }
    }

    .general-information {
      text-align: left;
      .specifics {
        flex-direction: row;
        align-items: start;
        gap: 1rem;

        h3 {
          margin-top: 1.25rem;
        }
      }
    }
  }
}
</style>
