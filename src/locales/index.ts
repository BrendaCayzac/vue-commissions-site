import { createI18n } from "vue-i18n";
import nav from "./en/nav.json";
import home from "./en/home.json";
import esNav from "./es/nav.json";
import esHome from "./es/home.json";
import frNav from "./fr/nav.json";
import frHome from "./fr/home.json";

const messages = {
  en: { ...nav, ...home },
  es: {
    ...esNav,
    ...esHome,
  },
  fr: {
    ...frNav,
    ...frHome,
  },
};

/* Languages */
const i18n = createI18n({
  globalInjection: true,
  locale: "en",
  messages,
});

export default i18n;
