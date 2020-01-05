import React from 'react';

import Header from './components/header/header';
import Headline from './components/headline/headline';

import './App.scss';

const tempArray = [
  {
    fName: 'Joe',
    lName: 'Doe',
    email: 'joe@gds.com',
    age: 18,
    onlineStatus: true
  }
];

function App() {
  return (
    <div className="App">
      <Header />
      <section className="container">
        <Headline
          header="Posts"
          desc="click the button to render posts"
          tempArray={tempArray}
        />
      </section>
    </div>
  );
}

export default App;
