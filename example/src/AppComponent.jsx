import React, { useCallback, useMemo } from 'react';
import { useTranslate, Languages, useChangeLocale } from 'ebs-intl';
import LanguageItem from './LanguageItem';

const AppComponent = () => {
  const [, translate] = useTranslate();
  const changeLocale = useChangeLocale();
  const handleLanguage = useCallback(
    (language) => {
      changeLocale(language);
    },
    [changeLocale],
  );

  const languageSelector = useMemo(() => {
    return (
      <div>
        {Languages.map((x) => {
          return <LanguageItem key={x} item={x} onPress={handleLanguage} />;
        })}
      </div>
    );
  }, [handleLanguage]);

  return (
    <div>
      <div>{translate('selectLanguage')}</div>
      {languageSelector}
      <br /> <br />
      <div>{translate('hello')}</div>
      <div>{translate('greeting', { name: 'Stanislav', t2: 'тест_2', t3: 'тест_3' })}</div>
    </div>
  );
};

export default AppComponent;
