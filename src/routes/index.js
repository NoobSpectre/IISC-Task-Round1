import { Routes as Router, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Page2 from '../pages/Page2';

const Routes = () => {
  return (
    <Router>
      <Route path="/" element={<Home />} />
      <Route path="/mode-choice" element={<Page2 />} />
    </Router>
  );
};

export default Routes;
