import React from 'react';
import AppWrapper from './layout-components/AppWrapper';
import GlobalStyles from './global-styles';
import Header from './layout-components/Header';
import Chat from './components/Chat';

function App() {
  return (
    <>
      <GlobalStyles />
      <AppWrapper>
        <Header />
        <Chat />
      </AppWrapper>
    </>
  );
}

export default App;
