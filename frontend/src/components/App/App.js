import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Home } from '../Home/Home'
import './App.css';

export const App = () => {
  return (
    <Router>
      <Routes>
          <Route path="/breed" />
          <Route path="/connect" />
          <Route path="/" element={<Home />} />
        </Routes>
    </Router>
  );
};
