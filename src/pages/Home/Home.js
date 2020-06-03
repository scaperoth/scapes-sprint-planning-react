import React from 'react';
import FullHeightContainer from '../../components/FullHeightContainer';
import HeroBanner from '../../components/HeroBanner';
import Footer from '../../components/Footer';

import './Home.scss';

const Home = () => (
  <FullHeightContainer>
    <HeroBanner />
    <Footer />
  </FullHeightContainer>
);

export default Home;
