import { createI18n } from "vue-i18n";
import en from "./en.json";
import es from "./es.json";
import fr from "./fr.json";

const messages = {
  en: en,
  es: es,
  fr: fr,
};

/* Languages */
const i18n = createI18n({
  globalInjection: true,
  allowComposition: true,
  locale: "en",
  messages,
});

export default i18n;
