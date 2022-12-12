import BlackFrugalList from './Components/FrugalList';
import NavBar from './Components/NavBar';
import React from 'react';
import './index.css';
import ListForm from './Components/ListForm';

/* Export from frugalList */

const App = () => {
  return (
    <div>
      <NavBar/>
      <BlackFrugalList/>
      <ListForm/>
    </div>
  );
}

export default App;
