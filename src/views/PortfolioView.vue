<template>
  <div class="portfolio">
    <Quote quote="quote-emil-cioran" author="Emil Cioran" />

    <Header title="portfolio" :subtitle="selectedCategory" />

    <div
      class="category-selection"
      role="navigation"
      aria-label="Portfolio categories"
    >
      <CategoriesButton
        v-for="(category, i) in categories"
        :key="i"
        :text="category"
        @change-category="selectedCategory = $event"
      />
    </div>

    <section>
      <PortfolioExample
        v-for="portfolioItem in portfolioArray"
        :portfolio-item="portfolioItem"
        :selected-category="selectedCategory"
        :key="portfolioItem.name"
      />
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import CategoriesButton from "@/components/Buttons/CategoriesButton.vue";
import Header from "@/components/Header/Header.vue";
import PortfolioExample from "@/components/PortfolioExample/PortfolioExample.vue";
import Quote from "@/components/Quote/Quote.vue";

export default defineComponent({
  name: "PortfolioView",
  components: {
    CategoriesButton,
    Header,
    PortfolioExample,
    Quote,
  },

  setup() {
    const categories = [
      "all",
      "advertisement",
      "brands",
      "editorial",
      "illustration",
      "packaging",
      "web",
    ];

    const portfolioArray = [
      {
        name: "Pathfinder react",
        img: "pathfinder",
        alt: "Pathfinder react site",
        date: 2023,
        category: "web",
        link: "https://pathfinder-2e-react.netlify.app",
        description: "A Pathfinder website built using React.js and Typescript",
      },
      {
        name: "Updated brand",
        img: "behance-cover",
        alt: "Updated brand",
        date: 2023,
        category: "web",
        link: "https://www.behance.net/gallery/176214657/Re-branding",
        description: "updated-brand",
      },
      {
        name: "Dungeons and Dragons portraits",
        img: "Ebele",
        alt: "Dungeons and Dragons portraits",
        date: 2023,
        category: "web",
        link: "https://www.behance.net/gallery/176312679/Character-portraits",
        description: "dungeons-and-dragons-portraits",
      },
      {
        name: "Front-end Playground",
        img: "testing",
        alt: "Front-end testing",
        date: 2023,
        category: "web",
        link: "https://front-end-playground.netlify.app",
        description: "front-end-playground-description",
      },
      {
        name: "Vue site",
        img: "me",
        alt: "This site",
        date: 2023,
        category: "web",
        link: "#",
        description: "vue-site-description",
      },
      {
        name: "DnD Portraits",
        img: "macbeth",
        alt: "Dungeons and Dragons portraits",
        date: 2022,
        category: "illustration",
        link: "https://www.behance.net/gallery/164478237/Dnd-Portraits",
        description: "dnd-description",
      },
      {
        name: "Funny aprons",
        img: "aprons1",
        alt: "RWBY aprons",
        date: 2022,
        category: "illustration",
        link: "https://twitter.com/BrendaCayzac/status/1580646937849520129",
        description: "aprons-description",
      },
      {
        name: "LëtzPark",
        img: "letz",
        alt: "LëtzPark Brand",
        date: 2020,
        category: "brands",
        link: "https://www.behance.net/gallery/110459405/LetzPark?",
        description: "letz-description",
      },
      {
        name: "Vanilla personal site",
        img: "foto",
        alt: "Original site",
        date: 2020,
        category: "web",
        link: "https://brendacayzac.netlify.app/pages/home",
        description: "original-site",
      },
      {
        name: "Chloe Price",
        img: "chloe",
        alt: "Chloe Price",
        date: 2020,
        category: "illustration",
        link: "https://brendacayzac.tumblr.com/image/639042993815519232",
        description: "chloe-price-description",
      },
      {
        name: "Beauty Squad Redesign",
        img: "beautysquad",
        alt: "Beauty Squad Brand",
        date: 2020,
        category: "brands",
        link: "https://www.behance.net/gallery/100108499/Brand-Redesign",
        description: "beauty-squad-description",
      },
      {
        name: "Powder Shampoo",
        img: "shampoo",
        alt: "Powder Shampoo video",
        date: 2020,
        category: "advertisement",
        link: "https://www.behance.net/gallery/94549593/Powder-Shampoo-Motion-Graphics",
        description: "powder-shampoo-description",
      },
      {
        name: "Pathologic Portrait I",
        img: "daniil",
        alt: "Daniil Dankovsky",
        date: 2019,
        category: "illustration",
        link: "https://www.behance.net/gallery/91947859/Pathologic-Character-Portraits",
        description: "daniil-description",
      },
      {
        name: "Pathologic Portrait II",
        img: "clara",
        alt: "Clara",
        date: 2019,
        category: "illustration",
        link: "https://www.behance.net/gallery/91947859/Pathologic-Character-Portraits",
        description: "clara-description",
      },
      {
        name: "Pathologic Portrait III",
        img: "artemy",
        alt: "Artemy Burakh",
        date: 2019,
        category: "illustration",
        link: "https://www.behance.net/gallery/91947859/Pathologic-Character-Portraits",
        description: "artemy-description",
      },
      {
        name: "RWBY - Memento Mori",
        img: "example4",
        alt: "Memento Mori - Team RWBY",
        date: 2019,
        category: "illustration",
        link: "https://www.behance.net/gallery/86753215/Memento-Mori",
        description: "memento-mori-description",
      },
      {
        name: "Ambiental Facility Service",
        img: "afs",
        alt: "AFS Brand",
        date: 2018,
        category: "brands",
        link: "https://www.behance.net/gallery/67900493/Brand-design-Ambiental-Facility-Service-SRL",
        description: "afs-description",
      },
      {
        name: "Sample Graphics",
        img: "tiptut",
        alt: "AFS Brand",
        date: 2018,
        category: "advertisement",
        link: "https://www.behance.net/gallery/63644693/Motion-Graphics-Sample",
        description: "tip-tut-description",
      },
      {
        name: "Wakfu",
        img: "wakfu",
        alt: "Wakfu characters running",
        date: 2018,
        category: "illustration",
        link: "https://brendacayzac.tumblr.com/image/172744255033",
        description: "wakfu-description",
      },
      {
        name: "Gualeguaychú",
        img: "gualeguay",
        alt: "Gualeguaychú Brand",
        date: 2017,
        category: "brands",
        link: "https://www.behance.net/gallery/52958537/Brand-Identity-Design-Diseno-de-Identidad-de-Marca",
        description: "gualeguaychu-brand-description",
      },
      {
        name: "Códice",
        img: "codice",
        alt: "Códice Brand",
        date: 2017,
        category: "brands",
        link: "https://www.behance.net/gallery/51151157/Brand-Design-Codice",
        description: "codice-description",
      },
      {
        name: "Nike History",
        img: "nike",
        alt: "Nike prototype book",
        date: 2017,
        category: "editorial",
        link: "https://www.behance.net/gallery/43965347/Nike-Pieza-Editorial",
        description: "nike-book-description",
      },
      {
        name: "puto el que lee",
        img: "puto",
        alt: "Puto el que lee project",
        date: 2016,
        category: "editorial",
        link: "https://www.behance.net/gallery/43968125/Puto-el-que-lee-esto",
        description: "puto-description",
      },
      {
        name: "MissingNo",
        img: "missingno",
        alt: "MissigNo Magazine",
        date: 2016,
        category: "editorial",
        link: "https://www.behance.net/gallery/43971821/Revista-MissingNo",
        description: "missingno-magazine-description",
      },
      {
        name: "Smooth",
        img: "smooth",
        alt: "Smooth prototype",
        date: 2016,
        category: "packaging",
        link: "https://www.behance.net/gallery/43968565/Tetrapak-Smooth",
        description: "smooth-description",
      },
      {
        name: "Mom^2",
        img: "garnet",
        alt: "Garnet, Sapphire, and Ruby",
        date: 2016,
        category: "illustration",
        link: "https://www.behance.net/gallery/43969061/Mom2-Steven-Universe-Illustration",
        description: "mom-description",
      },
      {
        name: "Xipotli",
        img: "xipotli",
        alt: "Xipotli prototype",
        date: 2016,
        category: "packaging",
        link: "https://www.behance.net/gallery/43968787/Packaging-Xipotli",
        description: "xipotli-description",
      },
      {
        name: "Nike Vintage",
        img: "vintage",
        alt: "Nike vintage poster",
        date: 2016,
        category: "advertisement",
        link: "https://www.behance.net/gallery/43964673/Estilos-Graficos-Publicidad-Nike",
        description: "nike-vintage-description",
      },
      {
        name: "Nike Japanese Techno",
        img: "japanese",
        alt: "Nike Japanese Techno poster",
        date: 2016,
        category: "advertisement",
        link: "https://www.behance.net/gallery/43964673/Estilos-Graficos-Publicidad-Nike",
        description: "nike-japanese-techno-description",
      },
      {
        name: "Nike Organic",
        img: "organic",
        alt: "Nike Organic poster",
        date: 2016,
        category: "advertisement",
        link: "https://www.behance.net/gallery/43964673/Estilos-Graficos-Publicidad-Nike",
        description: "nike-organic-description",
      },
      {
        name: "Nike Garage",
        img: "garage",
        alt: "Nike Garage poster",
        date: 2016,
        category: "advertisement",
        link: "https://www.behance.net/gallery/43964673/Estilos-Graficos-Publicidad-Nike",
        description: "nike-garage-description",
      },
      {
        name: "Nike Infography",
        img: "infography",
        alt: "Nike Infography poster",
        date: 2016,
        category: "advertisement",
        link: "https://www.behance.net/gallery/43964673/Estilos-Graficos-Publicidad-Nike",
        description: "nike-infography-description",
      },
      {
        name: "Nike Tangible",
        img: "material",
        alt: "Nike Tangible poster",
        date: 2016,
        category: "advertisement",
        link: "https://www.behance.net/gallery/43964673/Estilos-Graficos-Publicidad-Nike",
        description: "nike-tangible-description",
      },
      {
        name: "Happy Never After",
        img: "marina",
        alt: "Happy Ever after CD",
        date: 2016,
        category: "advertisement",
        link: "https://www.behance.net/gallery/43968357/Fan-CD-Marina-The-Diamonds",
        description: "cd-description",
      },
    ];

    const selectedCategory = ref("all");

    return {
      categories,
      portfolioArray,
      selectedCategory,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "src/styles/custom";

.portfolio {
  padding: 3.75rem 0;

  .category-selection {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
    padding: 0 1.5rem;
  }

  section {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 2rem;
    padding: 2rem 1.5rem;
  }
}

/* Tablet */
@media (min-width: $tablet) {
  .portfolio {
    padding-top: 0;
  }
}
</style>
