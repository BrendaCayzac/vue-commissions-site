<template>
  <button @click="toggleSection">
    {{ $t(title) }} <font-awesome-icon :icon="fontAwesomeIcon" />
  </button>
  <Transition name="slide">
    <div class="price-section" v-if="showSection">
      <article v-for="(category, i) in categories" :key="i">
        <figure v-if="category.file">
          <img
            :src="getImgUrl(category.file, 'png')"
            :alt="$t('Example of') + ' ' + $t(category.alt)"
          />
        </figure>
        <div>
          <h4>{{ $t(category.title) }}</h4>
          <p v-for="(price, i) in category.prices" :key="i">
            <strong>{{ $t(price.text) }}:</strong> {{ price.price }}
          </p>
        </div>
      </article>
    </div>
  </Transition>
</template>

<script lang="ts">
import { defineComponent, ref, PropType } from "vue";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { getImgUrl } from "@/helpers/getImage";

interface CategoryType {
  title: string;
  file?: string;
  alt?: string;
  prices: Array<unknown>;
}

export default defineComponent({
  name: "CommissionsView",
  components: { FontAwesomeIcon },

  props: {
    categories: {
      required: true,
      type: Array as PropType<Array<CategoryType>>,
    },

    title: {
      type: String,
      required: true,
    },
  },

  setup() {
    const fontAwesomeIcon = ref("fa-solid fa-plus");
    const showSection = ref(false);

    const toggleSection = () => {
      showSection.value = !showSection.value;
      !showSection.value
        ? (fontAwesomeIcon.value = "fa-solid fa-plus")
        : (fontAwesomeIcon.value = "fa-solid fa-minus");
    };

    return {
      fontAwesomeIcon,
      getImgUrl,
      showSection,
      toggleSection,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "src/styles/custom";

button {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border: none;
  background-color: #ffffff;
  padding: 1rem;
  font-size: 1rem;
  -webkit-box-shadow: 0 0 5px -1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0 0 5px -1px rgba(0, 0, 0, 0.75);
  box-shadow: 0 0 5px -1px rgba(0, 0, 0, 0.75);
  position: relative;
  z-index: 5;
  svg {
    font-size: 1.5rem;
  }
}

.slide-enter-active {
  transition: all 0.3s ease;
}

.slide-leave-active {
  transition: all 0.45s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateY(-2.5rem);
}

.price-section {
  article {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem 0.5rem 3rem;
    background-color: $bc-cyan;

    figure {
      width: 100%;

      img {
        width: 100%;
      }
    }

    div {
      text-align: center;
      margin-top: 1rem;
      color: #ffffff;
      h4 {
        font-weight: 200;
        font-size: 2rem;
        margin-bottom: 0.5rem;

        p {
          margin: 0.5rem auto;
        }
      }
    }

    &:nth-child(even) {
      background-color: #ffffff;
      div {
        color: $bc-gray;
      }
    }
  }
}

/* Tablet */
@media (min-width: $tablet) {
  .commissions {
    article {
      padding-left: 1rem;
      padding-right: 1rem;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: flex-start;
      figure {
        width: 18em;
      }
      div {
        text-align: left;
        margin-left: 1rem;
      }
    }
  }
}

/* Desktop */
@media (min-width: $desktop-small) {
  .commissions {
    article {
      padding-left: 1.5rem;
      padding-right: 1.5rem;
      figure {
        width: 25em;
      }
    }
  }
}
</style>
