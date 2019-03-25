import React from 'react';
import ReactDOM from 'react-dom';
import './CSS/index.css';
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './components/StyleComponents/GlobalStyle'
import theme from './components/StyleComponents/theme'

import App from './App';

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <App />
      </>
    </ThemeProvider>

  )
}

ReactDOM.render(<Root />, document.getElementById('root'));
