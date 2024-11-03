// src/Components/MainPage.js
import React from 'react';
import Carousel from './Carousel';
import Footer from './Footer';
import Header from './Header';
import Special from './Special';
import Trending from './Trending';

const MainPage = () => {
  return (
    <div style={{ backgroundColor: 'rgb(42, 45, 52)', minHeight: '100vh', color: 'white' }}>
      <div style={{ marginBottom: '50px' }}>
        <Header />
      </div>
      <div style={{ marginBottom: '50px' }}>
        <Carousel />
      </div>
      <div style={{ marginBottom: '50px' }}>
        <Special />
      </div>
      <div style={{ marginBottom: '50px' }}>
        <Trending />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default MainPage;
