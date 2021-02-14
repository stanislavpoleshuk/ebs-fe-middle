import React, { useState } from 'react';
import { render } from 'react-dom';
import translate from './resources/translations.json';
import { IntlProvider } from 'ebs-intl';
import AppComponent from './AppComponent';

const App = () => {
  const [defaultLocale] = useState('en');
  return (
    <IntlProvider translate={translate} locale={defaultLocale}>
      <AppComponent />
    </IntlProvider>
  );
};

render(<App />, document.getElementById('root'));
