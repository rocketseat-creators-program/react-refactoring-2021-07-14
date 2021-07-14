import React from 'react';
import Container from '@material-ui/core/Container';
import {AppProvider} from '../src/hooks'
import {GlobalStyle} from '../src/styles/GlobalStyle';
import {AppBar} from './components/AppBar/index';
import {Portal}  from '../src/pages/Portal';

function App() {
  return (
    <Container width="auto" >
      <GlobalStyle />
      <AppProvider>
        <AppBar />
        <Portal />
      </AppProvider>
    </Container>
  );
}

export default App;
