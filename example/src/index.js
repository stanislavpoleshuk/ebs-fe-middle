import React, { useState } from 'react';
import { render } from 'react-dom';
import translate from './resources/translations.json';
import { IntlProvider } from 'ebs-intl';
import AppComponent from './AppComponent';

const App = () => {
  const [defaultLocale] = useState('ru');
  return (
    <IntlProvider translate={translate} locale={defaultLocale}>
      <AppComponent>
        <div>asdasd</div>
      </AppComponent>
    </IntlProvider>
  );
};

render(<App />, document.getElementById('root'));
