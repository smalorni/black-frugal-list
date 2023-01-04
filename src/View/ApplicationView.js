import { Route, Routes, Router } from 'react-router-dom';
import { BlackFrugalList } from './Components/FrugalList';

const ApplicationView = () => {
  return (
    <Router>
    <div>
        <Routes>
        <Route path="/" element={<BlackFrugalList />} />
      </Routes>
      
    </div>
    </Router>
  
      
  );
}

export default ApplicationView;