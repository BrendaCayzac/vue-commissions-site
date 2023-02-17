<template>
  <transition name="slide-fade">
    <aside v-if="needsRefresh"  class="refresh-window">
      <p>
        {{ $t("There is") }} <span>{{ $t("new content") }}</span>
        {{ $t("available") }}.
      </p>
      <div>
        <button type="button" class="focus" @click="reload">
          {{ $t("Reload") }}
        </button>
        <button type="button" @click="close">{{ $t("Close") }}</button>
      </div>
    </aside>
  </transition>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "ReloadWindow",

  setup() {
    const registration = ref(null);
    const needsRefresh = ref(false);

    const showRefreshUI = (e: any) => {
      console.log(typeof e, e);
      registration.value = e.detail;
      needsRefresh.value = true;
      // My code to show the refresh UI banner/snackbar goes here.
    };

    const reload = () => {
      window.location.reload(true);
    };

    const close = () => {
      needsRefresh.value = false;
    };

    document.addEventListener("swUpdated", showRefreshUI);

    return { reload, close, needsRefresh };
  },
});
</script>

<style lang="scss" scoped>
@import "src/styles/custom";

/* Vue Transition */
.slide-fade-enter-active {
  transition: all 0.35s ease-out;
}
.slide-fade-leave-active {
  transition: all 0.35s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(3.125rem);
  opacity: 0;
}

.refresh-window {
  position: absolute;
  bottom: 0.625rem;
  right: 0.625rem;
  width: calc(100% - 20px);
  padding: 0.625rem;
  border: solid 1px $bc-magenta;
	background-color: #ffffff;
  p {
    span {
      color: $bc-magenta;
      font-weight: bold;
    }
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 0.625rem;
    gap: 0.625rem;

    button {
      border: solid 1px $bc-magenta;
      padding: 0.3125rem 0;
      width: 5rem;
      background-color: #ffffff;
      cursor: pointer;

      &:hover,
      &:focus {
        outline: 1px solid $bc-magenta;
      }
    }
    .focus {
      background-color: $bc-magenta;
      color: #ffffff;
      font-weight: bold;
      &:hover,
      &:focus {
        background-color: #ffffff;
        color: $bc-magenta;
      }
    }
  }
}

@media (min-width: $mobile) {
  .refresh-window {
    width: 18rem;
  }
}
</style>
