import BlackFrugalList from './Components/FrugalList';
import NavBar from './Components/NavBar';
import React from 'react';
import './index.css';
import AddItem from './Components/AddNewItem';

/* Export from frugalList */

const App = () => {
  return (
    <div>
      <NavBar/>
      <BlackFrugalList/>
      <AddItem/>
    </div>
  );
}

export default App;
