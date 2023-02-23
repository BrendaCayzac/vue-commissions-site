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
      <PortfolioExample v-for="portfolioItem in portfolioArray"
                        :portfolio-item="portfolioItem"
                        :selected-category="selectedCategory"
                        :key="portfolioItem.name" />
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
  components: { CategoriesButton, Header, PortfolioExample, Quote },

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
		    name: "Vue site",
		    img: "construction_work",
		    alt: "This site",
		    date: 2023,
		    category: "web",
		    link: "#",
		    description:
				    "This site!",
	    },
	    {
		    name: "DnD Portraits",
		    img: "macbeth",
		    alt: "Dungeons and Dragons portraits",
		    date: 2022,
		    category: "illustration",
		    link: "https://www.behance.net/gallery/164478237/Dnd-Portraits",
		    description:
				    "I created some portraits for three PC characters of mine",
	    },
	    {
		    name: "Funny aprons",
		    img: "aprons1",
		    alt: "RWBY aprons",
		    date: 2022,
		    category: "illustration",
		    link: "https://twitter.com/BrendaCayzac/status/1580646937849520129",
		    description:
				    "Different RWBY characters posing with aprons",
	    },
      {
        name: "LëtzPark",
        img: "letz",
        alt: "LëtzPark Brand",
        date: 2020,
        category: "brands",
        link: "https://www.behance.net/gallery/110459405/LetzPark?",
        description:
          "This brand was created for a solution for parking in Luxembourg",
      },
      {
        name: "Vanilla personal site",
        img: "foto",
        alt: "My brand",
        date: 2020,
        category: "Web",
        link: "https://brendacayzac.netlify.app/pages/home",
        description:
          "A previous version of this site",
      },
      {
        name: "Chloe Price",
        img: "chloe",
        alt: "Chloe Price",
        date: 2020,
        category: "illustration",
        link: "https://brendacayzac.tumblr.com/image/639042993815519232",
        description:
          "Portrait of Square Enix's Life is Strange character Chloe Price",
      },
      {
        name: "Beauty Squad Redesign",
        img: "beautysquad",
        alt: "Beauty Squad Brand",
        date: 2020,
        category: "brands",
        link: "https://www.behance.net/gallery/100108499/Brand-Redesign",
        description:
          "Hairshop.lu reached out with the desire to stylize a sub-brand",
      },
      {
        name: "Powder Shampoo",
        img: "shampoo",
        alt: "Powder Shampoo video",
        date: 2020,
        category: "advertisement",
        link: "https://www.behance.net/gallery/94549593/Powder-Shampoo-Motion-Graphics",
        description:
          "A short animated informative video for Hairshop.lu's new product",
      },
      {
        name: "Pathologic Portrait I",
        img: "daniil",
        alt: "Daniil Dankovsky",
        date: 2019,
        category: "illustration",
        link: "https://www.behance.net/gallery/91947859/Pathologic-Character-Portraits",
        description:
          "Portrait of Pathologic character Daniil Dankovsky (The Bachelor)",
      },
      {
        name: "Pathologic Portrait II",
        img: "clara",
        alt: "Clara",
        date: 2019,
        category: "illustration",
        link: "https://www.behance.net/gallery/91947859/Pathologic-Character-Portraits",
        description:
          "Portrait of Pathologic character Clara Subarov (Changeling)",
      },
      {
        name: "Pathologic Portrait III",
        img: "artemy",
        alt: "Artemy Burakh",
        date: 2019,
        category: "illustration",
        link: "https://www.behance.net/gallery/91947859/Pathologic-Character-Portraits",
        description:
          "Portrait of Pathologic character Artemy Burakh (Haruspex)",
      },
      {
        name: "RWBY - Memento Mori",
        img: "example4",
        alt: "Memento Mori - Team RWBY",
        date: 2019,
        category: "illustration",
        link: "https://www.behance.net/gallery/86753215/Memento-Mori",
        description:
          "An illustration of the characters from Rooster Teeth's Team RWBY",
      },
      {
        name: "Ambiental Facility Service",
        img: "afs",
        alt: "AFS Brand",
        date: 2018,
        category: "brands",
        link: "https://www.behance.net/gallery/67900493/Brand-design-Ambiental-Facility-Service-SRL",
        description:
          "A startup owner required a brand that could combine both services provided by the company: cleaning and fumigation",
      },
      {
        name: "Sample Graphics",
        img: "tiptut",
        alt: "Motion graphics",
        date: 2018,
        category: "Advertisement",
        link: "https://www.behance.net/gallery/63644693/Motion-Graphics-Sample",
        description:
          "A small showcase of symbol animations for motion graphic videos based on TipTut's tutorial on YouTube",
      },
      {
        name: "Wakfu",
        img: "wakfu",
        alt: "Wakfu characters running",
        date: 2018,
        category: "illustration",
        link: "https://brendacayzac.tumblr.com/image/172744255033",
        description:
          "The main cast of Ankama's Wakfu TV series running away from trouble",
      },
      {
        name: "Gualeguaychú",
        img: "gualeguay",
        alt: "Gualeguaychú Brand",
        date: 2017,
        category: "brands",
        link: "https://www.behance.net/gallery/52958537/Brand-Identity-Design-Diseno-de-Identidad-de-Marca",
        description:
          "The city of Gualeguaychú requested several designs for their new tourism brand. This was a college assignment",
      },
      {
        name: "Códice",
        img: "codice",
        alt: "Códice Brand",
        date: 2017,
        category: "brands",
        link: "https://www.behance.net/gallery/51151157/Brand-Design-Codice",
        description:
          "A visual media company that takes inspiration in European medieval art requested a bran design that could encapsulate ideas",
      },
      {
        name: "Nike History",
        img: "nike",
        alt: "Nike prototype book",
        date: 2017,
        category: "editorial",
        link: "https://www.behance.net/gallery/43965347/Nike-Pieza-Editorial",
        description:
          "Book design for a college project based on Nike's history. The book contained diagrams, advertising pieces and interviews",
      },
      {
        name: "puto el que lee",
        img: "puto",
        alt: "Puto el que lee project",
        date: 2016,
        category: "editorial",
        link: "https://www.behance.net/gallery/43968125/Puto-el-que-lee-esto",
        description:
          "College project based on the exploration of editorial expression utilizing Fontanarossa's famous piece 'puto el que lee esto'",
      },
      {
        name: "MissingNo",
        img: "missingno",
        alt: "MissigNo Magazine",
        date: 2016,
        category: "editorial",
        link: "https://www.behance.net/gallery/43971821/Revista-MissingNo",
        description:
          "Proposed design for a magazine about video games and technology based on geek culture",
      },
      {
        name: "Smooth",
        img: "smooth",
        alt: "Smooth Prototype",
        date: 2016,
        category: "packaging",
        link: "https://www.behance.net/gallery/43968565/Tetrapak-Smooth",
        description:
          "Proposed design for a smoothie inspired product based on American 50s aesthetic and style",
      },
      {
        name: "Mom^2",
        img: "garnet",
        alt: "Garnet, Sapphire, and Ruby",
        date: 2016,
        category: "illustration",
        link: "https://www.behance.net/gallery/43969061/Mom2-Steven-Universe-Illustration",
        description:
          "Illustration of Steven Universe's characters: Garnet, Sapphire, and Ruby",
      },
      {
        name: "Xipotli",
        img: "xipotli",
        alt: "Xipotli Prototype",
        date: 2016,
        category: "packaging",
        link: "https://www.behance.net/gallery/43968787/Packaging-Xipotli",
        description:
          "Proposed design for a chipotle flavored mayonnaise packaging inspired in classic mexican culture.",
      },
      {
        name: "Nike Vintage",
        img: "vintage",
        alt: "Nike vintage Poster",
        date: 2016,
        category: "advertisement",
        link: "https://www.behance.net/gallery/43964673/Estilos-Graficos-Publicidad-Nike",
        description:
          "The collage was made using Argentinian illustrations from the beginning of the 20th century",
      },
      {
        name: "Nike Japanese Techno",
        img: "japanese",
        alt: "Nike Japanese Techno Poster",
        date: 2016,
        category: "advertisement",
        link: "https://www.behance.net/gallery/43964673/Estilos-Graficos-Publicidad-Nike",
        description:
          "A Japanese Pop Techno inspired poster for a Nike oriented project.",
      },
      {
        name: "Nike Organic",
        img: "organic",
        alt: "Nike Organic Poster",
        date: 2016,
        category: "advertisement",
        link: "https://www.behance.net/gallery/43964673/Estilos-Graficos-Publicidad-Nike",
        description: "An organic inspired poster for a Nike oriented project.",
      },
      {
        name: "Nike Techno",
        img: "techno",
        alt: "Nike Techno Poster",
        date: 2016,
        category: "advertisement",
        link: "https://www.behance.net/gallery/43964673/Estilos-Graficos-Publicidad-Nike",
        description: "A techno inspired poster for a Nike oriented project.",
      },
      {
        name: "Nike Garage",
        img: "garage",
        alt: "Nike Garage Poster",
        date: 2016,
        category: "advertisement",
        link: "https://www.behance.net/gallery/43964673/Estilos-Graficos-Publicidad-Nike",
        description: "A 90s inspired poster for a Nike oriented project.",
      },
      {
        name: "Nike Infography",
        img: "infography",
        alt: "Nike Infography Poster",
        date: 2016,
        category: "advertisement",
        link: "https://www.behance.net/gallery/43964673/Estilos-Graficos-Publicidad-Nike",
        description: "An infographic poster for a Nike oriented project.",
      },
      {
        name: "Nike Tangible",
        img: "material",
        alt: "Nike Tangible Poster",
        date: 2016,
        category: "advertisement",
        link: "https://www.behance.net/gallery/43964673/Estilos-Graficos-Publicidad-Nike",
        description:
          "A tangible poster for a Nike oriented project made with physical elements and digital retouching.",
      },
      {
        name: "Happy Never After",
        img: "marina",
        alt: "Nike Tangible Poster",
        date: 2016,
        category: "advertisement",
        link: "https://www.behance.net/gallery/43968357/Fan-CD-Marina-The-Diamonds",
        description:
          "A mock up of a fan made CD of singer and composer Marina Diamandis",
      },
    ];

    const selectedCategory = ref("all");

    return { categories, portfolioArray, selectedCategory };
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