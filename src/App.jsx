import React from 'react';
import './App.css';
import FilterMenu from './components/FilterMenu';
import { data } from './data.json';

function App() {
  return (
    <div>
      <FilterMenu data={data} />
    </div>
  );
}

export default App;
