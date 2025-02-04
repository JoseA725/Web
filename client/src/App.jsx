import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainRouter from '../MainRouter';
import Layout from '../components/Layout';

const App = () => {
  return (
    <Router>
      <Layout />
      <MainRouter />
    </Router>
  );
};
  
export default App;
