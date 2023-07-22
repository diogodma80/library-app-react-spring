import React from 'react';
import './App.css';
import { Navbar } from './layouts/NavbarAndFooter/Navbar';
import { ExploreTopBooks } from './layouts/HomePage/ExploreTopBooks';
import { Carrousel } from './layouts/HomePage/Carrousel';

function App() {
  return (
    <div>
      <Navbar />
      <ExploreTopBooks />
      <Carrousel />
    </div>
  );
}

export default App;
