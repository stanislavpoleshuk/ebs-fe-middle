export type Locale = 'en' | 'ru' | 'ro';

export type TranslateParams = { [key: string]: string };

export type Translate = (key: string, params?: TranslateParams) => string;

export interface ITranslateContextProps {
  locale: Locale;
  translate?: Translate | undefined;
  changeLocale?: (nextLocale: Locale) => void;
}

export const Languages: Array<string> = ['en', 'ru', 'ro'];
