import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';
import { NavBar } from './pages';
import { Home } from './pages';
import { EBook } from './pages';
import { AboutMe } from './pages';
import { Projects } from './pages';
import { Contact } from './pages';
import { Footer } from './pages';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar/>
      <Home/>
      <EBook/>
      <AboutMe/>
      <Projects/>
      <Contact/>
      <Footer/>
      <GlobalStyle/>
    </ThemeProvider>
  );
}

export default App;
