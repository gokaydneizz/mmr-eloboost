import React from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Packageboosts from '../components/Package-Boosts/Packageboosts';
import Privacy from '../components/Privacy/Privacy';
import Services from '../components/Services/Services';

const HomePage = () => {
  return (
    <div>
      <Header />
      <Services />
      <Packageboosts />
      <Privacy />
      <Footer />
    </div>
  );
};

export default HomePage;
