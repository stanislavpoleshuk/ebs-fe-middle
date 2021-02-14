import { Locale, Translate, TranslateParams } from './types';

type ConfigType = {
  locale: Locale;
  translate: Translate;
};

export interface IReader {
  init: (config: ConfigType) => void;
  get: (key: string, params?: TranslateParams) => string;
}

class TranslationReader implements IReader {
  private locale: Locale;
  private translate: Translate;

  init(config: ConfigType) {
    const { locale, translate } = config;
    this.locale = locale;
    this.translate = translate;
  }

  get(key: string, params?: TranslateParams): string {
    if (!this.locale) {
      return key;
    }
    if (!this.translate) {
      return key;
    }

    const translateObj = this.translate[key];
    if (!translateObj) {
      return key;
    }
    const field = translateObj[this.locale];
    if (!params) {
      return field;
    }

    // for (const [key, value] of Object.entries(params)) {
    //   console.log(field.replace(new RegExp(`\\w*{${key}}\\w*`, 'g'), value));
    // }

    return Object.entries(params).reduce((accumulator, current) => {
      const [key, value] = current;
      return accumulator.replace(new RegExp(`\\w*{${key}}\\w*`, 'g'), value);
    }, field);
  }
}

export default TranslationReader;
