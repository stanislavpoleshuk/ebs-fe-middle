import React from 'react';
import { ITranslateContextProps } from './types';

const TranslateContext = React.createContext<ITranslateContextProps>({
  locale: 'en',
  translate: undefined,
});

export default TranslateContext;
