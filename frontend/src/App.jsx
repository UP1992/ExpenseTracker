import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import Income from './pages/Dashboard/Income';
import SignUp from './pages/Auth/SignUp';
import Login from './pages/Auth/Login';
import Home from './pages/Dashboard/Home';
import Expense from './pages/Dashboard/Expense';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Root />} /> 
          <Route path='/login' element={<Login />} />
          <Route path='/signUp' element={<SignUp />} />
          <Route path='/dashboard' element={<Home />} />
          <Route path='/income' element={<Income />} />
          <Route path='/expense' element={<Expense />} />
          <Route path='*' element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;

const Root = () => {
 
  //check if token exists in local storage
  const isAuthenticated = !!localStorage.getItem('token');  

  // Redirect based on authentication status
  return isAuthenticated ? <Navigate to="/dashboard" /> : <Navigate to="/login" />;

}