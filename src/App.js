
import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import {Container} from 'react-bootstrap';
// import ContactScreen from './screens/ContactScreen';
// import Product from './components/Product';
import HomeScreen from './screens/HomeScreen';
import ContactScreen from './screens/ContactScreen';


function App() {
  return (
    <>
  <Header/>
  <main >
    <Container>
      <HomeScreen/>
    </Container>
     
  </main>
  <Footer/>
    </>
  );
}

export default App;
