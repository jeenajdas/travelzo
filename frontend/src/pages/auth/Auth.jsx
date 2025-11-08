import { useState } from 'react';
import Login from './Login';
import Signup from './Signup';
import ForgotPassword from './ForgotPassword';

const Auth = () => {
  const [currentPage, setCurrentPage] = useState('login');

  if (currentPage === 'login') {
    return <Login setCurrentPage={setCurrentPage} />;
  } else if (currentPage === 'signup') {
    return <Signup setCurrentPage={setCurrentPage} />;
  } else if (currentPage === 'forgot') {
    return <ForgotPassword setCurrentPage={setCurrentPage} />;
  }
};

export default Auth;