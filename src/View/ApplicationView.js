import { Route, Routes, Router } from 'react-router-dom';
import { BlackFrugalList } from './Components/FrugalList';
import { ListForm } from './Components/ListForm';

const ApplicationView = () => {
  return (
    <Router>
    <div>
        <Routes>
        <Route path="/" element={<BlackFrugalList />} />
        <Route path="/lists/new" element={<ListForm />} />
      </Routes>
      
    </div>
    </Router>
  
      
  );
}

export default ApplicationView;