<template>
  <div v-if="offlineReady || refreshing" class="flex flex-wrap" role="alert">
    <div class="message mt-1">
      <span v-if="offlineReady"> App ready to work offline </span>
      <span v-else
        >New content available, click on reload button to update.</span
      >
    </div>
    <div class="buttons flex align-middle mt-2 md:mt-0">
      <button v-if="refreshing" @click="refreshApp" class="button">
        Reload
      </button>
      <button @click="close" class="button">Close</button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, Ref } from "vue";

export default defineComponent({
  name: "RefreshWindow",
  setup() {
    const refreshing = ref(false);
    const registration: any = ref(null);
    const offlineReady = ref(false);

    const close = async () => {
      offlineReady.value = false;
      refreshing.value = false;
    };

    const showRefreshUI = (e: any) => {
      console.log("here?");
      registration.value = e.detail;
      refreshing.value = true;
    };

    const refreshApp = () => {
      refreshing.value = false;
      if (!registration.value || !registration.value.waiting) {
        return;
      } else {
        registration.value.waiting.postMessage("skipWaiting");
      }
    };

    document.addEventListener("swUpdated", showRefreshUI, { once: true });
    if (navigator.serviceWorker) {
      navigator.serviceWorker.addEventListener("controllerchange", () => {
        if (refreshing.value) return;
        refreshing.value = true;
        window.location.reload();
      });
    }

    return { refreshing, refreshApp, offlineReady, close };
  },
});
</script>
