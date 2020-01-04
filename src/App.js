import React from 'react';

import Header from './components/header/header';
import Headline from './components/headline/headline';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <section className="container">
        <Headline header="Posts" desc="click the button to render posts" />
      </section>
    </div>
  );
}

export default App;
