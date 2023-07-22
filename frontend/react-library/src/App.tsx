import React from 'react';
import './App.css';
import { Navbar } from './layouts/NavbarAndFooter/Navbar';
import { ExploreTopBooks } from './layouts/HomePage/ExploreTopBooks';
import { Carrousel } from './layouts/HomePage/Carrousel';
import { Heros } from './layouts/HomePage/Heros';

function App() {
  return (
    <div>
      <Navbar />
      <ExploreTopBooks />
      <Carrousel />
      <Heros />
    </div>
  );
}

export default App;
