import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import i18n from "./locales/index";
/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
  faLinkedinIn,
  faLinkedin,
  faTwitter,
  faGithub,
  faGithubSquare,
  faBehance,
  faBehanceSquare,
} from "@fortawesome/free-brands-svg-icons";

import {
  faGlobe,
  faQuoteRight,
  faQuoteLeft,
  faChevronRight,
  faChevronUp,
  faMinus,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(
  faBehance,
  faBehanceSquare,
  faChevronRight,
  faChevronUp,
  faGithub,
  faGithubSquare,
  faGlobe,
  faLinkedinIn,
  faLinkedin,
  faMinus,
  faPlus,
  faQuoteRight,
  faQuoteLeft,
  faTwitter
);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(store)
  .use(router)
  .use(i18n)
  .mount("#app");
