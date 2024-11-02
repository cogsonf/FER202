// src/App.js
import React from 'react';
import Header from './Components/Header';
import Carousel from './Components/Carousel';
import Footer from './Components/Footer';
import Special from './Components/Special';
import Trending from './Components/Trending';


function App() {
    return (
      <div style={{ backgroundColor: 'rgb(42, 45, 52)', minHeight: '100vh', color: 'white',}}>
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
    )
}

export default App;