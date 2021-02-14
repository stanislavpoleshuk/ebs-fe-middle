import { useContext } from 'react';
import TranslateContext from './TranslateContext';

export default () => {
  const { changeLocale } = useContext(TranslateContext);
  return changeLocale;
};
