import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { App } from './Components/App/App';
import { store } from './redux/store';
import './index.css';
import 'modern-normalize/modern-normalize.css';
import { ThemeProvider } from '@emotion/react';
import { theme } from 'constants/theme';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
