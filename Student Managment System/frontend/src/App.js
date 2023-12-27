import './App.css';
import Header from './components/Header';
import AddStudent from './components/AddStudent';
import AllStudent from './components/AllStudent';
import StudentDetails from './components/StudentDetails';
import EditStudent from './components/EditStudent';
import Courses from './components/Courses';
import Enrollment from './components/Enrollment';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/add" element={<AddStudent />} />
          <Route path="/details/:id" element={<StudentDetails />} />
          <Route path="/edit/:id" element={<EditStudent />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/enroll" element={<Enrollment />} />
          <Route path="/" element={<AllStudent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
