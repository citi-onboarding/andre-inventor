import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';
import { EBook } from './pages';
import { NavBar } from './pages';
import { Home } from './pages';
import { Footer } from './pages/footer';
import { AboutMe } from './pages';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar/>
      <Home/>
      <EBook/>
      <AboutMe/>
      <Footer/>
      <GlobalStyle/>
    </ThemeProvider>
  );
}

export default App;
