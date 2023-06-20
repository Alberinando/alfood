import React from 'react';
import Banner from '../../component/Banner';
import ListaRestaurantes from '../../component/ListaRestaurantes';
import NavBar from '../../component/NavBar';
import Rodape from '../../component/Rodape';

function App() {
  return (
    <>
      <NavBar />
      <Banner />
      <ListaRestaurantes />
      <Rodape />
    </>
  );
}

export default App;
