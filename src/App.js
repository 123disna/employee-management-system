import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import ListEmployees from './components/ListEmployees';
import Navigation from './components/Navigation';
import EmployeeForm from './components/EmployeeForm';
import Hero from './components/Hero';
import Story from './components/Story';
import Support from './components/Support';
import Footer from './components/Footer';
import LoginForm from './components/LoginForm';
import AdminForm from './components/AdminForm';
import Dashboard from './components/Dashboard';

const App = () => {
  const location = useLocation();

  // Define the paths where you want to show the full layout with Navigation
  const withNavPaths = ['/', '/story', '/support'];
  // Define the paths where you want to show the Hero, Story, Support, and Footer sections
  const homePagePaths = ['/'];

  return (
    <div>
      {withNavPaths.includes(location.pathname) && <Navigation />}
      {homePagePaths.includes(location.pathname) ? (
        <>
          <Hero />
          <Story />
          <Support />
          <Footer />
        </>
      ) : (
        <div>
          <Routes>
            <Route path='/employees' element={<ListEmployees />} />
            <Route path='/add-employee' element={<EmployeeForm />} />
            <Route path='/edit-employee/:id' element={<EmployeeForm />} />
            <Route path='/loginform' element={<LoginForm />} />
            <Route path='/addAdminForm' element={<AdminForm/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
          </Routes>
        </div>
      )}
    </div>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
