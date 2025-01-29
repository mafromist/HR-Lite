import { store } from '../store/store.js';
import { en } from '../locales/en.js';
import { tr } from '../locales/tr.js';

const translations = {
  en,
  tr,
};

const getNestedValue = (obj, path) => {
  return path.split('.').reduce((acc, part) => {
    return acc && acc[part] !== undefined ? acc[part] : null;
  }, obj);
};

export const translate = (key) => {
  const currentLanguage = store.fetchLanguage();

  if (!translations[currentLanguage]) {
    console.error(
      `Translation for language "${currentLanguage}" is not available.`
    );
    return key;
  }
  const translation = getNestedValue(translations[currentLanguage], key);

  if (!translation) {
    console.error(`Translation for key "${key}" is not available.`);
    return key;
  }

  return translation;
};
