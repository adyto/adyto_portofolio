import React from 'react';

import { About, Footer, Header, Skills, Work } from './container';
import { Navbar } from './components';

const App = () => {
  return (
    <div className="bg-color-palette-1">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Footer />
    </div>
  );
};

export default App;
