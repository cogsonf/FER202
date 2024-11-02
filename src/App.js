// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Carousel from './Components/Carousel';
import Footer from './Components/Footer';
import Special from './Components/Special';
import Trending from './Components/Trending';
// import Home from './Components/Home'; // Import trang Home
import ConcertDetail from './Components/ConcertDetail'; // Import trang chi tiết concert

function App() {
    return (
        <div style={{ backgroundColor: 'rgb(42, 45, 52)', minHeight: '100vh', color: 'white' }}>
            <Router>
                <div style={{ marginBottom: '50px' }}>
                    <Header />
                </div>
                <Routes>
                    <Route path="/" element={
                        <>
                            <Carousel />
                            <Special />
                            <Trending />
                        </>
                    } />
                    <Route path="/concert/:id" element={<ConcertDetail />} />
                </Routes>
                <div>
                    <Footer />
                </div>
            </Router>
        </div>
    );
}

export default App;