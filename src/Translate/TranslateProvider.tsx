import React, { useCallback, useEffect, useMemo, useState } from 'react';
import TranslateContext from './TranslateContext';
import { ITranslateContextProps, Locale, Translate, TranslateParams } from './types';
import TranslationReader, { IReader } from './TranslationReader';
import memoize from 'lodash/memoize';

interface IProps extends ITranslateContextProps {}

export const translateFunc = memoize(
  (key, params: TranslateParams | undefined, translationReader: IReader | undefined) =>
    translationReader ? translationReader.get(key, params) : '',
);

const TranslateProvider: React.FC<IProps> = ({ children, locale, translate }) => {
  const [translationReader, setTranslationReader] = useState<IReader>();
  const [currentLocale, setCurrentLanguage] = useState(locale);

  const initLocalize = useCallback((locale: Locale, translate: Translate) => {
    if (translateFunc.cache.clear) {
      translateFunc.cache.clear();
    }
    const translationReader = new TranslationReader();
    translationReader.init({
      locale,
      translate,
    });
    setTranslationReader(translationReader);
  }, []);

  const handleChangeLocale = useCallback((nextLocale: Locale) => {
    setCurrentLanguage(nextLocale);
  }, []);

  useEffect(() => {
    if (translate !== undefined) {
      initLocalize(currentLocale, translate);
    }
  }, [currentLocale, initLocalize]);

  const value = useMemo<ITranslateContextProps>(() => {
    return {
      locale: currentLocale,
      translate: (translationKey, params) => translateFunc(translationKey, params, translationReader),
      changeLocale: handleChangeLocale,
    };
  }, [currentLocale, translate, translationReader]);

  return <TranslateContext.Provider value={value}>{children}</TranslateContext.Provider>;
};

export default TranslateProvider;
