import BlackFrugalList from './Components/FrugalList';
import NavBar from './Components/NavBar';
import React from 'react';
import './index.css';
import AddItem from './Components/AddNewItem';


//this is how the app is viewed on page from components - should be in order of how it appears on page

const App = () => {
  return (
    <div>
      <NavBar/>
      <AddItem/>
      <BlackFrugalList/>
      
      
    </div>
  );
}

export default App;
