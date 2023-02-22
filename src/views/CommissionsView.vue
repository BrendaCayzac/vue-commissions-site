<template>
  <div class="commissions">
    <header>
      <h1>
        {{ $tc("commission", 2) }}
        <span>{{ $t("information and prices") }}</span>
      </h1>
    </header>

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
      <h2>General Information</h2>
      <p>
        I do not work with written contracts. However, every commission is
        detailed in writing and confirmed before its start to avoid
        uncomfortable situations or misunderstandings. At every step of the
        process, the commissioner gets an update on the project in writing and a
        sample of the work. If you have questions, feel free to message me via
        brendacayzac@gmail.com.
      </p>
      <div class="specifics">
        <div>
          <h2>Payment</h2>
          <p>
            Payment dates will be discussed with the client. A schedule can be
            arranged for invoices, which contained an itemized list of the
            commission. All payments are done via Paypal.
          </p>
        </div>
        <div>
          <h2>Deadlines</h2>
          <p>
            The finalization dates of each commission depend the complexity of
            the work. The client will be updated during each step of the work,
            and there will be rounds of feedback and corrections.
          </p>
        </div>
        <div>
          <h2>Disclaimer</h2>
          <p>
            <b> I will not draw</b> : extreme political subjects, gore, vore,
            exaggerated proportions, explicit NSFW, or hate images. <br />
            When an illustration commission is finished, the client will receive
            a full resolution version of it. However, I will not remove the
            signature and I ask kindly not to remove it either. No worries, it
            won't be in the way anything. <br />My commissions are not created
            for commercial use or sale or be used in any blockchain-related
            technology, to include NFTs cryptocurrency, or future inventions in
            the space. If the client plans on making merchandise with it, I
            should be notified. If desired, the client can request the original
            editable file(s). In the case of brand design/identity design, the
            clients will receive all the .psd, .svg, and or .ai related to the
            commission.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import MoreInformation from "@/components/MoreInformation/MoreInformation.vue";
import { getImgUrl } from "@/helpers/getImage";

export default defineComponent({
  name: "CommissionsView",
  components: { MoreInformation },

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
  header {
    position: relative;
    width: 100%;
    padding: 2em;
    margin: 1.5em;
    text-align: center;

    h1 {
      position: relative;
      padding: 0;
      margin: 0;
      font-weight: 300;
      font-size: 2.5rem;
      color: #202020;
      transition: all 0.3s ease 0s;
      -o-transition: all 0.3s ease 0s;
      -webkit-transition: all 034s ease 0s;

      &::before {
        position: absolute;
        bottom: 0;
        width: 60px;
        height: 2px;
        content: "";
        background-color: $bc-magenta;
        left: 50%;
        margin-left: -30px;
      }

      span {
        display: block;
        font-size: 0.5em;
        text-transform: uppercase;
        font-weight: 500;
        letter-spacing: 4px;
        line-height: 1.5em;
        color: $bc-gray;
        padding-bottom: 1.5rem;
      }
    }
  }

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

	.general-information{

	}
}

/* Tablet */
@media (min-width: $tablet) {
  .commissions {
    padding-top: 0;
    header {
      text-align: start;
      h1:before {
        left: 0.75em;
      }
    }

    .previous-work {
      figure {
        width: 32%;
      }
    }
  }
}
</style>
