import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import StudentLogin from './components/StudentLogin';
import MentorLogin from './components/MentorLogin';
import RoleSelection from './components/RoleSelection';
import StudentSignupForm from './components/StudentSignup';
import MentorSignupForm from './components/MentorSignup';
import StudentDashboard from './components/StudentDashboard';
import MentorDashboard from './components/MentorDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login/student" element={<StudentLogin />} />
        <Route path="/login/mentor" element={<MentorLogin />} />
        <Route path="/signup" element={<RoleSelection />} />
        <Route path="/signup/student" element={<StudentSignupForm />} />
        <Route path="/signup/mentor" element={<MentorSignupForm />} />
        <Route path="/dashboard/student" element={<StudentDashboard />} />
        <Route path="/dashboard/mentor" element={<MentorDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;