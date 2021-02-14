import { useContext } from 'react';
import TranslateContext from '../TranslateContext';

export default () => {
  const { translate, locale } = useContext(TranslateContext);
  return [locale, translate];
};
