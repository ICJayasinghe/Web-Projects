import './App.css';
import Header from './components/Header';
import AddStudent from './components/AddStudent';
import AllStudent from './components/AllStudent';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/add" element={<AddStudent />} />
          <Route path='/' element={<AllStudent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
